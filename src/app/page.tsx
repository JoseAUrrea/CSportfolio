import Image from 'next/image'
import { Model } from './components/Model'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

export default function Home() {

  const techs = ["React", "Next.js", "Vue", "TypeScript", "JavaScript", 
                "Python", "Java", "C", "C#", "C++", "Swift", "SQL", "MongoDB", 
                "PHP", "HTML", "CSS", "TailwindCSS", "APIs", "AWS", "Azure",
                "Agile", "Scrum", "Git", "Jira", "Docker"
              ];
  return (
      <div className="animated-background">
      <div className="flex flex-col items-center pt-[70px] z-20 pb-10">
        <div className="text-center">
          <h1 className="text-[30px] font-bold"> 
            Computer Science 
          </h1>
          <p>Orlando, FL - Los Angeles, CA</p>
        </div>
        <Model />

        <p className='pb-6'>Information, Designs, and Applications</p>

        <nav className="flex justify-center pb-10 z-20 ">
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
      </div>
  )
}
