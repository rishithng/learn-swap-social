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
  email?: string;
  age?: number;
  city?: string;
  phone?: string;
  bio?: string;
  skillsKnown?: string;
  skillsToLearn?: string;
  avatar?: string;
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

// Mock credentials storage
export const mockCredentials = new Map<string, string>();
mockCredentials.set('alice', 'alicepass');
mockCredentials.set('bob', 'bobpass');

// Sample reviews for demonstration
const sampleReviews: Review[] = [
  {
    id: '1',
    reviewerId: 'john_smith',
    reviewerName: 'John Smith',
    rating: 5,
    comment: 'Excellent teacher! Very patient and knowledgeable.',
    skillTaught: 'React',
    date: new Date('2024-01-15')
  },
  {
    id: '2',
    reviewerId: 'sarah_wilson',
    reviewerName: 'Sarah Wilson',
    rating: 4,
    comment: 'Great session, learned a lot about advanced concepts.',
    skillTaught: 'Python',
    date: new Date('2024-01-20')
  },
  {
    id: '3',
    reviewerId: 'mike_johnson',
    reviewerName: 'Mike Johnson',
    rating: 5,
    comment: 'Amazing designer! Helped me understand UI principles.',
    skillTaught: 'UI Design',
    date: new Date('2024-01-25')
  },
  {
    id: '4',
    reviewerId: 'emma_davis',
    reviewerName: 'Emma Davis',
    rating: 5,
    comment: 'Outstanding mentor! Made complex topics easy to understand.',
    skillTaught: 'JavaScript',
    date: new Date('2024-02-01')
  },
  {
    id: '5',
    reviewerId: 'alex_brown',
    reviewerName: 'Alex Brown',
    rating: 4,
    comment: 'Very helpful and structured approach to learning.',
    skillTaught: 'Data Science',
    date: new Date('2024-02-05')
  },
  {
    id: '6',
    reviewerId: 'lisa_white',
    reviewerName: 'Lisa White',
    rating: 5,
    comment: 'Incredible expertise in cloud technologies!',
    skillTaught: 'AWS',
    date: new Date('2024-02-10')
  },
  {
    id: '7',
    reviewerId: 'david_kim',
    reviewerName: 'David Kim',
    rating: 4,
    comment: 'Great teacher, very practical examples.',
    skillTaught: 'Docker',
    date: new Date('2024-02-12')
  },
  {
    id: '8',
    reviewerId: 'maria_garcia',
    reviewerName: 'Maria Garcia',
    rating: 5,
    comment: 'Perfect for beginners! Patient and thorough.',
    skillTaught: 'Photography',
    date: new Date('2024-02-15')
  }
];

export const mockUsers: User[] = [
  {
    username: 'alice',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    age: 28,
    city: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
    bio: 'Full-stack developer passionate about React and Node.js. Love teaching and sharing knowledge!',
    skillsKnown: 'React, Node.js, JavaScript, TypeScript, MongoDB',
    skillsToLearn: 'Machine Learning, DevOps, Kubernetes',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c7e9?w=150&h=150&fit=crop&crop=face',
    reviews: [sampleReviews[0], sampleReviews[1]],
    averageRating: 4.5,
    totalReviews: 2
  },
  {
    username: 'bob',
    name: 'Bob Smith',
    email: 'bob@example.com',
    age: 32,
    city: 'New York, NY',
    phone: '+1 (555) 987-6543',
    bio: 'UX/UI Designer with 8 years of experience. Always excited to learn new technologies!',
    skillsKnown: 'UI/UX Design, Figma, Adobe Creative Suite, Prototyping',
    skillsToLearn: 'Frontend Development, React, Animation',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [sampleReviews[2]],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'charlie',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    age: 26,
    city: 'Austin, TX',
    phone: '+1 (555) 456-7890',
    bio: 'Data scientist and Python enthusiast. Love working with AI and machine learning models.',
    skillsKnown: 'Python, Machine Learning, Data Analysis, TensorFlow, Pandas',
    skillsToLearn: 'Deep Learning, Computer Vision, MLOps',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [sampleReviews[3]],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'diana',
    name: 'Diana Prince',
    email: 'diana@example.com',
    age: 30,
    city: 'Seattle, WA',
    phone: '+1 (555) 321-0987',
    bio: 'DevOps engineer passionate about cloud technologies and automation.',
    skillsKnown: 'Docker, Kubernetes, AWS, CI/CD, Linux',
    skillsToLearn: 'Terraform, Monitoring, Security',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [sampleReviews[4], sampleReviews[5]],
    averageRating: 4.5,
    totalReviews: 2
  },
  {
    username: 'ethan',
    name: 'Ethan Hunt',
    email: 'ethan@example.com',
    age: 29,
    city: 'Los Angeles, CA',
    phone: '+1 (555) 654-3210',
    bio: 'Mobile app developer specializing in React Native and Flutter.',
    skillsKnown: 'React Native, Flutter, Mobile Development, Firebase',
    skillsToLearn: 'iOS Native, Android Native, AR/VR',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [sampleReviews[6]],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'fiona',
    name: 'Fiona Green',
    email: 'fiona@example.com',
    age: 25,
    city: 'Boston, MA',
    phone: '+1 (555) 789-0123',
    bio: 'Graphic designer and illustrator with a passion for branding and visual storytelling.',
    skillsKnown: 'Graphic Design, Illustration, Branding, Adobe Illustrator, Photoshop',
    skillsToLearn: 'Motion Graphics, 3D Design, Web Design',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [sampleReviews[7]],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'george',
    name: 'George Wilson',
    email: 'george@example.com',
    age: 34,
    city: 'Chicago, IL',
    phone: '+1 (555) 147-2580',
    bio: 'Backend developer with expertise in Java and Spring Boot. Love system architecture!',
    skillsKnown: 'Java, Spring Boot, Microservices, PostgreSQL, Redis',
    skillsToLearn: 'Golang, Rust, Event-Driven Architecture',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '101',
        reviewerId: 'tech_lead',
        reviewerName: 'Tech Lead Sarah',
        rating: 5,
        comment: 'Excellent knowledge of system design and architecture.',
        skillTaught: 'System Architecture',
        date: new Date('2024-01-10')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'hannah',
    name: 'Hannah Davis',
    email: 'hannah@example.com',
    age: 27,
    city: 'Miami, FL',
    phone: '+1 (555) 369-1470',
    bio: 'Digital marketing specialist with expertise in SEO and social media.',
    skillsKnown: 'Digital Marketing, SEO, Social Media, Google Analytics, Content Strategy',
    skillsToLearn: 'Paid Advertising, Marketing Automation, Data Analysis',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '102',
        reviewerId: 'marketing_pro',
        reviewerName: 'Marketing Pro Mike',
        rating: 4,
        comment: 'Great insights into modern SEO strategies.',
        skillTaught: 'SEO',
        date: new Date('2024-01-18')
      },
      {
        id: '103',
        reviewerId: 'content_creator',
        reviewerName: 'Content Creator Ana',
        rating: 5,
        comment: 'Amazing content strategy session!',
        skillTaught: 'Content Strategy',
        date: new Date('2024-02-01')
      }
    ],
    averageRating: 4.5,
    totalReviews: 2
  },
  {
    username: 'ivan',
    name: 'Ivan Rodriguez',
    email: 'ivan@example.com',
    age: 31,
    city: 'Phoenix, AZ',
    phone: '+1 (555) 258-7410',
    bio: 'Cybersecurity expert focused on ethical hacking and network security.',
    skillsKnown: 'Cybersecurity, Ethical Hacking, Network Security, Penetration Testing',
    skillsToLearn: 'Cloud Security, Incident Response, Compliance',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '104',
        reviewerId: 'security_admin',
        reviewerName: 'Security Admin Joe',
        rating: 5,
        comment: 'Incredible knowledge of penetration testing techniques.',
        skillTaught: 'Penetration Testing',
        date: new Date('2024-01-22')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'julia',
    name: 'Julia Chen',
    email: 'julia@example.com',
    age: 24,
    city: 'Portland, OR',
    phone: '+1 (555) 741-9630',
    bio: 'Frontend developer passionate about creating beautiful and accessible user interfaces.',
    skillsKnown: 'HTML, CSS, JavaScript, Vue.js, Accessibility, SASS',
    skillsToLearn: 'React, TypeScript, Testing, Performance Optimization',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '105',
        reviewerId: 'ux_designer',
        reviewerName: 'UX Designer Lisa',
        rating: 4,
        comment: 'Great understanding of accessibility principles.',
        skillTaught: 'Web Accessibility',
        date: new Date('2024-02-03')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'kevin',
    name: 'Kevin Lee',
    email: 'kevin@example.com',
    age: 28,
    city: 'Denver, CO',
    phone: '+1 (555) 852-9630',
    bio: 'Game developer with experience in Unity and Unreal Engine.',
    skillsKnown: 'Game Development, Unity, C#, 3D Modeling, Game Design',
    skillsToLearn: 'Unreal Engine, VR Development, Mobile Gaming',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '106',
        reviewerId: 'game_artist',
        reviewerName: 'Game Artist Tom',
        rating: 5,
        comment: 'Fantastic Unity tutorials and game design principles.',
        skillTaught: 'Unity Development',
        date: new Date('2024-01-28')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'laura',
    name: 'Laura Martinez',
    email: 'laura@example.com',
    age: 26,
    city: 'San Diego, CA',
    phone: '+1 (555) 963-7410',
    bio: 'Product manager with a background in agile methodologies and user research.',
    skillsKnown: 'Product Management, Agile, Scrum, User Research, Analytics',
    skillsToLearn: 'Data Science, UX Design, Technical Writing',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '107',
        reviewerId: 'startup_founder',
        reviewerName: 'Startup Founder Ben',
        rating: 5,
        comment: 'Excellent product strategy and agile coaching.',
        skillTaught: 'Product Strategy',
        date: new Date('2024-02-05')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'mike',
    name: 'Mike Thompson',
    email: 'mike@example.com',
    age: 33,
    city: 'Nashville, TN',
    phone: '+1 (555) 159-7530',
    bio: 'Music producer and audio engineer. Also interested in music technology.',
    skillsKnown: 'Music Production, Audio Engineering, Pro Tools, Logic Pro',
    skillsToLearn: 'Sound Design, Music Technology, Digital Marketing',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '108',
        reviewerId: 'musician',
        reviewerName: 'Musician Amy',
        rating: 4,
        comment: 'Great mixing and mastering techniques.',
        skillTaught: 'Audio Engineering',
        date: new Date('2024-01-30')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'nina',
    name: 'Nina Patel',
    email: 'nina@example.com',
    age: 29,
    city: 'Atlanta, GA',
    phone: '+1 (555) 753-8520',
    bio: 'Blockchain developer passionate about decentralized applications and smart contracts.',
    skillsKnown: 'Blockchain, Solidity, Web3, Smart Contracts, Ethereum',
    skillsToLearn: 'DeFi, NFTs, Layer 2 Solutions, Rust',
    avatar: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '109',
        reviewerId: 'crypto_dev',
        reviewerName: 'Crypto Dev Alex',
        rating: 5,
        comment: 'Outstanding smart contract development skills.',
        skillTaught: 'Smart Contracts',
        date: new Date('2024-02-08')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'oscar',
    name: 'Oscar Kim',
    email: 'oscar@example.com',
    age: 35,
    city: 'Salt Lake City, UT',
    phone: '+1 (555) 486-9270',
    bio: 'Data engineer specializing in big data processing and cloud architectures.',
    skillsKnown: 'Data Engineering, Apache Spark, Kafka, Cloud Computing, SQL',
    skillsToLearn: 'Stream Processing, Data Mesh, MLOps',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '110',
        reviewerId: 'data_analyst',
        reviewerName: 'Data Analyst Carol',
        rating: 4,
        comment: 'Excellent Apache Spark optimization techniques.',
        skillTaught: 'Apache Spark',
        date: new Date('2024-02-12')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'paula',
    name: 'Paula Adams',
    email: 'paula@example.com',
    age: 27,
    city: 'Minneapolis, MN',
    phone: '+1 (555) 627-3940',
    bio: 'Technical writer and documentation specialist. Love making complex topics accessible.',
    skillsKnown: 'Technical Writing, Documentation, API Documentation, Content Strategy',
    skillsToLearn: 'Developer Relations, Community Building, Video Production',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'quinn',
    name: 'Quinn Foster',
    email: 'quinn@example.com',
    age: 24,
    city: 'Richmond, VA',
    phone: '+1 (555) 840-5170',
    bio: 'Machine learning engineer working on computer vision and natural language processing.',
    skillsKnown: 'Machine Learning, Computer Vision, NLP, PyTorch, OpenCV',
    skillsToLearn: 'Reinforcement Learning, MLOps, Edge Computing',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'rachel',
    name: 'Rachel Green',
    email: 'rachel@example.com',
    age: 30,
    city: 'Tampa, FL',
    phone: '+1 (555) 392-6840',
    bio: 'Fashion designer and entrepreneur. Interested in sustainable fashion and e-commerce.',
    skillsKnown: 'Fashion Design, Pattern Making, Sustainable Design, E-commerce',
    skillsToLearn: 'Digital Marketing, 3D Fashion Design, Supply Chain',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c7e9?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'sam',
    name: 'Sam Wilson',
    email: 'sam@example.com',
    age: 26,
    city: 'Kansas City, MO',
    phone: '+1 (555) 174-8520',
    bio: 'Full-stack developer with expertise in MERN stack and cloud deployment.',
    skillsKnown: 'MERN Stack, AWS, Docker, GraphQL, MongoDB',
    skillsToLearn: 'Serverless, Microservices, Testing',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'tina',
    name: 'Tina Rodriguez',
    email: 'tina@example.com',
    age: 32,
    city: 'Las Vegas, NV',
    phone: '+1 (555) 628-3940',
    bio: 'Sales and business development professional. Passionate about CRM and sales automation.',
    skillsKnown: 'Sales, Business Development, CRM, Lead Generation, Negotiation',
    skillsToLearn: 'Sales Automation, Data Analysis, Digital Marketing',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'uma',
    name: 'Uma Singh',
    email: 'uma@example.com',
    age: 28,
    city: 'Charlotte, NC',
    phone: '+1 (555) 951-7530',
    bio: 'Quality assurance engineer with expertise in automated testing and test frameworks.',
    skillsKnown: 'QA Testing, Automation Testing, Selenium, Test Planning, Bug Tracking',
    skillsToLearn: 'Performance Testing, API Testing, DevOps',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'victor',
    name: 'Victor Chang',
    email: 'victor@example.com',
    age: 31,
    city: 'San Antonio, TX',
    phone: '+1 (555) 357-8460',
    bio: 'Network administrator and IT support specialist. Love troubleshooting and system optimization.',
    skillsKnown: 'Network Administration, IT Support, System Administration, Windows Server',
    skillsToLearn: 'Cloud Infrastructure, Automation, Cybersecurity',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'wendy',
    name: 'Wendy Clark',
    email: 'wendy@example.com',
    age: 25,
    city: 'Columbus, OH',
    phone: '+1 (555) 426-9730',
    bio: 'Content creator and video editor. Passionate about storytelling through visual media.',
    skillsKnown: 'Video Editing, Content Creation, Adobe Premiere, After Effects',
    skillsToLearn: 'Motion Graphics, Live Streaming, Podcast Production',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'xavier',
    name: 'Xavier Torres',
    email: 'xavier@example.com',
    age: 29,
    city: 'Indianapolis, IN',
    phone: '+1 (555) 682-4170',
    bio: 'UX researcher and usability expert. Focus on human-centered design and accessibility.',
    skillsKnown: 'UX Research, Usability Testing, User Interviews, Accessibility',
    skillsToLearn: 'Service Design, Design Systems, Quantitative Research',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'yuki',
    name: 'Yuki Tanaka',
    email: 'yuki@example.com',
    age: 26,
    city: 'Honolulu, HI',
    phone: '+1 (555) 749-2850',
    bio: 'iOS developer with passion for creating intuitive mobile experiences.',
    skillsKnown: 'iOS Development, Swift, UIKit, SwiftUI, App Store Optimization',
    skillsToLearn: 'Android Development, Cross-platform Development, AR/VR',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'zoe',
    name: 'Zoe Campbell',
    email: 'zoe@example.com',
    age: 27,
    city: 'Albuquerque, NM',
    phone: '+1 (555) 163-5280',
    bio: 'Environmental scientist interested in data visualization and climate modeling.',
    skillsKnown: 'Environmental Science, Data Visualization, R, Climate Modeling',
    skillsToLearn: 'Python, Machine Learning, Geographic Information Systems',
    avatar: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'alex',
    name: 'Alex Morgan',
    email: 'alex@example.com',
    age: 33,
    city: 'Detroit, MI',
    phone: '+1 (555) 428-6390',
    bio: 'Database administrator with expertise in performance optimization and data modeling.',
    skillsKnown: 'Database Administration, SQL, Performance Tuning, Data Modeling',
    skillsToLearn: 'NoSQL, Big Data, Cloud Databases',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'bella',
    name: 'Bella Stone',
    email: 'bella@example.com',
    age: 24,
    city: 'Tucson, AZ',
    phone: '+1 (555) 517-8240',
    bio: 'Social media manager and digital content strategist.',
    skillsKnown: 'Social Media Marketing, Content Strategy, Instagram, TikTok, Analytics',
    skillsToLearn: 'Influencer Marketing, Paid Social, Video Production',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'carlos',
    name: 'Carlos Rivera',
    email: 'carlos@example.com',
    age: 30,
    city: 'El Paso, TX',
    phone: '+1 (555) 649-3720',
    bio: 'Mechanical engineer with interest in robotics and automation.',
    skillsKnown: 'Mechanical Engineering, CAD Design, Robotics, Automation',
    skillsToLearn: 'Programming, IoT, 3D Printing',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'dana',
    name: 'Dana White',
    email: 'dana@example.com',
    age: 28,
    city: 'Memphis, TN',
    phone: '+1 (555) 783-4190',
    bio: 'HR specialist with focus on talent acquisition and employee engagement.',
    skillsKnown: 'Human Resources, Talent Acquisition, Employee Relations, Training',
    skillsToLearn: 'HR Analytics, Organizational Psychology, Diversity & Inclusion',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c7e9?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'eli',
    name: 'Eli Parker',
    email: 'eli@example.com',
    age: 26,
    city: 'Louisville, KY',
    phone: '+1 (555) 294-6180',
    bio: 'Financial analyst with expertise in investment research and portfolio management.',
    skillsKnown: 'Financial Analysis, Investment Research, Excel, Financial Modeling',
    skillsToLearn: 'Python for Finance, Algorithmic Trading, Risk Management',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'faye',
    name: 'Faye Liu',
    email: 'faye@example.com',
    age: 25,
    city: 'Baltimore, MD',
    phone: '+1 (555) 671-8450',
    bio: 'Architecture student passionate about sustainable design and urban planning.',
    skillsKnown: 'Architecture, Sustainable Design, AutoCAD, SketchUp',
    skillsToLearn: 'BIM, 3D Visualization, Urban Planning',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'grant',
    name: 'Grant Hayes',
    email: 'grant@example.com',
    age: 32,
    city: 'Milwaukee, WI',
    phone: '+1 (555) 358-2970',
    bio: 'Project manager with expertise in agile methodologies and team leadership.',
    skillsKnown: 'Project Management, Agile, Scrum, Team Leadership, Risk Management',
    skillsToLearn: 'Digital Transformation, Change Management, Data Analysis',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'hazel',
    name: 'Hazel Cruz',
    email: 'hazel@example.com',
    age: 27,
    city: 'Fresno, CA',
    phone: '+1 (555) 742-5130',
    bio: 'Nutritionist and health coach with interest in wellness technology.',
    skillsKnown: 'Nutrition, Health Coaching, Meal Planning, Wellness',
    skillsToLearn: 'Health Technology, App Development, Data Analysis',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'isaac',
    name: 'Isaac Brooks',
    email: 'isaac@example.com',
    age: 29,
    city: 'Sacramento, CA',
    phone: '+1 (555) 816-4270',
    bio: 'Software architect with focus on system design and scalable applications.',
    skillsKnown: 'Software Architecture, System Design, Microservices, Scalability',
    skillsToLearn: 'Event-Driven Architecture, Distributed Systems, Performance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'jade',
    name: 'Jade Wong',
    email: 'jade@example.com',
    age: 24,
    city: 'Mesa, AZ',
    phone: '+1 (555) 493-8560',
    bio: 'Digital artist and concept designer working in gaming and entertainment.',
    skillsKnown: 'Digital Art, Concept Design, Photoshop, 3D Modeling',
    skillsToLearn: 'Animation, VFX, Game Art, Character Design',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'kai',
    name: 'Kai Anderson',
    email: 'kai@example.com',
    age: 26,
    city: 'Virginia Beach, VA',
    phone: '+1 (555) 627-1840',
    bio: 'Marine biologist interested in ocean conservation and data collection.',
    skillsKnown: 'Marine Biology, Research, Data Collection, Conservation',
    skillsToLearn: 'Data Science, GIS, Environmental Modeling',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'luna',
    name: 'Luna Garcia',
    email: 'luna@example.com',
    age: 23,
    city: 'Atlanta, GA',
    phone: '+1 (555) 758-3420',
    bio: 'Psychology student with interest in UX psychology and human behavior.',
    skillsKnown: 'Psychology, Research Methods, Statistics, Human Behavior',
    skillsToLearn: 'UX Psychology, Data Analysis, Behavioral Economics',
    avatar: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'mason',
    name: 'Mason Taylor',
    email: 'mason@example.com',
    age: 31,
    city: 'Omaha, NE',
    phone: '+1 (555) 384-9170',
    bio: 'Real estate developer with expertise in property investment and market analysis.',
    skillsKnown: 'Real Estate, Property Investment, Market Analysis, Construction',
    skillsToLearn: 'PropTech, Data Analysis, Financial Modeling',
    avatar: 'https://images.unsplash.com/photo-1560250097-0a93528c311a?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'nova',
    name: 'Nova Johnson',
    email: 'nova@example.com',
    age: 25,
    city: 'Raleigh, NC',
    phone: '+1 (555) 592-7380',
    bio: 'Biomedical engineer working on medical device development.',
    skillsKnown: 'Biomedical Engineering, Medical Devices, CAD, Regulatory Affairs',
    skillsToLearn: 'Software Development, AI in Healthcare, 3D Printing',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'owen',
    name: 'Owen Mitchell',
    email: 'owen@example.com',
    age: 28,
    city: 'Colorado Springs, CO',
    phone: '+1 (555) 416-8270',
    bio: 'Renewable energy engineer passionate about sustainable technology solutions.',
    skillsKnown: 'Renewable Energy, Solar Power, Energy Storage, Engineering',
    skillsToLearn: 'Smart Grid, IoT, Energy Management Systems',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'penny',
    name: 'Penny Scott',
    email: 'penny@example.com',
    age: 26,
    city: 'Miami, FL',
    phone: '+1 (555) 684-5290',
    bio: 'Event planner and coordinator with expertise in corporate and social events.',
    skillsKnown: 'Event Planning, Project Coordination, Vendor Management, Budgeting',
    skillsToLearn: 'Digital Marketing, Virtual Events, CRM Systems',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c7e9?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'quinn2',
    name: 'Quinn Davis',
    email: 'quinn.d@example.com',
    age: 30,
    city: 'Jacksonville, FL',
    phone: '+1 (555) 329-7640',
    bio: 'Logistics coordinator with expertise in supply chain optimization.',
    skillsKnown: 'Logistics, Supply Chain, Inventory Management, Transportation',
    skillsToLearn: 'Supply Chain Analytics, Automation, Sustainability',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'river',
    name: 'River Chen',
    email: 'river@example.com',
    age: 24,
    city: 'San Francisco, CA',
    phone: '+1 (555) 751-4820',
    bio: 'Software engineer specializing in cloud-native applications and DevOps.',
    skillsKnown: 'Cloud Computing, DevOps, Kubernetes, Terraform, Go',
    skillsToLearn: 'Service Mesh, Observability, Site Reliability Engineering',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'sage',
    name: 'Sage Williams',
    email: 'sage@example.com',
    age: 27,
    city: 'San Jose, CA',
    phone: '+1 (555) 486-3720',
    bio: 'UX/UI designer with focus on design systems and component libraries.',
    skillsKnown: 'UX/UI Design, Design Systems, Figma, Component Libraries',
    skillsToLearn: 'Frontend Development, Design Tokens, Accessibility',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'tyler',
    name: 'Tyler Reed',
    email: 'tyler@example.com',
    age: 29,
    city: 'Fort Worth, TX',
    phone: '+1 (555) 627-8940',
    bio: 'Business analyst with expertise in process improvement and data analytics.',
    skillsKnown: 'Business Analysis, Process Improvement, Data Analytics, SQL',
    skillsToLearn: 'Machine Learning, Advanced Analytics, Automation',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'vera',
    name: 'Vera Kowalski',
    email: 'vera@example.com',
    age: 32,
    city: 'Cleveland, OH',
    phone: '+1 (555) 394-5180',
    bio: 'Operations manager with focus on lean manufacturing and continuous improvement.',
    skillsKnown: 'Operations Management, Lean Manufacturing, Six Sigma, Quality Control',
    skillsToLearn: 'Industry 4.0, Automation, Data Analytics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'wade',
    name: 'Wade Cooper',
    email: 'wade@example.com',
    age: 28,
    city: 'New Orleans, LA',
    phone: '+1 (555) 572-9630',
    bio: 'Chef and culinary instructor passionate about farm-to-table cooking.',
    skillsKnown: 'Culinary Arts, Cooking, Food Safety, Menu Planning',
    skillsToLearn: 'Food Photography, Restaurant Management, Nutrition',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'xara',
    name: 'Xara Patel',
    email: 'xara@example.com',
    age: 25,
    city: 'Buffalo, NY',
    phone: '+1 (555) 418-7260',
    bio: 'International business consultant with expertise in cross-cultural communication.',
    skillsKnown: 'International Business, Cross-cultural Communication, Strategy',
    skillsToLearn: 'Digital Transformation, E-commerce, Market Research',
    avatar: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'yale',
    name: 'Yale Thompson',
    email: 'yale@example.com',
    age: 31,
    city: 'Rochester, NY',
    phone: '+1 (555) 763-4920',
    bio: 'Statistician and data analyst working in healthcare research.',
    skillsKnown: 'Statistics, Data Analysis, R, SAS, Healthcare Research',
    skillsToLearn: 'Machine Learning, Python, Biostatistics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  {
    username: 'zara',
    name: 'Zara Ahmed',
    email: 'zara@example.com',
    age: 26,
    city: 'Jersey City, NJ',
    phone: '+1 (555) 529-8470',
    bio: 'Legal assistant with interest in legal technology and contract management.',
    skillsKnown: 'Legal Research, Contract Review, Legal Writing, Compliance',
    skillsToLearn: 'Legal Technology, Contract Management Systems, Paralegal Studies',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
    reviews: [],
    averageRating: 0,
    totalReviews: 0
  },
  // Adding 30 more diverse profiles with skills and reviews
  {
    username: 'sophia',
    name: 'Sophia Wang',
    email: 'sophia@example.com',
    age: 26,
    city: 'San Francisco, CA',
    phone: '+1 (555) 234-5678',
    bio: 'AI/ML engineer specializing in computer vision and natural language processing.',
    skillsKnown: 'Machine Learning, Computer Vision, NLP, PyTorch, TensorFlow',
    skillsToLearn: 'Reinforcement Learning, MLOps, Edge AI',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c7e9?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '200',
        reviewerId: 'ai_researcher',
        reviewerName: 'AI Researcher Dr. Smith',
        rating: 5,
        comment: 'Exceptional knowledge in computer vision algorithms.',
        skillTaught: 'Computer Vision',
        date: new Date('2024-01-15')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'marcus',
    name: 'Marcus Johnson',
    email: 'marcus@example.com',
    age: 31,
    city: 'Chicago, IL',
    phone: '+1 (555) 345-6789',
    bio: 'Full-stack developer with expertise in MERN stack and cloud deployment.',
    skillsKnown: 'MERN Stack, Node.js, Express, MongoDB, AWS',
    skillsToLearn: 'GraphQL, Serverless, Microservices',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '201',
        reviewerId: 'backend_dev',
        reviewerName: 'Backend Dev Lisa',
        rating: 4,
        comment: 'Great MongoDB optimization techniques.',
        skillTaught: 'MongoDB',
        date: new Date('2024-01-20')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'elena',
    name: 'Elena Rodriguez',
    email: 'elena@example.com',
    age: 28,
    city: 'Miami, FL',
    phone: '+1 (555) 456-7890',
    bio: 'Digital artist and 3D modeler creating stunning visual experiences.',
    skillsKnown: 'Digital Art, 3D Modeling, Blender, Maya, Photoshop',
    skillsToLearn: 'Animation, VFX, Game Art',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '202',
        reviewerId: 'art_director',
        reviewerName: 'Art Director Mike',
        rating: 5,
        comment: 'Incredible 3D modeling skills and creativity.',
        skillTaught: 'Blender',
        date: new Date('2024-01-25')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'james',
    name: 'James Wilson',
    email: 'james@example.com',
    age: 33,
    city: 'Seattle, WA',
    phone: '+1 (555) 567-8901',
    bio: 'Cloud architect with deep expertise in AWS and Azure solutions.',
    skillsKnown: 'AWS, Azure, Cloud Architecture, Terraform, Kubernetes',
    skillsToLearn: 'GCP, Service Mesh, Observability',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '203',
        reviewerId: 'devops_engineer',
        reviewerName: 'DevOps Engineer Sarah',
        rating: 5,
        comment: 'Amazing cloud migration strategies.',
        skillTaught: 'Cloud Migration',
        date: new Date('2024-02-01')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'aria',
    name: 'Aria Patel',
    email: 'aria@example.com',
    age: 25,
    city: 'Austin, TX',
    phone: '+1 (555) 678-9012',
    bio: 'Mobile app developer specializing in iOS and React Native.',
    skillsKnown: 'iOS Development, Swift, React Native, Firebase',
    skillsToLearn: 'SwiftUI, Combine, Mobile Testing',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '204',
        reviewerId: 'mobile_dev',
        reviewerName: 'Mobile Dev Alex',
        rating: 4,
        comment: 'Excellent iOS development best practices.',
        skillTaught: 'iOS Development',
        date: new Date('2024-02-05')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'ryan',
    name: 'Ryan Chen',
    email: 'ryan@example.com',
    age: 29,
    city: 'Los Angeles, CA',
    phone: '+1 (555) 789-0123',
    bio: 'Data scientist with expertise in machine learning and statistical analysis.',
    skillsKnown: 'Data Science, Python, R, Machine Learning, Statistics',
    skillsToLearn: 'Deep Learning, MLOps, Big Data',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '205',
        reviewerId: 'data_scientist',
        reviewerName: 'Data Scientist Emma',
        rating: 5,
        comment: 'Outstanding statistical modeling techniques.',
        skillTaught: 'Statistical Modeling',
        date: new Date('2024-02-08')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'zoe',
    name: 'Zoe Campbell',
    email: 'zoe@example.com',
    age: 27,
    city: 'Denver, CO',
    phone: '+1 (555) 890-1234',
    bio: 'UX/UI designer passionate about user-centered design and accessibility.',
    skillsKnown: 'UX Design, UI Design, Figma, User Research, Prototyping',
    skillsToLearn: 'Design Systems, Motion Design, Frontend Development',
    avatar: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '206',
        reviewerId: 'product_manager',
        reviewerName: 'Product Manager John',
        rating: 4,
        comment: 'Great user research methodologies.',
        skillTaught: 'User Research',
        date: new Date('2024-02-10')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'diego',
    name: 'Diego Martinez',
    email: 'diego@example.com',
    age: 32,
    city: 'Phoenix, AZ',
    phone: '+1 (555) 901-2345',
    bio: 'Cybersecurity specialist focused on threat detection and incident response.',
    skillsKnown: 'Cybersecurity, Threat Detection, Incident Response, SIEM',
    skillsToLearn: 'Cloud Security, Zero Trust, Compliance',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '207',
        reviewerId: 'security_analyst',
        reviewerName: 'Security Analyst Kate',
        rating: 5,
        comment: 'Excellent incident response procedures.',
        skillTaught: 'Incident Response',
        date: new Date('2024-02-12')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'maya',
    name: 'Maya Singh',
    email: 'maya@example.com',
    age: 24,
    city: 'Boston, MA',
    phone: '+1 (555) 012-3456',
    bio: 'Frontend developer with expertise in React and modern web technologies.',
    skillsKnown: 'React, TypeScript, Next.js, Tailwind CSS, Jest',
    skillsToLearn: 'React Native, GraphQL, Web3',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '208',
        reviewerId: 'frontend_lead',
        reviewerName: 'Frontend Lead Tom',
        rating: 4,
        comment: 'Great React component architecture.',
        skillTaught: 'React Architecture',
        date: new Date('2024-02-14')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'lucas',
    name: 'Lucas Brown',
    email: 'lucas@example.com',
    age: 30,
    city: 'Portland, OR',
    phone: '+1 (555) 123-4567',
    bio: 'DevOps engineer specializing in CI/CD and infrastructure automation.',
    skillsKnown: 'DevOps, Jenkins, Docker, Kubernetes, Ansible',
    skillsToLearn: 'GitOps, Service Mesh, Monitoring',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '209',
        reviewerId: 'platform_engineer',
        reviewerName: 'Platform Engineer Lisa',
        rating: 5,
        comment: 'Excellent CI/CD pipeline design.',
        skillTaught: 'CI/CD',
        date: new Date('2024-02-16')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'isabella',
    name: 'Isabella Garcia',
    email: 'isabella@example.com',
    age: 26,
    city: 'San Diego, CA',
    phone: '+1 (555) 234-5678',
    bio: 'Product designer with a focus on design systems and user experience.',
    skillsKnown: 'Product Design, Design Systems, Sketch, InVision, Usability Testing',
    skillsToLearn: 'Service Design, Design Research, AR/VR Design',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '210',
        reviewerId: 'design_lead',
        reviewerName: 'Design Lead Mark',
        rating: 4,
        comment: 'Great design system implementation.',
        skillTaught: 'Design Systems',
        date: new Date('2024-02-18')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'ethan2',
    name: 'Ethan Davis',
    email: 'ethan.d@example.com',
    age: 28,
    city: 'Nashville, TN',
    phone: '+1 (555) 345-6789',
    bio: 'Backend developer with expertise in microservices and distributed systems.',
    skillsKnown: 'Java, Spring Boot, Microservices, Apache Kafka, Redis',
    skillsToLearn: 'Event Sourcing, CQRS, Golang',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '211',
        reviewerId: 'architect',
        reviewerName: 'Architect Sarah',
        rating: 5,
        comment: 'Excellent microservices architecture patterns.',
        skillTaught: 'Microservices',
        date: new Date('2024-02-20')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'grace',
    name: 'Grace Kim',
    email: 'grace@example.com',
    age: 25,
    city: 'Atlanta, GA',
    phone: '+1 (555) 456-7890',
    bio: 'Content strategist and digital marketer with expertise in SEO and social media.',
    skillsKnown: 'Content Strategy, SEO, Social Media Marketing, Google Analytics',
    skillsToLearn: 'Marketing Automation, Data Analysis, Conversion Optimization',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '212',
        reviewerId: 'marketing_manager',
        reviewerName: 'Marketing Manager Dave',
        rating: 4,
        comment: 'Great SEO strategies and content planning.',
        skillTaught: 'SEO Strategy',
        date: new Date('2024-02-22')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'noah',
    name: 'Noah Wilson',
    email: 'noah@example.com',
    age: 31,
    city: 'Salt Lake City, UT',
    phone: '+1 (555) 567-8901',
    bio: 'Game developer with expertise in Unity and game design principles.',
    skillsKnown: 'Game Development, Unity, C#, Game Design, 3D Graphics',
    skillsToLearn: 'Unreal Engine, VR Development, Shader Programming',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '213',
        reviewerId: 'game_designer',
        reviewerName: 'Game Designer Anna',
        rating: 5,
        comment: 'Amazing Unity tutorials and game mechanics.',
        skillTaught: 'Unity Development',
        date: new Date('2024-02-24')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'violet',
    name: 'Violet Chen',
    email: 'violet@example.com',
    age: 27,
    city: 'San Jose, CA',
    phone: '+1 (555) 678-9012',
    bio: 'Machine learning engineer specializing in NLP and deep learning.',
    skillsKnown: 'Machine Learning, NLP, Deep Learning, PyTorch, Transformers',
    skillsToLearn: 'Computer Vision, MLOps, Reinforcement Learning',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '214',
        reviewerId: 'ml_engineer',
        reviewerName: 'ML Engineer Bob',
        rating: 4,
        comment: 'Excellent NLP model implementation.',
        skillTaught: 'NLP',
        date: new Date('2024-02-26')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'owen',
    name: 'Owen Mitchell',
    email: 'owen@example.com',
    age: 29,
    city: 'Minneapolis, MN',
    phone: '+1 (555) 789-0123',
    bio: 'Full-stack developer with expertise in Python and Django.',
    skillsKnown: 'Python, Django, PostgreSQL, REST APIs, Docker',
    skillsToLearn: 'FastAPI, GraphQL, Kubernetes',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '215',
        reviewerId: 'python_dev',
        reviewerName: 'Python Dev Jane',
        rating: 5,
        comment: 'Great Django best practices and API design.',
        skillTaught: 'Django',
        date: new Date('2024-02-28')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'luna',
    name: 'Luna Rodriguez',
    email: 'luna@example.com',
    age: 24,
    city: 'Tampa, FL',
    phone: '+1 (555) 890-1234',
    bio: 'UI/UX designer passionate about creating intuitive and beautiful interfaces.',
    skillsKnown: 'UI Design, UX Design, Figma, Adobe XD, Prototyping',
    skillsToLearn: 'Motion Design, Design Systems, Frontend Development',
    avatar: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '216',
        reviewerId: 'design_director',
        reviewerName: 'Design Director Mike',
        rating: 4,
        comment: 'Beautiful UI designs and great prototyping skills.',
        skillTaught: 'UI Design',
        date: new Date('2024-03-01')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'alex2',
    name: 'Alex Thompson',
    email: 'alex.t@example.com',
    age: 33,
    city: 'Las Vegas, NV',
    phone: '+1 (555) 901-2345',
    bio: 'Database administrator with expertise in performance optimization.',
    skillsKnown: 'Database Administration, MySQL, PostgreSQL, Performance Tuning',
    skillsToLearn: 'NoSQL, Big Data, Cloud Databases',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '217',
        reviewerId: 'dba',
        reviewerName: 'DBA Carol',
        rating: 5,
        comment: 'Excellent database optimization techniques.',
        skillTaught: 'Database Optimization',
        date: new Date('2024-03-03')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'harper',
    name: 'Harper Davis',
    email: 'harper@example.com',
    age: 26,
    city: 'Kansas City, MO',
    phone: '+1 (555) 012-3456',
    bio: 'Quality assurance engineer with expertise in test automation.',
    skillsKnown: 'QA Testing, Test Automation, Selenium, Cypress, API Testing',
    skillsToLearn: 'Performance Testing, Security Testing, Mobile Testing',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '218',
        reviewerId: 'qa_lead',
        reviewerName: 'QA Lead Steve',
        rating: 4,
        comment: 'Great test automation frameworks.',
        skillTaught: 'Test Automation',
        date: new Date('2024-03-05')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'felix',
    name: 'Felix Garcia',
    email: 'felix@example.com',
    age: 30,
    city: 'Orlando, FL',
    phone: '+1 (555) 123-4567',
    bio: 'Blockchain developer with expertise in smart contracts and DeFi.',
    skillsKnown: 'Blockchain, Solidity, Web3, Smart Contracts, DeFi',
    skillsToLearn: 'Layer 2 Solutions, NFTs, Cross-chain Development',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '219',
        reviewerId: 'blockchain_dev',
        reviewerName: 'Blockchain Dev Emma',
        rating: 5,
        comment: 'Outstanding smart contract security practices.',
        skillTaught: 'Smart Contract Security',
        date: new Date('2024-03-07')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'stella',
    name: 'Stella Wang',
    email: 'stella@example.com',
    age: 25,
    city: 'Raleigh, NC',
    phone: '+1 (555) 234-5678',
    bio: 'Data analyst with expertise in business intelligence and visualization.',
    skillsKnown: 'Data Analysis, Business Intelligence, Tableau, Power BI, SQL',
    skillsToLearn: 'Machine Learning, Python, Advanced Analytics',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '220',
        reviewerId: 'bi_analyst',
        reviewerName: 'BI Analyst Tom',
        rating: 4,
        comment: 'Great data visualization techniques.',
        skillTaught: 'Data Visualization',
        date: new Date('2024-03-09')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'caleb',
    name: 'Caleb Johnson',
    email: 'caleb@example.com',
    age: 28,
    city: 'Louisville, KY',
    phone: '+1 (555) 345-6789',
    bio: 'Network engineer with expertise in network security and infrastructure.',
    skillsKnown: 'Network Engineering, Network Security, Cisco, Firewalls',
    skillsToLearn: 'Cloud Networking, SD-WAN, Network Automation',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '221',
        reviewerId: 'network_admin',
        reviewerName: 'Network Admin Lisa',
        rating: 5,
        comment: 'Excellent network troubleshooting skills.',
        skillTaught: 'Network Troubleshooting',
        date: new Date('2024-03-11')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'aurora',
    name: 'Aurora Martinez',
    email: 'aurora@example.com',
    age: 27,
    city: 'Richmond, VA',
    phone: '+1 (555) 456-7890',
    bio: 'Digital marketing specialist with expertise in PPC and social media advertising.',
    skillsKnown: 'Digital Marketing, PPC, Google Ads, Facebook Ads, Analytics',
    skillsToLearn: 'Marketing Automation, Conversion Rate Optimization, Email Marketing',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '222',
        reviewerId: 'marketing_specialist',
        reviewerName: 'Marketing Specialist John',
        rating: 4,
        comment: 'Great PPC campaign optimization strategies.',
        skillTaught: 'PPC Optimization',
        date: new Date('2024-03-13')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'theo',
    name: 'Theo Brown',
    email: 'theo@example.com',
    age: 32,
    city: 'Buffalo, NY',
    phone: '+1 (555) 567-8901',
    bio: 'Software architect with expertise in system design and scalable applications.',
    skillsKnown: 'Software Architecture, System Design, Microservices, Event-Driven Architecture',
    skillsToLearn: 'Domain-Driven Design, CQRS, Distributed Systems',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '223',
        reviewerId: 'senior_dev',
        reviewerName: 'Senior Dev Kate',
        rating: 5,
        comment: 'Exceptional system architecture knowledge.',
        skillTaught: 'System Architecture',
        date: new Date('2024-03-15')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'ruby',
    name: 'Ruby Taylor',
    email: 'ruby@example.com',
    age: 24,
    city: 'Tucson, AZ',
    phone: '+1 (555) 678-9012',
    bio: 'Frontend developer with expertise in Vue.js and modern CSS frameworks.',
    skillsKnown: 'Vue.js, JavaScript, CSS, Sass, Webpack',
    skillsToLearn: 'React, TypeScript, Testing, Performance Optimization',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c7e9?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '224',
        reviewerId: 'vue_dev',
        reviewerName: 'Vue Dev Mark',
        rating: 4,
        comment: 'Great Vue.js component patterns.',
        skillTaught: 'Vue.js',
        date: new Date('2024-03-17')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'mason',
    name: 'Mason Lee',
    email: 'mason@example.com',
    age: 29,
    city: 'Fresno, CA',
    phone: '+1 (555) 789-0123',
    bio: 'Cloud engineer with expertise in AWS and infrastructure as code.',
    skillsKnown: 'AWS, Terraform, CloudFormation, Lambda, EC2',
    skillsToLearn: 'Azure, GCP, Serverless Architecture',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '225',
        reviewerId: 'cloud_architect',
        reviewerName: 'Cloud Architect Sarah',
        rating: 5,
        comment: 'Excellent Terraform modules and AWS best practices.',
        skillTaught: 'Terraform',
        date: new Date('2024-03-19')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'ivy',
    name: 'Ivy Wilson',
    email: 'ivy@example.com',
    age: 26,
    city: 'Sacramento, CA',
    phone: '+1 (555) 890-1234',
    bio: 'Product manager with expertise in agile development and user experience.',
    skillsKnown: 'Product Management, Agile, User Experience, Analytics, Roadmapping',
    skillsToLearn: 'Data Science, A/B Testing, Growth Hacking',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '226',
        reviewerId: 'product_owner',
        reviewerName: 'Product Owner Dave',
        rating: 4,
        comment: 'Great product roadmapping strategies.',
        skillTaught: 'Product Roadmapping',
        date: new Date('2024-03-21')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'phoenix',
    name: 'Phoenix Garcia',
    email: 'phoenix@example.com',
    age: 31,
    city: 'Mesa, AZ',
    phone: '+1 (555) 901-2345',
    bio: 'Technical writer with expertise in API documentation and developer tools.',
    skillsKnown: 'Technical Writing, API Documentation, Markdown, Git, Developer Tools',
    skillsToLearn: 'Developer Relations, Community Building, Video Production',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '227',
        reviewerId: 'dev_advocate',
        reviewerName: 'Dev Advocate Anna',
        rating: 5,
        comment: 'Excellent API documentation and clear explanations.',
        skillTaught: 'API Documentation',
        date: new Date('2024-03-23')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'sage',
    name: 'Sage Martinez',
    email: 'sage@example.com',
    age: 28,
    city: 'Colorado Springs, CO',
    phone: '+1 (555) 012-3456',
    bio: 'Security engineer with expertise in application security and penetration testing.',
    skillsKnown: 'Application Security, Penetration Testing, OWASP, Security Auditing',
    skillsToLearn: 'Cloud Security, DevSecOps, Threat Modeling',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '228',
        reviewerId: 'security_consultant',
        reviewerName: 'Security Consultant Tom',
        rating: 4,
        comment: 'Great penetration testing methodologies.',
        skillTaught: 'Penetration Testing',
        date: new Date('2024-03-25')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  },
  {
    username: 'river',
    name: 'River Chen',
    email: 'river@example.com',
    age: 25,
    city: 'Virginia Beach, VA',
    phone: '+1 (555) 123-4567',
    bio: 'Mobile developer with expertise in cross-platform development.',
    skillsKnown: 'React Native, Flutter, Mobile Development, Firebase, App Store',
    skillsToLearn: 'Native iOS, Native Android, Mobile Testing',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '229',
        reviewerId: 'mobile_lead',
        reviewerName: 'Mobile Lead Lisa',
        rating: 5,
        comment: 'Excellent React Native performance optimization.',
        skillTaught: 'React Native',
        date: new Date('2024-03-27')
      }
    ],
    averageRating: 5.0,
    totalReviews: 1
  },
  {
    username: 'atlas',
    name: 'Atlas Rodriguez',
    email: 'atlas@example.com',
    age: 30,
    city: 'Birmingham, AL',
    phone: '+1 (555) 234-5678',
    bio: 'Data engineer with expertise in big data processing and ETL pipelines.',
    skillsKnown: 'Data Engineering, Apache Spark, Kafka, Airflow, Python',
    skillsToLearn: 'Stream Processing, Data Mesh, Real-time Analytics',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    reviews: [
      {
        id: '230',
        reviewerId: 'data_engineer',
        reviewerName: 'Data Engineer Mike',
        rating: 4,
        comment: 'Great ETL pipeline design and optimization.',
        skillTaught: 'ETL Pipelines',
        date: new Date('2024-03-29')
      }
    ],
    averageRating: 4.0,
    totalReviews: 1
  }
];
