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
    reviews: [
      {
        id: '3',
        reviewerId: 'diana',
        reviewerName: 'Diana Prince',
        rating: 4,
        comment: 'Great at teaching Photoshop basics. Very creative approach!',
        skillTaught: 'Photoshop',
        date: new Date('2024-02-01')
      }
    ],
    averageRating: 4,
    totalReviews: 1
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
    username: 'karma',
    name: 'Karma Singh',
    phone: '111-999-8888',
    age: 29,
    city: 'Mumbai',
    skillsKnown: 'Yoga, Meditation, Mindfulness, Wellness Coaching',
    skillsToLearn: 'Nutrition, Psychology, Health Sciences',
    bio: 'Wellness expert exploring holistic health approaches',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '4',
        reviewerId: 'luna',
        reviewerName: 'Luna Garcia',
        rating: 5,
        comment: 'Life-changing meditation sessions! Very calming and insightful.',
        skillTaught: 'Meditation',
        date: new Date('2024-02-10')
      }
    ],
    averageRating: 5,
    totalReviews: 1
  },
  {
    username: 'leo',
    name: 'Leo Martinez',
    phone: '222-888-7777',
    age: 31,
    city: 'Madrid',
    skillsKnown: 'Spanish, French, Italian, Language Teaching',
    skillsToLearn: 'Mandarin, Japanese, Arabic',
    bio: 'Polyglot passionate about connecting cultures through language',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'maya',
    name: 'Maya Patel',
    phone: '333-777-6666',
    age: 25,
    city: 'Delhi',
    skillsKnown: 'Cooking, Indian Cuisine, Baking, Food Photography',
    skillsToLearn: 'International Cuisine, Food Styling, Culinary Arts',
    bio: 'Chef sharing traditional recipes and learning global flavors',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'noah',
    name: 'Noah Anderson',
    phone: '444-666-5555',
    age: 28,
    city: 'Seattle',
    skillsKnown: 'Guitar, Piano, Music Production, Audio Engineering',
    skillsToLearn: 'Violin, Music Theory, Composition',
    bio: 'Musician exploring different instruments and production techniques',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'olivia',
    name: 'Olivia Johnson',
    phone: '555-555-4444',
    age: 26,
    city: 'Los Angeles',
    skillsKnown: 'Acting, Theatre, Voice Acting, Performance',
    skillsToLearn: 'Film Direction, Screenwriting, Cinematography',
    bio: 'Actor transitioning into behind-the-camera roles',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'paulo',
    name: 'Paulo Silva',
    phone: '666-444-3333',
    age: 33,
    city: 'São Paulo',
    skillsKnown: 'Soccer, Fitness Training, Sports Psychology',
    skillsToLearn: 'Nutrition, Physiotherapy, Sports Medicine',
    bio: 'Former athlete turned fitness coach',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'quinn',
    name: 'Quinn Thompson',
    phone: '777-333-2222',
    age: 30,
    city: 'Dublin',
    skillsKnown: 'Carpentry, Woodworking, Home Renovation',
    skillsToLearn: 'Electrical Work, Plumbing, Architecture',
    bio: 'Craftsperson expanding into full home renovation services',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'riley',
    name: 'Riley Chang',
    phone: '888-222-1111',
    age: 24,
    city: 'Vancouver',
    skillsKnown: 'Gaming, Twitch Streaming, Content Creation',
    skillsToLearn: 'Video Editing, Game Development, Marketing',
    bio: 'Content creator looking to expand into game development',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab87d3e3bb?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'sage',
    name: 'Sage Miller',
    phone: '999-111-0000',
    age: 32,
    city: 'Portland',
    skillsKnown: 'Gardening, Permaculture, Sustainable Living',
    skillsToLearn: 'Solar Energy, Composting, Environmental Science',
    bio: 'Sustainability advocate teaching eco-friendly practices',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'taylor',
    name: 'Taylor Brown',
    phone: '000-999-8888',
    age: 27,
    city: 'Austin',
    skillsKnown: 'Stand-up Comedy, Public Speaking, Writing',
    skillsToLearn: 'Improv, Acting, Screenwriting',
    bio: 'Comedian exploring different forms of entertainment',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'victor',
    name: 'Victor Petrov',
    phone: '111-888-7777',
    age: 35,
    city: 'Prague',
    skillsKnown: 'Blockchain, Solidity, Smart Contracts, DeFi',
    skillsToLearn: 'NFTs, Web3, Cryptocurrency Trading',
    bio: 'Blockchain developer exploring decentralized finance',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'wendy',
    name: 'Wendy Liu',
    phone: '222-777-6666',
    age: 29,
    city: 'Hong Kong',
    skillsKnown: 'AI/ML, Deep Learning, TensorFlow, Computer Vision',
    skillsToLearn: 'Natural Language Processing, Robotics, IoT',
    bio: 'AI researcher pushing the boundaries of machine learning',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'xavier',
    name: 'Xavier Costa',
    phone: '333-666-5555',
    age: 31,
    city: 'Lisbon',
    skillsKnown: 'Game Development, Unity, C#, 3D Animation',
    skillsToLearn: 'Unreal Engine, VR Development, AR',
    bio: 'Game developer transitioning into immersive technologies',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'yuki',
    name: 'Yuki Tanaka',
    phone: '444-555-4444',
    age: 26,
    city: 'Osaka',
    skillsKnown: 'Japanese, Anime Art, Manga Drawing, Digital Art',
    skillsToLearn: 'Animation, Character Design, Storyboarding',
    bio: 'Artist specializing in Japanese pop culture aesthetics',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'zara',
    name: 'Zara Ahmed',
    phone: '555-444-3333',
    age: 28,
    city: 'Dubai',
    skillsKnown: 'Fashion Design, Textile Arts, Pattern Making',
    skillsToLearn: 'Sustainable Fashion, 3D Fashion Design, Business',
    bio: 'Fashion designer focusing on sustainable and innovative designs',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'adrian',
    name: 'Adrian Novak',
    phone: '666-333-2222',
    age: 34,
    city: 'Budapest',
    skillsKnown: 'Architecture, CAD, 3D Modeling, Urban Planning',
    skillsToLearn: 'Sustainable Architecture, BIM, Interior Design',
    bio: 'Architect passionate about sustainable urban development',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'bella',
    name: 'Bella Rodriguez',
    phone: '777-222-1111',
    age: 25,
    city: 'Mexico City',
    skillsKnown: 'Dance, Choreography, Latin Dance, Performance',
    skillsToLearn: 'Contemporary Dance, Ballet, Dance Therapy',
    bio: 'Professional dancer exploring therapeutic movement',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab87d3e3bb?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'carlos',
    name: 'Carlos Mendez',
    phone: '888-111-0000',
    age: 30,
    city: 'Buenos Aires',
    skillsKnown: 'Cryptocurrency Trading, Financial Analysis, Economics',
    skillsToLearn: 'Quantitative Analysis, Risk Management, Fintech',
    bio: 'Financial analyst specializing in digital assets',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'dara',
    name: 'Dara Kim',
    phone: '999-000-9999',
    age: 27,
    city: 'Seoul',
    skillsKnown: 'K-Pop Dance, Korean Language, Cultural Exchange',
    skillsToLearn: 'Music Production, Event Management, Broadcasting',
    bio: 'Cultural ambassador bridging Korean and international communities',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'elias',
    name: 'Elias Johansson',
    phone: '000-888-7777',
    age: 32,
    city: 'Stockholm',
    skillsKnown: 'Renewable Energy, Engineering, Sustainability',
    skillsToLearn: 'Energy Storage, Grid Systems, Clean Technology',
    bio: 'Engineer working on next-generation renewable energy solutions',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
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
  ['karma', 'karmapass'],
  ['leo', 'leopass'],
  ['maya', 'mayapass'],
  ['noah', 'noahpass'],
  ['olivia', 'oliviapass'],
  ['paulo', 'paulopass'],
  ['quinn', 'quinnpass'],
  ['riley', 'rileypass'],
  ['sage', 'sagepass'],
  ['taylor', 'taylorpass'],
  ['victor', 'victorpass'],
  ['wendy', 'wendypass'],
  ['xavier', 'xavierpass'],
  ['yuki', 'yukipass'],
  ['zara', 'zarapass'],
  ['adrian', 'adrianpass'],
  ['bella', 'bellapass'],
  ['carlos', 'carlospass'],
  ['dara', 'darapass'],
  ['elias', 'eliaspass']
]);
