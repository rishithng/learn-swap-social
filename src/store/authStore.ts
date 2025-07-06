
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Review, mockUsers, mockCredentials } from '@/data/userData';

interface AuthStore {
  isAuthenticated: boolean;
  currentUser: User | null;
  users: User[];
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (profileData: Partial<User>) => void;
  getAllUsers: () => User[];
  addReview: (targetUsername: string, review: Omit<Review, 'id' | 'date'>) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      currentUser: null,
      users: mockUsers,
      
      login: (username: string, password: string) => {
        const correctPassword = mockCredentials.get(username);
        if (correctPassword && correctPassword === password) {
          const user = get().users.find(u => u.username === username) || { 
            username, 
            reviews: [], 
            averageRating: 0, 
            totalReviews: 0 
          };
          set({ isAuthenticated: true, currentUser: user });
          return true;
        }
        return false;
      },
      
      register: (username: string, password: string) => {
        if (mockCredentials.has(username)) {
          return false;
        }
        mockCredentials.set(username, password);
        const newUser: User = { 
          username, 
          reviews: [], 
          averageRating: 0, 
          totalReviews: 0 
        };
        set(state => ({
          users: [...state.users, newUser],
          isAuthenticated: true,
          currentUser: newUser
        }));
        return true;
      },
      
      logout: () => {
        set({ isAuthenticated: false, currentUser: null });
      },
      
      updateProfile: (profileData: Partial<User>) => {
        const currentUser = get().currentUser;
        if (!currentUser) return;
        
        const updatedUser = { ...currentUser, ...profileData };
        const updatedUsers = get().users.map(user =>
          user.username === currentUser.username ? updatedUser : user
        );
        
        set({
          currentUser: updatedUser,
          users: updatedUsers
        });
      },
      
      getAllUsers: () => {
        return get().users.filter(user => user.username !== get().currentUser?.username);
      },

      addReview: (targetUsername: string, review: Omit<Review, 'id' | 'date'>) => {
        const users = get().users;
        const targetUser = users.find(u => u.username === targetUsername);
        
        if (targetUser) {
          const newReview: Review = {
            ...review,
            id: Date.now().toString(),
            date: new Date()
          };
          
          const updatedReviews = [...targetUser.reviews, newReview];
          const averageRating = updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length;
          
          const updatedUsers = users.map(user =>
            user.username === targetUsername
              ? { 
                  ...user, 
                  reviews: updatedReviews,
                  averageRating: Math.round(averageRating * 10) / 10,
                  totalReviews: updatedReviews.length
                }
              : user
          );
          
          set({ users: updatedUsers });
        }
      }
    }),
    {
      name: 'skillswap-auth',
    }
  )
);

export type { User, Review };
