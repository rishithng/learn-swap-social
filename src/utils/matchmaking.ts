
import { User } from '@/data/userData';

export interface MatchScore {
  user: User;
  score: number;
  matchReasons: string[];
}

export const calculateMatchScore = (currentUser: User, targetUser: User): MatchScore => {
  let score = 0;
  const matchReasons: string[] = [];

  if (!currentUser.skillsKnown || !currentUser.skillsToLearn || !targetUser.skillsKnown || !targetUser.skillsToLearn) {
    return { user: targetUser, score: 0, matchReasons: [] };
  }

  const currentUserKnows = currentUser.skillsKnown.toLowerCase().split(',').map(s => s.trim());
  const currentUserWants = currentUser.skillsToLearn.toLowerCase().split(',').map(s => s.trim());
  const targetUserKnows = targetUser.skillsKnown.toLowerCase().split(',').map(s => s.trim());
  const targetUserWants = targetUser.skillsToLearn.toLowerCase().split(',').map(s => s.trim());

  // Perfect matches (what current user wants to learn, target user knows)
  const perfectMatches = currentUserWants.filter(skill => 
    targetUserKnows.some(targetSkill => targetSkill.includes(skill) || skill.includes(targetSkill))
  );
  score += perfectMatches.length * 10;
  if (perfectMatches.length > 0) {
    matchReasons.push(`Can teach you: ${perfectMatches.join(', ')}`);
  }

  // Reverse matches (what current user knows, target user wants to learn)
  const reverseMatches = currentUserKnows.filter(skill => 
    targetUserWants.some(targetSkill => targetSkill.includes(skill) || skill.includes(targetSkill))
  );
  score += reverseMatches.length * 8;
  if (reverseMatches.length > 0) {
    matchReasons.push(`You can teach: ${reverseMatches.join(', ')}`);
  }

  // Similar interests (both want to learn similar things)
  const commonInterests = currentUserWants.filter(skill => 
    targetUserWants.some(targetSkill => targetSkill.includes(skill) || skill.includes(targetSkill))
  );
  score += commonInterests.length * 3;
  if (commonInterests.length > 0) {
    matchReasons.push(`Shared learning interests: ${commonInterests.join(', ')}`);
  }

  // Location bonus
  if (currentUser.city && targetUser.city && currentUser.city === targetUser.city) {
    score += 5;
    matchReasons.push(`Same city: ${currentUser.city}`);
  }

  // Age compatibility (within 10 years)
  if (currentUser.age && targetUser.age && Math.abs(currentUser.age - targetUser.age) <= 10) {
    score += 2;
  }

  // Rating bonus
  if (targetUser.averageRating > 4) {
    score += 3;
    matchReasons.push(`Highly rated teacher (${targetUser.averageRating}★)`);
  }

  return { user: targetUser, score, matchReasons };
};

export const getMatchedUsers = (currentUser: User, allUsers: User[], limit: number = 10): MatchScore[] => {
  const matches = allUsers
    .filter(user => user.username !== currentUser.username)
    .map(user => calculateMatchScore(currentUser, user))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return matches;
};

export const searchUsersBySkill = (searchTerm: string, allUsers: User[]): User[] => {
  const term = searchTerm.toLowerCase().trim();
  
  return allUsers.filter(user => {
    const skillsKnown = (user.skillsKnown || '').toLowerCase();
    const skillsToLearn = (user.skillsToLearn || '').toLowerCase();
    const name = (user.name || '').toLowerCase();
    const bio = (user.bio || '').toLowerCase();
    
    return skillsKnown.includes(term) || 
           skillsToLearn.includes(term) || 
           name.includes(term) || 
           bio.includes(term);
  });
};
