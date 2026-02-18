"use client"
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const experienceData = {
    "Senior Full Stack Engineer": {
        company: "AlterCall",
        dates: ["April 2024", "Present"],
        technologies: ["Python", "LangGraph", "OpenAI", "JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL", "AWS", "Cognito", "RDS", "GraphQL", "API Gateway", "Lambda", "SNS", "SQS", "S3"],
        summary: "Design and develop scalable, hierarchical multi-agent AI systems using LangGraph, build robust backend infrastructure to support customer workflows, and create production-ready React applications from Figma designs.",
        sections: {
            "Backend Engineering": {
                items: [
                    { title: "Multi-Agent AI Systems", details: ["Developed and maintained a multi-agent AI system using LangGraph and OpenAI/Groq, enabling the platform to handle complex tasks and workflows."] },
                    { title: "Infrastructure as Code (CDK)", details: ["Deployed cloud infrastructure using AWS CDK, provisioning resources such as Lambda functions, API Gateway, S3, and DynamoDB.", "Automated deployments to ensure consistency and scalability across environments."] },
                    { title: "Product-based Software Development", details: ["Developed a product-based system where users could purchase various products and gain access to exclusive features based on their purchases.", "Integrated role-based access control (RBAC) to ensure users received appropriate access according to their product purchases."] },
                    { title: "User Authentication (AWS Cognito)", details: ["Developed and maintained a secure authentication system using AWS Cognito, implementing user pools, API-based sign-up/sign-in, email verification, and password reset workflows."] },
                    { title: "Role-Based Access Control (RBAC)", details: ["Designed an access control system to manage user permissions based on roles such as Owners, Super Admins, Admins, and Users.", "Implemented role-specific UI and API access levels for a seamless user experience."] },
                    { title: "User Invitations & Member Management", details: ["Developed an invitation system allowing users to invite new members to the platform.", "Implemented email notifications for invitation sends, ensuring a seamless onboarding process.", "Integrated this feature with the RBAC system for appropriate permissions upon joining."] },
                    { title: "REST API with Serverless Lambda", details: ["Developed and deployed serverless RESTful API endpoints using AWS Lambda and API Gateway.", "Implemented secure API access with AWS Cognito for authentication and authorization.", "Utilized AWS CloudWatch for monitoring and alerting to maintain high availability."] },
                    { title: "Payments & Webhooks (Stripe API)", details: ["Integrated Stripe webhooks to handle subscription-based payments, upgrades/downgrades, and cancellations.", "Stored transaction history securely within PostgreSQL for reporting and auditing."] },
                    { title: "Caching (Redis)", details: ["Implemented Redis for caching frequently accessed API responses, reducing database load.", "Designed cache invalidation strategies to ensure real-time data consistency."] }
                ]
            },
            "Database Management": {
                items: [
                    { title: "Database Migrations", details: ["Developed Python scripts for database schema migrations, ensuring data integrity.", "Optimized database indexes and queries to enhance performance."] },
                    { title: "RDS Aurora & PostgreSQL", details: ["Designed relational database schemas and entity-relationship diagrams.", "Implemented stored procedures and triggers for complex data operations."] },
                    { title: "DynamoDB", details: ["Created DynamoDB tables with optimized partition keys for high-throughput workloads.", "Implemented DynamoDB Streams to trigger real-time updates and Redis cache invalidation."] }
                ]
            },
            "Frontend Engineering": {
                items: [
                    { title: "Figma to React", details: ["Collaborated with UI/UX designers to transform wireframes into responsive React components."] },
                    { title: "Component Reusability & Optimization", details: ["Built reusable UI components to streamline development and maintain a consistent design system.", "Optimized components for performance by reducing unnecessary re-renders and using memoization."] },
                    { title: "Responsive Design", details: ["Designed and implemented responsive, mobile-first layouts.", "Used CSS Flexbox, Grid, and media queries to optimize for different screen sizes."] },
                    { title: "API Integration & State Management", details: ["Implemented API calls using Axios and GraphQL.", "Managed global state with Redux and improved client-side performance using React Query."] },
                    { title: "WebSockets & Real-Time Updates", details: ["Set up WebSockets to deliver real-time notifications and UI updates."] }
                ]
            },
            "Version Control": {
                items: [
                    { title: "Git & Collaboration", details: ["Utilized Git for version control, branching, and code collaboration.", "Participated in code reviews using GitHub and GitLab to ensure code quality."] }
                ]
            }
        }
    },
    "Full Stack Engineer Intern": {
        company: "Compete BePlayFuel",
        dates: ["May 2023", "December 2023"],
        technologies: ["MySQL", "TypeScript", "TailwindCSS", "Prisma ORM", "AWS", "Cognito", "RDS", "Lambda", "API Gateway", "S3"],
        summary: "Led full-stack development for a responsive social networking application, enhancing features through algorithm design and ensuring scalability with AWS services.",
        sections: {
            "Backend Engineering": {
                items: [
                    { title: "REST API", details: ["Structured Next.js API routes and secured endpoints with AWS Cognito."] },
                    { title: "Media Storage & Retrieval", details: ["Configured a secure S3 bucket for user profile and media storage."] },
                    { title: "User Authentication (Cognito)", details: ["Integrated AWS Cognito for authentication with Google, Apple, and Facebook login."] },
                    { title: "Hashtags", details: ["Developed a dynamic hashtag system for post categorization and discoverability."] }
                ]
            },
            "Database Management": {
                items: [
                    { title: "RDS MySQL", details: ["Designed and optimized relational database schemas for social media features."] },
                    { title: "Documentation", details: ["Created and maintained entity-relationship diagrams for database structuring."] }
                ]
            },
            "Frontend": {
                items: [
                    { title: "Figma to React", details: ["Translated Figma wireframes into scalable React components."] },
                    { title: "For You Page Feed", details: ["Developed a personalized feed algorithm inspired by major platforms, with optional time-based sorting."] },
                    { title: "Navigation and Routing", details: ["Implemented smooth navigation between pages for an intuitive user experience."] }
                ]
            }
        }
    }
};

const CategoryCard = ({ title, items, isOpen, onToggle }: { 
    title: string; 
    items: any[]; 
    isOpen: boolean; 
    onToggle: () => void; 
}) => {
    return (
        <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800">
            <button
                onClick={onToggle}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-150"
            >
                <div className="flex items-center gap-3">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
                    <span className="text-xs text-slate-400 dark:text-slate-500">{items.length}</span>
                </div>
                <FaChevronDown 
                    className={`text-slate-400 dark:text-slate-500 text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
                />
            </button>
            {isOpen && (
                <div className="px-5 pb-5 space-y-4 border-t border-slate-100 dark:border-slate-700">
                    {items.map((item, index) => (
                        <div key={index} className="pt-4">
                            <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-2">{item.title}</h4>
                            <ul className="space-y-1.5">
                                {item.details.map((detail: string, detailIndex: number) => (
                                    <li key={detailIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                        <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
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
        <div className="flex flex-col w-full gap-4 md:gap-8">
                {/* Header */}
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Experience</h2>

                {/* Role Tabs */}
                <div className="flex flex-wrap gap-2">
                    {Object.keys(experienceData).map((role) => (
                        <button
                            key={role}
                            onClick={() => {
                                setActiveRole(role);
                                setOpenCategories({});
                            }}
                            className={`text-sm px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                                activeRole === role
                                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>

                {/* Experience Card */}
                <div className="border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-900">
                    {/* Header */}
                    <div className="bg-slate-100 dark:bg-slate-800 border-b border-slate-400 dark:border-slate-700 px-6 py-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">{activeRole}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>{currentExperience.company}</span>
                            <span>{currentExperience.dates[0]} — {currentExperience.dates[1]}</span>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {currentExperience.summary}
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="p-6 space-y-3">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                            Responsibilities & Achievements
                        </h3>
                        {Object.entries(currentExperience.sections).map(([categoryTitle, categoryData]) => (
                            <CategoryCard
                                key={categoryTitle}
                                title={categoryTitle}
                                items={categoryData.items}
                                isOpen={openCategories[categoryTitle] || false}
                                onToggle={() => toggleCategory(categoryTitle)}
                            />
                        ))}
                    </div>

                    {/* Technologies */}
                    <div className="px-6 pb-6">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3">
                            Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {currentExperience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Experience;
