import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router";
import minimaLogo from "../assets/minima-logo.svg";
import { projects } from "./projects";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "size-4 -rotate-45" : "size-4"}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M3 10h14M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#00325B] selection:bg-[#F98F00] selection:text-[#FFFFFF]">
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 text-[#FFFFFF] md:px-10 md:py-8">
        <Link aria-label="Back to portfolio" className="flex items-center" to="/">
          <img alt="" aria-hidden="true" className="size-9 md:size-8" src={minimaLogo} />
        </Link>
        <a
          aria-label="Contact Minima Graphics"
          className="flex size-11 items-center justify-center transition-transform hover:scale-110"
          href="mailto:minimagraphics01@gmail.com"
        >
          <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
            <rect
              height="11"
              rx="2"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.75"
              width="17"
              x="3.5"
              y="6.5"
            />
            <path
              d="m4.5 7.5 7.5 6 7.5-6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
          </svg>
        </a>
      </header>

      <main>
        <section className="relative min-h-[72svh] overflow-hidden bg-[#00325B] md:min-h-svh">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl md:landscape:hidden"
            src={project.image}
          />
          <img
            alt={project.alt}
            className="absolute inset-0 h-full w-full object-contain md:landscape:object-cover"
            src={project.image}
          />
        </section>

        <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-3">
            <Link
              className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em]"
              to="/#work"
            >
              <span className="rotate-180">
                <Arrow />
              </span>
              All projects
            </Link>
          </div>
          <div className="md:col-span-8">
            <p className="mb-5 text-xs uppercase tracking-[0.16em]">
              {project.category} · {project.year}
            </p>
            <h1 className="font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.82] tracking-[-0.06em]">
              {project.title}
            </h1>
            <div className="mt-12 grid gap-10 border-t border-[#00325B] pt-6 md:grid-cols-2">
              <p className="max-w-lg text-xl leading-snug tracking-[-0.02em] md:text-2xl">
                {project.description}
              </p>
              <div className="text-sm leading-relaxed">
                {project.services.map((service) => (
                  <p key={service}>{service}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Link
          className="group block bg-[#F98F00] px-5 py-16 text-[#00325B] md:px-10 md:py-24"
          to={`/projects/${nextProject.slug}`}
        >
          <span className="mx-auto flex max-w-[1600px] items-end justify-between gap-8">
            <span>
              <span className="mb-4 block text-xs uppercase tracking-[0.16em]">Next project</span>
              <span className="font-serif text-[clamp(3.5rem,9vw,8rem)] leading-none tracking-[-0.055em]">
                {nextProject.title}
              </span>
            </span>
            <span className="mb-2 hidden size-20 items-center justify-center rounded-full border border-[#00325B] transition-transform group-hover:-rotate-45 sm:flex">
              <Arrow diagonal />
            </span>
          </span>
        </Link>
      </main>

      <footer className="flex flex-col gap-5 bg-[#F98F00] px-5 pb-8 text-xs uppercase tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>© 2026 Minima Graphics</p>
        <a className="hover:underline" href="mailto:minimagraphics01@gmail.com">
          Email
        </a>
      </footer>
    </div>
  );
}
