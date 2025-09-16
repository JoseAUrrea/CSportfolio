import { TechListTypes } from "../types";
import { FaCode, FaDatabase, FaCloud, FaProjectDiagram, FaPalette } from "react-icons/fa";

const Technologies = ({ techList }: TechListTypes) => {

    const techCategories = [
        {
            title: "Programming Languages & Frameworks",
            icon: FaCode,
            color: "blue",
            technologies: ["Python", "C", "C++", "C#", ".NET", "Java", "JavaScript", "TypeScript", "CSS", "HTML5", "NodeJS", "NextJS", "PHP", "Swift", "React", "Angular", "Vue"]
        },
        {
            title: "Backend & Database",
            icon: FaDatabase,
            color: "green",
            technologies: ["SQL", "MongoDB", "Prisma", "PostgreSQL", "MySQL", "SQLite", "Restful", "ORMs"]
        },
        {
            title: "DevOps & Cloud",
            icon: FaCloud,
            color: "purple",
            technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "GitLab"]
        },
        {
            title: "Project Design & Methodologies",
            icon: FaProjectDiagram,
            color: "orange",
            technologies: ["Agile", "Scrum", "Jira", "Trello", "Figma", "Discord", "Slack"]
        },
        {
            title: "Design & Multimedia",
            icon: FaPalette,
            color: "pink",
            technologies: ["Adobe", "Premiere Pro", "Creative Cloud"]
        }
    ];

    const TechnologyTag = ({ tech }: { tech: string }) => (
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            {tech}
        </span>
    );

    return (
        <div className="flex flex-col w-full items-center justify-center px-4">
            <div className="w-full max-w-6xl">
                {/* Header */}
                <div className="text-center md:text-left mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Technologies & Skills
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                        Technologies and skills I have worked with    
                    </p>
                </div>
                {/* Technology Categories */}
                <div className="space-y-6">
                    {techCategories.map((category, categoryIndex) => {
                        const colorClasses = {
                            blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
                            green: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
                            purple: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
                            orange: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
                            pink: "bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800"
                        };

                        const iconColorClasses = {
                            blue: "text-blue-600 dark:text-blue-400",
                            green: "text-green-600 dark:text-green-400",
                            purple: "text-purple-600 dark:text-purple-400",
                            orange: "text-orange-600 dark:text-orange-400",
                            pink: "text-pink-600 dark:text-pink-400"
                        };

                        return (
                            <div key={categoryIndex} className={`rounded-2xl border-2 p-8 ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                                {/* Category Header */}
                                <div className="flex items-center space-x-3 mb-6">
                                    <category.icon className={`text-xl ${iconColorClasses[category.color as keyof typeof iconColorClasses]}`} />
                                    <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h2>
                                </div>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-3">
                                    {category.technologies.map((tech, techIndex) => (
                                        <TechnologyTag key={techIndex} tech={tech} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default Technologies;
