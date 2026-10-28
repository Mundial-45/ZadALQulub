// app.js - Controlador principal de la aplicación / زَادُ الْقُلُوبِ

let currentLang = safeGetStorage('app_lang') || 'ar';

const uiTexts = {
  ar: {
    headerTitle: 'زَادُ الْقُلُوبِ',
    headerSubtitle: 'جامع الأذكار والأدعية والمناجاة',
    homeWelcome: 'اختر القسم للبدء:',
    btnAzkarTitle: 'الأذكار اليومية',
    btnAzkarSub: 'الصباح، المساء، النوم، الاستيقاظ، أذكار الصلاة',
    btnAdyaTitle: 'الأدعية المأثورة',
    btnAdyaSub: 'أدعية الرزق، الشفاء، الفرج، الحفظ، وقضاء الحوائج',
    btnTasbeehTitle: 'المسبحة الإلكترونية',
    btnTasbeehSub: 'عداد إلكتروني للتسبيح والاستغفار',
    btnFavTitle: 'المفضلة',
    btnFavSub: 'الأذكار والأدعية المحفوظة لديك',
    back: 'رجوع',
    home: 'الرئيسية',
    resetAll: 'إعادة الكل',
    reset: 'إعادة ضبط',
    searchPlaceholder: 'ابحث عن ذكر أو دعاء...',
    countLabel: 'التكرار',
    doneLabel: 'تم المتبقي',
    progressLabel: 'نسبة الإنجاز الكلية',
    arabicOriginal: 'النص الأصلي باللغة العربية:',
    azkarSectionTitle: 'الأذكار اليومية',
    adyaSectionTitle: 'الأدعية المأثورة',
    noFavs: 'لا توجد أذكار مضافة للمفضلة حالياً.',
    removeFav: 'إزالة من المفضلة',
    prevBtn: 'السابق',
    nextBtn: 'التالي',
    itemProgress: 'الذكر {current} من {total}',
    completedGroup: '🎉 تم إكمال جميع أذكار هذا القسم',
    pressToCount: 'اضغط للتكرار',
    completedItem: 'تم الإكمال ✓',
    btnMunajatTitle: 'مناجاة وتضرعات',
    btnMunajatSub: 'مُناجاة، ثَناء، اسْتِغْفار وشَوْقٌ لِلَّه',
    munajatSectionTitle: 'مناجاة وتضرعات',
    btnQuranTitle: 'القرآن الكريم (برواية ورش)',
    btnQuranSub: 'المصحف الشريف كاملًا برواية ورش عن نافع',
    quranHeaderTitle: 'القرآن الكريم (برواية ورش)',
    startReadingBtn: 'بدء القراءة',
    indexBtnText: 'فهرس القرآن (ورش) 📖',
    jumpBtnText: 'انتقال',
    nextPageBtn: 'الصفحة التالية ➔',
    prevPageBtn: '⬅ الصفحة السابقة',
    pageLabelText: 'صفحة',
    pageOfText: 'من 638',
    hizbLabelText: 'الحزب',
    swipeHintText: 'اسحب لليمين للصفحة التالية ➔',
    surahSearchPlaceholder: 'ابحث عن سورة بالاسم أو الرقم...',
    tabSurahsText: '1. السور',
    tabSurahsSub: '114 سورة',
    tabAhzabText: '2. الأحزاب',
    tabAhzabSub: '60 حزب',
    tabContinueText: '3. متابعة القراءة',
    btnRuqyahTitle: 'الرقية الشرعية',
    btnRuqyahSub: 'رقية الشفاء، العين، الحسد والمس',
    ruqyahSectionTitle: 'الرقية الشرعية'
  },
  es: {
    headerTitle: 'Zad Al-Qulub',
    headerSubtitle: 'Provisión de los Corazones - Invocaciones y Súplicas',
    homeWelcome: 'Seleccione una categoría:',
    btnAzkarTitle: 'Azkar Diarios',
    btnAzkarSub: 'Mañana, tarde, dormir, despertar y oración',
    btnAdyaTitle: 'Súplicas (Du\'as)',
    btnAdyaSub: 'Sustento, curación, alivio y protección',
    btnTasbeehTitle: 'Rosario Electrónico (Tasbeeh)',
    btnTasbeehSub: 'Contador digital para el recuerdo de Allah',
    btnFavTitle: 'Favoritos',
    btnFavSub: 'Invocaciones guardadas',
    back: 'Volver',
    home: 'Inicio',
    resetAll: 'Reiniciar todo',
    reset: 'Reiniciar',
    searchPlaceholder: 'Buscar suplicación o dhikr...',
    countLabel: 'Repetición',
    doneLabel: 'Completado',
    progressLabel: 'Progreso total',
    arabicOriginal: 'Texto original en árabe:',
    azkarSectionTitle: 'Azkar Diarios',
    adyaSectionTitle: 'Súplicas Seleccionadas',
    noFavs: 'No hay invocaciones guardadas en favoritos.',
    removeFav: 'Eliminar de favoritos',
    prevBtn: 'Anterior',
    nextBtn: 'Siguiente',
    itemProgress: 'Invocación {current} de {total}',
    completedGroup: '¡Has completado todas las invocaciones! 🎉',
    pressToCount: 'Toca para contar',
    completedItem: 'Completado ✓',
    btnMunajatTitle: 'Invocaciones y Súplicas',
    btnMunajatSub: 'Alabanza, arrepentimiento y anhelo intimo de Allah',
    munajatSectionTitle: 'Invocaciones y Súplicas Íntimas',
    btnQuranTitle: 'El Sagrado Corán (Lectura Warsh)',
    btnQuranSub: 'Lectura completa del Corán según la recitación Warsh',
    quranHeaderTitle: 'El Sagrado Corán (Warsh)',
    startReadingBtn: 'Empezar lectura',
    indexBtnText: 'Índice del Corán 📖',
    jumpBtnText: 'Ir',
    nextPageBtn: 'Página siguiente ➔',
    prevPageBtn: '⬅ Página anterior',
    pageLabelText: 'Página',
    pageOfText: 'de 638',
    hizbLabelText: 'Hizb',
    swipeHintText: 'Desliza a la derecha para página siguiente ➔',
    surahSearchPlaceholder: 'Buscar sura por nombre o número...',
    tabSurahsText: '1. Suras',
    tabSurahsSub: '114 suras',
    tabAhzabText: '2. Ahzab',
    tabAhzabSub: '60 hizb',
    tabContinueText: '3. Continuar leyendo',
    btnRuqyahTitle: 'Ruqyah Shariyah',
    btnRuqyahSub: 'Curación, protección contra envidia, ojo y mal',
    ruqyahSectionTitle: 'Ruqyah Shariyah'
  }
};

let currentSection = null;
let currentGroup = null;
let favorites = [];
let fontSize = 18;
let currentAudio = null;

const STORAGE_KEY = 'azkar_adya_progress_v5';
const FAV_KEY = 'azkar_favorites_v5';
const THEME_KEY = 'azkar_theme_v5';

function safeGetStorage(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSetStorage(key, val) {
  try { localStorage.setItem(key, val); } catch (e) {}
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'es' : 'ar';
  safeSetStorage('app_lang', currentLang);
  applyLanguageUI();
}

function applyLanguageUI() {
  const isEs = currentLang === 'es';
  const t = uiTexts[currentLang];

  document.documentElement.dir = isEs ? 'ltr' : 'rtl';
  document.documentElement.lang = currentLang;

  const infoBtn = document.getElementById('transliterationInfoBtn');
  if (infoBtn) {
    infoBtn.style.setProperty('display', isEs ? 'inline-flex' : 'none', 'important');
    if (isEs) infoBtn.classList.remove('hidden');
    else infoBtn.classList.add('hidden');
  }

  document.getElementById('langBtnText').innerText = isEs ? 'AR' : 'ES';
  document.getElementById('headerTitle').innerText = t.headerTitle;
  document.getElementById('headerSubtitle').innerText = t.headerSubtitle;
  document.getElementById('homeWelcome').innerText = t.homeWelcome;

  document.getElementById('btnAzkarTitle').innerText = t.btnAzkarTitle;
  document.getElementById('btnAzkarSub').innerText = t.btnAzkarSub;
  document.getElementById('btnAdyaTitle').innerText = t.btnAdyaTitle;
  document.getElementById('btnAdyaSub').innerText = t.btnAdyaSub;
  document.getElementById('btnTasbeehTitle').innerText = t.btnTasbeehTitle;
  document.getElementById('btnTasbeehSub').innerText = t.btnTasbeehSub;
  document.getElementById('btnFavTitle').innerText = t.btnFavTitle;
  document.getElementById('btnFavSub').innerText = t.btnFavSub;

  const quranTitleEl = document.getElementById('btnQuranTitle');
  if (quranTitleEl && t.btnQuranTitle) quranTitleEl.innerText = t.btnQuranTitle;
  const quranSubEl = document.getElementById('btnQuranSub');
  if (quranSubEl && t.btnQuranSub) quranSubEl.innerText = t.btnQuranSub;
  const quranHeaderEl = document.getElementById('quranIndexTitle');
  if (quranHeaderEl && t.quranHeaderTitle) quranHeaderEl.innerText = t.quranHeaderTitle;

  const startReadingBtn = document.getElementById('startReadingBtn');
  if (startReadingBtn && t.startReadingBtn) startReadingBtn.innerText = t.startReadingBtn;
  const indexBtnText = document.getElementById('indexBtnText');
  if (indexBtnText && t.indexBtnText) indexBtnText.innerText = t.indexBtnText;
  const jumpBtnText = document.getElementById('jumpBtnText');
  if (jumpBtnText && t.jumpBtnText) jumpBtnText.innerText = t.jumpBtnText;
  const nextPageBtn = document.getElementById('nextBtnText');
  if (nextPageBtn && t.nextPageBtn) nextPageBtn.innerText = t.nextPageBtn;
  const prevPageBtn = document.getElementById('prevBtnText');
  if (prevPageBtn && t.prevPageBtn) prevPageBtn.innerText = t.prevPageBtn;
  const swipeHint = document.getElementById('swipeHint');
  if (swipeHint && t.swipeHintText) swipeHint.innerText = t.swipeHintText;
  const quranSearchInput = document.getElementById('quranSearchInput');
  if (quranSearchInput && t.surahSearchPlaceholder) quranSearchInput.placeholder = t.surahSearchPlaceholder;
  const pageLabelText = document.getElementById('pageLabelText');
  if (pageLabelText && t.pageLabelText) pageLabelText.innerText = t.pageLabelText;
  const pageOfText = document.getElementById('pageOfText');
  if (pageOfText && t.pageOfText) pageOfText.innerText = t.pageOfText;

  const tabSurahsText = document.getElementById('tabSurahsText');
  if (tabSurahsText && t.tabSurahsText) tabSurahsText.innerText = t.tabSurahsText;
  const tabSurahsSub = document.getElementById('tabSurahsSub');
  if (tabSurahsSub && t.tabSurahsSub) tabSurahsSub.innerText = t.tabSurahsSub;
  const tabAhzabText = document.getElementById('tabAhzabText');
  if (tabAhzabText && t.tabAhzabText) tabAhzabText.innerText = t.tabAhzabText;
  const tabAhzabSub = document.getElementById('tabAhzabSub');
  if (tabAhzabSub && t.tabAhzabSub) tabAhzabSub.innerText = t.tabAhzabSub;
  const tabContinueText = document.getElementById('tabContinueText');
  if (tabContinueText && t.tabContinueText) tabContinueText.innerText = t.tabContinueText;

  if (typeof updateContinueReadingCard === 'function') updateContinueReadingCard();

  const munajatTitleEl = document.getElementById('btnMunajatTitle');
  if (munajatTitleEl) munajatTitleEl.innerText = t.btnMunajatTitle;
  const munajatSubEl = document.getElementById('btnMunajatSub');
  if (munajatSubEl) munajatSubEl.innerText = t.btnMunajatSub;

  document.getElementById('searchInput').placeholder = t.searchPlaceholder;
  document.getElementById('resetAllBtn').innerText = t.resetAll;
  document.getElementById('progressTextLabel').innerText = t.progressLabel;
  document.getElementById('tasbeehHeaderTitle').innerText = t.btnTasbeehTitle;
  document.getElementById('resetTasbeehBtn').innerText = t.resetAll;
  document.getElementById('favHeaderTitle').innerText = t.btnFavTitle;
  document.getElementById('footerText').innerText = isEs ? 'Zad Al-Qulub © 2026' : 'زَادُ الْقُلُوبِ - جامع الأذكار والأدعية والمناجاة © 2026';

  document.querySelectorAll('.btn-back-label').forEach(el => el.innerText = t.back);

  if (currentGroup) {
    document.getElementById('itemGroupTitle').innerText = isEs ? currentGroup.titleEs : currentGroup.titleAr;
    renderGroupItems();
  }
  if (!document.getElementById('categoryListView').classList.contains('hidden')) {
    document.getElementById('sectionTitle').innerText = currentSection === 'azkar' ? t.azkarSectionTitle : t.adyaSectionTitle;
    renderButtonsGrid();
  }
  if (!document.getElementById('tasbeehView').classList.contains('hidden') && typeof renderTasbeehGrid === 'function') renderTasbeehGrid();
  if (!document.getElementById('favoritesView').classList.contains('hidden')) showFavorites();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  setTimeout(() => { toast.classList.add('opacity-0', 'pointer-events-none'); }, 2000);
}

function toggleDarkMode() {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    safeSetStorage(THEME_KEY, 'light');
  } else {
    html.classList.add('dark');
    safeSetStorage(THEME_KEY, 'dark');
  }
}

function loadSavedTheme() {
  const savedTheme = safeGetStorage(THEME_KEY);
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
}

function changeFontSize(delta) {
  fontSize = Math.min(Math.max(14, fontSize + delta * 2), 28);
  document.documentElement.style.setProperty('--app-font-size', `${fontSize}px`);
}

function playAudio(audioUrl) {
  if (!audioUrl) return;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  showToast(currentLang === 'es' ? 'Reproduciendo audio...' : 'جاري تشغيل التلاوة...');
  currentAudio = new Audio(audioUrl);
  currentAudio.play().catch(err => {
    showToast(currentLang === 'es' ? 'Error al reproducir audio' : 'تعذر تشغيل الصوت');
  });
}

function escapeJsStr(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\r?\n/g, '\\n');
}

function formatTextWithNewlines(str) {
  if (!str) return '';
  return str.replace(/\\n/g, '\n');
}

function copyText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(currentLang === 'es' ? 'Copiado al portapapeles' : 'تم نسخ النص بنجاح'));
  }
}

function shareText(text) {
  if (navigator.share) navigator.share({ title: 'Misbaha', text: text }).catch(() => {});
  else copyText(text);
}

function loadFavorites() {
  const saved = safeGetStorage(FAV_KEY);
  favorites = saved ? JSON.parse(saved) : [];
}

function toggleFavorite(text) {
  const index = favorites.indexOf(text);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast(currentLang === 'es' ? 'Eliminado de favoritos' : 'تم الإزالة من المفضلة');
  } else {
    favorites.push(text);
    showToast(currentLang === 'es' ? 'Añadido a favoritos' : 'تم الإضافة إلى المفضلة');
  }
  safeSetStorage(FAV_KEY, JSON.stringify(favorites));
  if (currentGroup) renderGroupItems();
}

function hideAllViews() {
  ['homeView', 'categoryListView', 'detailView', 'tasbeehView', 'favoritesView', 'quranView', 'quranSurahsView', 'quranAhzabView', 'quranReaderView'].forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });
}

function goHome(skipPushState = false) {
  hideAllViews();
  document.getElementById('homeView')?.classList.remove('hidden');
  currentSection = null;
  currentGroup = null;
  if (!skipPushState && window.history && window.history.pushState) {
    try {
      window.history.pushState({ view: 'home' }, '', '#home');
    } catch (e) {}
  }
}

function getSectionModule(sec) {
  return (window.ZadSectionModules && window.ZadSectionModules[sec]) || null;
}

function findSectionGroup(groupId) {
  const modules = Object.values(window.ZadSectionModules || {});
  for (const module of modules) {
    const group = module.findGroup(groupId);
    if (group) return { group: group, section: module.id, module: module };
  }
  return null;
}

function showSection(sec, skipPushState = false) {
  if (!sec) sec = 'azkar';
  currentSection = sec;
  hideAllViews();
  document.getElementById('categoryListView')?.classList.remove('hidden');
  const t = uiTexts[currentLang];
  const titleEl = document.getElementById('sectionTitle');
  if (titleEl) {
    const sectionModule = getSectionModule(sec);
    titleEl.innerText = sectionModule ? sectionModule.getTitle(t) : (t.azkarSectionTitle || '');
  }
  const searchEl = document.getElementById('searchInput');
  if (searchEl) searchEl.value = '';
  renderButtonsGrid();
  if (!skipPushState && window.history && window.history.pushState) {
    try {
      window.history.pushState({ view: 'section', sec: sec }, '', '#section-' + sec);
    } catch (e) {}
  }
}

function openAzkarSection() { showSection('azkar'); }
function openAdyaSection() { showSection('adya'); }
function openMunajatSection() { showSection('munajat'); }
function openRuqyaSection() { showSection('ruqyah'); }

function goBackToSection() {
  if (window.history && window.history.length > 1) {
    window.history.back();
  } else {
    hideAllViews();
    if (currentSection) {
      showSection(currentSection, true);
    } else {
      goHome(true);
    }
  }
}

function filterButtons() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const grid = document.getElementById('buttonsGrid');
  if (!grid) return;
  const buttons = grid.querySelectorAll('button');
  buttons.forEach(btn => {
    const text = btn.innerText.toLowerCase();
    btn.style.display = text.includes(query) ? 'flex' : 'none';
  });
}

function renderButtonsGrid() {
  const grid = document.getElementById('buttonsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const sectionModule = getSectionModule(currentSection);
  const data = sectionModule ? sectionModule.getGroups() : [];
  const isEs = currentLang === 'es';

  const categoryGradients = [
    { bg: 'bg-gradient-to-br from-emerald-600 to-teal-800 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-emerald-100', arrow: 'text-emerald-200' },
    { bg: 'bg-gradient-to-br from-sky-500 to-teal-700 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-sky-100', arrow: 'text-sky-200' },
    { bg: 'bg-gradient-to-br from-teal-600 to-emerald-800 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-teal-100', arrow: 'text-teal-200' },
    { bg: 'bg-gradient-to-br from-cyan-600 to-sky-800 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-cyan-100', arrow: 'text-cyan-200' },
    { bg: 'bg-gradient-to-br from-emerald-700 to-cyan-900 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-emerald-100', arrow: 'text-emerald-200' },
    { bg: 'bg-gradient-to-br from-teal-500 to-sky-700 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-teal-100', arrow: 'text-teal-200' }
  ];

  const specialGradients = {
    sabah: { bg: 'bg-gradient-to-br from-emerald-600 to-teal-800 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-emerald-100', arrow: 'text-emerald-200' },
    masaa: { bg: 'bg-gradient-to-br from-sky-600 to-teal-800 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-sky-100', arrow: 'text-sky-200' },
    nawm: { bg: 'bg-gradient-to-br from-teal-700 to-cyan-900 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-teal-100', arrow: 'text-teal-200' },
    istiyqadh: { bg: 'bg-gradient-to-br from-cyan-600 to-emerald-700 text-white', iconBg: 'bg-white/20 text-white', textSec: 'text-cyan-100', arrow: 'text-cyan-200' }
  };

  const catInlineStyles = [
    'background: linear-gradient(135deg, #059669, #115e59) !important; color: #ffffff !important;',
    'background: linear-gradient(135deg, #0284c7, #0f766e) !important; color: #ffffff !important;',
    'background: linear-gradient(135deg, #0d9488, #065f46) !important; color: #ffffff !important;',
    'background: linear-gradient(135deg, #0891b2, #0369a1) !important; color: #ffffff !important;',
    'background: linear-gradient(135deg, #047857, #164e63) !important; color: #ffffff !important;',
    'background: linear-gradient(135deg, #14b8a6, #0369a1) !important; color: #ffffff !important;'
  ];

  data.forEach((group, index) => {
    const title = isEs ? (group.titleEs || group.titleAr) : (group.titleAr || group.titleEs);
    if (!title) return;
    const count = group.items ? group.items.length : 0;
    const style = specialGradients[group.id] || categoryGradients[index % categoryGradients.length];
    const inlineStyle = catInlineStyles[index % catInlineStyles.length];

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = () => openGroup(group.id);
    btn.className = `p-3.5 sm:p-5 ${style.bg} rounded-2xl shadow-md hover:shadow-xl transition transform active:scale-95 flex justify-between items-center cursor-pointer text-right min-w-0 border border-white/10`;
    btn.style.cssText = inlineStyle;
    btn.innerHTML = `
      <div class="flex items-center space-x-2.5 sm:space-x-3 space-x-reverse pointer-events-none min-w-0 flex-1">
        <div class="p-2.5 sm:p-3 ${style.iconBg} rounded-xl flex-shrink-0">
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        </div>
        <div class="min-w-0 flex-1">
          <h3 class="font-bold text-white text-sm sm:text-base leading-snug">${title}</h3>
          <p class="text-xs ${style.textSec} mt-1">${count} ${isEs ? 'invocaciones' : 'أذكار/أدعية'}</p>
        </div>
      </div>
      <span class="${style.arrow} font-bold text-sm sm:text-lg pointer-events-none mr-1 flex-shrink-0">${isEs ? '→' : '←'}</span>
    `;
    grid.appendChild(btn);
  });
}

function openGroup(groupId, skipPushState = false) {
  if (!groupId) return;
  const match = findSectionGroup(groupId);
  if (!match) return;
  currentGroup = match.group;
  currentSection = match.section;

  hideAllViews();
  document.getElementById('detailView')?.classList.remove('hidden');

  const isEs = currentLang === 'es';
  const groupTitle = isEs ? (currentGroup.titleEs || currentGroup.titleAr) : (currentGroup.titleAr || currentGroup.titleEs);
  const titleEl = document.getElementById('itemGroupTitle');
  if (titleEl) titleEl.innerText = groupTitle || '';

  renderGroupItems();

  if (!skipPushState && window.history && window.history.pushState) {
    try {
      window.history.pushState({ view: 'detail', sec: currentSection, groupId: groupId }, '', '#group-' + groupId);
    } catch (e) {}
  }
}

function getSavedCount(groupId, itemIndex, defaultCount) {
  const progress = JSON.parse(safeGetStorage(STORAGE_KEY) || '{}');
  if (progress[groupId] && progress[groupId][itemIndex] !== undefined) {
    return progress[groupId][itemIndex];
  }
  return defaultCount;
}

function setSavedCount(groupId, itemIndex, count) {
  const progress = JSON.parse(safeGetStorage(STORAGE_KEY) || '{}');
  if (!progress[groupId]) progress[groupId] = {};
  progress[groupId][itemIndex] = count;
  safeSetStorage(STORAGE_KEY, JSON.stringify(progress));
}

function resetGroupProgress(groupId) {
  const progress = JSON.parse(safeGetStorage(STORAGE_KEY) || '{}');
  delete progress[groupId];
  safeSetStorage(STORAGE_KEY, JSON.stringify(progress));
}

function decrementCounter(index) {
  if (!currentGroup || !currentGroup.items[index]) return;
  const item = currentGroup.items[index];
  let currentCount = getSavedCount(currentGroup.id, index, item.count);

  if (currentCount > 0) {
    currentCount--;
    setSavedCount(currentGroup.id, index, currentCount);
    renderGroupItems();

    if (currentCount === 0) {
      const nextIndex = index + 1;
      if (nextIndex < currentGroup.items.length) {
        setTimeout(() => {
          const nextElem = document.getElementById(`zikr-card-${nextIndex}`);
          if (nextElem) {
            nextElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 250);
      } else {
        showToast(uiTexts[currentLang].completedGroup);
      }
    }
  }
}

function resetSingleItem(index) {
  if (currentGroup && currentGroup.items[index]) {
    setSavedCount(currentGroup.id, index, currentGroup.items[index].count);
    renderGroupItems();
    showToast(currentLang === 'es' ? 'Contador reiniciado' : 'تم إعادة ضبط الذكر الحالي');
  }
}

function resetAllInGroup() {
  if (currentGroup) {
    resetGroupProgress(currentGroup.id);
    renderGroupItems();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(currentLang === 'es' ? 'Se han reiniciado todos los contadores' : 'تم إعادة تصفير كافة أذكار المجموعة');
  }
}

const EDITOR_REPO = 'Mundial-45/ZadALQulub';
const EDITOR_BRANCH = 'main';
const EDITOR_FILES = { azkar: 'azkar.js', adya: 'adya.js', ruqyah: 'ruqya.js', munajat: 'munajat.js' };
let itemEditorState = null;
let githubEditToken = '';

function openItemEditor(index) {
  if (!currentGroup || !currentGroup.items || !currentGroup.items[index]) return;
  const filePath = EDITOR_FILES[currentSection];
  if (!filePath) return showToast(currentLang === 'es' ? 'Esta sección no admite edición.' : 'لا يمكن تعديل هذا القسم.');
  itemEditorState = { index: index, groupId: currentGroup.id, section: currentSection, filePath: filePath, originalItem: JSON.parse(JSON.stringify(currentGroup.items[index])) };
  const modal = document.getElementById('itemEditorModal'), fields = document.getElementById('itemEditorFields');
  if (!modal || !fields) return;
  document.getElementById('itemEditorTitle').textContent = (currentLang === 'es' ? 'Editar elemento ' : 'تعديل العنصر ') + (index + 1);
  setItemEditorStatus(currentLang === 'es' ? 'Los cambios se guardarán en ' + filePath + ' de la rama main.' : 'سيُحفَظ التعديل في الملف ' + filePath + ' على الفرع main.', false);
  fields.replaceChildren();
  Object.keys(itemEditorState.originalItem).forEach(function (key) {
    const value = itemEditorState.originalItem[key], wrap = document.createElement('div'), label = document.createElement('label');
    wrap.className = 'space-y-1.5'; label.className = 'block text-sm font-bold text-slate-700 dark:text-slate-200'; label.textContent = key;
    const kind = value === null ? 'json' : Array.isArray(value) || typeof value === 'object' ? 'json' : typeof value;
    let control;
    if (kind === 'boolean') {
      control = document.createElement('input'); control.type = 'checkbox'; control.checked = value; control.className = 'h-5 w-5 accent-emerald-600';
    } else if (kind === 'number') {
      control = document.createElement('input'); control.type = 'number'; control.step = 'any'; control.value = String(value);
      control.className = 'w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-3';
    } else {
      control = document.createElement('textarea'); control.rows = kind === 'string' ? (key === 'text' || key.toLowerCase().includes('explanation') || key === 'latin' ? 5 : 2) : 4;
      control.value = kind === 'string' ? value : JSON.stringify(value, null, 2);
      control.className = 'w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-3 text-sm'; control.spellcheck = false;
    }
    control.dataset.editorKey = key; control.dataset.editorKind = kind; control.id = 'item-editor-field-' + key; label.htmlFor = control.id;
    wrap.appendChild(label); wrap.appendChild(control);
    if (kind === 'json') {
      const hint = document.createElement('p'); hint.className = 'text-xs text-slate-500';
      hint.textContent = currentLang === 'es' ? 'JSON válido; conserva corchetes y comillas.' : 'أدخل JSON صحيحًا مع الأقواس وعلامات الاقتباس.';
      wrap.appendChild(hint);
    }
    fields.appendChild(wrap);
  });
  const tokenField = document.getElementById('githubEditToken'); if (tokenField) tokenField.value = githubEditToken;
  modal.classList.remove('hidden'); document.body.classList.add('overflow-hidden');
}

function closeItemEditor() {
  const modal = document.getElementById('itemEditorModal'); if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden'); itemEditorState = null;
}

function setItemEditorStatus(message, isError) {
  const status = document.getElementById('itemEditorStatus'); if (!status) return;
  status.textContent = message;
  status.className = 'text-sm rounded-xl p-3 ' + (isError ? 'bg-rose-50 text-rose-800 dark:bg-rose-950 dark:text-rose-200' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200');
}

function buildEditedItem() {
  if (!itemEditorState) throw new Error('No hay ningún elemento seleccionado.');
  const updated = JSON.parse(JSON.stringify(itemEditorState.originalItem));
  document.querySelectorAll('#itemEditorFields [data-editor-key]').forEach(function (control) {
    const key = control.dataset.editorKey, kind = control.dataset.editorKind;
    if (kind === 'string') updated[key] = control.value;
    else if (kind === 'number') {
      if (control.value.trim() === '' || !Number.isFinite(Number(control.value))) throw new Error('Valor numérico inválido en ' + key);
      updated[key] = Number(control.value);
    } else if (kind === 'boolean') updated[key] = control.checked;
    else {
      try { updated[key] = JSON.parse(control.value); } catch (error) { throw new Error('JSON inválido en la propiedad ' + key); }
    }
  });
  return updated;
}

function scanEditorObjectRanges(source) {
  const ranges = [], stack = [];
  let quote = '', escaped = false, lineComment = false, blockComment = false;
  for (let i = 0; i < source.length; i++) {
    const ch = source[i], next = source[i + 1];
    if (lineComment) { if (ch === '\n') lineComment = false; continue; }
    if (blockComment) { if (ch === '*' && next === '/') { blockComment = false; i++; } continue; }
    if (quote) {
      if (escaped) { escaped = false; continue; }
      if (ch === '\\') { escaped = true; continue; }
      if (ch === quote) quote = '';
      continue;
    }
    if (ch === '/' && next === '/') { lineComment = true; i++; continue; }
    if (ch === '/' && next === '*') { blockComment = true; i++; continue; }
    if (ch === '"' || ch === "'" || ch.charCodeAt(0) === 96) { quote = ch; continue; }
    if (ch === '{') stack.push(i);
    else if (ch === '}' && stack.length) ranges.push({ start: stack.pop(), end: i + 1 });
  }
  return ranges.sort(function (a, b) { return a.start - b.start || (a.end - a.start) - (b.end - b.start); });
}

function readEditorSourceString(literal) {
  try {
    if (literal[0] === '"') return JSON.parse(literal);
    return literal.slice(1, -1).replace(/\\\\/g, '\\').replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t');
  } catch (error) { return null; }
}

function getEditorObjectText(objectSource) {
  const match = objectSource.match(/["']?text["']?\s*:\s*("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/s);
  return match ? readEditorSourceString(match[1]) : null;
}

function replaceEditorItemSource(source, groupId, itemIndex, originalItem, updatedItem) {
  const ranges = scanEditorObjectRanges(source);
  const groupCandidates = ranges.filter(function (range) {
    const snippet = source.slice(range.start, range.end);
    const idMatch = snippet.match(/["']?id["']?\s*:\s*("(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*')/s);
    return !!(idMatch && readEditorSourceString(idMatch[1]) === groupId && /["']?items["']?\s*:/.test(snippet));
  }).sort(function (a, b) { return (a.end - a.start) - (b.end - b.start); });
  if (!groupCandidates.length) throw new Error('No se encontró la lista de elementos del grupo.');
  const groupRange = groupCandidates[0];
  const matching = ranges.filter(function (range) {
    return range.start >= groupRange.start && range.end <= groupRange.end && getEditorObjectText(source.slice(range.start, range.end)) === originalItem.text;
  });
  const minimal = matching.filter(function (range) {
    return !matching.some(function (other) { return other.start > range.start && other.end < range.end; });
  }).sort(function (a, b) { return a.start - b.start; });
  const occurrence = currentGroup.items.slice(0, itemIndex).filter(function (item) { return item && item.text === originalItem.text; }).length;
  const target = minimal[occurrence];
  if (!target) throw new Error('No se pudo localizar con seguridad el elemento original. No se guardó ningún cambio.');
  const indentStart = source.lastIndexOf('\n', target.start - 1) + 1, indent = source.slice(indentStart, target.start).match(/^\s*/)[0];
  const replacement = JSON.stringify(updatedItem, null, 2).split('\n').map(function (line, index) { return index === 0 ? line : indent + line; }).join('\n');
  return source.slice(0, target.start) + replacement + source.slice(target.end);
}

function decodeEditorBase64(value) {
  const binary = atob(value.replace(/\s/g, '')), bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder('utf-8').decode(bytes);
}

function encodeEditorBase64(value) {
  const bytes = new TextEncoder().encode(value); let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode.apply(null, bytes.subarray(i, Math.min(i + 0x8000, bytes.length)));
  return btoa(binary);
}

async function saveItemToGitHub(event) {
  if (event) event.preventDefault();
  if (!itemEditorState) return;
  const tokenInput = document.getElementById('githubEditToken'), token = tokenInput ? tokenInput.value.trim() : '';
  if (!token) {
    setItemEditorStatus(currentLang === 'es' ? 'Introduce un token fine-grained de GitHub con permiso Contents: Read and write para este repositorio.' : 'أدخل رمز GitHub محدود الصلاحيات مع Contents: Read and write لهذا المستودع.', true);
    return;
  }
  const button = document.getElementById('itemEditorSaveButton');
  if (button) { button.disabled = true; button.textContent = currentLang === 'es' ? 'Guardando…' : 'جارٍ الحفظ…'; }
  try {
    const updatedItem = buildEditedItem(), apiUrl = 'https://api.github.com/repos/' + EDITOR_REPO + '/contents/' + itemEditorState.filePath;
    const headers = { 'Accept': 'application/vnd.github+json', 'Authorization': 'Bearer ' + token, 'X-GitHub-Api-Version': '2022-11-28' };
    setItemEditorStatus(currentLang === 'es' ? 'Leyendo el archivo original de GitHub…' : 'جارٍ قراءة الملف original de GitHub…', false);
    const readResponse = await fetch(apiUrl + '?ref=' + encodeURIComponent(EDITOR_BRANCH), { headers: headers }), readData = await readResponse.json();
    if (!readResponse.ok) throw new Error(readData.message || ('Error HTTP ' + readResponse.status + ' al leer el archivo.'));
    const updatedSource = replaceEditorItemSource(decodeEditorBase64(readData.content || ''), itemEditorState.groupId, itemEditorState.index, itemEditorState.originalItem, updatedItem);
    setItemEditorStatus(currentLang === 'es' ? 'Guardando el cambio en la rama main…' : 'جارٍ حفظ التعديل في الفرع main…', false);
    const writeResponse = await fetch(apiUrl, {
      method: 'PUT', headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
      body: JSON.stringify({ message: 'Editar elemento ' + itemEditorState.groupId + ' #' + (itemEditorState.index + 1), content: encodeEditorBase64(updatedSource), sha: readData.sha, branch: EDITOR_BRANCH })
    });
    const writeData = await writeResponse.json();
    if (!writeResponse.ok) throw new Error(writeData.message || ('Error HTTP ' + writeResponse.status + ' al guardar.'));
    githubEditToken = token; currentGroup.items[itemEditorState.index] = updatedItem;
    closeItemEditor(); renderGroupItems();
    showToast(currentLang === 'es' ? 'Guardado en GitHub. Pages puede tardar en actualizarse.' : 'تم الحفظ في GitHub. قد يستغرق تحديث الموقع بعض الوقت.');
  } catch (error) {
    setItemEditorStatus((currentLang === 'es' ? 'No se pudo guardar: ' : 'تعذر الحفظ: ') + (error.message || String(error)), true);
  } finally {
    if (button) { button.disabled = false; button.textContent = currentLang === 'es' ? 'Guardar en GitHub' : 'حفظ في GitHub'; }
  }
}

function renderGroupItems() {
  const container = document.getElementById('itemsContainer');
  if (!container || !currentGroup || !currentGroup.items.length) return;

  const totalItems = currentGroup.items.length;
  const isEs = currentLang === 'es';
  const activeSectionModule = getSectionModule(currentSection);
  const isAdya = !!(activeSectionModule && activeSectionModule.isDevotional);
  const t = uiTexts[currentLang];

  const progressBarContainer = document.getElementById('progressBarContainer');
  const resetAllBtn = document.getElementById('resetAllBtn');

  if (isAdya) {
    if (progressBarContainer) progressBarContainer.style.display = 'none';
    if (resetAllBtn) resetAllBtn.style.display = 'none';
  } else {
    if (progressBarContainer) progressBarContainer.style.display = 'block';
    if (resetAllBtn) resetAllBtn.style.display = 'inline-block';

    let totalCompletedInGroup = 0;
    currentGroup.items.forEach((it, idx) => {
      const cnt = getSavedCount(currentGroup.id, idx, it.count);
      if (cnt === 0) totalCompletedInGroup++;
    });
    const overallPercent = Math.round((totalCompletedInGroup / totalItems) * 100);

    const progressPercentEl = document.getElementById('progressPercent');
    const progressBarFillEl = document.getElementById('progressBarFill');
    if (progressPercentEl) progressPercentEl.innerText = `${overallPercent}%`;
    if (progressBarFillEl) progressBarFillEl.style.width = `${overallPercent}%`;
  }

  container.innerHTML = '';

  currentGroup.items.forEach((item, index) => {
    const currentCount = getSavedCount(currentGroup.id, index, item.count);
    const initialMax = item.maxCount || item.count;
    const itemSectionModule = getSectionModule(currentSection);
    const isQuranItem = !!(itemSectionModule && itemSectionModule.isQuranItem(item));
    const quranFontClass = isQuranItem ? ' quran-font' : '';
    const isFav = favorites.includes(item.text);
    const isDone = currentCount === 0;
    const itemProgressStr = t.itemProgress.replace('{current}', index + 1).replace('{total}', totalItems);

    const card = document.createElement('div');
    card.id = `zikr-card-${index}`;
    card.className = 'card-paper-bg rounded-3xl p-6 shadow-lg border border-amber-200/80 dark:border-slate-700 space-y-5 transition-all duration-300';

    card.innerHTML = `
      <div class="flex items-center justify-between text-xs font-bold border-b border-amber-200/60 dark:border-slate-700/60 pb-3">
        <span class="text-emerald-800 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
          ${itemProgressStr}
        </span>
        ${item.note ? `<span class="bg-amber-100/80 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-800">${item.note}</span>` : ''}
      </div>

      ${isEs ? `
        <div class="space-y-4">
          ${item.latin ? `<div class="text-sm sm:text-base md:text-lg text-slate-800 dark:text-slate-200 latin-text-style italic text-center font-semibold bg-amber-100/50 dark:bg-slate-900/70 p-4 rounded-2xl border border-amber-300/60 dark:border-slate-700 shadow-sm whitespace-pre-line">${formatTextWithNewlines(item.latin)}</div>` : ''}
          ${item.explanationEs ? `<div class="text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-50 es-text-style text-center font-bold bg-emerald-50/90 dark:bg-emerald-950/60 p-4 sm:p-5 rounded-2xl border border-emerald-300/60 dark:border-emerald-800/80 leading-relaxed shadow-sm whitespace-pre-line">${formatTextWithNewlines(item.explanationEs)}</div>` : ''}
          <div class="leading-relaxed custom-text-size${quranFontClass} font-bold text-emerald-950 dark:text-emerald-300 text-center tracking-wide pt-3 border-t border-amber-200/60 dark:border-slate-700/60 dir-rtl whitespace-pre-line">
            ${formatTextWithNewlines(item.text)}
          </div>
        </div>
      ` : `
        <div class="leading-relaxed custom-text-size${quranFontClass} font-bold text-slate-950 dark:text-slate-50 text-center tracking-wide py-2 whitespace-pre-line">
          ${formatTextWithNewlines(item.text)}
        </div>
      `}

      ${!isAdya ? `
        <div class="flex flex-col items-center justify-center pt-2">
          <button type="button" onclick="decrementCounter(${index})" class="dhikr-counter-btn ${isDone ? 'is-done' : ''} w-32 h-32 rounded-full flex flex-col items-center justify-center transition transform active:scale-90 cursor-pointer shadow-xl border-4 ${isDone ? 'bg-emerald-600 text-white border-emerald-400 hover:bg-emerald-700' : 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white border-emerald-300 hover:from-emerald-600 hover:to-teal-800'}">
            <span class="text-3xl font-extrabold text-white">${isDone ? '✓' : currentCount}</span>
            <span class="text-[11px] font-semibold mt-1 opacity-90 text-white">${isDone ? t.completedItem : t.pressToCount}</span>
            ${!isDone ? `<span class="text-[10px] opacity-75 mt-0.5 text-white">${currentCount} /${initialMax}</span>` : ''}
          </button>
        </div>
      ` : ''}

      <div class="flex items-center justify-center space-x-2 space-x-reverse pt-2 border-t border-slate-100 dark:border-slate-700">
${(() => {
  const audioSrc = item.audioUrl || (item.audioUrls && item.audioUrls.length > 0 ? item.audioUrls[0] : null);
  return audioSrc ? `
    <button type="button" onclick="playAudio('${audioSrc}')" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-slate-700 dark:text-slate-200 transition cursor-pointer" title="استماع">
      🔊
    </button>
  ` : '';
})()}

        <button type="button" onclick="copyText('${escapeJsStr(isEs ? (item.explanationEs || item.text) : item.text)}')" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-slate-700 dark:text-slate-200 transition cursor-pointer" title="نسخ">
          📋
        </button>
        <button type="button" onclick="shareText('${escapeJsStr(isEs ? (item.explanationEs || item.text) : item.text)}')" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-slate-700 dark:text-slate-200 transition cursor-pointer" title="مشاركة">
          🔗
        </button>
        <button type="button" onclick="toggleFavorite('${escapeJsStr(item.text)}')" class="p-2.5 rounded-xl ${isFav ? 'bg-amber-100 dark:bg-amber-950 text-amber-600' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'} hover:bg-amber-100 dark:hover:bg-amber-900 transition cursor-pointer" title="المفضلة">
          ${isFav ? '★' : '☆'}
        </button>
        ${['azkar', 'adya', 'ruqyah', 'munajat'].includes(currentSection) ? `
          <button type="button" onclick="openItemEditor(${index})" class="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 hover:bg-amber-200 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-200 transition cursor-pointer" title="${isEs ? 'Editar elemento' : 'تعديل الذكر'}">
            ✏️ ${isEs ? 'Editar' : 'تعديل'}
          </button>
        ` : ''}
        ${!isAdya ? `
          <button type="button" onclick="resetSingleItem(${index})" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-rose-100 dark:hover:bg-rose-950 text-slate-700 dark:text-slate-200 transition cursor-pointer" title="إعادة ضبط الذكر">
            🔄
          </button>
        ` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

function showFavorites(skipPushState = false) {
  hideAllViews();
  document.getElementById('favoritesView')?.classList.remove('hidden');
  loadFavorites();
  const container = document.getElementById('favoritesContainer');
  if (!container) return;
  container.innerHTML = '';
  const isEs = currentLang === 'es';
  const t = uiTexts[currentLang];

  if (!favorites.length) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
        <p class="text-base font-medium">${t.noFavs}</p>
      </div>
    `;
  } else {
    favorites.forEach(text => {
      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3';
      card.innerHTML = `
        <p class="text-base font-medium leading-relaxed text-slate-800 dark:text-slate-100 whitespace-pre-line">${formatTextWithNewlines(text)}</p>
        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/50">
          <div class="flex items-center space-x-2 space-x-reverse">
            <button type="button" onclick="copyText('${escapeJsStr(text)}')" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
              📋 ${isEs ? 'Copiar' : 'نسخ'}
            </button>
            <button type="button" onclick="shareText('${escapeJsStr(text)}')" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
              🔗 ${isEs ? 'Compartir' : 'مشاركة'}
            </button>
          </div>
          <button type="button" onclick="toggleFavorite('${escapeJsStr(text)}')" class="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-800">
            ${t.removeFav}
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  if (!skipPushState && window.history && window.history.pushState) {
    try {
      window.history.pushState({ view: 'favorites' }, '', '#favorites');
    } catch (e) {}
  }
}

const LAST_RESET_DATE_KEY = 'misbaha_last_reset_date_v1';

function checkDailyReset() {
  try {
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const lastReset = safeGetStorage(LAST_RESET_DATE_KEY);

    if (lastReset !== todayStr) {
      safeSetStorage(STORAGE_KEY, JSON.stringify({}));
      safeSetStorage('tasbeeh_counts_v5', JSON.stringify({}));
      safeSetStorage(LAST_RESET_DATE_KEY, todayStr);
    }
  } catch (e) {}
}

function openTransliterationGuide() {
  const modal = document.getElementById('transliterationModal');
  if (modal) modal.classList.remove('hidden');
}

function closeTransliterationGuide() {
  const modal = document.getElementById('transliterationModal');
  if (modal) modal.classList.add('hidden');
}

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.view) {
    switch (e.state.view) {
      case 'home': goHome(true); break;
      case 'section': showSection(e.state.sec, true); break;
      case 'detail': openGroup(e.state.groupId, true); break;
      case 'tasbeeh': showTasbeeh(true); break;
      case 'favorites': showFavorites(true); break;
      case 'quran': if (typeof showQuranView === 'function') showQuranView(true); break;
      case 'quranSurahs': if (typeof showQuranSurahsView === 'function') showQuranSurahsView(true); break;
      case 'quranAhzab': if (typeof showQuranAhzabView === 'function') showQuranAhzabView(true); break;
      case 'quranReader': if (typeof openQuranPage === 'function') openQuranPage(e.state.page || 1, true); break;
      default: goHome(true);
    }
  } else {
    goHome(true);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  checkDailyReset();
  loadSavedTheme();
  loadFavorites();
  applyLanguageUI();
  if (window.history && window.history.replaceState) {
    try {
      window.history.replaceState({ view: 'home' }, '', '#home');
    } catch (e) {}
  }
});
