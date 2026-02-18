"use client"
import Image from "next/image";
import { 
    FaGraduationCap, 
    FaCertificate, 
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
        { name: "Google Technical Support Fundamentals", provider: "Google", credential: "TLX57328BEV8" },
        { name: "C Programming Course", provider: "SoloLearn", credential: "1089-17174398" },
        { name: "C# Programming Course", provider: "SoloLearn", credential: "CC-05QRQ2WY" },
        { name: "HTML Course", provider: "SoloLearn", credential: "1014-17174398" },
        { name: "Microsoft Office Suite", provider: "Microsoft", credential: "High School Course" },
    ];

    const languages = [
        { name: "English", level: "Native" },
        { name: "Spanish", level: "Native" },
        { name: "French", level: "Intermediate" },
    ];

    const extracurriculars = [
        "HackUCF Member",
        "Colombian Student Association Member"
    ];

    return (
        <div className="flex flex-col w-full gap-4 md:gap-8">
            {/* Header */}
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Education</h2>

                {/* University Card */}
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-900">
                    {/* University Header */}
                    <div className="bg-slate-100 dark:bg-slate-800 px-6 py-6">
                        <div className="flex items-center gap-5">
                            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full p-1.5 overflow-hidden">
                                <Image
                                    src="/images/ucf.jpeg"
                                    alt="UCF Logo"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                    University of Central Florida
                                </h3>
                                <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mt-1">
                                    <span>Orlando, FL</span>
                                    <span>2018 — 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Degree */}
                    <div className="p-6">
                        <div className="flex items-center gap-2">
                            <FaGraduationCap className="text-lg text-slate-700 dark:text-slate-300" />
                            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                                Bachelor of Science in Computer Science
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Coursework */}
                            <div>
                                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                                    Relevant Coursework
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                    {coursework.map((course, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full flex-shrink-0"></span>
                                            <span className="text-sm text-slate-600 dark:text-slate-400">{course}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Acknowledgments */}
                            <div>
                                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                                    Recognition
                                </h4>
                                <div className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full flex-shrink-0"></span>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">Multiple Dean&apos;s List Recognition</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Certifications */}
                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-900">
                        <div className="flex items-center gap-2 mb-4">
                            <FaCertificate className="text-sm text-slate-600 dark:text-slate-400" />
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                                Certifications
                            </h4>
                        </div>
                        <div className="space-y-3">
                            {certifications.map((cert, index) => (
                                <div key={index} className="border-l-2 border-slate-200 dark:border-slate-700 pl-3">
                                    <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{cert.name}</p>
                                    <p className="text-xs text-slate-400 dark:text-slate-500">{cert.provider}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-900">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                            Languages
                        </h4>
                        <div className="space-y-3">
                            {languages.map((lang, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-sm text-slate-700 dark:text-slate-300">{lang.name}</span>
                                    <span className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded font-medium">
                                        {lang.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Extracurricular */}
                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-900">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
                            Activities
                        </h4>
                        <div className="space-y-2">
                            {extracurriculars.map((activity, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full flex-shrink-0"></span>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{activity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Education;
