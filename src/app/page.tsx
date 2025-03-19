import Image from 'next/image'
import { Model } from './components/Model'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Experience from './components/Experience';
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneCode } from "react-icons/ai";
import { FaInfoCircle, FaSuitcase, FaTools, FaCode, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

export default function Home() {

  const techs = ["React", "Angular", "Vue", "Bootstrap", "Next.js", "Node.js", "TypeScript", "JavaScript", 
                "Python", "Java" ,"C", "C#", ".NET","C++", "Swift", "SQL", "MongoDB", 
                "PHP", "HTML", "CSS", "TailwindCSS", "APIs", "AWS", "Azure",
                "Agile", "Scrum", "Git", "Jira", "Docker", "Kubernetes", "CI/CD",
                
              ];
  const photos = [
    "/images/grad2.jpeg",
    // "/images/zion.jpeg",
    "/images/me_event.jpeg",
    // "/images/big_sur.jpeg",
    "/images/family.jpeg",
    "/images/montereyBeach.jpeg",

  ]
  return (

      <div className="animated-background flex flex-col items-center pt-[70px] z-20 pb-10">
          
          <div className='flex flex-col justify-center items-center pt-[20px]'>
            <div className='flex flex-col justify-center items-center '>
            <h1 className="text-[40px] font-bold"> 
              Hi, I'm 
            </h1>
            <h1 className="text-cyan-500 text-[35px] animate-slideIn">
              Jose Alejandro Urrea,
            </h1>
            </div>
            <p className="flex items-center text-[30px] mb-10">
              <span>a Full Stack Engineer</span>
              <AiTwotoneCode className="ml-2 inline-block" size={30} />
            </p>
          </div>


        {/* <Model /> */}



        <hr></hr>


        {/* <div className="flex justify-center items-center relative max-w-[400px]">
          <Image
            src="/images/grad2.jpeg"
            alt="Picture of the author"
            objectFit="cover"
            layout="responsive"
            className="rounded-xl"
            width={500}
            height={300}
          />
        </div> */}

        <div className="projectLayout">
          {photos.map((photo, index) => (
            <div key={index} className="item" >
              <Image
                src={photo} // ✅ Pass the correct image path
                alt="Gallery image"
                objectFit="cover"
                layout="responsive"
                className="rounded-xl"
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>

        {/* <FlipCard /> */}



        <p className='flex items-center pb-6 mt-10 text-[25px]'>
          <CiLocationOn className="inline-block" size={25} />
          <span className='ml-2 text-[25px]'>Los Angeles, CA</span>
        </p>

        <nav className="flex justify-center mt-10 pb-20 z-20 border-b border-gray-300 mb-20 overflow-auto">
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="#about"
              className="tab rounded py-2 md:px-6 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black flex items-center justify-center md:text-xl"
            >
              <span className="hidden sm:inline">About</span>
              <FaInfoCircle className="sm:hidden text-2xl" />
            </a>
            <a
              href="#experience"
              className="tab rounded py-2 md:px-6 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black flex items-center justify-center md:text-xl"
            >
              <span className="hidden sm:inline">Experience</span>
              <FaSuitcase className="sm:hidden text-2xl" />
            </a>
            <a
              href="#technologies"
              className="tab rounded py-2 md:px-6 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black flex items-center justify-center md:text-xl"
            >
              <span className="hidden sm:inline">Technologies</span>
              <FaTools className="sm:hidden text-2xl" />
            </a>
            <a
              href="#projects"
              className="tab rounded py-2 md:px-6 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black flex items-center justify-center md:text-xl"
            >
              <span className="hidden sm:inline">Projects</span>
              <FaCode className="sm:hidden text-2xl" />
            </a>
            <a
              href="#education"
              className="tab rounded py-2 md:px-6 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black flex items-center justify-center md:text-xl"
            >
              <span className="hidden sm:inline">Education</span>
              <FaGraduationCap className="sm:hidden text-2xl" />
            </a>
            <a
              href="#contact"
              className="tab rounded py-2 md:px-6 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black flex items-center justify-center md:text-xl"
            >
              <span className="hidden sm:inline">Contact</span>
              <FaEnvelope className="sm:hidden text-2xl" />
            </a>
          </div>
        </nav>
        

        <div id="about" className="-mt-[100px] pt-[100px]"><About /></div>
        <div id="experience" className="-mt-[100px] pt-[100px]"><Experience /></div>
        <div id="technologies" className="-mt-[100px] pt-[100px]"><Technologies techList={techs} /></div>
        <div id="projects" className="-mt-[100px] pt-[100px]"><Projects /></div>
        <div id="education" className="-mt-[100px] pt-[100px]"><Education /></div>
        <div id="contact" className="-mt-[100px] pt-[100px]"><Contact /></div>
        <div className='h-[200px]'></div>
      </div>

  )
}
