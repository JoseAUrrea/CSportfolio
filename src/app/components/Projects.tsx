"use client"
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLock } from "react-icons/fa";

const projectsData = {
    "Full Stack": [
        { id: "compete", title: "Compete", description: "Virtual Sports & Social Media App", type: "Database & Backend", technologies: ["NextJS", "React", "TypeScript", "Tailwind CSS", "MySQL", "AWS"], image: "/images/compete.jpeg", githubUrl: null, isPrivate: true },
        { id: "ecommerce", title: "The Market", description: "Ecommerce Website", type: "Full Stack", technologies: ["Python", "Django", "HTML", "SQLite", "CSS", "JavaScript"], image: "/images/ecommerce.jpg", githubUrl: "https://github.com/JoseAUrrea/ecommerce", isPrivate: false },
        { id: "pt-gpt", title: "Personal Trainer GPT", description: "AI Personal Trainer", type: "Backend & Database", technologies: ["MERN stack"], image: "/images/pt-gpt2.jpeg", githubUrl: "https://github.com/JoseAUrrea/pt-gpt", isPrivate: false }
    ],
    "Frontend": [
        { id: "equine", title: "Ocala Equine Experience", description: "Booking Website", type: "Frontend", technologies: ["HTML", "CSS", "Javascript", "Bootstrap"], image: "/images/equine.jpg", githubUrl: "https://github.com/JoseAUrrea/Equine-Experience", isPrivate: false },
        { id: "puzzle", title: "Puzzles", description: "A draggable and sliding puzzle", type: "Solo Project", technologies: ["HTML", "CSS", "Javascript", "JQuery"], image: "/images/puzzle.jpg", githubUrl: "https://github.com/JoseAUrrea/puzzle", isPrivate: false },
        { id: "bingo", title: "Bingo", description: "An online bingo game", type: "Solo Project", technologies: ["React", "HTML", "CSS", "Javascript"], image: "/images/bingo.jpg", githubUrl: "https://github.com/JoseAUrrea/bingo", isPrivate: false }
    ],
    "Backend & Algorithms": [
        { id: "canny", title: "Canny Edge Detector", description: "Detects edges of an input image", type: "Solo Project", technologies: ["C - Canny Algorithm"], image: "/images/cannypt2.jpg", githubUrl: "https://github.com/JoseAUrrea/canny", isPrivate: false },
        { id: "bst", title: "Word Sorting", description: "Analyzes the frequency of words in files", type: "Solo Project", technologies: ["C - Binary Search Tree"], image: "/images/bst.jpeg", githubUrl: "https://github.com/JoseAUrrea/WordBST", isPrivate: false },
        { id: "merge-sort", title: "Library Sorting", description: "Given total pages and a max reading limit, displays the maximum books you can fully read", type: "Solo Project", technologies: ["C - Merge Sort"], image: "/images/mergeSort.jpeg", githubUrl: "https://github.com/JoseAUrrea/LibrarySorting", isPrivate: false }
    ],
    "Machine Learning": [
        { id: "olympic-predictor", title: "Olympic Medal Predictor", description: "Predicts how many medals each country will earn at the next Olympics", type: "Solo Project", technologies: ["Python - Machine Learning"], image: "/images/medals.jpeg", githubUrl: "https://github.com/JoseAUrrea/OlympicPredictor", isPrivate: false },
        { id: "web-scraper", title: "Web Scraping Soccer Data", description: "Collects team stats from the past three seasons and converts it into a CSV file", type: "Solo Project", technologies: ["Python - Web Scraper"], image: "/images/webscrape.jpeg", githubUrl: "https://github.com/JoseAUrrea/FootballWebScraper", isPrivate: false },
        { id: "todo-list", title: "To Do List", description: "A simple to-do list app to keep track of tasks", type: "Solo Project", technologies: ["HTML5", "CSS", "JavaScript"], image: "/images/toDoList.jpg", githubUrl: "https://github.com/JoseAUrrea/ToDoList", isPrivate: false }
    ]
};

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200 flex flex-col">
            {/* Image */}
            <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
                {project.isPrivate && (
                    <div className="absolute top-3 right-3 bg-slate-900/80 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                        <FaLock className="w-2.5 h-2.5" />
                        Private
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{project.type}</p>
                    </div>
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors duration-200 mt-1"
                        >
                            <FaGithub className="w-4 h-4" />
                        </a>
                    )}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech: string, index: number) => (
                        <span
                            key={index}
                            className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded font-mono border border-slate-100 dark:border-slate-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
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
            const cardWidth = 300;
            container.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
        }
        setCurrentIndex(index);
    };

    useEffect(() => {
        setCurrentIndex(0);
    }, [activeCategory]);

    return (
        <div className="flex flex-col w-full gap-4 md:gap-8">
            {/* Header */}
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
                Projects
            </h2>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`text-sm px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                                activeCategory === category
                                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-5">
                    {currentProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Mobile Scroll */}
                <div className="md:hidden">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {currentProjects.map((project) => (
                            <div key={project.id} className="flex-shrink-0 w-72 snap-center">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                    
                    {/* Scroll indicators */}
                    <div className="flex justify-center gap-1.5 mt-4">
                        {currentProjects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-slate-900 dark:bg-slate-100 w-6'
                                        : 'bg-slate-300 dark:bg-slate-600 w-1.5 hover:bg-slate-400 dark:hover:bg-slate-500'
                                }`}
                            />
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Projects;
