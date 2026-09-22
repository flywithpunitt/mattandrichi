import Link from "next/link";
import { agency } from "@/data/practice";

export default function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 px-5 py-10 sm:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-olive">
            {agency.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/60">
            {agency.suite}
            <br />
            {agency.suburb}
          </p>
          <p className="mt-3 text-sm text-cream/55">
            <a href={agency.emailHref} className="transition-colors hover:text-accent">
              {agency.email}
            </a>
            <span className="mx-2 text-cream/25">·</span>
            <a href={agency.phoneHref} className="transition-colors hover:text-accent">
              {agency.phone}
            </a>
          </p>
          <p className="mt-2 text-[11px] tracking-[0.14em] text-cream/35">
            ABN {agency.abn}
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-olive">Visit</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-cream/60">
            <Link href="/buy" className="hover:text-cream">
              Buy
            </Link>
            <Link href="/sell" className="hover:text-cream">
              Sell
            </Link>
            <Link href="/lease" className="hover:text-cream">
              Lease
            </Link>
            <Link href="/projects" className="hover:text-cream">
              Projects
            </Link>
            <Link href="/our-story" className="hover:text-cream">
              Our Story
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-olive">Practice</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-cream/60">
            <Link href="/contact" className="hover:text-cream">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-cream">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
