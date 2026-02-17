"use client"

import { useRef, useState, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ReviewCard = ({ name, review, link }: { name: string; review: string; link: string }) => {
    return (
        <div 
            className="flex flex-col border border-slate-200 dark:border-slate-700 rounded-lg p-6 h-[350px] bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer overflow-hidden w-[320px] sm:w-[360px] md:w-[500px] lg:w-[600px] xl:w-[700px] flex-shrink-0 snap-center transition-colors duration-200 group" 
            onClick={() => window.open(link, "_blank")}
            style={{ minWidth: '320px' }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{name}</p>
                <FaExternalLinkAlt className="text-slate-300 dark:text-slate-600 text-xs group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors duration-200" />
            </div>

            {/* Review text */}
            <div className="flex-1 overflow-y-auto">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 pr-2">
                    {review}
                </p>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
                    Click to view full profile
                </p>
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
        <div className="flex gap-2 justify-center mt-6">
            {Array.from({ length: totalItems }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onScrollTo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                            ? 'bg-slate-900 dark:bg-slate-100 w-6' 
                            : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500 w-1.5'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                />
            ))}
        </div>
    );
};

const Reviews = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const reviews = [
        {
            name: "AlterCall",
            review: "Alejandro Urrea is a Full Stack Engineer at AlterCall, specializing in front-end development, user interface architecture, and optimizing user experiences. With a Bachelor's in Computer Science from the University of Central Florida, Alejandro leverages his expertise in JavaScript frameworks and modern front-end technologies to engineer high-performance web applications and scalable platforms that support large-scale social networks. His work focuses on creating responsive, intuitive interfaces that drive user engagement while ensuring technical robustness. Alejandro's technical acumen extends across the full stack, allowing him to design and implement end-to-end solutions that integrate seamlessly with backend infrastructures. His experience includes optimizing application performance, architecting scalable systems, and aligning software functionality with business requirements. Passionate about building business software that balances advanced functionality with user-friendly design, Alejandro consistently delivers solutions that enhance system accessibility and operational efficiency.",
            link: "https://altercall.com/team?tab=default-3&q=alejandro",
        },
        {
            name: "Deepesh H.",
            review: "Alejandro has been an outstanding senior team member to work with. He is always approachable, willing to help, and highly knowledgeable in his domain. He played a key role in setting up our AWS infrastructure, including DynamoDB, RDS, Lambda, S3, AppSync, and several other AWS services. Alejandro consistently values team input, engages in thoughtful discussions around ideas, and is always open to improving systems and processes.",
            link: "https://www.linkedin.com/in/jose-urrea-profile/",
        },
        {
            name: "Brandon K.",
            review: "We worked together on a team for two semesters completing our capstone project. Throughout this time Jose's commitment to excellence was evident throughout our collaboration, as he consistently showcased a strong work ethic and a keen willingness to acquire new skills crucial to achieving our project milestones. His proactive approach to learning and adapting to evolving project requirements greatly contributed to the overall success of our team. Additionally, Jose's exceptional communication skills played a pivotal role in fostering a positive team dynamic, ensuring efficient collaboration and understanding among team members. Overall, I believe Jose's dedication, work ethic, and interpersonal skills make him an asset to any team or project.",
            link: "https://www.linkedin.com/in/jose-urrea-profile/",
        },
    ];

    const updateScrollState = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.scrollWidth / reviews.length;
            const containerWidth = container.clientWidth;
            
            const scrollLeft = (index * cardWidth) - (containerWidth / 2) + (cardWidth / 2);
            
            container.scrollTo({
                left: Math.max(0, scrollLeft),
                behavior: 'smooth'
            });
        }
    };

    const scrollToNext = () => {
        if (currentIndex < reviews.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    };

    const scrollToPrevious = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const centerFirstCard = () => {
            const cardWidth = container.scrollWidth / reviews.length;
            const containerWidth = container.clientWidth;
            const scrollLeft = (0 * cardWidth) - (containerWidth / 2) + (cardWidth / 2);
            container.scrollLeft = Math.max(0, scrollLeft);
        };

        const handleScroll = () => {
            const cardWidth = container.scrollWidth / reviews.length;
            const containerWidth = container.clientWidth;
            
            const scrollCenter = container.scrollLeft + (containerWidth / 2);
            
            let closestIndex = 0;
            let minDistance = Infinity;
            
            for (let i = 0; i < reviews.length; i++) {
                const cardCenter = (i * cardWidth) + (cardWidth / 2);
                const distance = Math.abs(scrollCenter - cardCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = i;
                }
            }
            
            setCurrentIndex(closestIndex);
            updateScrollState();
        };

        centerFirstCard();
        
        container.addEventListener('scroll', handleScroll);
        updateScrollState();

        return () => container.removeEventListener('scroll', handleScroll);
    }, [reviews.length]);

    return (
        <div className="flex flex-col w-full items-center justify-center px-4 sm:px-6">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">Testimonials</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">What colleagues and collaborators say</p>
                </div>

                {/* Reviews Container */}
                <div className="overflow-hidden -mx-4 sm:-mx-6">
                    <div className="w-full items-center justify-center">
                        <div className="relative w-full max-w-[1000px] md:max-w-[1200px] mx-auto md:mx-0 p-2">
                            <div 
                                ref={scrollContainerRef}
                                className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth p-4"
                                style={{ 
                                    scrollbarWidth: 'none', 
                                    msOverflowStyle: 'none',
                                    WebkitOverflowScrolling: 'touch',
                                    width: '100%'
                                }}
                            >
                                {reviews.map((review) => (
                                    <ReviewCard key={review.name} {...review} />
                                ))}
                            </div>
                            
                            <ScrollIndicator 
                                currentIndex={currentIndex} 
                                totalItems={reviews.length} 
                                onScrollTo={scrollToIndex}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
