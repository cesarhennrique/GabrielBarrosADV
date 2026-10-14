"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-photo-reveal", {
        clipPath: "inset(0 0 100% 0)",
        scale: 1.06,
        duration: 1.3,
        ease: "power4.out",
      })
        .from(
          ".hero-title-line > span",
          { yPercent: 115, opacity: 0, duration: 0.9, stagger: 0.12 },
          "-=0.9"
        )
        .from(".hero-support", { y: 18, opacity: 0, duration: 0.7 }, "-=0.45")
        .from(
          ".hero-cta-group > *",
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.35"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="topo"
      className="relative overflow-hidden bg-navy"
    >
      <div className="relative mx-auto grid min-h-[86vh] max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-16 md:px-12 lg:min-h-[88vh] lg:grid-cols-[44%_56%] lg:gap-0 lg:py-0">
        {/* Copy — esquerda */}
        <div className="relative z-10 order-2 lg:order-1 lg:pr-12">
          <p className="hero-support mb-6 text-xs font-semibold tracking-[0.22em] text-champagne uppercase">
            Gabriel Barros Advogado
          </p>

          <h1 className="font-serif text-[2.5rem] leading-[1.08] text-off-white sm:text-6xl lg:text-[4rem]">
            <span className="hero-title-line block overflow-hidden">
              <span className="block">Sua Parceira</span>
            </span>
            <span className="hero-title-line block overflow-hidden">
              <span className="block">Jurídica de</span>
            </span>
            <span className="hero-title-line block overflow-hidden">
              <span className="block text-champagne">Confiança</span>
            </span>
          </h1>

          <div className="hero-support mt-7 h-px w-16 bg-champagne/50" />

          <p className="hero-support mt-7 max-w-md text-base leading-relaxed text-off-white/65">
            Advocacia estratégica para as necessidades pessoais e da sua família.
          </p>

          <div className="hero-cta-group mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-sm bg-champagne px-8 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-navy transition-colors duration-300 hover:bg-champagne-light"
            >
              Apresentar meu caso
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </a>

            <div className="flex items-center gap-2 text-off-white/80">
              <span className="flex items-center gap-0.5 text-champagne">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-champagne" strokeWidth={0} />
                ))}
              </span>
              <span className="text-sm">
                <strong className="font-semibold text-off-white">5,0</strong> · 152+ avaliações
              </span>
            </div>
          </div>
        </div>

        {/* Fotografia — direita, integrada ao fundo (sem card isolado) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full lg:w-[56%]">
          <div className="hero-photo-reveal relative h-full w-full">
            <Image
              src="/assets/img/gbhero.webp"
              alt="Dr. Gabriel Barros, advogado"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover object-[75%_20%]"
            />
            {/* Blend cinematográfico: a foto original tem uma janela clara
                ao fundo (ver nota de limitação no relatório) — este overlay
                funde a borda esquerda da imagem à paleta navy da Hero sem
                apagar o rosto. */}
            <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/25 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-navy/55 via-transparent to-navy/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
