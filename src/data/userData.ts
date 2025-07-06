
export interface Review {
  id: string;
  reviewerId: string;
  reviewerName: string;
  rating: number;
  comment: string;
  skillTaught: string;
  date: Date;
}

export interface User {
  username: string;
  name?: string;
  phone?: string;
  age?: number;
  city?: string;
  skillsKnown?: string;
  skillsToLearn?: string;
  bio?: string;
  avatar?: string;
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export const mockUsers: User[] = [
  {
    username: 'alice',
    name: 'Alice Smith',
    phone: '111-222-3333',
    age: 28,
    city: 'New York',
    skillsKnown: 'Python, Web Development, React, JavaScript',
    skillsToLearn: 'Machine Learning, Data Science, AI',
    bio: 'Passionate developer looking to expand into AI/ML',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '1',
        reviewerId: 'bob',
        reviewerName: 'Bob Johnson',
        rating: 5,
        comment: 'Excellent Python teacher! Very patient and knowledgeable.',
        skillTaught: 'Python',
        date: new Date('2024-01-15')
      }
    ],
    averageRating: 5,
    totalReviews: 1
  },
  {
    username: 'bob',
    name: 'Bob Johnson',
    phone: '444-555-6666',
    age: 34,
    city: 'London',
    skillsKnown: 'Data Science, Machine Learning, Python, Statistics',
    skillsToLearn: 'Web Development, React, Frontend',
    bio: 'Data scientist eager to learn frontend technologies',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '2',
        reviewerId: 'alice',
        reviewerName: 'Alice Smith',
        rating: 5,
        comment: 'Amazing ML instructor! Explained complex concepts clearly.',
        skillTaught: 'Machine Learning',
        date: new Date('2024-01-20')
      }
    ],
    averageRating: 5,
    totalReviews: 1
  },
  {
    username: 'charlie',
    name: 'Charlie Brown',
    phone: '777-888-9999',
    age: 22,
    city: 'Paris',
    skillsKnown: 'Graphic Design, Video Editing, Photoshop, Illustrator',
    skillsToLearn: 'UI/UX Design, Figma, Web Design',
    bio: 'Creative designer looking to improve digital design skills',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'diana',
    name: 'Diana Prince',
    phone: '101-202-3030',
    age: 30,
    city: 'Berlin',
    skillsKnown: 'Digital Marketing, Content Creation, SEO, Social Media',
    skillsToLearn: 'Analytics, Data Analysis, Google Ads',
    bio: 'Marketing professional wanting to master technical aspects',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'evan',
    name: 'Evan Rodriguez',
    phone: '321-654-9870',
    age: 26,
    city: 'Barcelona',
    skillsKnown: 'Photography, Lightroom, Adobe Suite, Visual Arts',
    skillsToLearn: 'Video Production, After Effects, Motion Graphics',
    bio: 'Photographer transitioning into videography and motion graphics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'fiona',
    name: 'Fiona Chen',
    phone: '555-123-4567',
    age: 32,
    city: 'Tokyo',
    skillsKnown: 'React, TypeScript, Frontend Development, JavaScript',
    skillsToLearn: 'Mobile Development, Flutter, React Native',
    bio: 'Frontend developer interested in cross-platform mobile apps',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'george',
    name: 'George Williams',
    phone: '666-777-8888',
    age: 29,
    city: 'Sydney',
    skillsKnown: 'DevOps, AWS, Cloud Computing, Docker',
    skillsToLearn: 'Kubernetes, Microservices, System Design',
    bio: 'Cloud engineer looking to master containerization technologies',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'hannah',
    name: 'Hannah Davis',
    phone: '888-999-0000',
    age: 24,
    city: 'Toronto',
    skillsKnown: 'Content Writing, Copywriting, Technical Writing',
    skillsToLearn: 'SEO Writing, Blog Management, Content Strategy',
    bio: 'Writer wanting to specialize in technical communication',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab87d3e3bb?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'ivan',
    name: 'Ivan Petrov',
    phone: '222-333-4444',
    age: 35,
    city: 'Moscow',
    skillsKnown: 'Cybersecurity, Penetration Testing, Network Security',
    skillsToLearn: 'Blockchain, Smart Contracts, Cryptocurrency',
    bio: 'Security expert exploring decentralized technologies',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'jade',
    name: 'Jade Thompson',
    phone: '333-444-5555',
    age: 27,
    city: 'San Francisco',
    skillsKnown: 'Product Management, Agile, Scrum, Strategy',
    skillsToLearn: 'Data Analysis, SQL, Business Intelligence',
    bio: 'Product manager wanting to become more data-driven',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'kyle',
    name: 'Kyle Anderson',
    phone: '444-555-6667',
    age: 31,
    city: 'Chicago',
    skillsKnown: '3D Modeling, Blender, Animation, Game Design',
    skillsToLearn: 'Game Development, Unity, C#',
    bio: '3D artist interested in interactive media and game design',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'luna',
    name: 'Luna Garcia',
    phone: '555-666-7778',
    age: 25,
    city: 'Mexico City',
    skillsKnown: 'Social Media Marketing, Canva, Brand Strategy',
    skillsToLearn: 'Advanced Photoshop, Brand Design, Logo Design',
    bio: 'Social media manager looking to enhance visual design skills',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'marcus',
    name: 'Marcus Johnson',
    phone: '123-456-7890',
    age: 29,
    city: 'Atlanta',
    skillsKnown: 'Node.js, Backend Development, MongoDB, Express',
    skillsToLearn: 'GraphQL, Microservices, System Architecture',
    bio: 'Backend developer exploring modern architectural patterns',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'nina',
    name: 'Nina Patel',
    phone: '234-567-8901',
    age: 26,
    city: 'Mumbai',
    skillsKnown: 'Flutter, Mobile Development, Dart, Firebase',
    skillsToLearn: 'iOS Development, Swift, App Store Optimization',
    bio: 'Mobile developer expanding to native iOS development',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'oscar',
    name: 'Oscar Kim',
    phone: '345-678-9012',
    age: 33,
    city: 'Seoul',
    skillsKnown: 'Vue.js, Nuxt.js, Frontend Architecture, CSS',
    skillsToLearn: 'React, Next.js, Modern Frontend Tools',
    bio: 'Vue expert curious about React ecosystem',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'petra',
    name: 'Petra Schmidt',
    phone: '456-789-0123',
    age: 28,
    city: 'Vienna',
    skillsKnown: 'UX Research, User Testing, Design Thinking',
    skillsToLearn: 'Service Design, Design Systems, Accessibility',
    bio: 'UX researcher passionate about inclusive design',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'quinn',
    name: 'Quinn Murphy',
    phone: '567-890-1234',
    age: 24,
    city: 'Dublin',
    skillsKnown: 'WordPress, PHP, Content Management, SEO',
    skillsToLearn: 'Laravel, Modern PHP, API Development',
    bio: 'WordPress developer transitioning to modern PHP frameworks',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'ruby',
    name: 'Ruby Chen',
    phone: '678-901-2345',
    age: 30,
    city: 'Singapore',
    skillsKnown: 'Ruby on Rails, PostgreSQL, Backend Architecture',
    skillsToLearn: 'Elixir, Phoenix, Functional Programming',
    bio: 'Rails developer exploring functional programming paradigms',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'sam',
    name: 'Sam Taylor',
    phone: '789-012-3456',
    age: 27,
    city: 'Vancouver',
    skillsKnown: 'Angular, TypeScript, RxJS, Testing',
    skillsToLearn: 'React, Vue.js, Frontend Framework Comparison',
    bio: 'Angular specialist exploring other frontend frameworks',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'tara',
    name: 'Tara Wilson',
    phone: '890-123-4567',
    age: 25,
    city: 'Melbourne',
    skillsKnown: 'Figma, UI Design, Prototyping, Design Systems',
    skillsToLearn: 'After Effects, Motion Design, Interactive Prototypes',
    bio: 'UI designer interested in motion and interactive design',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab87d3e3bb?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  }
];

export const mockCredentials = new Map([
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
  ['luna', 'lunapass'],
  ['marcus', 'marcuspass'],
  ['nina', 'ninapass'],
  ['oscar', 'oscarpass'],
  ['petra', 'petrapass'],
  ['quinn', 'quinnpass'],
  ['ruby', 'rubypass'],
  ['sam', 'sampass'],
  ['tara', 'tarapass']
]);
