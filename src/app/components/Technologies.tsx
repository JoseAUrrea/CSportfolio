import { Card, CardBody } from "@nextui-org/react";
import { TechListTypes } from "../types";

const Technologies = ({ techList }: TechListTypes) => {
    return (
        <div className="flex flex-col items-center px-4 pt-16 ">
            <h1 className="text-[25px] font-bold pb-2">
                Technologies
            </h1>
            <div className = "grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-6 pb-16 border-b border-gray-300 w-full"> 
            {techList.map((tech, index) => (
                <Card key={index} className="max-w-[450px] my-2 hover:animate-bounce rounded-2xl px-6 py-2">
                    <CardBody className="flex items-center">
                        <p className = "">{tech}</p>
                    </CardBody>
                </Card>
            ))}
            </div>
        </div>
    )
}

export default Technologies;
