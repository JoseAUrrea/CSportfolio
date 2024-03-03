import { Card, CardBody } from "@nextui-org/react";
import { TechListTypes } from "../types";

const Technologies = ({ techList }: TechListTypes) => {

    const programmingLanguagesAndFrameworks = ["Python", "C", "C++", "C#", ".NET", "Java", "JavaScript", "TypeScript", "CSS", "HTML5", "NodeJS", "NextJS", "PHP", "Swift", "React", "Angular", "Vue"];
    const backendAndDatabases = ["SQL", "MongoDB", "Prisma", "PostgreSQL", "MySQL", "SQLite", "Restful", "ORMs"];
    const devOpsAndCloud = ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "GitLab"];
    const projectDesignAndMethodologies = ["Agile", "Scrum", "Jira", "Trello", "Figma", "Discord", "Slack"];
    const designAndMultimedia = ["Adobe Photoshop", "Premiere Pro", "Creative Cloud"];
    return (
        <div className="flex flex-col items-center px-4 pt-16 max-w-[900px]">
            
            <h1 className="text-[25px] font-bold pb-2 mb-6">
                Technologies
            </h1>
            
            <h2 className="text-[20px]">Programming Languages</h2>
            <h2 className="text-[20px]">and Frameworks</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-6 pb-16 border-gray-300 w-full"> 
            {programmingLanguagesAndFrameworks.map((tech, index) => (
                <Card key={index} className="max-w-[450px] my-2 hover:animate-bounce rounded-2xl px-6 py-2 gradient-bg">
                    <CardBody className="flex items-center justify-center">
                        <p className = "text-slate-200">{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>
            
            <h2 className="text-[20px]">Backend and Database</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-6 pb-16 border-gray-300 w-full"> 
            {backendAndDatabases.map((tech, index) => (
                <Card key={index} className="max-w-[450px] my-2 hover:animate-bounce rounded-2xl px-6 py-2 gradient-bg">
                    <CardBody className="flex items-center justify-center">
                        <p className = "text-slate-200">{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>
            
            <h2 className="text-[20px]">DevOps and Cloud</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-6 pb-16 border-gray-300 w-full"> 
            {devOpsAndCloud.map((tech, index) => (
                <Card key={index} className="max-w-[450px] my-2 hover:animate-bounce rounded-2xl px-6 py-2 gradient-bg">
                    <CardBody className="flex items-center">
                        <p className = "text-slate-200">{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>

            <h2 className="text-[20px]">Project Design and Methodologies</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-6 pb-16 border-gray-300 w-full"> 
            {projectDesignAndMethodologies.map((tech, index) => (
                <Card key={index} className="max-w-[450px] my-2 hover:animate-bounce rounded-2xl px-6 py-2 gradient-bg">
                    <CardBody className="flex items-center">
                        <p className = "text-slate-200">{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>

            <h2 className="text-[20px]">Design and Multimedia</h2>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-6 pb-16 border-b border-gray-300 w-full"> 
            {designAndMultimedia.map((tech, index) => (
                <Card key={index} className="max-w-[450px] my-2 hover:animate-bounce rounded-2xl px-6 py-2 gradient-bg">
                    <CardBody className="flex items-center">
                        <p className = "text-slate-200">{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>
        </div>
        
    )
}

export default Technologies;
