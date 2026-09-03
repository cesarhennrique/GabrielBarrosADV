# Gabriel Barros Advogado — Landing Page

Site institucional em HTML/CSS/JS puro (sem build), com animações suaves de entrada (scroll reveal) e rolagem otimizada, seguindo o conteúdo do PDF institucional e a referência visual de design enviada (dark navy + dourado, tipografia serifada em títulos).

## Estrutura
```
index.html          → todas as seções da página (13 seções + header/footer)
css/styles.css       → paleta, tipografia, layout, animações
js/main.js            → header dinâmico, menu mobile, scroll reveal, tabs, accordion, carrossel, formulário
assets/img/           → onde entram as fotos e logo (ver abaixo)
```

## Paleta usada (extraída da referência)
- Dourado (accent): `#C8A450`
- Dark / navy: `#0C161C`
- Charcoal: `#15242E`
- Ocean Pine: `#356469`
- Texto claro: `#EAEAEA`
- Texto corpo (fundo claro): `#555555`

Fontes: **Playfair Display** (títulos, elegante/serifada) + **Inter** (corpo, moderna).

## Pendências para você enviar
1. **Logo** → salvar como `assets/img/logo.svg` (ou .png). Enquanto não existir, o header some o espaço do logo automaticamente.
2. **Foto do Dr. Gabriel (topo/hero)** → `assets/img/dr-gabriel.jpg`
3. **Foto/retrato do Dr. Gabriel (seção "Quem vai conduzir seu caso")** → `assets/img/dr-gabriel-retrato.jpg`
4. **Foto do escritório** → `assets/img/escritorio.jpg`
5. **Mais avaliações do Google** (12 a 15) para completar o carrossel da seção de Avaliações — atualmente só as 3 avaliações reais já transcritas no PDF estão no site.
6. **Número de avaliações (152)** está em `<span id="review-count">` em três lugares — pode ser atualizado manualmente até termos um campo dinâmico via CMS/JS.

Basta colocar os arquivos de imagem com os nomes acima dentro de `assets/img/` que eles aparecem automaticamente (há um fallback visual "placeholder" enquanto não existem).

## Rodar localmente
Basta abrir o `index.html` no navegador, ou rodar um servidor local:
```
npx serve .
```

## Próximos passos sugeridos
- Trocar textos placeholder do carrossel de avaliações pelas reais.
- Conectar o formulário de contato a um backend/e-mail (hoje ele abre o WhatsApp com a mensagem preenchida).
- Adicionar favicon e imagem de compartilhamento (Open Graph).
