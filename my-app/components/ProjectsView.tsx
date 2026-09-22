import Image from "next/image";
import { pipeline } from "@/data/projects";

export default function ProjectsView() {
  return (
    <main>
      <section className="px-5 pt-12 pb-8 sm:px-8 lg:px-16 lg:pt-16">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-olive">
            04 · In the making
          </p>
          <p className="font-serif text-5xl leading-none text-cream/15 sm:text-7xl lg:text-8xl">
            26—28
          </p>
        </div>
        <h1 className="mt-8 max-w-3xl font-serif text-[2.4rem] leading-[1.05] tracking-[-0.03em] text-cream sm:text-5xl lg:text-[4.2rem]">
          Places still
          <span className="italic text-cream/75"> being written.</span>
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/50">
          We do not announce a project to fill a brochure. These three are far enough along to name — and not far enough to sell.
        </p>
      </section>

      <div className="relative mx-5 border-t border-cream/10 sm:mx-8 lg:mx-16">
        <span
          aria-hidden
          className="absolute top-0 bottom-0 left-[1.15rem] hidden w-px bg-cream/12 lg:left-1/2 lg:block"
        />

        <ol>
          {pipeline.map((project, index) => (
            <li
              key={project.id}
              className="relative grid gap-6 border-b border-cream/10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16"
            >
              <div
                className={`lg:pr-16 ${
                  index % 2 === 1 ? "lg:order-2 lg:pl-16 lg:pr-0" : "lg:text-right"
                }`}
              >
                <p className="font-serif text-6xl text-accent/90 sm:text-7xl">
                  {project.year}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-olive">
                  {project.status} · {project.stage}
                </p>
                <h2 className="mt-5 font-serif text-3xl text-cream sm:text-4xl">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-cream/40">
                  {project.place}
                </p>
                <p
                  className={`mt-5 max-w-sm text-[0.95rem] leading-relaxed text-cream/58 ${
                    index % 2 === 0 ? "lg:ml-auto" : ""
                  }`}
                >
                  {project.note}
                </p>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative aspect-[16/10] overflow-hidden border border-cream/10">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover grayscale-[25%]"
                  />
                  <span className="absolute top-3 left-3 bg-ink/70 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cream/80">
                    {String(index + 1).padStart(2, "0")} / 03
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <section
        id="enquire"
        className="flex flex-col gap-4 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16"
      >
        <p className="max-w-sm text-sm leading-relaxed text-cream/45">
          Interest is noted, not promised. If a residence is released, we write first to the people who asked early.
        </p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
          Register quietly · enquire@mattandrichi.com
        </p>
      </section>
    </main>
  );
}
