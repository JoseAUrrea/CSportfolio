import { Card, CardBody } from "@nextui-org/react";
import { TechListTypes } from "../types";

const Technologies = ({ techList }: TechListTypes) => {

    const programmingLanguagesAndFrameworks = ["Python", "C", "C++", "C#", ".NET", "Java", "JavaScript", "TypeScript", "CSS", "HTML5", "NodeJS", "NextJS", "PHP", "Swift", "React", "Angular", "Vue"];
    const backendAndDatabases = ["SQL", "MongoDB", "Prisma", "PostgreSQL", "MySQL", "SQLite", "Restful", "ORMs"];
    const devOpsAndCloud = ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "GitLab"];
    const projectDesignAndMethodologies = ["Agile", "Scrum", "Jira", "Trello", "Figma", "Discord", "Slack"];
    const designAndMultimedia = ["Adobe", "Premiere Pro", "Creative Cloud"];
    return (
        <div className="flex flex-col items-center px-4 pt-16 max-w-[1200px]">
            
            <h1 className="text-[36px] font-bold pb-2 mb-6">
                Technologies
            </h1>
            
            <h2 className="text-[20px] pb-4">Programming Languages and Frameworks</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-8 pb-16 border-gray-300 w-full"> 
            {programmingLanguagesAndFrameworks.map((tech, index) => (
                <Card key={index} className="max-w-[800px] px-4 py-2 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md 
                    bg-gradient-to-l from-[rgba(6,182,212,0.4)] to-[rgba(59,130,246,0.4)]">
                    <CardBody className="flex items-center justify-center">
                        <p>{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>
            
            <h2 className="text-[20px] pb-4">Backend and Database</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-8 pb-16 border-gray-300 w-full"> 
            {backendAndDatabases.map((tech, index) => (
                <Card key={index} className="max-w-[800px] px-4 py-2 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md 
                    bg-gradient-to-l from-[rgba(6,182,212,0.4)] to-[rgba(59,130,246,0.4)]">
                    <CardBody className="flex items-center justify-center">
                        <p>{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>
            
            <h2 className="text-[20px] pb-4">DevOps and Cloud</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-8 pb-16 border-gray-300 w-full"> 
            {devOpsAndCloud.map((tech, index) => (
                <Card key={index} className="max-w-[800px] px-4 py-2 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md 
                    bg-gradient-to-l from-[rgba(6,182,212,0.4)] to-[rgba(59,130,246,0.4)]">
                    <CardBody className="flex items-center">
                        <p>{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>

            <h2 className="text-[20px] pb-4">Project Design and Methodologies</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-8 pb-16 border-gray-300 w-full"> 
            {projectDesignAndMethodologies.map((tech, index) => (
                <Card key={index} className="max-w-[800px] px-4 py-2 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md 
                    bg-gradient-to-l from-[rgba(6,182,212,0.4)] to-[rgba(59,130,246,0.4)]">
                    <CardBody className="flex items-center">
                        <p>{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>

            <h2 className="text-[20px] pb-4">Design and Multimedia</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-8 pb-16 border-gray-300 w-full"> 
            {designAndMultimedia.map((tech, index) => (
                <Card key={index} className="max-w-[800px] px-4 py-2 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md 
                    bg-gradient-to-l from-[rgba(6,182,212,0.4)] to-[rgba(59,130,246,0.4)]">
                    <CardBody className="flex items-center">
                        <p>{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>
        </div>
        
    )
}

export default Technologies;
