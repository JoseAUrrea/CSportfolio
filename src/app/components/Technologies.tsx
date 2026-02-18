import { TechListTypes } from "../types";

const Technologies = ({ techList }: TechListTypes) => {

    const techCategories = [
        {
            title: "Languages & Frameworks",
            technologies: ["Python", "C", "C++", "C#", ".NET", "Java", "JavaScript", "TypeScript", "CSS", "HTML5", "NodeJS", "NextJS", "PHP", "Swift", "React", "Angular", "Vue"]
        },
        {
            title: "Backend & Database",
            technologies: ["SQL", "MongoDB", "Prisma", "PostgreSQL", "MySQL", "SQLite", "RESTful APIs", "ORMs"]
        },
        {
            title: "DevOps & Cloud",
            technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "GitLab"]
        },
        {
            title: "Methodologies & Tools",
            technologies: ["Agile", "Scrum", "Jira", "Trello", "Figma", "Discord", "Slack"]
        },
        {
            title: "Design & Multimedia",
            technologies: ["Adobe", "Premiere Pro", "Creative Cloud"]
        }
    ];

    return (
        <div className="flex flex-col w-full gap-4 md:gap-8">
                {/* Header */}
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
                        Technologies & Skills
                    </h2>

                {/* Categories */}
                <div className="space-y-6">
                    {techCategories.map((category, index) => (
                        <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-900">
                            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-mono bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-150"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Technologies;
