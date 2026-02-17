import Image from "next/image";

const About = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center px-4 sm:px-6">
            <div className="w-full max-w-4xl mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 text-center bg-white dark:bg-slate-900">
                            <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden border-2 border-slate-100 dark:border-slate-700">
                                <Image 
                                    src="/images/grad3.jpeg" 
                                    alt="Alejandro Urrea" 
                                    width={112} 
                                    height={112} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">Alejandro Urrea</h2>
                            <p className="text-sm font-medium text-accent mb-3">Senior Full Stack Engineer</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                B.S. Computer Science<br />
                                University of Central Florida
                            </p>
                        </div>

                        {/* Mission Card - Desktop Only */}
                        <div className="hidden lg:block mt-6">
                            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-900">
                                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-3">Mission</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    To drive innovation through technology, deliver impactful solutions that solve real-world problems, 
                                    and continuously grow as an engineer while contributing to forward-thinking teams.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Story */}
                    <div className="lg:col-span-2 flex">
                        <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 sm:p-8 w-full bg-white dark:bg-slate-900">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                                Background
                            </h3>
                            <div className="space-y-5">
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    I&apos;m a <span className="font-medium text-slate-900 dark:text-slate-200">Senior Full Stack Engineer</span> with expertise in full-stack development, cloud engineering, and multi-agent AI systems. With over 3 years of industry experience, I specialize in delivering scalable, high-performance solutions that drive real business impact.
                                </p>
                                
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    At <span className="font-medium text-slate-900 dark:text-slate-200">AlterCall</span>, I design and implement multi-agent AI architectures using Python, LangGraph, and OpenAI, while building robust applications with React, Node.js, and AWS. My work spans from transforming Figma designs into pixel-perfect React components to architecting scalable backend systems.
                                </p>
                                
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Previously, I led backend development for a social networking application, building custom algorithms and integrating AWS services. I thrive in fast-paced, collaborative environments using Agile methodologies and enjoy exploring machine learning, robot vision, and AI projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Card - Mobile Only */}
                <div className="lg:hidden mb-8">
                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-900">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-3">Mission</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            To drive innovation through technology, deliver impactful solutions that solve real-world problems, 
                            and continuously grow as an engineer while contributing to forward-thinking teams.
                        </p>
                    </div>
                </div>

                {/* Skills Summary */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: "Full Stack", desc: "React, Node.js, TypeScript, cloud architecture" },
                        { title: "AI / ML", desc: "Multi-agent systems, LangGraph, OpenAI, Python" },
                        { title: "Cloud", desc: "AWS (Lambda, RDS, S3, Cognito), Docker, CI/CD" },
                        { title: "Collaboration", desc: "Agile, Scrum, cross-functional team leadership" },
                    ].map((skill) => (
                        <div key={skill.title} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-white dark:bg-slate-900">
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">{skill.title}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
