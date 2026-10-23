const Technologies = () => {

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
        <div className="flex flex-col w-full gap-6 md:gap-8">
                {/* Header */}
                    <div><p className="eyebrow mb-2">Toolkit</p><h2 className="section-title">Technologies & skills</h2></div>

                {/* Categories */}
                <div className="grid gap-4 md:grid-cols-2">
                    {techCategories.map((category, index) => (
                        <div key={index} className="surface-card p-5 md:p-6">
                            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="inline-flex items-center px-2.5 py-1 rounded-md text-[.78rem] font-mono bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#b9c7ff] hover:text-[#2855d9] transition-colors duration-150"
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
