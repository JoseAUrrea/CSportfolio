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
                        My experience spans across designing scalable systems, crafting user-friendly applications, and leveraging cutting-edge technologies to deliver impactful solutions.
                    </p>

                    <br></br>

                    <p className="indent-5">
                        Currently, as a Mid-Level Full Stack Engineer at AlterCall, I work with technologies like JavaScript, TypeScript, React, Node.js, PostgreSQL, and AWS to design scalable architectures, develop robust APIs, and optimize workflows. 
                        I focus on creating intuitive interfaces by integrating designs from Figma to React and foster collaboration by mentoring peers and conducting code reviews.
                    </p>

                    <br></br>

                    <p className="indent-5">
                        In a previous project, I led the back-end development for a fully responsive web application, enhancing social networking features through algorithm design and ensuring scalability using AWS S3, API Gateway, MySQL RDS, Prisma ORM, and Lambda functions.
                    </p>

                    <br></br>

                    <p className="indent-5">
                        My development approach emphasizes thorough documentation, Agile methodologies, and consistent progress tracking using tools like Jira. This ensures seamless communication and efficiency throughout the development lifecycle.
                    </p>

                    <br></br>

                    <p className="indent-5">
                        Beyond my professional roles, I have gained experience in diverse projects, including machine learning, robot vision, and artificial intelligence. These endeavors have sharpened my skills in backend development, database management, data analysis, and neural network design.
                    </p>

                    <br></br>

                    <p className="indent-5">
                        My goal is to contribute my expertise to a dynamic workplace, continuously grow as a developer, and drive innovation to help achieve company goals.
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
