"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Landmark, HeartPulse } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Trechos literais da seção "Áreas de atuação" já existente no projeto —
   nenhuma descrição nova foi criada. A quarta área (Direito Cível e do
   Consumidor) permanece reservada para a seção completa, ainda não
   migrada. */
const CARDS = [
  {
    icon: Users,
    title: "Direito de Família e Sucessões",
    text: "Divórcio consensual e litigioso. Guarda e regulamentação de convivência. Pensão alimentícia, incluindo fixação, revisão e execução.",
    image: "/assets/img/card-familia.webp",
  },
  {
    icon: Landmark,
    title: "Direito Previdenciário",
    text: "Auxílio por incapacidade temporária. BPC e LOAS para pessoas idosas e pessoas com deficiência. Aposentadorias.",
    image: "/assets/img/card-previdenciario.webp",
  },
  {
    icon: HeartPulse,
    title: "Direito à Saúde",
    text: "Negativa de cirurgia. Fornecimento de medicamentos de alto custo. Cobertura de terapias para pessoas com Transtorno do Espectro Autista.",
    image: "/assets/img/card-saude.webp",
  },
];

export default function EditorialCards() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      // Entrada escalonada (continuação da timeline cinematográfica da Hero)
      gsap.from(".editorial-card", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });

      // Parallax discreto + zoom sutil na imagem ao rolar
      gsap.utils.toArray<HTMLElement>(".editorial-card").forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -14 : 14,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        const img = card.querySelector(".editorial-card-img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "top 30%",
                scrub: 1,
              },
            }
          );
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative z-20 bg-off-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 pb-20 pt-10 sm:-mt-12 sm:pt-0 md:px-12 lg:-mt-20 lg:grid-cols-3 lg:gap-10">
        {CARDS.map(({ icon: Icon, title, text, image }) => (
          <article
            key={title}
            className="editorial-card flex flex-col bg-off-white shadow-[0_30px_60px_-35px_rgba(16,24,35,0.35)]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="editorial-card-img object-cover"
              />
            </div>

            <div className="relative flex flex-1 flex-col px-1 pt-10">
              <div className="absolute -top-7 left-0 flex h-14 w-14 items-center justify-center bg-navy">
                <Icon className="h-5 w-5 text-champagne" strokeWidth={1.75} />
              </div>

              <h3 className="font-serif text-xl uppercase tracking-[0.01em] text-ink">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{text}</p>
              <div className="mt-6 h-px w-10 bg-champagne" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
