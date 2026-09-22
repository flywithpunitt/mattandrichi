import Image from "next/image";
import Link from "next/link";
import { residences } from "@/data/residences";

export default function BuyView() {
  const featured = residences[0];
  const rest = residences.slice(1);

  return (
    <main>
      <section className="relative px-5 pt-10 pb-12 sm:px-8 sm:pt-14 lg:px-14 lg:pt-16 lg:pb-16">
        <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-olive sm:text-xs">
          <span className="text-accent">01</span>
          <span className="h-px w-6 bg-olive/50" />
          <span>Residences</span>
        </p>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <h1 className="font-serif text-[2.6rem] leading-[1.04] tracking-[-0.03em] text-cream sm:text-6xl lg:text-[5.2rem]">
            A short list.
            <span className="mt-1 block italic text-cream/88">Held privately.</span>
          </h1>
          <p className="max-w-md text-[0.98rem] leading-relaxed text-cream/62 lg:justify-self-end lg:pb-2">
            Not a marketplace. Five houses we would put our own names against — chosen for light, proportion, and the way a day actually unfolds.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-14">
        <article
          id={featured.id}
          className="relative isolate scroll-mt-28 overflow-hidden rounded-[1.4rem] sm:rounded-[1.8rem]"
        >
          <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8]">
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,21,8,0.05)_30%,rgba(12,21,8,0.78)_100%)]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8 lg:p-10">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-accent">
                {featured.index} · Opening residence
              </p>
              <h2 className="font-serif text-3xl text-cream sm:text-4xl lg:text-5xl">
                {featured.name}
              </h2>
              <p className="mt-2 text-sm text-cream/70">
                {featured.place} · {featured.orientation} · {featured.rooms}
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-cream/68 sm:text-right">
              {featured.note}
            </p>
          </div>
        </article>
      </section>

      <nav
        aria-label="Residence index"
        className="mx-5 mt-10 overflow-x-auto border-y border-cream/10 py-5 sm:mx-8 lg:mx-14"
      >
        <ol className="flex min-w-max gap-8 sm:gap-12">
          {residences.map((home) => (
            <li key={home.id}>
              <a
                href={`#${home.id}`}
                className="group flex items-baseline gap-3 text-cream/55 transition-colors hover:text-cream"
              >
                <span className="font-serif text-sm text-accent/80">{home.index}</span>
                <span className="text-[11px] uppercase tracking-[0.18em]">
                  {home.name}
                </span>
                <span className="hidden text-[11px] tracking-[0.12em] text-olive sm:inline">
                  {home.place}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section className="px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
        <div className="flex flex-col gap-16 lg:gap-24">
          {rest.map((home, index) => (
            <article
              key={home.id}
              id={home.id}
              className={`grid scroll-mt-28 items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.3rem] lg:col-span-7">
                <Image
                  src={home.image.src}
                  alt={home.image.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-accent">
                  {home.index}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-cream sm:text-4xl">
                  {home.name}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-olive">
                  {home.place}
                </p>
                <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-cream/64">
                  {home.note}
                </p>
                <p className="mt-6 text-sm text-cream/50">
                  {home.orientation} · {home.rooms}
                </p>
                <Link
                  href="#enquire"
                  className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-accent"
                >
                  Request a viewing
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="enquire"
        className="mx-5 mb-6 rounded-[1.4rem] bg-cream px-6 py-12 text-ink sm:mx-8 sm:px-10 sm:py-14 lg:mx-14 lg:mb-8 lg:px-16"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-olive">
              Private access
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">
              If none of these feel like home,
              <span className="italic"> that is useful.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
              Tell us how you live. We will write back only if there is a house that belongs in the conversation.
            </p>
          </div>
          <Link
            href="/sell"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-xs font-medium tracking-[0.16em] text-cream uppercase transition-transform hover:-translate-y-px"
          >
            Or begin as an owner
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
