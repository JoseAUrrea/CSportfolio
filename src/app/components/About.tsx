import Image from "next/image";
import { FaCode, FaGraduationCap, FaRocket, FaHeart, FaBrain, FaUsers, FaLightbulb } from "react-icons/fa";

const About = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center px-4">
            {/* Hero Section */}
            <div className="w-full max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
            </h1> */}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                    {/* Left Column - Profile Card Only (Desktop) */}
                    <div className="lg:col-span-1">
                        {/* Profile Card */}
                        <div className="glass-effect p-4 md:p-8 text-center">
                            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-white rounded-full p-1">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image 
                                            src="/images/grad3.jpeg" 
                                            alt="Alejandro Urrea" 
                                            width={128} 
                                            height={128} 
                                            className="w-full h-full object-cover" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Alejandro Urrea</h2>
                            <p className="text-lg text-blue-600 dark:text-white font-bold mb-4">Senior Full Stack Engineer</p>
                            <p className="text-base text-gray-600 dark:text-gray-100">
                                B.S. Computer Science<br />
                                University of Central Florida
                            </p>
                        </div>

                        {/* Mission Card - Desktop Only */}
                        <div className="hidden lg:block mt-6">
                            <div className="glass-hero p-4 md:p-6 text-center">
                                <h3 className="text-2xl font-bold mb-3">My Mission</h3>
                                <p className="text-base leading-relaxed">
                                    To drive innovation through technology, deliver impactful solutions that solve real-world problems, 
                                    and continuously grow as an engineer while contributing to forward-thinking teams that shape the future.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Main Story */}
                    <div className="lg:col-span-2 flex">
                        <div className="glass-effect p-4 md:p-8 w-full flex flex-col max-h-[350px] md:max-h-full !overflow-y-auto">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">My Journey</h3>
                            <div className="space-y-6 md:space-y-10 flex-1 flex flex-col justify-center">
                                <p className="text-base md:text-xl text-gray-600 dark:text-gray-100 leading-relaxed">
                                    I'm a <span className="font-semibold text-blue-600 dark:text-blue-200">Senior Full Stack Engineer</span> with expertise in full-stack development, cloud engineering, and multi-agent AI systems. With over 3 years of industry experience, I specialize in delivering scalable, high-performance solutions that drive real business impact.
                                </p>
                                
                                <p className="text-base md:text-xl text-gray-600 dark:text-gray-100 leading-relaxed">
                                    At <span className="font-semibold text-purple-600 dark:text-purple-300">AlterCall</span>, I design and implement multi-agent AI architectures using Python, LangGraph, and OpenAI, while building robust applications with React, Node.js, and AWS. My work spans from transforming Figma designs into pixel-perfect React components to architecting scalable backend systems.
                                </p>
                                
                                <p className="text-base md:text-xl text-gray-600 dark:text-gray-100 leading-relaxed">
                                    Previously, I led backend development for a social networking application, building custom algorithms and integrating AWS services. I thrive in fast-paced, collaborative environments using Agile methodologies and love exploring machine learning, robot vision, and AI projects in my free time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Card - Mobile Only */}
                <div className="lg:hidden md:mb-4">
                    <div className="glass-hero p-4 md:p-6 text-center">
                        <h3 className="text-2xl font-bold mb-3">My Mission</h3>
                        <p className="text-lg leading-relaxed">
                            To drive innovation through technology, deliver impactful solutions that solve real-world problems, 
                            and continuously grow as an engineer while contributing to forward-thinking teams that shape the future.
                        </p>
                    </div>
                </div>

                {/* Skills & Interests Section */}
                <div className="mb-2">
                    {/* Desktop Grid Layout */}
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Technical Skills */}
                        <div className="glass-subtle p-4 md:p-6">
                            <FaCode className="text-3xl text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Skills</h3>
                            <p className="text-base text-gray-600 dark:text-gray-300">
                                Full-stack development, AI/ML systems, cloud architecture, and database design
                            </p>
                        </div>

                        {/* Education */}
                        <div className="glass-subtle p-4 md:p-6">
                            <FaGraduationCap className="text-3xl text-green-600 dark:text-green-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                            <p className="text-base text-gray-600 dark:text-gray-300">
                                B.S. Computer Science from UCF with focus on AI and software engineering
                            </p>
                        </div>

                        {/* Innovation */}
                        <div className="glass-subtle p-4 md:p-6">
                            <FaLightbulb className="text-3xl text-purple-600 dark:text-purple-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                            <p className="text-base text-gray-600 dark:text-gray-300">
                                Passionate about AI, machine learning, and building solutions that make a difference
                            </p>
                        </div>

                        {/* Collaboration */}
                        <div className="glass-subtle p-4 md:p-6">
                            <FaUsers className="text-3xl text-orange-600 dark:text-orange-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h3>
                            <p className="text-base text-gray-600 dark:text-gray-300">
                                Agile methodologies, team leadership, and cross-functional collaboration
                            </p>
                        </div>
                    </div>

                    {/* Mobile Horizontal Scroll Gallery */}
                    <div className="md:hidden w-screen -mx-4 overflow-hidden">
                        <div className="w-full items-center justify-center">
                            <div className="relative w-full max-w-[1000px] mx-auto py-2">
                                <div 
                                    className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth p-4"
                                    style={{ 
                                        scrollbarWidth: 'none', 
                                        msOverflowStyle: 'none',
                                        WebkitOverflowScrolling: 'touch',
                                        width: '100%'
                                    }}
                                >
                                    {/* Technical Skills */}
                                    <div className="flex-shrink-0 w-72 glass-subtle p-4 md:p-6 snap-center">
                                        <FaCode className="text-3xl text-blue-600 dark:text-blue-400 mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Skills</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            Full-stack development, AI/ML systems, cloud architecture, and database design
                                        </p>
                                    </div>

                                    {/* Education */}
                                    <div className="flex-shrink-0 w-72 glass-subtle p-4 md:p-6 snap-center">
                                        <FaGraduationCap className="text-3xl text-green-600 dark:text-green-400 mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            B.S. Computer Science from UCF with focus on AI and software engineering
                                        </p>
                                    </div>

                                    {/* Innovation */}
                                    <div className="flex-shrink-0 w-72 glass-subtle p-4 md:p-6 snap-center">
                                        <FaLightbulb className="text-3xl text-purple-600 dark:text-purple-400 mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            Passionate about AI, machine learning, and building solutions that make a difference
                                        </p>
                                    </div>

                                    {/* Collaboration */}
                                    <div className="flex-shrink-0 w-72 glass-subtle p-4 md:p-6 snap-center">
                                        <FaUsers className="text-3xl text-orange-600 dark:text-orange-400 mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            Agile methodologies, team leadership, and cross-functional collaboration
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default About
