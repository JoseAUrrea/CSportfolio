const About = () => {
    const strengths = [
        {
            title: "AI systems",
            desc: "Multi-agent orchestration, tool use, retrieval, model integrations, and evaluation-driven releases.",
        },
        {
            title: "Data workflows",
            desc: "Event-driven processing, document extraction, search, queueing, and reliable recovery paths.",
        },
        {
            title: "Cloud engineering",
            desc: "Azure and AWS architecture, infrastructure as code, identity, networking, and observability.",
        },
        {
            title: "Product delivery",
            desc: "End-to-end ownership across APIs, databases, responsive interfaces, testing, and deployment.",
        },
    ];

    return (
        <div className="flex flex-col w-full gap-6 md:gap-8">
            <div>
                <p className="eyebrow mb-2">Profile</p>
                <h2 className="section-title">I work across the whole system.</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed lg:pr-6">
                    I&apos;m Alejandro, a senior full-stack engineer with 4+ years of experience building production software. My work spans AI applications, cloud infrastructure, data systems, and user-facing products.
                </p>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed lg:border-l lg:border-slate-200 lg:pl-8 dark:lg:border-slate-700">
                    I like taking a system from its hardest technical question to a dependable product: shaping the architecture, building the data and service layers, measuring AI quality, and making sure the result can be operated in production.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {strengths.map((strength) => (
                    <div key={strength.title} className="surface-card border-l-[3px] border-l-[#2855d9] p-4">
                        <h3 className="text-md font-semibold text-slate-900 dark:text-slate-100 mb-1">{strength.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{strength.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
