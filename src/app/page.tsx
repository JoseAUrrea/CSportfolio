import Image from 'next/image'
import { Model } from './components/Model'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneCode } from "react-icons/ai";
import { FaInfoCircle, FaSuitcase, FaTools, FaCode, FaGraduationCap, FaEnvelope, FaUser, FaRocket } from 'react-icons/fa';

export default function Home() {

  const techs = ["React", "Angular", "Vue", "Bootstrap", "Next.js", "Node.js", "TypeScript", "JavaScript", 
                "Python", "Java" ,"C", "C#", ".NET","C++", "Swift", "SQL", "MongoDB", 
                "PHP", "HTML", "CSS", "TailwindCSS", "APIs", "AWS", "Azure",
                "Agile", "Scrum", "Git", "Jira", "Docker", "Kubernetes", "CI/CD",
                
              ];
  const photos = [
    { src: "/images/grad2.jpeg", description: "Graduation Day" },
    // { src: "/images/zion.jpeg", description: "Zion National Park" },
    { src: "/images/me_event.jpeg", description: "Product Launch" },
    // { src: "/images/big_sur.jpeg", description: "Big Sur Viewpoint" },
    { src: "/images/family.jpeg", description: "Family Visits" },
    { src: "/images/montereyBeach.jpeg", description: "Monterey Beach" },
  ];

  return (
    <div className="animated-background min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-20 px-4">
        <div className="w-full max-w-6xl">
          {/* Main Hero Card */}
          <div className=" overflow-hidden mb-2">
            {/* Gradient Header */}
            <div className=" p-8 md:p-12 text-center">
              <div className="flex flex-col items-center space-y-4">
                {/* Main Title */}
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Software Engineer
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    AI & Full-Stack Innovation
                  </h2>
                </div>
                
                {/* Value Proposition */}
                <div className="max-w-3xl">
                  <p className="text-base md:text-xl leading-relaxed">
                    I create intelligent, scalable solutions that bridge the gap between cutting-edge AI technology 
                    and real-world business impact. From multi-agent AI systems to robust full-stack applications.
                  </p>
                </div>

                {/* Key Highlights */}
                {/* <div className="grid grid-cols-3 md:grid-cols-3 gap-2 w-full max-w-full">
                  <div className="glass-subtle rounded-xl p-4 text-center">
                    <FaRocket className="text-lg md:text-2xl mb-2 mx-auto" />
                    <p className="text-sm md:text-base font-semibold">AI Systems</p>
                  </div>
                  <div className="glass-subtle rounded-xl p-4 text-center">
                    <FaCode className="text-lg md:text-2xl mb-2 mx-auto" />
                    <p className="text-sm md:text-base font-semibold">Full-Stack</p>
                  </div>
                  <div className="glass-subtle rounded-xl p-4 text-center">
                    <FaTools className="text-lg md:text-2xl mb-2 mx-auto" />
                    <p className="text-sm md:text-base font-semibold">Cloud</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Divider */}
              <div className="h-[1px] gradient-bg w-2/3 mx-auto from-blue-500 to-purple-500"></div>

            {/* Navigation Tabs */}
            <div className="p-4 md:p-8">
              <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
                {[
                  { href: "#about", label: "About", icon: FaUser },
                  { href: "#experience", label: "Experience", icon: FaSuitcase },
                  { href: "#technologies", label: "Technologies", icon: FaTools },
                  { href: "#projects", label: "Projects", icon: FaCode },
                  { href: "#education", label: "Education", icon: FaGraduationCap },
                  { href: "#contact", label: "Contact", icon: FaEnvelope }
                ].map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 glass-subtle hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105"
                  >
                    <Icon className="text-lg" />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
        

        {/* About Section */}
        <div id="about" className="section-spacing-tight">
            <About />
        </div>

        {/* Reviews Section - Closely tied to About */}
        <div id="reviews" className="section-spacing-tight">
            <Reviews />
        </div>

        {/* Experience Section */}
        <div id="experience" className="section-spacing">
            <Experience />
        </div>

        {/* Technologies Section */}
        <div id="technologies" className="section-spacing">
            <Technologies techList={techs} />
        </div>

        {/* Projects Section */}
        <div id="projects" className="section-spacing">
            <Projects />
        </div>

        {/* Education Section */}
        <div id="education" className="section-spacing">
            <Education />
        </div>

        {/* Contact Section */}
        <div id="contact" className="section-spacing">
            <Contact />
        </div>
        
        {/* Footer Spacing */}
        <div className='h-[100px]'></div>
    </div>
  )
}
