import Reviews from "./Reviews";

const About = () => {
    return (
        <div className="flex flex-col w-full gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">About</h2>
            {/* Background */}
            <div>
                <div className="flex flex-col w-full space-y-5 justify-center items-center">
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        I&apos;m a <span className="font-medium text-blue-500 dark:text-slate-200">Senior Full Stack Engineer</span> with 4+ years of experience building production platforms, designing multi-agent AI systems, and delivering cloud infrastructure serving thousands of users — across the full stack from database architecture and serverless backends to responsive frontends.
                    </p>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        At <span className="font-medium text-slate-900 dark:text-slate-200">AlterCall</span>, I built the core platform from the ground up — now serving over 2,000 users — using React, Node.js, and AWS, while designing multi-agent AI architectures with Python, LangGraph, and OpenAI. Beyond the product, I developed internal tools like a commission engine and lead delegation system to streamline company operations.
                    </p>
                </div>
            </div>

            {/* Mission — blockquote accent */}
            {/* <div className="border-l-2 border-slate-900 dark:border-slate-100 pl-6 py-1 max-w-2xl">
                <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Mission:
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    To drive innovation through technology, deliver impactful solutions that solve real-world problems, 
                    and continuously grow as an engineer while contributing to forward-thinking teams.
                </p>
            </div> */}

            {/* Skills */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Full Stack", desc: "NextJS, React, NodeJS, TypeScript, Cloud Architecture" },
                    { title: "AI / ML", desc: "Multi-agent systems, LangGraph, OpenAI, Python" },
                    { title: "Cloud", desc: "AWS (Lambda, RDS, SQS, EC2, S3, Cognito), Docker, CI/CD" },
                    { title: "Collaboration", desc: "Agile, Scrum, cross-functional team leadership" },
                ].map((skill) => (
                    <div
                        key={skill.title}
                        className="border-l-2 border-slate-900 dark:border-slate-100 pl-4"
                    >
                        <h3 className="text-md font-semibold text-slate-900 dark:text-slate-100 mb-1">{skill.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{skill.desc}</p>
                    </div>
                ))}
            </div>

            {/* Testimonials */}
            <Reviews />
        </div>
    );
};

export default About;
