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
                <div className="border-cyan-200 px-2">
                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                    <div className="flex-1 max-w-[700px] border border-cyan-200 rounded-lg p-10 bg-gray-700 bg-opacity-25">
                        <div className="flex justify-between">
                        <h1 className="text-[20px] font-bold">
                            Email
                        </h1>
                        <a href="mailto:joseurrea6135@gmail.com">
                            <SiMinutemailer className="w-[25px] h-[25px] text-cyan-500 animate-pulse"/>
                        </a>
                        </div>
                        <h2 className="text-[16px]">
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