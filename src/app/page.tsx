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
          <div className="space-y-4 text-lg leading-relaxed text-neutral-300">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
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
