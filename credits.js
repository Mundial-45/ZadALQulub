// Créditos y fuentes (enlace en el pie de página). Para añadir más créditos, basta con añadir un objeto a ZAD_CREDITS.
(function () {
  const ZAD_CREDITS = [
    {
      ar: 'أذكار الصباح والمساء والنوم والاستيقاظ، والرقية، والقنوت: المسجَّلة بصوت الشيخ قادر الكردي، وقد استُعملت بإذنه جزاه الله خيرًا.',
      es: 'Azkar de la mañana, de la tarde, de antes de dormir y de al despertar, la Ruqya y el Qunut: grabaciones con la voz del Sheij Qadir al-Kurdi, utilizadas con su permiso. Que Allah lo recompense.'
    },
    {
      ar: 'بعض تسجيلات الأدعية والأذكار: بصوت آلي.',
      es: 'Algunas grabaciones de súplicas y azkar: voz sintética.'
    },
    {
      ar: 'بعض الأذكار والأدعية بأصوات مختلفة مأخوذة من الإنترنت، ولم نتمكن من مراسلة أصحابها لطلب الإذن لعدم توفر معلومات التواصل معهم. نسأل الله أن يجزيهم خيرًا.',
      es: 'Algunos azkar y súplicas usan grabaciones de voces distintas tomadas de internet; no hemos podido contactar con sus autores para pedirles permiso por no disponer de sus datos. Que Allah los recompense.'
    },
    {
      ar: 'شرح آيات القرآن الكريم بالإسبانية: من شرح الشيخ عيسى غارسيا.',
      es: 'Explicación de los versículos del Corán en español: según la explicación del Sheij Isa García.'
    },
    {
      ar: 'ترجمة معاني القرآن الكريم إلى الإسبانية: ترجمة محمد عيسى غارسيا، من موسوعة القرآن الكريم (QuranEnc.com)، الإصدار 1.0.2.',
      es: 'Traducción de los significados del Corán al español: Muhammad Isa García, publicada en la Enciclopedia del Noble Corán (QuranEnc.com), versión 1.0.2.'
    },
    {
      ar: 'المعجم (معاني المصطلحات الإسلامية): مبني على موقع إسلام ويب، وموقع الشيخ ابن باز، والدرر السنية، وموقع الإسلام سؤال وجواب.',
      es: 'Glosario (términos islámicos): basado en IslamWeb (islamweb.net), la web del Sheij Ibn Baz (binbaz.org.sa), Al-Durar al-Saniyya (dorar.net) e IslamQA (islamqa.info).'
    },
    {
      ar: 'آداب ونصائح الأذكار والأدعية (الشاشة التي تظهر في بداية قسم الأذكار وقسم الأدعية): ملخَّص من فتاوى إسلام ويب وموقع الشيخ ابن باز وأقوال العلماء، ولكل بطاقة مصدرها.',
      es: 'Normas y consejos de los azkar y las súplicas (la pantalla del inicio de las secciones Azkar y Súplicas): resumen basado en fatwas de IslamWeb, del Sheij Ibn Baz y en palabras de ulemas; cada tarjeta indica su fuente.'
    },
    {
      ar: 'رحلة القلب: الآيات بالرسم العثماني من Quran API مع ترجمة الشيخ عيسى غارسيا، والأحاديث من صحيح البخاري وصحيح مسلم وسنن الترمذي. ترجمة الأحاديث والتأملات تلخيصٌ للمعنى.',
      es: 'Viaje del corazón: ayat en grafía uzmaní de Quran API con la traducción de Isa García; hadices de Bujari, Muslim y Tirmidhi. Las traducciones de los hadices y las reflexiones son un resumen del sentido.'
    },
    {
      ar: 'الخطوط: خط حفص للمصحف من مجمع الملك فهد لطباعة المصحف الشريف، وخطوط أميري وتجوال وإنتر.',
      es: 'Tipografías: KFGQPC Uthmanic Hafs del Complejo del Rey Fahd para la impresión del Corán, y las fuentes Amiri, Tajawal e Inter.'
    }
  ];
  const isEs = () => (typeof currentLang !== 'undefined' ? currentLang === 'es' : false);
  const TITLE = { ar: 'الشكر والمصادر', es: 'Créditos y fuentes' };

  function injectCss() {
    if (document.getElementById('zadCreditsCss')) return;
    const st = document.createElement('style'); st.id = 'zadCreditsCss';
    st.textContent =
      '.zad-credits-link{display:block;margin:-.15rem auto -.15rem !important;padding:.1rem .5rem;background:none;border:0;font:inherit;font-size:.8rem;font-weight:700;text-decoration:underline;color:#047857;cursor:pointer}' +
      '#homeView button.zad-credits-link{color:#047857 !important;background:transparent !important;box-shadow:none !important;text-shadow:none !important}' +
      'html.dark #homeView button.zad-credits-link{color:#6ee7b7 !important}' +
      'html.dark .zad-credits-link{color:#6ee7b7}' +
      '.zad-credits-overlay{position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:1rem}' +
      '.zad-credits-overlay[hidden]{display:none}' +
      '.zad-credits-box{background:#fff;color:#0f172a;border-radius:1rem;box-shadow:0 20px 50px rgba(0,0,0,.35);width:100%;max-width:22rem;max-height:80vh;overflow-y:auto;padding:.9rem 1rem}' +
      'html.dark .zad-credits-box{background:#1e293b;color:#f1f5f9}' +
      '.zad-credits-head{display:flex;align-items:center;justify-content:space-between;gap:.5rem;margin-bottom:.6rem}' +
      '.zad-credits-head h2{font-size:1rem;font-weight:700;margin:0;color:inherit}' +
      '.zad-credits-head button{background:none;border:0;font-size:1.5rem;line-height:1;padding:0 .35rem;color:inherit;cursor:pointer}' +
      '#creditsList{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.5rem}' +
      '#creditsList li{font-size:.85rem;line-height:1.6;padding:.5rem .7rem;border-radius:.7rem;background:#ecfdf5;border:1px solid #a7f3d0;color:#064e3b}' +
      'html.dark #creditsList li{background:#0f2b25;border-color:#065f46;color:#d1fae5}';
    document.head.appendChild(st);
  }
  function ensure() {
    injectCss();
    const grid = document.querySelector('#homeView .home-category-grid');
    const host = grid || document.querySelector('footer');
    if (!host || document.getElementById('creditsLink')) return;
    const a = document.createElement('button');
    a.type = 'button'; a.id = 'creditsLink';
    a.className = 'zad-credits-link';
    a.addEventListener('click', openCredits);
    if (grid) grid.insertAdjacentElement('afterend', a); else host.appendChild(a);
    const ov = document.createElement('div');
    ov.id = 'creditsOverlay';
    ov.className = 'zad-credits-overlay'; ov.hidden = true;
    ov.innerHTML = '<div role="dialog" aria-modal="true" aria-labelledby="creditsTitle" class="zad-credits-box">' +
      '<div class="zad-credits-head"><h2 id="creditsTitle"></h2><button type="button" id="creditsClose" aria-label="Cerrar / إغلاق">×</button></div>' +
      '<ul id="creditsList"></ul></div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) closeCredits(); });
    document.getElementById('creditsClose').addEventListener('click', closeCredits);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCredits(); });
    refresh();
  }
  function refresh() {
    const es = isEs();
    const a = document.getElementById('creditsLink'); if (a) a.textContent = es ? TITLE.es : TITLE.ar;
    const t = document.getElementById('creditsTitle'); if (t) t.textContent = es ? TITLE.es : TITLE.ar;
    const l = document.getElementById('creditsList');
    if (l) {
      l.setAttribute('dir', es ? 'ltr' : 'rtl');
      l.parentElement.style.textAlign = es ? 'left' : 'right';
      l.innerHTML = ZAD_CREDITS.map(c => '<li></li>').join('');
      [...l.children].forEach((li, i) => { li.textContent = es ? ZAD_CREDITS[i].es : ZAD_CREDITS[i].ar; });
    }
  }
  function openCredits() { refresh(); const o = document.getElementById('creditsOverlay'); if (o) { o.hidden = false; document.getElementById('creditsClose').focus(); } }
  function closeCredits() { const o = document.getElementById('creditsOverlay'); if (o) o.hidden = true; }
  window.zadCreditsRefresh = refresh;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensure); else ensure();
})();
