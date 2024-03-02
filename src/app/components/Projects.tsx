import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import Link from "next/link";

const Projects = () => {
    return (
        <div className=" rounded flex flex-col items-center justify-center pt-16 ">
            <h1 className = "text-[25px] font-bold pb-2">
                Projects
            </h1>
            <p className="pb-4">Click on the titles to reach the repository</p>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:pr-6 pb-16 border-b border-gray-300">
                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Compete</p>
                    <h4 className="font-bold text-large">A virtual sports & social media app built for a client</h4>
                    <small className="text-default-500">NextJS, React, Typescript, Tailwind CSS, MySQL, & AWS</small>
                    <small className="text-default-500">My Roles: Database & Backend</small>
                    <small className="text-default-500">* Do not own access to repository</small>
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

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/ecommerce"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">The Market</p>
                    </a>
                    <h4 className="font-bold text-large">An ecommerce site to shop for what you need</h4>
                    <small className="text-default-500">Python, Django, HTML, SQLite, CSS, & JavaScript</small>
                    <small className="text-default-500">My Roles: Full Stack</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/ecommerce.jpg"
                    width={400}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/Equine-Experience"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Ocala Equine Experience</p>
                    </a>
                    <h4 className="font-bold text-large">Book your perfect stay with this website</h4>
                    <small className="text-default-500">HTML, CSS, Javascript, Bootstrap</small>
                    <small className="text-default-500">My Role: Frontend</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/equine.jpg"
                    width={375}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/pt-gpt"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Personal Trainer GPT</p>
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

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/puzzle"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Puzzles</p>
                    </a>
                    <h4 className="font-bold text-large">A draggable and sliding puzzle</h4>
                    <small className="text-default-500">HTML, CSS, Javascript, JQuery </small>
                    <small className="text-default-500">Individual</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/puzzle.jpg"
                    width={350}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/canny"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Canny Edge Detector</p>
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

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/bingo"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Bingo</p>
                    </a>
                    <h4 className="font-bold text-large">An online bingo game</h4>
                    <small className="text-default-500">React, HTML, CSS, Javascript</small>
                    <small className="text-default-500">My Role: Individual </small>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-1 items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/bingo.jpg"
                    width={370}
                    />
                </CardBody>
                </Card>

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/OlympicPredictor"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Olympic Medal Predictor</p>
                    </a>
                    <h4 className="font-bold text-large">Uses data from previous Olympics and predicts how many medals each country will earn at the next Olympics</h4>
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

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/FootballWebScraper"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Web Scraping Soccer Data</p>
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

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/ToDoList"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">To Do List</p>
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

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/WordBST"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Word Sorting</p>
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

                <Card className="py-2 px-1 md:w-[400px] w-[350px] bg-gray-600 hover:bg-opacity-40 bg-opacity-25 rounded-lg">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <a
                        target="_blank"
                        href="https://github.com/JoseAUrrea/LibrarySorting"
                    >
                    <p className="text-tiny uppercase font-bold underline underline-offset-2 hover:text-blue-700">Library Sorting</p>
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