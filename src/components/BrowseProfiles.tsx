
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useAuthStore } from '@/store/authStore';
import { MapPin, Phone, Calendar, MessageCircle, Star, Heart, Zap } from 'lucide-react';
import { toast } from 'sonner';
import ChatModal from './ChatModal';
import SkillSearch from './SkillSearch';
import { getMatchedUsers, searchUsersBySkill, MatchScore } from '@/utils/matchmaking';

const BrowseProfiles = () => {
  const { getAllUsers, currentUser } = useAuthStore();
  const allUsers = getAllUsers();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'recommended' | 'all' | 'search'>('recommended');

  const displayedUsers = useMemo(() => {
    if (!currentUser) return [];

    if (viewMode === 'search' && searchTerm) {
      return searchUsersBySkill(searchTerm, allUsers).map(user => ({
        user,
        score: 0,
        matchReasons: []
      }));
    } else if (viewMode === 'recommended') {
      return getMatchedUsers(currentUser, allUsers, 20);
    } else {
      return allUsers.map(user => ({
        user,
        score: 0,
        matchReasons: []
      }));
    }
  }, [currentUser, allUsers, searchTerm, viewMode]);

  const handleConnect = (user: any) => {
    toast.success(`${user.name || user.username} has accepted your connection request!`, {
      description: 'You can now start chatting and sharing skills.',
      action: {
        label: 'Start Chat',
        onClick: () => {
          setSelectedUser(user);
          setIsChatOpen(true);
        },
      },
    });
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setViewMode(term ? 'search' : 'recommended');
  };

  const parseSkills = (skills: string | undefined) => {
    if (!skills) return [];
    return skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Discover Skill Swappers
          </h2>
          <p className="text-gray-600">Connect with amazing people and expand your skillset</p>
        </div>

        <div className="flex flex-col space-y-4">
          <SkillSearch
            onSearch={handleSearch}
            placeholder="Search by skills, name, or expertise..."
          />
          
          <div className="flex space-x-2">
            <Button
              onClick={() => {setViewMode('recommended'); setSearchTerm('');}}
              variant={viewMode === 'recommended' ? 'default' : 'outline'}
              size="sm"
              className="flex items-center space-x-1"
            >
              <Heart className="w-4 h-4" />
              <span>Recommended</span>
            </Button>
            <Button
              onClick={() => {setViewMode('all'); setSearchTerm('');}}
              variant={viewMode === 'all' ? 'default' : 'outline'}
              size="sm"
            >
              All Profiles
            </Button>
          </div>
        </div>

        {displayedUsers.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm ? 'No matching profiles found' : 'No other users yet'}
            </h3>
            <p className="text-gray-500">
              {searchTerm ? 'Try searching for different skills' : 'Be the first to create a profile and start connecting!'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedUsers.map(({ user, score, matchReasons }) => (
              <Card key={user.username} className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white hover:transform hover:-translate-y-2 hover:scale-105 group relative overflow-hidden">
                {viewMode === 'recommended' && score > 0 && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                    <Zap className="w-3 h-3" />
                    <span>{score}% Match</span>
                  </div>
                )}

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <Avatar className="w-12 h-12 border-2 border-blue-200">
                        <AvatarImage src={user.avatar} alt={user.name || user.username} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-bold">
                          {(user.name || user.username).charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {user.name || user.username}
                        </CardTitle>
                        <CardDescription className="text-gray-500">
                          @{user.username}
                        </CardDescription>
                        {user.totalReviews > 0 && (
                          <div className="flex items-center space-x-1 mt-1">
                            <div className="flex">
                              {renderStars(user.averageRating)}
                            </div>
                            <span className="text-xs text-gray-500">
                              ({user.totalReviews} review{user.totalReviews !== 1 ? 's' : ''})
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {user.bio && (
                    <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg">{user.bio}</p>
                  )}

                  {viewMode === 'recommended' && matchReasons.length > 0 && (
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                      <h5 className="text-xs font-semibold text-blue-700 mb-1">Why this match:</h5>
                      {matchReasons.slice(0, 2).map((reason, index) => (
                        <p key={index} className="text-xs text-blue-600">• {reason}</p>
                      ))}
                    </div>
                  )}
                  
                  <div className="space-y-2 text-sm">
                    {user.city && (
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{user.city}</span>
                      </div>
                    )}
                    
                    {user.age && (
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-green-500" />
                        <span>{user.age} years old</span>
                      </div>
                    )}
                    
                    {user.phone && (
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2 text-purple-500" />
                        <span>{user.phone}</span>
                      </div>
                    )}
                  </div>

                  {user.skillsKnown && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Can teach:</h4>
                      <div className="flex flex-wrap gap-1">
                        {parseSkills(user.skillsKnown).slice(0, 3).map((skill, index) => (
                          <Badge key={index} className="text-xs bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                        {parseSkills(user.skillsKnown).length > 3 && (
                          <Badge variant="outline" className="text-xs text-gray-500">
                            +{parseSkills(user.skillsKnown).length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {user.skillsToLearn && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Wants to learn:</h4>
                      <div className="flex flex-wrap gap-1">
                        {parseSkills(user.skillsToLearn).slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                        {parseSkills(user.skillsToLearn).length > 3 && (
                          <Badge variant="outline" className="text-xs text-gray-500">
                            +{parseSkills(user.skillsToLearn).length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {user.reviews && user.reviews.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm">Recent Review:</h4>
                      <div className="bg-yellow-50 p-2 rounded-lg border border-yellow-200">
                        <div className="flex items-center space-x-1 mb-1">
                          {renderStars(user.reviews[user.reviews.length - 1].rating)}
                          <span className="text-xs text-gray-600">
                            - {user.reviews[user.reviews.length - 1].reviewerName}
                          </span>
                        </div>
                        <p className="text-xs text-gray-700 italic">
                          "{user.reviews[user.reviews.length - 1].comment.substring(0, 60)}..."
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      onClick={() => handleConnect(user)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-200"
                      size="sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Connect & Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {selectedUser && (
        <ChatModal
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={selectedUser}
          currentUser={currentUser?.username || ''}
        />
      )}
    </>
  );
};

export default BrowseProfiles;
