import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail, Phone, Linkedin, Github, ArrowUpRight, Code2, Sparkles,
  Briefcase, GraduationCap, Award, MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharat Jatav — Frontend Developer" },
      { name: "description", content: "Frontend Developer with 2+ years building scalable React.js, TypeScript and Tailwind CSS applications across CRM, HR and ed-tech platforms." },
      { property: "og:title", content: "Bharat Jatav — Frontend Developer" },
      { property: "og:description", content: "React.js · TypeScript · Tailwind CSS · React Query" },
    ],
  }),
  component: Portfolio,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const skills = {
  Languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  Frontend: ["React.js", "React Native", "Tailwind CSS", "Redux", "React Query", "Material-UI", "Styled Components"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Vite", "Jest", "ESLint"],
};

const projects = [
  { name: "CRM Platform", tag: "Multi-company", desc: "Built a multi-company CRM and billing platform with party-to-invoice workflows, role-based permissions, and secure company-wise operations.", stack: ["React", "TypeScript", "React Query"] },
  { name: "EduHR", tag: "HR System", desc: "HR platform with onboarding flows, employee dashboards, permission-based access, and modular architecture using custom React hooks.", stack: ["React", "Tailwind", "Custom Hooks"] },
  { name: "EduSkill", tag: "Ed-tech", desc: "Learning platform frontend with role-based permissions, access control, performance optimization, and responsive UI components.", stack: ["React", "TypeScript", "Tailwind"] },
  { name: "EduTax", tag: "Simulation", desc: "Simulation-based tax module with API-driven forms, live data updates, and frontend workflow implementation.", stack: ["React Query", "React Hook Form"] },
  { name: "Freelance — EduPlatform", tag: "Multi-institute", desc: "Multi-institute education platform for course management, notes, and teacher content with responsive role-based UI.", stack: ["React", "REST APIs"] },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Educerns Technologies Pvt Ltd",
    period: "Aug 2025 — Present",
    points: [
      "Led end-to-end development of the Educerns website with React, TypeScript and Tailwind.",
      "Built EduHR with onboarding, dashboards and role-based access via custom hooks.",
      "Developed the CRM from scratch — lead management, pagination, dynamic dialogs, React Hook Form.",
      "Integrated real-time API workflows in EduTax using React Query.",
      "Created Eduskill with video streaming UI and permission-based access.",
    ],
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="glass rounded-full px-5 py-2.5 flex items-center gap-1 sm:gap-6 shadow-card">
        <a href="#top" className="font-display font-bold text-sm tracking-tight px-2">BJ<span className="text-primary">.</span></a>
        <div className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a href="mailto:bharatamb26@gmail.com" className="bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full hover:shadow-glow transition-shadow">
          Hire me
        </a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Bharat <span className="text-gradient">Jatav</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-5xl lg:text-6xl font-light">Frontend Developer.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            I craft scalable, performance-optimized interfaces with{" "}
            <span className="text-foreground font-medium">React.js</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span> and{" "}
            <span className="text-foreground font-medium">Tailwind CSS</span> — shipping CRM, HR and ed-tech products that real teams rely on.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="group bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:shadow-glow transition-all">
              See my work
              <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a href="#contact" className="glass font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:border-primary/40 transition-colors">
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-6 pt-8 text-sm text-muted-foreground">
            <Stat label="Years experience" value="2+" />
            <Stat label="Production apps" value="5" />
            <Stat label="Core stack" value="React · TS" />
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -top-10 right-0 size-72 sm:size-96 rounded-full bg-gradient-primary blur-3xl opacity-20 -z-10"
        />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-display font-bold text-foreground">{value}</span>
      <span className="text-xs uppercase tracking-wider">{label}</span>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="mb-12 space-y-3"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
            <Sparkles className="size-3" /> {eyebrow}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            {title}
          </motion.h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title={<>Building UIs that scale, <span className="text-gradient">not just ship.</span></>}>
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        className="grid md:grid-cols-3 gap-6"
      >
        {[
          { icon: Code2, title: "Production React", desc: "Hooks, Context, Query and Redux — patterns that survive real product churn." },
          { icon: Sparkles, title: "Performance focus", desc: "Lazy loading, code splitting and Core Web Vitals baked in from day one." },
          { icon: Briefcase, title: "Product mindset", desc: "From CRM workflows to ed-tech access control — I ship features end-to-end." },
        ].map((c) => (
          <motion.div key={c.title} variants={fadeUp} className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors group">
            <c.icon className="size-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="work" eyebrow="Experience" title="Where I've shipped.">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-6">
        {experience.map((e) => (
          <motion.div key={e.company} variants={fadeUp} className="glass rounded-2xl p-8 hover:shadow-glow transition-shadow">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
              <div>
                <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
                <p className="text-primary font-medium">{e.company}</p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{e.period}</span>
            </div>
            <ul className="space-y-2.5">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title={<>Projects that ship to <span className="text-gradient">real users.</span></>}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.name} variants={fadeUp}
            className={`glass rounded-2xl p-7 hover:border-primary/40 transition-all group relative overflow-hidden ${i === 0 ? "md:col-span-2" : ""}`}
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.04] transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-primary">{p.tag}</span>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="The stack I reach for.">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(skills).map(([cat, list]) => (
          <motion.div key={cat} variants={fadeUp} className="glass rounded-2xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => (
                <span key={s} className="text-sm px-3 py-1.5 rounded-lg bg-secondary/50 border border-border hover:border-primary/40 hover:text-primary transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education & Certifications" title="Foundations.">
      <div className="grid md:grid-cols-2 gap-5">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-7">
          <GraduationCap className="size-7 text-primary mb-4" />
          <h3 className="font-display text-lg font-semibold">Bachelor of Computer Science</h3>
          <p className="text-sm text-muted-foreground">Srimant Madhavrao Scindia Govt. Model Science College</p>
          <p className="text-xs font-mono text-primary mt-2">Jun 2021 — Jul 2025</p>
          <div className="mt-5 pt-5 border-t border-border">
            <h4 className="font-display font-semibold">High School</h4>
            <p className="text-sm text-muted-foreground">Sahara Public Hr Sec School, Gwalior, MP</p>
            <p className="text-xs font-mono text-primary mt-1">March 2021</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-7">
          <Award className="size-7 text-primary mb-4" />
          <h3 className="font-display text-lg font-semibold mb-4">Certifications</h3>
          <ul className="space-y-3">
            {[
              ["Full-Stack Development", "PS Softech Pvt Ltd"],
              ["React.js Development", "Aigetai Pvt Ltd"],
              ["Frontend Development", "Educerns Technologies Pvt Ltd"],
            ].map(([t, o]) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium">{t}</p>
                  <p className="text-xs text-muted-foreground">{o}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

function Contact() {
  const links = [
    { icon: Mail, label: "bharatamb26@gmail.com", href: "mailto:bharatamb26@gmail.com" },
    { icon: Phone, label: "+91 87708 62975", href: "tel:+918770862975" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
  ];
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-[0.06]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-4">
              <MapPin className="size-3" /> Gwalior, India
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-5">
              Let's build something <span className="text-gradient">great.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Got a product that needs a frontend that won't break under real users? I'd love to hear about it.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="glass rounded-xl p-4 flex items-center gap-3 hover:border-primary/40 hover:shadow-glow transition-all group text-left">
                  <l.icon className="size-5 text-primary shrink-0" />
                  <span className="text-sm font-medium truncate">{l.label}</span>
                  <ArrowUpRight className="size-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2026 Bharat Jatav. Crafted with React & Tailwind.</p>
        <p className="font-mono">Frontend Developer · India</p>
      </div>
    </footer>
  );
}
