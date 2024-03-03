import Image from "next/image";

const About = () => {
    return (
        <div className = "flex flex-col items-center justify-center px-4 pt-12">
            <h1 className = "text-[27px] font-bold pb-2">
                About Me
            </h1>
            <div className = "flex flex-col md:flex-row gap-4 items-center md:items-start pb-16 border-b border-gray-300">
                
                <div className = "flex-1 max-w-[800px]  rounded-t-xl">
                    <div>
                        <p className="indent-5">
                            Welcome to my portfolio!
                            I attended the University of Central Florida and recently graduated with a Bachelor's degree in Computer Science in December 2023.
                            I am fluent in both English and Spanish while also having an intermediate understanding of French.
                        </p>

                        <br></br>

                        <p className="indent-5">
                            In my most recent experience, I led the back-end development for a fully responsive web application, focusing on API routing, optimizing loading times, maintaining data integrity, and enhancing social networking features through algorithm design. 
                            Leveraging AWS S3, API Gateway, MySQL RDS, Prisma ORM, TypeScript, and Lambda functions, I ensured performance and scalability while delivering impactful solutions. 
                        </p>

                        <br></br>

                        <p className="indent-5">
                            During development my team and I made sure to record our designs and implementations through thorough documentation.
                            To manage the development lifecycle, we utilized Agile methodologies and Jira to track our progress and maintain a consistent workflow.
                        </p>

                        <br></br>

                        <p className="indent-5">
                        Throughout various projects, including those involving full-stack development, machine learning, robot vision, and artificial intelligence, I've honed my skills in backend development, database management, UI/UX design integration, data analysis, neural network architectures and more.
                        </p>

                        <br></br>

                        <p className="indent-5">
                            My goal is to take my experience, knowledge, and skills and apply it to a dynamic workplace.
                            By doing so I hope to continue my growth as a developer and contribute to your company goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About