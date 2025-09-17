"use client"
import Image from "next/image";
import { 
    FaGraduationCap, 
    FaBook, 
    FaCertificate, 
    FaLanguage, 
    FaUsers, 
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaAward,
    FaCode,
    FaShieldAlt,
    FaGlobe
} from "react-icons/fa";

const Education = () => {
    const coursework = [
        "Senior Design I & II",
        "Computer Science I & II", 
        "Object Oriented Programming",
        "Database Systems",
        "Process for Object-Oriented Software Development",
        "Machine Learning",
        "Robot Vision",
        "Programming Languages",
        "Algorithms for Machine Learning",
        "Security in Computing",
        "Topics in Cyber Security",
        "Discrete Structures I & II",
        "Systems Software",
        "Computer Logic & Organization",
        "Web Based Information Technology",
        "Foundation Exam"
    ];

    const certifications = [
        {
            name: "Google Technical Support Fundamentals",
            credential: "TLX57328BEV8",
            provider: "Google"
        },
        {
            name: "C Programming Course",
            credential: "1089-17174398",
            provider: "SoloLearn"
        },
        {
            name: "C# Programming Course", 
            credential: "CC-05QRQ2WY",
            provider: "SoloLearn"
        },
        {
            name: "HTML Course",
            credential: "1014-17174398", 
            provider: "SoloLearn"
        },
        {
            name: "Microsoft Office Suite",
            credential: "High School Course",
            provider: "Microsoft"
        }
    ];

    const languages = [
        { name: "English", level: "Native", flag: "🇺🇸" },
        { name: "Spanish", level: "Native", flag: "🇨🇴" },
        { name: "French", level: "Intermediate", flag: "🇫🇷" }
    ];

    const extracurriculars = [
        "HackUCF Member",
        "Colombian Student Association Member"
    ];

    const acknowledgments = [
        "Multiple Dean's List Recognition"
    ];

    return (
        <div className="flex flex-col w-full items-center justify-center px-4">
            <div className="w-full max-w-6xl">
                {/* Header */}
                <div className="text-center md:text-left mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Education
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                        Academic foundation and continuous learning journey
                    </p>
                </div>

                {/* Main Education Card */}
                <div className="glass-effect overflow-hidden mb-8">
                    {/* University Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            {/* University Logo */}
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-white rounded-full p-2 shadow-lg">
                                    <Image
                                        src="/images/ucf.jpeg"
                                        alt="UCF Logo"
                                        width={64}
                                        height={24}
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                            </div>
                            
                            {/* University Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    University of Central Florida
                                </h2>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white/90">
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <FaMapMarkerAlt className="text-lg" />
                                        <span className="text-lg font-medium">Orlando, FL</span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <FaCalendarAlt className="text-lg" />
                                        <span className="text-lg font-medium">2018 - 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Degree Information */}
                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400" />
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                Bachelor of Science in Computer Science
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Coursework */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <FaBook className="text-xl text-green-600 dark:text-green-400" />
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Relevant Coursework
                                    </h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {coursework.map((course, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                {course}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Acknowledgments */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <FaAward className="text-xl text-yellow-600 dark:text-yellow-400" />
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Acknowledgments
                                    </h4>
                                </div>
                                <div className="space-y-2">
                                    {acknowledgments.map((ack, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                {ack}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Certifications */}
                    <div className="glass-subtle p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FaCertificate className="text-xl text-purple-600 dark:text-purple-400" />
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Certifications
                            </h4>
                        </div>
                        <div className="space-y-3">
                            {certifications.map((cert, index) => (
                                <div key={index} className="border-l-2 border-purple-200 dark:border-purple-800 pl-3">
                                    <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                                        {cert.name}
                                    </h5>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {cert.provider} • {cert.credential}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="glass-subtle p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FaLanguage className="text-xl text-blue-600 dark:text-blue-400" />
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Languages
                            </h4>
                        </div>
                        <div className="space-y-3">
                            {languages.map((lang, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">{lang.flag}</span>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                                            {lang.name}
                                        </span>
                                    </div>
                                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                                        {lang.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Extracurricular Activities */}
                    <div className="glass-subtle p-6 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <FaUsers className="text-xl text-green-600 dark:text-green-400" />
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Extracurricular
                            </h4>
                        </div>
                        <div className="space-y-2">
                            {extracurriculars.map((activity, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        {activity}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;