/* Zad Al-Qulub — Pantallas de «Normas y consejos» (آداب) para Azkar y Adya.
 *
 * Contenido SIN itemNumber y fuera de azkarData/adyaData: no afecta a la numeración,
 * a los favoritos (section|groupId|itemNumber) ni a los contadores existentes.
 * Se engancha a app.js sin modificarlo (envuelve renderButtonsGrid, hideAllViews y
 * applyLanguageUI, y gestiona su propio estado de historial: 'adab' y 'thanaa').
 */
(function () {
  'use strict';

  var IW = function (id) { return 'https://www.islamweb.net/ar/fatwa/' + id + '/'; };
  var BB = function (id) { return 'https://binbaz.org.sa/fatwas/' + id + '/'; };
  var SRC_IW = { n: 'إسلام ويب', e: 'IslamWeb' };
  var SRC_BB = { n: 'موقع ابن باز', e: 'Web del Sheij Ibn Baz' };
  function iw(id) { return { n: SRC_IW.n, e: SRC_IW.e, u: IW(id) }; }
  function bb(id) { return { n: SRC_BB.n, e: SRC_BB.e, u: BB(id) }; }

  /* ───────────── Azkar: normas del dhikr ───────────── */
  var AZKAR = {
    titleAr: 'آدَابٌ وَنَصَائِحُ قَبْلَ بَدْءِ الْأَذْكَارِ',
    titleEs: 'Normas y consejos antes de empezar los azkar',
    introAr: 'مُخْتَصَرٌ مِنْ فَتَاوَى إِسْلَامْ وَيْب وَأَقْوَالِ أَهْلِ الْعِلْمِ، مَعَ الْمَصْدَرِ لِكُلِّ بِطَاقَةٍ.',
    introEs: 'Resumen basado en fatwas de IslamWeb y en palabras de ulemas; cada tarjeta indica su fuente.',
    cards: [
      { tAr: 'الْإِخْلَاصُ لِلَّهِ', tEs: 'La sinceridad hacia Allah',
        ar: 'أَنْ يَقْصِدَ الذَّاكِرُ بِذِكْرِهِ وَجْهَ اللَّهِ تَعَالَى وَحْدَهُ؛ فَالْإِخْلَاصُ شَرْطُ قَبُولِ الْأَعْمَالِ، وَلَا يَتْرُكُ الذِّكْرَ خَوْفًا مِنَ الرِّيَاءِ.',
        es: 'Recordar a Allah buscando solo Su complacencia: la sinceridad es la primera condición para que una obra sea aceptada. Y no se debe abandonar el dhikr por miedo a la ostentación.',
        src: [iw(95545)] },
      { tAr: 'حُضُورُ الْقَلْبِ وَالتَّدَبُّرُ', tEs: 'Presencia del corazón y reflexión',
        ar: 'الْمَقْصُودُ مِنَ الذِّكْرِ حُضُورُ الْقَلْبِ؛ فَيَتَدَبَّرُ الذَّاكِرُ مَا يَقُولُ وَيَتَعَقَّلُ مَعْنَاهُ، وَمَنْ لَمْ يَتَدَبَّرْ فَلَا يُحْرَمُ الثَّوَابَ.',
        es: 'Lo que se busca con el dhikr es la presencia del corazón: conviene reflexionar sobre lo que se dice y comprender su sentido. Quien no logra reflexionar no queda por ello privado de la recompensa.',
        src: [iw(95545)] },
      { tAr: 'مَا يُعِينُ عَلَى حُضُورِ الْقَلْبِ', tEs: 'Qué ayuda a concentrarse',
        ar: 'دَوَامُ التَّفَكُّرِ فِي مَعَانِي الْأَذْكَارِ، وَاسْتِحْضَارُ اطِّلَاعِ اللَّهِ عَلَى عَبْدِهِ وَهُوَ يَذْكُرُهُ، وَدَوَامُ اللَّجَأِ إِلَى اللَّهِ أَنْ يَجْعَلَ الْقَلْبَ حَاضِرًا.',
        es: 'Meditar continuamente el significado de los azkar, recordar que Allah te ve mientras Le recuerdas y pedirle siempre que haga presente tu corazón.',
        src: [iw(365107)] },
      { tAr: 'الِافْتِتَاحُ بِالْحَمْدِ وَالثَّنَاءِ', tEs: 'Empezar con alabanza y glorificación',
        ar: 'يُسْتَحَبُّ أَنْ يَبْدَأَ الْعَبْدُ ذِكْرَهُ وَدُعَاءَهُ بِحَمْدِ اللَّهِ وَالثَّنَاءِ عَلَيْهِ، ثُمَّ يُصَلِّيَ عَلَى النَّبِيِّ ﷺ. وَقَدْ أَجْمَعَ الْعُلَمَاءُ عَلَى اسْتِحْبَابِ ذَلِكَ.',
        es: 'Es recomendable comenzar alabando a Allah y glorificándole, y luego invocar la paz sobre el Profeta ﷺ. Los ulemas coinciden en que es recomendable (an-Nawawi, citado por IslamWeb).',
        src: [iw(328927), iw(40954)],
        link: 'thanaa' },
      { tAr: 'الطَّهَارَةُ', tEs: 'La pureza ritual',
        ar: 'يُسْتَحَبُّ أَنْ يَذْكُرَ اللَّهَ عَلَى طَهَارَةٍ، وَلَيْسَتِ الطَّهَارَةُ شَرْطًا لِلذِّكْرِ؛ فَقَدْ كَانَ النَّبِيُّ ﷺ يَذْكُرُ اللَّهَ عَلَى كُلِّ أَحْيَانِهِ.',
        es: 'Es recomendable recordar a Allah en estado de pureza, pero no es condición del dhikr: el Profeta ﷺ recordaba a Allah en todo momento.',
        src: [iw(95545), iw(35909)] },
      { tAr: 'اسْتِقْبَالُ الْقِبْلَةِ وَالسَّكِينَةُ', tEs: 'Orientarse a la alquibla y la serenidad',
        ar: 'يُسْتَحَبُّ لِلذَّاكِرِ اسْتِقْبَالُ الْقِبْلَةِ وَالْجُلُوسُ بِسَكِينَةٍ وَخُشُوعٍ، وَلَوْ ذَكَرَ عَلَى غَيْرِ هَذِهِ الْحَالِ جَازَ ذِكْرُهُ وَلَا كَرَاهَةَ فِيهِ.',
        es: 'Es recomendable orientarse a la alquibla y sentarse con serenidad y humildad; quien recuerda a Allah de otro modo cumple igualmente, sin que sea reprobable.',
        src: [iw(114273)] },
      { tAr: 'اللِّسَانُ وَالْقَلْبُ وَالْإِسْرَارُ', tEs: 'Lengua, corazón y voz baja',
        ar: 'النُّطْقُ بِاللِّسَانِ مَعَ حُضُورِ الْقَلْبِ أَفْضَلُ، وَالذِّكْرُ بِالْقَلْبِ وَحْدَهُ مُمْكِنٌ وَيُثَابُ عَلَيْهِ. وَالْجَهْرُ جَائِزٌ، وَالْإِسْرَارُ أَقْرَبُ إِلَى الْخُشُوعِ وَأَبْعَدُ عَنِ الرِّيَاءِ.',
        es: 'Lo mejor es pronunciar con la lengua y con el corazón presente; recordar solo con el corazón también es posible y recompensado. Decirlo en voz alta es lícito, pero en voz baja está más cerca del recogimiento y lejos de la ostentación.',
        src: [iw(35909), iw(114273)] }
    ]
  };

  /* ───────────── Adya: normas de la súplica ───────────── */
  var ADYA = {
    titleAr: 'آدَابُ الدُّعَاءِ وَنَصَائِحُ قَبْلَ الدُّعَاءِ',
    titleEs: 'Normas y consejos antes de suplicar',
    introAr: 'مُخْتَصَرٌ مِنْ فَتَاوَى إِسْلَامْ وَيْب وَالشَّيْخِ ابْنِ بَازٍ، مَعَ الْمَصْدَرِ لِكُلِّ بِطَاقَةٍ.',
    introEs: 'Resumen basado en fatwas de IslamWeb y del Sheij Ibn Baz; cada tarjeta indica su fuente.',
    cards: [
      { tAr: 'الْإِخْلَاصُ وَالْيَقِينُ', tEs: 'Sinceridad y certeza',
        ar: 'يَدْعُو الْعَبْدُ اللَّهَ وَحْدَهُ بِصِدْقٍ وَإِخْلَاصٍ، مُوقِنًا بِالْإِجَابَةِ، حَسَنَ الظَّنِّ بِرَبِّهِ؛ فَالدُّعَاءُ عِبَادَةٌ.',
        es: 'Suplicar solo a Allah, con sinceridad, con certeza de que responderá y buena opinión de Él: la súplica es un acto de adoración.',
        src: [iw(71758)] },
      { tAr: 'حُضُورُ الْقَلْبِ', tEs: 'Presencia del corazón',
        ar: 'قَالَ النَّبِيُّ ﷺ: «ادْعُوا اللَّهَ وَأَنْتُمْ مُوقِنُونَ بِالْإِجَابَةِ، وَاعْلَمُوا أَنَّ اللَّهَ لَا يَسْتَجِيبُ دُعَاءً مِنْ قَلْبٍ غَافِلٍ لَاهٍ». رَوَاهُ التِّرْمِذِيُّ وَالْحَاكِمُ.',
        es: 'El Profeta ﷺ ordenó suplicar con certeza en la respuesta y advirtió que Allah no responde la súplica de un corazón distraído y despreocupado (Tirmidhi y al-Hakim).',
        src: [iw(119608)] },
      { tAr: 'الِافْتِتَاحُ بِالْحَمْدِ وَالثَّنَاءِ', tEs: 'Empezar con alabanza y glorificación',
        ar: 'يُسْتَحَبُّ أَنْ يَبْدَأَ الدَّاعِي بِحَمْدِ اللَّهِ وَالثَّنَاءِ عَلَيْهِ، ثُمَّ يُصَلِّيَ عَلَى النَّبِيِّ ﷺ، ثُمَّ يَسْأَلَ حَاجَتَهُ، وَيَخْتِمَ بِذَلِكَ. وَهُوَ مِنْ أَسْبَابِ الْإِجَابَةِ وَلَيْسَ شَرْطًا فِي الْقَبُولِ.',
        es: 'Es recomendable empezar alabando a Allah, luego invocar la paz sobre el Profeta ﷺ y después pedir, cerrando del mismo modo. Es causa de respuesta, aunque no una condición para que la súplica sea aceptada (Ibn Baz).',
        src: [iw(40954), iw(328927), bb(23045)],
        link: 'thanaa' },
      { tAr: 'الصَّلَاةُ عَلَى النَّبِيِّ ﷺ', tEs: 'La bendición sobre el Profeta ﷺ',
        ar: 'أَفْضَلُ صِيَغِ الصَّلَاةِ عَلَى النَّبِيِّ ﷺ الصَّلَاةُ الْإِبْرَاهِيمِيَّةُ: «اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ…».',
        es: 'La mejor fórmula es la oración ibrahimí («Allahumma salli ʿala Muhammad wa ʿala ali Muhammad, kama sallayta ʿala Ibrahim…»), según dijo el Sheij Ibn Baz. Se dice tras la alabanza y antes de pedir.',
        src: [bb(13861), iw(365107)] },
      { tAr: 'الطَّهَارَةُ وَالْقِبْلَةُ وَرَفْعُ الْيَدَيْنِ', tEs: 'Pureza, alquibla y manos alzadas',
        ar: 'مِنْ آدَابِ الدُّعَاءِ: الْوُضُوءُ، وَاسْتِقْبَالُ الْقِبْلَةِ، وَرَفْعُ الْيَدَيْنِ، وَالْخُشُوعُ، وَخَفْضُ الصَّوْتِ. وَلَيْسَتِ الطَّهَارَةُ شَرْطًا، وَكُلَّمَا كَانَ الْعَبْدُ عَلَى هَيْئَةٍ أَكْمَلَ كَانَ دُعَاؤُهُ أَرْجَى لِلْقَبُولِ.',
        es: 'Entre las normas de la súplica: estar con ablución, mirar a la alquibla, alzar las manos, humildad y voz baja. La pureza no es condición, pero cuanto más completo es el estado del siervo, más se espera la aceptación.',
        src: [iw(35909)], srcExtra: [{ n: 'إسلام ويب (مقال)', e: 'IslamWeb (artículo)', u: 'https://www.islamweb.net/ar/article/176461/' }] },
      { tAr: 'التَّوْبَةُ وَالتَّوَسُّلُ وَالصَّدَقَةُ', tEs: 'Arrepentimiento, tawassul y caridad',
        ar: 'يُقَدِّمُ الدَّاعِي بَيْنَ يَدَيْ حَاجَتِهِ التَّوْبَةَ وَالِاسْتِغْفَارَ، وَيَتَوَسَّلُ إِلَى اللَّهِ بِأَسْمَائِهِ وَصِفَاتِهِ، أَوْ بِعَمَلٍ صَالِحٍ، أَوْ بِدُعَاءِ رَجُلٍ صَالِحٍ حَيٍّ، وَيُقَدِّمُ صَدَقَةً.',
        es: 'Antes de pedir se presenta el arrepentimiento y la petición de perdón; se recurre a Allah por Sus nombres y atributos, por una obra buena o por la súplica de un hombre piadoso vivo, y se puede adelantar una limosna (Ibn al-Qayyim).',
        src: [iw(463441), iw(71758)] },
      { tAr: 'الْعَزْمُ وَعَدَمُ التَّرَدُّدِ', tEs: 'Firmeza, sin titubeos',
        ar: 'يَعْزِمُ الدَّاعِي عَلَى رَبِّهِ وَيُلِحُّ فِي الدُّعَاءِ، وَلَا يَقُولُ: «اغْفِرْ لِي إِنْ شِئْتَ».',
        es: 'Pedir con determinación e insistir, sin decir «perdóname si quieres».',
        src: [iw(71758)] },
      { tAr: 'أَوْقَاتُ الْإِجَابَةِ', tEs: 'Momentos de respuesta',
        ar: 'تُرْجَى الْإِجَابَةُ فِي: الثُّلُثِ الْأَخِيرِ مِنَ اللَّيْلِ، وَعِنْدَ الْأَذَانِ، وَبَيْنَ الْأَذَانِ وَالْإِقَامَةِ، وَأَدْبَارِ الصَّلَوَاتِ الْمَكْتُوبَاتِ، وَسَاعَةِ الْجُمُعَةِ، وَعِنْدَ نُزُولِ الْمَطَرِ، وَفِي السُّجُودِ، وَعِنْدَ الْإِفْطَارِ لِلصَّائِمِ.',
        es: 'Se espera la respuesta en el último tercio de la noche, durante el adhan, entre el adhan y la iqama, al terminar las oraciones obligatorias, en la hora de los viernes, con la lluvia, en la postración y al romper el ayuno.',
        src: [iw(35121), iw(21256)] },
      { tAr: 'دُعَاءُ الْمَرْءِ لِأَخِيهِ بِظَهْرِ الْغَيْبِ', tEs: 'Suplicar por un hermano en su ausencia',
        ar: 'قَالَ النَّبِيُّ ﷺ: «دَعْوَةُ الْمَرْءِ الْمُسْلِمِ لِأَخِيهِ بِظَهْرِ الْغَيْبِ مُسْتَجَابَةٌ، عِنْدَ رَأْسِهِ مَلَكٌ مُوَكَّلٌ كُلَّمَا دَعَا لِأَخِيهِ بِخَيْرٍ قَالَ الْمَلَكُ: آمِينَ، وَلَكَ بِمِثْلٍ». رَوَاهُ مُسْلِمٌ.',
        es: 'El Profeta ﷺ dijo que la súplica de un musulmán por su hermano a sus espaldas es respondida, y que un ángel dice «amén, y para ti lo mismo» (Muslim).',
        src: [iw(379913)] },
      { tAr: 'مَوَانِعُ الْإِجَابَةِ', tEs: 'Lo que impide la respuesta',
        ar: 'مِنْ مَوَانِعِ الْإِجَابَةِ: أَكْلُ الْحَرَامِ وَشُرْبُهُ وَلُبْسُهُ، وَغَفْلَةُ الْقَلْبِ، وَالدُّعَاءُ بِإِثْمٍ أَوْ قَطِيعَةِ رَحِمٍ، وَالِاسْتِعْجَالُ بِأَنْ يَقُولَ: «دَعَوْتُ فَلَمْ يُسْتَجَبْ لِي» ثُمَّ يَتْرُكَ الدُّعَاءَ. وَمَنْ تَابَ تَوْبَةً نَصُوحًا زَالَ الْمَانِعُ بِإِذْنِ اللَّهِ.',
        es: 'Impiden la respuesta: alimentarse, beber o vestirse con lo ilícito, la distracción del corazón, pedir algo pecaminoso o que rompa lazos familiares, y la impaciencia (decir «he suplicado y no me han respondido» y abandonar). Quien se arrepiente sinceramente elimina el obstáculo, si Allah quiere.',
        src: [iw(71758), iw(232450), iw(455491)] },
      { tAr: 'صُوَرُ الْإِجَابَةِ', tEs: 'Formas en que llega la respuesta',
        ar: 'لَا تَعْنِي الْإِجَابَةُ أَنْ يُعْطَى الدَّاعِي عَيْنَ مَا سَأَلَ فِي الْوَقْتِ الَّذِي أَرَادَهُ؛ فَالْإِجَابَةُ إِمَّا أَنْ تُعَجَّلَ لَهُ، وَإِمَّا أَنْ تُدَّخَرَ لَهُ فِي الْآخِرَةِ، وَإِمَّا أَنْ يُصْرَفَ عَنْهُ مِنَ السُّوءِ مِثْلُهَا.',
        es: 'Que Allah responda no significa darte exactamente lo pedido en el momento deseado: o se adelanta, o se reserva para la otra vida, o aparta de ti un mal equivalente (hadiz transmitido por Ahmad).',
        src: [iw(455491), iw(463441)] }
    ]
  };

  /* ───────────── Ruqyah: normas y método ───────────── */
  var RUQYAH = {
    titleAr: 'آدَابُ وَطَرِيقَةُ الرُّقْيَةِ',
    titleEs: 'Normas y método de la ruqyah',
    introAr: 'خُلَاصَةُ آدَابِ الرُّقْيَةِ الشَّرْعِيَّةِ وَطَرِيقَتِهَا، وَهِيَ عَامَّةٌ لِجَمِيعِ الرُّقَى الْوَارِدَةِ فِي هَذَا الْقِسْمِ.',
    introEs: 'Resumen de las normas y del método de la ruqyah legítima; vale para todas las ruqyas de esta sección.',
    cards: [
      { tAr: "الِاعْتِقَادُ وَالْإِخْلَاصُ", tEs: "Creencia y sinceridad",
        ar: "الِاعْتِقَادُ الْجَازِمُ بِأَنَّ الشِّفَاءَ بِيَدِ اللَّهِ وَحْدَهُ، وَأَنَّ الرُّقْيَةَ سَبَبٌ مَشْرُوعٌ لَا تَنْفَعُ بِذَاتِهَا، بَلْ بِإِذْنِ اللَّهِ.\nالْإِخْلَاصُ وَالتَّوَكُّلُ عَلَى اللَّهِ تَعَالَى.",
        es: "Creencia firme de que la curación está únicamente en manos de Allah, y de que la ruqyah es un medio legítimo que no beneficia por sí misma, sino con el permiso de Allah.\nSinceridad y plena confianza en Allah, el Altísimo." },
      AZKAR.cards.filter(function (c) { return c.link === 'thanaa'; })[0],
      { tAr: "مَا يُرْقَى بِهِ وَمَا يُجْتَنَبُ", tEs: "Con qué se hace la ruqyah y qué se evita",
        ar: "أَنْ تَكُونَ بِكَلَامِ اللَّهِ، أَوْ بِأَسْمَائِهِ وَصِفَاتِهِ، أَوْ بِالْأَدْعِيَةِ الْمَأْثُورَةِ، بِاللِّسَانِ الْعَرَبِيِّ أَوْ بِمَا يُعْرَفُ مَعْنَاهُ.\nاجْتِنَابُ التَّمَائِمِ وَالطَّلَاسِمِ، وَكُلِّ مَا فِيهِ شِرْكٌ أَوْ كَلَامٌ لَا يُعْرَفُ مَعْنَاهُ.",
        es: "Que se haga con la Palabra de Allah, con Sus Nombres y Atributos o con las súplicas transmitidas, en árabe o con palabras de significado comprensible.\nEvitar los amuletos, los talismanes y todo lo que contenga shirk o palabras de significado desconocido." },
      { tAr: "طَرِيقَةُ الرُّقْيَةِ: النَّفْثُ وَالْمَسْحُ", tEs: "Método: soplido y pasar las manos",
        ar: "النَّفْثُ (نَفْخٌ خَفِيفٌ مَعَ شَيْءٍ يَسِيرٍ مِنَ الرِّيقِ) عَلَى النَّفْسِ أَوْ عَلَى الْمَرِيضِ أَوْ فِي الْكَفَّيْنِ، ثُمَّ مَسْحُ جَسَدِ الْمَرِيضِ بِهِمَا.",
        es: "Soplido leve (con un poco de saliva) sobre uno mismo, sobre el enfermo o en las palmas de las manos, para luego pasarlas por el cuerpo del enfermo." },
      { tAr: "الرُّقْيَةُ بِالْمَاءِ وَالزَّيْتِ", tEs: "La ruqyah con agua y aceite",
        ar: "تَجُوزُ الْقِرَاءَةُ عَلَى الْمَاءِ مُبَاشَرَةً أَوْ عَلَى زَيْتِ الزَّيْتُونِ، ثُمَّ يَشْرَبُ مِنْهُ الْمَرِيضُ أَوْ يَغْتَسِلُ بِهِ، وَيَدَّهِنُ بِالزَّيْتِ.",
        es: "Se permite recitar directamente sobre el agua o sobre aceite de oliva; luego el enfermo bebe de ella o se lava con ella, y se unge con el aceite." },
      { tAr: "رُقْيَةُ الْبَيْتِ بِالْمَاءِ", tEs: "Ruqya de la casa con agua",
        ar: "يُؤْخَذُ مَاءٌ طَاهِرٌ فِي إِنَاءٍ نَظِيفٍ، وَيُقْرَأُ عَلَيْهِ مَا تَيَسَّرَ مِنَ الْآيَاتِ وَالْأَدْعِيَةِ الْآتِيَةِ مَعَ النَّفْثِ فِيهِ.\nثُمَّ يُرَشُّ فِي أَرْجَاءِ الْبَيْتِ وَزَوَايَاهُ، وَيُجْتَنَبُ رَشُّهُ فِي الْخَلَاءِ وَالْأَمَاكِنِ النَّجِسَةِ، وَلَا يُصَبُّ الْبَاقِي فِي مَجَارِي الْمِيَاهِ، بَلْ يُشْرَبُ أَوْ يُغْتَسَلُ بِهِ.\nرَشُّ الْمَاءِ الْمَقْرُوءِ فِيهِ أَجَازَهُ بَعْضُ أَهْلِ الْعِلْمِ مِنْ بَابِ الرُّقْيَةِ بِالْمَاءِ، وَلَمْ يَرِدْ فِيهِ حَدِيثٌ خَاصٌّ.\nوَأَعْظَمُ حِصْنٍ لِلْبَيْتِ قِرَاءَةُ سُورَةِ الْبَقَرَةِ فِيهِ؛ قَالَ النَّبِيُّ ﷺ: «لَا تَجْعَلُوا بُيُوتَكُمْ مَقَابِرَ، إِنَّ الشَّيْطَانَ يَنْفِرُ مِنَ الْبَيْتِ الَّذِي تُقْرَأُ فِيهِ سُورَةُ الْبَقَرَةِ» (رَوَاهُ مُسْلِمٌ)، مَعَ ذِكْرِ اللَّهِ عِنْدَ دُخُولِهِ وَعِنْدَ الطَّعَامِ.",
        es: "Se toma agua pura en un recipiente limpio y se recita sobre ella lo que se pueda de las aleyas y súplicas siguientes, soplando suavemente sobre ella.\nDespués se rocía por las habitaciones y los rincones de la casa. Se evita rociarla en el baño y en lugares impuros, y el sobrante no se tira por el desagüe: se bebe o se usa para lavarse.\nRociar agua recitada lo permiten algunos sabios porque la ruqya con agua está permitida, pero no hay un hadiz específico sobre ello.\nLa mayor protección de la casa es recitar en ella la sura Al-Baqara. El Profeta ﷺ dijo: «No conviertan sus casas en tumbas; ciertamente, el Shaytán huye de la casa en la que se recita la sura Al-Baqara» (Muslim). Y también mencionar a Allah al entrar en casa y al comer." }
    ]
  };

  /* ───────────── Fórmulas de alabanza (ثناء) ───────────── */
  var THANAA = {
    titleAr: 'صِيَغُ الثَّنَاءِ عَلَى اللَّهِ',
    titleEs: 'Fórmulas de alabanza a Allah (zanāʾ)',
    introAr: 'الثَّنَاءُ عَلَى اللَّهِ يَكُونُ بِذِكْرِ أَسْمَائِهِ الْحُسْنَى وَصِفَاتِهِ الْعُلَى وَأَفْعَالِهِ الْعُظْمَى وَنِعَمِهِ عَلَى عِبَادِهِ. وَهَذِهِ صِيَغٌ وَارِدَةٌ تُقَالُ قَبْلَ الدُّعَاءِ.',
    introEs: 'Alabar a Allah es mencionar Sus nombres hermosos, Sus atributos sublimes, Sus obras grandiosas y Sus favores. Estas son fórmulas transmitidas para decir antes de pedir.',
    cards: [
      { tAr: 'مِنْ كَلَامِ اللَّهِ: الْفَاتِحَةُ', tEs: 'Del Corán: Al-Fatiha',
        ar: '﴿الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ﴾',
        latin: 'Al-ḥamdu lillāhi rabbi l-ʿālamīn. Ar-raḥmāni r-raḥīm. Māliki yawmi d-dīn.',
        es: 'Alabanza a Allah, Señor de los mundos. El Clemente, el Misericordioso. Dueño del Día del Juicio. (Corán 1:2-4). Lo mejor para alabar a Allah es lo que Él mismo dijo de Sí.',
        src: [{ n: 'إسلام ويب – الشيخ أحمد حطيبة', e: 'IslamWeb – Sheij Ahmad Hatiba', u: 'https://audio.islamweb.net/audio/index.php?page=FullContent&audioid=144794' }] },
      { tAr: 'ثَنَاءٌ نَبَوِيٌّ (مُتَّفَقٌ عَلَيْهِ)', tEs: 'Alabanza profética (Bujari y Muslim)',
        ar: 'اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ، أَنْتَ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، أَنْتَ الْحَقُّ، وَقَوْلُكَ الْحَقُّ، وَوَعْدُكَ الْحَقُّ، وَلِقَاؤُكَ الْحَقُّ.',
        latin: 'Allāhumma laka l-ḥamd, anta qayyimu s-samāwāti wa l-arḍi wa man fīhinn, wa laka l-ḥamd, anta rabbu s-samāwāti wa l-arḍi wa man fīhinn, wa laka l-ḥamd, anta nūru s-samāwāti wa l-arḍi wa man fīhinn. Anta l-ḥaqq, wa qawluka l-ḥaqq, wa waʿduka l-ḥaqq, wa liqāʾuka l-ḥaqq.',
        es: 'Oh Allah, Tuya es la alabanza: Tú sostienes los cielos y la tierra y a quienes los habitan; Tú eres su Señor y su luz. Tú eres la Verdad, Tu palabra es verdad, Tu promesa es verdad y el encuentro contigo es verdad.',
        src: [iw(25586)] },
      { tAr: 'ثَنَاءٌ بِالْأَسْمَاءِ وَالصِّفَاتِ (رَوَاهُ مُسْلِمٌ)', tEs: 'Alabanza con nombres y atributos (Muslim)',
        ar: 'اللَّهُمَّ رَبَّ السَّمَاوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ. اللَّهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ.',
        latin: 'Allāhumma rabba s-samāwāti wa rabba l-arḍi wa rabba l-ʿarshi l-ʿaẓīm, rabbanā wa rabba kulli shayʾ, fāliqa l-ḥabbi wa n-nawā, wa munzila t-tawrāti wa l-injīli wa l-furqān. Aʿūdhu bika min sharri kulli shayʾin anta ākhidhun bi-nāṣiyatih. Allāhumma anta l-awwalu fa-laysa qablaka shayʾ, wa anta l-ākhiru fa-laysa baʿdaka shayʾ, wa anta ẓ-ẓāhiru fa-laysa fawqaka shayʾ, wa anta l-bāṭinu fa-laysa dūnaka shayʾ.',
        es: 'Oh Allah, Señor de los cielos, de la tierra y del Trono inmenso, Señor nuestro y de todas las cosas, que haces brotar el grano y el hueso, que revelaste la Torá, el Evangelio y el Furqán. Busco refugio en Ti del mal de todo aquello que Tú sujetas por el copete. Tú eres el Primero, nada hay antes de Ti; el Último, nada hay después de Ti; el Manifiesto, nada hay sobre Ti; el Oculto, nada hay más cercano que Tú.',
        src: [iw(25586)] },
      { tAr: 'حَمْدٌ كَثِيرٌ مِنَ الرَّفْعِ مِنَ الرُّكُوعِ', tEs: 'Alabanza al incorporarse del ruku‘',
        ar: 'رَبَّنَا وَلَكَ الْحَمْدُ، مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ، وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ، أَهْلَ الثَّنَاءِ وَالْمَجْدِ، أَحَقُّ مَا قَالَ الْعَبْدُ، وَكُلُّنَا لَكَ عَبْدٌ، لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.',
        latin: 'Rabbanā wa laka l-ḥamd, milʾa s-samāwāti wa milʾa l-arḍ, wa milʾa mā shiʾta min shayʾin baʿd. Ahla th-thanāʾi wa l-majd, aḥaqqu mā qāla l-ʿabd, wa kullunā laka ʿabd. Lā māniʿa limā aʿṭayta, wa lā muʿṭiya limā manaʿta, wa lā yanfaʿu dhā l-jaddi minka l-jadd.',
        es: 'Señor nuestro, Tuya es la alabanza, que llene los cielos y la tierra y cuanto quieras después. Digno de alabanza y gloria; lo más cierto que dice el siervo, y todos somos Tus siervos: nadie impide lo que Tú das ni da lo que Tú impides, y a nadie le sirve ante Ti su riqueza o rango.',
        src: [bb(21072), bb(22630)] },
      { tAr: 'ثَنَاءٌ بِالتَّوَسُّلِ (قَبْلَ الْمَسْأَلَةِ)', tEs: 'Alabanza con tawassul (antes de pedir)',
        ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ، لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، الْمَنَّانُ، يَا بَدِيعَ السَّمَاوَاتِ وَالْأَرْضِ، يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.',
        latin: 'Allāhumma innī asʾaluka bi-anna laka l-ḥamd, lā ilāha illā anta waḥdaka lā sharīka lak, al-mannān, yā badīʿa s-samāwāti wa l-arḍ, yā dhā l-jalāli wa l-ikrām.',
        es: 'Oh Allah, Te pido por que Tuya es la alabanza; no hay más dios que Tú, único, sin asociado; el Dadivoso, Creador de los cielos y la tierra, Señor de la Majestad y la Generosidad.',
        src: [iw(40954)] },
      { tAr: 'صِيَغٌ قَصِيرَةٌ', tEs: 'Fórmulas breves',
        ar: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنَّكَ اللَّهُ الرَّحْمَنُ الرَّحِيمُ.\nلَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَعَظِيمِ سُلْطَانِكَ.\nلَكَ الْحَمْدُ بِالْإِيمَانِ وَالْإِسْلَامِ وَالْقُرْآنِ.',
        latin: 'Allāhumma laka l-ḥamd annaka llāhu r-raḥmānu r-raḥīm.\nLaka l-ḥamdu kamā yanbaghī li-jalāli wajhika wa ʿaẓīmi sulṭānik.\nLaka l-ḥamdu bi-l-īmāni wa l-islāmi wa l-qurʾān.',
        es: 'Oh Allah, Tuya es la alabanza, pues Tú eres Allah, el Clemente, el Misericordioso.\nTuya es la alabanza como corresponde a la majestad de Tu rostro y la grandeza de Tu poder.\nTuya es la alabanza por la fe, el Islam y el Corán.\nSegún IslamWeb, quien dice algo así ya ha alabado a Allah.',
        src: [iw(25586)] },
      { tAr: 'التَّمْجِيدُ: تَكْثِيرُ الثَّنَاءِ', tEs: 'El tamyīd: multiplicar la alabanza',
        ar: 'يُقْصَدُ بِالتَّمْجِيدِ التَّوَسُّعُ فِي الثَّنَاءِ عَلَى اللَّهِ، كَأَنْ يَقُولَ الْعَبْدُ: أَنْتَ الرَّحْمَنُ الرَّحِيمُ، أَنْتَ الْجَوَادُ الْكَرِيمُ، بِيَدِكَ الْخَيْرُ.',
        latin: 'Anta r-raḥmānu r-raḥīm, anta l-jawādu l-karīm, bi-yadika l-khayr.',
        es: 'Según el Sheij Ibn Baz, tamyīd es ampliar la alabanza: «Tú eres el Clemente, el Misericordioso, el Generoso, el Dadivoso; en Tu mano está el bien», y seguir enumerando Sus bondades.',
        src: [bb(17025)] },
      { tAr: 'ثَنَاءٌ وَتَوْبَةٌ: دُعَاءُ يُونُسَ عَلَيْهِ السَّلَامُ', tEs: 'Alabanza y arrepentimiento: súplica de Yunus',
        ar: '﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾',
        latin: 'Lā ilāha illā anta subḥānaka innī kuntu mina ẓ-ẓālimīn.',
        es: 'No hay más dios que Tú, glorificado seas; yo fui de los injustos. (Corán 21:87). Ejemplo coránico de empezar la súplica con alabanza.',
        src: [{ n: 'إسلام ويب – إتحاف السادة المتقين', e: 'IslamWeb – Ithaf as-sada al-muttaqin', u: 'https://www.islamweb.net/ar/library/content/411/3599/%D8%A2%D8%AF%D8%A7%D8%A8-%D8%A7%D9%84%D8%AF%D8%B9%D8%A7%D8%A1' }] },
      { tAr: 'ثُمَّ الصَّلَاةُ عَلَى النَّبِيِّ ﷺ', tEs: 'Después, la bendición sobre el Profeta ﷺ',
        ar: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.',
        latin: 'Allāhumma ṣalli ʿalā Muḥammad wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka ḥamīdun majīd. Allāhumma bārik ʿalā Muḥammad wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka ḥamīdun majīd.',
        es: 'Según Ibn Baz es la fórmula más completa; se dice tras la alabanza y antes de la petición.',
        src: [bb(13861)] }
    ]
  };

  var DATA = { azkar: AZKAR, adya: ADYA, ruqyah: RUQYAH, thanaa: THANAA };

  /* ───────────── Estilos propios (no dependen del CSS purgado de Tailwind) ───────────── */
  var CSS = [
    '.adab-view{display:block}.adab-view.hidden{display:none}',
    '.adab-head{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding-bottom:.75rem;border-bottom:1px solid #e2e8f0;margin-bottom:1rem}',
    'html.dark .adab-head{border-color:#1e293b}',
    '.adab-back{font-size:.875rem;font-weight:600;color:#047857;background:#ecfdf5;border:1px solid #a7f3d0;padding:.375rem .75rem;border-radius:.75rem;cursor:pointer}',
    'html.dark .adab-back{color:#34d399;background:rgba(2,44,34,.5);border-color:#065f46}',
    '.adab-title{flex:1;text-align:center;font-weight:700;font-size:1.05rem;line-height:1.5;color:#1e293b}',
    'html.dark .adab-title{color:#f1f5f9}',
    '.adab-intro{font-size:.85rem;line-height:1.7;color:#475569;margin-bottom:1rem}',
    'html.dark .adab-intro{color:#94a3b8}',
    '.adab-card{background:#fff;border:1px solid #e2e8f0;border-radius:1rem;padding:1rem;margin-bottom:.9rem;box-shadow:0 1px 2px rgba(0,0,0,.05)}',
    'html.dark .adab-card{background:#1e293b;border-color:#334155}',
    '.adab-card h3{text-align:center;font-weight:700;font-size:.95rem;color:#047857;margin:0 0 .6rem}',
    'html.dark .adab-card h3{color:#34d399}',
    '.adab-ar{line-height:2.1;text-align:center;direction:rtl;font-weight:700;color:#0f172a;white-space:pre-line}',
    'html.dark .adab-ar{color:#f1f5f9}',
    '.adab-latin{font-style:italic;font-weight:600;color:#475569;margin-top:.6rem;direction:ltr;text-align:center;white-space:pre-line}',
    'html.dark .adab-latin{color:#cbd5e1}',
    '.adab-es{font-weight:700;color:#334155;margin-top:.6rem;direction:ltr;text-align:center;white-space:pre-line}',
    'html.dark .adab-es{color:#cbd5e1}',
    '.adab-src{font-size:.75rem;margin-top:.7rem;padding-top:.5rem;border-top:1px dashed #cbd5e1;color:#64748b}',
    'html.dark .adab-src{border-color:#475569;color:#94a3b8}',
    '.adab-src a{color:#0369a1;text-decoration:underline;margin-inline-end:.6rem}',
    'html.dark .adab-src a{color:#7dd3fc}',
    '.adab-go{margin-top:.8rem;width:100%;padding:.7rem 1rem;border-radius:.9rem;border:0;color:#fff;font-weight:700;cursor:pointer;background:linear-gradient(135deg,#b45309,#d97706)}',
    '.adab-entry{width:100%;padding:.9rem 1rem;border-radius:1rem;border:1px solid rgba(255,255,255,.15);color:#fff;font-weight:700;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:.5rem;background:linear-gradient(135deg,#b45309,#d97706);box-shadow:0 2px 6px rgba(0,0,0,.18)}',
    '.adab-entry small{display:block;font-weight:400;opacity:.9;margin-top:.15rem}'
  ].join('\n');

  function isEs() { return typeof currentLang !== 'undefined' && currentLang === 'es'; }
  function sec() { return typeof currentSection !== 'undefined' ? currentSection : null; }

  function mk(tag, cls, text) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text != null) el.textContent = text;
    return el;
  }

  var views = {};
  // Los estilos se inyectan al cargar el script: el botón de entrada se pinta antes de abrir ninguna pantalla.
  (function () {
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);
  })();
  function ensureViews() {
    if (views.adab) return;
    var anchor = document.getElementById('categoryListView');
    var parent = anchor && anchor.parentNode;
    if (!parent) return;
    ['adab', 'thanaa'].forEach(function (k) {
      var v = mk('div', 'adab-view hidden');
      v.id = k + 'View';
      parent.insertBefore(v, anchor.nextSibling);
      views[k] = v;
    });
  }

  function renderCards(view, data, kind) {
    var es = isEs();
    view.innerHTML = '';
    var head = mk('div', 'adab-head');
    var back = mk('button', 'adab-back', es ? 'Volver' : 'رجوع');
    back.type = 'button';
    back.onclick = function () { window.history.back(); };
    var title = mk('h2', 'adab-title', es ? data.titleEs : data.titleAr);
    head.appendChild(back);
    head.appendChild(title);
    head.appendChild(mk('div')).style.width = '4rem';
    view.appendChild(head);
    view.appendChild(mk('p', 'adab-intro', es ? data.introEs : data.introAr));

    data.cards.forEach(function (c) {
      var card = mk('div', 'adab-card');
      card.appendChild(mk('h3', '', es ? c.tEs : c.tAr));
      card.appendChild(mk('div', 'adab-ar custom-text-size', c.ar));
      if (es && c.latin) card.appendChild(mk('div', 'adab-latin latin-text-style', c.latin));
      if (es) card.appendChild(mk('div', 'adab-es es-text-style', c.es));
      var srcs = (c.src || []).concat(c.srcExtra || []);
      if (srcs.length) {
        var box = mk('div', 'adab-src');
        box.appendChild(mk('span', '', es ? 'Fuente: ' : 'المصدر: '));
        srcs.forEach(function (s) {
          var a = mk('a', '', es ? s.e : s.n);
          a.href = s.u; a.target = '_blank'; a.rel = 'noopener';
          box.appendChild(a);
        });
        card.appendChild(box);
      }
      if (c.link === 'thanaa') {
        var go = mk('button', 'adab-go', es ? 'Ver las fórmulas de alabanza (الثناء) ←' : 'عَرْضُ صِيَغِ الثَّنَاءِ ←');
        go.type = 'button';
        go.onclick = function () { openThanaa(); };
        card.appendChild(go);
      }
      view.appendChild(card);
    });
  }

  function hideMine() {
    if (views.adab) views.adab.classList.add('hidden');
    if (views.thanaa) views.thanaa.classList.add('hidden');
  }

  function show(kind, push) {
    ensureViews();
    if (!views.adab) return;
    var viewName = kind === 'thanaa' ? 'thanaa' : 'adab';
    window.hideAllViews();
    var data = kind === 'thanaa' ? THANAA : DATA[kind];
    if (!data) return;
    renderCards(views[viewName], data, kind);
    views[viewName].classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (push && window.history && window.history.pushState) {
      try {
        window.history.pushState({ view: viewName, kind: kind, sec: sec() }, '', '#' + viewName + '-' + kind);
      } catch (e) {}
    }
  }

  function openAdab(kind) { show(kind, true); }
  function openThanaa() { show('thanaa', true); }
  window.openAdab = openAdab;
  window.openThanaa = openThanaa;

  /* ───────────── Enganches en app.js (sin editarlo) ───────────── */
  var origHide = window.hideAllViews;
  window.hideAllViews = function () {
    origHide.apply(this, arguments);
    hideMine();
  };

  var origRender = window.renderButtonsGrid;
  window.renderButtonsGrid = function () {
    origRender.apply(this, arguments);
    var s = sec();
    var grid = document.getElementById('buttonsGrid');
    if (!grid || (s !== 'azkar' && s !== 'adya' && s !== 'ruqyah')) return;
    var data = DATA[s];
    var es = isEs();
    var btn = mk('button', 'adab-entry');
    btn.type = 'button';
    var left = mk('div');
    left.style.textAlign = es ? 'left' : 'right';
    left.appendChild(mk('span', '', es ? data.titleEs : data.titleAr));
    left.appendChild(mk('small', '', data.cards.length + (es ? ' consejos' : ' نَصِيحَةً')));
    btn.appendChild(left);
    btn.appendChild(mk('span', '', es ? '→' : '←'));
    btn.onclick = function () { openAdab(s); };
    grid.insertBefore(btn, grid.firstChild);
  };

  var origLang = window.applyLanguageUI;
  window.applyLanguageUI = function () {
    origLang.apply(this, arguments);
    ['adab', 'thanaa'].forEach(function (k) {
      var v = views[k];
      if (v && !v.classList.contains('hidden')) {
        var st = window.history.state || {};
        renderCards(v, k === 'thanaa' ? THANAA : DATA[st.kind || sec()], st.kind);
      }
    });
  };

  // Botón atrás / adelante del navegador y del móvil. Se ejecuta antes que el de app.js.
  window.addEventListener('popstate', function (e) {
    var st = e.state;
    if (st && (st.view === 'adab' || st.view === 'thanaa')) {
      e.stopImmediatePropagation();
      show(st.view === 'thanaa' ? 'thanaa' : st.kind, false);
    }
  }, true);
})();
