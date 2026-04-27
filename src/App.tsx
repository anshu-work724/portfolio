import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import { useState } from "react";
import { ArrowUpRight, Award, Code2, Database, Mail, MapPin, Menu, Rocket, Server, ShieldCheck, Sparkles } from "lucide-react";

type Project = {
  name: string;
  kind: string;
  timeline: string;
  summary: string;
  outcomes: string[];
  stack: string[];
  accent: string;
  metric: string;
  link?: string;
};

type Experience = {
  company: string;
  role: string;
  timeline: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

const profile = {
  name: "Ansh Tyagi",
  title: "MERN Full-Stack Developer",
  location: "Roorkee, India",
  email: "professionalanshu12@gmail.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  objective:
    "I design and build scalable React interfaces, secure Express APIs, realtime communication systems, and database structures that make full-stack products feel fast and dependable.",
  education: [
    {
      institution: "COER University",
      detail: "B.Tech in Computer Science & Engineering",
      timeline: "July 2023 - June 2027",
    },
    {
      institution: "Skyward Sr. Sec. School",
      detail: "Intermediate 82% and High School 92%",
      timeline: "2021 - 2023",
    },
  ],
  skills: {
    Languages: ["JavaScript", "C++", "Python"],
    Frontend: ["React", "Vite", "Tailwind CSS", "DaisyUI", "HTML5", "CSS3"],
    Backend: ["Node.js", "Express", "REST APIs", "WebSockets", "JWT", "bcrypt"],
    Databases: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render", "Railway"],
  },
};

// Update the portfolio later by editing these arrays. No layout changes required.
const projects: Project[] = [
  {
    name: "QuickTalk",
    kind: "Realtime Messaging Platform",
    timeline: "Aug 2025 - Sep 2025",
    summary:
      "A MERN chat platform built around secure sessions, persistent conversations, and Socket.io powered realtime delivery.",
    outcomes: [
      "Created REST APIs for sessions, conversations, and message persistence.",
      "Implemented event-driven communication for instant chat updates.",
      "Structured MongoDB schemas for reliable chat-history retrieval.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "bcrypt"],
    accent: "from-cyan-300 to-blue-500",
    metric: "Realtime",
    link: "#contact",
  },
  {
    name: "MS Fire Safety",
    kind: "Business Services Website",
    timeline: "2025",
    summary:
      "A responsive service website for fire safety products, installation solutions, and maintenance offerings with a cleaner customer journey.",
    outcomes: [
      "Designed service-first pages for better discovery and engagement.",
      "Built responsive UI for desktop and mobile users.",
      "Prepared deployment flow for reliable cloud availability.",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Node.js"],
    accent: "from-orange-300 to-red-500",
    metric: "Responsive",
    link: "#contact",
  },
  {
    name: "PixelPing",
    kind: "Email Tracking Service",
    timeline: "Sep 2025 - Nov 2025",
    summary:
      "A browser-extension tracking system using invisible pixels and lightweight event queues for email open and attachment analytics.",
    outcomes: [
      "Built email-open and attachment-click tracking flows.",
      "Designed event capture for engagement updates.",
      "Connected TypeScript UI logic with backend event services.",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    accent: "from-violet-300 to-fuchsia-500",
    metric: "Analytics",
    link: "#contact",
  },
];

const experience: Experience[] = [
  {
    company: "QuickTalk",
    role: "Full Stack Intern",
    timeline: "Aug 2025 - Sep 2025",
    summary: "Handled frontend and backend responsibilities for a scalable realtime messaging product.",
    highlights: [
      "Delivered assigned tasks across authentication, API design, and realtime features.",
      "Designed secure user-authentication mechanisms for safer product access.",
      "Improved schema design for efficient message storage and retrieval.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
  },
];

const achievements = [
  "National Hackathon 4.0 (MANTHAN 24) participant at COER University.",
  "Completed Computing Fest by Explorin with IITians.",
  "Attended Web Development Workshop on website designing and development.",
];

const navItems = ["Work", "Experience", "Skills", "Contact"];
const orbit = [
  { label: "React", icon: Code2, pos: "left-[6%] top-[17%]", delay: 0 },
  { label: "Express", icon: Server, pos: "right-[5%] top-[25%]", delay: 0.18 },
  { label: "MongoDB", icon: Database, pos: "bottom-[22%] left-[8%]", delay: 0.36 },
  { label: "Node", icon: Rocket, pos: "bottom-[10%] right-[12%]", delay: 0.54 },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function App() {
  const [activeProject, setActiveProject] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 28, restDelta: 0.001 });
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -110]);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(103,232,249,0.15), transparent 44%)`;

  return (
    <main
      onPointerMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
      className="relative min-h-screen overflow-hidden bg-[#05060a] text-[#f7f2e8] selection:bg-cyan-200 selection:text-zinc-950"
    >
      <motion.div style={{ background: spotlight }} className="pointer-events-none fixed inset-0 z-10" />
      <motion.div className="fixed left-0 top-0 z-50 h-1 origin-left bg-[#f7f2e8]" style={{ scaleX: progress, right: 0 }} />
      <AmbientScene />
      <Header />

      <section id="top" className="relative z-20 min-h-screen px-5 pt-28 sm:px-8 lg:px-10">
        <motion.div style={{ y: heroY }} className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={reveal} className="mb-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs uppercase tracking-[0.34em] text-cyan-100/80">
              <span className="flex items-center gap-3"><Sparkles className="h-4 w-4" /> MERN Developer</span>
              <span className="hidden h-px w-16 bg-cyan-100/30 sm:block" />
              <span>{profile.location}</span>
            </motion.div>
            <motion.h1 variants={reveal} className="text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.1em] text-[#f7f2e8] sm:text-[8.8rem] lg:text-[10.4rem]">
              Ansh
              <span className="block pl-[0.12em] text-transparent [-webkit-text-stroke:1.5px_#f7f2e8]">Tyagi</span>
            </motion.h1>
            <motion.p variants={reveal} className="mt-8 max-w-2xl text-xl leading-8 text-zinc-300 sm:text-2xl">
              {profile.objective}
            </motion.p>
            <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-4">
              <MagneticLink href="#work" label="Explore work" primary />
              <MagneticLink href={`mailto:${profile.email}`} label="Contact me" />
            </motion.div>
          </motion.div>

          <HeroSystem />
        </motion.div>
      </section>

      <section className="relative z-20 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 border-y border-white/10 py-10 md:grid-cols-[0.65fr_1.35fr]">
          <SectionKicker>What I Do</SectionKicker>
          <Reveal>
            <div className="grid gap-5 text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#f7f2e8] md:grid-cols-3 md:text-4xl">
              <p>Secure auth flows.</p>
              <p>Realtime user experiences.</p>
              <p>Clean database-backed APIs.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="relative z-20 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="Selected Work" title="Three product stories from the resume, redesigned as interactive case studies." />
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <ProjectPreview project={projects[activeProject]} />
            <div className="divide-y divide-white/10 border-y border-white/10">
              {projects.map((project, index) => (
                <ProjectItem
                  key={project.name}
                  project={project}
                  index={index}
                  active={index === activeProject}
                  onFocus={() => setActiveProject(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-20 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader kicker="Experience" title="Practical internship work across the stack." />
          <div className="space-y-12">
            {experience.map((item) => (
              <Reveal key={item.company}>
                <article className="relative border-l border-cyan-200/40 pl-8">
                  <motion.span
                    className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,0.8)]"
                    animate={{ scale: [1, 1.7, 1], opacity: [1, 0.45, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  />
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/70">{item.company}</p>
                      <h3 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#f7f2e8]">{item.role}</h3>
                    </div>
                    <p className="text-sm text-zinc-400">{item.timeline}</p>
                  </div>
                  <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-300">{item.summary}</p>
                  <ul className="mt-7 grid gap-4 md:grid-cols-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="border-t border-white/10 pt-4 text-zinc-400">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <TechRail items={item.stack} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-20 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="Skills" title="A practical toolkit for shipping MERN applications end to end." />
          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-5">
            {Object.entries(profile.skills).map(([group, items], index) => (
              <Reveal key={group} delay={index * 0.06}>
                <div className="group border-t border-white/15 pt-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/70">{group}</p>
                  <div className="mt-6 space-y-3">
                    {items.map((item) => (
                      <motion.p key={item} whileHover={{ x: 8 }} className="text-lg text-zinc-300 transition group-hover:text-zinc-200">
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader kicker="Education" title="CS fundamentals with workshop and hackathon momentum." />
          <div>
            <Reveal>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {profile.education.map((item) => (
                  <div key={item.institution} className="grid gap-3 py-7 md:grid-cols-[1fr_auto]">
                    <div>
                      <h3 className="text-3xl font-bold tracking-[-0.05em] text-[#f7f2e8]">{item.institution}</h3>
                      <p className="mt-2 text-zinc-400">{item.detail}</p>
                    </div>
                    <p className="text-sm text-zinc-500">{item.timeline}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <div className="mt-10 space-y-5">
              {achievements.map((achievement, index) => (
                <Reveal key={achievement} delay={index * 0.05}>
                  <div className="flex items-start gap-4 border-b border-white/10 pb-5 text-zinc-300">
                    <Award className="mt-1 h-5 w-5 shrink-0 text-amber-200" />
                    <p>{achievement}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-20 px-5 pb-12 pt-24 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
            <SectionKicker>Contact</SectionKicker>
            <div className="mt-9 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h2 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#f7f2e8] sm:text-8xl lg:text-[9.5rem]">
                Build the next one.
              </h2>
              <div className="space-y-5 text-lg">
                <ContactLink href={`mailto:${profile.email}`} icon={Mail} label={profile.email} />
                <ContactLink href={profile.linkedin} icon={LinkedInMark} label="LinkedIn" />
                <ContactLink href={profile.github} icon={GitHubMark} label="GitHub" />
                <p className="flex items-center gap-3 text-zinc-400"><MapPin className="h-5 w-5 text-cyan-200" /> {profile.location}</p>
              </div>
            </div>
            <footer className="mt-20 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500">
              <p>{profile.name} portfolio</p>
              <p>Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
            </footer>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-5 py-5 sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-4 backdrop-blur-md">
        <a href="#top" className="text-sm font-black uppercase tracking-[0.45em] text-[#f7f2e8]">AT</a>
        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative transition hover:text-cyan-100">
              {item}
            </a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="hidden items-center gap-2 text-sm font-semibold text-cyan-100 sm:flex">
          Available for work <ArrowUpRight className="h-4 w-4" />
        </a>
        <Menu className="h-5 w-5 text-zinc-300 md:hidden" />
      </nav>
    </header>
  );
}

function HeroSystem() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      className="relative min-h-[470px] lg:min-h-[640px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(103,232,249,0.17),transparent_58%)]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[78vw] max-h-[560px] w-[78vw] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[52vw] max-h-[390px] w-[52vw] max-w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-100/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white/15 bg-white/[0.03] p-4 backdrop-blur-xl sm:h-60 sm:w-60"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-full flex-col justify-between bg-[#05060a] p-5">
          <ShieldCheck className="h-8 w-8 text-cyan-200" />
          <div>
            <p className="text-5xl font-black tracking-[-0.09em]">MERN</p>
            <p className="mt-2 text-sm text-zinc-400">Secure APIs, realtime events, MongoDB models.</p>
          </div>
        </div>
      </motion.div>
      {orbit.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            className={`absolute ${item.pos} flex items-center gap-3 border border-white/12 bg-[#05060a]/80 px-4 py-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: [0, -14, 0] }}
            transition={{ opacity: { delay: 0.6 + item.delay }, y: { duration: 4.4, repeat: Infinity, delay: item.delay, ease: "easeInOut" } }}
          >
            <Icon className="h-5 w-5 text-cyan-200" />
            <span className="font-semibold">{item.label}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <Reveal>
      <motion.div layout className="sticky top-28 overflow-hidden border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
        <motion.div key={project.name} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}>
          <div className={`h-72 bg-gradient-to-br ${project.accent} p-1`}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#05060a] p-6">
              <motion.div
                className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/15 blur-2xl"
                animate={{ x: [0, -20, 10, 0], y: [0, 18, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.35em] text-white/70">{project.metric}</p>
                <ArrowUpRight className="h-6 w-6" />
              </div>
              <div className="relative">
                <p className="text-5xl font-black tracking-[-0.08em] text-white">{project.name}</p>
                <p className="mt-3 max-w-sm text-zinc-300">{project.kind}</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-lg leading-8 text-zinc-300">{project.summary}</p>
          <TechRail items={project.stack} />
        </motion.div>
      </motion.div>
    </Reveal>
  );
}

function ProjectItem({ project, index, active, onFocus }: { project: Project; index: number; active: boolean; onFocus: () => void }) {
  return (
    <motion.article
      onMouseEnter={onFocus}
      onFocus={onFocus}
      tabIndex={0}
      className="group cursor-pointer py-8 outline-none"
      whileHover={{ x: 8 }}
      transition={{ type: "spring", stiffness: 250, damping: 24 }}
    >
      <div className="grid gap-7 lg:grid-cols-[auto_1fr]">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">0{index + 1}</p>
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className={`text-4xl font-black tracking-[-0.06em] transition sm:text-5xl ${active ? "text-cyan-100" : "text-[#f7f2e8]"}`}>{project.name}</h3>
            <p className="text-sm text-zinc-500">{project.timeline}</p>
          </div>
          <p className="mt-3 text-lg text-zinc-300">{project.kind}</p>
          <motion.div initial={false} animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }} className="overflow-hidden">
            <ul className="mt-6 grid gap-3 text-zinc-400 md:grid-cols-3">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="border-l border-white/10 pl-4">{outcome}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

function AmbientScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_78%)]" />
      <motion.div
        className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, 90, -30, 0], y: [0, -50, 60, 0], scale: [1, 1.12, 0.94, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/16 blur-3xl"
        animate={{ x: [0, -80, 35, 0], y: [0, 70, -40, 0], scale: [1, 0.92, 1.08, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <div>
        <SectionKicker>{kicker}</SectionKicker>
        <h2 className="mt-5 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.065em] text-[#f7f2e8] sm:text-6xl lg:text-7xl">{title}</h2>
      </div>
    </Reveal>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return <p className="text-sm uppercase tracking-[0.45em] text-cyan-100/70">{children}</p>;
}

function MagneticLink({ href, label, primary = false }: { href: string; label: string; primary?: boolean }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-3 px-6 py-4 font-bold transition ${
        primary ? "bg-[#f7f2e8] text-zinc-950 hover:bg-cyan-100" : "border border-white/15 text-[#f7f2e8] hover:border-cyan-100 hover:text-cyan-100"
      }`}
    >
      {label}
      <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
    </motion.a>
  );
}

function TechRail({ items }: { items: string[] }) {
  return (
    <div className="mt-7 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-zinc-300">{item}</span>
      ))}
    </div>
  );
}

function ContactLink({ href, icon: Icon, label }: { href: string; icon: ComponentType<{ className?: string }>; label: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-3 text-zinc-300 transition hover:text-cyan-100">
      <Icon className="h-5 w-5 text-cyan-200" />
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
    </a>
  );
}

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8.01h4.3V23H.35V8.01ZM8.03 8.01h4.12v2.05h.06c.57-1.08 1.98-2.22 4.07-2.22 4.35 0 5.15 2.86 5.15 6.58V23h-4.3v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.97-2.92 4.01V23H8.03V8.01Z" />
    </svg>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay }}>
      {children}
    </motion.div>
  );
}