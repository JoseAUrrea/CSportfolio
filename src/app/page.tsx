import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';

export default function Home() {

  const techs = ["React", "Angular", "Vue", "Bootstrap", "Next.js", "Node.js", "TypeScript", "JavaScript", 
                "Python", "Java" ,"C", "C#", ".NET","C++", "Swift", "SQL", "MongoDB", 
                "PHP", "HTML", "CSS", "TailwindCSS", "APIs", "AWS", "Azure",
                "Agile", "Scrum", "Git", "Jira", "Docker", "Kubernetes", "CI/CD",
              ];

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 mb-8">
        <div className="flex flex-col w-full items-start md:items-center justify-center space-y-6">
              <div className="flex flex-row gap-4 items-start">
                <div className="w-16 h-16 md:w-28 md:h-28 flex-shrink-0 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-700">
                    <Image 
                        src="/images/grad3.jpeg" 
                        alt="Alejandro Urrea" 
                        width={112} 
                        height={112} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <p className="text-sm md:text-lg font-medium md:tracking-widest uppercase text-slate-500 dark:text-slate-400">
                    Senior Full Stack Engineer
                  </p>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
                    Alejandro Urrea
                  </h1>
                </div>
              </div>
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              I build intelligent, scalable solutions that bridge cutting-edge AI 
              technology and real-world business impact — from multi-agent AI systems 
              to robust full-stack applications.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <FaLocationDot /> Los Angeles, CA
            </p>

            {/* Navigation */}
            {/* <nav className="flex flex-wrap gap-2 pt-4">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#technologies", label: "Technologies" },
                { href: "#projects", label: "Projects" },
                { href: "#education", label: "Education" },
                { href: "#contact", label: "Contact" }
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-md hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav> */}

        </div>
      </section>

      <div className="section-divider" />



      {/* About Section */}
      <section id="about" className="section-spacing-tight">
        <About />
      </section>

      {/* Reviews Section */}
      {/* <section id="reviews" className="section-spacing-tight">
        <Reviews />
      </section> */}

      <div className="section-divider" />

      {/* Experience Section */}
      <section id="experience" className="section-spacing">
        <Experience />
      </section>

      <div className="section-divider" />

      {/* Technologies Section */}
      <section id="technologies" className="section-spacing">
        <Technologies techList={techs} />
      </section>

      <div className="section-divider" />

      {/* Projects Section */}
      <section id="projects" className="section-spacing">
        <Projects />
      </section>

      <div className="section-divider" />

      {/* Education Section */}
      <section id="education" className="section-spacing">
        <Education />
      </section>

      <div className="section-divider" />

      {/* Contact Section */}
      <section id="contact" className="section-spacing">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          Alejandro Urrea
        </p>
      </footer>
    </div>
  )
}
