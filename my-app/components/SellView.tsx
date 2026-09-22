"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { sellChapters } from "@/data/selling";

export default function SellView() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <section className="grid items-end gap-10 px-5 pt-10 pb-12 sm:px-8 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:pt-16 lg:pb-8">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-olive sm:text-xs">
            <span className="text-accent">02</span>
            <span className="h-px w-6 bg-olive/50" />
            <span>Representation</span>
          </p>
          <h1 className="font-serif text-[2.6rem] leading-[1.04] tracking-[-0.03em] text-cream sm:text-6xl lg:text-[4.8rem]">
            Leave the house
            <span className="mt-1 block italic text-cream/88">better than you found it.</span>
          </h1>
        </div>
        <p className="max-w-md text-[0.98rem] leading-relaxed text-cream/62 lg:pb-3">
          Selling is not a listing. It is a last act of care — for the rooms you know, and for the person who will learn them next.
        </p>
      </section>

      <section className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="relative min-h-[22rem] lg:min-h-[32rem]">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="A sunlit house prepared for its next chapter"
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </aside>
        <div className="flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-16">
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent">
            A note to owners
          </p>
          <div className="mt-6 space-y-5 font-serif text-xl leading-relaxed text-cream/82 sm:text-2xl">
            <p>We do not put a home on the market to see what happens.</p>
            <p className="italic text-cream/70">
              We decide, first, who it is for — then we make that meeting feel inevitable.
            </p>
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/50">
            Matt & Richi take a small number of houses at a time. If we cannot represent you properly, we will say so early.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <p className="text-[11px] uppercase tracking-[0.24em] text-olive">
          The work
        </p>
        <h2 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
          Four movements. No theatre.
        </h2>

        <ol className="mt-12 flex flex-col gap-16 lg:gap-20">
          {sellChapters.map((chapter, index) => (
            <li
              key={chapter.index}
              className="grid items-center gap-8 border-t border-cream/10 pt-10 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <p className="font-serif text-5xl text-accent/90 sm:text-6xl">
                  {chapter.index}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-cream">
                  {chapter.title}
                </h3>
                <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-cream/62">
                  {chapter.body}
                </p>
              </div>
              <div
                className={`relative aspect-[5/4] overflow-hidden rounded-[1.3rem] lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={chapter.image.src}
                  alt={chapter.image.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-5 grid gap-6 rounded-[1.4rem] border border-cream/10 px-6 py-10 sm:mx-8 sm:grid-cols-3 sm:px-10 lg:mx-14">
        {[
          { value: "Private first", label: "The open market is last, not first." },
          { value: "One house at a time", label: "A small book. Never a catalogue." },
          { value: "Named advice", label: "Matt or Richi. Not a duty roster." },
        ].map((item) => (
          <div key={item.value}>
            <p className="font-serif text-2xl text-cream">{item.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/50">{item.label}</p>
          </div>
        ))}
      </section>

      <section
        id="enquire"
        className="px-5 py-16 sm:px-8 lg:px-14 lg:py-20"
      >
        <div className="grid gap-10 rounded-[1.4rem] bg-[#f9f9ed] px-6 py-10 text-ink sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-olive">
              Begin quietly
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Write to us as you would
              <span className="italic"> a trusted friend.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
              A neighbourhood, a timing, a feeling about the house. We will answer ourselves.
            </p>
          </div>

          {sent ? (
            <p className="self-center font-serif text-2xl text-ink/80">
              Received. We will write back.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-ink/50">
                Name
                <input
                  required
                  name="name"
                  className="rounded-full border border-ink/15 bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none focus:border-ink/40"
                />
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-ink/50">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-full border border-ink/15 bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none focus:border-ink/40"
                />
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.18em] text-ink/50">
                The house, in a sentence
                <textarea
                  required
                  name="note"
                  rows={3}
                  className="rounded-2xl border border-ink/15 bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none focus:border-ink/40"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-xs font-medium tracking-[0.16em] text-ink uppercase transition-transform hover:-translate-y-px"
              >
                Send the note
                <span aria-hidden>→</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
