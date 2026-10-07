import { useRef, useState } from "react";
import { Link } from "react-router";
import minimaLogo from "../assets/minima-logo.svg";
import { projects } from "./projects";

const filters = ["All", "Identity", "Digital"];

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

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const galleryRef = useRef<HTMLDivElement>(null);
  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );

  const moveGallery = (direction: number) => {
    galleryRef.current?.scrollBy({
      left: direction * galleryRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFFFF] text-[#00325B] selection:bg-[#F98F00] selection:text-[#FFFFFF]">
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 text-[#FFFFFF] md:px-10 md:py-8">
        <a aria-label="Back to top" className="flex items-center" href="#top">
          <img alt="" aria-hidden="true" className="size-9 md:size-8" src={minimaLogo} />
        </a>
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

      <main id="top">
        <section className="relative flex min-h-svh items-end overflow-hidden bg-[#00325B] text-[#FFFFFF]">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-2xl md:landscape:hidden"
            src={astriaBillboard}
          />
          <img
            alt="Astria identity displayed on a vivid purple outdoor billboard"
            className="absolute inset-0 h-full w-full object-contain md:landscape:object-cover"
            src={astriaBillboard}
          />
        </section>

        <section id="work" className="py-16 md:py-28">
          <div className="mx-auto mb-12 flex max-w-[1600px] flex-col justify-between gap-8 px-5 md:mb-16 md:flex-row md:items-end md:px-10">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[#00325B]">01 / Work</p>
              <h2 className="font-serif text-5xl tracking-[-0.05em] md:text-7xl">Selected projects</h2>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:flex-col md:items-end">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {filters.map((filter) => (
                  <button
                    className={`border-b pb-1 text-xs uppercase tracking-[0.12em] transition-colors ${
                      activeFilter === filter
                      ? "border-[#00325B] text-[#00325B]"
                      : "border-transparent text-[#00325B] hover:text-[#00325B]"
                    }`}
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      galleryRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                    }}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous project"
                  className="flex size-10 rotate-180 items-center justify-center rounded-full border border-[#00325B]/30 transition-colors hover:border-[#00325B]"
                  onClick={() => moveGallery(-1)}
                  type="button"
                >
                  <Arrow />
                </button>
                <button
                  aria-label="Next project"
                  className="flex size-10 items-center justify-center rounded-full border border-[#00325B]/30 transition-colors hover:border-[#00325B]"
                  onClick={() => moveGallery(1)}
                  type="button"
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>

          <div
            aria-label="Selected projects"
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
            ref={galleryRef}
          >
            {visibleProjects.map((project) => (
              <article className="group w-full shrink-0 snap-start" key={project.title}>
                <Link className="block" to={`/projects/${project.slug}`}>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#FFFFFF] md:landscape:h-[78vh] md:landscape:aspect-auto">
                    <img
                      alt={project.alt}
                      className="h-full w-full object-contain transition duration-1000 ease-out group-hover:scale-[1.02] md:landscape:object-cover"
                      loading="lazy"
                      src={project.image}
                    />
                  </div>
                  <div className="mx-5 mt-4 flex items-start justify-between gap-6 border-t border-[#00325B] pt-3 md:mx-10">
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.03em] md:text-2xl">{project.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#00325B]">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#00325B]">{project.year}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <Arrow />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-4 bg-[#00325B] text-[#FFFFFF] md:mt-12">
          <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
            <div className="grid gap-16 md:grid-cols-12">
              <p className="text-xs uppercase tracking-[0.16em] text-[#FFFFFF] md:col-span-3">
                02 / About
              </p>
              <div className="md:col-span-8">
                <h2 className="max-w-4xl font-serif text-[2.75rem] leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-7xl">
                  Small studio,
                  <br />
                  <span className="italic text-[#F98F00]">big point of view.</span>
                </h2>
                <div className="mt-12 grid gap-8 border-t border-[#FFFFFF] pt-6 md:grid-cols-2">
                  <p className="max-w-sm text-base leading-relaxed text-[#FFFFFF]">
                    We partner with ambitious people and organizations to turn complex ideas into
                    clear, memorable design.
                  </p>
                  <div className="text-sm leading-relaxed text-[#FFFFFF]">
                    <p>Strategy &amp; art direction</p>
                    <p>Brand identities</p>
                    <p>Editorial design</p>
                    <p>Digital experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F98F00] px-5 py-16 text-[#00325B] md:px-10 md:py-28">
          <a className="group mx-auto flex max-w-[1600px] flex-col justify-between gap-12 md:flex-row md:items-end" href="mailto:minimagraphics01@gmail.com">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.16em]">Have a project in mind?</p>
              <h2 className="font-serif text-[clamp(3.4rem,10vw,9rem)] leading-[0.82] tracking-[-0.06em]">
                Let&apos;s make
                <br />
                it matter.
              </h2>
            </div>
            <span className="flex size-20 items-center justify-center rounded-full border border-[#00325B] transition-transform duration-300 group-hover:-rotate-45 md:size-28">
              <Arrow diagonal />
            </span>
          </a>
        </section>
      </main>

      <footer className="flex flex-col gap-5 bg-[#F98F00] px-5 pb-8 text-xs uppercase tracking-[0.12em] md:flex-row md:items-center md:justify-between md:px-10">
        <p>© 2026 Minima Graphics</p>
        <div className="flex gap-6">
          <a className="hover:underline" href="mailto:minimagraphics01@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}
