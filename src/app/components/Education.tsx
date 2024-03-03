import Image from "next/image";

const Education = () => {
    return (
        <div className = "flex flex-col items-center justify-center px-4 pt-16">
            <h1 className = "text-[27px] font-bold pb-2">
                Education
            </h1>
            <div className = "flex flex-col md:flex-row gap-4 items-center md:items-start pb-16 border-b border-gray-300">
                <div className = "rounded-full overflow-hidden">
                    <Image
                        src = "/images/ucf.jpeg"
                        alt = "Picture of the author"
                        width = {135}
                        height = {50}
                        className = "rounded-full"
                    >
                    </Image>
                </div>
                <div className = " flex-1 max-w-[900px] rounded-t-xl p-4">
                    <h1 className = "text-[20px] font-bold">
                        University of Central Florida - Orlando, FL
                    </h1>
                    <h2>
                        Bachelor of Science in Computer Science - December 2023
                    </h2>
                    <h2 className="text-[16px]">
                        GPA: 3.0
                    </h2>
                    <h2 className="text-[14px]">
                        Relevant Coursework:
                        <div className="flex gap-6">
                            <ul className="list-disc list-inside">
                                <li>Senior Design I & II</li>
                                <li>Computer Science I & II</li>
                                <li>Object Oriented Programming</li>
                                <li>Database Systems</li>
                                <li>Process for Object-Oriented Software Development</li>
                                <li>Machine Learning</li>
                                <li>Robot Vision</li>
                                <li>Programming Languages</li>
                                
                            </ul>
                            <ul className="list-disc list-inside">
                                <li>Algorithms for Machine Learning</li>
                                <li>Security in Computing</li>
                                <li>Topics in Cyber Security</li>
                                <li>Discrete Structures I & II</li>
                                <li>Systems Software</li>
                                <li>Computer Logic & Organization</li>
                                <li>Web Based Information Technology</li>
                                <li>Foundation Exam</li>

                            </ul>
                        </div>
                    </h2>
                    <h1 className = "text-[20px] font-bold pt-4">
                        Acknowledgements
                    </h1>
                    <span className="text-[14px]">
                        <ul className="list-disc list-inside">
                            <li>Multiple Dean's List </li>
                        </ul>
                    </span>
                    <h1 className = "text-[20px] font-bold pt-4">
                        Certifications
                    </h1>
                    <span className="text-[14px]">
                        <ul className="list-disc list-inside">
                            <li>Google Technical Support Fundamentals - Credential ID: TLX57328BEV8</li>
                            <li>C SoloLearn Course - Credential ID: 1089-17174398</li>
                            <li>C# SoloLearn Course - Credential ID: CC-05QRQ2WY</li>
                            <li>HTML SoloLearn Course - Credential ID: 1014-17174398</li>
                            <li>Microsoft Office Softwares High School Course</li>
                        </ul>
                    </span>
                    <h1 className = "text-[20px] font-bold pt-4">
                        Languages
                    </h1>
                    <span className="text-[14px]">
                        <ul className="list-disc list-inside">
                            <li>English - Native</li>
                            <li>Spanish - Native</li>
                            <li>French - intermediate</li>
                        </ul>
                    </span>
                    <h1 className = "text-[20px] font-bold pt-4">
                        Extracurricular
                    </h1>
                    <span className="text-[14px]">
                        <ul className="list-disc list-inside">
                            <li>HackUCF Member</li>
                            <li>Colombian Student Association Member</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Education;