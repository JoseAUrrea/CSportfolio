"use client"
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
    FaCode, 
    FaDatabase, 
    FaPaintBrush, 
    FaUser, 
    FaGithub, 
    FaExternalLinkAlt,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";

// Project data structure
const projectsData = {
    "Full Stack": [
        {
            id: "compete",
            title: "Compete",
            description: "Virtual Sports & Social Media App",
            type: "Database & Backend",
            technologies: ["NextJS", "React", "TypeScript", "Tailwind CSS", "MySQL", "AWS"],
            image: "/images/compete.jpeg",
            githubUrl: null,
            isPrivate: true
        },
        {
            id: "ecommerce",
            title: "The Market",
            description: "Ecommerce Website",
            type: "Full Stack",
            technologies: ["Python", "Django", "HTML", "SQLite", "CSS", "JavaScript"],
            image: "/images/ecommerce.jpg",
            githubUrl: "https://github.com/JoseAUrrea/ecommerce",
            isPrivate: false
        },
        {
            id: "pt-gpt",
            title: "Personal Trainer GPT",
            description: "AI Personal Trainer",
            type: "Backend & Database",
            technologies: ["MERN stack"],
            image: "/images/pt-gpt2.jpeg",
            githubUrl: "https://github.com/JoseAUrrea/pt-gpt",
            isPrivate: false
        }
    ],
    "Frontend": [
        {
            id: "equine",
            title: "Ocala Equine Experience",
            description: "Booking Website",
            type: "Frontend",
            technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
            image: "/images/equine.jpg",
            githubUrl: "https://github.com/JoseAUrrea/Equine-Experience",
            isPrivate: false
        },
        {
            id: "puzzle",
            title: "Puzzles",
            description: "A draggable and sliding puzzle",
            type: "Solo Project",
            technologies: ["HTML", "CSS", "Javascript", "JQuery"],
            image: "/images/puzzle.jpg",
            githubUrl: "https://github.com/JoseAUrrea/puzzle",
            isPrivate: false
        },
        {
            id: "bingo",
            title: "Bingo",
            description: "An online bingo game",
            type: "Solo Project",
            technologies: ["React", "HTML", "CSS", "Javascript"],
            image: "/images/bingo.jpg",
            githubUrl: "https://github.com/JoseAUrrea/bingo",
            isPrivate: false
        }
    ],
    "Backend & Algorithms": [
        {
            id: "canny",
            title: "Canny Edge Detector",
            description: "Detects edges of an input image",
            type: "Solo Project",
            technologies: ["C - Canny Algorithm"],
            image: "/images/cannypt2.jpg",
            githubUrl: "https://github.com/JoseAUrrea/canny",
            isPrivate: false
        },
        {
            id: "bst",
            title: "Word Sorting",
            description: "Analyzes the frequency of words in files",
            type: "Solo Project",
            technologies: ["C - Binary Search Tree"],
            image: "/images/bst.jpeg",
            githubUrl: "https://github.com/JoseAUrrea/WordBST",
            isPrivate: false
        },
        {
            id: "merge-sort",
            title: "Library Sorting",
            description: "Given the total pages in x amount of books and a maximum number of pages you will read, the maximum number of books you can fully read is displayed",
            type: "Solo Project",
            technologies: ["C - Merge Sort"],
            image: "/images/mergeSort.jpeg",
            githubUrl: "https://github.com/JoseAUrrea/LibrarySorting",
            isPrivate: false
        }
    ],
    "Machine Learning": [
        {
            id: "olympic-predictor",
            title: "Olympic Medal Predictor",
            description: "Predicts how many medals each country will earn at the next Olympics",
            type: "Solo Project",
            technologies: ["Python - Machine Learning"],
            image: "/images/medals.jpeg",
            githubUrl: "https://github.com/JoseAUrrea/OlympicPredictor",
            isPrivate: false
        },
        {
            id: "web-scraper",
            title: "Web Scraping Soccer Data",
            description: "Collects team stats from the past three seasons and converts it into a csv file",
            type: "Solo Project",
            technologies: ["Python - Web Scraper"],
            image: "/images/webscrape.jpeg",
            githubUrl: "https://github.com/JoseAUrrea/FootballWebScraper",
            isPrivate: false
        },
        {
            id: "todo-list",
            title: "To Do List",
            description: "A simple to-do list app to keep track of tasks",
            type: "Solo Project",
            technologies: ["HTML5", "CSS", "JavaScript"],
            image: "/images/toDoList.jpg",
            githubUrl: "https://github.com/JoseAUrrea/ToDoList",
            isPrivate: false
        }
    ]
};

const ProjectCard = ({ project }: { project: any }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.isPrivate && (
                    <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Private
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title and Type */}
                <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                        {project.type}
                    </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech: string, index: number) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                            +{project.technologies.length - 3} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const ScrollIndicator = ({ currentIndex, totalItems, onScrollTo }: { 
    currentIndex: number; 
    totalItems: number; 
    onScrollTo: (index: number) => void; 
}) => {
    return (
        <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: totalItems }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onScrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                />
            ))}
        </div>
    );
};

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("Full Stack");
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const categories = Object.keys(projectsData);
    const currentProjects = projectsData[activeCategory as keyof typeof projectsData];

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = 320; // Approximate card width + gap
            container.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
        }
        setCurrentIndex(index);
    };

    const scrollToNext = () => {
        const nextIndex = Math.min(currentIndex + 1, currentProjects.length - 1);
        scrollToIndex(nextIndex);
    };

    const scrollToPrevious = () => {
        const prevIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(prevIndex);
    };

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeCategory]);

    return (
        <div className="flex flex-col w-full items-center justify-center px-4">
            <div className="w-full max-w-6xl">
                {/* Header */}
                <div className="text-center md:text-left mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Projects
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                        A showcase of my development work across different technologies and domains
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`text-sm md:text-base px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                activeCategory === category
                                            ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                                            : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:flex w-full">
                    <div className="w-full min-h-[500px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                            {currentProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Horizontal Scroll Gallery */}
                <div className="md:hidden w-screen -mx-4 overflow-hidden">
                    <div className="w-full px-4 items-center justify-center">
                        <div className="relative w-full py-2">
                            <div 
                                ref={scrollContainerRef}
                                className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth p-4"
                                style={{ 
                                    scrollbarWidth: 'none', 
                                    msOverflowStyle: 'none',
                                    WebkitOverflowScrolling: 'touch',
                                    width: '100%'
                                }}
                            >
                                {currentProjects.map((project) => (
                                    <div key={project.id} className="flex-shrink-0 w-80 snap-center">
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Scroll indicators */}
                        <ScrollIndicator 
                            currentIndex={currentIndex} 
                            totalItems={currentProjects.length} 
                            onScrollTo={scrollToIndex}
                        />
                    </div>

                    {/* Scroll hint for mobile */}
                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                        ← Swipe to see more projects →
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
