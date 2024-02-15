import Image from "next/image";

const About = () => {
    return (
        <div className = "flex flex-col items-center justify-center px-4 pt-16">
            <h1 className = "text-[20px] font-bold pb-2">
                About Me
            </h1>
            <div className = "flex flex-col md:flex-row gap-4 items-center md:items-start pb-16 border-b border-gray-300">
                <div className = "rounded-full border-gray-500 border overflow-hidden">
                    <Image
                        src = "/images/grad.jpeg"
                        alt = "Picture of the author"
                        width = {135}
                        height = {50}
                        className = "rounded-full"
                    >
                    </Image>
                </div>
                <div className = "flex-1 max-w-[700px] border border-cyan-200 rounded-t-xl p-4 bg-gray-700 bg-opacity-25">
                    <div>
                        Welcome to my portfolio!
                        My name is Jose Alejandro Urrea and I attended the University of Central Florida. 
                        I recently graduated with a Bachelor's degree in Computer Science in December 2023.
                        In my most recent experience, I led backend development for a fully responsive web application, focusing on optimizing loading times, maintaining data integrity, and enhancing social networking features through algorithm design. 
                        Leveraging AWS S3, API Gateway, MySQL RDS, Prisma ORM, TypeScript, and Lambda functions, I ensured performance and scalability while delivering impactful solutions. 
                        During development my team and I made sure to record our designs and implementations through thorough documentation.
                        I am a native Spanish and English speaker and I am currently learning French.
                        My goal is to take my experience, knowledge, and skills and apply it to a dynamic workplace.
                        By doing so I hope to continue my growth as a developer and contribute to your company goals.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About