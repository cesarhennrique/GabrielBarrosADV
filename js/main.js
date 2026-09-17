// Gabriel Barros Advogado — interações da landing page

document.addEventListener('DOMContentLoaded', () => {

  /* Ano no rodapé */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Header: transparente sobre o hero, ganha fundo sólido ao rolar */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Menu mobile: abre/fecha pelo hambúrguer (que vira X), pelo botão de
     fechar dentro do painel, clicando no overlay escuro, na tecla Esc, ou
     ao clicar em qualquer link do menu. */
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navBackdrop = document.getElementById('nav-backdrop');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    const openMenu = () => {
      mainNav.classList.add('open');
      navToggle.classList.add('active');
      navBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      mainNav.classList.remove('open');
      navToggle.classList.remove('active');
      navBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    };
    navToggle.addEventListener('click', () => {
      mainNav.classList.contains('open') ? closeMenu() : openMenu();
    });
    if (navClose) navClose.addEventListener('click', closeMenu);
    if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
    mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  /* Reveal on scroll (animações suaves de entrada) */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-reveal-delay') || 0;
        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  /* Tabs: Situações que atendemos */
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      document.getElementById(`tab-${target}`).classList.add('active');
    });
  });

  /* Accordion: Perguntas frequentes (uma aberta por vez) */
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const panel = item.querySelector('.accordion-panel');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      accordionItems.forEach(other => {
        other.classList.remove('open');
        other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        other.querySelector('.accordion-panel').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
      }
    });
  });

  /* Carrossel de avaliações */
  const track = document.getElementById('carousel-track');
  const dotsWrap = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (track) {
    const cards = Array.from(track.children);
    let index = 0;
    let autoplayTimer;

    cards.forEach((_, i) => {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      track.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1)';
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }
    function goTo(i) {
      index = (i + cards.length) % cards.length;
      update();
      resetAutoplay();
    }
    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    function resetAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(next, 6000);
    }
    resetAutoplay();

    // Pausa no hover
    const carouselSection = track.closest('.testimonial-carousel');
    carouselSection.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    carouselSection.addEventListener('mouseleave', resetAutoplay);
  }

  /* Formulário de contato -> WhatsApp */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const whatsapp = form.whatsapp.value.trim();
      const mensagem = form.mensagem.value.trim();
      const texto = `Olá! Meu nome é ${nome}.%0AWhatsApp: ${whatsapp}%0A%0A${encodeURIComponent(mensagem)}`;
      window.open(`https://wa.me/5581991023600?text=${texto}`, '_blank');
    });
  }

  /* Smooth anchor scroll considerando header fixo */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = 90;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

});
