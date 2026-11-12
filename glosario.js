// glosario.js — glosario de términos islámicos (árabe, transliteración y definición en español y árabe).
const glosarioData = [
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
        "explanationEs": "Rakaa (unidad de la oración)\nCada unidad de la oración: estar de pie con la recitación, la inclinación (ruku) y las dos prosternaciones (suyud).",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/40257/"
      },
      {
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
        "itemNumber": 33,
        "text": "الْوِتْرُ",
        "latin": "Witr",
        "explanationAr": "صَلَاةٌ وِتْرٌ (رَكْعَةٌ أَوْ ثَلَاثٌ أَوْ أَكْثَرُ) تُخْتَمُ بِهَا صَلَاةُ اللَّيْلِ، وَوَقْتُهَا بَيْنَ الْعِشَاءِ وَطُلُوعِ الْفَجْرِ، وَهِيَ سُنَّةٌ مُؤَكَّدَةٌ.",
        "explanationEs": "Witr\nOración de número impar de rakaas (una, tres o más) con la que se cierra la oración de la noche; su tiempo va del Isha al alba. Es una Sunna muy recomendada.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/1237/"
      },
      {
        "itemNumber": 34,
        "text": "الْقُنُوتُ",
        "latin": "Qunūt",
        "explanationAr": "الدُّعَاءُ فِي مَحَلٍّ مَخْصُوصٍ مِنَ الْقِيَامِ فِي الصَّلَاةِ.",
        "explanationEs": "Qunut\nSúplica que se hace de pie en la oración, en el Witr o en el Fajr según las escuelas.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/1255/"
      },
      {
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
        "explanationEs": "Suhur\nComida y bebida que se toma poco antes del alba quien quiere ayunar; es recomendada y en ella hay bendición.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/feqhia/2649/"
      },
      {
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
        "itemNumber": 92,
        "text": "السِّحْرُ",
        "latin": "Siḥr",
        "explanationAr": "عُقَدٌ وَرُقًى يُتَوَصَّلُ بِهَا إِلَى الْإِضْرَارِ بِاسْتِعَانَةٍ بِالشَّيَاطِينِ، وَهُوَ مِنَ الْمُوبِقَاتِ.",
        "explanationEs": "Sihr (brujería)\nPrácticas ocultas que buscan dañar con ayuda de los demonios. Está prohibida y es de los pecados más graves.",
        "sourceName": "الدرر السنية",
        "sourceNameEs": "Al-Durar al-Saniyya (dorar.net)",
        "sourceUrl": "https://dorar.net/aqeeda/2948/"
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
        "itemNumber": 101,
        "text": "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
        "latin": "Innā lillāhi wa innā ilayhi rājiʿūn",
        "explanationAr": "تُقَالُ عِنْدَ الْمُصِيبَةِ، وَمَعْنَاهَا: إِقْرَارٌ بِأَنَّا مِلْكٌ لِلَّهِ وَعَبِيدٌ لَهُ، وَأَنَّ رُجُوعَنَا إِلَيْهِ بَعْدَ الْمَوْتِ، وَهِيَ مِنْ كَلِمَاتِ الصَّابِرِينَ.",
        "explanationEs": "Inna lillahi wa inna ilayhi rayiun\n«A Allah pertenecemos y a Él hemos de volver». Se dice ante una desgracia: es reconocer que somos propiedad y siervos de Allah y que volveremos a Él tras la muerte. Es de las palabras de los pacientes.",
        "sourceName": "إسلام ويب",
        "sourceNameEs": "IslamWeb",
        "sourceUrl": "https://www.islamweb.net/ar/fatwa/109553/"
      },
      {
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
