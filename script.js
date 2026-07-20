/* ============================================================
   Dr. Maneesh Kr. Srivastava — site behaviour
   Vanilla JS only. No framework, no build step.
   ------------------------------------------------------------
   All editable content lives in the DATA block at the top:
   swap a filename or a caption there and the page updates.
   ============================================================ */
'use strict';

/* ============================================================
   DATA
   ============================================================ */

const CLINIC = {
  phone: '+919936889779',
  whatsapp: '919936889779'
};

/* --- Certificates: shown in the horizontal rail, open in the lightbox --- */
const CERTIFICATES = [
  {
    img: 'assets/images/certificates/md-internal-medicine.jpg',
    title: 'MD — Internal Medicine',
    meta: 'Maharashtra University of Health Sciences, Nashik · 2023',
    desc: 'Doctor of Medicine (Internal Medicine) conferred on Maneesh Srivastava of Seth G.S. Medical College, Parel, Mumbai. Convocation held 8 October 2023.'
  },
  {
    img: 'assets/images/certificates/medical-registration.jpg',
    title: 'Medical Registration Certificate',
    meta: 'Medical Council of Uttar Pradesh · Cert. No. 113519',
    desc: 'MBBS registration with the Office of the Medical Council, Uttar Pradesh. Registered 9 May 2025, lifetime validity.'
  },
  {
    img: 'assets/images/certificates/honorary-doctorate.jpg',
    title: 'Honorary Doctorate',
    meta: 'Georgia Digital University, USA · Dec 2025',
    desc: 'Doctorate in Emergency & Critical Care Services (Honoris Causa), awarded on the recommendation of the Board of Regents.'
  },
  {
    img: 'assets/images/certificates/honorary-doctorate-medal.jpg',
    title: 'Doctorate Award & Medal',
    meta: 'Georgia Digital University, USA',
    desc: 'The conferral letter and medal accompanying the honorary doctorate in Emergency & Critical Care Services.'
  },
  {
    img: 'assets/images/certificates/doctorate-conferral.jpg',
    title: 'Conferral Ceremony',
    meta: 'Georgia Digital University convocation',
    desc: 'Receiving the honorary doctorate certificate on stage at the university convocation ceremony.'
  },
  {
    img: 'assets/images/certificates/convocation-stage.jpg',
    title: 'Convocation',
    meta: 'Honorary doctorate cohort',
    desc: 'With fellow honorees at the Georgia Digital University convocation.'
  },
  {
    img: 'assets/images/certificates/research-award.jpg',
    title: 'Best Research Paper',
    meta: '“Holistic Approach for Chronic Hypertension”',
    desc: 'Award for research on treating chronic hypertension as a whole-body condition, displayed at the clinic alongside academic records.'
  },
  {
    img: 'assets/images/certificates/gdu-folder.jpg',
    title: 'Award Portfolio',
    meta: 'Georgia Digital University, USA',
    desc: 'The presentation folder issued with the honorary doctorate award.'
  }
];

/* --- Scanned documents (PDF), opened in the document modal --- */
const DOCUMENTS = [
  { file: 'assets/documents/document-01.pdf', title: 'Scanned Document 1' },
  { file: 'assets/documents/document-02.pdf', title: 'Scanned Document 2' },
  { file: 'assets/documents/document-03.pdf', title: 'Scanned Document 3' },
  { file: 'assets/documents/document-04.pdf', title: 'Scanned Document 4' },
  { file: 'assets/documents/document-05.pdf', title: 'Scanned Document 5' },
  { file: 'assets/documents/document-06.pdf', title: 'Scanned Document 6' },
  { file: 'assets/documents/document-07.pdf', title: 'Scanned Document 7' }
];

/* --- Gallery: masonry grid, filterable, opens in the lightbox --- */
const GALLERY = [
  { img: 'assets/images/clinic/chamber-wide.jpg',        cat: 'clinic',    title: 'Consultation Chamber',      desc: 'The main chamber at Deema Medicare, with awards and case photographs lining the wall.' },
  { img: 'assets/images/doctor/consultation-desk.jpg',   cat: 'doctor',    title: 'At the Desk',               desc: 'Dr. Srivastava at his consultation desk beneath the Deemax Hospital services board.' },
  { img: 'assets/images/events/free-health-camps-board.jpg', cat: 'community', title: 'Free Health Camps',     desc: 'Activity board from the free health check-up and medical camps run with Sarvjan Vikas Samiti.' },
  { img: 'assets/images/clinic/exterior-night.jpg',      cat: 'clinic',    title: 'Clinic After Dark',         desc: 'Deema Medicare, Vikas Nagar — evening OPD runs until 11 PM.' },
  { img: 'assets/images/gallery/kgmu-team.jpg',          cat: 'training',  title: 'KGMU Team',                 desc: 'With the clinical team on the King George\'s Medical University campus, Lucknow.' },
  { img: 'assets/images/doctor/icu-duty.jpg',            cat: 'doctor',    title: 'ICU Duty',                  desc: 'On shift beside the ICU stat lab.' },
  { img: 'assets/images/clinic/chamber-blue.jpg',        cat: 'clinic',    title: 'Chamber & Awards',          desc: 'The consulting room, with the award shelf built up over years of practice.' },
  { img: 'assets/images/events/clinic-inauguration.jpg', cat: 'community', title: 'Clinic Inauguration',       desc: 'Ribbon-cutting at the opening of a new clinic facility.' },
  { img: 'assets/images/doctor/at-kgmu.jpg',             cat: 'doctor',    title: 'King George\'s Medical University', desc: 'On the KGMU campus, where his advanced life support training was completed.' },
  { img: 'assets/images/clinic/exterior-day.jpg',        cat: 'clinic',    title: 'Clinic Entrance',           desc: 'The street entrance — Consultant Physician / Lifestyle Expert, Ex-Vivekanand Polyclinic.' },
  { img: 'assets/images/gallery/surgical-team.jpg',      cat: 'training',  title: 'With the Surgical Team',    desc: 'Marking a successful case with hospital colleagues.' },
  { img: 'assets/images/events/kids-teachers-training.jpg', cat: 'community', title: 'KiDS Teachers\' Training', desc: 'International Diabetes Federation "Kids & Diabetes in Schools" teachers\' training programme.' },
  { img: 'assets/images/clinic/chamber-desk.jpg',        cat: 'clinic',    title: 'Reference Library',         desc: 'The chamber bookshelf — internal medicine, community medicine and paediatrics texts kept in reach.' },
  { img: 'assets/images/doctor/public-speaking.jpg',     cat: 'doctor',    title: 'Addressing an Audience',     desc: 'Speaking at a community health awareness session.' },
  { img: 'assets/images/clinic/signboard.jpg',           cat: 'clinic',    title: 'Deema Medi Care',           desc: 'Clinic signage — MD Medicine (Gold Medalist), Consultant Physician.' },
  { img: 'assets/images/gallery/conference-travel.jpg',  cat: 'training',  title: 'Conference Travel',         desc: 'Travelling to a medical conference.' },
  { img: 'assets/images/clinic/medical-store.jpg',       cat: 'clinic',    title: 'Deema Medical Store',       desc: 'The in-house pharmacy stocking life-saving drugs.' },
  { img: 'assets/images/events/inauguration-ribbon.jpg', cat: 'community', title: 'New Facility Opening',      desc: 'Community members inaugurating a new clinic wing.' },
  { img: 'assets/images/clinic/signboard-credentials.jpg', cat: 'clinic',  title: 'Credentials Board',         desc: 'Training credentials: KGMU International Training Centre, American Heart Association and American College of Surgeons.' },
  { img: 'assets/images/clinic/brochure.jpg',            cat: 'clinic',    title: 'Practice Brochure',         desc: 'Deemax Hospital & Institute — specialties, timings and on-site facilities.' }
];

/* --- Patient video stories --- */
const VIDEOS = Array.from({ length: 15 }, (_, i) => ({
  src: `assets/videos/patient-story-${String(i + 1).padStart(2, '0')}.mp4`,
  title: `Patient Story ${String(i + 1).padStart(2, '0')}`,
  meta: 'In their own words'
}));

/* --- Events, camps and conferences --- */
const EVENTS = [
  {
    img: 'assets/images/events/medanta-cardiac-conclave.jpg',
    date: '2025',
    title: 'Medanta Cardiac Conclave',
    desc: 'Attended the 7th Medanta Cardiac Conclave, where leading cardiologists presented advances in cardiac care and interventional practice.'
  },
  {
    img: 'assets/images/events/kids-teachers-training.jpg',
    date: 'Awareness',
    title: 'IDF KiDS Teachers\' Training',
    desc: 'Resource person for the International Diabetes Federation "Kids & Diabetes in Schools" programme, training teachers to recognise diabetes in children.'
  },
  {
    img: 'assets/images/events/free-health-camps-board.jpg',
    date: 'Ongoing',
    title: 'Free Health & Medical Camps',
    desc: 'Free check-up and medicine distribution camps at Raunahar and Anwari, run in partnership with Sarvjan Vikas Samiti, Lucknow.'
  },
  {
    img: 'assets/images/events/gurukul-academy-honour.jpg',
    date: 'Community',
    title: 'Sardar Patel Gurukul Academy',
    desc: 'Honoured as chief guest at the parents\' programme at Sardar Patel Gurukul Academy, Air Force Road, Bakshi Ka Talab, Lucknow.'
  },
  {
    img: 'assets/images/events/sarvjan-vikas-samiti.jpg',
    date: 'Community',
    title: 'Sarvjan Vikas Samiti — Get Together',
    desc: 'Felicitated at the get-together marking two years of health check-up and free medicine distribution drives.'
  },
  {
    img: 'assets/images/events/kids-program-award.jpg',
    date: 'Awareness',
    title: 'Diabetes Awareness Programme',
    desc: 'Recognition at the Sanofi-supported KiDS awareness programme for work on childhood diabetes education.'
  },
  {
    img: 'assets/images/events/cardiac-conclave-peers.jpg',
    date: '2025',
    title: 'Peer Exchange, Cardiac Conclave',
    desc: 'Discussing case management with fellow physicians at the Medanta Cardiac Conclave.'
  },
  {
    img: 'assets/images/events/certificate-handover.jpg',
    date: 'Academic',
    title: 'Academic Engagement',
    desc: 'Submitting academic documentation as part of continuing medical education and institutional affiliation.'
  },
  {
    img: 'assets/images/events/clinic-inauguration.jpg',
    date: 'Milestone',
    title: 'Clinic Inauguration',
    desc: 'Opening of an expanded clinic facility, attended by community leaders and patients\' families.'
  }
];

/* --- Health awareness material --- */
const AWARENESS = [
  {
    img: 'assets/images/awareness/heart-attack-warning-signs.jpg',
    title: 'Heart Attack Warning Signs',
    desc: 'Central chest pain lasting over 20 minutes, pain radiating to the arm, neck or jaw, cold sweating and breathlessness. The golden hour saves lives.'
  },
  {
    img: 'assets/images/awareness/low-testosterone.jpg',
    title: 'Low Testosterone in Men',
    desc: 'Fatigue, low mood, reduced muscle mass, poor concentration and sleep problems. Symptoms are non-specific — laboratory testing confirms.'
  },
  {
    img: 'assets/images/awareness/liver-kidney-heart-care.jpg',
    title: 'Liver, Kidney & Heart Care',
    desc: 'The three organ systems most often damaged silently by untreated diabetes and hypertension — screened together at every consultation.'
  }
];

/*
  SAMPLE CONTENT — replace with real, consented patient reviews before publishing.
  Keep the same shape: { text, name, meta, initial }.
*/
const TESTIMONIALS = [
  {
    text: 'My father\'s sugar and blood pressure had been out of control for years. Doctor sahab sat with us for almost forty minutes, went through every old report, and explained what each medicine was actually doing. Three months later his readings are stable for the first time.',
    name: 'Sample Review',
    meta: 'Replace with a real patient review',
    initial: 'S'
  },
  {
    text: 'I had been to four doctors and every test came back normal, but I still felt unwell every single day. He was the first one who did not dismiss it. He looked at my thyroid and my sleep together and finally found the cause.',
    name: 'Sample Review',
    meta: 'Replace with a real patient review',
    initial: 'S'
  },
  {
    text: 'My mother is bedridden and cannot travel. The doctor came home himself, checked her properly and arranged the injections. That kind of care is very rare now.',
    name: 'Sample Review',
    meta: 'Replace with a real patient review',
    initial: 'S'
  }
];

/* ============================================================
   HELPERS
   ============================================================ */

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Escape user-facing strings before injecting them as HTML. */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ============================================================
   PAGE LOADER
   ============================================================ */
function dismissLoader() {
  const loader = $('#loader');
  if (!loader) return;
  // Brief hold so the transition reads as intentional rather than a flicker.
  setTimeout(() => {
    loader.classList.add('is-done');
    setTimeout(() => { loader.style.display = 'none'; }, 700);
  }, 500);
}

// Guard against the load event having already fired before this script attached.
if (document.readyState === 'complete') {
  dismissLoader();
} else {
  window.addEventListener('load', dismissLoader);
}

/* ============================================================
   INIT — everything below runs once the DOM is parsed.
   If the script is attached after parsing has finished (deferred
   loading, injected tags), run immediately instead of waiting for
   an event that has already fired.
   ============================================================ */
function boot() {

  initTheme();
  renderCertificates();
  renderDocuments();
  renderGallery();
  renderVideos();
  renderEvents();
  renderAwareness();
  renderTestimonials();

  initNavbar();
  initScrollSpy();
  initScrollProgress();
  initCounters();
  initParticles();
  initCursorGlow();
  initCertRail();
  initGalleryFilter();
  initLightbox();
  initVideoModal();
  initDocModal();
  initBackToTop();
  initAppointmentForm();
  initLazyBlur();

  $('#year').textContent = new Date().getFullYear();

  // Scroll animations
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 90,
    disable: prefersReducedMotion
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

/* ============================================================
   THEME (dark mode)
   ============================================================ */
function initTheme() {
  const root   = document.documentElement;
  const toggle = $('#themeToggle');
  const icon   = toggle ? $('i', toggle) : null;

  // Default is always the light (white) theme. A visitor's explicit
  // toggle is remembered, but the system's dark preference no longer
  // overrides the intended white-first look.
  const stored = localStorage.getItem('dms-theme');
  apply(stored || 'light');

  function apply(mode) {
    root.setAttribute('data-bs-theme', mode);
    if (icon) icon.className = mode === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars';
  }

  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    localStorage.setItem('dms-theme', next);
  });
}

/* ============================================================
   NAVBAR — sticky state + close on mobile tap
   ============================================================ */
function initNavbar() {
  const nav = $('#mainNav');
  if (!nav) return;

  const setStuck = () => nav.classList.toggle('is-stuck', window.scrollY > 40);
  setStuck();
  window.addEventListener('scroll', setStuck, { passive: true });

  // Collapse the mobile menu after a link is chosen.
  const menu = $('#navMenu');
  $$('#navMenu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (menu && menu.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
}

/* ============================================================
   SCROLLSPY — highlights the section currently in view
   ============================================================ */
function initScrollSpy() {
  const links = $$('#navMenu .nav-link');
  const sections = links
    .map(l => $(l.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
  const bar = $('#scrollProgress');
  if (!bar) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = `${pct}%`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

/* ============================================================
   ANIMATED COUNTERS
   ============================================================ */
function initCounters() {
  const nums = $$('.stat__num');
  if (!nums.length) return;

  const run = el => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || '';

    if (prefersReducedMotion) {
      el.textContent = target.toLocaleString('en-IN') + suffix;
      return;
    }

    const duration = 1900;
    const start = performance.now();

    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast start, gentle landing
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      run(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  nums.forEach(n => observer.observe(n));
}

/* ============================================================
   HERO PARTICLES
   ============================================================ */
function initParticles() {
  const host = $('#particles');
  if (!host || prefersReducedMotion) return;

  const count = window.innerWidth < 768 ? 14 : 28;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    const size = Math.random() * 6 + 2;
    p.className = 'particle';
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.bottom = `${Math.random() * -20}%`;
    p.style.animationDuration = `${Math.random() * 16 + 14}s`;
    p.style.animationDelay = `${Math.random() * -20}s`;
    frag.appendChild(p);
  }
  host.appendChild(frag);
}

/* ============================================================
   CURSOR GLOW (fine pointers only)
   ============================================================ */
function initCursorGlow() {
  const glow = $('#cursorGlow');
  if (!glow || prefersReducedMotion) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  let x = 0, y = 0, cx = 0, cy = 0, active = false;

  document.addEventListener('mousemove', e => {
    x = e.clientX; y = e.clientY;
    if (!active) { active = true; glow.style.opacity = '1'; }
  });

  document.addEventListener('mouseleave', () => {
    active = false; glow.style.opacity = '0';
  });

  const loop = () => {
    // Lag the glow behind the cursor so it feels like light, not a pointer.
    cx += (x - cx) * 0.09;
    cy += (y - cy) * 0.09;
    glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* ============================================================
   RENDERERS
   ============================================================ */

function renderCertificates() {
  const rail = $('#certRail');
  if (!rail) return;

  rail.innerHTML = CERTIFICATES.map((c, i) => `
    <button class="cert-card" type="button" data-lightbox="cert" data-index="${i}">
      <div class="cert-card__img">
        <img src="${esc(c.img)}" alt="${esc(c.title)}" loading="lazy" decoding="async">
        <span class="cert-card__zoom"><i class="bi bi-arrows-fullscreen"></i></span>
      </div>
      <div class="cert-card__body">
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.meta)}</p>
      </div>
    </button>
  `).join('');
}

function renderDocuments() {
  const grid = $('#docGrid');
  if (!grid) return;

  grid.innerHTML = DOCUMENTS.map(d => `
    <div class="col-sm-6 col-lg-4">
      <button class="doc-card" type="button" data-doc="${esc(d.file)}">
        <i class="bi bi-file-earmark-pdf-fill"></i>
        <span>
          <strong>${esc(d.title)}</strong>
          <small>Tap to open</small>
        </span>
      </button>
    </div>
  `).join('');
}

function renderGallery() {
  const grid = $('#galleryGrid');
  if (!grid) return;

  grid.innerHTML = GALLERY.map((g, i) => `
    <button class="masonry__item" type="button" data-cat="${esc(g.cat)}" data-lightbox="gallery" data-index="${i}">
      <img src="${esc(g.img)}" alt="${esc(g.title)}" loading="lazy" decoding="async">
      <span class="masonry__cap">
        <strong>${esc(g.title)}</strong>
        <small>${esc(g.desc.slice(0, 62))}${g.desc.length > 62 ? '…' : ''}</small>
      </span>
    </button>
  `).join('');
}

function renderVideos() {
  const grid = $('#videoGrid');
  if (!grid) return;

  grid.innerHTML = VIDEOS.map((v, i) => `
    <button class="video-card" type="button" data-video="${i}">
      <span class="video-card__quote"><i class="bi bi-quote"></i></span>
      <span class="video-card__play"><i class="bi bi-play-fill"></i></span>
      <span class="video-card__meta">
        <strong>${esc(v.title)}</strong>
        <small>${esc(v.meta)}</small>
      </span>
    </button>
  `).join('');
}

function renderEvents() {
  const list = $('#eventsList');
  if (!list) return;

  list.innerHTML = EVENTS.map((e, i) => `
    <article class="event-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <div class="event-card__img">
        <img src="${esc(e.img)}" alt="${esc(e.title)}" loading="lazy" decoding="async">
        <span class="event-card__date">${esc(e.date)}</span>
      </div>
      <div class="event-card__body">
        <h3>${esc(e.title)}</h3>
        <p>${esc(e.desc)}</p>
      </div>
    </article>
  `).join('');
}

function renderAwareness() {
  const grid = $('#awarenessGrid');
  if (!grid) return;

  grid.innerHTML = AWARENESS.map((a, i) => `
    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${i * 80}">
      <button class="aware-card" type="button" data-lightbox="awareness" data-index="${i}">
        <div class="aware-card__img">
          <img src="${esc(a.img)}" alt="${esc(a.title)}" loading="lazy" decoding="async">
        </div>
        <div class="aware-card__body">
          <h3>${esc(a.title)}</h3>
          <p>${esc(a.desc)}</p>
        </div>
      </button>
    </div>
  `).join('');
}

function renderTestimonials() {
  const inner = $('#testimonialInner');
  const dots  = $('#testimonialDots');
  if (!inner) return;

  inner.innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="carousel-item${i === 0 ? ' active' : ''}">
      <figure class="tst">
        <i class="bi bi-quote tst__quote"></i>
        <div class="tst__stars">★★★★★</div>
        <blockquote class="tst__text">${esc(t.text)}</blockquote>
        <figcaption class="tst__who">
          <span class="tst__avatar">${esc(t.initial)}</span>
          <span>
            <strong>${esc(t.name)}</strong>
            <small>${esc(t.meta)}</small>
          </span>
        </figcaption>
      </figure>
    </div>
  `).join('');

  if (dots) {
    dots.innerHTML = TESTIMONIALS.map((_, i) => `
      <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="${i}"
              class="${i === 0 ? 'active' : ''}" aria-label="Testimonial ${i + 1}"></button>
    `).join('');
  }
}

/* ============================================================
   CERTIFICATE RAIL — arrow scrolling
   ============================================================ */
function initCertRail() {
  const track = $('#certRail');
  if (!track) return;

  $$('[data-rail]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = $('.cert-card', track);
      const step = card ? card.offsetWidth + 22 : 320;
      track.scrollBy({
        left: btn.dataset.rail === 'next' ? step : -step,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });
}

/* ============================================================
   GALLERY FILTER
   ============================================================ */
function initGalleryFilter() {
  const buttons = $$('.filter-btn');
  const items   = $$('.masonry__item');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.classList.toggle('is-hidden', !show);
      });
    });
  });
}

/* ============================================================
   LIGHTBOX — shared by gallery, certificates and awareness
   ============================================================ */
function initLightbox() {
  const modalEl = $('#lightboxModal');
  if (!modalEl) return;

  const modal = new bootstrap.Modal(modalEl);
  const img   = $('#lightboxImg');
  const title = $('#lightboxTitle');
  const desc  = $('#lightboxDesc');

  const SETS = { gallery: GALLERY, cert: CERTIFICATES, awareness: AWARENESS };
  let current = [];
  let index   = 0;

  function show(i) {
    if (!current.length) return;
    index = (i + current.length) % current.length;   // wrap around
    const item = current[index];
    img.src = item.img;
    img.alt = item.title;
    title.textContent = item.title;
    desc.textContent  = item.desc || item.meta || '';
  }

  // Delegate so dynamically rendered cards work without rebinding.
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-lightbox]');
    if (!trigger) return;
    current = SETS[trigger.dataset.lightbox] || [];
    show(parseInt(trigger.dataset.index, 10) || 0);
    modal.show();
  });

  $$('[data-lb]', modalEl).forEach(btn => {
    btn.addEventListener('click', () => show(index + (btn.dataset.lb === 'next' ? 1 : -1)));
  });

  // Arrow keys while the lightbox is open
  document.addEventListener('keydown', e => {
    if (!modalEl.classList.contains('show')) return;
    if (e.key === 'ArrowRight') show(index + 1);
    if (e.key === 'ArrowLeft')  show(index - 1);
  });
}

/* ============================================================
   VIDEO MODAL — loads the file only when opened
   ============================================================ */
function initVideoModal() {
  const modalEl = $('#videoModal');
  if (!modalEl) return;

  const modal = new bootstrap.Modal(modalEl);
  const video = $('#modalVideo');
  const title = $('#videoTitle');

  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-video]');
    if (!trigger) return;

    const item = VIDEOS[parseInt(trigger.dataset.video, 10)];
    if (!item) return;

    video.src = item.src;
    title.textContent = item.title;
    modal.show();
  });

  // Stop playback and release the file when the modal closes.
  modalEl.addEventListener('hidden.bs.modal', () => {
    video.pause();
    video.removeAttribute('src');
    video.load();
  });

  modalEl.addEventListener('shown.bs.modal', () => {
    const play = video.play();
    if (play && typeof play.catch === 'function') play.catch(() => { /* autoplay blocked — user can press play */ });
  });
}

/* ============================================================
   DOCUMENT MODAL (PDF)
   ============================================================ */
function initDocModal() {
  const modalEl = $('#docModal');
  if (!modalEl) return;

  const modal = new bootstrap.Modal(modalEl);
  const frame = $('#docFrame');

  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-doc]');
    if (!trigger) return;
    frame.src = trigger.dataset.doc;
    modal.show();
  });

  modalEl.addEventListener('hidden.bs.modal', () => { frame.src = ''; });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;

  const toggle = () => btn.classList.toggle('is-visible', window.scrollY > 500);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

/* ============================================================
   APPOINTMENT FORM
   Builds a WhatsApp message from the fields — no backend required,
   and nothing is stored anywhere.
   ============================================================ */
function initAppointmentForm() {
  const form = $('#appointmentForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      const firstInvalid = $(':invalid', form);
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const get = name => (form.elements[name]?.value || '').trim();

    const lines = [
      'Appointment request — Dr. Maneesh Kr. Srivastava',
      '',
      `Name: ${get('name')}`,
      `Phone: ${get('phone')}`
    ];

    if (get('email'))   lines.push(`Email: ${get('email')}`);
    lines.push(`Concern: ${get('concern')}`);
    lines.push(`Preferred session: ${get('slot')}`);
    if (get('message')) lines.push('', `Details: ${get('message')}`);

    const url = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');

    form.classList.remove('was-validated');
    form.reset();
  });
}

/* ============================================================
   LAZY IMAGE FADE-IN
   Images arrive at different speeds; fade each one in as it decodes
   so the grids don't pop.
   ============================================================ */
function initLazyBlur() {
  $$('img[loading="lazy"]').forEach(img => {
    if (img.complete) return;
    img.style.opacity = '0';
    img.style.transition = 'opacity .55s ease';
    const reveal = () => { img.style.opacity = '1'; };
    img.addEventListener('load', reveal, { once: true });
    img.addEventListener('error', reveal, { once: true });
  });
}
