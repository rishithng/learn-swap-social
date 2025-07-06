
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  username: string;
  name?: string;
  phone?: string;
  age?: number;
  city?: string;
  skillsKnown?: string;
  skillsToLearn?: string;
  bio?: string;
}

interface AuthStore {
  isAuthenticated: boolean;
  currentUser: User | null;
  users: User[];
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (profileData: Partial<User>) => void;
  getAllUsers: () => User[];
}

const mockUsers = [
  {
    username: 'alice',
    name: 'Alice Smith',
    phone: '111-222-3333',
    age: 28,
    city: 'New York',
    skillsKnown: 'Python, Web Development',
    skillsToLearn: 'Machine Learning, Data Science',
    bio: 'Passionate developer looking to expand into AI/ML'
  },
  {
    username: 'bob',
    name: 'Bob Johnson',
    phone: '444-555-6666',
    age: 34,
    city: 'London',
    skillsKnown: 'Data Science, Machine Learning',
    skillsToLearn: 'Web Development, React',
    bio: 'Data scientist eager to learn frontend technologies'
  },
  {
    username: 'charlie',
    name: 'Charlie Brown',
    phone: '777-888-9999',
    age: 22,
    city: 'Paris',
    skillsKnown: 'Graphic Design, Video Editing',
    skillsToLearn: 'UI/UX Design, Figma',
    bio: 'Creative designer looking to improve digital design skills'
  }
];

const mockCredentials = new Map([
  ['alice', 'alicepass'],
  ['bob', 'bobpass'],
  ['charlie', 'charliepass']
]);

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      currentUser: null,
      users: mockUsers,
      
      login: (username: string, password: string) => {
        const correctPassword = mockCredentials.get(username);
        if (correctPassword && correctPassword === password) {
          const user = get().users.find(u => u.username === username) || { username };
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
        const newUser = { username };
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
      }
    }),
    {
      name: 'skillswap-auth',
    }
  )
);
