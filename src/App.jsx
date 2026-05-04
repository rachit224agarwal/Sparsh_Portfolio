import { useMemo, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];

const education = [
  {
    title: "KIET Group of Institutions (AKTU)",
    subtitle: "B.Tech Information Technology",
    meta: "2023-2027",
    detail: "CGPA: 7.2",
  },
  {
    title: "Woodrow Senior Secondary School",
    subtitle: "Senior Secondary",
    meta: "2021-2022",
    detail: "75%",
  },
  {
    title: "Bishop Conrad Senior Secondary School",
    subtitle: "Secondary",
    meta: "2019-2020",
    detail: "82%",
  },
];

const projects = [
  {
    title: "Home Planner App",
    technologies: "Java, Android SDK, Firebase",
    description:
      "Smart home planner with task management, layout organization, inventory tracking, and cloud syncing.",
  },
  {
    title: "Travel Planner App",
    technologies: "Flutter, Dart, Firebase, Google Maps API",
    description:
      "Cross-platform trip planner with itinerary management, location planning, and interactive maps.",
  },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Palo Alto Cybersecurity Foundation",
  "Innotech KIET",
];

const achievements = [
  "77.2% in AMCAT 2026",
  "Participated in Innotech 2024",
  "Selected for MLSA program",
];

const terminalHelp = [
  "help - show available commands",
  "linkedin - open LinkedIn profile",
  "github - open GitHub profile",
  "email - draft an email",
  "resume - jump to education section",
  "projects - jump to projects section",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="fade-in max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

function TerminalContact() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "visitor@portfolio:~$ help",
    ...terminalHelp,
  ]);

  const commands = useMemo(
    () => ({
      help: {
        lines: terminalHelp,
      },
      linkedin: {
        lines: ["Opening LinkedIn profile..."],
        href: "https://www.linkedin.com/in/sparsh-agarwal-b8a5712a1/",
      },
      github: {
        lines: ["Opening GitHub profile..."],
        href: "https://github.com",
      },
      email: {
        lines: ["Preparing email draft..."],
        href:
          "mailto:sparshagarwal.dev@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Sparsh%2C%20I%20wanted%20to%20reach%20out%20regarding%20your%20portfolio.",
      },
      resume: {
        lines: ["Jumping to education section..."],
        href: "#education",
      },
      projects: {
        lines: ["Jumping to projects section..."],
        href: "#projects",
      },
    }),
    [],
  );

  function handleSubmit(event) {
    event.preventDefault();
    const command = input.trim().toLowerCase();

    if (!command) {
      return;
    }

    const nextEntry = `visitor@portfolio:~$ ${command}`;
    const response = commands[command];

    if (!response) {
      setHistory((prev) => [
        ...prev,
        nextEntry,
        "Command not found. Type 'help' to see available commands.",
      ]);
      setInput("");
      return;
    }

    setHistory((prev) => [...prev, nextEntry, ...response.lines]);
    setInput("");

    if (response.href?.startsWith("#")) {
      const target = document.querySelector(response.href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (response.href) {
      window.open(response.href, "_blank", "noreferrer");
    }
  }

  return (
    <div className="fade-in rounded-[1.75rem] border border-slate-300 bg-[#111111] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Contact Terminal
        </p>
      </div>

      <div className="terminal-scroll mt-4 h-72 space-y-2 overflow-y-auto rounded-2xl bg-[#171717] p-4 font-mono text-sm text-emerald-300">
        {history.map((line, index) => (
          <p key={`${line}-${index}`} className="break-words">
            {line}
          </p>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
        <div className="flex flex-1 items-center rounded-2xl border border-white/10 bg-[#171717] px-4">
          <span className="font-mono text-sm text-emerald-400">$</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type help, linkedin, email..."
            className="w-full bg-transparent px-3 py-3 font-mono text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>
        <button
          type="submit"
          className="rounded-2xl bg-amber-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
        >
          Run
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f1e8] text-slate-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f6f1e8_0%,#f8f5ef_45%,#efe5d6_100%)]" />
        <div className="paper-grain absolute inset-0 opacity-50" />
        <div className="absolute right-0 top-0 h-[18rem] w-[18rem] rounded-full bg-[#d9c2a2]/30 blur-3xl" />
        <div className="absolute left-0 top-[32rem] h-[20rem] w-[20rem] rounded-full bg-[#d9d4ca]/40 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f6f1e8]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.18em] text-slate-900">
            SPARSH AGARWAL
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-amber-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 lg:flex-row lg:items-center lg:px-8 lg:pt-28">
          <div className="max-w-3xl flex-1">
            <div className="fade-in inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700">
              <span className="h-2 w-2 rounded-full bg-amber-700" />
              Portfolio 2026
            </div>
            <h1 className="fade-in mt-8 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Sparsh Agarwal
            </h1>
            <p className="fade-in-delay-1 mt-6 max-w-2xl text-xl text-slate-700 sm:text-2xl">
              B.Tech IT Student | Aspiring Software Developer
            </p>
            <p className="fade-in-delay-2 mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              I enjoy building practical digital experiences, learning modern
              technologies, and turning thoughtful ideas into reliable products
              that people can actually use.
            </p>
            <div className="fade-in-delay-3 mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-900"
              >
                Connect
              </a>
            </div>
            <div className="fade-in-delay-3 mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-300 bg-white/70 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Education</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">KIET AKTU</p>
              </div>
              <div className="rounded-2xl border border-slate-300 bg-white/70 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">CGPA</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">7.2</p>
              </div>
              <div className="rounded-2xl border border-slate-300 bg-white/70 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Direction</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Cloud + Apps</p>
              </div>
            </div>
          </div>

          <div className="fade-in-delay-2 flex-1">
            <div className="rounded-[2rem] border border-slate-300 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-6 flex items-center gap-4 rounded-3xl border border-slate-200 bg-[#f8f5ef] p-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#ece3d4] text-4xl">
                  👨‍🎓
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                    Student Profile
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">
                    Sparsh Agarwal
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Curious builder focused on software, cloud, and mobile apps.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-[#fcfaf6] p-5">
                  <p className="text-sm text-slate-500">Focus</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Software Development
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#fcfaf6] p-5">
                  <p className="text-sm text-slate-500">Education</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    B.Tech IT, KIET
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#fcfaf6] p-5">
                  <p className="text-sm text-slate-500">Interests</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Mobile Apps, Cloud, UI
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#fcfaf6] p-5">
                  <p className="text-sm text-slate-500">Goal</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Build impactful products
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-slate-200 bg-[#f8f5ef] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Growth Snapshot
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      Learning by building real projects
                    </p>
                  </div>
                  <div className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700">
                    2023-2027
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading
              eyebrow="Career Objective"
              title="Aiming to grow by building useful digital solutions."
              description="Driven and detail-oriented individual with a strong foundation in programming, seeking an opportunity to transform ideas into powerful digital solutions and grow as a technology professional in a dynamic environment."
            />
            <div className="fade-in-delay-1 rounded-[2rem] border border-slate-300 bg-white/70 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Core Mindset
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {["Problem Solving", "Detail-Oriented", "Team Growth", "Digital Solutions"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-300 bg-[#f8f5ef] px-4 py-2 text-sm text-slate-700"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation and continuous learning."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {education.map((item, index) => (
              <article
                key={item.title}
                className={`fade-in rounded-3xl border border-slate-300 bg-white/80 p-6 transition hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(15,23,42,0.06)] ${index ? "fade-in-delay-1" : ""}`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                  {item.meta}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.subtitle}</p>
                <p className="mt-6 text-lg font-medium text-slate-900">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work focused on practical user needs."
            description="A couple of app ideas that reflect my interest in solving everyday problems with thoughtful product design and dependable technology."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`fade-in rounded-[2rem] border border-slate-300 bg-white/80 p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${index ? "fade-in-delay-1" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                      Featured Project
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                      {project.title}
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-slate-300 bg-[#f8f5ef] px-3 py-2 text-xs uppercase tracking-[0.22em] text-slate-600">
                    App
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-emerald-700">
                  {project.technologies}
                </p>
                <p className="mt-6 leading-7 text-slate-600">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="highlights" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Certifications"
                title="Credentials that support my technical journey."
              />
              <div className="mt-10 space-y-4">
                {certifications.map((item, index) => (
                  <div
                    key={item}
                    className={`fade-in rounded-2xl border border-slate-300 bg-white/80 px-5 py-4 text-slate-700 transition hover:bg-[#fcfaf6] ${index ? "fade-in-delay-1" : ""}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Achievements"
                title="Milestones that reflect consistency and initiative."
              />
              <div className="mt-10 space-y-4">
                {achievements.map((item, index) => (
                  <div
                    key={item}
                    className={`fade-in rounded-2xl border border-slate-300 bg-white/80 px-5 py-4 text-slate-700 transition hover:bg-[#fcfaf6] ${index ? "fade-in-delay-1" : ""}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="fade-in rounded-[2rem] border border-slate-300 bg-white/80 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                Ask Or Connect
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
                A direct way to reach out without making the page feel robotic.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Use the terminal on the right if you want a playful interaction.
                It can open LinkedIn, GitHub, email, or jump to key sections.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-600">
                <p>
                  LinkedIn:
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/sparsh-agarwal-b8a5712a1/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-900 underline decoration-amber-700/50 underline-offset-4"
                  >
                    sparsh-agarwal-b8a5712a1
                  </a>
                </p>
                <p>
                  GitHub:
                  {" "}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-900 underline decoration-amber-700/50 underline-offset-4"
                  >
                    github.com
                  </a>
                </p>
                <p>
                  Email:
                  {" "}
                  <a
                    href="mailto:sparshagarwal.dev@gmail.com"
                    className="font-medium text-slate-900 underline decoration-amber-700/50 underline-offset-4"
                  >
                    sparshagarwal.dev@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <TerminalContact />
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-10 max-w-6xl border-t border-slate-300 px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-900">Sparsh Agarwal</p>
            <p className="mt-2 text-sm text-slate-600">
              B.Tech IT Student | Aspiring Software Developer
            </p>
          </div>
          <div className="flex gap-6 text-sm text-slate-600">
            <a
              href="https://www.linkedin.com/in/sparsh-agarwal-b8a5712a1/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-amber-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-amber-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
