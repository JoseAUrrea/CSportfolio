import Image from 'next/image'
import { Model } from './components/Model'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneCode } from "react-icons/ai";

export default function Home() {

  const techs = ["React", "Angular", "Vue", "Bootstrap", "Next.js", "Node.js", "TypeScript", "JavaScript", 
                "Python", "Java" ,"C", "C#", ".NET","C++", "Swift", "SQL", "MongoDB", 
                "PHP", "HTML", "CSS", "TailwindCSS", "APIs", "AWS", "Azure",
                "Agile", "Scrum", "Git", "Jira", "Docker", "Kubernetes", "CI/CD",
                
              ];
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
              <span>a Full Stack Developer</span>
              <AiTwotoneCode className="ml-2 inline-block" size={30} />
            </p>
          </div>


        {/* <Model /> */}



        <hr></hr>


        <div className="flex justify-center items-center relative">
          <div className = "overflow-hidden w-2/3">
          <Image
            src="/images/grad2.jpeg"
            alt="Picture of the author"
            objectFit="cover"
            layout="responsive"
            className="rounded-xl"
            width={700}
            height={500}
          />

          </div>
        </div>



        <p className='flex items-center pb-6 mt-10 text-[25px]'>
          <CiLocationOn className="inline-block" size={25} />
          <span className='ml-2 text-[25px]'>Los Angeles, CA</span>
        </p>

        <nav className="flex justify-center mt-10 pb-10 z-20 ">
          <a href="#about" className="tab rounded py-2 md:px-3 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black ">About</a>
          <a href="#technologies" className="tab rounded md:px-3 px-1 py-2 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black">Technologies</a>
          <a href="#projects" className="tab rounded py-2 md:px-3 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black">Projects</a>
          <a href="#education" className="tab rounded py-2 md:px-3 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black">Education</a>
          <a href="#contact" className="tab rounded py-2 md:px-3 px-1 hover:bg-opacity-60 hover:bg-cyan-200 hover:text-black">Contact</a>
        </nav>

        <div id="about" className="-mt-[100px] pt-[100px]"><About /></div>
        <div id="technologies" className="-mt-[100px] pt-[100px]"><Technologies techList={techs} /></div>
        <div className='animated-background w-full'>
        <div id="projects" className="-mt-[100px] pt-[100px]"><Projects /></div>
        </div>
        <div className='animated-background w-full h-full'>
        <div id="education" className="-mt-[100px] pt-[100px]"><Education /></div>
        <div id="contact" className="-mt-[100px] pt-[100px]"><Contact /></div>
        <div className='h-[200px]'></div>
        </div>
      </div>

  )
}
