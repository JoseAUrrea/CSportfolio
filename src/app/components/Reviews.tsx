"use client"

const ReviewCard = ({ name, review, link }: { name: string; review: string; link: string }) => {
    return (
        <div 
            className="flex flex-col items-center border border-gray-300 rounded-lg p-4 h-[300px] hover:bg-gray-100 cursor-pointer overflow-x-hidden overflow-y-auto w-[350px] md:w-[400px] flex-shrink-0 snap-center" 
            onClick={() => window.open(link, "_blank")}
        >
            <p className="text-xl font-bold">{name}</p>
            <p className="text-md">{review}</p>
        </div>
    );
};

const Reviews = () => {
    const reviews = [
        {
            name: "Alter Call",
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

    return (
        <div className="flex flex-col w-full justify-center items-center pt-12 pb-16 border-b border-gray-300">
            <h1 className="text-lg sm:text-xl md:text-2xl pb-6 px-4 text-center max-w-full">
                Reviews from companies and colleagues
            </h1>
            {/* Desktop: Center all cards */}
            <div className="hidden md:flex gap-4 justify-center items-center px-4 max-w-[1400px]">
                {reviews.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </div>
            {/* Mobile: Horizontal scroll with one card at a time */}
            <div className="md:hidden flex gap-4 items-center w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-4">
                {reviews.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </div>
        </div>
    );
};

export default Reviews;