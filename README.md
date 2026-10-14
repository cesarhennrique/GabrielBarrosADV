# Gabriel Barros Advocacia — Site PRO (migração em andamento)

Este branch (`nextjs-migration`) contém a reconstrução do site em **Next.js (App Router) + TypeScript + Tailwind CSS + GSAP**, seguindo o padrão SITE PRO — Editorial Legal / Cinematic Authority.

**A versão em produção (branch `main`) não foi alterada.** Nada neste branch foi publicado ainda.

## Status desta etapa

Implementado e aprovado para revisão:
- ✅ Navbar (desktop + drawer mobile)
- ✅ Hero (fotografia, copy, CTA, informações institucionais, animação GSAP)

Pendente (próximas etapas, uma a uma):
- O Escritório, Áreas de Atuação, Situações Frequentes, Avaliações, Quem Conduz o Caso, Método, Valores, Onde Atendemos, FAQ, Contato, Rodapé.

Essas seções continuam disponíveis e funcionais na **versão estática anterior**, preservada em:
- Branch `legacy-static-site`
- Tag `v1-static-site-backup`
- E inalterada no próprio branch `main` (produção atual)

## Rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript (modo strict)
- Tailwind CSS v4 (tokens de design em `app/globals.css`)
- GSAP (animações de entrada da Hero)
- lucide-react (ícones)

## Paleta (conceito Editorial Legal)

| Token | Valor |
|---|---|
| Navy | `#101823` |
| Off-white | `#F4F1EC` |
| Champagne | `#B79A72` |

Tipografia: Playfair Display (editorial, títulos) + Inter (interface, texto).

## Assets

Imagens e ícones ficam em `public/assets/`, copiados dos mesmos arquivos otimizados (WebP) já usados na versão estática.
