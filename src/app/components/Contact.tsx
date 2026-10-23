import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="flex flex-col w-full gap-6 md:gap-8">
            <div><p className="eyebrow mb-2">Get in touch</p><h2 className="section-title">Let&apos;s build something useful.</h2></div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Email */}
                    <a 
                        href="mailto:joseurrea6135@gmail.com" 
                        className="surface-card p-5 hover:border-[#b9c7ff] hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <FaEnvelope className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-200" />
                            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Email</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">joseurrea6135@gmail.com</p>
                    </a>

                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/jose-urrea-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="surface-card p-5 hover:border-[#b9c7ff] hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <FaLinkedin className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-200" />
                            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">LinkedIn</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">jose-urrea-profile</p>
                    </a>

                    {/* GitHub */}
                    <a 
                        href="https://www.github.com/JoseAUrrea/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="surface-card p-5 hover:border-[#b9c7ff] hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <FaGithub className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-200" />
                            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">GitHub</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">JoseAUrrea</p>
                    </a>
                </div>
        </div>
    );
};

export default Contact;
