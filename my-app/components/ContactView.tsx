import { agency, founders } from "@/data/practice";

export default function ContactView() {
  return (
    <main className="px-5 pt-12 pb-8 sm:px-8 lg:px-16 lg:pt-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
        Contact
      </p>
      <h1 className="mt-5 font-serif text-4xl text-cream sm:text-6xl">
        Write, or call.
      </h1>

      <section className="mt-12 max-w-xl border-t border-cream/10 pt-10">
        <p className="font-serif text-2xl text-cream">{agency.name}</p>
        <p className="mt-4 text-sm leading-relaxed text-cream/60">
          {agency.suite}
          <br />
          {agency.suburb}
        </p>
        <p className="mt-5 space-y-1 text-sm text-cream/70">
          <a href={agency.emailHref} className="block hover:text-accent">
            {agency.email}
          </a>
          <a href={agency.phoneHref} className="block hover:text-accent">
            {agency.phone}
          </a>
        </p>
        <p className="mt-4 text-[11px] tracking-[0.16em] text-cream/35">
          ABN {agency.abn}
        </p>
      </section>

      <section className="mt-14 grid gap-10 border-t border-cream/10 pt-10 sm:grid-cols-2">
        {founders.map((person) => (
          <article key={person.id}>
            <h2 className="font-serif text-3xl text-cream">{person.name}</h2>
            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-olive">
              {person.role}
            </p>
            <p className="mt-5 text-sm text-cream/70">
              <a href={person.phoneHref} className="block hover:text-accent">
                {person.phone}
              </a>
              <a href={person.emailHref} className="mt-1 block hover:text-accent">
                {person.email}
              </a>
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
