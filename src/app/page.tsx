import Image from "next/image";  
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import { profile, experience, education } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
       <Section id="about" title="About">
  <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
    <Image
      src="/profile.jpg"
      alt={`${profile.name} profile photo`}
      width={180}
      height={180}
      className="h-44 w-44 rounded-full border-2 border-emerald-400/60 object-cover"
      priority
    />
    <div className="space-y-4 text-lg leading-relaxed text-neutral-300">
      {profile.about.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  </div>
</Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="experience" title="Experience">
          <Timeline items={experience} />
        </Section>
        <Section id="education" title="Education">
          <Timeline items={education} />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
