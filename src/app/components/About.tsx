import Image from "next/image";

const About = () => {
    return (
        <div className = "flex flex-col w-full items-center justify-center px-4 pt-12 pb-8">
            <h1 className = "text-[36px] font-bold pb-2">
                About Me
            </h1>
            <div className = "flex flex-col md:flex-row gap-4 items-center md:items-start">
                
                <div className = "flex-1 max-w-[1200px] rounded-t-xl">
                <div className="">
                    <p className="indent-5">
                        I'm a Senior Full Stack Engineer with expertise in full-stack development, cloud engineering, and multi-agent AI systems. I hold a B.S. in Computer Science from the University of Central Florida and bring over 3 years of industry experience delivering scalable, high-performance solutions.
                    </p>

                    <br />

                    <p className="indent-5">
                        At AlterCall, I design and implement multi-agent AI architectures and build robust, end-to-end applications using Python, LangGraph, OpenAI, JavaScript, TypeScript, React, Node.js, PostgreSQL, and AWS. My work spans front-end development — integrating Figma designs into React — and back-end systems, including efficient server-side logic and database structures.
                    </p>

                    <br />

                    <p className="indent-5">
                        Previously, I led back-end development for a fully responsive social networking application, building custom algorithms, improving scalability, and integrating AWS services like S3, API Gateway, MySQL RDS, Prisma ORM, and Lambda.
                    </p>

                    <br />

                    <p className="indent-5">
                        I work best in fast-paced, collaborative environments, applying Agile methodologies, thorough documentation, and Jira for progress tracking. Outside of work, I've built projects in machine learning, robot vision, and AI, deepening my skills in data analysis, database management, and neural network design.
                    </p>

                    <br />

                    <p className="indent-5">
                    My goal is to drive innovation, deliver impactful solutions, and continue growing as an engineer within a forward-thinking team.
                    </p>

                </div>
                </div>
            </div>
        </div>
    )
}

export default About
