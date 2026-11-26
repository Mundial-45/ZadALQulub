// tasbeeh.js - Misbaha electrónica / المسبحة الإلكترونية

const tasbeehItems = [
  { id: 't1', ar: 'سُبْحَانَ اللَّهِ', latin: 'Subḥān-Allāh', es: 'Glorificado sea Allah' },
  { id: 't2', ar: 'الْحَمْدُ لِلَّهِ', latin: 'Al-ḥamdu lillāh', es: 'Alabado sea Allah' },
  { id: 't3', ar: 'لا إِلَهَ إِلاَّ اللَّهُ', latin: 'Lā ilāha ill-Allāh', es: 'No hay más divinidad que Allah' },
  { id: 't4', ar: 'اللَّهُ أَكْبَرُ', latin: 'Allāhu akbar', es: 'Allah es el más Grande' },
  { id: 't5', ar: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ', latin: 'Astaghfirullāha wa atūbu ilayh', es: 'Pido perdón a Allah y me arrepiento ante Él' },
  { id: 't6', ar: 'لا حَوْلَ وَلا قُوَّةَ إِلاَّ بِاللَّهِ', latin: 'Lā ḥawla wa lā quwwata illā billāh', es: 'No hay poder ni fuerza sino en Allah' },
  { id: 't7', ar: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ', latin: 'Allāhumma ṣalli wa sallim ʿalā nabiyyinā Muḥammad', es: '¡Oh Allah! Bendice y concede paz a nuestro Profeta Muhammad' },
  { id: 't8', ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ', latin: 'Subḥān-Allāhi wa bi-ḥamdihi, Subḥān-Allāhil-ʿaẓīm', es: 'Glorificado sea Allah y con Su alabanza, Glorificado sea Allah el Grandioso' },
  { id: 't9', ar: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', latin: 'Ḥasbun-Allāhu wa niʿmal-wakīl', es: 'Allah nos basta, y excelente Protector' },
  { id: 't10', ar: 'سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلا إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلا حَوْلَ وَلا قُوَّةَ إِلاَّ بِاللَّهِ، اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَعَافِنِي، وَاهْدِنِي، وَارْزُقْنِي', latin: 'Subḥān-Allāh, wal-ḥamdu lillāh, wa lā ilāha ill-Allāh, wa-Allāhu akbar, wa lā ḥawla wa lā quwwata illā billāh. Allāhumma-ghfir lī, \nwar-ḥamnī, wa ʿāfinī, wah-dinī, war-zuqnī', es: 'Glorificado sea Allah, alabado sea Allah, no hay más divinidad que Allah, Allah es el más Grande, y no hay poder ni fuerza sino en Allah. ¡Oh Allah! Perdóname, ten misericordia de mí, concédeme salud, guíame y provéeme' },
  { id: 't11', ar: 'لا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', latin: 'Lā ilāha illā-Allāhu waḥdahu lā sharīka lah, lahu-l-mulku wa lahu-l-ḥamdu yuḥyī wa yumītu wa huwa ʿalā kulli shayʾin qadīr', es: 'No hay más divinidad que Allah, Único, sin asociado. Suyo es el dominio y Suya la alabanza; da la vida y da la muerte, y Él tiene poder sobre todas las cosas' },
  { id: 't12', ar: 'سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ', latin: 'Subḥān-Allāh, wal-ḥamdu lillāh, wa lā ilāha ill-Allāh, wa-Allāhu akbar', es: 'Glorificado sea Allah, alabado sea Allah, no hay más divinidad que Allah y Allah es el más Grande' },
  { id: 't13', ar: 'سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ', latin: 'Subḥān-Allāhil-ʿaẓīmi wa bi-ḥamdih', es: 'Glorificado sea Allah el Grandioso, y con Su alabanza' },
  { id: 't14', ar: 'اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي', latin: 'Allāhumma-ghfir lī, war-ḥamnī, wah-dinī, wa ʿāfinī, war-zuqnī', es: '¡Oh Allah! Perdóname, ten misericordia de mí, guíame, concédeme salud y provéeme' },
  { id: 't15', ar: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ القَيُّومُ وَأَتُوبُ إِلَيْهِ', latin: 'Astaghfirullāhal-ʿaẓīmal-ladhī lā ilāha illā huwal-ḥayyul-qayyūmu wa atūbu ilayh', es: 'Pido perdón a Allah el Grandioso, fuera del cual no hay más divinidad que Él, el Viviente, el Sustentador, y me arrepiento ante Él' },
  { id: 't16', ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', latin: 'Subḥān-Allāhi wa bi-ḥamdih', es: 'Glorificado sea Allah y con Su alabanza' },
  { id: 't17', ar: 'سُبْحَانَ اللَّهِ الْعَظِيمِ', latin: 'Subḥān-Allāhil-ʿaẓīm', es: 'Glorificado sea Allah el Grandioso' }

];

// Enlace desde una tarjeta de azkar a su contador en el rosario (item.tasbeehLinks = ['t12', ...]).
function openTasbeehCounter(id) {
  showTasbeeh();
  setTimeout(function () {
    var el = document.getElementById('tasbeeh-card-' + id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('tasbeeh-flash');
    setTimeout(function () { el.classList.remove('tasbeeh-flash'); }, 2200);
  }, 60);
}

var TASBEEH_VIRTUE_GROUPS = [
  { id: 'fadl_salah_ala_nabi', ar: 'فَضْلُ الصَّلَاةِ عَلَى النَّبِيِّ ﷺ', es: 'Virtud de pedir bendiciones por el Profeta' },
  { id: 'istighfar_tawbah', ar: 'الِاسْتِغْفَارُ وَالتَّوْبَةُ', es: 'El pedido de perdón (Istighfar) y el arrepentimiento (Tawbah)' },
  { id: 'fadl_tasbih_tahlil', ar: 'فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ', es: 'Las virtudes del Tasbih, Tahmid, Tahlil y Takbir' },
  { id: 'kayfa_yusabbih_nabi', ar: 'كَيْفَ كَانَ النَّبِيُّ ﷺ يُسَبِّحُ', es: 'Cómo realizaba el Profeta el conteo de las glorificaciones' }
];

function renderTasbeehVirtues() {
  var box = document.getElementById('tasbeehVirtues');
  if (!box) return;
  var isEs = currentLang === 'es';
  box.innerHTML = '<h3 class="text-base font-bold text-slate-700 dark:text-slate-200 text-center mb-3">' + (isEs ? 'Virtudes del dhikr y el perdón' : 'فَضَائِلُ الذِّكْرِ وَالِاسْتِغْفَارِ') + '</h3>' +
    '<div class="grid gap-3 sm:grid-cols-2">' + TASBEEH_VIRTUE_GROUPS.map(function (g) {
      return '<button type="button" onclick="openGroup(\'' + g.id + '\', false, \'rosario\')" class="tasbeeh-virtue-btn">' + (isEs ? g.es : g.ar) + '</button>';
    }).join('') + '</div>';
}

function showTasbeeh(skipPushState = false) {
  hideAllViews();
  (function(e){if(e)e.classList.remove('hidden');})(document.getElementById('tasbeehView'));
  renderTasbeehGrid();
  if (!skipPushState && window.history && window.history.pushState) {
    try {
      window.history.pushState({ view: 'tasbeeh' }, '', '#tasbeeh');
    } catch (e) {}
  }
}

function getTasbeehCount(id) {
  const saved = safeGetStorage('tasbeeh_counts_v5');
  const counts = saved ? JSON.parse(saved) : {};
  return counts[id] || 0;
}

function setTasbeehCount(id, val) {
  const saved = safeGetStorage('tasbeeh_counts_v5');
  const counts = saved ? JSON.parse(saved) : {};
  counts[id] = val;
  safeSetStorage('tasbeeh_counts_v5', JSON.stringify(counts));
}

function incrementTasbeeh(id) {
  const val = getTasbeehCount(id) + 1;
  setTasbeehCount(id, val);
  renderTasbeehGrid();
}

function resetSingleTasbeeh(id) {
  setTasbeehCount(id, 0);
  renderTasbeehGrid();
  showToast(currentLang === 'es' ? 'Contador reiniciado' : 'تم تصفير العداد');
}

function resetAllTasbeehs() {
  safeSetStorage('tasbeeh_counts_v5', JSON.stringify({}));
  renderTasbeehGrid();
  showToast(currentLang === 'es' ? 'Todos los contadores reiniciados' : 'تم تصفير جميع العدادات');
}

function renderTasbeehGrid() {
  const grid = document.getElementById('tasbeehGrid');
  if (!grid) return;
  grid.innerHTML = '';
  renderTasbeehVirtues();
  const isEs = currentLang === 'es';

  tasbeehItems.forEach(item => {
    const val = getTasbeehCount(item.id);
    const card = document.createElement('div');
    card.id = 'tasbeeh-card-' + item.id;
    card.className = 'card-paper-bg rounded-3xl p-6 shadow-lg border border-amber-200/80 dark:border-slate-700 flex flex-col items-center justify-between space-y-4 transition-all duration-300';
    card.innerHTML = `
      <div class="text-center w-full">
        ${isEs ? `
          <div class="space-y-2">
            ${item.latin ? `<p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 latin-text-style italic font-semibold bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800 whitespace-pre-line">${formatTextWithNewlines(item.latin)}</p>` : ''}
            <p class="text-base sm:text-lg font-bold es-text-style text-slate-900 dark:text-slate-100 whitespace-pre-line">${formatTextWithNewlines(item.es)}</p>
            <div class="text-lg sm:text-xl font-bold text-emerald-800 dark:text-emerald-300 pt-2 border-t border-slate-100 dark:border-slate-700/60 dir-rtl whitespace-pre-line">${formatTextWithNewlines(item.ar)}</div>
          </div>
        ` : `
          <h3 class="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 whitespace-pre-line">${formatTextWithNewlines(item.ar)}</h3>
        `}
      </div>

      <button type="button" onclick="incrementTasbeeh('${item.id}')" class="w-28 h-28 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white shadow-lg flex flex-col items-center justify-center transition transform active:scale-95 cursor-pointer border-4 border-amber-300">
        <span class="text-2xl font-extrabold">${val}</span>
        <span class="text-[10px] opacity-80 mt-0.5">${isEs ? 'Toca para contar' : 'اضغط للعد'}</span>
      </button>

      <button type="button" onclick="resetSingleTasbeeh('${item.id}')" class="text-xs font-semibold text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition cursor-pointer">
        ${isEs ? 'Reiniciar' : 'تصفير'}
      </button>
    `;
    grid.appendChild(card);
  });
}
