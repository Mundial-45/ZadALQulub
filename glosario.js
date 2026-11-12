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
        "explanationEs": "Tawhid (unicidad de Allah)\nCreer y afirmar que Allah es Uno: único Señor y Creador, el único que merece ser adorado, y único en Sus Nombres y Atributos. Es la base del Islam."
      },
      {
        "itemNumber": 2,
        "text": "الشِّرْكُ",
        "latin": "Shirk",
        "explanationAr": "جَعْلُ شَرِيكٍ لِلَّهِ فِيمَا يَخْتَصُّ بِهِ، وَأَعْظَمُهُ صَرْفُ الْعِبَادَةِ لِغَيْرِهِ، وَهُوَ أَعْظَمُ الذُّنُوبِ.",
        "explanationEs": "Shirk (asociar)\nAtribuir a otro algo que solo corresponde a Allah, sobre todo dirigir la adoración a otro que Él. Es el pecado más grave."
      },
      {
        "itemNumber": 3,
        "text": "الْإِسْلَامُ",
        "latin": "Islām",
        "explanationAr": "الِاسْتِسْلَامُ لِلَّهِ بِالتَّوْحِيدِ، وَالِانْقِيَادُ لَهُ بِالطَّاعَةِ، وَالْبَرَاءَةُ مِنَ الشِّرْكِ، وَأَرْكَانُهُ خَمْسَةٌ.",
        "explanationEs": "Islam\nSometerse a Allah con el tawhid, obedecerle y apartarse del shirk. Sus cinco pilares son: el testimonio de fe, la oración, el zakat, el ayuno de Ramadán y la peregrinación."
      },
      {
        "itemNumber": 4,
        "text": "الْإِيمَانُ",
        "latin": "Īmān",
        "explanationAr": "قَوْلٌ بِاللِّسَانِ وَاعْتِقَادٌ بِالْقَلْبِ وَعَمَلٌ بِالْجَوَارِحِ، يَزِيدُ بِالطَّاعَةِ وَيَنْقُصُ بِالْمَعْصِيَةِ، وَأَرْكَانُهُ سِتَّةٌ.",
        "explanationEs": "Iman (fe)\nCreencia del corazón, palabra de la lengua y obra de los miembros; aumenta con la obediencia y disminuye con la desobediencia. Sus seis pilares: creer en Allah, Sus ángeles, Sus libros, Sus mensajeros, el Último Día y el decreto."
      },
      {
        "itemNumber": 5,
        "text": "الْإِحْسَانُ",
        "latin": "Iḥsān",
        "explanationAr": "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ.",
        "explanationEs": "Ihsan (excelencia)\nAdorar a Allah como si Le vieras, pues aunque tú no Le veas, Él te ve. Es el grado más alto de la religión."
      },
      {
        "itemNumber": 6,
        "text": "الْعَقِيدَةُ",
        "latin": "ʿAqīda",
        "explanationAr": "مَا يَعْقِدُ عَلَيْهِ الْمُسْلِمُ قَلْبَهُ مِنْ أُمُورِ الْإِيمَانِ، مَأْخُوذَةً مِنَ الْكِتَابِ وَالسُّنَّةِ.",
        "explanationEs": "Aqida (credo)\nConjunto de creencias firmes del musulmán sobre Allah, Sus Nombres y Atributos, los profetas, el más allá y el decreto, tomadas del Corán y la Sunna."
      },
      {
        "itemNumber": 7,
        "text": "الشَّهَادَتَانِ",
        "latin": "Ash-shahādatān",
        "explanationAr": "شَهَادَةُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَهُمَا مِفْتَاحُ الْإِسْلَامِ.",
        "explanationEs": "Las dos shahadas\nTestimoniar que no hay divinidad digna de adoración excepto Allah y que Muhammad es el Mensajero de Allah. Es la puerta de entrada al Islam."
      },
      {
        "itemNumber": 8,
        "text": "الْكُفْرُ",
        "latin": "Kufr",
        "explanationAr": "ضِدُّ الْإِيمَانِ، وَهُوَ جَحْدُ اللَّهِ أَوْ رُسُلِهِ أَوْ شَيْءٍ مَعْلُومٍ مِنَ الدِّينِ بِالضَّرُورَةِ.",
        "explanationEs": "Kufr (incredulidad)\nLo contrario de la fe: negar a Allah, a Sus mensajeros o algo que se sabe con certeza que forma parte de la religión."
      },
      {
        "itemNumber": 9,
        "text": "النِّفَاقُ",
        "latin": "Nifāq",
        "explanationAr": "إِظْهَارُ الْإِسْلَامِ وَإِبْطَانُ خِلَافِهِ، وَهُوَ نِفَاقٌ اعْتِقَادِيٌّ وَنِفَاقٌ عَمَلِيٌّ.",
        "explanationEs": "Nifaq (hipocresía)\nMostrar el Islam por fuera y ocultar lo contrario en el corazón. Hay hipocresía en la creencia y en las obras."
      },
      {
        "itemNumber": 10,
        "text": "التَّقْوَى",
        "latin": "Taqwā",
        "explanationAr": "أَنْ تَجْعَلَ بَيْنَكَ وَبَيْنَ عَذَابِ اللَّهِ وِقَايَةً بِفِعْلِ أَوَامِرِهِ وَاجْتِنَابِ نَوَاهِيهِ.",
        "explanationEs": "Taqwa (temor consciente de Allah)\nProtegerse del castigo de Allah cumpliendo lo que ordena y apartándose de lo que prohíbe."
      },
      {
        "itemNumber": 11,
        "text": "التَّوَكُّلُ",
        "latin": "Tawakkul",
        "explanationAr": "صِدْقُ اعْتِمَادِ الْقَلْبِ عَلَى اللَّهِ فِي جَلْبِ الْمَنَافِعِ وَدَفْعِ الْمَضَارِّ، مَعَ الْأَخْذِ بِالْأَسْبَابِ.",
        "explanationEs": "Tawakkul (confianza en Allah)\nApoyarse de corazón en Allah para obtener el bien y alejar el mal, poniendo a la vez los medios lícitos."
      },
      {
        "itemNumber": 12,
        "text": "الْقَدَرُ",
        "latin": "Qadar",
        "explanationAr": "الْإِيمَانُ بِأَنَّ اللَّهَ عَلِمَ كُلَّ شَيْءٍ وَكَتَبَهُ وَشَاءَهُ وَخَلَقَهُ، وَأَنَّ لِلْعَبْدِ مَشِيئَةً يُحَاسَبُ عَلَيْهَا.",
        "explanationEs": "Qadar (el decreto divino)\nCreer que Allah lo sabe todo, lo escribió, lo quiere y lo crea; nada ocurre fuera de Su voluntad. El ser humano tiene voluntad y responde de sus actos."
      },
      {
        "itemNumber": 13,
        "text": "الْغَيْبُ",
        "latin": "Ghayb",
        "explanationAr": "مَا غَابَ عَنِ الْحَوَاسِّ وَلَا يُعْلَمُ إِلَّا بِالْوَحْيِ، وَلَا يَعْلَمُ الْغَيْبَ إِلَّا اللَّهُ.",
        "explanationEs": "Ghayb (lo oculto)\nTodo lo que escapa a los sentidos y solo se conoce por la revelación, como los ángeles, el Paraíso o la Hora. Solo Allah conoce lo oculto."
      },
      {
        "itemNumber": 14,
        "text": "الْمَلَائِكَةُ",
        "latin": "Malāʾika",
        "explanationAr": "عَالَمٌ غَيْبِيٌّ خَلَقَهُمُ اللَّهُ مِنْ نُورٍ، لَا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ.",
        "explanationEs": "Los ángeles\nCriaturas de luz creadas por Allah que nunca Le desobedecen y cumplen lo que se les ordena, como Yibril, encargado de la revelación."
      },
      {
        "itemNumber": 15,
        "text": "الْجِنُّ",
        "latin": "Jinn",
        "explanationAr": "عَالَمٌ مَخْلُوقٌ مِنْ نَارٍ، مُكَلَّفُونَ بِعِبَادَةِ اللَّهِ، مِنْهُمُ الْمُؤْمِنُ وَالْكَافِرُ.",
        "explanationEs": "Los yinn\nCriaturas creadas de fuego, invisibles para nosotros, obligadas a adorar a Allah como los humanos; entre ellos hay creyentes e incrédulos."
      },
      {
        "itemNumber": 16,
        "text": "الشَّيْطَانُ",
        "latin": "Shayṭān",
        "explanationAr": "كُلُّ عَاتٍ مُتَمَرِّدٍ مِنَ الْجِنِّ وَالْإِنْسِ، وَأَصْلُهُمْ إِبْلِيسُ عَدُوُّ الْإِنْسَانِ.",
        "explanationEs": "Shaitán (Satanás)\nTodo rebelde de entre los yinn y los humanos; en especial Iblis, el enemigo declarado del ser humano, que incita al mal."
      },
      {
        "itemNumber": 17,
        "text": "الْآخِرَةُ",
        "latin": "Al-Ākhira",
        "explanationAr": "الْحَيَاةُ الْبَاقِيَةُ بَعْدَ الْمَوْتِ، وَفِيهَا الْبَعْثُ وَالْحِسَابُ وَالْجَزَاءُ.",
        "explanationEs": "La Otra Vida\nLa vida eterna después de la muerte: la resurrección, el Juicio, la Balanza, el Paraíso y el Infierno."
      },
      {
        "itemNumber": 18,
        "text": "يَوْمُ الْقِيَامَةِ",
        "latin": "Yawm al-Qiyāma",
        "explanationAr": "الْيَوْمُ الَّذِي يَبْعَثُ اللَّهُ فِيهِ الْخَلَائِقَ لِلْحِسَابِ وَالْجَزَاءِ.",
        "explanationEs": "Día de la Resurrección\nEl día en que Allah resucitará a todas las criaturas para juzgarlas y recompensarlas por sus obras."
      },
      {
        "itemNumber": 19,
        "text": "الْجَنَّةُ",
        "latin": "Janna",
        "explanationAr": "دَارُ النَّعِيمِ الَّتِي أَعَدَّهَا اللَّهُ لِلْمُؤْمِنِينَ.",
        "explanationEs": "El Paraíso\nMorada de felicidad eterna que Allah ha preparado para los creyentes, con lo que ningún ojo ha visto ni oído ha escuchado."
      },
      {
        "itemNumber": 20,
        "text": "جَهَنَّمُ",
        "latin": "Jahannam",
        "explanationAr": "دَارُ الْعَذَابِ الَّتِي أَعَدَّهَا اللَّهُ لِلْكَافِرِينَ وَالْعُصَاةِ، أَعَاذَنَا اللَّهُ مِنْهَا.",
        "explanationEs": "El Infierno\nMorada de castigo que Allah ha preparado para los incrédulos y los desobedientes. Nos refugiamos en Allah de ella."
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
        "explanationEs": "Ibada (adoración)\nTodo lo que Allah ama y Le complace, en palabras y obras, visibles u ocultas: la oración, el dhikr, la buena conducta, etc."
      },
      {
        "itemNumber": 22,
        "text": "الطَّهَارَةُ",
        "latin": "Ṭahāra",
        "explanationAr": "رَفْعُ الْحَدَثِ وَإِزَالَةُ النَّجَسِ، وَهِيَ شَرْطٌ لِصِحَّةِ الصَّلَاةِ.",
        "explanationEs": "Tahara (purificación)\nEstado de pureza necesario para la oración: limpiar el cuerpo, la ropa y el lugar de impurezas, y hacer la ablución cuando corresponde."
      },
      {
        "itemNumber": 23,
        "text": "الْوُضُوءُ",
        "latin": "Wuḍūʾ",
        "explanationAr": "اسْتِعْمَالُ الْمَاءِ فِي أَعْضَاءٍ مَخْصُوصَةٍ بِنِيَّةِ رَفْعِ الْحَدَثِ.",
        "explanationEs": "Wudu (ablución menor)\nLavar con agua partes concretas del cuerpo (cara, brazos, cabeza y pies) con la intención de purificarse para la oración."
      },
      {
        "itemNumber": 24,
        "text": "الْغُسْلُ",
        "latin": "Ghusl",
        "explanationAr": "تَعْمِيمُ الْبَدَنِ بِالْمَاءِ بِنِيَّةٍ، وَيَجِبُ مِنَ الْجَنَابَةِ وَالْحَيْضِ وَالنِّفَاسِ.",
        "explanationEs": "Ghusl (ablución mayor)\nLavar todo el cuerpo con agua con intención, obligatorio, por ejemplo, tras la relación conyugal, la menstruación o el postparto."
      },
      {
        "itemNumber": 25,
        "text": "التَّيَمُّمُ",
        "latin": "Tayammum",
        "explanationAr": "التَّطَهُّرُ بِالصَّعِيدِ الطَّيِّبِ عِنْدَ فَقْدِ الْمَاءِ أَوِ الْعَجْزِ عَنِ اسْتِعْمَالِهِ.",
        "explanationEs": "Tayammum (ablución seca)\nPurificación con tierra limpia cuando no hay agua o no se puede usar."
      },
      {
        "itemNumber": 26,
        "text": "الصَّلَاةُ",
        "latin": "Ṣalāt",
        "explanationAr": "عِبَادَةٌ ذَاتُ أَقْوَالٍ وَأَفْعَالٍ مَخْصُوصَةٍ، مُفْتَتَحَةٌ بِالتَّكْبِيرِ مُخْتَتَمَةٌ بِالتَّسْلِيمِ.",
        "explanationEs": "Salat (la oración)\nAdoración con palabras y movimientos concretos que empieza con el takbir y termina con el taslim. Hay cinco oraciones obligatorias al día."
      },
      {
        "itemNumber": 27,
        "text": "الْقِبْلَةُ",
        "latin": "Qibla",
        "explanationAr": "جِهَةُ الْكَعْبَةِ الْمُشَرَّفَةِ الَّتِي يَسْتَقْبِلُهَا الْمُصَلِّي.",
        "explanationEs": "Qibla\nDirección de la Kaaba en La Meca, hacia la que se orienta el musulmán en la oración."
      },
      {
        "itemNumber": 28,
        "text": "الْأَذَانُ",
        "latin": "Adhān",
        "explanationAr": "الْإِعْلَامُ بِدُخُولِ وَقْتِ الصَّلَاةِ بِأَلْفَاظٍ مَخْصُوصَةٍ.",
        "explanationEs": "Adhan (llamada a la oración)\nAnuncio de la entrada de la hora de la oración con palabras establecidas en la Sunna."
      },
      {
        "itemNumber": 29,
        "text": "الْإِقَامَةُ",
        "latin": "Iqāma",
        "explanationAr": "الْإِعْلَامُ بِالْقِيَامِ إِلَى الصَّلَاةِ بِأَلْفَاظٍ مَخْصُوصَةٍ.",
        "explanationEs": "Iqama\nSegunda llamada, justo antes de empezar la oración en grupo."
      },
      {
        "itemNumber": 30,
        "text": "الرَّكْعَةُ",
        "latin": "Rakʿa",
        "explanationAr": "وَحْدَةٌ مِنَ الصَّلَاةِ تَشْمَلُ الْقِيَامَ وَالْقِرَاءَةَ وَالرُّكُوعَ وَالسَّجْدَتَيْنِ.",
        "explanationEs": "Rakaa (unidad de la oración)\nCada unidad de la oración: estar de pie con la recitación, la inclinación (ruku) y las dos prosternaciones (suyud)."
      },
      {
        "itemNumber": 31,
        "text": "الرُّكُوعُ",
        "latin": "Rukūʿ",
        "explanationAr": "الِانْحِنَاءُ فِي الصَّلَاةِ مَعَ وَضْعِ الْيَدَيْنِ عَلَى الرُّكْبَتَيْنِ.",
        "explanationEs": "Ruku (inclinación)\nInclinarse en la oración apoyando las manos en las rodillas y diciendo: Subhana Rabbiya al-Adhim."
      },
      {
        "itemNumber": 32,
        "text": "السُّجُودُ",
        "latin": "Sujūd",
        "explanationAr": "وَضْعُ الْجَبْهَةِ وَالْأَنْفِ وَالْيَدَيْنِ وَالرُّكْبَتَيْنِ وَأَطْرَافِ الْقَدَمَيْنِ عَلَى الْأَرْضِ تَعَبُّدًا لِلَّهِ.",
        "explanationEs": "Suyud (prosternación)\nPoner en el suelo la frente con la nariz, las manos, las rodillas y los dedos de los pies; es el momento en que el siervo está más cerca de su Señor."
      },
      {
        "itemNumber": 33,
        "text": "الْوِتْرُ",
        "latin": "Witr",
        "explanationAr": "صَلَاةٌ وِتْرٌ بَيْنَ الْعِشَاءِ وَالْفَجْرِ، وَهِيَ سُنَّةٌ مُؤَكَّدَةٌ.",
        "explanationEs": "Witr\nOración de número impar de rakaas que se reza después del Isha y antes del Fajr; es una Sunna muy recomendada."
      },
      {
        "itemNumber": 34,
        "text": "الْقُنُوتُ",
        "latin": "Qunūt",
        "explanationAr": "الدُّعَاءُ فِي مَحَلٍّ مَخْصُوصٍ مِنَ الْقِيَامِ فِي الصَّلَاةِ.",
        "explanationEs": "Qunut\nSúplica que se hace de pie en la oración, en el Witr o en el Fajr según las escuelas."
      },
      {
        "itemNumber": 35,
        "text": "صَلَاةُ الْجَنَازَةِ",
        "latin": "Ṣalāt al-janāza",
        "explanationAr": "صَلَاةٌ عَلَى الْمَيِّتِ الْمُسْلِمِ بِأَرْبَعِ تَكْبِيرَاتٍ بِلَا رُكُوعٍ وَلَا سُجُودٍ.",
        "explanationEs": "Oración fúnebre\nOración por el musulmán fallecido, con cuatro takbires y sin ruku ni suyud."
      },
      {
        "itemNumber": 36,
        "text": "الذِّكْرُ",
        "latin": "Dhikr",
        "explanationAr": "ذِكْرُ اللَّهِ بِالْقَلْبِ وَاللِّسَانِ بِالتَّسْبِيحِ وَالتَّحْمِيدِ وَالتَّهْلِيلِ وَالتَّكْبِيرِ وَتِلَاوَةِ الْقُرْآنِ.",
        "explanationEs": "Dhikr (recuerdo de Allah)\nRecordar a Allah con el corazón y la lengua: glorificarle, alabarle, proclamar Su unicidad y Su grandeza, recitar el Corán, etc."
      },
      {
        "itemNumber": 37,
        "text": "الدُّعَاءُ",
        "latin": "Duʿāʾ",
        "explanationAr": "سُؤَالُ اللَّهِ تَعَالَى وَالتَّضَرُّعُ إِلَيْهِ، وَهُوَ الْعِبَادَةُ.",
        "explanationEs": "Dua (súplica)\nPedir a Allah con humildad. El Profeta ﷺ dijo: «La súplica es la adoración»."
      },
      {
        "itemNumber": 38,
        "text": "الِاسْتِغْفَارُ",
        "latin": "Istighfār",
        "explanationAr": "طَلَبُ الْمَغْفِرَةِ مِنَ اللَّهِ تَعَالَى.",
        "explanationEs": "Istighfar\nPedir a Allah perdón por los pecados, por ejemplo diciendo: Astaghfirullah."
      },
      {
        "itemNumber": 39,
        "text": "التَّسْبِيحُ",
        "latin": "Tasbīḥ",
        "explanationAr": "قَوْلُ سُبْحَانَ اللَّهِ، أَيْ تَنْزِيهُهُ عَنْ كُلِّ نَقْصٍ.",
        "explanationEs": "Tasbih\nDecir Subhanallah: declarar a Allah libre de toda imperfección."
      },
      {
        "itemNumber": 40,
        "text": "التَّحْمِيدُ",
        "latin": "Taḥmīd",
        "explanationAr": "قَوْلُ الْحَمْدُ لِلَّهِ.",
        "explanationEs": "Tahmid\nDecir Al-hamdu lillah: alabar a Allah."
      },
      {
        "itemNumber": 41,
        "text": "التَّهْلِيلُ",
        "latin": "Tahlīl",
        "explanationAr": "قَوْلُ لَا إِلَهَ إِلَّا اللَّهُ.",
        "explanationEs": "Tahlil\nDecir La ilaha illallah: no hay divinidad digna de adoración excepto Allah."
      },
      {
        "itemNumber": 42,
        "text": "التَّكْبِيرُ",
        "latin": "Takbīr",
        "explanationAr": "قَوْلُ اللَّهُ أَكْبَرُ.",
        "explanationEs": "Takbir\nDecir Allahu akbar: Allah es el más Grande."
      },
      {
        "itemNumber": 43,
        "text": "الزَّكَاةُ",
        "latin": "Zakāt",
        "explanationAr": "حَقٌّ وَاجِبٌ فِي مَالٍ مَخْصُوصٍ لِطَائِفَةٍ مَخْصُوصَةٍ فِي وَقْتٍ مَخْصُوصٍ.",
        "explanationEs": "Zakat (azaque)\nParte obligatoria de ciertos bienes que se entrega a quienes tienen derecho a ella cuando se alcanza el mínimo (nisab) y se cumplen sus condiciones."
      },
      {
        "itemNumber": 44,
        "text": "الصَّدَقَةُ",
        "latin": "Ṣadaqa",
        "explanationAr": "مَا يُعْطَى تَطَوُّعًا ابْتِغَاءَ وَجْهِ اللَّهِ.",
        "explanationEs": "Sadaqa (caridad)\nLo que se da voluntariamente por la causa de Allah buscando Su recompensa, además del zakat."
      },
      {
        "itemNumber": 45,
        "text": "الصَّوْمُ",
        "latin": "Ṣawm",
        "explanationAr": "الْإِمْسَاكُ عَنِ الْمُفْطِرَاتِ مِنْ طُلُوعِ الْفَجْرِ إِلَى غُرُوبِ الشَّمْسِ بِنِيَّةٍ.",
        "explanationEs": "Sawm (ayuno)\nAbstenerse de comer, beber y de lo que rompe el ayuno, desde el alba hasta la puesta del sol, con intención."
      },
      {
        "itemNumber": 46,
        "text": "رَمَضَانُ",
        "latin": "Ramaḍān",
        "explanationAr": "الشَّهْرُ التَّاسِعُ مِنَ السَّنَةِ الْهِجْرِيَّةِ، وَفِيهِ صِيَامُ الْفَرِيضَةِ وَأُنْزِلَ فِيهِ الْقُرْآنُ.",
        "explanationEs": "Ramadán\nNoveno mes del calendario lunar, en el que se ayuna obligatoriamente y en el que se reveló el Corán."
      },
      {
        "itemNumber": 47,
        "text": "السُّحُورُ",
        "latin": "Suḥūr",
        "explanationAr": "الطَّعَامُ الَّذِي يُؤْكَلُ قَبْلَ الْفَجْرِ لِلصِّيَامِ.",
        "explanationEs": "Suhur\nComida que se toma antes del alba para ayunar; en ella hay bendición."
      },
      {
        "itemNumber": 48,
        "text": "الْإِفْطَارُ",
        "latin": "Ifṭār",
        "explanationAr": "تَنَاوُلُ الطَّعَامِ عِنْدَ غُرُوبِ الشَّمْسِ بَعْدَ الصِّيَامِ.",
        "explanationEs": "Iftar\nRomper el ayuno al ponerse el sol; es Sunna apresurarse a hacerlo."
      },
      {
        "itemNumber": 49,
        "text": "الْحَجُّ",
        "latin": "Ḥajj",
        "explanationAr": "قَصْدُ مَكَّةَ لِأَدَاءِ مَنَاسِكَ مَخْصُوصَةٍ فِي وَقْتٍ مَخْصُوصٍ، وَهُوَ فَرْضٌ مَرَّةً فِي الْعُمُرِ عَلَى الْمُسْتَطِيعِ.",
        "explanationEs": "Hajj (peregrinación)\nViaje a La Meca en fechas fijas para cumplir ritos concretos. Es obligatorio una vez en la vida para quien pueda."
      },
      {
        "itemNumber": 50,
        "text": "الْعُمْرَةُ",
        "latin": "ʿUmra",
        "explanationAr": "زِيَارَةُ الْبَيْتِ الْحَرَامِ بِالْإِحْرَامِ وَالطَّوَافِ وَالسَّعْيِ وَالْحَلْقِ أَوِ التَّقْصِيرِ.",
        "explanationEs": "Umra\nVisita a la Kaaba con ihram, tawaf, sa'y y corte o afeitado del pelo; se puede hacer en cualquier época del año."
      },
      {
        "itemNumber": 51,
        "text": "الْإِحْرَامُ",
        "latin": "Iḥrām",
        "explanationAr": "نِيَّةُ الدُّخُولِ فِي نُسُكِ الْحَجِّ أَوِ الْعُمْرَةِ.",
        "explanationEs": "Ihram\nIntención de entrar en los ritos del Hajj o la Umra, con la que se prohíben ciertas cosas; también se llama así la ropa del peregrino."
      },
      {
        "itemNumber": 52,
        "text": "الطَّوَافُ",
        "latin": "Ṭawāf",
        "explanationAr": "الدَّوَرَانُ حَوْلَ الْكَعْبَةِ سَبْعَةَ أَشْوَاطٍ تَعَبُّدًا.",
        "explanationEs": "Tawaf\nDar siete vueltas alrededor de la Kaaba como acto de adoración."
      },
      {
        "itemNumber": 53,
        "text": "السَّعْيُ",
        "latin": "Saʿy",
        "explanationAr": "الْمَشْيُ بَيْنَ الصَّفَا وَالْمَرْوَةِ سَبْعَةَ أَشْوَاطٍ فِي الْحَجِّ أَوِ الْعُمْرَةِ.",
        "explanationEs": "Sa'y\nRecorrer siete veces el trayecto entre las colinas de As-Safa y Al-Marwa durante el Hajj o la Umra."
      },
      {
        "itemNumber": 54,
        "text": "الِاعْتِكَافُ",
        "latin": "Iʿtikāf",
        "explanationAr": "لُزُومُ الْمَسْجِدِ لِطَاعَةِ اللَّهِ تَعَالَى.",
        "explanationEs": "I'tikaf (retiro)\nPermanecer en la mezquita con la intención de dedicarse a la adoración, sobre todo en los últimos diez días de Ramadán."
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
        "explanationEs": "El Corán\nLa Palabra de Allah, revelada al Profeta Muhammad ﷺ por medio de Yibril, cuya recitación es adoración."
      },
      {
        "itemNumber": 56,
        "text": "السُّورَةُ",
        "latin": "Sūra",
        "explanationAr": "طَائِفَةٌ مِنَ الْقُرْآنِ لَهَا اسْمٌ وَبِدَايَةٌ وَنِهَايَةٌ، وَعَدَدُهَا مِائَةٌ وَأَرْبَعَ عَشْرَةَ.",
        "explanationEs": "Sura\nCada uno de los 114 capítulos del Corán."
      },
      {
        "itemNumber": 57,
        "text": "الْآيَةُ",
        "latin": "Āya",
        "explanationAr": "جُمْلَةٌ مِنَ الْقُرْآنِ ذَاتُ مَطْلَعٍ وَمَقْطَعٍ مُنْدَرِجَةٌ فِي سُورَةٍ.",
        "explanationEs": "Aleya\nCada versículo del Corán. La palabra significa también «signo» o «prueba»."
      },
      {
        "itemNumber": 58,
        "text": "الْجُزْءُ",
        "latin": "Juzʾ",
        "explanationAr": "وَاحِدٌ مِنْ ثَلَاثِينَ قِسْمًا يُقَسَّمُ إِلَيْهَا الْقُرْآنُ.",
        "explanationEs": "Yuz\nCada una de las 30 partes iguales en que se divide el Corán para facilitar su lectura."
      },
      {
        "itemNumber": 59,
        "text": "الْحِزْبُ",
        "latin": "Ḥizb",
        "explanationAr": "نِصْفُ الْجُزْءِ، وَالْقُرْآنُ سِتُّونَ حِزْبًا.",
        "explanationEs": "Hizb\nMitad de un yuz: el Corán tiene 60 hizb. Muy usado en Marruecos para la lectura diaria."
      },
      {
        "itemNumber": 60,
        "text": "التَّفْسِيرُ",
        "latin": "Tafsīr",
        "explanationAr": "بَيَانُ مَعَانِي آيَاتِ الْقُرْآنِ الْكَرِيمِ.",
        "explanationEs": "Tafsir (exégesis)\nExplicación del significado de las aleyas del Corán."
      },
      {
        "itemNumber": 61,
        "text": "التَّجْوِيدُ",
        "latin": "Tajwīd",
        "explanationAr": "إِعْطَاءُ كُلِّ حَرْفٍ حَقَّهُ وَمُسْتَحَقَّهُ عِنْدَ تِلَاوَةِ الْقُرْآنِ.",
        "explanationEs": "Tajwid\nReglas para recitar el Corán correctamente, pronunciando cada letra como corresponde."
      },
      {
        "itemNumber": 62,
        "text": "الرِّوَايَةُ",
        "latin": "Riwāya",
        "explanationAr": "مَا يُنْسَبُ إِلَى الرَّاوِي عَنِ الْإِمَامِ الْقَارِئِ، كَرِوَايَةِ وَرْشٍ عَنْ نَافِعٍ.",
        "explanationEs": "Riwaya (lectura transmitida)\nCada forma auténtica de recitar el Corán transmitida desde el Profeta ﷺ, como Warsh o Hafs."
      },
      {
        "itemNumber": 63,
        "text": "الْحَدِيثُ",
        "latin": "Ḥadīth",
        "explanationAr": "مَا أُضِيفَ إِلَى النَّبِيِّ ﷺ مِنْ قَوْلٍ أَوْ فِعْلٍ أَوْ تَقْرِيرٍ أَوْ صِفَةٍ.",
        "explanationEs": "Hadiz\nLo que se transmite del Profeta ﷺ: sus palabras, actos, aprobaciones o descripciones."
      },
      {
        "itemNumber": 64,
        "text": "السُّنَّةُ",
        "latin": "Sunna",
        "explanationAr": "طَرِيقَةُ النَّبِيِّ ﷺ مِنْ قَوْلٍ وَفِعْلٍ وَتَقْرِيرٍ.",
        "explanationEs": "Sunna\nEl camino del Profeta ﷺ en palabras, actos y aprobaciones. En fiqh también significa un acto recomendado."
      },
      {
        "itemNumber": 65,
        "text": "الصَّحِيحُ",
        "latin": "Ṣaḥīḥ",
        "explanationAr": "مَا اتَّصَلَ سَنَدُهُ بِنَقْلِ الْعَدْلِ الضَّابِطِ مِنْ غَيْرِ شُذُوذٍ وَلَا عِلَّةٍ.",
        "explanationEs": "Sahih (auténtico)\nHadiz con cadena de transmisión continua de narradores fiables y precisos, sin anomalía ni defecto oculto."
      },
      {
        "itemNumber": 66,
        "text": "السِّيرَةُ",
        "latin": "Sīra",
        "explanationAr": "سِيرَةُ النَّبِيِّ ﷺ وَأَخْبَارُ حَيَاتِهِ.",
        "explanationEs": "Sira\nBiografía del Profeta Muhammad ﷺ."
      },
      {
        "itemNumber": 67,
        "text": "الصَّحَابِيُّ",
        "latin": "Ṣaḥābī",
        "explanationAr": "مَنْ لَقِيَ النَّبِيَّ ﷺ مُؤْمِنًا بِهِ وَمَاتَ عَلَى الْإِسْلَامِ.",
        "explanationEs": "Compañero (sahabi)\nQuien se encontró con el Profeta ﷺ creyendo en él y murió como musulmán."
      },
      {
        "itemNumber": 68,
        "text": "الشَّرِيعَةُ",
        "latin": "Sharīʿa",
        "explanationAr": "مَا شَرَعَهُ اللَّهُ لِعِبَادِهِ مِنَ الْعَقَائِدِ وَالْعِبَادَاتِ وَالْمُعَامَلَاتِ.",
        "explanationEs": "Sharía\nEl conjunto de normas que Allah ha establecido para Sus siervos en la creencia, la adoración y el trato con los demás."
      },
      {
        "itemNumber": 69,
        "text": "الْفِقْهُ",
        "latin": "Fiqh",
        "explanationAr": "مَعْرِفَةُ الْأَحْكَامِ الشَّرْعِيَّةِ الْعَمَلِيَّةِ مِنْ أَدِلَّتِهَا.",
        "explanationEs": "Fiqh (jurisprudencia)\nConocimiento de las normas prácticas de la religión a partir de sus pruebas."
      },
      {
        "itemNumber": 70,
        "text": "الْمَذْهَبُ",
        "latin": "Madhhab",
        "explanationAr": "مَا ذَهَبَ إِلَيْهِ إِمَامٌ مِنَ الْأَئِمَّةِ فِي الْأَحْكَامِ، وَالْمَذَاهِبُ الْمَشْهُورَةُ أَرْبَعَةٌ.",
        "explanationEs": "Madhab (escuela)\nEscuela de jurisprudencia. Las cuatro conocidas son la maliki, la hanafi, la shafii y la hanbali; en el Magreb se sigue la maliki."
      },
      {
        "itemNumber": 71,
        "text": "الْفَتْوَى",
        "latin": "Fatwā",
        "explanationAr": "بَيَانُ الْحُكْمِ الشَّرْعِيِّ لِمَنْ سَأَلَ عَنْهُ.",
        "explanationEs": "Fatua\nRespuesta de un sabio a una pregunta sobre una norma religiosa."
      },
      {
        "itemNumber": 72,
        "text": "الْإِجْمَاعُ",
        "latin": "Ijmāʿ",
        "explanationAr": "اتِّفَاقُ مُجْتَهِدِي الْأُمَّةِ بَعْدَ وَفَاةِ النَّبِيِّ ﷺ عَلَى حُكْمٍ شَرْعِيٍّ.",
        "explanationEs": "Ijma (consenso)\nAcuerdo de los sabios de la comunidad de una época sobre una norma religiosa."
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
        "explanationAr": "مَا أَمَرَ بِهِ الشَّارِعُ عَلَى وَجْهِ الْإِلْزَامِ، يُثَابُ فَاعِلُهُ وَيَسْتَحِقُّ الْعِقَابَ تَارِكُهُ.",
        "explanationEs": "Fard (obligatorio)\nLo que Allah ordena de forma obligatoria: quien lo cumple es recompensado y quien lo deja sin excusa merece castigo."
      },
      {
        "itemNumber": 74,
        "text": "الْمَنْدُوبُ",
        "latin": "Mandūb / Mustaḥabb",
        "explanationAr": "مَا أُمِرَ بِهِ لَا عَلَى وَجْهِ الْإِلْزَامِ، يُثَابُ فَاعِلُهُ وَلَا يُعَاقَبُ تَارِكُهُ.",
        "explanationEs": "Recomendado\nLo que se pide sin ser obligatorio: quien lo hace es recompensado y quien lo deja no es castigado."
      },
      {
        "itemNumber": 75,
        "text": "الْمُبَاحُ",
        "latin": "Mubāḥ",
        "explanationAr": "مَا لَا يَتَعَلَّقُ بِهِ أَمْرٌ وَلَا نَهْيٌ لِذَاتِهِ.",
        "explanationEs": "Permitido\nLo que no tiene orden ni prohibición: hacerlo o dejarlo es igual."
      },
      {
        "itemNumber": 76,
        "text": "الْمَكْرُوهُ",
        "latin": "Makrūh",
        "explanationAr": "مَا نُهِيَ عَنْهُ لَا عَلَى وَجْهِ الْإِلْزَامِ بِالتَّرْكِ.",
        "explanationEs": "Makruh (desaconsejado)\nLo que se pide dejar sin ser prohibido: quien lo deja es recompensado y quien lo hace no es castigado."
      },
      {
        "itemNumber": 77,
        "text": "الْحَلَالُ",
        "latin": "Ḥalāl",
        "explanationAr": "مَا أَبَاحَهُ اللَّهُ تَعَالَى.",
        "explanationEs": "Halal (lícito)\nLo que Allah ha permitido."
      },
      {
        "itemNumber": 78,
        "text": "الْحَرَامُ",
        "latin": "Ḥarām",
        "explanationAr": "مَا نَهَى عَنْهُ الشَّارِعُ عَلَى وَجْهِ الْإِلْزَامِ بِالتَّرْكِ.",
        "explanationEs": "Haram (prohibido)\nLo que Allah ha prohibido de forma tajante: quien lo deja por Allah es recompensado y quien lo hace merece castigo."
      },
      {
        "itemNumber": 79,
        "text": "الْبِدْعَةُ",
        "latin": "Bidʿa",
        "explanationAr": "مَا أُحْدِثَ فِي الدِّينِ مِمَّا لَيْسَ لَهُ أَصْلٌ فِي الشَّرْعِ.",
        "explanationEs": "Bida (innovación)\nLo que se introduce en la religión como forma de adoración sin base en el Corán ni en la Sunna."
      },
      {
        "itemNumber": 80,
        "text": "النِّيَّةُ",
        "latin": "Niyya",
        "explanationAr": "قَصْدُ الْقَلْبِ إِلَى الْعَمَلِ، وَإِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ.",
        "explanationEs": "Niyya (intención)\nPropósito del corazón al hacer un acto. Las obras valen según las intenciones."
      },
      {
        "itemNumber": 81,
        "text": "الْإِخْلَاصُ",
        "latin": "Ikhlāṣ",
        "explanationAr": "تَصْفِيَةُ الْعَمَلِ مِنْ كُلِّ شَائِبَةٍ، وَإِرَادَةُ وَجْهِ اللَّهِ وَحْدَهُ.",
        "explanationEs": "Ijlas (sinceridad)\nHacer las obras solo por Allah, sin buscar la alabanza de la gente."
      },
      {
        "itemNumber": 82,
        "text": "الرِّيَاءُ",
        "latin": "Riyāʾ",
        "explanationAr": "أَنْ يَعْمَلَ الْعِبَادَةَ لِيَرَاهُ النَّاسُ فَيَحْمَدُوهُ، وَهُوَ شِرْكٌ أَصْغَرُ.",
        "explanationEs": "Riya (ostentación)\nHacer una obra de adoración para ser visto y alabado por la gente. Es shirk menor."
      },
      {
        "itemNumber": 83,
        "text": "التَّوْبَةُ",
        "latin": "Tawba",
        "explanationAr": "الرُّجُوعُ إِلَى اللَّهِ بِتَرْكِ الذَّنْبِ وَالنَّدَمِ عَلَيْهِ وَالْعَزْمِ عَلَى عَدَمِ الْعَوْدِ.",
        "explanationEs": "Tawba (arrepentimiento)\nVolver a Allah dejando el pecado, lamentarlo y decidir no repetirlo; si afecta a otros, devolverles su derecho."
      },
      {
        "itemNumber": 84,
        "text": "الصَّبْرُ",
        "latin": "Ṣabr",
        "explanationAr": "حَبْسُ النَّفْسِ عَلَى طَاعَةِ اللَّهِ وَعَنْ مَعْصِيَتِهِ وَعَلَى أَقْدَارِهِ الْمُؤْلِمَةِ.",
        "explanationEs": "Sabr (paciencia)\nMantenerse firme en la obediencia, apartarse de la desobediencia y aceptar el decreto doloroso sin quejarse contra Allah."
      },
      {
        "itemNumber": 85,
        "text": "الشُّكْرُ",
        "latin": "Shukr",
        "explanationAr": "الِاعْتِرَافُ بِنِعَمِ اللَّهِ بِالْقَلْبِ، وَالثَّنَاءُ عَلَيْهِ بِاللِّسَانِ، وَاسْتِعْمَالُهَا فِي طَاعَتِهِ.",
        "explanationEs": "Shukr (gratitud)\nReconocer los favores de Allah con el corazón, alabarle con la lengua y usar Sus dones en Su obediencia."
      },
      {
        "itemNumber": 86,
        "text": "بِرُّ الْوَالِدَيْنِ",
        "latin": "Birr al-wālidayn",
        "explanationAr": "الْإِحْسَانُ إِلَى الْوَالِدَيْنِ وَطَاعَتُهُمَا فِي الْمَعْرُوفِ وَالدُّعَاءُ لَهُمَا.",
        "explanationEs": "Bondad con los padres\nTratar bien a los padres, obedecerles en el bien, ayudarles y suplicar por ellos, en vida y después de su muerte."
      },
      {
        "itemNumber": 87,
        "text": "صِلَةُ الرَّحِمِ",
        "latin": "Ṣilat ar-raḥim",
        "explanationAr": "الْإِحْسَانُ إِلَى الْأَقَارِبِ وَزِيَارَتُهُمْ وَتَفَقُّدُ أَحْوَالِهِمْ.",
        "explanationEs": "Mantener los lazos familiares\nHacer el bien a los parientes, visitarlos y preocuparse por ellos."
      },
      {
        "itemNumber": 88,
        "text": "الْغِيبَةُ",
        "latin": "Ghība",
        "explanationAr": "ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ فِي غِيَابِهِ.",
        "explanationEs": "Ghiba (murmuración)\nHablar de tu hermano en su ausencia de algo que le disgustaría."
      },
      {
        "itemNumber": 89,
        "text": "الرُّقْيَةُ",
        "latin": "Ruqya",
        "explanationAr": "قِرَاءَةُ الْقُرْآنِ وَالْأَدْعِيَةِ الْمَأْثُورَةِ طَلَبًا لِلشِّفَاءِ مِنَ اللَّهِ.",
        "explanationEs": "Ruqya\nRecitar el Corán y las súplicas transmitidas para pedir a Allah la curación, sin fórmulas de shirk."
      },
      {
        "itemNumber": 90,
        "text": "الْعَيْنُ",
        "latin": "ʿAyn",
        "explanationAr": "أَذًى يُصِيبُ الْإِنْسَانَ مِنْ نَظَرِ الْعَائِنِ بِإِذْنِ اللَّهِ.",
        "explanationEs": "El mal de ojo\nDaño que, con el permiso de Allah, puede causar la mirada de admiración o envidia. Se previene diciendo Masha'Allah y pidiendo la bendición."
      },
      {
        "itemNumber": 91,
        "text": "الْحَسَدُ",
        "latin": "Ḥasad",
        "explanationAr": "تَمَنِّي زَوَالِ النِّعْمَةِ عَنِ الْغَيْرِ.",
        "explanationEs": "Hasad (envidia)\nDesear que otro pierda un bien que Allah le ha dado."
      },
      {
        "itemNumber": 92,
        "text": "السِّحْرُ",
        "latin": "Siḥr",
        "explanationAr": "عُقَدٌ وَرُقًى يُتَوَصَّلُ بِهَا إِلَى الْإِضْرَارِ بِاسْتِعَانَةٍ بِالشَّيَاطِينِ، وَهُوَ مِنَ الْمُوبِقَاتِ.",
        "explanationEs": "Sihr (brujería)\nPrácticas ocultas que buscan dañar con ayuda de los demonios. Está prohibida y es de los pecados más graves."
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
        "explanationAr": "تُقَالُ عِنْدَ ابْتِدَاءِ الْأَعْمَالِ اسْتِعَانَةً بِاللَّهِ وَتَبَرُّكًا بِاسْمِهِ.",
        "explanationEs": "Bismillah\n«En el nombre de Allah». Se dice al empezar cualquier acto: comer, beber, entrar, salir…"
      },
      {
        "itemNumber": 94,
        "text": "الْحَمْدُ لِلَّهِ",
        "latin": "Al-ḥamdu lillāh",
        "explanationAr": "ثَنَاءٌ عَلَى اللَّهِ بِصِفَاتِ الْكَمَالِ، وَتُقَالُ عِنْدَ النِّعَمِ.",
        "explanationEs": "Alhamdulillah\n«Alabado sea Allah». Se dice al recibir un bien, al terminar de comer, al estornudar…"
      },
      {
        "itemNumber": 95,
        "text": "سُبْحَانَ اللَّهِ",
        "latin": "Subḥānallāh",
        "explanationAr": "تَنْزِيهُ اللَّهِ عَنْ كُلِّ نَقْصٍ، وَتُقَالُ عِنْدَ التَّعَجُّبِ.",
        "explanationEs": "Subhanallah\n«Glorificado sea Allah» (libre de toda imperfección). Se dice también ante algo que asombra."
      },
      {
        "itemNumber": 96,
        "text": "اللَّهُ أَكْبَرُ",
        "latin": "Allāhu akbar",
        "explanationAr": "أَيِ اللَّهُ أَكْبَرُ مِنْ كُلِّ شَيْءٍ، وَبِهَا تُفْتَتَحُ الصَّلَاةُ.",
        "explanationEs": "Allahu akbar\n«Allah es el más Grande». Con ella se empieza la oración."
      },
      {
        "itemNumber": 97,
        "text": "إِنْ شَاءَ اللَّهُ",
        "latin": "In shāʾ Allāh",
        "explanationAr": "تُقَالُ عِنْدَ الْعَزْمِ عَلَى فِعْلِ شَيْءٍ فِي الْمُسْتَقْبَلِ.",
        "explanationEs": "Insha'Allah\n«Si Allah quiere». Se dice al hablar de algo que se piensa hacer en el futuro."
      },
      {
        "itemNumber": 98,
        "text": "مَا شَاءَ اللَّهُ",
        "latin": "Mā shāʾ Allāh",
        "explanationAr": "تُقَالُ عِنْدَ رُؤْيَةِ مَا يُعْجِبُ، اعْتِرَافًا بِأَنَّهُ بِمَشِيئَةِ اللَّهِ.",
        "explanationEs": "Masha'Allah\n«Lo que Allah ha querido». Se dice al ver algo que agrada, para atribuir el bien a Allah y proteger del mal de ojo."
      },
      {
        "itemNumber": 99,
        "text": "أَسْتَغْفِرُ اللَّهَ",
        "latin": "Astaghfirullāh",
        "explanationAr": "طَلَبُ الْمَغْفِرَةِ مِنَ اللَّهِ.",
        "explanationEs": "Astaghfirullah\n«Pido perdón a Allah». Se dice tras un error y en todo momento como dhikr."
      },
      {
        "itemNumber": 100,
        "text": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        "latin": "Lā ḥawla wa lā quwwata illā billāh",
        "explanationAr": "كَنْزٌ مِنْ كُنُوزِ الْجَنَّةِ، وَمَعْنَاهَا لَا تَحَوُّلَ مِنْ حَالٍ إِلَى حَالٍ إِلَّا بِاللَّهِ.",
        "explanationEs": "La hawla wa la quwwata illa billah\n«No hay fuerza ni poder sino en Allah». Es un tesoro del Paraíso; se dice ante las dificultades."
      },
      {
        "itemNumber": 101,
        "text": "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
        "latin": "Innā lillāhi wa innā ilayhi rājiʿūn",
        "explanationAr": "تُقَالُ عِنْدَ الْمُصِيبَةِ، وَهِيَ مِنْ كَلِمَاتِ الصَّابِرِينَ.",
        "explanationEs": "Inna lillahi wa inna ilayhi rayiun\n«A Allah pertenecemos y a Él hemos de volver». Se dice ante una desgracia o al saber de una muerte."
      },
      {
        "itemNumber": 102,
        "text": "السَّلَامُ عَلَيْكُمْ",
        "latin": "As-salāmu ʿalaykum",
        "explanationAr": "تَحِيَّةُ الْإِسْلَامِ، وَيُرَدُّ عَلَيْهَا بِـ: وَعَلَيْكُمُ السَّلَامُ.",
        "explanationEs": "As-salamu alaykum\nSaludo del musulmán: «La paz sea con vosotros». Se responde: Wa alaykum as-salam."
      },
      {
        "itemNumber": 103,
        "text": "جَزَاكَ اللَّهُ خَيْرًا",
        "latin": "Jazāka Allāhu khayran",
        "explanationAr": "دُعَاءٌ لِمَنْ صَنَعَ إِلَيْكَ مَعْرُوفًا.",
        "explanationEs": "Yazak Allahu jairan\n«Que Allah te recompense con el bien». Forma de dar las gracias."
      },
      {
        "itemNumber": 104,
        "text": "بَارَكَ اللَّهُ فِيكَ",
        "latin": "Bāraka Allāhu fīk",
        "explanationAr": "دُعَاءٌ بِالْبَرَكَةِ لِلْغَيْرِ.",
        "explanationEs": "Barak Allahu fik\n«Que Allah te bendiga». Súplica por alguien, también para agradecer."
      },
      {
        "itemNumber": 105,
        "text": "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
        "latin": "Ṣalla Allāhu ʿalayhi wa sallam",
        "explanationAr": "تُقَالُ عِنْدَ ذِكْرِ النَّبِيِّ ﷺ.",
        "explanationEs": "ﷺ (Salla Allahu alayhi wa sallam)\n«Que Allah le bendiga y le dé paz». Se dice al mencionar al Profeta Muhammad ﷺ."
      },
      {
        "itemNumber": 106,
        "text": "رَضِيَ اللَّهُ عَنْهُ",
        "latin": "Raḍiya Allāhu ʿanhu",
        "explanationAr": "تُقَالُ عِنْدَ ذِكْرِ الصَّحَابِيِّ.",
        "explanationEs": "Radiyallahu anhu\n«Que Allah esté complacido con él». Se dice al mencionar a un Compañero del Profeta ﷺ."
      },
      {
        "itemNumber": 107,
        "text": "آمِينَ",
        "latin": "Āmīn",
        "explanationAr": "اسْمُ فِعْلٍ بِمَعْنَى: اللَّهُمَّ اسْتَجِبْ.",
        "explanationEs": "Amín\n«Oh Allah, responde». Se dice al final de la súplica y tras la Fatiha."
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
