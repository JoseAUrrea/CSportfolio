import { SiMinutemailer } from "react-icons/si";
const Contact = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center px-4">
            <div className="w-full max-w-6xl">
                <div className="text-center md:text-left mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact
                    </h1>
                </div>
                <div className="glass-subtle px-2 w-full md:w-1/2">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex flex-col w-full gap-2 py-10 px-4">
                        <div className="flex w-full justify-between">
                            <h1 className="text-lg md:text-2xl font-bold">
                                Email
                            </h1>
                            <a href="mailto:joseurrea6135@gmail.com">
                                <SiMinutemailer className="w-[25px] h-[25px] text-cyan-500 animate-pulse"/>
                            </a>
                        </div>
                        <h2 className="text-base md:text-lg">
                            joseurrea6135@gmail.com
                        </h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
    ) 
}

export default Contact;