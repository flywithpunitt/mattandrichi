import Image from "next/image";
import Link from "next/link";
import { lets } from "@/data/lets";

export default function LeaseView() {
  return (
    <main>
      <section className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-end px-5 pt-12 pb-10 sm:px-8 lg:px-12 lg:py-16">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
            03 · Private lets
          </p>
          <h1 className="font-serif text-[2.7rem] leading-[0.95] tracking-[-0.03em] text-cream sm:text-6xl lg:text-[4.6rem]">
            Stay
            <span className="block">a season.</span>
            <span className="mt-2 block italic text-cream/70">Or a chapter.</span>
          </h1>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-cream/55">
            Furnished. Quiet. Time-bound. Not an address you rent — a house you inhabit for a while.
          </p>
        </div>
        <div className="relative min-h-[22rem] lg:min-h-[34rem]">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
            alt="A let residence filled with afternoon light"
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:bg-gradient-to-l" />
        </div>
      </section>

      <section className="border-t border-cream/10 px-5 py-10 sm:px-8 lg:px-0 lg:py-14">
        <div className="mb-6 flex items-end justify-between px-0 lg:px-12">
          <p className="text-[11px] uppercase tracking-[0.24em] text-olive">
            Currently held
          </p>
          <p className="hidden text-[11px] tracking-[0.16em] text-cream/35 sm:block">
            Scroll sideways
          </p>
        </div>
        <div className="scroll-strip flex gap-4 overflow-x-auto pb-4 lg:px-12">
          {lets.map((item) => (
            <article
              key={item.id}
              className="w-[16.5rem] shrink-0 sm:w-[19rem] lg:w-[21rem]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  unoptimized
                  sizes="340px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-serif text-lg text-accent">{item.index}</p>
                  <h2 className="mt-1 font-serif text-2xl text-cream">{item.name}</h2>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-cream/70">
                    {item.place} · {item.term}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream/55">{item.note}</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-olive">
                {item.arrives}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid bg-cream text-ink md:grid-cols-3">
        {[
          { title: "Arranged", body: "Keys, linen, a housekeeper if you want one. You arrive to a house that is already living." },
          { title: "Timed", body: "A season, a quarter, half a year. We do not do rolling month-to-month." },
          { title: "Quiet", body: "Neighbours will not know you as a tenant. You will not be asked to prove it." },
        ].map((item, index) => (
          <div
            key={item.title}
            className={`px-6 py-10 sm:px-8 lg:px-10 ${
              index > 0 ? "border-t border-ink/10 md:border-t-0 md:border-l" : ""
            }`}
          >
            <p className="font-serif text-2xl">{item.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.body}</p>
          </div>
        ))}
      </section>

      <section id="enquire" className="px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Dates</p>
            <h2 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
              Tell us when you need the house.
            </h2>
          </div>
          <Link
            href="/buy"
            className="inline-flex items-center gap-3 rounded-full border border-cream/20 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-cream/80 transition-colors hover:border-accent hover:text-accent"
          >
            Or stay for good
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
