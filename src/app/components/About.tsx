import Image from "next/image";

const About = () => {
    return (
        <div className = "flex flex-col items-center justify-center px-4 pt-12">
            <h1 className = "text-[27px] font-bold pb-2">
                About Me
            </h1>
            <div className = "flex flex-col md:flex-row gap-4 items-center md:items-start pb-16 border-b border-gray-300">
                
                <div className = "flex-1 max-w-[1200px]  rounded-t-xl">
                <div>
                    <p className="indent-5">
                        I am a Computer Science graduate from the University of Central Florida with a strong foundation in full-stack development and cloud engineering. 
                        My experience spans designing scalable systems, crafting user-friendly applications, and leveraging cutting-edge technologies to deliver impactful solutions.
                    </p>

                    <br />

                    <p className="indent-5">
                        Currently, as a Mid-Level Full Stack Engineer at AlterCall, I work with technologies like JavaScript, TypeScript, React, Node.js, PostgreSQL, and AWS to design scalable architectures, build robust APIs, and develop end-to-end features across the stack. 
                        I contribute to both front-end and back-end development — from integrating Figma designs into React components to implementing efficient server-side logic and database structures. 
                        I thrive in fast-paced environments and consistently deliver high-performance, well-architected solutions under tight deadlines.
                    </p>

                    <br />

                    <p className="indent-5">
                        In a previous role, I led back-end development for a fully responsive web application, enhancing social networking features through custom algorithms and ensuring scalability using AWS S3, API Gateway, MySQL RDS, Prisma ORM, and Lambda functions.
                    </p>

                    <br />

                    <p className="indent-5">
                        My workflow emphasizes thorough documentation, Agile methodologies, and consistent progress tracking with tools like Jira — enabling seamless collaboration and efficient delivery throughout the development lifecycle.
                    </p>

                    <br />

                    <p className="indent-5">
                        Outside of work, I’ve explored projects in machine learning, robot vision, and artificial intelligence, which have deepened my skills in backend systems, database management, data analysis, and neural network design.
                    </p>

                    <br />

                    <p className="indent-5">
                        My goal is to contribute my expertise to a dynamic team, continuously grow as a developer, and help drive innovative solutions that align with company objectives.
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
