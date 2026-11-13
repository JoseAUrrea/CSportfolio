const Technologies = () => {
    const techCategories = [
        {
            title: "AI & Retrieval",
            technologies: ["OpenAI", "Anthropic", "Multi-agent orchestration", "RAG & hybrid search", "Reranking", "Evaluation harnesses", "Tool calling"],
        },
        {
            title: "Languages & Product Engineering",
            technologies: ["TypeScript", "Python", "SQL", "Next.js", "React", "Node.js", "Server-sent events"],
        },
        {
            title: "Cloud & Delivery",
            technologies: ["Azure Functions", "Azure App Service", "Azure Front Door & WAF", "Bicep", "AWS", "GitHub Actions", "OIDC CI/CD"],
        },
        {
            title: "Data & Reliability",
            technologies: ["PostgreSQL", "Cosmos DB", "Redis", "Snowflake", "Microsoft Graph", "Event-driven systems", "Observability"],
        },
    ];

    return (
        <div className="flex flex-col w-full gap-6 md:gap-8">
            <div>
                <p className="eyebrow mb-2">Toolkit</p>
                <h2 className="section-title">Skills built in production</h2>
                <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
                    A focused snapshot of the tools and engineering practices I use to build, evaluate, ship, and operate full-stack AI products.
                </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {techCategories.map((category) => (
                    <div key={category.title} className="surface-card p-5 md:p-6">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[.78rem] font-mono text-slate-600 transition-colors duration-150 hover:border-[#b9c7ff] hover:text-[#2855d9] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
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
