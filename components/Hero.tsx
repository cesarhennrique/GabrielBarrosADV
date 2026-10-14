"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star, ArrowUpRight, Scale, BadgeCheck, Users, MapPinned } from "lucide-react";

const STATS = [
  { icon: Scale, value: "OAB/PE 55.838", label: "Registro profissional ativo" },
  { icon: Star, value: "5,0", label: "Nota no Google" },
  { icon: Users, value: "152+", label: "Avaliações de clientes" },
  { icon: MapPinned, value: "100%", label: "Atendimento em todo o Brasil" },
];

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-photo-reveal", {
        clipPath: "inset(0 0 100% 0)",
        scale: 1.08,
        duration: 1.3,
        ease: "power4.out",
      })
        .from(
          ".hero-title-line",
          { yPercent: 115, opacity: 0, duration: 0.9, stagger: 0.12 },
          "-=0.9"
        )
        .from(".hero-support", { y: 18, opacity: 0, duration: 0.7 }, "-=0.45")
        .from(
          ".hero-cta-group > *",
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.35"
        )
        .from(
          ".hero-motif",
          { opacity: 0, scale: 0.85, duration: 0.8, stagger: 0.08 },
          "-=0.5"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="topo"
      className="relative overflow-hidden bg-navy pt-28 md:pt-32"
    >
      {/* Motifs geométricos — mosaico quadrado discreto */}
      <span className="motif-square hero-motif h-16 w-16 left-[6%] top-[22%] hidden md:block" />
      <span className="motif-square hero-motif h-10 w-10 left-[10%] top-[68%] hidden md:block" />
      <span className="motif-square hero-motif h-24 w-24 right-[4%] top-[12%] hidden lg:block" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 pb-20 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        {/* Copy — esquerda */}
        <div className="relative z-10 order-2 lg:order-1">
          <p className="hero-support mb-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-champagne uppercase">
            <span className="h-px w-8 bg-champagne" />
            Gabriel Barros Advogado
          </p>

          <h1 className="font-serif text-[2.6rem] leading-[1.05] text-off-white sm:text-6xl lg:text-[4.2rem]">
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

          <p className="hero-support mt-7 max-w-md text-base leading-relaxed text-off-white/70">
            Advocacia estratégica para as necessidades pessoais e da sua família.
          </p>

          <div className="hero-cta-group mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-champagne px-8 py-4 text-sm font-semibold text-navy transition-transform duration-300 hover:-translate-y-0.5 hover:bg-champagne-light"
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

          {/* Linha institucional — informações existentes preservadas */}
          <dl className="hero-support mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-7 border-t border-white/10 pt-9 sm:grid-cols-4 sm:gap-x-6">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-start gap-2.5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.75} />
                <div>
                  <dt className="font-serif text-base text-off-white">{value}</dt>
                  <dd className="mt-0.5 text-[0.7rem] leading-snug text-off-white/55">{label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Fotografia — direita */}
        <div className="relative order-1 z-10 lg:order-2">
          <div className="hero-photo-reveal relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)] sm:max-w-md lg:ml-auto">
            <Image
              src="/assets/img/gbhero.webp"
              alt="Dr. Gabriel Barros, advogado"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/10" />
          </div>

          {/* Selo discreto, badge institucional */}
          <div className="hero-motif absolute -bottom-6 left-0 flex items-center gap-3 rounded-sm border border-champagne/25 bg-navy/90 px-5 py-4 backdrop-blur-md sm:left-6">
            <BadgeCheck className="h-5 w-5 shrink-0 text-champagne" strokeWidth={1.75} />
            <p className="text-xs leading-snug text-off-white/80">
              OAB/PE 55.838
              <br />
              <span className="text-off-white/55">Advocacia registrada e ativa</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
