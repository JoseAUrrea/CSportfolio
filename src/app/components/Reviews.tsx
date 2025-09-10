"use client"

import { useRef, useState, useEffect } from 'react';

const ReviewCard = ({ name, review, link }: { name: string; review: string; link: string }) => {
    return (
        <div 
            className="flex flex-col items-center border border-gray-300 rounded-lg p-4 h-[300px] hover:bg-gray-100 cursor-pointer overflow-x-hidden overflow-y-auto w-[280px] sm:w-[320px] md:w-[600px] lg:w-[900px] xl:w-[1000px] flex-shrink-0 snap-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]" 
            onClick={() => window.open(link, "_blank")}
            style={{ minWidth: '280px' }}
        >
            <p className="text-lg sm:text-xl font-bold mb-2 text-center">{name}</p>
            <p className="text-md sm:text-md leading-relaxed">{review}</p>
        </div>
    );
};

const ScrollIndicator = ({ currentIndex, totalItems, onScrollTo }: { 
    currentIndex: number; 
    totalItems: number; 
    onScrollTo: (index: number) => void;
}) => {
    return (
        <div className="flex gap-2 justify-center mt-4">
            {Array.from({ length: totalItems }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onScrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                            ? 'bg-blue-500 w-6' 
                            : 'bg-gray-300 hover:bg-gray-400'
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
            link: "https://altercall.com/team",
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
            
            // Center the card within the container
            const scrollLeft = (index * cardWidth) - (containerWidth / 2) + (cardWidth / 2);
            
            container.scrollTo({
                left: Math.max(0, scrollLeft), // Ensure we don't scroll to negative values
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

        // Center the first card initially
        const centerFirstCard = () => {
            const cardWidth = container.scrollWidth / reviews.length;
            const containerWidth = container.clientWidth;
            const scrollLeft = (0 * cardWidth) - (containerWidth / 2) + (cardWidth / 2);
            container.scrollLeft = Math.max(0, scrollLeft);
        };

        const handleScroll = () => {
            const cardWidth = container.scrollWidth / reviews.length;
            const containerWidth = container.clientWidth;
            
            // Calculate which card is currently centered
            const scrollCenter = container.scrollLeft + (containerWidth / 2);
            
            // Find the closest card to the center
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

        // Center the first card on mount
        centerFirstCard();
        
        container.addEventListener('scroll', handleScroll);
        updateScrollState();

        return () => container.removeEventListener('scroll', handleScroll);
    }, [reviews.length]);

    return (
        <div className="w-screen md:w-[1200px] -mx-4 pt-12 pb-16 border-b border-gray-300 overflow-hidden">
            <h1 className="text-lg sm:text-xl md:text-2xl pb-2 px-4 text-center">
                Reviews from companies and colleagues
            </h1>
            
            {/* Unified horizontal scroll for all screen sizes */}
            <div className="w-full px-4 items-center justify-center">
                <div className="relative w-full max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto p-2">
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
                        {reviews.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </div>
                </div>
                
                {/* Unified scroll indicators for all screen sizes */}
                <ScrollIndicator 
                    currentIndex={currentIndex} 
                    totalItems={reviews.length} 
                    onScrollTo={scrollToIndex}
                />
            </div>

            {/* Scroll hint for mobile */}
            <div className="lg:hidden mt-2 text-sm text-gray-500 text-center">
                ← Swipe to see more reviews →
            </div>
        </div>
    );
};

export default Reviews;