import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Image from 'next/image';
import { FaArrowDown, FaArrowUpRightFromSquare, FaLocationDot } from 'react-icons/fa6';

export default function Home() {

  return (
    <main className="site-shell min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-28 pb-14 md:pt-40 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-white shadow-sm dark:ring-slate-800">
                    <Image 
                        src="/images/grad3.jpeg" 
                        alt="Alejandro Urrea" 
                        width={48}
                        height={48}
                        className="w-full h-full object-cover" 
                    />
                </div>
                <span className="eyebrow">Senior full-stack engineer</span>
            </div>
            <h1 className="max-w-3xl text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-[1.02] tracking-[-.055em]">
              Building useful systems at the edge of AI and software.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              I&apos;m Alejandro Urrea — a full-stack engineer who turns complex workflows into reliable, human-centered products.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-2"><FaLocationDot className="text-[#2855d9]" /> Los Angeles, CA</span>
              <a href="#projects" className="inline-flex items-center gap-2 text-slate-900 dark:text-slate-100 hover:text-[#2855d9] transition-colors">View selected work <FaArrowDown className="text-xs" /></a>
            </div>
          </div>
          <a href="#contact" className="hidden lg:inline-flex group items-center gap-3 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-[#2855d9] transition-colors">
            Let&apos;s work together <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 dark:border-slate-700 group-hover:border-[#2855d9] transition-colors"><FaArrowUpRightFromSquare /></span>
          </a>
        </div>

      </section>

      <div className="section-divider" />



      {/* About Section */}
      <section id="about" className="section-spacing-tight">
        <About />
      </section>

      <div className="section-divider" />

      {/* Experience Section */}
      <section id="experience" className="section-spacing">
        <Experience />
      </section>

      <div className="section-divider" />

      {/* Technologies Section */}
      <section id="technologies" className="section-spacing">
        <Technologies />
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
    </main>
  )
}
