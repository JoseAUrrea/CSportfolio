import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="flex flex-col w-full gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Contact</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Email */}
                    <a 
                        href="mailto:joseurrea6135@gmail.com" 
                        className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 group"
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
                        className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 group"
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
                        className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 group"
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
