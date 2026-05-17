import { motion } from "framer-motion";
import {
  Bug,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  GitBranch,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const skills = [
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "API Testing",
    "Usability Testing",
    "Cross-Browser Testing",
    "Defect Tracking",
    "Test Documentation",
    "Agile Scrum",
    "REST API Validation",
  ];

  const tools = ["Playwright", "Selenium", "Postman", "JIRA", "Trello", "Git", "Java"];

  const experience = [
    {
      role: "Junior Tester",
      company: "GameZovah, Auckland, New Zealand",
      period: "October 2023 to Present",
      points: [
        "Designed and executed manual test cases for web and mobile applications based on functional requirements.",
        "Conducted regression testing using Playwright to support consistent performance across major browsers.",
        "Validated REST API responses using Postman and reported failed requests clearly.",
        "Worked closely with developers in Agile ceremonies including sprint planning and retrospectives.",
      ],
    },
    {
      role: "Software Testing Intern",
      company: "GameZovah, Auckland, New Zealand",
      period: "April 2023 to September 2023",
      points: [
        "Assisted in writing and executing manual test cases for mobile and web applications.",
        "Performed basic API testing using Postman to verify expected endpoint outputs.",
        "Tracked test results and documented issues using Trello.",
        "Built a strong foundation in Agile QA workflows and test documentation.",
      ],
    },
    {
      role: "QA Intern",
      company: "Gratia Spiral Empire, UK - Remote",
      period: "July 2022 to March 2023",
      points: [
        "Executed manual test scenarios for enterprise web applications and logged bugs using JIRA.",
        "Built basic Selenium automation scripts to support regression testing.",
        "Performed REST API testing with Postman and validated data structures.",
        "Collaborated with senior testers to verify bug fixes and improve defect documentation.",
      ],
    },
  ];

  const projects = [
    {
      title: "Web Application Regression Testing",
      description:
        "Created and executed regression test scenarios using Playwright to confirm stability after new releases.",
      icon: <GitBranch className="h-7 w-7" />,
    },
    {
      title: "API Validation Suite",
      description:
        "Used Postman to test REST API endpoints, validate response structures, and identify failed requests.",
      icon: <TestTube2 className="h-7 w-7" />,
    },
    {
      title: "Manual Test Case Documentation",
      description:
        "Prepared clear test cases, recorded outcomes, and supported defect tracking across Agile sprint cycles.",
      icon: <ClipboardCheck className="h-7 w-7" />,
    },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-20 md:px-16 lg:px-24">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-slate-950 to-indigo-500/20" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <ShieldCheck className="mr-2 h-4 w-4" /> ISTQB Foundation Tester
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Lilian Ubanekwo
              <span className="block bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Software Tester
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Detail-oriented software tester skilled in manual testing, API testing, regression testing,
              defect tracking, and Agile QA delivery. I help teams release reliable web and mobile
              applications by turning requirements into clear test cases and actionable bug reports.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                type="button"
                onClick={() => scrollTo("work")}
                className="rounded-2xl bg-cyan-400 px-6 py-6 text-slate-950 hover:bg-cyan-300"
              >
                View My Work
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="rounded-2xl border-slate-500 px-6 py-6 text-white hover:bg-white hover:text-slate-950"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Card className="rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-300 text-slate-950">
                  <Bug className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Quality-focused testing</h2>
                <p className="mt-4 text-slate-300">
                  Manual and automated testing support across web, mobile, and API platforms, with strong
                  attention to usability, reliability, and clear communication.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-3xl font-bold text-cyan-300">3+</p>
                    <p className="text-sm text-slate-400">QA roles</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-3xl font-bold text-cyan-300">7</p>
                    <p className="text-sm text-slate-400">Testing tools</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <p className="text-3xl font-bold text-cyan-300">ISTQB</p>
                    <p className="text-sm text-slate-400">Certified</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <CheckCircle2 className="h-7 w-7 text-cyan-300" />
            <h2 className="text-3xl font-bold">Testing Skills</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/70 px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <Code2 className="h-7 w-7 text-cyan-300" />
            <h2 className="text-3xl font-bold">Tools & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-cyan-300/10 px-5 py-3 text-cyan-100 ring-1 ring-cyan-300/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-3xl font-bold">Experience</h2>
          <div className="grid gap-6">
            {experience.map((job) => (
              <Card key={`${job.role}-${job.period}`} className="rounded-3xl border-white/10 bg-white/5 text-white">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-2xl font-semibold">{job.role}</h3>
                      <p className="text-cyan-200">{job.company}</p>
                    </div>
                    <p className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-300">{job.period}</p>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-slate-900/70 px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-3xl font-bold">Featured QA Work</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-3xl border-white/10 bg-white/5 text-white">
                <CardContent className="p-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-slate-300">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-cyan-400 to-indigo-400 p-8 text-slate-950 md:p-12">
          <h2 className="text-3xl font-bold">Let’s build better quality software</h2>
          <p className="mt-4 max-w-3xl text-lg">
            I am available for software testing roles where I can support product quality through careful test
            planning, strong documentation, and clear defect reporting.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <a href="tel:+64273702021" className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 font-medium">
              <Phone className="h-5 w-5" /> +64 273 702 021
            </a>
            <a
              href="mailto:ubanekwol99@gmail.com"
              className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 font-medium"
            >
              <Mail className="h-5 w-5" /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ubanekwolil99"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 font-medium"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 font-medium">
              <MapPin className="h-5 w-5" /> Auckland, NZ
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
