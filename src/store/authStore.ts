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
  },
  {
    username: 'diana',
    name: 'Diana Prince',
    phone: '101-202-3030',
    age: 30,
    city: 'Berlin',
    skillsKnown: 'Digital Marketing, Content Creation',
    skillsToLearn: 'SEO, Analytics',
    bio: 'Marketing professional wanting to master technical aspects'
  },
  {
    username: 'evan',
    name: 'Evan Rodriguez',
    phone: '321-654-9870',
    age: 26,
    city: 'Barcelona',
    skillsKnown: 'Photography, Lightroom',
    skillsToLearn: 'Video Production, After Effects',
    bio: 'Photographer transitioning into videography and motion graphics'
  },
  {
    username: 'fiona',
    name: 'Fiona Chen',
    phone: '555-123-4567',
    age: 32,
    city: 'Tokyo',
    skillsKnown: 'React, TypeScript',
    skillsToLearn: 'Mobile Development, Flutter',
    bio: 'Frontend developer interested in cross-platform mobile apps'
  },
  {
    username: 'george',
    name: 'George Williams',
    phone: '666-777-8888',
    age: 29,
    city: 'Sydney',
    skillsKnown: 'DevOps, AWS',
    skillsToLearn: 'Kubernetes, Docker',
    bio: 'Cloud engineer looking to master containerization technologies'
  },
  {
    username: 'hannah',
    name: 'Hannah Davis',
    phone: '888-999-0000',
    age: 24,
    city: 'Toronto',
    skillsKnown: 'Content Writing, Copywriting',
    skillsToLearn: 'Technical Writing, Documentation',
    bio: 'Writer wanting to specialize in technical communication'
  },
  {
    username: 'ivan',
    name: 'Ivan Petrov',
    phone: '222-333-4444',
    age: 35,
    city: 'Moscow',
    skillsKnown: 'Cybersecurity, Penetration Testing',
    skillsToLearn: 'Blockchain, Smart Contracts',
    bio: 'Security expert exploring decentralized technologies'
  },
  {
    username: 'jade',
    name: 'Jade Thompson',
    phone: '333-444-5555',
    age: 27,
    city: 'San Francisco',
    skillsKnown: 'Product Management, Agile',
    skillsToLearn: 'Data Analysis, SQL',
    bio: 'Product manager wanting to become more data-driven'
  },
  {
    username: 'kyle',
    name: 'Kyle Anderson',
    phone: '444-555-6667',
    age: 31,
    city: 'Chicago',
    skillsKnown: ' 3D Modeling, Blender',
    skillsToLearn: 'Game Development, Unity',
    bio: '3D artist interested in interactive media and game design'
  },
  {
    username: 'luna',
    name: 'Luna Garcia',
    phone: '555-666-7778',
    age: 25,
    city: 'Mexico City',
    skillsKnown: 'Social Media Marketing, Canva',
    skillsToLearn: 'Advanced Photoshop, Brand Design',
    bio: 'Social media manager looking to enhance visual design skills'
  }
];

const mockCredentials = new Map([
  ['alice', 'alicepass'],
  ['bob', 'bobpass'],
  ['charlie', 'charliepass'],
  ['diana', 'dianapass'],
  ['evan', 'evanpass'],
  ['fiona', 'fionapass'],
  ['george', 'georgepass'],
  ['hannah', 'hannahpass'],
  ['ivan', 'ivanpass'],
  ['jade', 'jadepass'],
  ['kyle', 'kylepass'],
  ['luna', 'lunapass']
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
