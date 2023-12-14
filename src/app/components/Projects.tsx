import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import Link from "next/link";

const Projects = () => {
    return (
        <div className=" rounded flex flex-col items-center justify-center pt-16 ">
            <h1 className = "text-[20px] pb-4">
                Projects
            </h1>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:pr-6 pb-16 border-b border-gray-300">
                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:brightness-150 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Compete</p>
                    <h4 className="font-bold text-large">A virtual sports & social media app built for a client</h4>
                    <small className="text-default-500">NextJS, React, Typescript, Tailwind CSS, MySQL, & AWS</small>
                    <small className="text-default-500">My Roles: Database, Backend, Frontend</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/compete.jpeg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:brightness-150 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/pt-gpt"
                    >
                    <p className="text-tiny uppercase font-bold hover:underline">Personal Trainer GPT</p>
                    </a>
                    <h4 className="font-bold text-large">An AI personal trainer to chat with</h4>
                    <small className="text-default-500">MERN stack</small>
                    <small className="text-default-500">My Role: Database</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/pt-gpt2.jpeg"
                    width={300}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:brightness-150 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/canny"
                    >
                    <p className="text-tiny uppercase font-bold hover:underline">Canny Edge Detector</p>
                    </a>
                    <h4 className="font-bold text-large">A 3 part program to detect edges of an image</h4>
                    <small className="text-default-500">C - Canny Algorithm</small>
                    <small className="text-default-500">Individual</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/cannypt2.jpg"
                    width={250}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:brightness-150 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/OlympicPredictor"
                    >
                    <p className="text-tiny uppercase font-bold hover:underline">Olympic Medal Predictor</p>
                    </a>
                    <h4 className="font-bold text-large">Uses data from previous olympics and predicts how many medals each country will earn at the next Olympics</h4>
                    <small className="text-default-500">Python - Machine Learning</small>
                    <small className="text-default-500">Individual</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/medals.jpeg"
                    width={300}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:brightness-150 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/FootballWebScraper"
                    >
                    <p className="text-tiny uppercase font-bold hover:underline">Web Scraping Soccer Data</p>
                    </a>
                    <h4 className="font-bold text-large">A program to collect team stats from the past three seasons and convert it into a csv file</h4>
                    <small className="text-default-500">Python - Web Scraper</small>
                    <small className="text-default-500">Individual</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/webscrape.jpeg"
                    width={300}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:brightness-150 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/ToDoList"
                    >
                    <p className="text-tiny uppercase font-bold hover:underline">To Do List</p>
                    </a>
                    <h4 className="font-bold text-large">A simple to-do list app to keep track of tasks</h4>
                    <small className="text-default-500">HTML5, CSS, & JavaScript</small>
                    <small className="text-default-500">Individual</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/toDoList.jpg"
                    width={350}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:brightness-150 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/WordBST"
                    >
                    <p className="text-tiny uppercase font-bold hover:underline">Word Sorting</p>
                    </a>
                    <h4 className="font-bold text-large">Analyzes the frequency of words in multiple files</h4>
                    <small className="text-default-500">C - Binary Search Tree</small>
                    <small className="text-default-500">Individual</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/bst.jpeg"
                    width={250}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:brightness-150 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/LibrarySorting"
                    >
                    <p className="text-tiny uppercase font-bold hover:underline">Library Sorting</p>
                    </a>
                    <h4 className="font-bold text-large">Given the total pages in x amount of books and a maximum number of pages you will read, the maximum number of books you can fully read is displayed</h4>
                    <small className="text-default-500">C - Merge Sort</small>
                    <small className="text-default-500">Individual</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/mergeSort.jpeg"
                    width={300}
                    />
                </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Projects;