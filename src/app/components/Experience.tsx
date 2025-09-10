"use client"
import Image from "next/image";
import { useState } from "react";
import { FaTools, FaChevronDown} from "react-icons/fa"

const ExperienceTitle = ({level, position, company, dates, technologies, summary}: { level: string; position: string; company: string, dates: string[], technologies: string; summary: string;}) => {
    return(
        <>
        <div className="flex flex-col gap-1 w-full ">
            <h1 className="text-lg md:text-lg font-extrabold text-left">
                {`${level} ${position}`}
            </h1>
            <h1 className="text-md md:text-md font-extrabold text-left">
            {`${company}`} {`(${dates[0]} - ${dates[1]})`}
            </h1>
        </div>
        <p className="my-4">
            {summary}
        </p>
        <div className="flex flex-row gap-4 my-4">
            <FaTools className="text-2xl md:mt-2" />
            <p className="text-sm md:text-md">
                {technologies}
            </p>
        </div>
        </>
    )
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-1 mb-6 md:ml-10">
        <h2 className="font-extrabold text-md">{title}</h2>
        {children}
    </div>
);

const ListItem = ({ title, details }: { title: string; details: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pl-5 mt-2">
            <button
                className="flex gap-2 items-center text-sm"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="font-semibold">{title}</p>
                <FaChevronDown 
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"} border-1`} 
                />
            </button>
            {isOpen && (
                <ul className="list-disc list-inside pl-10 text-sm mt-1">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 pt-12">
            <h1 className="text-[36px] font-bold pb-2">Experience</h1>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start pb-16 border-b border-gray-300">
                <div className="flex-1 max-w-[1200px] rounded-t-xl">

                    <ExperienceTitle 
                        level="Senior"
                        position="Full Stack Engineer"
                        company="AlterCall"
                        dates={["April 2024", "Present"]}
                        technologies="Python, LangGraph, OpenAI, JavaScript, TypeScript, React, Node.js, PostgreSQL, AWS (Cognito, RDS, GraphQL, API Gateway, Lambda, SNS, SQS, RDS, S3 & more)"
                        summary="As a Senior Full Stack Engineer, I design and develop scalable, hierarchical multi-agent AI systems using LangGraph, build robust backend infrastructure to support customer workflows, and create intuitive, production-ready React applications from Figma designs. I collaborate across teams to deliver product-based software that improves user experience and business efficiency. Within Agile Scrum environments, I lead sprints, manage tickets in Jira, and ensure on-time, high-quality feature delivery through clear communication and progress tracking. My work enables scalable AI-driven solutions and seamless end-to-end product experiences."
                    />

                    {/* Backend Section */}
                    <Section title="Backend Engineering ">
                        <ListItem
                            title="Multi-Agent AI Systems"
                            details={[
                                "Developed and maintained a multi-agent AI system using LangGraph and OpenAI/Groq, enabling the platform to handle complex tasks and workflows.",
                            ]}
                        />
                        <ListItem
                            title="Infrastructure as Code (CDK)"
                            details={[
                                "Deployed cloud infrastructure using AWS CDK, provisioning resources such as Lambda functions, API Gateway, S3, and DynamoDB.",
                                "Automated deployments to ensure consistency and scalability across environments.",
                            ]}
                        />
                        <ListItem
                            title="Product-based Software Development"
                            details={[
                                "Developed a product-based system where users could purchase various products and gain access to exclusive features based on their purchases.",
                                "Integrated role-based access control (RBAC) to ensure users received appropriate access according to their product purchases.",
                                "Ensured a seamless user experience in managing purchased products and corresponding access.",
                            ]}
                        />
                        <ListItem
                            title="User Authentication (AWS Cognito)"
                            details={[
                                "Developed and maintained a secure authentication system using AWS Cognito, third party authentication, implementing user pools, API-based sign-up/sign-in, email verification, and password reset workflows.",
                            ]}
                        />
                        <ListItem
                            title="Role-Based Access Control (RBAC)"
                            details={[
                                "Designed an access control system to manage user permissions based on roles such as Owners, Super Admins, Admins, and Users.",
                                "Implemented role-specific UI and API access levels for a seamless user experience.",
                            ]}
                        />
                        <ListItem
                            title="User Invitations & Member Management"
                            details={[
                                "Developed an invitation system allowing users to invite new members to the platform, facilitating team-based features.",
                                "Implemented email notifications for invitation sends, ensuring a seamless onboarding process for invited users.",
                                "Managed member roles and access based on invitation status, ensuring secure and appropriate access control.",
                                "Integrated this feature with the RBAC system to ensure that invited members received the appropriate permissions and access upon joining.",
                            ]}
                        />
                        <ListItem
                            title="REST API with Serverless Lambda"
                            details={[
                                "Developed and deployed serverless RESTful API endpoints using AWS Lambda and API Gateway for scalable backend services.",
                                "Implemented secure API access with AWS Cognito for authentication and authorization.",
                                "Optimized Lambda functions for performance and minimized cold starts by leveraging AWS best practices.",
                                "Automated testing using Postman and ensured smooth API integration with other services.",
                                "Utilized AWS CloudWatch for monitoring and alerting to maintain high availability and reliability.",
                            ]}
                        />
                        <ListItem
                            title="Payments & Webhooks (Stripe API)"
                            details={[
                                "Integrated Stripe webhooks to handle subscription-based payments, upgrades/downgrades, and cancellations.",
                                "Stored transaction history securely within PostgreSQL for reporting and auditing purposes.",
                            ]}
                        />
                        <ListItem
                            title="Caching (Redis)"
                            details={[
                                "Implemented Redis for caching frequently accessed API responses, reducing database load and improving application performance.",
                                "Designed and managed cache invalidation strategies to ensure real-time data consistency.",
                            ]}
                        />
                    </Section>

                    {/* Database Section */}
                    <Section title="Database Management">
                        <ListItem
                            title="Database Migrations"
                            details={[
                                "Developed Python scripts for database schema migrations, ensuring data integrity during structural updates.",
                                "Optimized database indexes and queries to enhance performance.",
                            ]}
                        />
                        <ListItem
                            title="RDS Aurora & PostgreSQL"
                            details={[
                                "Designed relational database schemas and entity-relationship diagrams for efficient data modeling.",
                                "Implemented stored procedures and triggers for complex data operations.",
                            ]}
                        />
                        <ListItem
                            title="DynamoDB"
                            details={[
                                "Created DynamoDB tables with optimized partition keys for high-throughput workloads.",
                                "Implemented DynamoDB Streams to trigger real-time updates and Redis cache invalidation.",
                            ]}
                        />
                    </Section>

                    {/* Frontend Section */}
                    <Section title="Frontend Engineering">
                        <ListItem
                            title="Figma to React"
                            details={["Collaborated with UI/UX designers to transform wireframes into responsive React components."]}
                        />
                        <ListItem
                            title="Component Reusability & Code Optimization"
                            details={[
                                "Built reusable UI components to streamline development and maintain a consistent design system across the app.",
                                "Optimized components for performance by reducing unnecessary re-renders and using techniques like memoization.",
                            ]}
                        />
                        <ListItem
                            title="Responsive Design & Mobile-First Development"
                            details={[
                                "Designed and implemented responsive, mobile-first layouts to ensure seamless user experiences on devices of all sizes.",
                                "Used CSS Flexbox, Grid, and media queries to optimize the layout for different screen sizes.",
                            ]}
                        />
                        <ListItem
                            title="Styling & UI Libraries"
                            details={["Styled components using CSS, Tailwind, and third-party UI libraries like MUI and Pikaicons."]}
                        />
                        <ListItem
                            title="API Integration & State Management"
                            details={[
                                "Implemented API calls using Axios and GraphQL.",
                                "Managed global state with Redux and improved client-side performance using React Query.",
                            ]}
                        />
                        <ListItem
                            title="Performance Optimization"
                            details={[
                                "Improved page load times by optimizing assets, lazy loading images, and using code splitting with React.",
                                "Reduced JavaScript bundle size through tree shaking and efficient import strategies.",
                            ]}
                        />
                        <ListItem
                            title="WebSockets & Real-Time Updates"
                            details={["Set up WebSockets to deliver real-time notifications and UI updates seamlessly."]}
                        />
                    </Section>

                    <Section title="Git">
                        <ListItem
                            title="Version Control & Collaboration"
                            details={[
                                "Utilized Git for version control, branching, and code collaboration in a team setting.",
                                "Participated in code reviews and collaborative workflows using GitHub and GitLab to ensure code quality and knowledge sharing.",
                            ]}
                        />
                    </Section>

                    {/* Internship Section */}
                    <ExperienceTitle 
                        level="Internship"
                        position="Full Stack Engineer"
                        company="Compete BePlayFuel"
                        dates={["May 2023", "December 2023"]}
                        technologies="MySQL, Typescript, TailwindCSS, Prisma ORM, and AWS (Cognito, RDS, Lambda, API Gateway, RDS, S3 & more)"
                        summary="Led the full-stack development for a fully responsive web application, enhancing social networking features through algorithm design and ensuring scalability."
                    />

                    {/* Backend Section */}
                    <Section title="Backend Engineering">
                        <ListItem
                            title="REST API"
                            details={[
                                "Structured Next.js API routes and secured endpoints with AWS Cognito."
                            ]}
                        />
                        <ListItem
                            title="Media Storage & Retrieval"
                            details={[
                                "Configured a secure S3 bucket for user profile and media storage.",
                            ]}
                        />
                        <ListItem
                            title="User Authentication (Cognito)"
                            details={[
                                "Integrated AWS Cognito for authentication with Google, Apple, and Facebook login options."
                            ]}
                        />
                        <ListItem
                            title="Hashtags"
                            details={[
                                "Developed a dynamic hashtag system for post categorization and enhanced discoverability.",
                            ]}
                        />
                    </Section>
                    {/* Database Section */}
                    <Section title="Database Management">
                        <ListItem
                            title="RDS MySQL"
                            details={[
                                "Designed and optimized relational database schemas for social media functionalities.",
                            ]}
                        />
                        <ListItem
                            title="Documentation"
                            details={[
                                "Created and maintained entity-relationship diagrams for clear database structuring."
                            ]}
                        />
                    </Section>
                    <Section title="Frontend">
                        <ListItem
                            title="Figma to React"
                            details={[
                                "Translated Figma wireframes into scalable React components.",
                            ]}
                        />
                        <ListItem
                            title="For you page feed"
                            details={[
                                "Developed a personalized feed algorithm inspired by major platforms, with an optional time-based sorting."
                            ]}
                        />
                        <ListItem
                            title="Navigation and Routing"
                            details={[
                                "Implemented smooth, seamless navigation between pages for an intuitive user experience.",
                            ]}
                        />
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default Experience;
