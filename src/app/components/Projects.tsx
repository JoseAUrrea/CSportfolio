import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import Link from "next/link";

const Projects = () => {
    return (
        <div className=" rounded flex flex-col items-center justify-center pt-16 ">
            <h1 className = "text-[36px] font-bold pb-2">
                Projects
            </h1>
            <p className="pb-4">Click on the titles to reach the repository</p>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:pr-6 pb-16 border-b border-gray-300">
                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-[20px] uppercase font-bold">Compete</p>
                    <p className="font-bold text-[18px]">Virtual Sports & Social Media App</p>
                    <small className="text-[16px]"> Database & Backend</small>
                    <small className="text-[16px]">NextJS, React, Typescript, Tailwind CSS, MySQL, & AWS</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/compete.jpeg"
                    width={400}
                    />
                </CardBody>
                <CardFooter>
                    <small className="text-[16px] px-4">* Private Repository</small>
                </CardFooter>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/ecommerce"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">The Market</p>
                    </a>
                    <p className="font-bold text-[18px]">Ecommerce Website</p>
                    <small className="text-[16px]"> Full Stack</small>
                    <small className="text-[16px]">Python, Django, HTML, SQLite, CSS, & JavaScript</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/ecommerce.jpg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/Equine-Experience"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Ocala Equine Experience</p>
                    </a>
                    <p className="font-bold text-[18px]">Booking Website</p>
                    <small className="text-[16px]">Frontend</small>
                    <small className="text-[16px]">HTML, CSS, Javascript, Bootstrap</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/equine.jpg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/pt-gpt"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Personal Trainer GPT</p>
                    </a>
                    <p className="font-bold text-[18px]">AI Personal Trainer</p>
                    <small className="text-[16px]">Backend & Database</small>
                    <small className="text-[16px]">MERN stack</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/pt-gpt2.jpeg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/puzzle"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Puzzles</p>
                    </a>
                    <p className="font-bold text-[18px]">A draggable and sliding puzzle</p>
                    <small className="text-[16px]">Solo Project </small>
                    <small className="text-[16px]">HTML, CSS, Javascript, JQuery </small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/puzzle.jpg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/canny"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Canny Edge Detector</p>
                    </a>
                    <p className="font-bold text-[18px]">Detects edges of an input image</p>
                    <small className="text-[16px]">Solo Project </small>
                    <small className="text-[16px]">C - Canny Algorithm</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/cannypt2.jpg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/bingo"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Bingo</p>
                    </a>
                    <p className="font-bold text-[18px]">An online bingo game</p>
                    <small className="text-[16px]">Solo Project </small>
                    <small className="text-[16px]">React, HTML, CSS, Javascript</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/bingo.jpg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/OlympicPredictor"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Olympic Medal Predictor</p>
                    </a>
                    <p className="font-bold text-[18px]">Predicts how many medals each country will earn at the next Olympics</p>
                    <small className="text-[16px]">Solo Project </small>
                    <small className="text-[16px]">Python - Machine Learning</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/medals.jpeg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/FootballWebScraper"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Web Scraping Soccer Data</p>
                    </a>
                    <p className="font-bold text-[18px]">Collects team stats from the past three seasons and converts it into a csv file</p>
                    <small className="text-[16px]">Solo Project </small>
                    <small className="text-[16px]">Python - Web Scraper</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/webscrape.jpeg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/ToDoList"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">To Do List</p>
                    </a>
                    <p className="font-bold text-[18px]">A simple to-do list app to keep track of tasks</p>
                    <small className="text-[16px]">Solo Project </small>
                    <small className="text-[16px]">HTML5, CSS, & JavaScript</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/toDoList.jpg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/WordBST"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Word Sorting</p>
                    </a>
                    <p className="font-bold text-[18px]">Analyzes the frequency of words in files</p>
                    <small className="text-[16px]">Solo Project </small>
                    <small className="text-[16px]">C - Binary Search Tree</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/bst.jpeg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="projectCard">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/LibrarySorting"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Library Sorting</p>
                    </a>
                    <p className="font-bold text-[18px]">Given the total pages in x amount of books and a maximum number of pages you will read, the maximum number of books you can fully read is displayed</p>
                    <small className="text-[16px]">Solo Project </small>
                    <small className="text-[16px]">C - Merge Sort</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="/images/mergeSort.jpeg"
                    width={400}
                    />
                </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Projects;