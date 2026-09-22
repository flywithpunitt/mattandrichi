import { founders } from "@/data/practice";

export default function OurStoryView() {
  return (
    <main>
      <section className="px-5 pt-12 pb-6 text-center sm:px-8 lg:px-16 lg:pt-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
          05 · The practice
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl font-serif text-[2.8rem] leading-[1.02] tracking-[-0.03em] text-cream sm:text-6xl lg:text-[5.4rem]">
          Two names.
          <span className="block italic text-cream/80">One standard.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-cream/55">
          Matt & Richi is a practice, not a roster. Two people. Named advice. A small book of houses.
        </p>
      </section>

      <section className="flex justify-center py-6 lg:py-8">
        <p
          aria-hidden
          className="font-serif text-[7rem] leading-none text-accent/90 sm:text-[9rem] lg:text-[11rem]"
        >
          &
        </p>
      </section>

      <section className="grid border-y border-cream/10 lg:grid-cols-2">
        {founders.map((person, index) => (
          <article
            key={person.id}
            className={`px-5 py-12 sm:px-10 lg:px-14 lg:py-16 ${
              index === 1 ? "border-t border-cream/10 lg:border-t-0 lg:border-l" : ""
            }`}
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-olive">
              {person.role}
            </p>
            <h2 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">
              {person.name}
            </h2>
            <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-cream/58">
              {person.note}
            </p>
            <div className="mt-8 space-y-2 text-sm text-cream/70">
              <p>
                <a href={person.phoneHref} className="hover:text-accent">
                  {person.phone}
                </a>
              </p>
              <p>
                <a href={person.emailHref} className="hover:text-accent">
                  {person.email}
                </a>
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="px-5 py-14 sm:px-10 lg:px-24 lg:py-20">
        <p className="text-[11px] uppercase tracking-[0.24em] text-olive">Belief</p>
        <blockquote className="mt-5 max-w-3xl font-serif text-2xl leading-snug text-cream/88 sm:text-3xl lg:text-[2.4rem]">
          A home should feel inevitable — as if the rooms were waiting, and you were simply the next person to walk in.
        </blockquote>
        <p className="mt-8 max-w-lg text-sm leading-relaxed text-cream/50">
          We take few instructions. We tell the truth early. We would rather decline a house than represent it badly.
        </p>
      </section>
    </main>
  );
}
