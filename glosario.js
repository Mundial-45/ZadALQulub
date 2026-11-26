// glosario.js — glosario de términos islámicos (árabe, transliteración y definición en español y árabe).
const glosarioData = [
  {
    "id": "glosario_intro",
    "titleAr": "مُقَدِّمَةٌ",
    "titleEs": "Introducción",
    "items": [
      {
        "isInfo": true,
        "text": "مُعْجَمُ الْمُصْطَلَحَاتِ الْإِسْلَامِيَّةِ",
        "explanationAr": "• يَجْمَعُ هَذَا الْمُعْجَمُ الْمُصْطَلَحَاتِ الْإِسْلَامِيَّةَ الَّتِي يَكْثُرُ وُرُودُهَا فِي الْعَقِيدَةِ وَالْعِبَادَاتِ وَالتَّزْكِيَةِ وَالْأَحْكَامِ وَالسِّيرَةِ، مَعَ شَرْحٍ مُخْتَصَرٍ لِكُلِّ مُصْطَلَحٍ.\n• وَاعْتُمِدَ فِي شَرْحِ الْمُصْطَلَحَاتِ عَلَى: إِسْلَام وَيْب (islamweb.net)، وَمَوْقِعِ الشَّيْخِ ابْنِ بَازٍ (binbaz.org.sa)، وَالدُّرَرِ السَّنِيَّةِ (dorar.net)، وَالْإِسْلَام سُؤَال وَجَوَاب (islamqa.info)، وَقَدْ وُثِّقَ كُلُّ مُصْطَلَحٍ مِنْ مَصْدَرٍ مِنْهَا.\n• وَلَا يُكَرَّرُ رَابِطُ الْمَصْدَرِ فِي كُلِّ بِطَاقَةٍ؛ فَالْمَصَادِرُ مَذْكُورَةٌ هُنَا.",
        "explanationEs": "• Este glosario reúne los términos islámicos más frecuentes en la creencia, la adoración, la purificación del alma, las normas y la biografía del Profeta ﷺ, con una explicación breve de cada uno.\n• Las explicaciones de los términos se basan en: IslamWeb (islamweb.net), la web del Sheij Ibn Baz (binbaz.org.sa), Al-Durar al-Saniyya (dorar.net) e IslamQA (islamqa.info); cada término se verificó en alguna de estas fuentes.\n• El enlace de la fuente no se repite en cada tarjeta: las fuentes se indican aquí."
      }
    ]
  },
  {
    "id": "glosario_aqida",
    "titleAr": "الْعَقِيدَةُ وَالْإِيمَانُ",
    "titleEs": "Creencia y fe",
    "items": [
      {
        "itemNumber": 1,
        "text": "التَّوْحِيدُ",
        "latin": "Tawḥīd",
        "explanationAr": "إِفْرَادُ اللَّهِ تَعَالَى بِالرُّبُوبِيَّةِ وَالْأُلُوهِيَّةِ وَالْأَسْمَاءِ وَالصِّفَاتِ، وَهُوَ أَصْلُ الدِّينِ.",
        "explanationEs": "Tawhid (unicidad de Allah)\nCreer y afirmar que Allah es Uno: único Señor y Creador, el único que merece ser adorado, y único en Sus Nombres y Atributos. Es la base del Islam.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/2495/"
      },
      {
        "itemNumber": 2,
        "text": "الشِّرْكُ",
        "latin": "Shirk",
        "explanationAr": "تَسْوِيَةُ غَيْرِ اللَّهِ بِاللَّهِ فِيمَا هُوَ مِنْ خَصَائِصِ اللَّهِ، كَالدُّعَاءِ وَالْخَوْفِ وَالرَّجَاءِ وَالتَّوَكُّلِ، وَهُوَ أَعْظَمُ الذُّنُوبِ.",
        "explanationEs": "Shirk (asociar)\nIgualar a otro con Allah en lo que es exclusivo de Allah, como la súplica, el temor, la esperanza o la confianza. Es el pecado más grave.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/21610/"
      },
      {
        "itemNumber": 3,
        "text": "الْإِسْلَامُ",
        "latin": "Islām",
        "explanationAr": "الِاسْتِسْلَامُ لِلَّهِ بِالتَّوْحِيدِ، وَالِانْقِيَادُ لَهُ بِالطَّاعَةِ، وَالْبَرَاءَةُ مِنَ الشِّرْكِ، وَأَرْكَانُهُ خَمْسَةٌ.",
        "explanationEs": "Islam\nSometerse a Allah con el tawhid, obedecerle y apartarse del shirk. Sus cinco pilares son: el testimonio de fe, la oración, el zakat, el ayuno de Ramadán y la peregrinación.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/audios/3930/"
      },
      {
        "itemNumber": 4,
        "text": "الْإِيمَانُ",
        "latin": "Īmān",
        "explanationAr": "قَوْلٌ بِاللِّسَانِ وَاعْتِقَادٌ بِالْقَلْبِ وَعَمَلٌ بِالْجَوَارِحِ، يَزِيدُ بِالطَّاعَةِ وَيَنْقُصُ بِالْمَعْصِيَةِ، وَأَرْكَانُهُ سِتَّةٌ.",
        "explanationEs": "Iman (fe)\nCreencia del corazón, palabra de la lengua y obra de los miembros; aumenta con la obediencia y disminuye con la desobediencia. Sus seis pilares: creer en Allah, Sus ángeles, Sus libros, Sus mensajeros, el Último Día y el decreto.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/236260/"
      },
      {
        "itemNumber": 5,
        "text": "الْإِحْسَانُ",
        "latin": "Iḥsān",
        "explanationAr": "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ.",
        "explanationEs": "Ihsan (excelencia)\nAdorar a Allah como si Le vieras, pues aunque tú no Le veas, Él te ve. Es el grado más alto de la religión.",
        "sourceName": "الدرر السنية (حديث جبريل)",
        "sourceNameEs": "Al-Durar al-Saniyya (hadiz de Yibril)",
        "sourceUrl": "https://dorar.net/hadith/sharh/34458"
      },
      {
        "itemNumber": 6,
        "text": "الْعَقِيدَةُ",
        "latin": "ʿAqīda",
        "explanationAr": "جَزْمُ الْقَلْبِ وَعَقْدُهُ عَلَى تَوْحِيدِ اللَّهِ تَعَالَى وَمَا وَجَبَ الْإِيمَانُ بِهِ دُونَ شَكٍّ.",
        "explanationEs": "Aqida (credo)\nFirmeza y convicción del corazón en la unicidad de Allah y en todo aquello en lo que es obligatorio creer, sin ninguna duda.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/aqeeda/10/"
      },
      {
        "itemNumber": 7,
        "text": "الشَّهَادَتَانِ",
        "latin": "Ash-shahādatān",
        "explanationAr": "شَهَادَةُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَهُمَا مِفْتَاحُ الْإِسْلَامِ.",
        "explanationEs": "Las dos shahadas\nTestimoniar que no hay divinidad digna de adoración excepto Allah y que Muhammad es el Mensajero de Allah. Es la puerta de entrada al Islam.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/audios/3798/"
      },
      {
        "itemNumber": 8,
        "text": "الْكُفْرُ",
        "latin": "Kufr",
        "explanationAr": "مَا يُضَادُّ الْإِيمَانَ مِنَ الْأَقْوَالِ وَالْأَفْعَالِ وَالِاعْتِقَادَاتِ.",
        "explanationEs": "Kufr (incredulidad)\nTodo lo que se opone a la fe: palabras, actos o creencias.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/12800/"
      },
      {
        "itemNumber": 9,
        "text": "النِّفَاقُ",
        "latin": "Nifāq",
        "explanationAr": "إِظْهَارُ الْإِسْلَامِ وَإِبْطَانُ خِلَافِهِ، وَهُوَ نِفَاقٌ اعْتِقَادِيٌّ وَنِفَاقٌ عَمَلِيٌّ.",
        "explanationEs": "Nifaq (hipocresía)\nMostrar el Islam por fuera y ocultar lo contrario en el corazón. Hay hipocresía en la creencia y en las obras.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/94258/"
      },
      {
        "itemNumber": 10,
        "text": "التَّقْوَى",
        "latin": "Taqwā",
        "explanationAr": "أَنْ تَجْعَلَ بَيْنَكَ وَبَيْنَ عَذَابِ اللَّهِ وِقَايَةً بِفِعْلِ أَوَامِرِهِ وَاجْتِنَابِ نَوَاهِيهِ.",
        "explanationEs": "Taqwa (temor consciente de Allah)\nProtegerse del castigo de Allah cumpliendo lo que ordena y apartándose de lo que prohíbe.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/11844/"
      },
      {
        "itemNumber": 11,
        "text": "التَّوَكُّلُ",
        "latin": "Tawakkul",
        "explanationAr": "صِدْقُ اعْتِمَادِ الْقَلْبِ عَلَى اللَّهِ فِي جَلْبِ الْمَنَافِعِ وَدَفْعِ الْمَضَارِّ، مَعَ الْأَخْذِ بِالْأَسْبَابِ.",
        "explanationEs": "Tawakkul (confianza en Allah)\nApoyarse de corazón en Allah para obtener el bien y alejar el mal, poniendo a la vez los medios lícitos.",
        "sourceName": "إسلام ويب (ابن رجب)",
        "sourceNameEs": "IslamWeb (Ibn Rayab)",
        "sourceUrl": "https://www.islamweb.net/ar/article/238396/"
      },
      {
        "itemNumber": 12,
        "text": "الْقَدَرُ",
        "latin": "Qadar",
        "explanationAr": "الْإِيمَانُ بِأَنَّ اللَّهَ عَلِمَ كُلَّ شَيْءٍ وَكَتَبَهُ وَشَاءَهُ وَخَلَقَهُ، وَهَذِهِ مَرَاتِبُ الْقَدَرِ الْأَرْبَعُ، وَأَنَّ لِلْعَبْدِ مَشِيئَةً وَاخْتِيَارًا تَابِعَيْنِ لِمَشِيئَةِ اللَّهِ.",
        "explanationEs": "Qadar (el decreto divino)\nCreer que Allah lo sabe todo, lo escribió, lo quiere y lo crea; son los cuatro grados del decreto. El ser humano tiene voluntad y elección, sometidas a la voluntad de Allah.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/60787/"
      },
      {
        "itemNumber": 13,
        "text": "الْغَيْبُ",
        "latin": "Ghayb",
        "explanationAr": "كُلُّ مَا غَابَ عَنِ الْعَبْدِ فَلَا يُعْلَمُ إِلَّا بِالْوَحْيِ، وَمِنَ الْإِيمَانِ بِالْغَيْبِ: الْإِيمَانُ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ، وَلَا يَعْلَمُ الْغَيْبَ إِلَّا اللَّهُ.",
        "explanationEs": "Ghayb (lo oculto)\nTodo lo que está oculto al ser humano y solo se conoce por la revelación. Creer en lo oculto incluye creer en Allah, Sus ángeles, Sus libros, Sus mensajeros y el Último Día. Solo Allah conoce lo oculto.",
        "sourceName": "الدرر السنية (موسوعة التفسير)",
        "sourceNameEs": "Al-Durar al-Saniyya (Enciclopedia de tafsir)",
        "sourceUrl": "https://dorar.net/tafseer/2/1"
      },
      {
        "itemNumber": 14,
        "text": "الْمَلَائِكَةُ",
        "latin": "Malāʾika",
        "explanationAr": "عَالَمٌ غَيْبِيٌّ خَلَقَهُمُ اللَّهُ مِنْ نُورٍ، لَا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ.",
        "explanationEs": "Los ángeles\nCriaturas de luz creadas por Allah que nunca Le desobedecen y cumplen lo que se les ordena, como Yibril, encargado de la revelación.",
        "sourceName": "الدرر السنية (ابن عثيمين)",
        "sourceNameEs": "Al-Durar al-Saniyya (Ibn Uzaymin)",
        "sourceUrl": "https://dorar.net/aqeeda/1063"
      },
      {
        "itemNumber": 15,
        "text": "الْجِنُّ",
        "latin": "Jinn",
        "explanationAr": "مَخْلُوقَاتٌ عَاقِلَةٌ مُكَلَّفَةٌ، مَخْلُوقَةٌ مِنْ نَارٍ، مُسْتَتِرَةٌ عَنِ الْحَوَاسِّ، مِنْهُمُ الْمُؤْمِنُ وَالْكَافِرُ، وَهُمْ فِي الْآخِرَةِ مُحَاسَبُونَ.",
        "explanationEs": "Los yinn\nCriaturas racionales y responsables, creadas de fuego e invisibles a los sentidos; entre ellos hay creyentes e incrédulos, y serán juzgados en la Otra Vida.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/aqeeda/1232/"
      },
      {
        "itemNumber": 16,
        "text": "الشَّيْطَانُ",
        "latin": "Shayṭān",
        "explanationAr": "كُلُّ عَاتٍ مُتَمَرِّدٍ مِنَ الْجِنِّ وَالْإِنْسِ، وَأَصْلُهُمْ إِبْلِيسُ عَدُوُّ الْإِنْسَانِ.",
        "explanationEs": "Shaitán (Satanás)\nTodo rebelde de entre los yinn y los humanos; en especial Iblis, el enemigo declarado del ser humano, que incita al mal.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/en/aqadia/38"
      },
      {
        "itemNumber": 17,
        "text": "الْآخِرَةُ",
        "latin": "Al-Ākhira",
        "explanationAr": "الدَّارُ الْبَاقِيَةُ بَعْدَ الدُّنْيَا، وَيَدْخُلُ فِي الْإِيمَانِ بِهَا كُلُّ مَا يَكُونُ بَعْدَ الْمَوْتِ: مِنَ الْقَبْرِ وَالْبَعْثِ وَالْحِسَابِ وَالْجَزَاءِ وَالْجَنَّةِ وَالنَّارِ.",
        "explanationEs": "La Otra Vida\nLa morada eterna después de esta vida. Creer en ella incluye todo lo que sucede tras la muerte: la tumba, la resurrección, el Juicio, la recompensa, el Paraíso y el Infierno.",
        "sourceName": "الدرر السنية (السعدي)",
        "sourceNameEs": "Al-Durar al-Saniyya (As-Sa'di)",
        "sourceUrl": "https://dorar.net/aqeeda/1664/"
      },
      {
        "itemNumber": 18,
        "text": "يَوْمُ الْقِيَامَةِ",
        "latin": "Yawm al-Qiyāma",
        "explanationAr": "الْيَوْمُ الَّذِي يُبْعَثُ النَّاسُ فِيهِ لِلْحِسَابِ وَالْجَزَاءِ، وَهُوَ الْيَوْمُ الْآخِرُ.",
        "explanationEs": "Día de la Resurrección\nEl día en que las personas serán resucitadas para el Juicio y la recompensa; es el Último Día.",
        "sourceName": "الدرر السنية (ابن عثيمين)",
        "sourceNameEs": "Al-Durar al-Saniyya (Ibn Uzaymin)",
        "sourceUrl": "https://dorar.net/aqeeda/1664/"
      },
      {
        "itemNumber": 19,
        "text": "الْجَنَّةُ",
        "latin": "Janna",
        "explanationAr": "الدَّارُ الَّتِي أَعَدَّهَا اللَّهُ تَعَالَى لِأَوْلِيَائِهِ الْمُؤْمِنِينَ الْمُتَّقِينَ، فِيهَا مَا تَشْتَهِيهِ الْأَنْفُسُ وَتَلَذُّ الْأَعْيُنُ.",
        "explanationEs": "El Paraíso\nLa morada que Allah ha preparado para Sus aliados, los creyentes temerosos; en ella hay todo lo que desean las almas y deleita a los ojos.",
        "sourceName": "الدرر السنية (ابن عثيمين)",
        "sourceNameEs": "Al-Durar al-Saniyya (Ibn Uzaymin)",
        "sourceUrl": "https://dorar.net/aqeeda/2241/"
      },
      {
        "itemNumber": 20,
        "text": "جَهَنَّمُ",
        "latin": "Jahannam",
        "explanationAr": "الدَّارُ الَّتِي أَعَدَّهَا اللَّهُ لِلْكَافِرِينَ بِهِ الْمُكَذِّبِينَ لِرُسُلِهِ، وَلِلْمُتَمَرِّدِينَ عَلَى طَاعَتِهِ، فَيُعَذِّبُهُمْ فِيهَا، أَعَاذَنَا اللَّهُ مِنْهَا.",
        "explanationEs": "El Infierno\nLa morada que Allah ha preparado para quienes no creen en Él y desmienten a Sus mensajeros, y para los rebeldes a Su obediencia, donde serán castigados. Nos refugiamos en Allah de ella.",
        "sourceName": "الدرر السنية (ابن باز)",
        "sourceNameEs": "Al-Durar al-Saniyya (Ibn Baz)",
        "sourceUrl": "https://dorar.net/aqeeda/2366/"
      },
      {
        "itemNumber": 108,
        "text": "الْبَرْزَخُ",
        "latin": "Al-Barzakh",
        "explanationAr": "الْمَرْحَلَةُ الَّتِي بَيْنَ مَوْتِ الْإِنْسَانِ وَبَعْثِهِ يَوْمَ الْقِيَامَةِ.",
        "explanationEs": "El Barzaj\nLa etapa entre la muerte de la persona y su resurrección el Día del Juicio. En ella se vive la vida de la tumba.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/4314/"
      },
      {
        "itemNumber": 109,
        "text": "عَذَابُ الْقَبْرِ وَنَعِيمُهُ",
        "latin": "ʿAdhāb al-qabr wa naʿīmuh",
        "explanationAr": "مَا يَلْقَاهُ الْمَيِّتُ فِي قَبْرِهِ مِنْ عَذَابٍ أَوْ نَعِيمٍ، وَهُوَ ثَابِتٌ بِالْقُرْآنِ وَالسُّنَّةِ.",
        "explanationEs": "El castigo y el deleite de la tumba\nLo que el difunto encuentra en su tumba, castigo o bienestar. Es una creencia confirmada por el Corán y la Sunna.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/16778/"
      },
      {
        "itemNumber": 110,
        "text": "الصِّرَاطُ",
        "latin": "Aṣ-ṣirāṭ",
        "explanationAr": "جِسْرٌ مَنْصُوبٌ عَلَى جَهَنَّمَ يَمُرُّ عَلَيْهِ النَّاسُ يَوْمَ الْقِيَامَةِ، وَيَنْجُو مَنْ نَجَّاهُ اللَّهُ.",
        "explanationEs": "El Sirat (el puente)\nPuente tendido sobre el Infierno que todos deben cruzar el Día del Juicio. Se salva quien Allah salve.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/229612/"
      },
      {
        "itemNumber": 111,
        "text": "الْمِيزَانُ",
        "latin": "Al-mīzān",
        "explanationAr": "الْمِيزَانُ الَّذِي تُوزَنُ بِهِ أَعْمَالُ الْعِبَادِ يَوْمَ الْقِيَامَةِ بِالْعَدْلِ.",
        "explanationEs": "La Balanza\nLa balanza con la que se pesan con justicia las obras de los siervos el Día del Juicio.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/229612/"
      },
      {
        "itemNumber": 112,
        "text": "الْحَوْضُ",
        "latin": "Al-ḥawḍ",
        "explanationAr": "حَوْضُ نَبِيِّنَا مُحَمَّدٍ ﷺ يَرِدُ عَلَيْهِ أَهْلُ الْإِيمَانِ يَوْمَ الْقِيَامَةِ.",
        "explanationEs": "El Estanque (Hawd)\nEl estanque del Profeta Muhammad ﷺ al que acuden los creyentes el Día del Juicio.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/229612/"
      },
      {
        "itemNumber": 113,
        "text": "الشَّفَاعَةُ",
        "latin": "Ash-shafāʿa",
        "explanationAr": "طَلَبُ الْخَيْرِ لِلْغَيْرِ مِنَ اللَّهِ، وَلَا تَكُونُ إِلَّا بِإِذْنِهِ سُبْحَانَهُ وَرِضَاهُ عَمَّنْ يُشْفَعُ لَهُ.",
        "explanationEs": "La intercesión\nPedir a Allah un bien para otro. Solo ocurre con el permiso de Allah y su complacencia con aquel por quien se intercede.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/22872/"
      },
      {
        "itemNumber": 114,
        "text": "الرُّوحُ",
        "latin": "Ar-rūḥ",
        "explanationAr": "سِرُّ الْحَيَاةِ فِي الْجَسَدِ، وَحَقِيقَتُهَا مِنْ عِلْمِ اللَّهِ تَعَالَى: ﴿قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي﴾.",
        "explanationEs": "El alma (rūḥ)\nEl principio de la vida en el cuerpo. Su verdadera naturaleza pertenece al conocimiento de Allah (Corán 17:85).",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/150005/"
      },
      {
        "itemNumber": 115,
        "text": "الْقَضَاءُ",
        "latin": "Al-qaḍāʾ",
        "explanationAr": "حُكْمُ اللَّهِ النَّافِذُ فِي خَلْقِهِ، وَيَتَّصِلُ بِالْقَدَرِ، وَهُوَ تَقْدِيرُهُ لِلْأَشْيَاءِ قَبْلَ وُقُوعِهَا.",
        "explanationEs": "El decreto (qaḍāʾ)\nLa sentencia de Allah que se cumple en su creación. Está unido al qadar, su determinación de las cosas antes de que sucedan.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/20434/"
      },
      {
        "itemNumber": 116,
        "text": "اللَّوْحُ الْمَحْفُوظُ",
        "latin": "Al-lawḥ al-maḥfūẓ",
        "explanationAr": "كِتَابٌ عِنْدَ اللَّهِ كَتَبَ فِيهِ مَقَادِيرَ الْخَلْقِ، مَحْفُوظٌ مِنَ التَّغْيِيرِ وَالتَّبْدِيلِ.",
        "explanationEs": "La Tabla Protegida\nEl libro junto a Allah donde están escritos los destinos de la creación, a salvo de todo cambio.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/60787/"
      },
      {
        "itemNumber": 117,
        "text": "الْفِطْرَةُ",
        "latin": "Al-fiṭra",
        "explanationAr": "الْخِلْقَةُ الَّتِي خَلَقَ اللَّهُ النَّاسَ عَلَيْهَا، وَفِيهَا الِاسْتِعْدَادُ لِمَعْرِفَةِ اللَّهِ وَتَوْحِيدِهِ.",
        "explanationEs": "La fitra (naturaleza innata)\nLa disposición natural con la que Allah creó a las personas, inclinada a reconocerle y a creer en su unicidad.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/214030/"
      },
      {
        "itemNumber": 118,
        "text": "النَّبِيُّ وَالرَّسُولُ",
        "latin": "An-nabiyy wa ar-rasūl",
        "explanationAr": "النَّبِيُّ مَنْ أُوحِيَ إِلَيْهِ، وَالرَّسُولُ نَبِيٌّ أُمِرَ بِتَبْلِيغِ الرِّسَالَةِ؛ فَكُلُّ رَسُولٍ نَبِيٌّ وَلَيْسَ كُلُّ نَبِيٍّ رَسُولًا.",
        "explanationEs": "El Profeta y el Mensajero\nEl nabí recibe revelación; el rasūl es un nabí al que además se ordena transmitir el mensaje. Todo rasūl es nabí, pero no todo nabí es rasūl.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/11104/"
      }
    ]
  },
  {
    "id": "glosario_ibada",
    "titleAr": "الْعِبَادَاتُ",
    "titleEs": "Actos de adoración",
    "items": [
      {
        "itemNumber": 21,
        "text": "الْعِبَادَةُ",
        "latin": "ʿIbāda",
        "explanationAr": "اسْمٌ جَامِعٌ لِكُلِّ مَا يُحِبُّهُ اللَّهُ وَيَرْضَاهُ مِنَ الْأَقْوَالِ وَالْأَعْمَالِ الظَّاهِرَةِ وَالْبَاطِنَةِ.",
        "explanationEs": "Ibada (adoración)\nTodo lo que Allah ama y Le complace, en palabras y obras, visibles u ocultas: la oración, el dhikr, la buena conducta, etc.",
        "sourceName": "إسلام ويب (ابن تيمية)",
        "sourceNameEs": "IslamWeb (Ibn Taymiyya)",
        "sourceUrl": "https://audio.islamweb.net/audio/index.php?page=FullContent&full=1&audioid=210822"
      },
      {
        "itemNumber": 22,
        "text": "الطَّهَارَةُ",
        "latin": "Ṭahāra",
        "explanationAr": "رَفْعُ الْحَدَثِ وَمَا فِي مَعْنَاهُ، وَزَوَالُ الْخَبَثِ، وَهِيَ شَرْطٌ لِصِحَّةِ الصَّلَاةِ.",
        "explanationEs": "Tahara (purificación)\nEliminar el estado de impureza ritual (y lo que equivale a ello) y quitar la suciedad. Es condición para que la oración sea válida.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/3/"
      },
      {
        "links": [{"section": "azkar", "group": "wudu", "ar": "أَذْكَارُ الْوُضُوءِ", "es": "Azkar de las abluciones (Wudu)"}],
        "itemNumber": 23,
        "text": "الْوُضُوءُ",
        "latin": "Wuḍūʾ",
        "explanationAr": "التَّعَبُّدُ لِلَّهِ عَزَّ وَجَلَّ بِغَسْلِ أَعْضَاءٍ مَخْصُوصَةٍ عَلَى صِفَةٍ مَخْصُوصَةٍ.",
        "explanationEs": "Wudu (ablución menor)\nAdorar a Allah lavando partes concretas del cuerpo de una forma concreta.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/236/"
      },
      {
        "itemNumber": 24,
        "text": "الْغُسْلُ",
        "latin": "Ghusl",
        "explanationAr": "تَعْمِيمُ الْبَدَنِ بِالْمَاءِ بِنِيَّةٍ، وَيَجِبُ مِنَ الْجَنَابَةِ وَالْحَيْضِ وَالنِّفَاسِ.",
        "explanationEs": "Ghusl (ablución mayor)\nLavar todo el cuerpo con agua con intención, obligatorio, por ejemplo, tras la relación conyugal, la menstruación o el postparto.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/461/"
      },
      {
        "itemNumber": 25,
        "text": "التَّيَمُّمُ",
        "latin": "Tayammum",
        "explanationAr": "التَّعَبُّدُ لِلَّهِ تَعَالَى بِقَصْدِ الصَّعِيدِ الطَّيِّبِ لِمَسْحِ الْوَجْهِ وَالْيَدَيْنِ بِهِ، عِنْدَ فَقْدِ الْمَاءِ أَوِ الْعَجْزِ عَنِ اسْتِعْمَالِهِ.",
        "explanationEs": "Tayammum (ablución seca)\nAdorar a Allah dirigiéndose a tierra pura para pasarla por la cara y las manos, cuando no hay agua o no se puede usar.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/533"
      },
      {
        "itemNumber": 26,
        "text": "الصَّلَاةُ",
        "latin": "Ṣalāt",
        "explanationAr": "التَّعَبُّدُ لِلَّهِ تَعَالَى بِأَقْوَالٍ وَأَفْعَالٍ مَخْصُوصَةٍ، مُفْتَتَحَةٍ بِالتَّكْبِيرِ، مُخْتَتَمَةٍ بِالتَّسْلِيمِ.",
        "explanationEs": "Salat (la oración)\nAdorar a Allah con palabras y actos concretos que empiezan con el takbir y terminan con el taslim. Hay cinco oraciones obligatorias al día.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/672/"
      },
      {
        "itemNumber": 27,
        "text": "الْقِبْلَةُ",
        "latin": "Qibla",
        "explanationAr": "الْكَعْبَةُ الْمُشَرَّفَةُ الَّتِي أَمَرَ اللَّهُ بِالتَّوَجُّهِ إِلَيْهَا فِي الصَّلَاةِ، وَاسْتِقْبَالُهَا شَرْطٌ لِصِحَّةِ الصَّلَاةِ.",
        "explanationEs": "Qibla\nLa Kaaba, hacia la que Allah ordenó orientarse en la oración; orientarse hacia ella es condición para que la oración sea válida.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/857/"
      },
      {
        "links": [{"section": "azkar", "group": "azkar_adhan", "ar": "أَذْكَارُ الْأَذَانِ", "es": "Súplicas relacionadas con el Adhán"}],
        "itemNumber": 28,
        "text": "الْأَذَانُ",
        "latin": "Adhān",
        "explanationAr": "التَّعَبُّدُ لِلَّهِ بِذِكْرٍ مَخْصُوصٍ بَعْدَ دُخُولِ وَقْتِ الصَّلَاةِ لِلْإِعْلَامِ بِهَا.",
        "explanationEs": "Adhan (llamada a la oración)\nAdorar a Allah con un dhikr concreto, tras la entrada de la hora de la oración, para anunciarla.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/689/"
      },
      {
        "itemNumber": 29,
        "text": "الْإِقَامَةُ",
        "latin": "Iqāma",
        "explanationAr": "التَّعَبُّدُ لِلَّهِ بِذِكْرٍ مَخْصُوصٍ عِنْدَ الْقِيَامِ لِلصَّلَاةِ.",
        "explanationEs": "Iqama\nAdorar a Allah con un dhikr concreto al levantarse para empezar la oración.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/770/"
      },
      {
        "itemNumber": 30,
        "text": "الرَّكْعَةُ",
        "latin": "Rakʿa",
        "explanationAr": "وَحْدَةٌ مِنَ الصَّلَاةِ تَشْمَلُ الْقِيَامَ وَالْقِرَاءَةَ وَالرُّكُوعَ وَالسَّجْدَتَيْنِ.",
        "explanationEs": "Rak‘a (unidad de la oración)\nCada unidad de la oración: estar de pie con la recitación, la inclinación (ruku) y las dos prosternaciones (suyud).",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/40257/"
      },
      {
        "links": [{"section": "azkar", "group": "salat", "num": 92, "ar": "ذِكْرُ الرُّكُوعِ", "es": "Dhikr del rukūʿ"}],
        "itemNumber": 31,
        "text": "الرُّكُوعُ",
        "latin": "Rukūʿ",
        "explanationAr": "الِانْحِنَاءُ فِي الصَّلَاةِ بِحَيْثُ تَصِلُ الْيَدَانِ إِلَى الرُّكْبَتَيْنِ، وَهُوَ رُكْنٌ مِنْ أَرْكَانِ الصَّلَاةِ، وَيُسْتَحَبُّ وَضْعُ الْيَدَيْنِ عَلَى الرُّكْبَتَيْنِ.",
        "explanationEs": "Ruku (inclinación)\nInclinarse en la oración de modo que las manos lleguen a las rodillas; es un pilar de la oración y se recomienda apoyar las manos en las rodillas.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/941/"
      },
      {
        "links": [{"section": "azkar", "group": "salat", "num": 100, "ar": "ذِكْرُ السُّجُودِ", "es": "Dhikr del sujūd"}],
        "itemNumber": 32,
        "text": "السُّجُودُ",
        "latin": "Sujūd",
        "explanationAr": "وَضْعُ الْجَبْهَةِ وَالْأَنْفِ وَالْيَدَيْنِ وَالرُّكْبَتَيْنِ وَأَطْرَافِ الْقَدَمَيْنِ عَلَى الْأَرْضِ تَعَبُّدًا لِلَّهِ.",
        "explanationEs": "Suyud (prosternación)\nPoner en el suelo la frente con la nariz, las manos, las rodillas y los dedos de los pies; es el momento en que el siervo está más cerca de su Señor.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/962/"
      },
      {
        "links": [{"section": "azkar", "group": "witr", "ar": "أَذْكَارُ الْوِتْرِ", "es": "Azkar del Witr"}],
        "itemNumber": 33,
        "text": "الْوِتْرُ",
        "latin": "Witr",
        "explanationAr": "صَلَاةٌ وِتْرٌ (رَكْعَةٌ أَوْ ثَلَاثٌ أَوْ أَكْثَرُ) تُخْتَمُ بِهَا صَلَاةُ اللَّيْلِ، وَوَقْتُهَا بَيْنَ الْعِشَاءِ وَطُلُوعِ الْفَجْرِ، وَهِيَ سُنَّةٌ مُؤَكَّدَةٌ.",
        "explanationEs": "Witr\nOración de número impar de rak‘as (una, tres o más) con la que se cierra la oración de la noche; su tiempo va de la ‘Isha al alba. Es una sunna reforzada.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/1237/"
      },
      {
        "links": [{"section": "adya", "group": "adya_qunut", "ar": "دُعَاءُ الْقُنُوتِ", "es": "Dua al-Qunut"}],
        "itemNumber": 34,
        "text": "الْقُنُوتُ",
        "latin": "Qunūt",
        "explanationAr": "الدُّعَاءُ فِي مَحَلٍّ مَخْصُوصٍ مِنَ الْقِيَامِ فِي الصَّلَاةِ.",
        "explanationEs": "Qunut\nSúplica que se hace de pie en la oración, en el Witr o en el Fayr según las escuelas.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/1255/"
      },
      {
        "links": [{"section": "adya", "group": "adya_lilmawta", "num": 373, "ar": "دُعَاءُ الْجَنَازَةِ لِلْمَيِّتِ", "es": "Súplica por el difunto en la oración fúnebre"}],
        "itemNumber": 35,
        "text": "صَلَاةُ الْجَنَازَةِ",
        "latin": "Ṣalāt al-janāza",
        "explanationAr": "صَلَاةٌ عَلَى الْمَيِّتِ الْمُسْلِمِ بِأَرْبَعِ تَكْبِيرَاتٍ بِلَا رُكُوعٍ وَلَا سُجُودٍ.",
        "explanationEs": "Oración fúnebre\nOración por el musulmán fallecido, con cuatro takbires y sin ruku ni suyud.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/1966/"
      },
      {
        "itemNumber": 36,
        "text": "الذِّكْرُ",
        "latin": "Dhikr",
        "explanationAr": "عُبُودِيَّةُ الْقَلْبِ وَاللِّسَانِ لِلَّهِ بِالتَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ وَتِلَاوَةِ الْقُرْآنِ، وَأَفْضَلُهُ مَا تَوَاطَأَ عَلَيْهِ الْقَلْبُ وَاللِّسَانُ.",
        "explanationEs": "Dhikr (recuerdo de Allah)\nAdoración del corazón y de la lengua a Allah: glorificarle, alabarle, proclamar Su unicidad y Su grandeza y recitar el Corán. El mejor es aquel en que coinciden corazón y lengua.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/10302/"
      },
      {
        "itemNumber": 37,
        "text": "الدُّعَاءُ",
        "latin": "Duʿāʾ",
        "explanationAr": "سُؤَالُ اللَّهِ تَعَالَى وَالتَّضَرُّعُ إِلَيْهِ، وَهُوَ الْعِبَادَةُ.",
        "explanationEs": "Dua (súplica)\nPedir a Allah con humildad. El Profeta ﷺ dijo: «La súplica es la adoración».",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/230686/"
      },
      {
        "links": [{"section": "rosario", "group": "istighfar_tawbah", "ar": "الِاسْتِغْفَارُ وَالتَّوْبَةُ", "es": "El pedido de perdón (Istighfar) y el arrepentimiento"}],
        "itemNumber": 38,
        "text": "الِاسْتِغْفَارُ",
        "latin": "Istighfār",
        "explanationAr": "طَلَبُ الْمَغْفِرَةِ مِنَ اللَّهِ تَعَالَى.",
        "explanationEs": "Istighfar\nPedir a Allah perdón por los pecados, por ejemplo diciendo: Astaghfirullah.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/24902/"
      },
      {
        "links": [{"section": "rosario", "group": "fadl_tasbih_tahlil", "ar": "فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ", "es": "Las virtudes del Tasbih, Tahmid, Tahlil y Takbir"}],
        "itemNumber": 39,
        "text": "التَّسْبِيحُ",
        "latin": "Tasbīḥ",
        "explanationAr": "قَوْلُ سُبْحَانَ اللَّهِ، أَيْ تَنْزِيهُهُ عَنْ كُلِّ نَقْصٍ.",
        "explanationEs": "Tasbih\nDecir Subhanallah: declarar a Allah libre de toda imperfección.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/256237/"
      },
      {
        "links": [{"section": "rosario", "group": "fadl_tasbih_tahlil", "ar": "فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ", "es": "Las virtudes del Tasbih, Tahmid, Tahlil y Takbir"}],
        "itemNumber": 40,
        "text": "التَّحْمِيدُ",
        "latin": "Taḥmīd",
        "explanationAr": "قَوْلُ: الْحَمْدُ لِلَّهِ، وَهُوَ الثَّنَاءُ عَلَى اللَّهِ بِصِفَاتِ الْكَمَالِ وَالْجَلَالِ.",
        "explanationEs": "Tahmid\nDecir Al-hamdu lillah: alabar a Allah por Sus atributos de perfección y majestad.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/126100/"
      },
      {
        "links": [{"section": "rosario", "group": "fadl_tasbih_tahlil", "ar": "فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ", "es": "Las virtudes del Tasbih, Tahmid, Tahlil y Takbir"}],
        "itemNumber": 41,
        "text": "التَّهْلِيلُ",
        "latin": "Tahlīl",
        "explanationAr": "قَوْلُ: لَا إِلَهَ إِلَّا اللَّهُ، وَهُوَ صَرِيحُ التَّوْحِيدِ: نَفْيُ الْعِبَادَةِ عَنْ كُلِّ مَا سِوَى اللَّهِ وَإِثْبَاتُهَا لَهُ وَحْدَهُ.",
        "explanationEs": "Tahlil\nDecir La ilaha illallah: es la expresión clara del tawhid, negar la adoración a todo lo que no sea Allah y afirmarla solo para Él.",
        "sourceName": "إسلام ويب (فتح الباري)",
        "sourceNameEs": "IslamWeb (Fath al-Bari)",
        "sourceUrl": "https://www.islamweb.net/ar/library/content/52/11722/"
      },
      {
        "links": [{"section": "rosario", "group": "fadl_tasbih_tahlil", "ar": "فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ", "es": "Las virtudes del Tasbih, Tahmid, Tahlil y Takbir"}],
        "itemNumber": 42,
        "text": "التَّكْبِيرُ",
        "latin": "Takbīr",
        "explanationAr": "قَوْلُ: اللَّهُ أَكْبَرُ، أَيْ: هُوَ أَكْبَرُ وَأَعْظَمُ مِنْ كُلِّ شَيْءٍ.",
        "explanationEs": "Takbir\nDecir Allahu akbar: Allah es más grande y más inmenso que todo.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://audio.islamweb.net/audio/index.php?page=FullContent&audioid=439417"
      },
      {
        "itemNumber": 43,
        "text": "الزَّكَاةُ",
        "latin": "Zakāt",
        "explanationAr": "التَّعَبُّدُ لِلَّهِ تَعَالَى بِإِخْرَاجِ جُزْءٍ وَاجِبٍ شَرْعًا فِي مَالٍ مُعَيَّنٍ لِطَائِفَةٍ أَوْ جِهَةٍ مَخْصُوصَةٍ.",
        "explanationEs": "Zakat (azaque)\nAdorar a Allah entregando una parte obligatoria de ciertos bienes a un grupo o destino determinado.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2089/"
      },
      {
        "itemNumber": 44,
        "text": "الصَّدَقَةُ",
        "latin": "Ṣadaqa",
        "explanationAr": "مَا يُعْطَى تَطَوُّعًا ابْتِغَاءَ وَجْهِ اللَّهِ.",
        "explanationEs": "Sadaqa (caridad)\nLo que se da voluntariamente por la causa de Allah buscando Su recompensa, además del zakat.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2604/"
      },
      {
        "itemNumber": 45,
        "text": "الصَّوْمُ",
        "latin": "Ṣawm",
        "explanationAr": "التَّعَبُّدُ لِلَّهِ تَعَالَى بِالْإِمْسَاكِ عَنِ الْأَكْلِ وَالشُّرْبِ وَسَائِرِ الْمُفْطِرَاتِ مِنْ طُلُوعِ الْفَجْرِ إِلَى غُرُوبِ الشَّمْسِ.",
        "explanationEs": "Sawm (ayuno)\nAdorar a Allah absteniéndose de comer, beber y de todo lo que rompe el ayuno, desde el alba hasta la puesta del sol.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2624/"
      },
      {
        "itemNumber": 46,
        "text": "رَمَضَانُ",
        "latin": "Ramaḍān",
        "explanationAr": "الشَّهْرُ التَّاسِعُ مِنَ السَّنَةِ الْهِجْرِيَّةِ، وَفِيهِ صِيَامُ الْفَرِيضَةِ وَأُنْزِلَ فِيهِ الْقُرْآنُ.",
        "explanationEs": "Ramadán\nNoveno mes del calendario lunar, en el que se ayuna obligatoriamente y en el que se reveló el Corán.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2661/"
      },
      {
        "itemNumber": 47,
        "text": "السُّحُورُ",
        "latin": "Suḥūr",
        "explanationAr": "طَعَامُ السَّحَرِ وَشَرَابُهُ قُبَيْلَ طُلُوعِ الْفَجْرِ لِمَنْ أَرَادَ الصِّيَامَ، وَهُوَ مُسْتَحَبٌّ وَفِيهِ بَرَكَةٌ.",
        "explanationEs": "Suhur\nComida y bebida que toma, poco antes del alba, quien quiere ayunar; es recomendada y en ella hay bendición.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2649/"
      },
      {
        "links": [{"section": "azkar", "group": "taam_siyam", "ar": "الطَّعَامُ وَالصِّيَامُ", "es": "Comida y ayuno"}],
        "itemNumber": 48,
        "text": "الْإِفْطَارُ",
        "latin": "Ifṭār",
        "explanationAr": "تَنَاوُلُ الصَّائِمِ الطَّعَامَ أَوِ الشَّرَابَ عِنْدَ تَحَقُّقِ غُرُوبِ الشَّمْسِ، وَيُسَنُّ تَعْجِيلُهُ.",
        "explanationEs": "Iftar\nQue el ayunante coma o beba al comprobar que el sol se ha puesto; es Sunna apresurarse a hacerlo.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2647/"
      },
      {
        "itemNumber": 49,
        "text": "الْحَجُّ",
        "latin": "Ḥajj",
        "explanationAr": "قَصْدُ الْمَشَاعِرِ الْمُقَدَّسَةِ لِأَدَاءِ الْمَنَاسِكِ فِي مَكَانٍ وَوَقْتٍ مَخْصُوصٍ تَعَبُّدًا لِلَّهِ عَزَّ وَجَلَّ، وَهُوَ فَرْضٌ مَرَّةً فِي الْعُمُرِ عَلَى الْمُسْتَطِيعِ.",
        "explanationEs": "Hajj (peregrinación)\nDirigirse a los lugares sagrados para cumplir los ritos en un lugar y tiempo determinados, como adoración a Allah. Es obligatorio una vez en la vida para quien pueda.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2877/"
      },
      {
        "itemNumber": 50,
        "text": "الْعُمْرَةُ",
        "latin": "ʿUmra",
        "explanationAr": "التَّعَبُّدُ لِلَّهِ تَعَالَى بِالطَّوَافِ بِالْبَيْتِ، وَالسَّعْيِ بَيْنَ الصَّفَا وَالْمَرْوَةِ، وَالتَّحَلُّلِ مِنْهَا بِالْحَلْقِ أَوِ التَّقْصِيرِ، بَعْدَ الْإِحْرَامِ.",
        "explanationEs": "Umra\nAdorar a Allah, tras entrar en ihram, con el tawaf alrededor de la Kaaba, el sa'y entre Safa y Marwa y saliendo del ihram afeitándose o cortándose el pelo.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2877/"
      },
      {
        "itemNumber": 51,
        "text": "الْإِحْرَامُ",
        "latin": "Iḥrām",
        "explanationAr": "نِيَّةُ الدُّخُولِ فِي نُسُكِ الْحَجِّ أَوِ الْعُمْرَةِ.",
        "explanationEs": "Ihram\nIntención de entrar en los ritos del Hajj o la Umra, con la que se prohíben ciertas cosas; también se llama así la ropa del peregrino.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2924/"
      },
      {
        "itemNumber": 52,
        "text": "الطَّوَافُ",
        "latin": "Ṭawāf",
        "explanationAr": "التَّعَبُّدُ لِلَّهِ عَزَّ وَجَلَّ بِالدَّوَرَانِ حَوْلَ الْكَعْبَةِ عَلَى صِفَةٍ مَخْصُوصَةٍ، وَهُوَ سَبْعَةُ أَشْوَاطٍ.",
        "explanationEs": "Tawaf\nAdorar a Allah dando vueltas alrededor de la Kaaba de una forma concreta: siete vueltas.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2983/"
      },
      {
        "itemNumber": 53,
        "text": "السَّعْيُ",
        "latin": "Saʿy",
        "explanationAr": "الْمَشْيُ بَيْنَ الصَّفَا وَالْمَرْوَةِ سَبْعَةَ أَشْوَاطٍ فِي الْحَجِّ أَوِ الْعُمْرَةِ.",
        "explanationEs": "Sa'y\nRecorrer siete veces el trayecto entre las colinas de As-Safa y Al-Marwa durante el Hajj o la Umra.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2998/"
      },
      {
        "itemNumber": 54,
        "text": "الِاعْتِكَافُ",
        "latin": "Iʿtikāf",
        "explanationAr": "لُزُومُ الْمَسْجِدِ لِطَاعَةِ اللَّهِ تَعَالَى.",
        "explanationEs": "I'tikaf (retiro)\nPermanecer en la mezquita con la intención de dedicarse a la adoración, sobre todo en los últimos diez días de Ramadán.",
        "sourceName": "الدرر السنية (ابن تيمية)",
        "sourceNameEs": "Al-Durar al-Saniyya (Ibn Taymiyya)",
        "sourceUrl": "https://dorar.net/feqhia/2816/"
      },
      {
        "itemNumber": 119,
        "text": "صَلَاةُ الضُّحَى",
        "latin": "Ṣalāt aḍ-ḍuḥā",
        "explanationAr": "سُنَّةٌ مُؤَكَّدَةٌ، أَقَلُّهَا رَكْعَتَانِ وَأَفْضَلُهَا ثَمَانٍ، وَوَقْتُهَا مِنِ ارْتِفَاعِ الشَّمْسِ إِلَى قُبَيْلِ الزَّوَالِ.",
        "explanationEs": "La oración del Duha\nSunna confirmada: mínimo dos rakʿas, lo mejor son ocho. Su tiempo va desde que el sol se eleva hasta poco antes del mediodía.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/13715/"
      },
      {
        "itemNumber": 120,
        "text": "قِيَامُ اللَّيْلِ وَالتَّهَجُّدُ",
        "latin": "Qiyām al-layl wa at-tahajjud",
        "explanationAr": "صَلَاةُ التَّطَوُّعِ بِاللَّيْلِ مِنْ بَعْدِ الْعِشَاءِ إِلَى الْفَجْرِ، وَأَفْضَلُهَا فِي الثُّلُثِ الْأَخِيرِ، وَالسُّنَّةُ أَنْ يُسَلِّمَ مِنْ كُلِّ رَكْعَتَيْنِ.",
        "explanationEs": "La oración de la noche y el Tahajjud\nOración voluntaria entre la oración de la tarde-noche (ʿIshāʾ) y el alba. Lo mejor es el último tercio de la noche, con saludo cada dos rakʿas.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/11275/"
      },
      {
        "links": [{"section": "azkar", "group": "istikhara", "num": 135, "ar": "دُعَاءُ الِاسْتِخَارَةِ", "es": "Súplica de la istijara"}],
        "itemNumber": 121,
        "text": "الِاسْتِخَارَةُ",
        "latin": "Al-istikhāra",
        "explanationAr": "طَلَبُ الْخِيَرَةِ مِنَ اللَّهِ فِي أَمْرٍ يَحَارُ فِيهِ الْعَبْدُ، بِرَكْعَتَيْنِ ثُمَّ دُعَاءٍ بَعْدَ السَّلَامِ، ثُمَّ يَسْتَشِيرُ أَهْلَ النُّصْحِ.",
        "explanationEs": "La istijara\nPedir a Allah que elija lo mejor ante una decisión dudosa: dos rakʿas y la súplica prescrita tras el saludo. Después conviene consultar a gente sincera y sabia.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/4480/"
      },
      {
        "itemNumber": 122,
        "text": "التَّرَاوِيحُ",
        "latin": "At-tarāwīḥ",
        "explanationAr": "قِيَامُ رَمَضَانَ بَعْدَ الْعِشَاءِ جَمَاعَةً، وَلَيْسَ لَهَا عَدَدٌ مَحْصُورٌ، وَالْأَفْضَلُ إِحْدَى عَشْرَةَ رَكْعَةً.",
        "explanationEs": "Las tarāwīḥ\nOración nocturna de Ramadán en congregación tras ʿIshāʾ. No tiene un número fijo; lo mejor son once rakʿas, como hacía el Profeta ﷺ.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/4335/"
      },
      {
        "itemNumber": 123,
        "text": "سُجُودُ الشُّكْرِ",
        "latin": "Sujūd ash-shukr",
        "explanationAr": "سَجْدَةٌ لِلَّهِ شُكْرًا عَلَى نِعْمَةٍ جَدِيدَةٍ أَوِ انْدِفَاعِ نِقْمَةٍ.",
        "explanationEs": "La prosternación de gratitud\nUna prosternación a Allah por una nueva bendición o por haber evitado un mal. Según Ibn Baz no exige ablución; otros sabios sí la exigen.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/18300/"
      },
      {
        "itemNumber": 124,
        "text": "لَيْلَةُ الْقَدْرِ",
        "latin": "Laylat al-qadr",
        "explanationAr": "لَيْلَةٌ فِي الْعَشْرِ الْأَوَاخِرِ مِنْ رَمَضَانَ، الْعَمَلُ فِيهَا خَيْرٌ مِنْ أَلْفِ شَهْرٍ؛ وَمِنْ دُعَائِهَا: «اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي».",
        "explanationEs": "La Noche del Destino\nNoche de los últimos diez días de Ramadán; obrar en ella vale más que mil meses. Se recomienda la súplica: «Oh Allah, Tú eres Perdonador y amas el perdón; perdóname».",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/12965/"
      },
      {
        "itemNumber": 125,
        "text": "يَوْمُ عَرَفَةَ",
        "latin": "Yawm ʿArafa",
        "explanationAr": "التَّاسِعُ مِنْ ذِي الْحِجَّةِ، فِيهِ الْوُقُوفُ بِعَرَفَةَ؛ وَصِيَامُهُ لِغَيْرِ الْحَاجِّ يُكَفِّرُ سَنَةً مَاضِيَةً وَسَنَةً بَاقِيَةً.",
        "explanationEs": "El día de ʿArafa\nEl 9 de Dhul Hijja, día de la estancia en ʿArafa. Ayunarlo, quien no esté de peregrinación, expía el año anterior y el siguiente.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/58344/"
      },
      {
        "itemNumber": 126,
        "text": "الْفِدْيَةُ",
        "latin": "Al-fidya",
        "explanationAr": "مَا يُبْذَلُ جَبْرًا لِتَقْصِيرٍ فِي عِبَادَةٍ، كَمَنِ ارْتَكَبَ مَحْظُورًا فِي الْإِحْرَامِ، أَوْ عَجَزَ عَنِ الصِّيَامِ عَجْزًا دَائِمًا.",
        "explanationEs": "La fidya (compensación)\nLo que se ofrece para suplir una falta en un acto de adoración: por un prohibido del ihram, con ayuno, comida a pobres o sacrificio; o por quien no puede ayunar nunca más.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/hajj/article/136211/"
      },
      {
        "itemNumber": 127,
        "text": "الْوِرْدُ",
        "latin": "Al-wird",
        "explanationAr": "مَا يَلْتَزِمُهُ الْمُسْلِمُ كُلَّ يَوْمٍ مِنْ قِرَاءَةٍ أَوْ ذِكْرٍ أَوْ صَلَاةٍ، وَأَحَبُّ الْعَمَلِ إِلَى اللَّهِ أَدْوَمُهُ وَإِنْ قَلَّ.",
        "explanationEs": "El wird (rutina diaria)\nLo que el musulmán se compromete a hacer cada día: lectura, recuerdo o rezo. Lo más amado por Allah es lo constante, aunque sea poco.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/61655/"
      },
      {
        "links": [{"section": "rosario", "group": "fadl_salah_ala_nabi", "ar": "فَضْلُ الصَّلَاةِ عَلَى النَّبِيِّ", "es": "Virtud de pedir bendiciones por el Profeta"}, {"section": "azkar", "group": "salat", "num": 110, "ar": "الصَّلَاةُ الْإِبْرَاهِيمِيَّةُ", "es": "La bendición ibrahimí (en la oración)"}],
        "itemNumber": 128,
        "text": "الصَّلَاةُ عَلَى النَّبِيِّ ﷺ",
        "latin": "Aṣ-ṣalāt ʿalā an-nabiyy",
        "explanationAr": "الدُّعَاءُ لِلنَّبِيِّ ﷺ بِالرَّحْمَةِ وَالتَّعْظِيمِ، مِثْلُ: «اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ»، وَقَدْ أَمَرَ اللَّهُ بِهَا فِي كِتَابِهِ.",
        "explanationEs": "Bendecir al Profeta ﷺ\nPedir a Allah que honre y bendiga al Profeta, por ejemplo: «Oh Allah, bendice a Muhammad». Allah lo ordenó en el Corán.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/75689/"
      },
      {
        "itemNumber": 160,
        "text": "نَجَاسَةٌ",
        "latin": "Najāsah",
        "explanationAr": "عَيْنٌ مُسْتَقْذَرَةٌ شَرْعًا، وَهِيَ صِفَةٌ حُكْمِيَّةٌ تَمْنَعُ صِحَّةَ الصَّلَاةِ بِهَا أَوْ فِيهَا.",
        "explanationEs": "Najāsa (impureza ritual)\nCosa considerada impura por la ley islámica, que impide la validez de la oración si se lleva encima o está en el lugar donde se reza.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/146/%D8%A7%D9%84%D9%85%D8%A8%D8%AD%D8%AB-%D8%A7%D9%84%D8%A3%D9%88%D9%84-%D8%AA%D8%B9%D8%B1%D9%8A%D9%81-%D8%A7%D9%84%D9%86%D8%AC%D8%A7%D8%B3%D8%A9"
      },
      {
        "itemNumber": 161,
        "text": "حَدَثٌ",
        "latin": "Ḥadath",
        "explanationAr": "وَصْفٌ حُكْمِيٌّ يَقُومُ بِالْبَدَنِ وَيَمْنَعُ مِنَ الصَّلَاةِ وَنَحْوِهَا مِمَّا تُشْتَرَطُ لَهُ الطَّهَارَةُ؛ فَالْأَصْغَرُ يَكْفِي فِيهِ الْوُضُوءُ، وَالْأَكْبَرُ يُوجِبُ الْغُسْلَ: الْجَنَابَةُ وَالْحَيْضُ وَالنِّفَاسُ.",
        "explanationEs": "Ḥadath (estado de impureza)\nEstado legal del cuerpo que impide rezar y otros actos que exigen pureza. El menor se resuelve con el wuḍūʾ; el mayor exige el ghusl: yanāba, menstruación y sangrado posparto.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/23980/"
      },
      {
        "itemNumber": 162,
        "text": "اسْتِنْجَاءٌ",
        "latin": "Istinjāʾ",
        "explanationAr": "إِزَالَةُ مَا خَرَجَ مِنْ أَحَدِ السَّبِيلَيْنِ بِالْمَاءِ أَوْ بِحَجَرٍ وَنَحْوِهِ، وَهُوَ وَاجِبٌ مِنْ كُلِّ خَارِجٍ مِنْهُمَا، وَلَا يُشْرَعُ مِنَ الرِّيحِ.",
        "explanationEs": "Istinjāʾ (limpieza tras las necesidades)\nQuitar lo que ha salido de las partes íntimas con agua o con piedra o algo similar. Es obligatorio tras toda salida por ellas, y no está prescrito tras expulsar gases.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/399256/"
      },
      {
        "itemNumber": 163,
        "text": "مَسْحٌ",
        "latin": "Masḥ",
        "explanationAr": "إِمْرَارُ الْيَدِ الْمُبْتَلَّةِ عَلَى الشَّيْءِ، وَمِنْهُ الْمَسْحُ عَلَى الْخُفَّيْنِ أَوِ الْجَوْرَبَيْنِ بَدَلَ غَسْلِ الرِّجْلَيْنِ: يَوْمًا وَلَيْلَةً لِلْمُقِيمِ، وَثَلَاثَةَ أَيَّامٍ بِلَيَالِيهَا لِلْمُسَافِرِ.",
        "explanationEs": "Masḥ (pasar la mano húmeda)\nPasar la mano mojada sobre una parte permitida. Incluye pasarla sobre los jufs o calcetines en lugar de lavar los pies en el wuḍūʾ: un día y una noche para el residente y tres días con sus noches para el viajero.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/5345/"
      },
      {
        "itemNumber": 164,
        "text": "شُرُوطُ الصَّلَاةِ",
        "latin": "Shurūṭ aṣ-ṣalāh",
        "explanationAr": "أُمُورٌ خَارِجَةٌ عَنْ مَاهِيَّةِ الصَّلَاةِ لَا يَجُوزُ التَّلَبُّسُ بِهَا إِلَّا بَعْدَ اسْتِكْمَالِهَا، كَالطَّهَارَةِ وَسَتْرِ الْعَوْرَةِ وَاسْتِقْبَالِ الْقِبْلَةِ.",
        "explanationEs": "Shurūṭ aṣ-ṣalāh (condiciones de la oración)\nRequisitos externos a la oración que deben cumplirse antes de empezar y mantenerse, como la pureza, cubrir la ʿawra y orientarse a la qibla.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/12280/"
      },
      {
        "itemNumber": 165,
        "text": "أَرْكَانُ الصَّلَاةِ",
        "latin": "Arkān aṣ-ṣalāh",
        "explanationAr": "أَجْزَاؤُهَا الْأَسَاسِيَّةُ الدَّاخِلَةُ فِي حَقِيقَتِهَا كَالْقِيَامِ وَالرُّكُوعِ وَالسُّجُودِ، وَمَنْ تَرَكَ رُكْنًا نَاسِيًا ثُمَّ تَذَكَّرَ وَجَبَ عَلَيْهِ أَنْ يَأْتِيَ بِهِ وَيَسْجُدَ لِلسَّهْوِ.",
        "explanationEs": "Arkān aṣ-ṣalāh (pilares de la oración)\nSus partes esenciales, como estar de pie, el rukūʿ y el sujūd. Quien omite un pilar por olvido y lo recuerda debe realizarlo y hacer la postración por olvido.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/12455/"
      },
      {
        "itemNumber": 166,
        "text": "سُجُودُ السَّهْوِ",
        "latin": "Sujūd as-sahw",
        "explanationAr": "سَجْدَتَانِ يَسْجُدُهُمَا الْمُصَلِّي لِجَبْرِ خَلَلٍ سَهَا عَنْهُ فِي صَلَاتِهِ، وَالْأَفْضَلُ أَنْ يَكُونَا قَبْلَ السَّلَامِ إِلَّا فِي حَالَتَيْنِ: إِذَا سَلَّمَ عَنْ نَقْصِ رَكْعَةٍ فَأَكْثَرَ، أَوْ بَنَى عَلَى غَالِبِ ظَنِّهِ.",
        "explanationEs": "Sujūd as-sahw (postración por olvido)\nDos postraciones que se hacen para reparar un error cometido por descuido en la oración. Lo mejor es hacerlas antes del salām, salvo en dos casos: si saludó habiendo omitido una o más rakʿas, o si continuó basándose en su mayor suposición.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/11428/"
      },
      {
        "links": [{"section": "azkar", "group": "salat", "num": 109, "ar": "التَّشَهُّدُ", "es": "At-Tashahhud"}],
        "itemNumber": 167,
        "text": "التَّشَهُّدُ",
        "latin": "At-tashahhud",
        "explanationAr": "الذِّكْرُ الَّذِي يُقَالُ فِي الْجُلُوسِ مِنَ الصَّلَاةِ، يَبْدَأُ بِـ«التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ» وَيَنْتَهِي بِالشَّهَادَتَيْنِ؛ وَيُضَافُ إِلَيْهِ فِي الْأَخِيرِ الصَّلَاةُ عَلَى النَّبِيِّ ﷺ.",
        "explanationEs": "At-tashahhud (el testimonio en la oración)\nLa fórmula que se recita al sentarse en la oración: comienza con «at-taḥiyyātu lillāhi…» y termina con las dos shahādas. En el tashahhud final se añade la bendición sobre el Profeta ﷺ.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/14814/"
      },
      {
        "itemNumber": 168,
        "text": "الْجَمْعُ وَالْقَصْرُ",
        "latin": "Al-jamʿ wa-l-qaṣr",
        "explanationAr": "الْقَصْرُ أَدَاءُ الصَّلَاةِ الرُّبَاعِيَّةِ رَكْعَتَيْنِ فِي السَّفَرِ وَهُوَ سُنَّةٌ، وَالْجَمْعُ أَدَاءُ الظُّهْرِ مَعَ الْعَصْرِ أَوِ الْمَغْرِبِ مَعَ الْعِشَاءِ فِي وَقْتِ إِحْدَاهُمَا وَهُوَ رُخْصَةٌ؛ وَيُشْتَرَطُ سَفَرٌ مُبَاحٌ تَبْلُغُ مَسَافَتُهُ نَحْوَ ثَلَاثَةٍ وَثَمَانِينَ كِيلُومِتْرًا.",
        "explanationEs": "Al-jamʿ wa-l-qaṣr (agrupar y acortar)\nQaṣr es rezar en dos rakʿas las oraciones de cuatro durante el viaje y es sunna. Jamʿ es juntar Ẓuhr con ʿAṣr, o Maghrib con ʿIshāʾ, en el tiempo de una de ellas, y es una facilidad. Se requiere un viaje lícito de unos 83 km.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/108818/"
      },
      {
        "itemNumber": 169,
        "text": "كَفَّارَةٌ",
        "latin": "Kaffārah",
        "explanationAr": "مَا يُقَدِّرُهُ الشَّرْعُ جَبْرًا لِنَقْصٍ أَوْ خَطَأٍ أَوْ زَجْرًا عَنْ مَعْصِيَةٍ، يُغَطَّى بِهِ الْإِثْمُ، وَمِنْهَا كَفَّارَةُ الْيَمِينِ وَكَفَّارَةُ انْتِهَاكِ حُرْمَةِ نَهَارِ رَمَضَانَ.",
        "explanationEs": "Kaffārah (expiación)\nLo que la ley islámica fija para reparar una falta o un error, o para disuadir de una desobediencia, y con lo que se cubre el pecado. Por ejemplo, la expiación del juramento y la de violar el día de Ramadán.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/205507/"
      }
    ]
  },
{
    "id": "glosario_salat",
    "titleAr": "الصَّلَوَاتُ وَأَوْقَاتُهَا",
    "titleEs": "Las oraciones y sus tiempos",
    "items": [
      {
        "text": "الصَّلَوَاتُ الْخَمْسُ الْمَفْرُوضَةُ",
        "latin": "Aṣ-ṣalawāt al-khams al-mafrūḍa",
        "explanationAr": "خَمْسُ صَلَوَاتٍ فِي الْيَوْمِ وَاللَّيْلَةِ، لِكُلِّ صَلَاةٍ وَقْتٌ مَحْدُودٌ لَا تَصِحُّ قَبْلَهُ وَيَحْرُمُ تَأْخِيرُهَا عَنْهُ بِلَا عُذْرٍ، قَالَ تَعَالَى: ﴿إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا﴾ [النساء: 103]. عَدَدُ رَكَعَاتِهَا: الْفَجْرُ 2، الظُّهْرُ 4، الْعَصْرُ 4، الْمَغْرِبُ 3، الْعِشَاءُ 4. وَقَدْ بَيَّنَ النَّبِيُّ ﷺ أَوْقَاتَهَا فِي حَدِيثِ عَبْدِ اللَّهِ بْنِ عَمْرٍو (صحيح مسلم ٦١٢).",
        "explanationEs": "Las cinco oraciones obligatorias\nCinco oraciones al día y la noche, cada una con un tiempo fijado: no valen antes de que empiece y está prohibido retrasarlas sin excusa más allá de su fin (Corán 4:103). Rak‘as: Fayr 2, Dhuhr 4, ‘Asr 4, Magrib 3, ‘Isha 4. El Profeta ﷺ explicó sus horarios en el hadiz de ‘Abdullah ibn ‘Amr (Sahih Muslim 612). Las cinco siguientes tarjetas detallan el tiempo de cada una.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://islamweb.net/ar/print.php?id=178675",
        "itemNumber": 187
      },
      {
        "text": "صَلَاةُ الْفَجْرِ (الصُّبْحِ)",
        "latin": "Ṣalāt al-Fajr",
        "explanationAr": "رَكْعَتَانِ. وَقْتُهَا مِنْ طُلُوعِ الْفَجْرِ الصَّادِقِ (الْبَيَاضِ الْمُعْتَرِضِ فِي الْأُفُقِ) إِلَى طُلُوعِ الشَّمْسِ. وَمَنْ أَدْرَكَ رَكْعَةً قَبْلَ طُلُوعِ الشَّمْسِ فَقَدْ أَدْرَكَ الصُّبْحَ (صحيح البخاري ٥٧٩).",
        "explanationEs": "Oración del amanecer (Fayr / Subh)\n2 rak‘as. Su tiempo va desde la aparición del alba verdadero (la franja blanca horizontal en el horizonte) hasta la salida del sol. Quien alcanza una rak‘a antes de la salida del sol ha alcanzado la oración (Sahih al-Bujari 579).",
        "sourceName": "الإسلام سؤال وجواب",
        "sourceNameEs": "IslamQA",
        "sourceUrl": "https://islamqa.info/ar/answers/9940",
        "itemNumber": 188
      },
      {
        "text": "صَلَاةُ الظُّهْرِ",
        "latin": "Ṣalāt aẓ-Ẓuhr",
        "explanationAr": "أَرْبَعُ رَكَعَاتٍ. يَبْدَأُ وَقْتُهَا بِزَوَالِ الشَّمْسِ عَنْ وَسَطِ السَّمَاءِ، وَيَنْتَهِي إِذَا صَارَ ظِلُّ كُلِّ شَيْءٍ مِثْلَهُ (دُونَ ظِلِّ الزَّوَالِ) وَهُوَ دُخُولُ وَقْتِ الْعَصْرِ. وَيُسْتَحَبُّ الْإِبْرَادُ بِهَا فِي شِدَّةِ الْحَرِّ.",
        "explanationEs": "Oración del mediodía (Dhuhr)\n4 rak‘as. Empieza cuando el sol pasa el cenit y termina cuando la sombra de cada objeto iguala su altura (sin contar la sombra del cenit), momento en que entra el ‘Asr. Con calor intenso se recomienda retrasarla un poco.",
        "sourceName": "الإسلام سؤال وجواب",
        "sourceNameEs": "IslamQA",
        "sourceUrl": "https://islamqa.info/ar/answers/9940",
        "itemNumber": 189
      },
      {
        "text": "صَلَاةُ الْعَصْرِ",
        "latin": "Ṣalāt al-ʿAṣr",
        "explanationAr": "أَرْبَعُ رَكَعَاتٍ. يَبْدَأُ وَقْتُهَا بِخُرُوجِ وَقْتِ الظُّهْرِ، وَوَقْتُ الِاخْتِيَارِ مَا لَمْ تَصْفَرَّ الشَّمْسُ (صحيح مسلم ٦١٢)، ثُمَّ يَبْقَى وَقْتُ الضَّرُورَةِ إِلَى الْغُرُوبِ؛ وَمَنْ أَدْرَكَ رَكْعَةً قَبْلَ الْغُرُوبِ فَقَدْ أَدْرَكَ الْعَصْرَ (صحيح البخاري ٥٧٩). وَيَحْرُمُ تَعَمُّدُ تَأْخِيرِهَا إِلَى ذَلِكَ.",
        "explanationEs": "Oración de la tarde (‘Asr)\n4 rak‘as. Empieza al terminar el Dhuhr. El tiempo preferido dura mientras el sol no amarillee (Sahih Muslim 612); después queda el tiempo de necesidad hasta la puesta del sol: quien alcanza una rak‘a antes del ocaso ha alcanzado el ‘Asr (Sahih al-Bujari 579), pero retrasarla a propósito hasta ahí no está permitido.",
        "sourceName": "الإسلام سؤال وجواب",
        "sourceNameEs": "IslamQA",
        "sourceUrl": "https://islamqa.info/ar/answers/9940",
        "itemNumber": 190
      },
      {
        "text": "صَلَاةُ الْمَغْرِبِ",
        "latin": "Ṣalāt al-Maghrib",
        "explanationAr": "ثَلَاثُ رَكَعَاتٍ. يَبْدَأُ وَقْتُهَا بِغُرُوبِ الشَّمْسِ (سُقُوطِ قُرْصِهَا كُلِّهِ) وَيَمْتَدُّ مَا لَمْ يَغِبِ الشَّفَقُ الْأَحْمَرُ (صحيح مسلم ٦١٢)، وَيُسْتَحَبُّ تَعْجِيلُهَا.",
        "explanationEs": "Oración del ocaso (Magrib)\n3 rak‘as. Empieza con la puesta del sol (cuando desaparece todo el disco) y dura mientras no desaparezca el crepúsculo rojizo (Sahih Muslim 612). Se recomienda hacerla pronto.",
        "sourceName": "الإسلام سؤال وجواب",
        "sourceNameEs": "IslamQA",
        "sourceUrl": "https://islamqa.info/ar/answers/9940",
        "itemNumber": 191
      },
      {
        "text": "صَلَاةُ الْعِشَاءِ",
        "latin": "Ṣalāt al-ʿIshāʾ",
        "explanationAr": "أَرْبَعُ رَكَعَاتٍ. يَبْدَأُ وَقْتُهَا بِمَغِيبِ الشَّفَقِ الْأَحْمَرِ وَيَمْتَدُّ إِلَى نِصْفِ اللَّيْلِ (صحيح مسلم ٦١٢)، وَيَبْقَى وَقْتُ الضَّرُورَةِ إِلَى طُلُوعِ الْفَجْرِ عِنْدَ بَعْضِ أَهْلِ الْعِلْمِ. وَيُحْسَبُ نِصْفُ اللَّيْلِ بَيْنَ الْغُرُوبِ وَالْفَجْرِ.",
        "explanationEs": "Oración de la noche (‘Isha)\n4 rak‘as. Empieza al desaparecer el crepúsculo rojizo y llega hasta la medianoche (Sahih Muslim 612); según parte de los sabios queda un tiempo de necesidad hasta el alba. La medianoche se calcula entre la puesta del sol y el alba.",
        "sourceName": "الإسلام سؤال وجواب",
        "sourceNameEs": "IslamQA",
        "sourceUrl": "https://islamqa.info/ar/answers/9940",
        "itemNumber": 192
      },
      {
        "text": "صَلَاةُ الْجُمُعَةِ",
        "latin": "Ṣalāt al-Jumuʿa",
        "explanationAr": "رَكْعَتَانِ تُصَلَّى فِي جَمَاعَةٍ بَعْدَ خُطْبَتَيْنِ يَوْمَ الْجُمُعَةِ بَدَلَ الظُّهْرِ، وَهِيَ فَرْضُ عَيْنٍ عَلَى الرِّجَالِ الْمُقِيمِينَ الْأَحْرَارِ الْبَالِغِينَ. وَقْتُهَا وَقْتُ الظُّهْرِ، وَجُمْهُورُ الْعُلَمَاءِ عَلَى أَنَّهَا بَعْدَ الزَّوَالِ، وَأَجَازَ بَعْضُهُمْ أَدَاءَهَا قَبْلَهُ؛ وَالْأَحْوَطُ بَعْدَ الزَّوَالِ.",
        "explanationEs": "Oración del viernes (Yumu‘a)\n2 rak‘as en congregación tras dos sermones, en lugar del Dhuhr; obligatoria para el varón adulto, residente y libre. Su tiempo es el del Dhuhr: la mayoría de los sabios opina que es después del cenit; algunos permiten hacerla antes, y lo más prudente es esperar al cenit.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/5142/",
        "itemNumber": 193
      },
      {
        "text": "السُّنَنُ الرَّوَاتِبُ",
        "latin": "As-sunan ar-rawātib",
        "explanationAr": "سُنَنٌ مُؤَكَّدَةٌ حَافَظَ عَلَيْهَا النَّبِيُّ ﷺ مَعَ الْفَرَائِضِ، وَهِيَ اثْنَتَا عَشْرَةَ رَكْعَةً: أَرْبَعٌ قَبْلَ الظُّهْرِ بِتَسْلِيمَتَيْنِ وَثِنْتَانِ بَعْدَهُ، وَثِنْتَانِ بَعْدَ الْمَغْرِبِ، وَثِنْتَانِ بَعْدَ الْعِشَاءِ، وَثِنْتَانِ قَبْلَ الْفَجْرِ. قَالَ ﷺ: «مَنْ صَلَّى ثِنْتَيْ عَشْرَةَ رَكْعَةً فِي يَوْمٍ وَلَيْلَةٍ بُنِيَ لَهُ بِهِنَّ بَيْتٌ فِي الْجَنَّةِ» (صحيح مسلم ٧٢٨، وَبِنَحْوِ هَذَا اللَّفْظِ عِنْدَ التِّرْمِذِيِّ ٤١٤). وَقْتُ كُلِّ سُنَّةٍ قَبْلِيَّةٍ بَعْدَ دُخُولِ وَقْتِ الْفَرِيضَةِ إِلَى إِقَامَتِهَا، وَالْبَعْدِيَّةِ بَعْدَ الْفَرِيضَةِ. وَفِي السَّفَرِ الْأَفْضَلُ تَرْكُهَا إِلَّا سُنَّةَ الْفَجْرِ وَالْوِتْرَ. وَيُسْتَحَبُّ أَيْضًا أَرْبَعٌ قَبْلَ الْعَصْرِ وَهِيَ غَيْرُ رَاتِبَةٍ.",
        "explanationEs": "Las sunan rawatib (sunnas regulares)\nSon las prácticas voluntarias reforzadas que el Profeta ﷺ mantenía junto a las obligatorias: 12 rak‘as en total — 4 antes del Dhuhr (de 2 en 2) y 2 después, 2 después del Magrib, 2 después de la ‘Isha y 2 antes del Fayr. Dijo ﷺ: «Quien haga doce rak‘as voluntarias en un día y una noche, se le construirá por ellas una casa en el Paraíso» (Sahih Muslim 728, y con esta redacción en at-Tirmidhi 414). Las de antes se hacen una vez entrado el tiempo de la obligatoria y antes de su iqama; las de después, al terminarla. De viaje lo mejor es omitirlas, salvo la sunna del Fayr y el Witr. También se recomiendan 4 rak‘as antes del ‘Asr, pero no son «rawatib».",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/7170/",
        "table": {
          "titleAr": "السُّنَنُ الرَّوَاتِبُ",
          "titleEs": "Las sunan rawatib",
          "headAr": [
            "قَبْلَ",
            "الصَّلَاةُ",
            "بَعْدَ"
          ],
          "headEs": [
            "Antes",
            "Oración",
            "Después"
          ],
          "rows": [
            [
              "2",
              "الْفَجْرُ|Fayr",
              "-"
            ],
            [
              "2+2",
              "الظُّهْرُ|Dhuhr",
              "2"
            ],
            [
              "-",
              "الْعَصْرُ|‘Asr",
              "-"
            ],
            [
              "-",
              "الْمَغْرِبُ|Magrib",
              "2"
            ],
            [
              "-",
              "الْعِشَاءُ|‘Isha",
              "2"
            ]
          ]
        },
        "itemNumber": 194
      },
      {
        "text": "سُنَّةُ الْفَجْرِ",
        "latin": "Sunnat al-Fajr",
        "explanationAr": "رَكْعَتَانِ خَفِيفَتَانِ بَعْدَ طُلُوعِ الْفَجْرِ وَقَبْلَ صَلَاةِ الْفَرْضِ، وَهِيَ أَوْكَدُ الرَّوَاتِبِ؛ قَالَ ﷺ: «رَكْعَتَا الْفَجْرِ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا» (صحيح مسلم ٧٢٥). وَكَانَ النَّبِيُّ ﷺ يُحَافِظُ عَلَيْهَا حَضَرًا وَسَفَرًا.",
        "explanationEs": "La sunna del Fayr\n2 rak‘as breves entre la salida del alba y la oración obligatoria. Es la más reforzada de las rawatib: «Las dos rak‘as del Fayr son mejores que el mundo y cuanto hay en él» (Sahih Muslim 725). El Profeta ﷺ las mantenía tanto en residencia como de viaje.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/14870/",
        "itemNumber": 195
      },
      {
        "text": "صَلَاةُ الضُّحَى",
        "latin": "Ṣalāt aḍ-Ḍuḥā",
        "explanationAr": "سُنَّةٌ مُؤَكَّدَةٌ أَقَلُّهَا رَكْعَتَانِ، وَلَا حَدَّ لِأَكْثَرِهَا وَيُسَلِّمُ مِنْ كُلِّ ثِنْتَيْنِ؛ أَوْصَى بِهَا النَّبِيُّ ﷺ أَبَا هُرَيْرَةَ وَأَبَا الدَّرْدَاءِ، وَقَالَ عَنِ الصَّدَقَةِ عَلَى كُلِّ سُلَامَى: «وَيُجْزِئُ مِنْ ذَلِكَ رَكْعَتَانِ يَرْكَعُهُمَا مِنَ الضُّحَى» (صحيح مسلم). وَقْتُهَا مِنِ ارْتِفَاعِ الشَّمْسِ قَيْدَ رُمْحٍ (نَحْوَ رُبْعِ سَاعَةٍ بَعْدَ الشُّرُوقِ) إِلَى قُبَيْلِ وُقُوفِ الشَّمْسِ فِي كَبِدِ السَّمَاءِ؛ وَالْأَفْضَلُ عِنْدَ اشْتِدَادِ الضُّحَى (حِينَ تَرْمَضُ الْفِصَالُ).",
        "explanationEs": "La oración de Duha (media mañana)\nSunna reforzada: mínimo 2 rak‘as, sin límite superior, saludando cada 2. El Profeta ﷺ la recomendó a Abu Hurayra y Abu al-Darda’, y dijo que 2 rak‘as de Duha bastan como la sadaqa debida por cada articulación del cuerpo (Sahih Muslim). Su tiempo empieza cuando el sol se eleva «una lanza» (unos 15 minutos después del amanecer solar) y termina poco antes de que el sol llegue al cenit; lo mejor es hacerla cuando ya aprieta el calor.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/10120/",
        "itemNumber": 196
      },
      {
        "text": "صَلَاةُ الْوِتْرِ",
        "latin": "Ṣalāt al-Witr",
        "explanationAr": "سُنَّةٌ مُؤَكَّدَةٌ تُخْتَمُ بِهَا صَلَاةُ اللَّيْلِ، أَقَلُّهَا رَكْعَةٌ وَأَكْثَرُهَا مَا تَيَسَّرَ، وَالْأَفْضَلُ أَنْ يُسَلِّمَ مِنْ كُلِّ ثِنْتَيْنِ وَيُوتِرَ بِوَاحِدَةٍ؛ وَكَانَ النَّبِيُّ ﷺ يُوتِرُ غَالِبًا بِإِحْدَى عَشْرَةَ رَكْعَةً. قَالَ ﷺ: «صَلَاةُ اللَّيْلِ مَثْنَى مَثْنَى، فَإِذَا خَشِيَ أَحَدُكُمُ الصُّبْحَ صَلَّى رَكْعَةً وَاحِدَةً تُوتِرُ لَهُ مَا قَدْ صَلَّى» (صحيح البخاري ٩٩٠). وَوَقْتُهُ مِنْ بَعْدِ صَلَاةِ الْعِشَاءِ إِلَى طُلُوعِ الْفَجْرِ، وَمَنْ خَافَ أَلَّا يَقُومَ آخِرَ اللَّيْلِ أَوْتَرَ قَبْلَ أَنْ يَنَامَ.",
        "explanationEs": "El Witr (oración impar)\nSunna reforzada con la que se cierra la oración nocturna: mínimo 1 rak‘a, máximo lo que uno pueda; lo mejor es saludar cada 2 rak‘as y terminar con una sola. El Profeta ﷺ solía hacer 11. Dijo ﷺ: «La oración de la noche es de dos en dos; y si uno teme que llegue el alba, que haga una rak‘a que haga impar lo ya rezado» (Sahih al-Bujari 990). Su tiempo va desde después de la ‘Isha hasta el alba; quien teme no despertarse en la última parte de la noche, lo reza antes de dormir.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/13689/",
        "itemNumber": 197
      },
      {
        "text": "قِيَامُ اللَّيْلِ وَالتَّهَجُّدُ",
        "latin": "Qiyām al-layl wa-t-tahajjud",
        "explanationAr": "صَلَاةُ التَّطَوُّعِ فِي اللَّيْلِ، وَهِيَ أَفْضَلُ الصَّلَاةِ بَعْدَ الْفَرِيضَةِ؛ لَيْسَ لَهَا عَدَدٌ مَحْصُورٌ. وَقْتُهَا مِنْ بَعْدِ الْعِشَاءِ إِلَى الْفَجْرِ، وَأَفْضَلُهُ آخِرُ اللَّيْلِ، وَأَحَبُّ الصَّلَاةِ إِلَى اللَّهِ صَلَاةُ دَاوُدَ: يَنَامُ نِصْفَ اللَّيْلِ وَيَقُومُ ثُلُثَهُ وَيَنَامُ سُدُسَهُ (صحيح مسلم ١١٥٩). وَيُسَمِّيهَا بَعْضُهُمْ تَهَجُّدًا إِذَا كَانَتْ بَعْدَ نَوْمٍ.",
        "explanationEs": "Oración nocturna (qiyam al-layl / tahayyud)\nOración voluntaria de la noche, la más virtuosa tras las obligatorias; no tiene número fijo. Va de después de la ‘Isha hasta el alba, y lo mejor es el último tercio. La oración más amada por Allah es la de Dawud: dormía la mitad de la noche, rezaba un tercio y dormía un sexto (Sahih Muslim 1159). Algunos llaman «tahayyud» a la que se hace tras haber dormido.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/18313/",
        "itemNumber": 198
      },
      {
        "text": "صَلَاةُ التَّرَاوِيحِ",
        "latin": "Ṣalāt at-tarāwīḥ",
        "explanationAr": "هِيَ قِيَامُ اللَّيْلِ فِي رَمَضَانَ، سُمِّيَتْ بِذَلِكَ لِأَنَّ السَّلَفَ كَانُوا يَسْتَرِيحُونَ بَعْدَ كُلِّ رَكْعَتَيْنِ أَوْ أَرْبَعٍ. وَهِيَ سُنَّةٌ مُؤَكَّدَةٌ تُصَلَّى جَمَاعَةً بَعْدَ الْعِشَاءِ، قَالَ ﷺ: «مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ». وَالتَّرَاوِيحُ وَالْقِيَامُ وَالتَّهَجُّدُ أَسْمَاءٌ لِصَلَاةِ اللَّيْلِ، وَلَمْ يَزِدْ ﷺ عَلَى إِحْدَى عَشْرَةَ رَكْعَةً فِي رَمَضَانَ وَغَيْرِهِ، وَيَجُوزُ الزِّيَادَةُ (وَالْمَسْأَلَةُ مَحَلُّ سَعَةٍ).",
        "explanationEs": "Tarawih\nEs la oración nocturna de Ramadán; el nombre viene de que los antiguos descansaban (rawha) tras cada 2 o 4 rak‘as. Es sunna reforzada, se reza en congregación tras la ‘Isha. Dijo ﷺ: «Quien reza de noche en Ramadán con fe y esperando la recompensa, se le perdonan sus pecados pasados». Tarawih, qiyam y tahayyud son nombres de la misma oración nocturna. El Profeta ﷺ no pasó de 11 rak‘as, aunque se permite hacer más (hay amplitud en este asunto entre los sabios).",
        "sourceName": "الإسلام سؤال وجواب",
        "sourceNameEs": "IslamQA",
        "sourceUrl": "https://islamqa.info/ar/researches/8",
        "itemNumber": 199
      },
      {
        "text": "تَحِيَّةُ الْمَسْجِدِ",
        "latin": "Taḥiyyat al-masjid",
        "explanationAr": "رَكْعَتَانِ لِمَنْ دَخَلَ الْمَسْجِدَ قَبْلَ أَنْ يَجْلِسَ؛ قَالَ ﷺ: «إِذَا دَخَلَ أَحَدُكُمُ الْمَسْجِدَ فَلَا يَجْلِسْ حَتَّى يُصَلِّيَ رَكْعَتَيْنِ» (صحيح البخاري ١١٦٧). وَوَقْتُهَا عِنْدَ الدُّخُولِ، وَتُشْرَعُ فِي كُلِّ وَقْتٍ حَتَّى بَعْدَ الْعَصْرِ، وَتَكْفِي عَنْهَا الْفَرِيضَةُ أَوِ الرَّاتِبَةُ، وَتُصَلَّى يَوْمَ الْجُمُعَةِ وَالْخَطِيبُ يَخْطُبُ خَفِيفَةً.",
        "explanationEs": "Saludo a la mezquita\n2 rak‘as para quien entra en la mezquita antes de sentarse: «Si alguno de vosotros entra en la mezquita, que no se siente hasta rezar dos rak‘as» (Sahih al-Bujari 1167). Su tiempo es al entrar; se pide a cualquier hora, incluso tras el ‘Asr, y la oración obligatoria o una rawatib la cubren. El viernes se hace breve aunque el imam esté dando el sermón.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/22280/",
        "itemNumber": 200
      },
      {
        "text": "سُنَّةُ الْوُضُوءِ",
        "latin": "Sunnat al-wuḍūʾ",
        "explanationAr": "رَكْعَتَانِ بَعْدَ الْوُضُوءِ؛ قَالَ ﷺ: «مَنْ تَوَضَّأَ نَحْوَ وُضُوئِي هَذَا ثُمَّ صَلَّى رَكْعَتَيْنِ لَا يُحَدِّثُ فِيهِمَا نَفْسَهُ غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ» (متفق عليه). سُنَّةٌ مُؤَكَّدَةٌ لَا إِثْمَ فِي تَرْكِهَا، وَالْأَفْضَلُ الْمُبَادَرَةُ بِهَا، وَتُصَلَّى فِي أَيِّ وَقْتٍ، وَتَقُومُ مَقَامَهَا تَحِيَّةُ الْمَسْجِدِ أَوِ الرَّاتِبَةُ.",
        "explanationEs": "La sunna del wudu\n2 rak‘as tras la ablución: «Quien haga la ablución como esta mía y luego rece dos rak‘as sin distraerse en ellas, se le perdonan sus pecados pasados» (al-Bujari y Muslim). Es sunna reforzada, no hay pecado en omitirla; lo mejor es hacerla enseguida, a cualquier hora, y el saludo a la mezquita o una rawatib la cubren.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/18411/",
        "itemNumber": 201
      },
      {
        "text": "صَلَاةُ الِاسْتِخَارَةِ",
        "latin": "Ṣalāt al-istikhāra",
        "explanationAr": "رَكْعَتَانِ مِنْ غَيْرِ الْفَرِيضَةِ لِمَنْ هَمَّ بِأَمْرٍ مُبَاحٍ وَتَرَدَّدَ فِيهِ، ثُمَّ يَدْعُو بِدُعَاءِ الِاسْتِخَارَةِ الْمَأْثُورِ؛ رَوَاهُ الْبُخَارِيُّ (١١٦٦) مِنْ حَدِيثِ جَابِرٍ. تُصَلَّى فِي أَيِّ وَقْتٍ مِنْ لَيْلٍ أَوْ نَهَارٍ عِنْدَ الْحَاجَةِ.",
        "explanationEs": "Oración de la istijara (pedir guía)\n2 rak‘as voluntarias para quien duda ante un asunto permitido, seguidas de la súplica transmitida por el Profeta ﷺ (Sahih al-Bujari 1166, hadiz de Yabir). Se hace en cualquier momento del día o de la noche cuando surge la necesidad.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/4480/",
        "xref": { "phrase": "دُعَاءِ الِاسْتِخَارَةِ الْمَأْثُورِ", "phraseEs": "la súplica transmitida por el Profeta ﷺ", "section": "azkar", "group": "istikhara", "num": 135 },
        "itemNumber": 202
      },
      {
        "text": "صَلَاةُ الْعِيدَيْنِ",
        "latin": "Ṣalāt al-ʿīdayn",
        "explanationAr": "رَكْعَتَانِ فِي عِيدِ الْفِطْرِ وَعِيدِ الْأَضْحَى تُصَلَّيَانِ جَمَاعَةً فِي الْمُصَلَّى، وَوَقْتُهُمَا بَعْدَ ارْتِفَاعِ الشَّمْسِ قَدْرَ رُمْحٍ إِلَى الزَّوَالِ، وَلَهَا خُطْبَةٌ بَعْدَهَا. وَاخْتَلَفَ الْعُلَمَاءُ فِي حُكْمِهَا: فَرْضُ عَيْنٍ عَلَى الرِّجَالِ عِنْدَ الشَّيْخِ ابْنِ بَازٍ، وَفَرْضُ كِفَايَةٍ عِنْدَ كَثِيرٍ مِنْ أَهْلِ الْعِلْمِ؛ وَلِلنِّسَاءِ سُنَّةٌ إِنْ أُمِنَتِ الْفِتْنَةُ.",
        "explanationEs": "Oración de las dos fiestas (‘Id)\n2 rak‘as en ‘Id al-Fitr y ‘Id al-Adha, en congregación en el musalla, desde que el sol se eleva «una lanza» hasta el cenit; después va el sermón. Los sabios difieren en su rango: obligación individual para los varones según el Sheij Ibn Baz, obligación comunitaria (fard kifaya) según muchos otros; para las mujeres es sunna si no hay riesgo de fitna.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/categories/fiqhi/55?page=4",
        "itemNumber": 203
      },
      {
        "text": "صَلَاةُ الِاسْتِسْقَاءِ",
        "latin": "Ṣalāt al-istisqāʾ",
        "explanationAr": "صَلَاةُ طَلَبِ الْمَطَرِ عِنْدَ الْقَحْطِ، رَكْعَتَانِ كَصَلَاةِ الْعِيدِ مَعَ الدُّعَاءِ وَالِاسْتِغْفَارِ، وَتُصَلَّى جَمَاعَةً فِي الْمُصَلَّى، وَوَقْتُهَا بَعْدَ ارْتِفَاعِ الشَّمْسِ كَالْعِيدِ. وَإِنِ اسْتَسْقَى الْمُنْفَرِدُ فَصَلَّى رَكْعَتَيْنِ وَدَعَا فَحَسَنٌ.",
        "explanationEs": "Oración de la lluvia (istisqa’)\nSe hace en tiempos de sequía: 2 rak‘as como la del ‘Id, con súplica e istigfar, en congregación en el musalla y a la misma hora que el ‘Id. Si una persona la reza sola, 2 rak‘as y súplica, también es válido y bueno.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/22378/",
        "links": [{"section": "azkar", "group": "rih_matar", "ar": "الرِّيحُ وَالْمَطَرُ", "es": "Viento, lluvia y luna nueva"}],
        "itemNumber": 204
      },
      {
        "text": "صَلَاةُ الْكُسُوفِ وَالْخُسُوفِ",
        "latin": "Ṣalāt al-kusūf wa-l-khusūf",
        "explanationAr": "تُصَلَّى عِنْدَ كُسُوفِ الشَّمْسِ أَوْ خُسُوفِ الْقَمَرِ؛ قَالَ ﷺ: «إِنَّ الشَّمْسَ وَالْقَمَرَ آيَتَانِ مِنْ آيَاتِ اللَّهِ… فَإِذَا رَأَيْتُمُوهُمَا فَادْعُوا اللَّهَ وَصَلُّوا». وَقْتُهَا مِنْ بِدَايَةِ الْحَدَثِ إِلَى انْجِلَائِهِ، وَهِيَ رَكْعَتَانِ بِرُكُوعَيْنِ فِي كُلِّ رَكْعَةٍ. الْمَشْهُورُ أَنَّهَا سُنَّةٌ مُؤَكَّدَةٌ، وَقَالَ بَعْضُ الْعُلَمَاءِ بِوُجُوبِهَا.",
        "explanationEs": "Oración del eclipse (kusuf / jusuf)\nSe hace durante un eclipse de sol o de luna. Dijo ﷺ: «El sol y la luna son dos signos de Allah… cuando los veáis, invocad a Allah y rezad». Su tiempo es desde que empieza el eclipse hasta que termina. Son 2 rak‘as con dos inclinaciones en cada una. Lo más conocido es que es sunna reforzada; algunos sabios la consideran obligatoria.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/categories/fiqhi/55?page=4",
        "itemNumber": 205
      },
      {
        "text": "صَلَاةُ الْجَنَازَةِ",
        "latin": "Ṣalāt al-janāza",
        "explanationAr": "صَلَاةٌ عَلَى الْمَيِّتِ الْمُسْلِمِ فَرْضُ كِفَايَةٍ إِذَا قَامَ بِهَا مَنْ يَكْفِي سَقَطَتْ عَنِ الْبَاقِينَ، وَهِيَ مَشْرُوعَةٌ لِلرِّجَالِ وَالنِّسَاءِ. وَصِفَتُهَا: أَرْبَعُ تَكْبِيرَاتٍ بِلَا رُكُوعٍ وَلَا سُجُودٍ: الْفَاتِحَةُ بَعْدَ الْأُولَى، ثُمَّ الصَّلَاةُ عَلَى النَّبِيِّ ﷺ بَعْدَ الثَّانِيَةِ، ثُمَّ الدُّعَاءُ لِلْمَيِّتِ بَعْدَ الثَّالِثَةِ، ثُمَّ يُسَلِّمُ بَعْدَ الرَّابِعَةِ. وَلَيْسَ لَهَا وَقْتٌ مُحَدَّدٌ، تُصَلَّى مَتَى حَضَرَتِ الْجِنَازَةُ، وَيُسْتَحَبُّ تَكْثِيرُ الْمُصَلِّينَ.",
        "explanationEs": "Oración fúnebre (yanaza)\nOración por un musulmán fallecido; es obligación comunitaria (fard kifaya): si la cumple un grupo suficiente, se libra el resto. Es para hombres y mujeres. Se hace con cuatro takbires, de pie y sin inclinación ni postración: Fatiha tras el primero, bendición al Profeta ﷺ tras el segundo, súplica por el difunto tras el tercero y saludo final tras el cuarto. No tiene hora fija: se reza cuando llega el cortejo, y es recomendable que haya mucha gente.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/14025/",
        "links": [{"section": "adya", "group": "adya_lilmawta", "num": 373, "ar": "دُعَاءُ الْجَنَازَةِ لِلْمَيِّتِ", "es": "Súplica por el difunto en la oración fúnebre"}],
        "itemNumber": 206
      }
    ]
  },
  {
    "id": "glosario_tazkiya",
    "titleAr": "تَزْكِيَةُ النَّفْسِ وَالْقَلْبِ",
    "titleEs": "Purificación del alma y del corazón",
    "items": [
      {
        "itemNumber": 139,
        "text": "الْخُشُوعُ",
        "latin": "Al-khushūʿ",
        "explanationAr": "سُكُونُ الْقَلْبِ وَخُضُوعُهُ لِلَّهِ، وَيَظْهَرُ أَثَرُهُ عَلَى الْجَوَارِحِ فِي الصَّلَاةِ.",
        "explanationEs": "El khushūʿ (recogimiento)\nQuietud y sumisión del corazón ante Allah, cuyo efecto se ve en el cuerpo durante la oración.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/283984/"
      },
      {
        "itemNumber": 140,
        "text": "الْمُحَاسَبَةُ",
        "latin": "Al-muḥāsaba",
        "explanationAr": "أَنْ يَنْظُرَ الْعَبْدُ فِي أَعْمَالِهِ، فَيَشْكُرَ عَلَى الْحَسَنِ وَيَتُوبَ مِنَ السَّيِّئِ.",
        "explanationEs": "El examen de conciencia\nRevisar las propias acciones: agradecer las buenas y arrepentirse de las malas.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/74734/"
      },
      {
        "itemNumber": 141,
        "text": "الْمُرَاقَبَةُ",
        "latin": "Al-murāqaba",
        "explanationAr": "دَوَامُ عِلْمِ الْعَبْدِ بِاطِّلَاعِ اللَّهِ عَلَيْهِ فِي السِّرِّ وَالْعَلَنِ.",
        "explanationEs": "La murāqaba (vigilancia)\nSer siempre consciente de que Allah te ve y te conoce, en lo oculto y en lo manifiesto.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/127228/"
      },
      {
        "itemNumber": 142,
        "text": "النَّفْسُ",
        "latin": "An-nafs",
        "explanationAr": "ذَاتُ الْإِنْسَانِ، وَلَهَا ثَلَاثُ أَحْوَالٍ: الْأَمَّارَةُ بِالسُّوءِ، وَاللَّوَّامَةُ، وَالْمُطْمَئِنَّةُ.",
        "explanationEs": "El nafs (el yo)\nLa propia persona, con tres estados: la que incita al mal, la que se reprocha y la serena.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/346897/"
      },
      {
        "itemNumber": 143,
        "text": "التَّزْكِيَةُ",
        "latin": "At-tazkiya",
        "explanationAr": "تَطْهِيرُ النَّفْسِ مِنَ الذُّنُوبِ وَالْأَخْلَاقِ الذَّمِيمَةِ، وَتَنْمِيَتُهَا بِالطَّاعَةِ وَالْأَخْلَاقِ الْحَسَنَةِ.",
        "explanationEs": "La purificación (tazkiya)\nLimpiar el alma de pecados y malos rasgos, y hacerla crecer con obediencia y buen carácter.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/346897/"
      },
      {
        "itemNumber": 144,
        "text": "الزُّهْدُ",
        "latin": "Az-zuhd",
        "explanationAr": "تَرْكُ مَا لَا يَنْفَعُ فِي الْآخِرَةِ، وَلَا يَعْنِي تَرْكَ الْمُبَاحِ كُلِّهِ.",
        "explanationEs": "El zuhd (desapego)\nDejar lo que no beneficia en la otra vida. No significa renunciar a todo lo lícito.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/20776/"
      },
      {
        "itemNumber": 145,
        "text": "الْوَرَعُ",
        "latin": "Al-waraʿ",
        "explanationAr": "اجْتِنَابُ الشُّبُهَاتِ خَشْيَةَ الْوُقُوعِ فِي الْحَرَامِ.",
        "explanationEs": "El wara (escrúpulo)\nEvitar lo dudoso por temor a caer en lo prohibido.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/22170/"
      },
      {
        "itemNumber": 146,
        "text": "الْخَوْفُ وَالرَّجَاءُ",
        "latin": "Al-khawf wa ar-rajāʾ",
        "explanationAr": "جَنَاحَا الْمُؤْمِنِ: يَخَافُ عِقَابَ اللَّهِ وَيَرْجُو رَحْمَتَهُ، فَلَا يَيْأَسُ وَلَا يَأْمَنُ.",
        "explanationEs": "El temor y la esperanza\nLas dos alas del creyente: teme el castigo de Allah y espera su misericordia, sin desesperar ni sentirse a salvo.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/13043/"
      }
    ]
  },
  {
    "id": "glosario_hima",
    "titleAr": "الرُّقْيَةُ وَالْحِمَايَةُ",
    "titleEs": "Ruqya y protección",
    "items": [
      {
        "links": [{"section": "ruqyah", "group": "ruqyah_shariyah_complete_healing", "ar": "الرُّقْيَةُ الشَّرْعِيَّةُ الْكَامِلَةُ", "es": "Ruqya Shariyah completa"}],
        "itemNumber": 131,
        "text": "الْمَسُّ",
        "latin": "Al-mass",
        "explanationAr": "أَذًى يُصِيبُ الْإِنْسَانَ مِنَ الْجِنِّ، وَعِلَاجُهُ بِالرُّقْيَةِ الشَّرْعِيَّةِ وَالْأَذْكَارِ.",
        "explanationEs": "El mass (toque de los genios)\nDaño que un genio puede causar a una persona. Se trata con la ruqya legítima y con los azkar.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/3269/"
      },
      {
        "links": [{"section": "azkar", "group": "waswasa", "ar": "الْوَسْوَسَةُ وَطَرْدُ الشَّيْطَانِ", "es": "Susurros y ahuyentar a Shaitán"}],
        "itemNumber": 132,
        "text": "الْوَسْوَسَةُ",
        "latin": "Al-waswasa",
        "explanationAr": "مَا يُلْقِيهِ الشَّيْطَانُ فِي النَّفْسِ مِنْ خَوَاطِرَ سُوءٍ، وَعِلَاجُهَا بِالِاسْتِعَاذَةِ بِاللَّهِ وَالْإِعْرَاضِ عَنْهَا.",
        "explanationEs": "La waswasa (susurro)\nLos malos pensamientos que el demonio echa en el corazón. Se combate pidiendo refugio en Allah e ignorándolos.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/73980/"
      },
      {
        "links": [{"section": "azkar", "group": "sabah", "num": 3, "ar": "سُورَةُ الْفَلَقِ", "es": "Sura al-Falaq (adhkar de la mañana)"}, {"section": "azkar", "group": "sabah", "num": 4, "ar": "سُورَةُ النَّاسِ", "es": "Sura an-Nas (adhkar de la mañana)"}],
        "itemNumber": 133,
        "text": "الْمُعَوِّذَتَانِ",
        "latin": "Al-muʿawwidhatān",
        "explanationAr": "سُورَتَا الْفَلَقِ وَالنَّاسِ، يُسْتَعَاذُ بِهِمَا مِنْ كُلِّ شَرٍّ، وَيُسَنُّ قِرَاءَتُهُمَا صَبَاحًا وَمَسَاءً وَعِنْدَ النَّوْمِ.",
        "explanationEs": "Las dos súplicas de refugio\nLas suras Al-Falaq y An-Nas. Se recitan para refugiarse de todo mal, por la mañana, por la tarde y al dormir.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/75596/"
      },
      {
        "links": [{"section": "azkar", "group": "nawm", "num": 50, "ar": "آيَةُ الْكُرْسِيِّ", "es": "Ayat al-Kursi"}],
        "itemNumber": 134,
        "text": "آيَةُ الْكُرْسِيِّ",
        "latin": "Āyat al-kursī",
        "explanationAr": "الْآيَةُ ٢٥٥ مِنْ سُورَةِ الْبَقَرَةِ، أَعْظَمُ آيَةٍ فِي الْقُرْآنِ، وَمَنْ قَرَأَهَا عِنْدَ نَوْمِهِ لَمْ يَزَلْ عَلَيْهِ مِنَ اللَّهِ حَافِظٌ.",
        "explanationEs": "El versículo del Trono\nAleya 255 de Al-Baqara, la más grande del Corán. Quien la recita al dormir tiene un protector de Allah durante la noche.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/hadith/sharh/141083"
      },
      {
        "itemNumber": 135,
        "text": "الْحِرْزُ",
        "latin": "Al-ḥirz",
        "explanationAr": "الْحِفْظُ وَالْمَنَعَةُ؛ وَمَنْ قَالَ ذِكْرَ التَّهْلِيلِ مِائَةَ مَرَّةٍ كَانَ فِي حِرْزٍ مِنَ الشَّيْطَانِ يَوْمَهُ ذَلِكَ.",
        "explanationEs": "El ḥirz (protección)\nResguardo y defensa. Quien dice cien veces «No hay más dios que Allah…» queda protegido del demonio durante ese día.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/19888/"
      },
      {
        "itemNumber": 136,
        "text": "الْحِجَامَةُ",
        "latin": "Al-ḥijāma",
        "explanationAr": "عِلَاجٌ نَبَوِيٌّ بِإِخْرَاجِ الدَّمِ مِنَ الْجِلْدِ بِالْكُؤُوسِ، وَهِيَ مُبَاحَةٌ وَمَرْوِيَّةٌ فِي السُّنَّةِ.",
        "explanationEs": "La hiyama (ventosas)\nTratamiento que consiste en extraer sangre de la piel con ventosas. Es lícito y se menciona en la Sunna.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/135818/"
      },
      {
        "links": [{"section": "azkar", "group": "karb_khawf", "num": 141, "ar": "اللَّهُ اللَّهُ رَبِّي لَا أُشْرِكُ بِهِ شَيْئًا", "es": "Allāh Allāh Rabbī lā ushriku bihi shayʾan"}],
        "itemNumber": 137,
        "text": "الْكَرْبُ",
        "latin": "Al-karb",
        "explanationAr": "الْغَمُّ الشَّدِيدُ الَّذِي يَأْخُذُ بِالنَّفْسِ؛ وَمِنْ دُعَائِهِ: «اللَّهُ اللَّهُ رَبِّي لَا أُشْرِكُ بِهِ شَيْئًا».",
        "explanationEs": "El karb (angustia)\nLa pena intensa que oprime el alma. Entre sus súplicas está: «Allah, Allah es mi Señor, no le asocio nada».",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/293725/"
      },
      {
        "links": [{"section": "azkar", "group": "karb_khawf", "num": 137, "ar": "الِاسْتِعَاذَةُ مِنَ الْهَمِّ وَالْحَزَنِ", "es": "Refugio contra la preocupación y la tristeza"}],
        "itemNumber": 138,
        "text": "الْهَمُّ وَالْحَزَنُ",
        "latin": "Al-hamm wa al-ḥazan",
        "explanationAr": "الْهَمُّ أَلَمُ النَّفْسِ مِمَّا يُتَوَقَّعُ، وَالْحَزَنُ أَلَمُهَا مِمَّا وَقَعَ؛ وَيُقَالُ: «اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ».",
        "explanationEs": "La preocupación y la tristeza\nEl hamm es el dolor por lo que se teme que ocurra; el ḥazan, por lo que ya ocurrió. Se pide refugio en Allah de ambos.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/hadith/sharh/1034"
      }
    ]
  },
  {
    "id": "glosario_fuentes",
    "titleAr": "الْقُرْآنُ وَالسُّنَّةُ وَالْعُلُومُ",
    "titleEs": "Corán, Sunna y ciencias",
    "items": [
      {
        "itemNumber": 55,
        "text": "الْقُرْآنُ",
        "latin": "Al-Qurʾān",
        "explanationAr": "كَلَامُ اللَّهِ الْمُنَزَّلُ عَلَى نَبِيِّهِ مُحَمَّدٍ ﷺ، الْمُتَعَبَّدُ بِتِلَاوَتِهِ.",
        "explanationEs": "El Corán\nLa Palabra de Allah, revelada al Profeta Muhammad ﷺ por medio de Yibril, cuya recitación es adoración.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/38290/"
      },
      {
        "itemNumber": 56,
        "text": "السُّورَةُ",
        "latin": "Sūra",
        "explanationAr": "طَائِفَةٌ مِنَ الْقُرْآنِ لَهَا اسْمٌ وَبِدَايَةٌ وَنِهَايَةٌ، وَعَدَدُهَا مِائَةٌ وَأَرْبَعَ عَشْرَةَ.",
        "explanationEs": "Sura\nCada uno de los 114 capítulos del Corán.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/243157/"
      },
      {
        "itemNumber": 57,
        "text": "الْآيَةُ",
        "latin": "Āya",
        "explanationAr": "جُمْلَةٌ مِنَ الْقُرْآنِ ذَاتُ مَطْلَعٍ وَمَقْطَعٍ مُنْدَرِجَةٌ فِي سُورَةٍ.",
        "explanationEs": "Aleya\nCada versículo del Corán. La palabra significa también «signo» o «prueba».",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/243157/"
      },
      {
        "itemNumber": 58,
        "text": "الْجُزْءُ",
        "latin": "Juzʾ",
        "explanationAr": "وَاحِدٌ مِنْ ثَلَاثِينَ قِسْمًا يُقَسَّمُ إِلَيْهَا الْقُرْآنُ.",
        "explanationEs": "Yuz\nCada una de las 30 partes iguales en que se divide el Corán para facilitar su lectura.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/33104/"
      },
      {
        "itemNumber": 59,
        "text": "الْحِزْبُ",
        "latin": "Ḥizb",
        "explanationAr": "نِصْفُ الْجُزْءِ، وَالْقُرْآنُ سِتُّونَ حِزْبًا.",
        "explanationEs": "Hizb\nMitad de un yuz: el Corán tiene 60 hizb. Muy usado en Marruecos para la lectura diaria.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/55102/"
      },
      {
        "itemNumber": 60,
        "text": "التَّفْسِيرُ",
        "latin": "Tafsīr",
        "explanationAr": "بَيَانُ مَعَانِي آيَاتِ الْقُرْآنِ الْكَرِيمِ.",
        "explanationEs": "Tafsir (exégesis)\nExplicación del significado de las aleyas del Corán.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/41213/"
      },
      {
        "itemNumber": 61,
        "text": "التَّجْوِيدُ",
        "latin": "Tajwīd",
        "explanationAr": "إِعْطَاءُ كُلِّ حَرْفٍ حَقَّهُ وَمُسْتَحَقَّهُ عِنْدَ تِلَاوَةِ الْقُرْآنِ.",
        "explanationEs": "Tajwid\nReglas para recitar el Corán correctamente, pronunciando cada letra como corresponde.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/41793/"
      },
      {
        "itemNumber": 62,
        "text": "الرِّوَايَةُ",
        "latin": "Riwāya",
        "explanationAr": "مَا يُنْسَبُ إِلَى الرَّاوِي عَنِ الْإِمَامِ الْقَارِئِ، كَرِوَايَةِ وَرْشٍ عَنْ نَافِعٍ.",
        "explanationEs": "Riwaya (lectura transmitida)\nCada forma auténtica de recitar el Corán transmitida desde el Profeta ﷺ, como Warsh o Hafs.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/11163/"
      },
      {
        "itemNumber": 63,
        "text": "الْحَدِيثُ",
        "latin": "Ḥadīth",
        "explanationAr": "مَا أُضِيفَ إِلَى النَّبِيِّ ﷺ مِنْ قَوْلٍ أَوْ فِعْلٍ أَوْ تَقْرِيرٍ أَوْ صِفَةٍ.",
        "explanationEs": "Hadiz\nLo que se transmite del Profeta ﷺ: sus palabras, actos, aprobaciones o descripciones.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/25676/"
      },
      {
        "itemNumber": 64,
        "text": "السُّنَّةُ",
        "latin": "Sunna",
        "explanationAr": "مَا أُثِرَ عَنِ النَّبِيِّ ﷺ مِنْ قَوْلٍ أَوْ فِعْلٍ أَوْ تَقْرِيرٍ أَوْ صِفَةٍ، وَهِيَ طَرِيقَتُهُ الْمُتَّبَعَةُ.",
        "explanationEs": "Sunna\nLo transmitido del Profeta ﷺ en palabras, actos, aprobaciones o descripción; es su camino a seguir. En fiqh también significa un acto recomendado.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://islamweb.net/ar/fatwa/162959/"
      },
      {
        "itemNumber": 65,
        "text": "الصَّحِيحُ",
        "latin": "Ṣaḥīḥ",
        "explanationAr": "مَا اتَّصَلَ سَنَدُهُ بِنَقْلِ الْعَدْلِ الضَّابِطِ مِنْ غَيْرِ شُذُوذٍ وَلَا عِلَّةٍ.",
        "explanationEs": "Sahih (auténtico)\nHadiz con cadena de transmisión continua de narradores fiables y precisos, sin anomalía ni defecto oculto.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://audio.islamweb.net/audio/index.php?page=FullContent&audioid=179853"
      },
      {
        "itemNumber": 66,
        "text": "السِّيرَةُ",
        "latin": "Sīra",
        "explanationAr": "أَخْبَارُ حَيَاةِ النَّبِيِّ ﷺ مِنْ مَوْلِدِهِ إِلَى وَفَاتِهِ، وَبَيَانُ أَخْلَاقِهِ وَصِفَاتِهِ وَدَلَائِلِ نُبُوَّتِهِ وَمَغَازِيهِ.",
        "explanationEs": "Sira\nLas noticias de la vida del Profeta ﷺ desde su nacimiento hasta su muerte: su carácter, sus cualidades, las pruebas de su profecía y sus expediciones.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/196213/"
      },
      {
        "itemNumber": 67,
        "text": "الصَّحَابِيُّ",
        "latin": "Ṣaḥābī",
        "explanationAr": "مَنْ لَقِيَ النَّبِيَّ ﷺ مُؤْمِنًا بِهِ وَمَاتَ عَلَى الْإِسْلَامِ.",
        "explanationEs": "Compañero (sahabi)\nQuien se encontró con el Profeta ﷺ creyendo en él y murió como musulmán.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/606/"
      },
      {
        "itemNumber": 68,
        "text": "الشَّرِيعَةُ",
        "latin": "Sharīʿa",
        "explanationAr": "مَا شَرَعَهُ اللَّهُ لِعِبَادِهِ مِنَ الْعَقَائِدِ وَالْعِبَادَاتِ وَالْمُعَامَلَاتِ.",
        "explanationEs": "Sharía\nEl conjunto de normas que Allah ha establecido para Sus siervos en la creencia, la adoración y el trato con los demás.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/15620/"
      },
      {
        "itemNumber": 69,
        "text": "الْفِقْهُ",
        "latin": "Fiqh",
        "explanationAr": "الْعِلْمُ بِالْأَحْكَامِ الشَّرْعِيَّةِ الْعَمَلِيَّةِ الْمُكْتَسَبُ مِنْ أَدِلَّتِهَا التَّفْصِيلِيَّةِ.",
        "explanationEs": "Fiqh (jurisprudencia)\nConocimiento de las normas prácticas de la religión, obtenido de sus pruebas detalladas.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/14/"
      },
      {
        "itemNumber": 70,
        "text": "الْمَذْهَبُ",
        "latin": "Madhhab",
        "explanationAr": "مَا ذَهَبَ إِلَيْهِ إِمَامٌ مِنَ الْأَئِمَّةِ فِي الْأَحْكَامِ، وَالْمَذَاهِبُ الْمَشْهُورَةُ أَرْبَعَةٌ.",
        "explanationEs": "Madhab (escuela)\nEscuela de jurisprudencia. Las cuatro conocidas son la maliki, la hanafi, la shafii y la hanbali; en el Magreb se sigue la maliki.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/346867/"
      },
      {
        "itemNumber": 71,
        "text": "الْفَتْوَى",
        "latin": "Fatwā",
        "explanationAr": "تَبْيِينُ الْحُكْمِ الشَّرْعِيِّ لِلسَّائِلِ عَنْهُ، وَالْإِخْبَارُ عَنْهُ بِلَا إِلْزَامٍ.",
        "explanationEs": "Fatua\nAclarar la norma religiosa a quien pregunta por ella, informando de ella sin carácter obligatorio (a diferencia de la sentencia de un juez).",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/1616/"
      },
      {
        "itemNumber": 72,
        "text": "الْإِجْمَاعُ",
        "latin": "Ijmāʿ",
        "explanationAr": "اتِّفَاقُ مُجْتَهِدِي الْأُمَّةِ بَعْدَ وَفَاةِ النَّبِيِّ ﷺ عَلَى حُكْمٍ شَرْعِيٍّ.",
        "explanationEs": "Ijma (consenso)\nAcuerdo de los sabios de la comunidad de una época sobre una norma religiosa.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/363/"
      },
      {
        "itemNumber": 147,
        "text": "حَسَنٌ",
        "latin": "Ḥasan",
        "explanationAr": "حَدِيثٌ مَقْبُولٌ اتَّصَلَ سَنَدُهُ بِرُوَاةٍ عُدُولٍ، غَيْرَ أَنَّ ضَبْطَ رَاوِيهِ أَخَفُّ مِنْ ضَبْطِ رُوَاةِ الصَّحِيحِ، وَسَلِمَ مِنَ الشُّذُوذِ وَالْعِلَّةِ.",
        "explanationEs": "Ḥasan (hadiz aceptable)\nHadiz aceptable con la cadena conectada y transmisores íntegros, pero con una memoria algo menos firme que la de los transmisores del hadiz ṣaḥīḥ. No tiene anomalía ni defecto oculto.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/58345/"
      },
      {
        "itemNumber": 148,
        "text": "ضَعِيفٌ",
        "latin": "Ḍaʿīf",
        "explanationAr": "حَدِيثٌ فَقَدَ شَرْطًا أَوْ أَكْثَرَ مِنْ شُرُوطِ الْحَدِيثِ الْمَقْبُولِ، وَلَا يُعْمَلُ بِهِ إِذَا اشْتَدَّ ضَعْفُهُ، كَأَنْ يَكُونَ فِي إِسْنَادِهِ كَذَّابٌ أَوِ انْقِطَاعٌ.",
        "explanationEs": "Ḍaʿīf (hadiz débil)\nHadiz al que le falta alguna o varias de las condiciones del hadiz aceptable. Según el Sheij Ibn Baz, no se actúa con el que es muy débil, por ejemplo si su cadena tiene un mentiroso o está cortada.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/1014/"
      },
      {
        "itemNumber": 149,
        "text": "مَوْضُوعٌ",
        "latin": "Mawḍūʿ",
        "explanationAr": "كَلَامٌ مُخْتَلَقٌ نَسَبَهُ بَعْضُ النَّاسِ إِلَى النَّبِيِّ ﷺ كَذِبًا، وَهُوَ شَرُّ الْأَحَادِيثِ الضَّعِيفَةِ، وَلَا تَجُوزُ رِوَايَتُهُ إِلَّا مَعَ بَيَانِ وَضْعِهِ.",
        "explanationEs": "Mawḍūʿ (hadiz inventado)\nPalabras fabricadas que algunos atribuyeron falsamente al Profeta ﷺ. Es el peor hadiz débil y no debe transmitirse sin aclarar que es inventado.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/27850/"
      },
      {
        "itemNumber": 150,
        "text": "إِسْنَادٌ",
        "latin": "Isnād",
        "explanationAr": "سِلْسِلَةُ الرُّوَاةِ الَّذِينَ نَقَلُوا الْحَدِيثَ إِلَى قَائِلِهِ، وَبِهِ يُمَيَّزُ صَحِيحُهُ مِنْ ضَعِيفِهِ، وَقَدْ قَالَ ابْنُ الْمُبَارَكِ إِنَّهُ مِنَ الدِّينِ.",
        "explanationEs": "Isnād (cadena de transmisión)\nLa cadena de transmisores que lleva un hadiz hasta quien lo dijo. Con ella se distingue el hadiz sólido del débil. Ibn al-Mubārak dijo que el isnād forma parte de la religión.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/27005/"
      },
      {
        "itemNumber": 151,
        "text": "حَدِيثٌ قُدْسِيٌّ",
        "latin": "Ḥadīth qudsī",
        "explanationAr": "مَا يَرْوِيهِ النَّبِيُّ ﷺ عَنْ رَبِّهِ، مَعْنَاهُ مِنَ اللَّهِ وَلَفْظُهُ مِنَ النَّبِيِّ ﷺ عَلَى الرَّاجِحِ، وَلَيْسَ لَهُ حُكْمُ الْقُرْآنِ فِي الْإِعْجَازِ وَلَا يُجْزِئُ فِي الصَّلَاةِ.",
        "explanationEs": "Ḥadīth qudsī (hadiz sagrado)\nLo que el Profeta ﷺ transmite de su Señor. Según la opinión más sólida, su sentido es de Allah y su formulación del Profeta. No tiene las reglas del Corán: no es inimitable y no sustituye al Corán en la oración.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/72798/"
      },
      {
        "itemNumber": 152,
        "text": "وَحْيٌ",
        "latin": "Waḥy",
        "explanationAr": "إِعْلَامُ اللَّهِ مَنِ اصْطَفَاهُ مِنْ عِبَادِهِ بِمَا شَاءَ إِعْلَامًا خَفِيًّا سَرِيعًا، وَوَحْيُ التَّشْرِيعِ خَاصٌّ بِالْأَنْبِيَاءِ وَالرُّسُلِ، أَمَّا الْإِلْهَامُ فَقَدْ يَكُونُ لِغَيْرِهِمْ.",
        "explanationEs": "Waḥy (revelación)\nLa comunicación rápida y oculta de Allah a quien elige de entre Sus siervos. La revelación legislativa es exclusiva de los profetas y mensajeros; la inspiración (ilhām), en sentido amplio, puede darse también a otros.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/280525/"
      },
      {
        "itemNumber": 153,
        "text": "أَسْبَابُ النُّزُولِ",
        "latin": "Asbāb an-nuzūl",
        "explanationAr": "الْوَاقِعَةُ أَوِ السُّؤَالُ الَّذِي نَزَلَتِ الْآيَةُ أَوِ السُّورَةُ عَقِبَهُ بَيَانًا لَهُ، وَمَعْرِفَتُهَا تُعِينُ عَلَى فَهْمِ الْآيَةِ، وَالْعِبْرَةُ بِعُمُومِ اللَّفْظِ لَا بِخُصُوصِ السَّبَبِ.",
        "explanationEs": "Asbāb an-nuzūl (circunstancias de la revelación)\nEl suceso o la pregunta a raíz de los cuales descendió un versículo o una sura para aclararlos. Conocerlos ayuda a entender el versículo; la regla es que cuenta la generalidad de la expresión, no lo particular del motivo.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/68832/"
      },
      {
        "itemNumber": 154,
        "text": "مُحْكَمٌ",
        "latin": "Muḥkam",
        "explanationAr": "مِنَ الْقُرْآنِ مَا وَضَحَ مَعْنَاهُ، كَآيَاتِ الصَّلَاةِ وَالْمُحَرَّمَاتِ، وَإِلَيْهِ يُرَدُّ مَا اشْتَبَهَ مَعْنَاهُ.",
        "explanationEs": "Muḥkam (versículo claro y preciso)\nLa parte del Corán cuyo sentido es evidente, como los versículos sobre la oración o lo prohibido. A él se remite lo que resulta ambiguo.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/21213/"
      },
      {
        "itemNumber": 155,
        "text": "مُتَشَابِهٌ",
        "latin": "Mutashābih",
        "explanationAr": "آيَاتٌ يَحْتَاجُ مَعْنَاهَا إِلَى بَيَانٍ وَرَدٍّ إِلَى الْمُحْكَمِ، وَقِيلَ: هُوَ مَا اسْتَأْثَرَ اللَّهُ بِعِلْمِهِ، وَقَدِ اخْتَلَفَ الْعُلَمَاءُ فِي حَدِّهِ.",
        "explanationEs": "Mutashābih (versículo que requiere explicación)\nVersículos cuyo sentido necesita aclaración y remitirse a lo muḥkam. Según otra opinión, es lo que solo Allah conoce. Los sabios discrepan en su definición.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/57733/"
      },
      {
        "itemNumber": 156,
        "text": "نَاسِخٌ وَمَنْسُوخٌ",
        "latin": "Nāsikh wa mansūkh",
        "explanationAr": "النَّسْخُ رَفْعُ حُكْمٍ شَرْعِيٍّ مُتَقَدِّمٍ بِخِطَابٍ شَرْعِيٍّ مُتَأَخِّرٍ؛ فَالنَّاسِخُ الْحُكْمُ الْمُتَأَخِّرُ وَالْمَنْسُوخُ الْحُكْمُ الْمُتَقَدِّمُ، وَلَا يَثْبُتُ إِلَّا بِالْكِتَابِ وَالسُّنَّةِ، كَنَسْخِ وُجُوبِ صَوْمِ عَاشُورَاءَ بِصِيَامِ رَمَضَانَ.",
        "explanationEs": "Nāsikh wa mansūkh (abrogante y abrogado)\nEl naskh es la retirada de una norma legal anterior mediante un texto legal posterior. El nāsikh es la norma posterior y el mansūkh la anterior. Solo se establece con el Corán y la Sunna. Ejemplo: el ayuno de ʿĀshūrāʾ dejó de ser obligatorio al prescribirse el de Ramadán.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/6166/"
      },
      {
        "itemNumber": 157,
        "text": "قِرَاءَاتٌ",
        "latin": "Qirāʾāt",
        "explanationAr": "أَوْجُهُ أَدَاءِ الْقُرْآنِ الْمَنْقُولَةُ عَنِ الْقُرَّاءِ، وَالْمُتَوَاتِرُ مِنْهَا عَشْرُ قِرَاءَاتٍ لِكُلِّ قَارِئٍ رَاوِيَانِ، كَقِرَاءَةِ نَافِعٍ بِرِوَايَةِ قَالُونَ.",
        "explanationEs": "Qirāʾāt (lecturas del Corán)\nLas formas de recitar el Corán transmitidas por los grandes recitadores. Las transmitidas por tawātur son diez, y cada recitador tiene dos transmisores principales, por ejemplo la lectura de Nāfiʿ por la transmisión de Qālūn.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/11163/"
      },
      {
        "itemNumber": 158,
        "text": "مُصْحَفٌ",
        "latin": "Muṣḥaf",
        "explanationAr": "الْكِتَابُ الْمَكْتُوبُ الَّذِي جُمِعَ فِيهِ الْقُرْآنُ، وَيَحْرُمُ عَلَى الْمُحْدِثِ مَسُّهُ عِنْدَ جُمْهُورِ الْفُقَهَاءِ، أَمَّا كُتُبُ التَّفْسِيرِ فَلَا حَرَجَ فِي مَسِّهَا.",
        "explanationEs": "Muṣḥaf (ejemplar del Corán)\nEl libro escrito donde se recoge el Corán. Según la mayoría de los juristas, quien está en estado de impureza (ḥadath) no debe tocarlo. Los libros de exégesis no tienen esa misma norma.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/35557/"
      },
      {
        "itemNumber": 159,
        "text": "وَقْفٌ وَابْتِدَاءٌ",
        "latin": "Waqf wa-ibtidāʾ",
        "explanationAr": "الْوَقْفُ قَطْعُ الصَّوْتِ عِنْدَ آخِرِ الْكَلِمَةِ بِنِيَّةِ اسْتِئْنَافِ الْقِرَاءَةِ، وَالِابْتِدَاءُ الشُّرُوعُ فِي الْقِرَاءَةِ بَعْدَ قَطْعٍ أَوْ وَقْفٍ، وَالضَّابِطُ فِيهِمَا سَلَامَةُ الْمَعْنَى: تَامٌّ وَحَسَنٌ وَقَبِيحٌ.",
        "explanationEs": "Waqf wa-ibtidāʾ (detenerse y reanudar)\nWaqf es la pausa al final de una palabra con intención de seguir recitando; ibtidāʾ es comenzar o reanudar. El criterio es que el sentido quede correcto. Las pausas son completas, buenas o desaconsejables.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/42052/"
      }
    ]
  },
  {
    "id": "glosario_ahkam",
    "titleAr": "الْأَحْكَامُ وَالْأَخْلَاقُ",
    "titleEs": "Normas y ética",
    "items": [
      {
        "itemNumber": 73,
        "text": "الْفَرْضُ",
        "latin": "Farḍ / Wājib",
        "explanationAr": "مَا طَلَبَ الشَّرْعُ فِعْلَهُ طَلَبًا جَازِمًا، يُثَابُ فَاعِلُهُ وَيَسْتَحِقُّ الْعِقَابَ تَارِكُهُ، وَيُسَمَّى الْوَاجِبَ.",
        "explanationEs": "Fard (obligatorio)\nLo que la Sharía pide hacer de forma tajante: quien lo cumple es recompensado y quien lo deja merece castigo. También se llama wayib.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/80/"
      },
      {
        "itemNumber": 74,
        "text": "الْمَنْدُوبُ",
        "latin": "Mandūb / Mustaḥabb",
        "explanationAr": "مَا طَلَبَ الشَّارِعُ فِعْلَهُ طَلَبًا غَيْرَ جَازِمٍ، يُثَابُ فَاعِلُهُ وَلَا يُعَاقَبُ تَارِكُهُ.",
        "explanationEs": "Recomendado\nLo que la Sharía pide hacer sin carácter tajante: quien lo hace es recompensado y quien lo deja no es castigado.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/59/"
      },
      {
        "itemNumber": 75,
        "text": "الْمُبَاحُ",
        "latin": "Mubāḥ",
        "explanationAr": "مَا خَيَّرَ الشَّارِعُ الْمُكَلَّفَ بَيْنَ فِعْلِهِ وَتَرْكِهِ.",
        "explanationEs": "Permitido\nAquello en lo que la Sharía deja elegir entre hacerlo o dejarlo.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/59/"
      },
      {
        "itemNumber": 76,
        "text": "الْمَكْرُوهُ",
        "latin": "Makrūh",
        "explanationAr": "مَا طَلَبَ الشَّارِعُ تَرْكَهُ طَلَبًا غَيْرَ جَازِمٍ، يُثَابُ تَارِكُهُ امْتِثَالًا وَلَا يُعَاقَبُ فَاعِلُهُ.",
        "explanationEs": "Makruh (desaconsejado)\nLo que la Sharía pide dejar sin carácter tajante: quien lo deja por obediencia es recompensado y quien lo hace no es castigado.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/59/"
      },
      {
        "itemNumber": 77,
        "text": "الْحَلَالُ",
        "latin": "Ḥalāl",
        "explanationAr": "مَا أَبَاحَهُ اللَّهُ تَعَالَى.",
        "explanationEs": "Halal (lícito)\nLo que Allah ha permitido.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/108/"
      },
      {
        "itemNumber": 78,
        "text": "الْحَرَامُ",
        "latin": "Ḥarām",
        "explanationAr": "مَا طَلَبَ الشَّارِعُ تَرْكَهُ طَلَبًا جَازِمًا، يُثَابُ تَارِكُهُ امْتِثَالًا وَيَسْتَحِقُّ الْعِقَابَ فَاعِلُهُ.",
        "explanationEs": "Haram (prohibido)\nLo que la Sharía pide dejar de forma tajante: quien lo deja por obediencia es recompensado y quien lo hace merece castigo.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/osolfeqh/126/"
      },
      {
        "itemNumber": 79,
        "text": "الْبِدْعَةُ",
        "latin": "Bidʿa",
        "explanationAr": "مَا أُحْدِثَ فِي الدِّينِ مِمَّا لَيْسَ لَهُ أَصْلٌ فِي الشَّرْعِ.",
        "explanationEs": "Bida (innovación)\nLo que se introduce en la religión como forma de adoración sin base en el Corán ni en la Sunna.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/aqeeda/3137/"
      },
      {
        "itemNumber": 80,
        "text": "النِّيَّةُ",
        "latin": "Niyya",
        "explanationAr": "عَقْدُ الْقَلْبِ وَقَصْدُهُ إِلَى فِعْلِ الشَّيْءِ، وَمَحَلُّهَا الْقَلْبُ وَلَا يُشْرَعُ التَّلَفُّظُ بِهَا، وَإِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ.",
        "explanationEs": "Niyya (intención)\nFirme propósito del corazón de hacer algo. Su lugar es el corazón y no se prescribe pronunciarla. Las obras valen según las intenciones.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/247/"
      },
      {
        "itemNumber": 81,
        "text": "الْإِخْلَاصُ",
        "latin": "Ikhlāṣ",
        "explanationAr": "تَصْفِيَةُ الْعَمَلِ بِصَالِحِ النِّيَّةِ عَنْ جَمِيعِ شَوَائِبِ الشِّرْكِ، وَإِرَادَةُ وَجْهِ اللَّهِ وَحْدَهُ.",
        "explanationEs": "Ijlas (sinceridad)\nPurificar la obra, con una intención recta, de toda mezcla de shirk, buscando solo el rostro de Allah.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/aqeeda/343/"
      },
      {
        "itemNumber": 82,
        "text": "الرِّيَاءُ",
        "latin": "Riyāʾ",
        "explanationAr": "أَنْ يَعْمَلَ الْعِبَادَةَ لِيَرَاهُ النَّاسُ فَيَحْمَدُوهُ، وَهُوَ شِرْكٌ أَصْغَرُ.",
        "explanationEs": "Riya (ostentación)\nHacer una obra de adoración para ser visto y alabado por la gente. Es shirk menor.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/aqeeda/3026"
      },
      {
        "links": [{"section": "adya", "group": "adya_tawba_maghfirah", "ar": "أَدْعِيَةُ التَّوْبَةِ وَالْمَغْفِرَةِ", "es": "Súplicas para el arrepentimiento y el perdón"}],
        "itemNumber": 83,
        "text": "التَّوْبَةُ",
        "latin": "Tawba",
        "explanationAr": "الرُّجُوعُ إِلَى اللَّهِ بِتَرْكِ الذَّنْبِ وَالنَّدَمِ عَلَيْهِ وَالْعَزْمِ عَلَى عَدَمِ الْعَوْدِ.",
        "explanationEs": "Tawba (arrepentimiento)\nVolver a Allah dejando el pecado, lamentarlo y decidir no repetirlo; si afecta a otros, devolverles su derecho.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://www.dorar.net/hadith/sharh/92556"
      },
      {
        "itemNumber": 84,
        "text": "الصَّبْرُ",
        "latin": "Ṣabr",
        "explanationAr": "حَبْسُ النَّفْسِ عَلَى طَاعَةِ اللَّهِ وَعَنْ مَعْصِيَتِهِ وَعَلَى أَقْدَارِهِ الْمُؤْلِمَةِ.",
        "explanationEs": "Sabr (paciencia)\nMantenerse firme en la obediencia, apartarse de la desobediencia y aceptar el decreto doloroso sin quejarse contra Allah.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/alakhlaq/1765/"
      },
      {
        "itemNumber": 85,
        "text": "الشُّكْرُ",
        "latin": "Shukr",
        "explanationAr": "الِاعْتِرَافُ بِنِعَمِ اللَّهِ بِالْقَلْبِ، وَالثَّنَاءُ عَلَيْهِ بِاللِّسَانِ، وَاسْتِعْمَالُهَا فِي طَاعَتِهِ.",
        "explanationEs": "Shukr (gratitud)\nReconocer los favores de Allah con el corazón, alabarle con la lengua y usar Sus dones en Su obediencia.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/tafseer/2/25"
      },
      {
        "links": [{"section": "adya", "group": "adya_walidayn_ahya", "ar": "أَدْعِيَةٌ لِلْوَالِدَيْنِ الْأَحْيَاءِ", "es": "Súplicas para los padres vivos"}, {"section": "adya", "group": "adya_walidayn_mutawaffiyn", "ar": "أَدْعِيَةٌ لِلْوَالِدَيْنِ الْمُتَوَفَّيْنِ", "es": "Súplicas para los padres fallecidos"}],
        "itemNumber": 86,
        "text": "بِرُّ الْوَالِدَيْنِ",
        "latin": "Birr al-wālidayn",
        "explanationAr": "الْإِحْسَانُ إِلَى الْوَالِدَيْنِ وَطَاعَتُهُمَا فِي الْمَعْرُوفِ وَالدُّعَاءُ لَهُمَا.",
        "explanationEs": "Bondad con los padres\nTratar bien a los padres, obedecerles en el bien, ayudarles y suplicar por ellos, en vida y después de su muerte.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/alakhlaq/424/"
      },
      {
        "itemNumber": 87,
        "text": "صِلَةُ الرَّحِمِ",
        "latin": "Ṣilat ar-raḥim",
        "explanationAr": "الْإِحْسَانُ إِلَى الْأَقَارِبِ وَزِيَارَتُهُمْ وَتَفَقُّدُ أَحْوَالِهِمْ.",
        "explanationEs": "Mantener los lazos familiares\nHacer el bien a los parientes, visitarlos y preocuparse por ellos.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/alakhlaq/1855/"
      },
      {
        "itemNumber": 88,
        "text": "الْغِيبَةُ",
        "latin": "Ghība",
        "explanationAr": "ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ فِي غِيَابِهِ.",
        "explanationEs": "Ghiba (murmuración)\nHablar de tu hermano en su ausencia de algo que le disgustaría.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/alakhlaq/4641/"
      },
      {
        "links": [{"section": "ruqyah", "group": "ruqyah_shariyah_healing", "ar": "الرُّقْيَةُ الشَّرْعِيَّةُ لِلشِّفَاءِ", "es": "Ruqya Shariyah para la curación"}],
        "itemNumber": 89,
        "text": "الرُّقْيَةُ",
        "latin": "Ruqya",
        "explanationAr": "قِرَاءَةُ الْقُرْآنِ وَالْأَدْعِيَةِ الْمَأْثُورَةِ طَلَبًا لِلشِّفَاءِ مِنَ اللَّهِ.",
        "explanationEs": "Ruqya\nRecitar el Corán y las súplicas transmitidas para pedir a Allah la curación, sin fórmulas de shirk.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/5197/"
      },
      {
        "links": [{"section": "ruqyah", "group": "ruqyah_shariyah_complete_healing", "ar": "الرُّقْيَةُ الشَّرْعِيَّةُ الْكَامِلَةُ", "es": "Ruqya Shariyah completa"}],
        "itemNumber": 90,
        "text": "الْعَيْنُ",
        "latin": "ʿAyn",
        "explanationAr": "أَذًى يُصِيبُ الْإِنْسَانَ مِنْ نَظَرِ الْعَائِنِ بِإِذْنِ اللَّهِ.",
        "explanationEs": "El mal de ojo\nDaño que, con el permiso de Allah, puede causar la mirada de admiración o envidia. Se previene diciendo Masha'Allah y pidiendo la bendición.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/3221/"
      },
      {
        "links": [{"section": "ruqyah", "group": "ruqyah_shariyah_complete_healing", "ar": "الرُّقْيَةُ الشَّرْعِيَّةُ الْكَامِلَةُ", "es": "Ruqya Shariyah completa"}],
        "itemNumber": 91,
        "text": "الْحَسَدُ",
        "latin": "Ḥasad",
        "explanationAr": "تَمَنِّي زَوَالِ النِّعْمَةِ عَنِ الْغَيْرِ.",
        "explanationEs": "Hasad (envidia)\nDesear que otro pierda un bien que Allah le ha dado.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/alakhlaq/3820/"
      },
      {
        "links": [{"section": "ruqyah", "group": "ruqyah_shariyah_complete_healing", "ar": "الرُّقْيَةُ الشَّرْعِيَّةُ الْكَامِلَةُ", "es": "Ruqya Shariyah completa"}],
        "itemNumber": 92,
        "text": "السِّحْرُ",
        "latin": "Siḥr",
        "explanationAr": "عُقَدٌ وَرُقًى يُتَوَصَّلُ بِهَا إِلَى الْإِضْرَارِ بِاسْتِعَانَةٍ بِالشَّيَاطِينِ، وَهُوَ مِنَ الْمُوبِقَاتِ.",
        "explanationEs": "Sihr (brujería)\nPrácticas ocultas que buscan dañar con ayuda de los demonios. Está prohibida y es de los pecados más graves.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/aqeeda/2948/"
      },
      {
        "itemNumber": 170,
        "text": "أَمَانَةٌ",
        "latin": "Amānah",
        "explanationAr": "كُلُّ مَا ائْتُمِنَ عَلَيْهِ الْعَبْدُ: فَرَائِضُ اللَّهِ وَحُقُوقُهُ، وَحُقُوقُ النَّاسِ مِنَ الْوَدَائِعِ وَالْعَوَارِي وَالرُّهُونِ؛ وَضِدُّهَا الْخِيَانَةُ.",
        "explanationEs": "Amāna (honestidad, confianza, responsabilidad)\nTodo aquello que se le confía al siervo: los deberes hacia Allah y los derechos de la gente, como depósitos, préstamos y prendas. Su contrario es la traición.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/7492/"
      },
      {
        "itemNumber": 171,
        "text": "صِدْقٌ",
        "latin": "Ṣidq",
        "explanationAr": "الْإِخْبَارُ بِمَا يُوَافِقُ الْوَاقِعَ، وَيَكُونُ فِي الْقَوْلِ وَالْفِعْلِ، وَهُوَ يَهْدِي إِلَى الْبِرِّ وَالْبِرُّ يَهْدِي إِلَى الْجَنَّةِ.",
        "explanationEs": "Ṣidq (veracidad y sinceridad)\nDecir lo que corresponde a la realidad, tanto en las palabras como en los actos. Según el hadiz, la veracidad guía a la bondad y la bondad guía al Paraíso.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/109451/"
      },
      {
        "itemNumber": 172,
        "text": "تَوَاضُعٌ",
        "latin": "Tawāḍuʿ",
        "explanationAr": "الِانْقِيَادُ لِلْحَقِّ وَقَبُولُهُ مِمَّنْ جَاءَ بِهِ، وَخَفْضُ الْجَنَاحِ لِلنَّاسِ وَتَرْكُ التَّرَفُّعِ عَلَيْهِمْ؛ قَالَ النَّبِيُّ ﷺ: «مَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ».",
        "explanationEs": "Tawāḍuʿ (humildad)\nSometerse a la verdad y aceptarla de quien la diga, y tratar a la gente con trato humilde sin mirarla por encima del hombro. Dijo el Profeta ﷺ: «Nadie se humilla ante Allah sin que Allah lo eleve».",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://islamweb.net/ar/article/231175/"
      },
      {
        "itemNumber": 173,
        "text": "حَيَاءٌ",
        "latin": "Ḥayāʾ",
        "explanationAr": "خُلُقٌ كَرِيمٌ فِي الْقَلْبِ يَمْنَعُ صَاحِبَهُ مِنَ الْخِصَالِ الذَّمِيمَةِ وَيَحْمِلُهُ عَلَى مَكَارِمِ الْأَخْلَاقِ، وَهُوَ شُعْبَةٌ مِنَ الْإِيمَانِ.",
        "explanationEs": "Ḥayāʾ (pudor y modestia)\nUn noble rasgo del corazón que aparta a la persona de lo reprobable y la lleva a las buenas costumbres. Es una de las ramas de la fe.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/11879/"
      },
      {
        "itemNumber": 174,
        "text": "عَفْوٌ",
        "latin": "ʿAfw",
        "explanationAr": "التَّجَاوُزُ عَنِ الْمُسِيءِ وَتَرْكُ الِانْتِقَامِ مِنْهُ رَجَاءَ ثَوَابِ اللَّهِ؛ قَالَ النَّبِيُّ ﷺ: «وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا».",
        "explanationEs": "ʿAfw (perdón y disculpa)\nPasar por alto la ofensa de quien nos hizo daño y renunciar a vengarse, esperando la recompensa de Allah. Dijo el Profeta ﷺ: «Allah no aumenta a un siervo por perdonar sino en honor».",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/401320/"
      },
      {
        "itemNumber": 175,
        "text": "عَدْلٌ",
        "latin": "ʿAdl",
        "explanationAr": "وَضْعُ كُلِّ شَيْءٍ فِي مَوْضِعِهِ وَإِعْطَاءُ كُلِّ ذِي حَقٍّ حَقَّهُ بِلَا مَيْلٍ، وَهُوَ مَطْلُوبٌ فِي الْحُكْمِ وَالشَّهَادَةِ وَالْقَوْلِ وَالْمُعَامَلَةِ.",
        "explanationEs": "ʿAdl (justicia y equidad)\nPoner cada cosa en su lugar y dar a cada uno su derecho sin parcialidad. Se exige al juzgar, al testimoniar, al hablar y en el trato con los demás.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/35122/"
      },
      {
        "itemNumber": 176,
        "text": "رِفْقٌ",
        "latin": "Rifq",
        "explanationAr": "لِينُ الْجَانِبِ بِالْقَوْلِ وَالْفِعْلِ وَالْأَخْذُ بِالْأَسْهَلِ، وَهُوَ ضِدُّ الْعُنْفِ؛ قَالَ النَّبِيُّ ﷺ: «إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الْأَمْرِ كُلِّهِ».",
        "explanationEs": "Rifq (amabilidad, gentileza)\nSuavidad en el trato, de palabra y de obra, y preferir el camino más fácil. Es lo opuesto a la dureza. Dijo el Profeta ﷺ: «Allah es amable y ama la amabilidad en todos los asuntos».",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/184701/"
      },
      {
        "itemNumber": 177,
        "text": "إِيثَارٌ",
        "latin": "Īthār",
        "explanationAr": "أَنْ يُقَدِّمَ الْمَرْءُ غَيْرَهُ عَلَى نَفْسِهِ بِالشَّيْءِ مَعَ حَاجَتِهِ إِلَيْهِ، وَضِدُّهُ الْأَثَرَةُ وَالشُّحُّ، وَقَدْ أَثْنَى اللَّهُ عَلَى الْأَنْصَارِ بِهِ.",
        "explanationEs": "Īthār (preferir a los demás)\nDar a otro lo que uno mismo necesita, anteponiendo su bienestar al propio. Su contrario es el egoísmo y la avaricia. Allah elogió por ello a los Anṣār.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/38973/"
      },
      {
        "itemNumber": 178,
        "text": "حِلْمٌ",
        "latin": "Ḥilm",
        "explanationAr": "الْأَنَاةُ وَالتَّثَبُّتُ فِي الْأَمْرِ وَضَبْطُ النَّفْسِ عِنْدَ الْغَضَبِ وَكَظْمُ الْغَيْظِ، وَمِنْ أَسْمَاءِ اللَّهِ الْحَلِيمُ.",
        "explanationEs": "Ḥilm (paciencia, serenidad, dominio de la ira)\nCalma y reflexión ante los asuntos, control de uno mismo cuando se enfada y contener la ira. Al-Ḥalīm es uno de los nombres de Allah.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/20208/"
      },
      {
        "itemNumber": 179,
        "text": "عِفَّةٌ",
        "latin": "ʿIffah",
        "explanationAr": "حِفْظُ النَّفْسِ عَمَّا يَقْبُحُ وَيَشِينُهَا، وَالْكَفُّ عَنِ الْمَحَارِمِ وَالْفَوَاحِشِ وَعَنْ سُؤَالِ النَّاسِ.",
        "explanationEs": "ʿIffa (castidad y protección de la dignidad)\nPreservar el alma de lo indecoroso, abstenerse de lo prohibido y de las faltas graves, y no humillarse pidiendo a la gente.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/37828/"
      }
    ]
  },
  {
    "id": "glosario_sira",
    "titleAr": "السِّيرَةُ وَالْأَجْيَالُ الْأُولَى",
    "titleEs": "Historia y primeras generaciones",
    "items": [
      {
        "itemNumber": 180,
        "text": "هِجْرَةٌ",
        "latin": "Hijrah",
        "explanationAr": "انْتِقَالُ النَّبِيِّ ﷺ وَأَصْحَابِهِ مِنْ مَكَّةَ إِلَى الْمَدِينَةِ ابْتِغَاءَ مَرْضَاةِ اللَّهِ، فَكَانَتْ بِدَايَةَ قِيَامِ دَوْلَةِ الْإِسْلَامِ؛ وَتُطْلَقُ أَيْضًا عَلَى هَجْرِ مَا نَهَى اللَّهُ عَنْهُ.",
        "explanationEs": "Hijra (emigración)\nLa emigración del Profeta ﷺ y sus compañeros de La Meca a Medina buscando la complacencia de Allah, con la que comenzó el Estado islámico. También significa abandonar lo que Allah ha prohibido.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/13410/"
      },
      {
        "itemNumber": 181,
        "text": "الْمُهَاجِرُونَ",
        "latin": "Al-Muhājirūn",
        "explanationAr": "الصَّحَابَةُ الَّذِينَ خَرَجُوا مِنْ دِيَارِهِمْ وَأَمْوَالِهِمْ وَجَاءُوا إِلَى الْمَدِينَةِ لِنُصْرَةِ اللَّهِ وَرَسُولِهِ وَإِقَامَةِ دِينِهِ.",
        "explanationEs": "Al-Muhājirūn (los emigrantes)\nLos compañeros que dejaron sus hogares y bienes en La Meca y llegaron a Medina para apoyar la causa de Allah y de Su Mensajero y establecer la religión.",
        "sourceName": "إسلام ويب (تفسير ابن كثير)",
        "sourceNameEs": "IslamWeb (Tafsīr Ibn Kathīr)",
        "sourceUrl": "https://www.islamweb.net/ar/library/index.php?page=bookcontents&ID=625&idfrom=0&idto=0&flag=1&bk_no=49&ayano=0&surano=0&bookhad=0"
      },
      {
        "itemNumber": 182,
        "text": "الْأَنْصَارُ",
        "latin": "Al-Anṣār",
        "explanationAr": "الْمُسْلِمُونَ مِنْ أَهْلِ الْمَدِينَةِ الَّذِينَ آوَوُا الْمُهَاجِرِينَ وَنَصَرُوا رَسُولَ اللَّهِ ﷺ وَآثَرُوهُمْ عَلَى أَنْفُسِهِمْ.",
        "explanationEs": "Al-Anṣār (los auxiliares)\nLos musulmanes de Medina que acogieron a los emigrantes, apoyaron al Mensajero de Allah ﷺ y los prefirieron a sí mismos.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/article/135916/"
      },
      {
        "itemNumber": 183,
        "text": "أَهْلُ الْبَيْتِ",
        "latin": "Ahl al-Bayt",
        "explanationAr": "أَهْلُ بَيْتِ النَّبِيِّ ﷺ عَلَى الرَّاجِحِ هُمْ بَنُو هَاشِمٍ وَبَنُو الْمُطَّلِبِ، وَيَدْخُلُ فِيهِمْ أَزْوَاجُهُ، وَلَهُمْ حَقُّ الْمَحَبَّةِ وَالْإِكْرَامِ.",
        "explanationEs": "Ahl al-Bayt (la familia del Profeta ﷺ)\nSegún la opinión más sólida son los Banū Hāshim y los Banū al-Muṭṭalib, e incluyen a sus esposas. Les corresponde el derecho al amor y al respeto.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/58248/"
      },
      {
        "itemNumber": 184,
        "text": "التَّابِعُونَ",
        "latin": "At-Tābiʿūn",
        "explanationAr": "الْمُسْلِمُونَ الَّذِينَ لَقُوا بَعْضَ الصَّحَابَةِ وَلَمْ يَلْقَوُا النَّبِيَّ ﷺ بَعْدَ إِسْلَامِهِمْ، وَهُمْ الْجِيلُ الَّذِي جَاءَ بَعْدَ الصَّحَابَةِ.",
        "explanationEs": "At-Tābiʿūn (los seguidores)\nLos musulmanes que conocieron a algún compañero del Profeta pero no llegaron a ver al Profeta ﷺ siendo musulmanes. Son la generación posterior a los compañeros.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/62541/"
      },
      {
        "itemNumber": 185,
        "text": "غَزْوَةٌ",
        "latin": "Ghazwah",
        "explanationAr": "خُرُوجٌ لِلْقِتَالِ يَقُودُ فِيهِ النَّبِيُّ ﷺ الْجَيْشَ بِنَفْسِهِ، وَعَدَدُهَا نَحْوُ سَبْعٍ وَعِشْرِينَ، قَاتَلَ فِي تِسْعٍ مِنْهَا.",
        "explanationEs": "Ghazwa (expedición con el Profeta)\nUna campaña en la que el propio Profeta ﷺ dirige el ejército. Fueron unas veintisiete, y combatió personalmente en nueve de ellas.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb (audio)",
        "sourceUrl": "https://audio.islamweb.net/audio/index.php?page=FullContent&full=1&audioid=445998"
      },
      {
        "itemNumber": 186,
        "text": "سَرِيَّةٌ",
        "latin": "Sariyyah",
        "explanationAr": "بَعْثٌ يُرْسِلُهُ النَّبِيُّ ﷺ بِقِيَادَةِ أَحَدِ أَصْحَابِهِ دُونَ أَنْ يَخْرُجَ مَعَهُمْ، كَسَرِيَّةِ مُؤْتَةَ بِقِيَادَةِ زَيْدِ بْنِ حَارِثَةَ، وَسُمِّيَتْ بِذَلِكَ لِأَنَّ الْعَادَةَ أَنْ تُبْعَثَ لَيْلًا.",
        "explanationEs": "Sariyya (expedición sin el Profeta)\nUna fuerza que el Profeta ﷺ enviaba al mando de un compañero, sin acudir él, como la de Muʾta bajo Zayd ibn Ḥāritha. Se llama así porque solía partir de noche.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb (audio)",
        "sourceUrl": "https://audio.islamweb.net/audio/index.php?page=FullContent&full=1&audioid=195168"
      }
    ]
  },
  {
    "id": "glosario_ibarat",
    "titleAr": "عِبَارَاتٌ إِسْلَامِيَّةٌ",
    "titleEs": "Expresiones islámicas",
    "items": [
      {
        "itemNumber": 93,
        "text": "بِسْمِ اللَّهِ",
        "latin": "Bismillāh",
        "explanationAr": "تُقَالُ عِنْدَ ابْتِدَاءِ الْأَعْمَالِ، وَمَعْنَاهَا: أَبْتَدِئُ مُسْتَعِينًا بِاللَّهِ مُتَبَرِّكًا بِاسْمِهِ.",
        "explanationEs": "Bismillah\n«En el nombre de Allah». Se dice al empezar los actos, y significa: empiezo pidiendo la ayuda de Allah y buscando la bendición de Su nombre.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/audios/1860/"
      },
      {
        "links": [{"section": "rosario", "group": "fadl_tasbih_tahlil", "ar": "فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ", "es": "Las virtudes del Tasbih, Tahmid, Tahlil y Takbir"}],
        "itemNumber": 94,
        "text": "الْحَمْدُ لِلَّهِ",
        "latin": "Al-ḥamdu lillāh",
        "explanationAr": "ثَنَاءٌ عَلَى اللَّهِ بِصِفَاتِ الْكَمَالِ، وَتُقَالُ عِنْدَ النِّعَمِ.",
        "explanationEs": "Alhamdulillah\n«Alabado sea Allah». Se dice al recibir un bien, al terminar de comer, al estornudar…",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/126100/"
      },
      {
        "links": [{"section": "rosario", "group": "fadl_tasbih_tahlil", "ar": "فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ", "es": "Las virtudes del Tasbih, Tahmid, Tahlil y Takbir"}],
        "itemNumber": 95,
        "text": "سُبْحَانَ اللَّهِ",
        "latin": "Subḥānallāh",
        "explanationAr": "تَنْزِيهُ اللَّهِ عَنْ كُلِّ نَقْصٍ، وَتُقَالُ عِنْدَ التَّعَجُّبِ.",
        "explanationEs": "Subhanallah\n«Glorificado sea Allah» (libre de toda imperfección). Se dice también ante algo que asombra.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/256237/"
      },
      {
        "links": [{"section": "rosario", "group": "fadl_tasbih_tahlil", "ar": "فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ", "es": "Las virtudes del Tasbih, Tahmid, Tahlil y Takbir"}],
        "itemNumber": 96,
        "text": "اللَّهُ أَكْبَرُ",
        "latin": "Allāhu akbar",
        "explanationAr": "أَيِ اللَّهُ أَكْبَرُ مِنْ كُلِّ شَيْءٍ، وَبِهَا تُفْتَتَحُ الصَّلَاةُ.",
        "explanationEs": "Allahu akbar\n«Allah es el más Grande». Con ella se empieza la oración.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://audio.islamweb.net/audio/index.php?page=FullContent&audioid=439417"
      },
      {
        "itemNumber": 97,
        "text": "إِنْ شَاءَ اللَّهُ",
        "latin": "In shāʾ Allāh",
        "explanationAr": "تَعْلِيقُ مَا يُرِيدُ الْمُسْلِمُ فِعْلَهُ فِي الْمُسْتَقْبَلِ عَلَى مَشِيئَةِ اللَّهِ، امْتِثَالًا لِقَوْلِهِ تَعَالَى: ﴿وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَلِكَ غَدًا إِلَّا أَنْ يَشَاءَ اللَّهُ﴾.",
        "explanationEs": "Insha'Allah\n«Si Allah quiere». Significa dejar en manos de la voluntad de Allah lo que uno piensa hacer en el futuro, cumpliendo Su palabra: «Y no digas de nada: lo haré mañana, sin añadir: si Allah quiere».",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/98386/"
      },
      {
        "itemNumber": 98,
        "text": "مَا شَاءَ اللَّهُ",
        "latin": "Mā shāʾ Allāh",
        "explanationAr": "تُقَالُ عِنْدَ رُؤْيَةِ مَا يُعْجِبُ، اعْتِرَافًا بِأَنَّهُ بِمَشِيئَةِ اللَّهِ.",
        "explanationEs": "Masha'Allah\n«Lo que Allah ha querido». Se dice al ver algo que agrada, para atribuir el bien a Allah y proteger del mal de ojo.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/16839/"
      },
      {
        "links": [{"section": "rosario", "group": "istighfar_tawbah", "ar": "الِاسْتِغْفَارُ وَالتَّوْبَةُ", "es": "El pedido de perdón (Istighfar) y el arrepentimiento"}],
        "itemNumber": 99,
        "text": "أَسْتَغْفِرُ اللَّهَ",
        "latin": "Astaghfirullāh",
        "explanationAr": "طَلَبُ الْمَغْفِرَةِ مِنَ اللَّهِ.",
        "explanationEs": "Astaghfirullah\n«Pido perdón a Allah». Se dice tras un error y en todo momento como dhikr.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/24902/"
      },
      {
        "links": [{"section": "azkar", "group": "manzil", "num": 173, "ar": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ (عِنْدَ الْخُرُوجِ)", "es": "Lā ḥawla wa lā quwwata illā billāh (al salir de casa)"}],
        "itemNumber": 100,
        "text": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        "latin": "Lā ḥawla wa lā quwwata illā billāh",
        "explanationAr": "كَنْزٌ مِنْ كُنُوزِ الْجَنَّةِ، وَمَعْنَاهَا: لَا حَوْلَ عَنْ مَعْصِيَةِ اللَّهِ إِلَّا بِعِصْمَتِهِ، وَلَا قُوَّةَ عَلَى طَاعَتِهِ إِلَّا بِمَعُونَتِهِ؛ فَهِيَ كَلِمَةُ اسْتِسْلَامٍ وَتَفْوِيضٍ إِلَى اللَّهِ.",
        "explanationEs": "La hawla wa la quwwata illa billah\n«No hay fuerza ni poder sino en Allah». Es un tesoro del Paraíso y significa: no hay manera de apartarse de la desobediencia a Allah sino con Su protección, ni fuerza para obedecerle sino con Su ayuda. Es una palabra de entrega y confianza en Allah.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/hadith/sharh/908"
      },
      {
        "links": [{"section": "adya", "group": "adya_musiba", "num": 380, "ar": "دُعَاءُ الْمُصِيبَةِ", "es": "Súplica ante la desgracia"}],
        "itemNumber": 101,
        "text": "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
        "latin": "Innā lillāhi wa innā ilayhi rājiʿūn",
        "explanationAr": "تُقَالُ عِنْدَ الْمُصِيبَةِ، وَمَعْنَاهَا: إِقْرَارٌ بِأَنَّا مِلْكٌ لِلَّهِ وَعَبِيدٌ لَهُ، وَأَنَّ رُجُوعَنَا إِلَيْهِ بَعْدَ الْمَوْتِ، وَهِيَ مِنْ كَلِمَاتِ الصَّابِرِينَ.",
        "explanationEs": "Inna lillahi wa inna ilayhi rayiun\n«A Allah pertenecemos y a Él hemos de volver». Se dice ante una desgracia: es reconocer que somos propiedad y siervos de Allah y que volveremos a Él tras la muerte. Es de las palabras de los perseverantes (los que tienen paciencia, sabirin).",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/109553/"
      },
      {
        "links": [{"section": "azkar", "group": "salam", "ar": "السَّلَامُ", "es": "El saludo de paz"}],
        "itemNumber": 102,
        "text": "السَّلَامُ عَلَيْكُمْ",
        "latin": "As-salāmu ʿalaykum",
        "explanationAr": "تَحِيَّةُ الْإِسْلَامِ وَتَحِيَّةُ أَهْلِ الْجَنَّةِ، وَرَدُّهَا وَاجِبٌ بِـ: وَعَلَيْكُمُ السَّلَامُ.",
        "explanationEs": "As-salamu alaykum\nSaludo del Islam y saludo de la gente del Paraíso: «La paz sea con vosotros». Responder es obligatorio: Wa alaykum as-salam.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/23940/"
      },
      {
        "itemNumber": 103,
        "text": "جَزَاكَ اللَّهُ خَيْرًا",
        "latin": "Jazāka Allāhu khayran",
        "explanationAr": "دُعَاءٌ لِمَنْ صَنَعَ إِلَيْكَ مَعْرُوفًا، وَمَنْ قَالَهُ لِفَاعِلِ الْمَعْرُوفِ فَقَدْ أَبْلَغَ فِي الثَّنَاءِ.",
        "explanationEs": "Yazak Allahu jairan\n«Que Allah te recompense con el bien». Súplica por quien te ha hecho un favor; quien se la dice a su benefactor le ha alabado de la mejor forma.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/audios/2769/"
      },
      {
        "itemNumber": 104,
        "text": "بَارَكَ اللَّهُ فِيكَ",
        "latin": "Bāraka Allāhu fīk",
        "explanationAr": "دُعَاءٌ بِالْبَرَكَةِ لِلْغَيْرِ.",
        "explanationEs": "Barak Allahu fik\n«Que Allah te bendiga». Súplica por alguien, también para agradecer.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/22052/"
      },
      {
        "itemNumber": 105,
        "text": "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
        "latin": "Ṣalla Allāhu ʿalayhi wa sallam",
        "explanationAr": "تُقَالُ عِنْدَ ذِكْرِ النَّبِيِّ ﷺ، وَهِيَ وَاجِبَةٌ عِنْدَ ذِكْرِهِ عَلَى الصَّحِيحِ، وَمَنْ صَلَّى عَلَيْهِ وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا.",
        "explanationEs": "ﷺ (Salla Allahu alayhi wa sallam)\n«Que Allah le bendiga y le dé paz». Se dice al mencionar al Profeta ﷺ; según la opinión correcta es obligatorio al oír su nombre, y quien pide una bendición por él recibe diez de Allah.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/7645/"
      },
      {
        "itemNumber": 106,
        "text": "رَضِيَ اللَّهُ عَنْهُ",
        "latin": "Raḍiya Allāhu ʿanhu",
        "explanationAr": "تُقَالُ عِنْدَ ذِكْرِ الصَّحَابِيِّ.",
        "explanationEs": "Radiyallahu anhu\n«Que Allah esté complacido con él». Se dice al mencionar a un Compañero del Profeta ﷺ.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/38427/"
      },
      {
        "itemNumber": 107,
        "text": "آمِينَ",
        "latin": "Āmīn",
        "explanationAr": "اسْمُ فِعْلٍ بِمَعْنَى: اللَّهُمَّ اسْتَجِبْ.",
        "explanationEs": "Amín\n«Oh Allah, responde». Se dice al final de la súplica y tras la Fatiha.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://audio.islamweb.net/audio/index.php?audioid=184345&page=FullContent"
      },
      {
        "links": [{"section": "rosario", "group": "fadl_tasbih_tahlil", "ar": "فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ", "es": "Las virtudes del Tasbih, Tahmid, Tahlil y Takbir"}],
        "itemNumber": 129,
        "text": "لَا إِلَهَ إِلَّا اللَّهُ",
        "latin": "Lā ilāha illā Allāh",
        "explanationAr": "كَلِمَةُ التَّوْحِيدِ، مَعْنَاهَا: لَا مَعْبُودَ بِحَقٍّ إِلَّا اللَّهُ، فَفِيهَا نَفْيٌ وَإِثْبَاتٌ.",
        "explanationEs": "No hay más dios que Allah\nLa palabra de la unicidad: no hay nada digno de adoración salvo Allah. Niega toda falsa divinidad y afirma la adoración solo para Allah.",
        "sourceName": "موقع ابن باز",
        "sourceNameEs": "Web del Sheij Ibn Baz",
        "sourceUrl": "https://binbaz.org.sa/fatwas/15667/"
      },
      {
        "links": [{"section": "azkar", "group": "karb_khawf", "num": 144, "ar": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", "es": "Hasbunā Allāh wa niʿma-l-wakīl"}],
        "itemNumber": 130,
        "text": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
        "latin": "Ḥasbunā Allāhu wa niʿma al-wakīl",
        "explanationAr": "كَلِمَةُ تَوَكُّلٍ، مَعْنَاهَا: اللَّهُ كَافِينَا وَنِعْمَ الْمُفَوَّضُ إِلَيْهِ؛ قَالَهَا إِبْرَاهِيمُ حِينَ أُلْقِيَ فِي النَّارِ، وَقَالَهَا مُحَمَّدٌ ﷺ.",
        "explanationEs": "Allah nos basta y es el mejor protector\nFrase de confianza en Allah. La dijo Ibrahim al ser arrojado al fuego y también el Profeta Muhammad ﷺ.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/hadith/sharh/151307"
      }
    ]
  }
];

(function (global) {
  const groups = glosarioData;
  const sectionModule = {
    id: 'glosario',
    getGroups: function () { return groups; },
    findGroup: function (groupId) { return groups.find(function (group) { return group.id === groupId; }) || null; },
    getTitle: function (texts) { return texts.glosarioSectionTitle; },
    isDevotional: true,
    isQuranItem: function () { return false; },
    getCountUnit: function (isEs) { return isEs ? 'términos' : 'مصطلحات'; },
    getItemLabel: function (isEs, n) { return isEs ? ('Término n.º ' + n) : ('المصطلح رقم ' + n); },
    open: function (skipPushState) {
      if (typeof global.showSection === 'function') global.showSection('glosario', !!skipPushState);
    }
  };
  global.ZadSectionModules = global.ZadSectionModules || {};
  global.ZadSectionModules['glosario'] = sectionModule;
})(window);
