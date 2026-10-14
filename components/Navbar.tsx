"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#escritorio", label: "O Escritório" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      ref={navRef as React.RefObject<HTMLElement>}
      data-animate
      className="relative z-50 w-full border-b border-ink/10 bg-off-white"
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-6 md:h-20 md:px-12">
        <Link href="#topo" className="flex shrink-0 items-center gap-2.5" aria-label="Gabriel Barros Advogado — início">
          <Image
            src="/assets/img/logo-mark.png"
            alt=""
            width={100}
            height={41}
            priority
            className="h-7 w-auto md:h-8"
          />
          <span className="font-serif text-[0.95rem] leading-none text-ink md:text-base">
            Gabriel Barros
            <span className="mt-0.5 block font-sans text-[0.55rem] font-semibold tracking-[0.22em] text-champagne">
              ADVOGADO
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 whitespace-nowrap xl:gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.74rem] font-medium uppercase tracking-[0.05em] text-ink/70 transition-colors duration-300 hover:text-navy xl:text-[0.8rem] xl:tracking-[0.08em]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-sm bg-champagne px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.03em] text-navy transition-colors duration-300 hover:bg-champagne-light lg:inline-flex xl:px-6 xl:py-3 xl:text-[0.78rem] xl:tracking-[0.05em]"
        >
          Fale com o Escritório
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-ink/15 text-ink lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        className={`fixed inset-0 z-[60] bg-navy-deep/70 backdrop-blur-sm transition-opacity duration-400 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <div
        className={`fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-[340px] flex-col gap-1 border-l border-champagne/15 bg-navy px-7 py-7 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
          <Image src="/assets/img/logonavbar.webp" alt="Gabriel Barros Advogado" width={120} height={82} className="h-10 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-off-white transition-transform duration-300 hover:rotate-90 hover:border-champagne hover:bg-champagne/15"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="border-b border-white/5 px-1.5 py-4 text-base font-medium text-off-white transition-colors hover:text-champagne"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contato"
          onClick={() => setOpen(false)}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-champagne px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.05em] text-navy"
        >
          Fale com o Escritório
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </a>
      </div>
    </header>
  );
}
