import { agency } from "@/data/practice";

export default function PrivacyView() {
  return (
    <main className="px-5 pt-12 pb-8 sm:px-8 lg:px-16 lg:pt-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-olive">
        Privacy
      </p>
      <h1 className="mt-5 max-w-2xl font-serif text-4xl text-cream sm:text-5xl">
        How we hold what you tell us.
      </h1>

      <article className="mt-12 max-w-2xl space-y-8 text-sm leading-relaxed text-cream/62">
        <section>
          <h2 className="font-serif text-2xl text-cream">Who we are</h2>
          <p className="mt-3">
            {agency.name}, {agency.suite}, {agency.suburb}. ABN {agency.abn}. You can reach us at{" "}
            <a href={agency.emailHref} className="text-cream hover:text-accent">
              {agency.email}
            </a>{" "}
            or {agency.phone}.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-cream">What we collect</h2>
          <p className="mt-3">
            Only what you choose to send: a name, an email, a telephone number, and whatever you write about a house. We do not sell this, and we do not use it to advertise to you.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-cream">Why we keep it</h2>
          <p className="mt-3">
            To answer you, to represent a property if you ask us to, and to meet the records we are required to keep as an estate agency in Victoria.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl text-cream">How long</h2>
          <p className="mt-3">
            For as long as the conversation or the instruction lasts, and thereafter only as the law asks. You may request a copy, a correction, or a deletion by writing to us.
          </p>
        </section>
        <p className="text-cream/40">Last updated 2026.</p>
      </article>
    </main>
  );
}
