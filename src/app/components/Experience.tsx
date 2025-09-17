"use client"
import Image from "next/image";
import { useState } from "react";
import { 
    FaTools, 
    FaChevronDown, 
    FaCode, 
    FaDatabase, 
    FaPaintBrush, 
    FaGitAlt,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaExternalLinkAlt
} from "react-icons/fa"

// Experience data structure
const experienceData = {
    "Senior Full Stack Engineer": {
        company: "AlterCall",
        dates: ["April 2024", "Present"],
        technologies: ["Python", "LangGraph", "OpenAI", "JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL", "AWS", "Cognito", "RDS", "GraphQL", "API Gateway", "Lambda", "SNS", "SQS", "S3"],
        summary: "As a Senior Full Stack Engineer, I design and develop scalable, hierarchical multi-agent AI systems using LangGraph, build robust backend infrastructure to support customer workflows, and create intuitive, production-ready React applications from Figma designs.",
        sections: {
            "Backend Engineering": {
                icon: FaCode,
                color: "blue",
                items: [
                    {
                        title: "Multi-Agent AI Systems",
                        details: ["Developed and maintained a multi-agent AI system using LangGraph and OpenAI/Groq, enabling the platform to handle complex tasks and workflows."]
                    },
                    {
                        title: "Infrastructure as Code (CDK)",
                        details: [
                            "Deployed cloud infrastructure using AWS CDK, provisioning resources such as Lambda functions, API Gateway, S3, and DynamoDB.",
                            "Automated deployments to ensure consistency and scalability across environments."
                        ]
                    },
                    {
                        title: "Product-based Software Development",
                        details: [
                            "Developed a product-based system where users could purchase various products and gain access to exclusive features based on their purchases.",
                            "Integrated role-based access control (RBAC) to ensure users received appropriate access according to their product purchases.",
                            "Ensured a seamless user experience in managing purchased products and corresponding access."
                        ]
                    },
                    {
                        title: "User Authentication (AWS Cognito)",
                        details: ["Developed and maintained a secure authentication system using AWS Cognito, third party authentication, implementing user pools, API-based sign-up/sign-in, email verification, and password reset workflows."]
                    },
                    {
                        title: "Role-Based Access Control (RBAC)",
                        details: [
                            "Designed an access control system to manage user permissions based on roles such as Owners, Super Admins, Admins, and Users.",
                            "Implemented role-specific UI and API access levels for a seamless user experience."
                        ]
                    },
                    {
                        title: "User Invitations & Member Management",
                        details: [
                            "Developed an invitation system allowing users to invite new members to the platform, facilitating team-based features.",
                            "Implemented email notifications for invitation sends, ensuring a seamless onboarding process for invited users.",
                            "Managed member roles and access based on invitation status, ensuring secure and appropriate access control.",
                            "Integrated this feature with the RBAC system to ensure that invited members received the appropriate permissions and access upon joining."
                        ]
                    },
                    {
                        title: "REST API with Serverless Lambda",
                        details: [
                            "Developed and deployed serverless RESTful API endpoints using AWS Lambda and API Gateway for scalable backend services.",
                            "Implemented secure API access with AWS Cognito for authentication and authorization.",
                            "Optimized Lambda functions for performance and minimized cold starts by leveraging AWS best practices.",
                            "Automated testing using Postman and ensured smooth API integration with other services.",
                            "Utilized AWS CloudWatch for monitoring and alerting to maintain high availability and reliability."
                        ]
                    },
                    {
                        title: "Payments & Webhooks (Stripe API)",
                        details: [
                            "Integrated Stripe webhooks to handle subscription-based payments, upgrades/downgrades, and cancellations.",
                            "Stored transaction history securely within PostgreSQL for reporting and auditing purposes."
                        ]
                    },
                    {
                        title: "Caching (Redis)",
                        details: [
                            "Implemented Redis for caching frequently accessed API responses, reducing database load and improving application performance.",
                            "Designed and managed cache invalidation strategies to ensure real-time data consistency."
                        ]
                    }
                ]
            },
            "Database Management": {
                icon: FaDatabase,
                color: "purple",
                items: [
                    {
                        title: "Database Migrations",
                        details: [
                            "Developed Python scripts for database schema migrations, ensuring data integrity during structural updates.",
                            "Optimized database indexes and queries to enhance performance."
                        ]
                    },
                    {
                        title: "RDS Aurora & PostgreSQL",
                        details: [
                            "Designed relational database schemas and entity-relationship diagrams for efficient data modeling.",
                            "Implemented stored procedures and triggers for complex data operations."
                        ]
                    },
                    {
                        title: "DynamoDB",
                        details: [
                            "Created DynamoDB tables with optimized partition keys for high-throughput workloads.",
                            "Implemented DynamoDB Streams to trigger real-time updates and Redis cache invalidation."
                        ]
                    }
                ]
            },
            "Frontend Engineering": {
                icon: FaPaintBrush,
                color: "green",
                items: [
                    {
                        title: "Figma to React",
                        details: ["Collaborated with UI/UX designers to transform wireframes into responsive React components."]
                    },
                    {
                        title: "Component Reusability & Code Optimization",
                        details: [
                            "Built reusable UI components to streamline development and maintain a consistent design system across the app.",
                            "Optimized components for performance by reducing unnecessary re-renders and using techniques like memoization."
                        ]
                    },
                    {
                        title: "Responsive Design & Mobile-First Development",
                        details: [
                            "Designed and implemented responsive, mobile-first layouts to ensure seamless user experiences on devices of all sizes.",
                            "Used CSS Flexbox, Grid, and media queries to optimize the layout for different screen sizes."
                        ]
                    },
                    {
                        title: "Styling & UI Libraries",
                        details: ["Styled components using CSS, Tailwind, and third-party UI libraries like MUI and Pikaicons."]
                    },
                    {
                        title: "API Integration & State Management",
                        details: [
                            "Implemented API calls using Axios and GraphQL.",
                            "Managed global state with Redux and improved client-side performance using React Query."
                        ]
                    },
                    {
                        title: "Performance Optimization",
                        details: [
                            "Improved page load times by optimizing assets, lazy loading images, and using code splitting with React.",
                            "Reduced JavaScript bundle size through tree shaking and efficient import strategies."
                        ]
                    },
                    {
                        title: "WebSockets & Real-Time Updates",
                        details: ["Set up WebSockets to deliver real-time notifications and UI updates seamlessly."]
                    }
                ]
            },
            "Git": {
                icon: FaGitAlt,
                color: "orange",
                items: [
                    {
                        title: "Version Control & Collaboration",
                        details: [
                            "Utilized Git for version control, branching, and code collaboration in a team setting.",
                            "Participated in code reviews and collaborative workflows using GitHub and GitLab to ensure code quality and knowledge sharing."
                        ]
                    }
                ]
            }
        }
    },
    "Internship Full Stack Engineer": {
        company: "Compete BePlayFuel",
        dates: ["May 2023", "December 2023"],
        technologies: ["MySQL", "TypeScript", "TailwindCSS", "Prisma ORM", "AWS", "Cognito", "RDS", "Lambda", "API Gateway", "S3"],
        summary: "Led the full-stack development for a fully responsive web application, enhancing social networking features through algorithm design and ensuring scalability.",
        sections: {
            "Backend Engineering": {
                icon: FaCode,
                color: "blue",
                items: [
                    {
                        title: "REST API",
                        details: ["Structured Next.js API routes and secured endpoints with AWS Cognito."]
                    },
                    {
                        title: "Media Storage & Retrieval",
                        details: ["Configured a secure S3 bucket for user profile and media storage."]
                    },
                    {
                        title: "User Authentication (Cognito)",
                        details: ["Integrated AWS Cognito for authentication with Google, Apple, and Facebook login options."]
                    },
                    {
                        title: "Hashtags",
                        details: ["Developed a dynamic hashtag system for post categorization and enhanced discoverability."]
                    }
                ]
            },
            "Database Management": {
                icon: FaDatabase,
                color: "purple",
                items: [
                    {
                        title: "RDS MySQL",
                        details: ["Designed and optimized relational database schemas for social media functionalities."]
                    },
                    {
                        title: "Documentation",
                        details: ["Created and maintained entity-relationship diagrams for clear database structuring."]
                    }
                ]
            },
            "Frontend": {
                icon: FaPaintBrush,
                color: "green",
                items: [
                    {
                        title: "Figma to React",
                        details: ["Translated Figma wireframes into scalable React components."]
                    },
                    {
                        title: "For you page feed",
                        details: ["Developed a personalized feed algorithm inspired by major platforms, with an optional time-based sorting."]
                    },
                    {
                        title: "Navigation and Routing",
                        details: ["Implemented smooth, seamless navigation between pages for an intuitive user experience."]
                    }
                ]
            }
        }
    }
};

const TechnologyTag = ({ tech }: { tech: string }) => (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm md:text-lg font-medium bg-blue-100 dark:bg-blue-900 mr-2 mb-2">
        {tech}
    </span>
);

const CategoryCard = ({ title, icon: Icon, color, items, isOpen, onToggle }: { 
    title: string; 
    icon: any; 
    color: string; 
    items: any[]; 
    isOpen: boolean; 
    onToggle: () => void; 
}) => {
    const colorClasses = {
        blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
        green: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
        purple: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
        orange: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800"
    };

    const iconColorClasses = {
        blue: "text-blue-600 dark:text-blue-400",
        green: "text-green-600 dark:text-green-400",
        purple: "text-purple-600 dark:text-purple-400",
        orange: "text-orange-600 dark:text-orange-400"
    };

    return (
        <div className={`glass-subtle transition-all duration-300 ${isOpen ? 'shadow-lg' : 'shadow-md hover:shadow-lg'}`}>
            <button
                onClick={onToggle}
                className="w-full p-4 flex items-center justify-between hover:bg-opacity-50 transition-colors duration-200"
            >
                <div className="flex items-center space-x-3">
                    <Icon className={`text-xl ${iconColorClasses[color as keyof typeof iconColorClasses]}`} />
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-200">({items.length} items)</span>
                </div>
                <FaChevronDown 
                    className={`text-gray-500 dark:text-gray-200 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} 
                />
            </button>
            {isOpen && (
                <div className="px-4 pb-4 space-y-3 max-h-[300px] overflow-y-auto">
                    {items.map((item, index) => (
                        <div key={index} className="rounded-lg p-3 shadow-sm">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">{item.title}</h4>
                            <ul className="space-y-1">
                                {item.details.map((detail: string, detailIndex: number) => (
                                    <li key={detailIndex} className="text-sm text-gray-600 dark:text-white flex items-start">
                                        <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-200 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Experience = () => {
    const [activeRole, setActiveRole] = useState("Senior Full Stack Engineer");
    const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});

    const toggleCategory = (categoryTitle: string) => {
        setOpenCategories(prev => ({
            ...prev,
            [categoryTitle]: !prev[categoryTitle]
        }));
    };

    const currentExperience = experienceData[activeRole as keyof typeof experienceData];

    return (
        <div className="flex flex-col w-full items-center justify-center px-4">
            <div className="w-full max-w-6xl">

                <div className="text-center md:text-left mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Experiences
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                        My work experiences and responsibilities
                    </p>
                </div>

                {/* Role Tabs */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                    {Object.keys(experienceData).map((role) => (
                        <button
                            key={role}
                            onClick={() => setActiveRole(role)}
                            className={`text-sm md:text-base px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                activeRole === role
                                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>

                {/* Experience Card */}
                <div className="glass-effect overflow-hidden">
                    
                    {/* Header Section */}
                    <div className=" bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-8 ">
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <div className="flex flex-col">
                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{activeRole}</h3>
                                <div className="flex items-center space-x-2 mb-2">
                                    <FaMapMarkerAlt className="text-lg text-white" />
                                    <span className="text-base md:text-lg font-semibold text-white">{currentExperience.company}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaCalendarAlt className="text-lg text-white" />
                                    <span className="text-base md:text-lg text-white">
                                        {currentExperience.dates[0]} - {currentExperience.dates[1]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 md:px-8 py-2">
                        <div className="rounded-lg py-2 px-4 md:px-0">
                            <p className="text-base md:text-lg leading-relaxed">
                                {currentExperience.summary}
                            </p>
                        </div>
                    </div>

                    {/* Categories Section */}
                    <div className="pt-4 px-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Responsibilities & Achievements</h3>
                        <div className="space-y-4">
                            {Object.entries(currentExperience.sections).map(([categoryTitle, categoryData]) => (
                                <CategoryCard
                                    key={categoryTitle}
                                    title={categoryTitle}
                                    icon={categoryData.icon}
                                    color={categoryData.color}
                                    items={categoryData.items}
                                    isOpen={openCategories[categoryTitle] || false}
                                    onToggle={() => toggleCategory(categoryTitle)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Technologies Section */}
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap">
                            {currentExperience.technologies.map((tech, index) => (
                                <TechnologyTag key={index} tech={tech} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;
