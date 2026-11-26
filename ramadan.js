// ramadan.js — «رمضان · Ramadán». Sección completa (solo modo admin en la web).
// Aleyas: texto uzmaní (Quran API) y traducción de Isa García. Hadices: texto de las colecciones con fuente y grado.
// Traducciones de hadices, explicaciones y apartados informativos: redacción propia (sentido), pendientes de revisión.
const ramadanData = [
 {
  "id": "ram_intro",
  "titleAr": "مُقَدِّمَةٌ",
  "titleEs": "Introducción",
  "descAr": "",
  "descEs": "",
  "duas": [],
  "items": [
   {
    "isInfo": true,
    "text": "رَمَضَانُ: شَهْرُ الْقُرْآنِ وَالْمَغْفِرَةِ",
    "explanationAr": "• رَمَضَانُ هُوَ الشَّهْرُ التَّاسِعُ مِنَ السَّنَةِ الْهِجْرِيَّةِ، فُرِضَ صِيَامُهُ فِي السَّنَةِ الثَّانِيَةِ لِلْهِجْرَةِ، وَفِيهِ أُنْزِلَ الْقُرْآنُ.\n• هَذِهِ الْمَجْمُوعَةُ مُرَتَّبَةٌ لِتَقْرَأَهَا قَبْلَ الشَّهْرِ وَفِي أَثْنَائِهِ: الْفَرْضِيَّةُ، الْفَضَائِلُ، الْأَحْكَامُ، الْآدَابُ، الْقِيَامُ، لَيْلَةُ الْقَدْرِ، الْعَشْرُ، الْقُرْآنُ، الصَّدَقَةُ، زَكَاةُ الْفِطْرِ، الْعِيدُ، ثُمَّ الْأَدْعِيَةُ وَالْأَسْئِلَةُ وَالْمُتَابَعَةُ.\n• الْأَحَادِيثُ مِنْ كُتُبِ السُّنَّةِ مَعَ ذِكْرِ الْمَصْدَرِ وَالدَّرَجَةِ، وَالشُّرُوحُ بِصِيَاغَةٍ خَاصَّةٍ، وَفِي الْمَسَائِلِ الْفِقْهِيَّةِ الدَّقِيقَةِ يُسْأَلُ أَهْلُ الْعِلْمِ فِي بَلَدِكَ.",
    "explanationEs": "Ramadán: el mes del Corán y del perdón\n• Ramadán es el noveno mes del calendario hijri; su ayuno se prescribió en el año 2 de la Hégira y en él descendió el Corán.\n• Esta sección está ordenada para leerla antes del mes y durante él: obligatoriedad, virtudes, normas, etiqueta, oración nocturna, Noche del Decreto, últimos diez días, Corán, caridad, zakat al-fitr, Eid, y al final súplicas, preguntas frecuentes y seguimiento.\n• Los hadices proceden de las colecciones clásicas con fuente y grado; las explicaciones son de redacción propia. En cuestiones jurídicas delicadas, consulta a un sabio de tu lugar."
   }
  ]
 },
 {
  "id": "ram_fard",
  "titleAr": "فَرْضِيَّةُ الصِّيَامِ وَحِكْمَتُهُ",
  "titleEs": "El ayuno obligatorio y su sabiduría",
  "descAr": "مَنْ كَتَبَ اللَّهُ الصِّيَامَ، وَلِمَاذَا؟",
  "descEs": "Por qué se prescribió el ayuno y cuál es su finalidad",
  "duas": [],
  "items": [
   {
    "text": "﴿ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ كُتِبَ عَلَيۡكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبۡلِكُمۡ لَعَلَّكُمۡ تَتَّقُونَ ﴾",
    "explanationEs": "¡Oh, creyentes! Se les prescribe el ayuno al igual que fue prescrito a quienes los precedieron, para que alcancen la piedad",
    "note": "سُورَةُ الْبَقَرَةِ (2:183)",
    "noteEs": "Sura Al-Baqara (2:183)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/002183.mp3"
    ],
    "isAyah": true,
    "sharhAr": "غَايَةُ الصِّيَامِ هِيَ التَّقْوَى: أَنْ يَجْعَلَ الْعَبْدُ بَيْنَهُ وَبَيْنَ مَا يَكْرَهُ اللَّهُ وِقَايَةً. وَالنِّدَاءُ بِـ«يَا أَيُّهَا الَّذِينَ آمَنُوا» تَشْرِيفٌ وَتَحْفِيزٌ، وَقَوْلُهُ «كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ» يُؤْنِسُ الْقَلْبَ: فَالْعِبَادَةُ مَعْرُوفَةٌ عِنْدَ الْأُمَمِ قَبْلَنَا، وَهِيَ مَدْرَسَةٌ لِتَرْبِيَةِ النَّفْسِ عَلَى الصَّبْرِ وَضَبْطِ الشَّهَوَاتِ.",
    "sharhEs": "La meta del ayuno es la conciencia de Allah (taqwa): poner una barrera entre uno mismo y lo que Allah desaprueba. La llamada «¡Oh, creyentes!» honra y anima, y recordar que se prescribió a las comunidades anteriores consuela: es una escuela conocida de educación del alma en la paciencia y el dominio de los deseos.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 1
   },
   {
    "text": "﴿ شَهۡرُ رَمَضَانَ ٱلَّذِيٓ أُنزِلَ فِيهِ ٱلۡقُرۡءَانُ هُدࣰى لِّلنَّاسِ وَبَيِّنَٰتࣲ مِّنَ ٱلۡهُدَىٰ وَٱلۡفُرۡقَانِۚ فَمَن شَهِدَ مِنكُمُ ٱلشَّهۡرَ فَلۡيَصُمۡهُۖ وَمَن كَانَ مَرِيضًا أَوۡ عَلَىٰ سَفَرࣲ فَعِدَّةࣱ مِّنۡ أَيَّامٍ أُخَرَۗ يُرِيدُ ٱللَّهُ بِكُمُ ٱلۡيُسۡرَ وَلَا يُرِيدُ بِكُمُ ٱلۡعُسۡرَ وَلِتُكۡمِلُواْ ٱلۡعِدَّةَ وَلِتُكَبِّرُواْ ٱللَّهَ عَلَىٰ مَا هَدَىٰكُمۡ وَلَعَلَّكُمۡ تَشۡكُرُونَ ﴾",
    "explanationEs": "En el mes de Ramadán fue revelado el Corán como guía para la humanidad y evidencia de la guía y el criterio. Quien presencie la llegada de [la Luna nueva de] el mes deberá ayunar, pero quien esté enfermo o de viaje [y no ayune] deberá reponer posteriormente los días no ayunados y así completar el mes. Dios desea facilitarles las cosas y no dificultárselas; alaben y agradezcan a Dios por haberlos guiado",
    "note": "سُورَةُ الْبَقَرَةِ (2:185)",
    "noteEs": "Sura Al-Baqara (2:185)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/002185.mp3"
    ],
    "isAyah": true,
    "sharhAr": "فِي الْآيَةِ ثَلَاثُ رَسَائِلَ: شَرَفُ الشَّهْرِ بِنُزُولِ الْقُرْآنِ فِيهِ، وَوُجُوبُ الصَّوْمِ عَلَى مَنْ شَهِدَهُ، وَالتَّيْسِيرُ: «يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ». وَخِتَامُهَا بِإِكْمَالِ الْعِدَّةِ وَالتَّكْبِيرِ وَالشُّكْرِ، فَالصِّيَامُ يَنْتَهِي بِذِكْرٍ وَشُكْرٍ لَا بِفَرَحٍ غَافِلٍ.",
    "sharhEs": "La aleya trae tres mensajes: la nobleza del mes por haberse revelado en él el Corán, la obligación de ayunar para quien lo alcanza, y la facilidad («Allah desea para ustedes lo fácil»). Concluye con completar el número de días, glorificar y agradecer: el ayuno termina en recuerdo y gratitud, no en una alegría distraída.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 2
   },
   {
    "text": "بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ",
    "explanationEs": "El Islam está construido sobre cinco pilares: el testimonio de que no hay más dios que Allah y que Muhammad es Su mensajero, establecer la oración, pagar el zakat, la peregrinación a la Casa y el ayuno de Ramadán.",
    "note": "صَحِيحُ الْبُخَارِيِّ (8) · صحيح",
    "noteEs": "Sahih al-Bujari 8 · Sahih",
    "sharhAr": "رَمَضَانُ رُكْنٌ مِنْ أَرْكَانِ الْإِسْلَامِ، لَا عَادَةٌ مَوْسِمِيَّةٌ. وَالْبِنَاءُ لَا يَقُومُ إِذَا سَقَطَ أَحَدُ أَعْمِدَتِهِ؛ فَمَنْ صَامَ فَقَدْ شَيَّدَ جُزْءًا مِنْ دِينِهِ، وَمَنْ فَرَّطَ فَقَدْ أَضْعَفَ بُنْيَانَهُ.",
    "sharhEs": "Ramadán es un pilar del Islam, no una costumbre de temporada. Un edificio no se sostiene si cae una de sus columnas: quien ayuna levanta una parte de su religión y quien lo descuida debilita su construcción.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 3
   }
  ]
 },
 {
  "id": "ram_fadl",
  "titleAr": "فَضَائِلُ رَمَضَانَ وَالصِّيَامِ",
  "titleEs": "Virtudes de Ramadán y del ayuno",
  "descAr": "أَبْوَابُ الْجَنَّةِ، وَالرَّيَّانُ، وَالْمَغْفِرَةُ",
  "descEs": "Las puertas del Paraíso, el Rayyán y el perdón",
  "duas": [],
  "items": [
   {
    "text": "إِذَا دَخَلَ شَهْرُ رَمَضَانَ فُتِّحَتْ أَبْوَابُ السَّمَاءِ، وَغُلِّقَتْ أَبْوَابُ جَهَنَّمَ، وَسُلْسِلَتِ الشَّيَاطِينُ",
    "explanationEs": "Cuando entra el mes de Ramadán se abren las puertas del cielo, se cierran las puertas del Infierno y los demonios son encadenados.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1899) · صحيح",
    "noteEs": "Sahih al-Bujari 1899 · Sahih",
    "sharhAr": "الشَّهْرُ مَوْسِمُ فَتْحٍ: تَتَيَسَّرُ الطَّاعَةُ، وَتَقِلُّ دَوَاعِي الشَّرِّ. فَمَنْ لَمْ يَتَحَرَّكْ قَلْبُهُ فِي هَذَا الْجَوِّ فَلْيَتَّهِمْ نَفْسَهُ لَا الشَّيْطَانَ؛ فَالْعَوَائِقُ الْخَارِجِيَّةُ تَخِفُّ وَيَبْقَى مَا فِي النَّفْسِ.",
    "sharhEs": "El mes es una temporada de apertura: la obediencia se facilita y los incentivos al mal disminuyen. Si el corazón no se mueve en este ambiente, conviene culparse a uno mismo y no al demonio: los obstáculos externos se aligeran y queda lo que hay dentro del alma.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 4
   },
   {
    "text": "قَالَ اللَّهُ كُلُّ عَمَلِ ابْنِ آدَمَ لَهُ إِلَّا الصِّيَامَ، فَإِنَّهُ لِي، وَأَنَا أَجْزِي بِهِ. وَالصِّيَامُ جُنَّةٌ، وَإِذَا كَانَ يَوْمُ صَوْمِ أَحَدِكُمْ، فَلَا يَرْفُثْ وَلَا يَصْخَبْ، فَإِنْ سَابَّهُ أَحَدٌ، أَوْ قَاتَلَهُ فَلْيَقُلْ إِنِّي امْرُؤٌ صَائِمٌ. وَالَّذِي نَفْسُ مُحَمَّدٍ بِيَدِهِ لَخُلُوفُ فَمِ الصَّائِمِ أَطْيَبُ عِنْدَ اللَّهِ مِنْ رِيحِ الْمِسْكِ، لِلصَّائِمِ فَرْحَتَانِ يَفْرَحُهُمَا إِذَا أَفْطَرَ فَرِحَ، وَإِذَا لَقِيَ رَبَّهُ فَرِحَ بِصَوْمِهِ",
    "explanationEs": "Allah dice: «Toda obra del hijo de Adán es para él, salvo el ayuno: es para Mí y Yo lo recompenso». El ayuno es un escudo. Cuando uno de ustedes ayune, que no diga obscenidades ni levante la voz; si alguien lo insulta o lo ataca, que diga: «Estoy ayunando». Por Aquel en cuya mano está el alma de Muhammad, el aliento del que ayuna es más agradable ante Allah que el aroma del almizcle. El que ayuna tiene dos alegrías: cuando rompe el ayuno se alegra, y cuando se encuentre con su Señor se alegrará por su ayuno.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1904) · صحيح",
    "noteEs": "Sahih al-Bujari 1904 · Sahih",
    "sharhAr": "الصِّيَامُ سِرٌّ بَيْنَ الْعَبْدِ وَرَبِّهِ، وَلِذَلِكَ اخْتَصَّهُ اللَّهُ بِجَزَائِهِ. وَهُوَ دِرْعٌ يَحْمِي مِنَ الْمَعْصِيَةِ وَمِنَ النَّارِ. وَمِنْ كَمَالِهِ أَنْ يَصُونَ الصَّائِمُ لِسَانَهُ وَيَتَجَاوَزَ عَنِ الْمُسِيءِ. وَفَرْحَةُ الْإِفْطَارِ لِلنِّعْمَةِ، وَفَرْحَةُ لِقَاءِ اللَّهِ لِلثَّوَابِ.",
    "sharhEs": "El ayuno es un secreto entre el siervo y su Señor, por eso Allah se reserva su recompensa. Es una coraza contra el pecado y contra el Fuego. Parte de su perfección es cuidar la lengua y pasar por alto la ofensa. La alegría de romper el ayuno es por la bendición recibida; la de encontrarse con Allah, por la recompensa.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 5
   },
   {
    "text": "إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ، يَدْخُلُ مِنْهُ الصَّائِمُونَ يَوْمَ الْقِيَامَةِ، لَا يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ يُقَالُ أَيْنَ الصَّائِمُونَ فَيَقُومُونَ، لَا يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ، فَإِذَا دَخَلُوا أُغْلِقَ، فَلَمْ يَدْخُلْ مِنْهُ أَحَدٌ",
    "explanationEs": "En el Paraíso hay una puerta llamada ar-Rayyán por la que entrarán los que ayunan el Día de la Resurrección; nadie más entrará por ella. Se dirá: «¿Dónde están los que ayunaban?». Se levantarán y entrarán por ella; cuando hayan entrado, se cerrará y nadie más entrará.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1896) · صحيح",
    "noteEs": "Sahih al-Bujari 1896 · Sahih",
    "sharhAr": "اسْمُ «الرَّيَّانِ» مِنَ الرِّيِّ، جَزَاءٌ مُنَاسِبٌ لِمَنْ تَحَمَّلَ الظَّمَأَ لِلَّهِ. وَالنِّدَاءُ بِاسْمِ الصَّائِمِينَ تَكْرِيمٌ عَلَنِيٌّ لِعِبَادَةٍ كَانَتْ خَفِيَّةً فِي الدُّنْيَا.",
    "sharhEs": "El nombre ar-Rayyán viene de «saciar la sed»: una recompensa a la medida de quien soportó la sed por Allah. Ser llamado por el nombre de «los que ayunan» es un honor público para una adoración que en la vida del mundo fue discreta.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 6
   },
   {
    "text": "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    "explanationEs": "A quien ayune Ramadán con fe y esperando la recompensa de Allah se le perdonan sus pecados anteriores.",
    "note": "صَحِيحُ الْبُخَارِيِّ (38) · صحيح",
    "noteEs": "Sahih al-Bujari 38 · Sahih",
    "sharhAr": "شَرْطَا الْقَبُولِ: «إِيمَانًا» أَيْ تَصْدِيقًا بِفَرْضِيَّتِهِ، وَ«احْتِسَابًا» أَيْ طَلَبًا لِوَجْهِ اللَّهِ لَا عَادَةً وَلَا مُجَارَاةً لِلنَّاسِ. وَيَرْجُو الْعُلَمَاءُ أَنْ يَشْمَلَ الْمَغْفِرَةَ الصَّغَائِرَ، وَأَنْ تُخَفَّفَ الْكَبَائِرُ بِالتَّوْبَةِ.",
    "sharhEs": "Dos condiciones: «con fe» (creer en su obligatoriedad) y «esperando recompensa» (por Allah, no por costumbre ni por acompañar a la gente). Los sabios esperan que alcance los pecados menores y que los mayores se alivien con el arrepentimiento sincero.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 7
   },
   {
    "text": "فَإِذَا كَانَ رَمَضَانُ اعْتَمِرِي فِيهِ فَإِنَّ عُمْرَةً فِي رَمَضَانَ حَجَّةٌ",
    "explanationEs": "(El Profeta ﷺ dijo a una mujer de los Ansar:) «Cuando llegue Ramadán, haz la umra en él, pues una umra en Ramadán equivale a una peregrinación».",
    "note": "صَحِيحُ الْبُخَارِيِّ (1782) · صحيح",
    "noteEs": "Sahih al-Bujari 1782 · Sahih",
    "sharhAr": "الْحَدِيثُ يُبَيِّنُ عِظَمَ أَجْرِ الْعَمَلِ فِي رَمَضَانَ، وَقَدْ فَهِمَ الْعُلَمَاءُ أَنَّ الْعُمْرَةَ فِيهِ تُعَادِلُ الْحَجَّةَ فِي الثَّوَابِ لَا فِي إِسْقَاطِ فَرِيضَةِ الْحَجِّ. فَالزَّمَانُ الشَّرِيفُ يُضَاعِفُ الْعَمَلَ.",
    "sharhEs": "Muestra cuánto se multiplica la recompensa de las obras en Ramadán. Los sabios entienden que equivale en recompensa a una peregrinación, no que sustituya la obligación del hach. El tiempo noble multiplica la obra.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 8
   }
  ]
 },
 {
  "id": "ram_ahkam",
  "titleAr": "أَحْكَامٌ مُيَسَّرَةٌ",
  "titleEs": "Normas básicas, explicadas con sencillez",
  "descAr": "النِّيَّةُ، وَالْأَعْذَارُ، وَالْمُفَطِّرَاتُ",
  "descEs": "La intención, las excepciones y lo que rompe el ayuno",
  "duas": [],
  "items": [
   {
    "text": "﴿ أُحِلَّ لَكُمۡ لَيۡلَةَ ٱلصِّيَامِ ٱلرَّفَثُ إِلَىٰ نِسَآئِكُمۡۚ هُنَّ لِبَاسࣱ لَّكُمۡ وَأَنتُمۡ لِبَاسࣱ لَّهُنَّۗ عَلِمَ ٱللَّهُ أَنَّكُمۡ كُنتُمۡ تَخۡتَانُونَ أَنفُسَكُمۡ فَتَابَ عَلَيۡكُمۡ وَعَفَا عَنكُمۡۖ فَٱلۡـَٰٔنَ بَٰشِرُوهُنَّ وَٱبۡتَغُواْ مَا كَتَبَ ٱللَّهُ لَكُمۡۚ وَكُلُواْ وَٱشۡرَبُواْ حَتَّىٰ يَتَبَيَّنَ لَكُمُ ٱلۡخَيۡطُ ٱلۡأَبۡيَضُ مِنَ ٱلۡخَيۡطِ ٱلۡأَسۡوَدِ مِنَ ٱلۡفَجۡرِۖ ثُمَّ أَتِمُّواْ ٱلصِّيَامَ إِلَى ٱلَّيۡلِۚ وَلَا تُبَٰشِرُوهُنَّ وَأَنتُمۡ عَٰكِفُونَ فِي ٱلۡمَسَٰجِدِۗ تِلۡكَ حُدُودُ ٱللَّهِ فَلَا تَقۡرَبُوهَاۗ كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ ءَايَٰتِهِۦ لِلنَّاسِ لَعَلَّهُمۡ يَتَّقُونَ ﴾",
    "explanationEs": "Durante las noches del mes de ayuno les es lícito mantener relaciones [maritales] con sus mujeres. Ellas son su vestimenta, y ustedes la vestimenta de ellas. Dios sabe que se engañaban a sí mismos, por eso los perdonó y les hizo esta concesión. Ahora pueden mantener relaciones con ellas y aprovechar lo que Dios les ha prescrito. Coman y beban hasta que se distinga el hilo blanco [la luz del alba] del hilo negro [la oscuridad de la noche], y luego completen el ayuno hasta la noche, y no mantengan relaciones con ellas si están haciendo el retiro espiritual en las mezquitas. Éstos son los límites de Dios, no los transgredan. Así aclara Dios Sus signos a la gente para que alcancen la piedad",
    "note": "سُورَةُ الْبَقَرَةِ (2:187)",
    "noteEs": "Sura Al-Baqara (2:187)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/002187.mp3"
    ],
    "isAyah": true,
    "sharhAr": "تَحْدِيدُ وَقْتِ الصِّيَامِ بِالْفَجْرِ وَاللَّيْلِ بَيَانٌ لِلْحُدُودِ بِرِفْقٍ: يَحِلُّ الْأَكْلُ وَالشُّرْبُ إِلَى أَنْ يَتَبَيَّنَ الْفَجْرُ، ثُمَّ يُتَمُّ الصِّيَامُ إِلَى اللَّيْلِ. وَفِيهَا ذِكْرُ الِاعْتِكَافِ فِي الْمَسَاجِدِ وَتَحْذِيرٌ مِنْ تَعَدِّي الْحُدُودِ.",
    "sharhEs": "La aleya fija con suavidad los límites: se puede comer y beber hasta que se distingue el alba, y se completa el ayuno hasta la noche. Menciona también el retiro (itikaf) en las mezquitas y advierte de no sobrepasar los límites de Allah.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 9
   },
   {
    "text": "﴿ أَيَّامࣰا مَّعۡدُودَٰتࣲۚ فَمَن كَانَ مِنكُم مَّرِيضًا أَوۡ عَلَىٰ سَفَرࣲ فَعِدَّةࣱ مِّنۡ أَيَّامٍ أُخَرَۚ وَعَلَى ٱلَّذِينَ يُطِيقُونَهُۥ فِدۡيَةࣱ طَعَامُ مِسۡكِينࣲۖ فَمَن تَطَوَّعَ خَيۡرࣰا فَهُوَ خَيۡرࣱ لَّهُۥۚ وَأَن تَصُومُواْ خَيۡرࣱ لَّكُمۡ إِن كُنتُمۡ تَعۡلَمُونَ ﴾",
    "explanationEs": "Son días contados [el mes de Ramadán]. Quien esté enfermo o de viaje y no ayune, deberá reponer posteriormente los días no ayunados. Quienes puedan [pero con mucha dificultad por la vejez] y no lo hagan, deberán alimentar a un pobre [por cada día no ayunado]. Pero quien voluntariamente alimente a más de un pobre, será más beneficioso para él. Y ayunar es mejor para ustedes, si supieran",
    "note": "سُورَةُ الْبَقَرَةِ (2:184)",
    "noteEs": "Sura Al-Baqara (2:184)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/002184.mp3"
    ],
    "isAyah": true,
    "sharhAr": "الرُّخْصَةُ لِلْمَرِيضِ وَالْمُسَافِرِ بِالْقَضَاءِ دَلِيلٌ عَلَى رَحْمَةِ الشَّرِيعَةِ. وَالْفِدْيَةُ لِمَنْ لَا يَسْتَطِيعُ الصَّوْمَ اسْتِطَاعَةً دَائِمَةً كَالشَّيْخِ الْكَبِيرِ. وَمَنْ تَطَوَّعَ بِالزِّيَادَةِ فَهُوَ خَيْرٌ لَهُ.",
    "sharhEs": "La facilidad para el enfermo y el viajero (recuperar los días) muestra la misericordia de la ley. La compensación con alimento (fidya) es para quien no puede ayunar de forma permanente, como el anciano. Quien añade de más por iniciativa propia, obtiene un bien mayor.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 10
   },
   {
    "text": "صُومُوا لِرُؤْيَتِهِ، وَأَفْطِرُوا لِرُؤْيَتِهِ، فَإِنْ غُبِّيَ عَلَيْكُمْ فَأَكْمِلُوا عِدَّةَ شَعْبَانَ ثَلَاثِينَ",
    "explanationEs": "Ayunen al ver la luna nueva y rompan el ayuno al verla; y si el cielo está nublado, completen Shaabán en treinta días.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1909) · صحيح",
    "noteEs": "Sahih al-Bujari 1909 · Sahih",
    "sharhAr": "بِدَايَةُ الشَّهْرِ وَنِهَايَتُهُ تَتَعَلَّقَانِ بِالرُّؤْيَةِ أَوْ بِإِكْمَالِ الْعِدَّةِ. وَتَخْتَلِفُ الْبُلْدَانُ وَالْمَجَامِعُ الْفِقْهِيَّةُ فِي تَفَاصِيلِ الْحِسَابِ وَاخْتِلَافِ الْمَطَالِعِ، فَالْمُسْلِمُ يَتْبَعُ مَا تُعْلِنُهُ الْجِهَةُ الشَّرْعِيَّةُ فِي بَلَدِهِ.",
    "sharhEs": "El inicio y el fin del mes dependen de la visión de la luna o de completar el mes. Los países y los consejos jurídicos difieren en los detalles del cálculo y de las regiones de visibilidad; lo prudente es seguir lo que anuncie la autoridad religiosa de tu lugar.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 11
   },
   {
    "text": "لَا يَتَقَدَّمَنَّ أَحَدُكُمْ رَمَضَانَ بِصَوْمِ يَوْمٍ أَوْ يَوْمَيْنِ، إِلَّا أَنْ يَكُونَ رَجُلٌ كَانَ يَصُومُ صَوْمَهُ فَلْيَصُمْ ذَلِكَ الْيَوْمَ",
    "explanationEs": "Que ninguno de ustedes se anticipe a Ramadán ayunando un día o dos antes, salvo quien tenga la costumbre de ayunar ciertos días: que ayune ese día.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1914) · صحيح",
    "noteEs": "Sahih al-Bujari 1914 · Sahih",
    "sharhAr": "النَّهْيُ لِئَلَّا يُخْلَطَ بَيْنَ النَّفْلِ وَالْفَرْضِ، وَلِيَكُونَ الدُّخُولُ فِي الشَّهْرِ عَنْ يَقِينٍ. وَالِاسْتِثْنَاءُ لِمَنْ لَهُ عَادَةٌ مُعْتَادَةٌ كَصَوْمِ الِاثْنَيْنِ وَالْخَمِيسِ.",
    "sharhEs": "La prohibición evita mezclar lo voluntario con lo obligatorio y entrar al mes con certeza. Se exceptúa a quien tiene una costumbre establecida, como ayunar lunes y jueves.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 12
   },
   {
    "text": "مَنْ نَسِيَ وَهُوَ صَائِمٌ فَأَكَلَ أَوْ شَرِبَ فَلْيُتِمَّ صَوْمَهُ فَإِنَّمَا أَطْعَمَهُ اللَّهُ وَسَقَاهُ",
    "explanationEs": "Quien olvide que está ayunando y coma o beba, que complete su ayuno: Allah le dio de comer y de beber.",
    "note": "صَحِيحُ مُسْلِمٍ (1155) · صحيح",
    "noteEs": "Sahih Muslim 1155 · Sahih",
    "sharhAr": "مِنْ سَمَاحَةِ الشَّرِيعَةِ أَنَّ النِّسْيَانَ لَا يُفْسِدُ الصِّيَامَ. وَإِذَا تَذَكَّرَ الصَّائِمُ فَلْيُمْسِكْ عَنِ الْأَكْلِ فَوْرًا وَيُتِمَّ يَوْمَهُ، وَلَا قَضَاءَ عَلَيْهِ عِنْدَ الْجُمْهُورِ.",
    "sharhEs": "Parte de la indulgencia de la ley es que el olvido no anula el ayuno. Al recordarlo, se deja de comer de inmediato y se completa el día; según la mayoría de los sabios no hay que recuperarlo.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 13
   },
   {
    "isInfo": true,
    "text": "الْفَرْقُ بَيْنَ الصَّوْمِ الصَّحِيحِ وَالْفَاسِدِ",
    "explanationAr": "• يَجِبُ الصَّوْمُ عَلَى الْمُسْلِمِ الْبَالِغِ الْعَاقِلِ الْمُقِيمِ الْقَادِرِ، وَتُشْتَرَطُ النِّيَّةُ قَبْلَ الْفَجْرِ فِي الْفَرْضِ عِنْدَ الْجُمْهُورِ، وَتَكْفِي نِيَّةٌ لِلشَّهْرِ كُلِّهِ عِنْدَ بَعْضِ الْفُقَهَاءِ مَا لَمْ يَنْقَطِعِ الصَّوْمُ بِعُذْرٍ.\n• الْمُفَطِّرَاتُ الْمُتَّفَقُ عَلَيْهَا: الْأَكْلُ وَالشُّرْبُ عَمْدًا، وَالْجِمَاعُ، وَالْقَيْءُ الْمُتَعَمَّدُ، وَدَمُ الْحَيْضِ وَالنِّفَاسِ.\n• مَنْ أَفْطَرَ لِعُذْرٍ (مَرَضٌ، سَفَرٌ، حَيْضٌ) قَضَى بِعَدَدِ الْأَيَّامِ. وَمَنْ عَجَزَ عَجْزًا دَائِمًا أَطْعَمَ عَنْ كُلِّ يَوْمٍ مِسْكِينًا.\n• مَنْ جَامَعَ فِي نَهَارِ رَمَضَانَ عَمْدًا فَعَلَيْهِ الْقَضَاءُ وَالْكَفَّارَةُ الْمُغَلَّظَةُ: عِتْقُ رَقَبَةٍ، فَإِنْ لَمْ يَجِدْ فَصِيَامُ شَهْرَيْنِ مُتَتَابِعَيْنِ، فَإِنْ لَمْ يَسْتَطِعْ فَإِطْعَامُ سِتِّينَ مِسْكِينًا (حَدِيثُ الْبُخَارِيِّ 1936).\n• مَسَائِلُ كَالْحُقْنَةِ وَالتَّحَالِيلِ وَالْحَامِلِ وَالْمُرْضِعِ فِيهَا خِلَافٌ بَيْنَ الْعُلَمَاءِ؛ فَاسْأَلْ عَالِمًا ثِقَةً فِي بَلَدِكَ.",
    "explanationEs": "Lo esencial: qué se necesita y qué lo rompe\n• Debe ayunar el musulmán adulto, cuerdo, residente y capaz. La intención se hace antes del alba en el ayuno obligatorio según la mayoría; algunos juristas admiten una sola intención para todo el mes mientras no se interrumpa por una excusa.\n• Rompen el ayuno, por consenso: comer y beber a propósito, la relación conyugal, el vómito provocado y la sangre de la menstruación o del posparto.\n• Quien rompe por una excusa (enfermedad, viaje, menstruación) recupera los mismos días. Quien no puede ayunar de forma permanente da de comer a un pobre por cada día.\n• Quien tiene relaciones a propósito durante el día de Ramadán debe recuperar el día y cumplir la expiación mayor: liberar un esclavo; si no puede, ayunar dos meses seguidos; si no puede, dar de comer a sesenta pobres (hadiz de al-Bujari 1936).\n• Casos como inyecciones, análisis de sangre, embarazo o lactancia tienen diferencias entre los sabios; consulta a un sabio de confianza de tu lugar."
   }
  ]
 },
 {
  "id": "ram_adab",
  "titleAr": "آدَابُ الصَّائِمِ",
  "titleEs": "Etiqueta del que ayuna",
  "descAr": "السُّحُورُ، وَالْإِفْطَارُ، وَحِفْظُ اللِّسَانِ",
  "descEs": "El suhur, el iftar y el cuidado de la lengua",
  "duas": [],
  "items": [
   {
    "text": "تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً",
    "explanationEs": "Tomen el suhur (comida antes del alba), pues en el suhur hay bendición.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1923) · صحيح",
    "noteEs": "Sahih al-Bujari 1923 · Sahih",
    "sharhAr": "الْبَرَكَةُ فِي السَّحُورِ تَشْمَلُ الْقُوَّةَ عَلَى الصِّيَامِ، وَاتِّبَاعَ السُّنَّةِ، وَمُخَالَفَةَ أَهْلِ الْكِتَابِ، وَقِيَامَ الْعَبْدِ فِي وَقْتِ السَّحَرِ لِلذِّكْرِ وَالدُّعَاءِ. وَيَحْصُلُ أَصْلُهُ وَلَوْ بِتَمْرَةٍ أَوْ جُرْعَةِ مَاءٍ.",
    "sharhEs": "La bendición del suhur incluye fuerza para ayunar, seguir la sunna, distinguirse de la gente del Libro y aprovechar el tiempo previo al alba para recordar a Allah y suplicar. Se cumple aunque sea con un dátil o un trago de agua.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 14
   },
   {
    "text": "لَا يَزَالُ النَّاسُ بِخَيْرٍ مَا عَجَّلُوا الْفِطْرَ",
    "explanationEs": "La gente seguirá en el bien mientras se apresure a romper el ayuno.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1957) · صحيح",
    "noteEs": "Sahih al-Bujari 1957 · Sahih",
    "sharhAr": "تَعْجِيلُ الْفِطْرِ بَعْدَ تَحَقُّقِ الْغُرُوبِ مِنْ سُنَنِ الصِّيَامِ، وَفِيهِ قُبُولُ الرُّخْصَةِ وَتَرْكُ الْغُلُوِّ. وَعَلَامَةُ الْخَيْرِ فِي الْأُمَّةِ أَنْ تَتْبَعَ السُّنَّةَ وَلَا تُشَدِّدَ عَلَى نَفْسِهَا.",
    "sharhEs": "Apresurarse a romper el ayuno una vez confirmado el ocaso es una sunna del ayuno; implica aceptar la facilidad y evitar el exceso. Una señal de bien en la comunidad es seguir la sunna sin endurecerse.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 15
   },
   {
    "text": "إِذَا أَقْبَلَ اللَّيْلُ مِنْ هَا هُنَا، وَأَدْبَرَ النَّهَارُ مِنْ هَا هُنَا، وَغَرَبَتِ الشَّمْسُ، فَقَدْ أَفْطَرَ الصَّائِمُ",
    "explanationEs": "Cuando la noche llega por aquí, el día se va por allá y se pone el sol, el que ayuna ya puede romper el ayuno.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1954) · صحيح",
    "noteEs": "Sahih al-Bujari 1954 · Sahih",
    "sharhAr": "وَقْتُ الْإِفْطَارِ يَدْخُلُ بِغُرُوبِ الشَّمْسِ تَحَقُّقًا لَا اجْتِهَادًا مُتَسَرِّعًا؛ وَالْمَعْنَى أَنَّ الصَّوْمَ يَنْتَهِي بِدُخُولِ اللَّيْلِ فَلَا يَجُوزُ وَصْلُهُ بِلَا سَبَبٍ.",
    "sharhEs": "La hora de romper el ayuno llega con la puesta del sol, comprobada y no supuesta. Significa que el ayuno termina con la entrada de la noche y no debe prolongarse sin motivo.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 16
   },
   {
    "text": "كَانَ رَسُولُ اللَّهِ ﷺ يُفْطِرُ عَلَى رُطَبَاتٍ قَبْلَ أَنْ يُصَلِّيَ فَإِنْ لَمْ تَكُنْ رُطَبَاتٌ فَعَلَى تَمَرَاتٍ فَإِنْ لَمْ تَكُنْ حَسَا حَسَوَاتٍ مِنْ مَاءٍ .",
    "explanationEs": "(Anas ibn Malik dijo:) El Profeta ﷺ solía romper el ayuno antes de rezar con unos dátiles frescos; si no había, con dátiles secos; y si no, con unos tragos de agua.",
    "note": "سُنَنُ أَبِي دَاوُدَ (2356) · حَسَنٌ",
    "noteEs": "Sunan Abu Dawud 2356 · Hasan",
    "sharhAr": "الْإِفْطَارُ عَلَى التَّمْرِ أَوِ الْمَاءِ سُنَّةٌ ثَابِتَةٌ، وَفِيهِ تَدَرُّجٌ يُرَاعِي الْمُتَاحَ: رُطَبٌ، ثُمَّ تَمْرٌ، ثُمَّ مَاءٌ. وَتَقْدِيمُ الْفِطْرِ عَلَى الصَّلَاةِ تَأْكِيدٌ لِمُبَادَرَتِهِ إِلَى الرُّخْصَةِ.",
    "sharhEs": "Romper el ayuno con dátiles o agua es una sunna confirmada, con una gradación que respeta lo disponible: dátiles frescos, dátiles secos y agua. Hacerlo antes de la oración subraya la prontitud en aceptar la facilidad.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 17
   },
   {
    "text": "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    "explanationEs": "(Ibn Umar dijo:) Cuando el Profeta ﷺ rompía el ayuno, decía: «Se fue la sed, se humedecieron las venas y se confirmó la recompensa, si Allah quiere».",
    "note": "سُنَنُ أَبِي دَاوُدَ (2357) · حَسَنٌ",
    "noteEs": "Sunan Abu Dawud 2357 · Hasan",
    "sharhAr": "دُعَاءٌ قَصِيرٌ يَجْمَعُ شُكْرَ النِّعْمَةِ وَرَجَاءَ الْأَجْرِ. وَهُوَ أَصَحُّ مَا وَرَدَ فِي ذِكْرِ الْإِفْطَارِ؛ أَمَّا «اللَّهُمَّ لَكَ صُمْتُ…» فَضَعَّفَهُ الْمُحَدِّثُونَ، وَلَا حَرَجَ فِي الدُّعَاءِ بِمَا شِئْتَ عِنْدَ الْفِطْرِ.",
    "sharhEs": "Una súplica breve que reúne gratitud y esperanza en la recompensa. Es lo más sólido transmitido para el iftar; la fórmula «Allahumma laka sumtu…» fue considerada débil por los expertos en hadiz, y no hay inconveniente en suplicar libremente al romper el ayuno.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 18
   },
   {
    "text": "مَنْ لَمْ يَدَعْ قَوْلَ الزُّورِ وَالْعَمَلَ بِهِ فَلَيْسَ لِلَّهِ حَاجَةٌ فِي أَنْ يَدَعَ طَعَامَهُ وَشَرَابَهُ",
    "explanationEs": "A quien no abandone el falso testimonio y el obrar según él, Allah no necesita que deje su comida y su bebida.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1903) · صحيح",
    "noteEs": "Sahih al-Bujari 1903 · Sahih",
    "sharhAr": "مَقْصُودُ الصَّوْمِ تَهْذِيبُ السُّلُوكِ لَا الْجُوعُ وَحْدَهُ. فَالْغِيبَةُ وَالْكَذِبُ وَالْأَذَى تُنْقِصُ ثَوَابَ الصَّائِمِ وَإِنْ صَحَّ صَوْمُهُ ظَاهِرًا. فَلْيَكُنْ لِلسَّانِ وَالْعَيْنِ وَالْأُذُنِ صِيَامٌ كَصِيَامِ الْمَعِدَةِ.",
    "sharhEs": "El fin del ayuno es refinar la conducta, no solo el hambre. La difamación, la mentira y el daño restan recompensa aunque el ayuno sea válido en apariencia. Que la lengua, los ojos y los oídos también ayunen.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 19
   },
   {
    "isInfo": true,
    "text": "رُوتِينُ يَوْمٍ مُبَارَكٍ",
    "explanationAr": "• قَبْلَ الْفَجْرِ: قِيَامٌ يَسِيرٌ، سُحُورٌ، اسْتِغْفَارٌ، نِيَّةُ الصِّيَامِ.\n• الصُّبْحُ: أَذْكَارُ الصَّبَاحِ وَوِرْدٌ مِنَ الْقُرْآنِ.\n• أَثْنَاءَ النَّهَارِ: الْعَمَلُ بِإِتْقَانٍ، حِفْظُ اللِّسَانِ، وَصَدَقَةٌ وَلَوْ يَسِيرَةٌ، وَقَيْلُولَةٌ لِلتَّقَوِّي عَلَى الْقِيَامِ.\n• قُبَيْلَ الْمَغْرِبِ: دُعَاءٌ، فَإِنَّ لِلصَّائِمِ دَعْوَةً مَرْجُوَّةَ الْإِجَابَةِ.\n• الْإِفْطَارُ: تَمْرٌ وَمَاءٌ بِاعْتِدَالٍ، ثُمَّ الصَّلَاةُ، ثُمَّ الْعَشَاءُ الْخَفِيفُ.\n• اللَّيْلُ: الْعِشَاءُ وَالتَّرَاوِيحُ وَالْوِتْرُ، وَنَوْمٌ مُبَكِّرٌ.",
    "explanationEs": "Una jornada tipo de Ramadán\n• Antes del alba: un poco de oración nocturna, suhur, istigfar y la intención de ayunar.\n• Mañana: adhkar de la mañana y una porción de Corán.\n• Durante el día: trabajar con esmero, cuidar la lengua, dar alguna sadaqa aunque sea pequeña y echar una siesta para tener fuerzas por la noche.\n• Poco antes del ocaso: súplica; el que ayuna tiene una súplica con esperanza de ser aceptada.\n• Iftar: dátiles y agua con moderación, luego la oración y una cena ligera.\n• Noche: isha, tarawih y witr, y acostarse temprano."
   }
  ]
 },
 {
  "id": "ram_qiyam",
  "titleAr": "قِيَامُ رَمَضَانَ وَالتَّرَاوِيحُ",
  "titleEs": "Oración nocturna y tarawih",
  "descAr": "أَجْرُ الْقِيَامِ وَكَيْفِيَّتُهُ",
  "descEs": "Su recompensa y su forma",
  "duas": [],
  "items": [
   {
    "text": "مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    "explanationEs": "A quien pase las noches de Ramadán en oración con fe y esperando la recompensa de Allah se le perdonan sus pecados anteriores.",
    "note": "صَحِيحُ الْبُخَارِيِّ (37) · صحيح",
    "noteEs": "Sahih al-Bujari 37 · Sahih",
    "sharhAr": "الْقِيَامُ يَشْمَلُ التَّرَاوِيحَ وَالتَّهَجُّدَ. وَالْإِيمَانُ وَالِاحْتِسَابُ شَرْطَانِ كَمَا فِي الصِّيَامِ: أَنْ يَقُومَ الْعَبْدُ مُوقِنًا بِالْفَضْلِ طَالِبًا الْأَجْرَ لَا مُجَرَّدَ تَقْلِيدٍ.",
    "sharhEs": "La oración nocturna incluye tarawih y tahayyud. Como en el ayuno, hay dos condiciones: fe y esperanza de la recompensa, no una mera imitación.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 20
   },
   {
    "text": "إِنَّهُ مَنْ قَامَ مَعَ الْإِمَامِ حَتَّى يَنْصَرِفَ كُتِبَ لَهُ قِيَامُ لَيْلَةٍ",
    "explanationEs": "(Dijo el Profeta ﷺ:) Quien reza de pie con el imam hasta que termine, se le registra como si hubiera rezado toda la noche.",
    "note": "سُنَنُ التِّرْمِذِيِّ (806) · صَحِيحٌ",
    "noteEs": "Sunan at-Tirmidhi 806 · Sahih",
    "sharhAr": "رَحْمَةٌ عَظِيمَةٌ لِمَنْ لَا يَسْتَطِيعُ طُولَ الْقِيَامِ: فَالصَّلَاةُ مَعَ الْجَمَاعَةِ إِلَى آخِرِهَا، وَمِنْهَا الْوِتْرُ، تُكْتَبُ لَهُ قِيَامَ لَيْلَةٍ. فَلَا تَنْصَرِفْ قَبْلَ انْصِرَافِ الْإِمَامِ.",
    "sharhEs": "Una gran misericordia para quien no puede alargar la oración: rezar con la congregación hasta el final, incluido el witr, se le anota como la noche entera. No te marches antes que el imam.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 21
   },
   {
    "text": "مَا كَانَ رَسُولُ اللَّهِ ﷺ يَزِيدُ فِي رَمَضَانَ وَلَا فِي غَيْرِهِ عَلَى إِحْدَى عَشْرَةَ رَكْعَةً، يُصَلِّي أَرْبَعًا فَلَا تَسَلْ عَنْ حُسْنِهِنَّ وَطُولِهِنَّ، ثُمَّ يُصَلِّي أَرْبَعًا فَلَا تَسَلْ عَنْ حُسْنِهِنَّ وَطُولِهِنَّ، ثُمَّ يُصَلِّي ثَلَاثًا، قَالَتْ عَائِشَةُ فَقُلْتُ يَا رَسُولَ اللَّهِ أَتَنَامُ قَبْلَ أَنْ تُوتِرَ. فَقَالَ «يَا عَائِشَةُ، إِنَّ عَيْنَيَّ تَنَامَانِ وَلَا يَنَامُ قَلْبِي»",
    "explanationEs": "(Preguntaron a Aisha cómo era la oración del Profeta ﷺ en Ramadán. Dijo:) No pasaba de once rakaas ni en Ramadán ni fuera de él: rezaba cuatro, ¡no preguntes por su belleza y su duración!, luego otras cuatro igual, y después tres. Le dije: «¿Duermes antes de hacer el witr?». Dijo: «Aisha, mis ojos duermen pero mi corazón no duerme».",
    "note": "صَحِيحُ الْبُخَارِيِّ (1147) · صحيح",
    "noteEs": "Sahih al-Bujari 1147 · Sahih",
    "sharhAr": "يُسْتَفَادُ مِنْهُ جَمَالُ الصَّلَاةِ وَطُولُهَا وَطُمَأْنِينَتُهَا. وَالْعُلَمَاءُ يُجِيزُونَ الزِّيَادَةَ عَلَى إِحْدَى عَشْرَةَ، فَالْأَمْرُ وَاسِعٌ، وَالْمُهِمُّ الْخُشُوعُ وَالْمُدَاوَمَةُ، وَأَنْ تُصَلِّيَ مَا تُطِيقُ بِإِتْقَانٍ.",
    "sharhEs": "Enseña la belleza, la calma y la duración de la oración del Profeta. Los sabios admiten que se rece más de once rakaas, así que el asunto es amplio; lo importante es el recogimiento, la constancia y rezar lo que puedas con esmero.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 22
   }
  ]
 },
 {
  "id": "ram_qadr",
  "titleAr": "لَيْلَةُ الْقَدْرِ",
  "titleEs": "La Noche del Decreto (Laylat al-Qadr)",
  "descAr": "خَيْرٌ مِنْ أَلْفِ شَهْرٍ",
  "descEs": "Mejor que mil meses",
  "duas": [],
  "items": [
   {
    "text": "﴿ إِنَّآ أَنزَلۡنَٰهُ فِي لَيۡلَةِ ٱلۡقَدۡرِ وَمَآ أَدۡرَىٰكَ مَا لَيۡلَةُ ٱلۡقَدۡرِ لَيۡلَةُ ٱلۡقَدۡرِ خَيۡرࣱ مِّنۡ أَلۡفِ شَهۡرࣲ تَنَزَّلُ ٱلۡمَلَٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذۡنِ رَبِّهِم مِّن كُلِّ أَمۡرࣲ سَلَٰمٌ هِيَ حَتَّىٰ مَطۡلَعِ ٱلۡفَجۡرِ ﴾",
    "explanationEs": "Comencé la revelación [del Corán] en la noche de la predestinación. ¿Y qué te hará comprender la importancia de la noche de la predestinación? [Adorar a Dios] la noche de la predestinación es superior en recompensa a hacerlo durante mil meses. Esta noche descienden los ángeles y el espíritu [el ángel Gabriel] con órdenes de su Señor para todos los asuntos. Es una noche de paz y seguridad hasta el comienzo del alba",
    "note": "سُورَةُ الْقَدْرِ (97:1-5)",
    "noteEs": "Sura Al-Qadr (97:1-5)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/097001.mp3",
     "https://everyayah.com/data/Alafasy_128kbps/097002.mp3",
     "https://everyayah.com/data/Alafasy_128kbps/097003.mp3",
     "https://everyayah.com/data/Alafasy_128kbps/097004.mp3",
     "https://everyayah.com/data/Alafasy_128kbps/097005.mp3"
    ],
    "isAyah": true,
    "sharhAr": "السُّورَةُ كُلُّهَا فِي بَيَانِ شَرَفِ اللَّيْلَةِ: نُزُولُ الْقُرْآنِ فِيهَا، وَأَنَّهَا خَيْرٌ مِنْ أَلْفِ شَهْرٍ، وَتَنَزُّلُ الْمَلَائِكَةِ وَالرُّوحِ بِأَمْرِ اللَّهِ، وَأَنَّهَا سَلَامٌ حَتَّى مَطْلَعِ الْفَجْرِ. فَقِيَامُهَا بِإِخْلَاصٍ يَعْدِلُ عُمُرًا مِنَ الْعِبَادَةِ.",
    "sharhEs": "La sura entera trata de la nobleza de esa noche: en ella descendió el Corán, es mejor que mil meses, descienden los ángeles y el Espíritu por orden de Allah, y es paz hasta el amanecer. Vivirla con sinceridad equivale a toda una vida de adoración.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 23
   },
   {
    "text": "﴿ إِنَّآ أَنزَلۡنَٰهُ فِي لَيۡلَةࣲ مُّبَٰرَكَةٍۚ إِنَّا كُنَّا مُنذِرِينَ فِيهَا يُفۡرَقُ كُلُّ أَمۡرٍ حَكِيمٍ ﴾",
    "explanationEs": "que he revelado en una noche bendita: ¡Les he advertido! En ella se decreta sabiamente cada asunto",
    "note": "سُورَةُ الدُّخَانِ (44:3-4)",
    "noteEs": "Sura Ad-Dujan (44:3-4)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/044003.mp3",
     "https://everyayah.com/data/Alafasy_128kbps/044004.mp3"
    ],
    "isAyah": true,
    "sharhAr": "اللَّيْلَةُ الْمُبَارَكَةُ فِيهَا يُفَصَّلُ مَا يَكُونُ فِي السَّنَةِ مِنَ الْأَقْدَارِ بِحِكْمَةِ اللَّهِ. فَاللَّيْلَةُ فُرْصَةٌ لِطَلَبِ الْخَيْرِ وَالْعَافِيَةِ وَحُسْنِ الْخَاتِمَةِ.",
    "sharhEs": "En esa noche bendita se detalla con sabiduría lo decretado para el año. Es una oportunidad para pedir bien, bienestar y un buen final.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 24
   },
   {
    "text": "مَنْ يَقُمْ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    "explanationEs": "A quien pase la Noche del Decreto en oración con fe y esperando la recompensa de Allah se le perdonan sus pecados anteriores.",
    "note": "صَحِيحُ الْبُخَارِيِّ (35) · صحيح",
    "noteEs": "Sahih al-Bujari 35 · Sahih",
    "sharhAr": "قِيَامُ لَيْلَةٍ وَاحِدَةٍ بِإِيمَانٍ وَاحْتِسَابٍ سَبَبٌ لِلْمَغْفِرَةِ. وَلِأَنَّ اللَّيْلَةَ مُبْهَمَةٌ فَالْأَحْوَطُ إِحْيَاءُ اللَّيَالِي الْوِتْرِيَّةِ كُلِّهَا، بَلْ لَيَالِي الْعَشْرِ جَمِيعًا.",
    "sharhEs": "Una sola noche vivida con fe y esperanza es causa de perdón. Como su fecha es incierta, lo más prudente es dar vida a todas las noches impares, e incluso a todas las de los últimos diez días.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 25
   },
   {
    "text": "تَحَرَّوْا لَيْلَةَ الْقَدْرِ فِي الْوِتْرِ مِنَ الْعَشْرِ الْأَوَاخِرِ مِنْ رَمَضَانَ",
    "explanationEs": "(Dijo el Profeta ﷺ:) Busquen la Noche del Decreto en las noches impares de los últimos diez días de Ramadán.",
    "note": "صَحِيحُ الْبُخَارِيِّ (2017) · صحيح",
    "noteEs": "Sahih al-Bujari 2017 · Sahih",
    "sharhAr": "خَفَاءُ اللَّيْلَةِ حِكْمَةٌ: لِيَجْتَهِدَ الْعَبْدُ فِي الْعَشْرِ كُلِّهَا. فَاللَّيْلَةُ الْحَادِيَةُ وَالْعِشْرُونَ وَالثَّالِثَةُ وَالْعِشْرُونَ وَالْخَامِسَةُ وَالسَّابِعَةُ وَالتَّاسِعَةُ وَالْعِشْرُونَ أَوْلَى بِالتَّحَرِّي.",
    "sharhEs": "Que la fecha sea oculta es una sabiduría: para que el siervo se esfuerce en toda la decena. Las noches 21, 23, 25, 27 y 29 son las más indicadas para buscarla.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 26
   },
   {
    "text": "قُولِي اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    "explanationEs": "(Aisha preguntó: «Si supiera cuál es la Noche del Decreto, ¿qué diría en ella?». Dijo:) «Di: Allahumma innaka afuwwun karímun tuhibbu l-afwa fa-fu anni (Oh Allah, Tú eres Perdonador, generoso, amas el perdón; perdóname)».",
    "note": "سُنَنُ التِّرْمِذِيِّ (3513) · صَحِيحٌ",
    "noteEs": "Sunan at-Tirmidhi 3513 · Sahih",
    "sharhAr": "أَجْمَلُ مَا يُقَالُ فِي لَيْلَةِ الْقَدْرِ. وَالْعَفْوُ أَعَمُّ مِنَ الْمَغْفِرَةِ: هُوَ مَحْوُ الذَّنْبِ كَأَنْ لَمْ يَكُنْ. فَأَكْثِرْ مِنْهُ فِي سُجُودِكَ وَسَحَرِكَ.",
    "sharhEs": "Lo más hermoso que decir en esa noche. «Afw» (indulgencia) es más amplio que el perdón: borrar el pecado como si nunca hubiera existido. Repítelo en tu postración y al amanecer.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 27
   }
  ]
 },
 {
  "id": "ram_ashr",
  "titleAr": "الْعَشْرُ الْأَوَاخِرُ وَالِاعْتِكَافُ",
  "titleEs": "Los últimos diez días y el itikaf",
  "descAr": "اجْتِهَادٌ يَزِيدُ",
  "descEs": "Un esfuerzo que aumenta",
  "duas": [],
  "items": [
   {
    "text": "كَانَ النَّبِيُّ ﷺ إِذَا دَخَلَ الْعَشْرُ شَدَّ مِئْزَرَهُ، وَأَحْيَا لَيْلَهُ، وَأَيْقَظَ أَهْلَهُ.",
    "explanationEs": "(Aisha dijo:) Cuando entraban los últimos diez días, el Profeta ﷺ se ceñía el ropaje, pasaba la noche en vela y despertaba a su familia.",
    "note": "صَحِيحُ الْبُخَارِيِّ (2024) · صحيح",
    "noteEs": "Sahih al-Bujari 2024 · Sahih",
    "sharhAr": "«شَدَّ مِئْزَرَهُ» كِنَايَةٌ عَنِ الْجِدِّ وَالتَّفَرُّغِ لِلْعِبَادَةِ. وَإِيقَاظُ الْأَهْلِ يُعَلِّمُنَا أَنَّ الْخَيْرَ يُشَارَكُ بِهِ الْقَرِيبُونَ، فَلَا يَقْتَصِرُ الِاجْتِهَادُ عَلَى النَّفْسِ.",
    "sharhEs": "«Ceñirse el ropaje» expresa seriedad y dedicación total a la adoración. Despertar a la familia enseña a compartir el bien con los cercanos, sin limitarse al esfuerzo individual.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 28
   },
   {
    "text": "كَانَ رَسُولُ اللَّهِ ﷺ يَعْتَكِفُ الْعَشْرَ الْأَوَاخِرَ مِنْ رَمَضَانَ.",
    "explanationEs": "(Ibn Umar dijo:) El Mensajero de Allah ﷺ solía hacer itikaf (retiro en la mezquita) los últimos diez días de Ramadán.",
    "note": "صَحِيحُ الْبُخَارِيِّ (2025) · صحيح",
    "noteEs": "Sahih al-Bujari 2025 · Sahih",
    "sharhAr": "الِاعْتِكَافُ سُنَّةٌ مُؤَكَّدَةٌ: لُزُومُ الْمَسْجِدِ بِنِيَّةِ التَّقَرُّبِ، لِلصَّلَاةِ وَالذِّكْرِ وَالْقُرْآنِ، وَقَطْعُ الْعَلَائِقِ لِيَصْفُوَ الْقَلْبُ. وَمَنْ ضَاقَ وَقْتُهُ فَلَهُ اعْتِكَافُ سَاعَاتٍ أَوْ لَيْلَةٍ عِنْدَ مَنْ يُجِيزُ ذَلِكَ.",
    "sharhEs": "El itikaf es una sunna confirmada: permanecer en la mezquita con intención de acercarse a Allah, para rezar, recordarle y leer el Corán, cortando las distracciones para que el corazón se aclare. Quien tiene poco tiempo puede hacer unas horas o una noche, según quienes lo permiten.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 29
   },
   {
    "isInfo": true,
    "text": "كَيْفَ أَسْتَثْمِرُ الْعَشْرَ؟",
    "explanationAr": "• خَصِّصْ لَيَالِيَ الْوِتْرِ لِلْقِيَامِ الطَّوِيلِ وَالدُّعَاءِ، وَأَكْثِرْ مِنْ «اللَّهُمَّ إِنَّكَ عَفُوٌّ…».\n• اجْعَلْ لَكَ خَتْمَةً أَوْ مُرَاجَعَةً لِمَا حَفِظْتَ.\n• تَصَدَّقْ بِمَا تَقْدِرُ، وَأَصْلِحْ ذَاتَ الْبَيْنِ.\n• قَلِّلْ مِنَ الْوَسَائِلِ الْمُشَتِّتَةِ، وَأَوْصِ أَهْلَكَ بِالْمُشَارَكَةِ.\n• لِلْمُعْتَكِفِ: تَرْتِيبُ أُمُورِ الْعَمَلِ وَالْأُسْرَةِ، وَنِيَّةٌ خَالِصَةٌ، وَمَسْجِدٌ تُقَامُ فِيهِ الْجَمَاعَةُ.",
    "explanationEs": "Cómo aprovechar los diez últimos días\n• Reserva las noches impares para una oración larga y para suplicar; repite «Allahumma innaka afuwwun…».\n• Marca una lectura completa del Corán o repasa lo que memorizaste.\n• Da lo que puedas en sadaqa y reconcilia a quienes están enemistados.\n• Reduce las distracciones y anima a tu familia a participar.\n• Si haces itikaf: organiza antes tu trabajo y tu familia, intención sincera y una mezquita donde se haga la oración en congregación."
   }
  ]
 },
 {
  "id": "ram_quran",
  "titleAr": "الْقُرْآنُ فِي رَمَضَانَ",
  "titleEs": "El Corán en Ramadán",
  "descAr": "تِلَاوَةٌ وَتَدَبُّرٌ وَمُدَارَسَةٌ",
  "descEs": "Recitación, reflexión y estudio compartido",
  "duas": [],
  "items": [
   {
    "text": "﴿ أَوۡ زِدۡ عَلَيۡهِ وَرَتِّلِ ٱلۡقُرۡءَانَ تَرۡتِيلًا ﴾",
    "explanationEs": "o un poco más, y recita el Corán claramente y meditando en su significado",
    "note": "سُورَةُ الْمُزَّمِّلِ (73:4)",
    "noteEs": "Sura Al-Muzzammil (73:4)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/073004.mp3"
    ],
    "isAyah": true,
    "sharhAr": "أَمْرٌ بِالتَّرْتِيلِ: الْقِرَاءَةُ الْمُتَأَنِّيَةُ الَّتِي تَفْهَمُ وَتَتَأَمَّلُ، لَا السُّرْعَةُ الَّتِي تُضَيِّعُ الْمَعْنَى. وَالْخَتْمَةُ الْقَصِيرَةُ لَا تَمْنَعُ مِنْ مُرَاجَعَةٍ أَبْطَأَ لِلتَّدَبُّرِ.",
    "sharhEs": "Es una orden de recitar pausadamente, comprendiendo y meditando, no con una prisa que pierde el sentido. Una lectura completa rápida no impide repasar más despacio para reflexionar.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 30
   },
   {
    "text": "﴿ كِتَٰبٌ أَنزَلۡنَٰهُ إِلَيۡكَ مُبَٰرَكࣱ لِّيَدَّبَّرُوٓاْ ءَايَٰتِهِۦ وَلِيَتَذَكَّرَ أُوْلُواْ ٱلۡأَلۡبَٰبِ ﴾",
    "explanationEs": "Este Libro que te revelo [¡oh, Mujámmad!] encierra grandes bendiciones, para que mediten sobre sus signos y reflexionen los dotados de intelecto",
    "note": "سُورَةُ ص (38:29)",
    "noteEs": "Sura Sad (38:29)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/038029.mp3"
    ],
    "isAyah": true,
    "sharhAr": "الْمَقْصُودُ مِنَ الْإِنْزَالِ التَّدَبُّرُ وَالتَّذَكُّرُ، فَالْقُرْآنُ كِتَابُ حَيَاةٍ لَا كِتَابُ بَرَكَةٍ فَقَطْ. وَمَنْ قَرَأَ بِتَدَبُّرٍ ثَبَتَ الْأَثَرُ فِي قَلْبِهِ بَعْدَ رَمَضَانَ.",
    "sharhEs": "El propósito de la revelación es meditar y recordar: el Corán es un libro para vivir, no solo para obtener bendición. Quien lo lee con reflexión conserva su huella en el corazón después de Ramadán.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 31
   },
   {
    "text": "كَانَ رَسُولُ اللَّهِ ﷺ أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ حِينَ يَلْقَاهُ جِبْرِيلُ، وَكَانَ يَلْقَاهُ فِي كُلِّ لَيْلَةٍ مِنْ رَمَضَانَ فَيُدَارِسُهُ الْقُرْآنَ، فَلَرَسُولُ اللَّهِ ﷺ أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ.",
    "explanationEs": "(Ibn Abbás dijo:) El Mensajero de Allah ﷺ era el más generoso de la gente, y era más generoso aún en Ramadán cuando se encontraba con Yibril; Yibril lo encontraba cada noche de Ramadán y repasaban juntos el Corán. Y el Mensajero de Allah ﷺ era más generoso en el bien que el viento enviado.",
    "note": "صَحِيحُ الْبُخَارِيِّ (6) · صحيح",
    "noteEs": "Sahih al-Bujari 6 · Sahih",
    "sharhAr": "جَمَعَ الْحَدِيثُ بَيْنَ الْقُرْآنِ وَالْجُودِ، وَبَيْنَ مُدَارَسَةِ الْوَحْيِ وَسَخَاءِ الْيَدِ. وَمِنْهُ يُسْتَحَبُّ تَدَارُسُ الْقُرْآنِ مَعَ صَاحِبٍ أَوْ حَلْقَةٍ، وَمُرَاجَعَتُهُ فِي لَيَالِي الشَّهْرِ.",
    "sharhEs": "El hadiz une el Corán y la generosidad, el estudio de la revelación y la mano abierta. De él se recomienda estudiar el Corán con un compañero o en un círculo, y repasarlo durante las noches del mes.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 32
   },
   {
    "isInfo": true,
    "text": "خُطَّةُ خَتْمَةٍ فِي الشَّهْرِ",
    "explanationAr": "• الْمُصْحَفُ الْمَدَنِيُّ 604 صَفْحَةً؛ فَلِلْخَتْمَةِ فِي ثَلَاثِينَ يَوْمًا اقْرَأْ جُزْءًا (نَحْوَ 20 صَفْحَةً) كُلَّ يَوْمٍ.\n• بِتَوْزِيعِ الْجُزْءِ عَلَى الصَّلَوَاتِ الْخَمْسِ: أَرْبَعُ صَفَحَاتٍ بَعْدَ كُلِّ صَلَاةٍ.\n• لِخَتْمَتَيْنِ: جُزْءَانِ يَوْمِيًّا؛ وَلِمَنْ يَقْرَأُ تَدَبُّرًا: رُبْعُ جُزْءٍ بِتَمَهُّلٍ خَيْرٌ مِنْ جُزْءٍ بِعَجَلَةٍ.\n• يُمْكِنُ مَتَابَعَةُ ذَلِكَ فِي «مُتَابَعَةِ رَمَضَانَ» أَدْنَاهُ.",
    "explanationEs": "Un plan para completar el Corán en el mes\n• El Mushaf de Medina tiene 604 páginas; para completarlo en 30 días lee un yuz (unas 20 páginas) al día.\n• Repartido en las cinco oraciones: cuatro páginas después de cada una.\n• Para dos lecturas completas: dos yuz al día. Si lees para reflexionar, un cuarto de yuz con calma vale más que uno con prisa.\n• Puedes llevar el control en «Seguimiento de Ramadán», más abajo."
   }
  ]
 },
 {
  "id": "ram_jud",
  "titleAr": "الْجُودُ وَالْإِطْعَامُ",
  "titleEs": "Generosidad y dar de comer",
  "descAr": "صَدَقَةُ رَمَضَانَ وَتَفْطِيرُ الصَّائِمِ",
  "descEs": "La sadaqa de Ramadán y dar de comer al que ayuna",
  "duas": [],
  "items": [
   {
    "text": "﴿ مَّثَلُ ٱلَّذِينَ يُنفِقُونَ أَمۡوَٰلَهُمۡ فِي سَبِيلِ ٱللَّهِ كَمَثَلِ حَبَّةٍ أَنۢبَتَتۡ سَبۡعَ سَنَابِلَ فِي كُلِّ سُنۢبُلَةࣲ مِّاْئَةُ حَبَّةࣲۗ وَٱللَّهُ يُضَٰعِفُ لِمَن يَشَآءُۚ وَٱللَّهُ وَٰسِعٌ عَلِيمٌ ﴾",
    "explanationEs": "El ejemplo de quienes contribuyen con su dinero por la causa de Dios es como el de un grano que produce siete espigas, cada espiga contiene cien granos. Así Dios multiplica [la recompensa] de quien Él quiere. Dios es el Más Generoso, todo lo sabe",
    "note": "سُورَةُ الْبَقَرَةِ (2:261)",
    "noteEs": "Sura Al-Baqara (2:261)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/002261.mp3"
    ],
    "isAyah": true,
    "sharhAr": "صُورَةٌ حَيَّةٌ لِمُضَاعَفَةِ الْأَجْرِ: حَبَّةٌ تُنْبِتُ سَبْعَ سَنَابِلَ، فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ. وَالْإِنْفَاقُ فِي رَمَضَانَ أَعْظَمُ لِأَنَّ الزَّمَانَ يُضَاعِفُ.",
    "sharhEs": "Una imagen viva de la multiplicación de la recompensa: un grano que da siete espigas, con cien granos en cada una. Gastar en Ramadán tiene más valor porque el tiempo mismo multiplica.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 33
   },
   {
    "text": "مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ غَيْرَ أَنَّهُ لَا يَنْقُصُ مِنْ أَجْرِ الصَّائِمِ شَيْئًا",
    "explanationEs": "Quien dé de comer a un ayunante para romper el ayuno obtendrá una recompensa igual a la suya, sin que se reduzca en nada la recompensa del ayunante.",
    "note": "سُنَنُ التِّرْمِذِيِّ (807) · صَحِيحٌ",
    "noteEs": "Sunan at-Tirmidhi 807 · Sahih",
    "sharhAr": "الْأَجْرُ يَحْصُلُ بِتَمْرَةٍ أَوْ شَرْبَةِ مَاءٍ، فَلَا يُشْتَرَطُ وَلِيمَةٌ. وَفِيهِ تَشْجِيعٌ عَلَى الْمُوَاسَاةِ وَاجْتِمَاعِ الْقُلُوبِ، وَالنَّظَرُ إِلَى الْجَارِ وَالْمُحْتَاجِ قَبْلَ الْمَائِدَةِ الْعَامِرَةِ.",
    "sharhEs": "La recompensa se obtiene con un dátil o un trago de agua; no hace falta un banquete. Anima a la solidaridad y a unir los corazones, mirando primero al vecino necesitado antes que a la mesa abundante.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 34
   },
   {
    "isInfo": true,
    "text": "أَفْكَارٌ لِلصَّدَقَةِ",
    "explanationAr": "• مَبْلَغٌ يَوْمِيٌّ ثَابِتٌ وَلَوْ صَغِيرًا فِي صُنْدُوقٍ لِلصَّدَقَةِ.\n• تَفْطِيرُ جَارٍ أَوْ طَالِبٍ أَوْ عَامِلٍ أَوْ مَرِيضٍ.\n• سَدَادُ دَيْنِ مُعْسِرٍ، أَوْ كَفَالَةُ يَتِيمٍ.\n• صَدَقَةٌ جَارِيَةٌ: بِئْرٌ، أَوْ مُصْحَفٌ، أَوْ مُسَاهَمَةٌ فِي مَسْجِدٍ.\n• اجْعَلِ الصَّدَقَةَ مِنْ طَيِّبِ مَالِكَ، وَاخْتَرِ الْمُسْتَحِقَّ الثِّقَةَ أَوْ جَمْعِيَّةً مَوْثُوقَةً.",
    "explanationEs": "Ideas concretas para dar\n• Una cantidad diaria fija, aunque sea pequeña, en una hucha de sadaqa.\n• Dar de comer a un vecino, estudiante, trabajador o enfermo.\n• Saldar la deuda de un necesitado o apadrinar a un huérfano.\n• Sadaqa continua: un pozo, un ejemplar del Corán o contribuir a una mezquita.\n• Da de lo lícito y elige a un beneficiario o una entidad de confianza."
   }
  ]
 },
 {
  "id": "ram_fitr",
  "titleAr": "زَكَاةُ الْفِطْرِ",
  "titleEs": "Zakat al-Fitr",
  "descAr": "طُهْرَةٌ لِلصَّائِمِ وَطُعْمَةٌ لِلْمَسَاكِينِ",
  "descEs": "Purificación del que ayuna y sustento de los pobres",
  "duas": [],
  "items": [
   {
    "text": "فَرَضَ رَسُولُ اللَّهِ ﷺ زَكَاةَ الْفِطْرِ صَاعًا مِنْ تَمْرٍ، أَوْ صَاعًا مِنْ شَعِيرٍ عَلَى الْعَبْدِ وَالْحُرِّ، وَالذَّكَرِ وَالْأُنْثَى، وَالصَّغِيرِ وَالْكَبِيرِ مِنَ الْمُسْلِمِينَ، وَأَمَرَ بِهَا أَنْ تُؤَدَّى قَبْلَ خُرُوجِ النَّاسِ إِلَى الصَّلَاةِ.",
    "explanationEs": "(Ibn Umar dijo:) El Mensajero de Allah ﷺ prescribió el zakat al-fitr: un sa de dátiles o un sa de cebada, sobre el esclavo y el libre, el hombre y la mujer, el pequeño y el mayor de los musulmanes; y ordenó que se entregue antes de que la gente salga a la oración.",
    "note": "صَحِيحُ الْبُخَارِيِّ (1503) · صحيح",
    "noteEs": "Sahih al-Bujari 1503 · Sahih",
    "sharhAr": "الْعِلَّةُ مَذْكُورَةٌ فِي حَدِيثٍ آخَرَ: طُهْرَةٌ لِلصَّائِمِ مِنَ اللَّغْوِ وَالرَّفَثِ، وَطُعْمَةٌ لِلْمَسَاكِينِ. وَهِيَ عَلَى كُلِّ فَرْدٍ يَمْلِكُ فَضْلًا عَنْ قُوتِ يَوْمِهِ، يُخْرِجُهَا عَنْ نَفْسِهِ وَمَنْ يَعُولُ. وَالْأَفْضَلُ إِخْرَاجُهَا قَبْلَ صَلَاةِ الْعِيدِ، وَيَجُوزُ تَقْدِيمُهَا بِيَوْمٍ أَوْ يَوْمَيْنِ (يُنْظَرُ الْبُخَارِيُّ 1511).",
    "sharhEs": "La razón se indica en otro hadiz: purificar al que ayuna de la futilidad y la obscenidad y alimentar a los pobres. Obliga a quien tiene un excedente sobre su sustento del día; la paga por sí mismo y por sus dependientes. Lo mejor es entregarla antes de la oración de Eid y se permite adelantarla uno o dos días (ver al-Bujari 1511).",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 35
   },
   {
    "isInfo": true,
    "text": "الْمِقْدَارُ وَوَقْتُهَا",
    "explanationAr": "• الْمِقْدَارُ: صَاعٌ مِنْ قُوتِ الْبَلَدِ (نَحْوُ 2.5 إِلَى 3 كِيلُوغْرَامَاتٍ تَقْرِيبًا بِحَسَبِ نَوْعِ الطَّعَامِ).\n• يُجِيزُ كَثِيرٌ مِنَ الْفُقَهَاءِ إِخْرَاجَهَا طَعَامًا، وَبَعْضُهُمْ يُجِيزُ الْقِيمَةَ؛ فَاتَّبِعْ مَا يُفْتِي بِهِ عُلَمَاءُ بَلَدِكَ.\n• تَجِبُ بِغُرُوبِ شَمْسِ آخِرِ يَوْمٍ، وَتُؤَدَّى قَبْلَ صَلَاةِ الْعِيدِ؛ وَمَنْ أَخَّرَهَا بَعْدَهَا فَهِيَ صَدَقَةٌ مِنَ الصَّدَقَاتِ وَعَلَيْهِ إِثْمُ التَّأْخِيرِ بِلَا عُذْرٍ.",
    "explanationEs": "Cantidad y momento\n• Cantidad: un sa de la comida básica del lugar (aproximadamente entre 2,5 y 3 kg, según el alimento).\n• Muchos juristas exigen darla en alimento y algunos permiten su valor en dinero; sigue lo que dicen los sabios de tu lugar.\n• Se hace obligatoria con la puesta del sol del último día; se entrega antes de la oración de Eid. Si se retrasa hasta después de la oración, cuenta como una sadaqa común y se incurre en falta si no hubo excusa."
   }
  ]
 },
 {
  "id": "ram_eid",
  "titleAr": "الْعِيدُ وَسِتٌّ مِنْ شَوَّالٍ",
  "titleEs": "El Eid y los seis días de Shawwal",
  "descAr": "تَكْبِيرٌ وَشُكْرٌ وَدَوَامُ الطَّاعَةِ",
  "descEs": "Takbir, gratitud y constancia en la obediencia",
  "duas": [],
  "items": [
   {
    "text": "كَانَ رَسُولُ اللَّهِ ﷺ لَا يَغْدُو يَوْمَ الْفِطْرِ حَتَّى يَأْكُلَ تَمَرَاتٍ",
    "explanationEs": "(Anas dijo:) El Profeta ﷺ no salía el día del Fitr hasta haber comido unos dátiles (en otra transmisión se añade que los comía en número impar).",
    "note": "صَحِيحُ الْبُخَارِيِّ (953) · صحيح",
    "noteEs": "Sahih al-Bujari 953 · Sahih",
    "sharhAr": "سُنَّةُ عِيدِ الْفِطْرِ أَنْ يَأْكُلَ قَبْلَ الصَّلَاةِ لِيُبَيِّنَ أَنَّ الصَّوْمَ قَدِ انْتَهَى. وَالْوِتْرُ فِي عَدَدِ التَّمَرَاتِ: ثَلَاثٌ أَوْ خَمْسٌ أَوْ سَبْعٌ.",
    "sharhEs": "La sunna del Eid al-Fitr es comer algo antes de la oración para señalar que el ayuno terminó. Los dátiles se comen en número impar: tres, cinco o siete.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 36
   },
   {
    "text": "مَنْ صَامَ رَمَضَانَ ثُمَّ أَتْبَعَهُ سِتًّا مِنْ شَوَّالٍ كَانَ كَصِيَامِ الدَّهْرِ",
    "explanationEs": "Quien ayune Ramadán y le siga con seis días de Shawwal es como quien ayuna toda la vida.",
    "note": "صَحِيحُ مُسْلِمٍ (1164) · صحيح",
    "noteEs": "Sahih Muslim 1164 · Sahih",
    "sharhAr": "الْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا: شَهْرٌ بِعَشَرَةِ أَشْهُرٍ، وَسِتَّةُ أَيَّامٍ بِشَهْرَيْنِ، فَالْمَجْمُوعُ سَنَةٌ. وَالسِّتَّةُ تُصَامُ مُتَتَابِعَةً أَوْ مُتَفَرِّقَةً فِي شَوَّالٍ، وَتَدُلُّ عَلَى مُدَاوَمَةِ الطَّاعَةِ بَعْدَ الشَّهْرِ.",
    "sharhEs": "Cada buena obra se multiplica por diez: un mes equivale a diez meses y seis días a dos, es decir, un año. Los seis días se ayunan seguidos o separados dentro de Shawwal, y muestran continuidad en la obediencia después de Ramadán.",
    "sharhLabAr": "شَرْحُ الْحَدِيثِ",
    "sharhLabEs": "Explicación del hadiz",
    "itemNumber": 37
   },
   {
    "isInfo": true,
    "text": "أَدَبُ الْعِيدِ",
    "explanationAr": "• التَّكْبِيرُ مِنْ غُرُوبِ آخِرِ لَيْلَةٍ حَتَّى صَلَاةِ الْعِيدِ، وَمِنْ صِيَغِهِ الْمَشْهُورَةِ: «اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ».\n• الِاغْتِسَالُ وَالتَّطَيُّبُ وَلُبْسُ أَحْسَنِ الثِّيَابِ، وَالْخُرُوجُ إِلَى الْمُصَلَّى وَيُسْتَحَبُّ مُخَالَفَةُ الطَّرِيقِ.\n• التَّهْنِئَةُ بِقَوْلِ: «تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ»، وَقَدْ وَرَدَ نَحْوُهُ عَنِ الصَّحَابَةِ.\n• صِلَةُ الرَّحِمِ وَإِدْخَالُ السُّرُورِ عَلَى الْأَيْتَامِ وَالْمَحْرُومِينَ، وَالْحَذَرُ مِنَ الْإِسْرَافِ وَالْمَعَاصِي.",
    "explanationEs": "Etiqueta del Eid\n• Takbir desde la puesta del sol de la última noche hasta la oración del Eid; una fórmula conocida: «Allahu akbar, Allahu akbar, la ilaha illa Allah, wa Allahu akbar, Allahu akbar wa lillahi l-hamd».\n• Baño completo, perfume y la mejor ropa; salir al lugar de oración, y se recomienda volver por otro camino.\n• Felicitar con «Taqabbala Allahu minna wa minkum» (Allah acepte de nosotros y de ustedes), frase transmitida de los compañeros.\n• Visitar a los parientes y alegrar a huérfanos y necesitados; evitar el derroche y los pecados."
   }
  ]
 },
 {
  "id": "ram_duas",
  "titleAr": "أَدْعِيَةٌ لِرَمَضَانَ",
  "titleEs": "Súplicas para Ramadán",
  "descAr": "اللَّهُ قَرِيبٌ يُجِيبُ",
  "descEs": "Allah está cerca y responde",
  "duas": [],
  "items": [
   {
    "text": "﴿ وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌۖ أُجِيبُ دَعۡوَةَ ٱلدَّاعِ إِذَا دَعَانِۖ فَلۡيَسۡتَجِيبُواْ لِي وَلۡيُؤۡمِنُواْ بِي لَعَلَّهُمۡ يَرۡشُدُونَ ﴾",
    "explanationEs": "Y si Mis siervos te preguntan por Mí [¡oh, Mujámmad!, diles] que estoy cerca de ellos. Respondo la súplica de quien Me invoca. [Entonces] que me obedezcan y crean en Mí, que así se encaminarán",
    "note": "سُورَةُ الْبَقَرَةِ (2:186)",
    "noteEs": "Sura Al-Baqara (2:186)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/002186.mp3"
    ],
    "isAyah": true,
    "sharhAr": "الْآيَةُ جَاءَتْ فِي وَسَطِ آيَاتِ الصِّيَامِ لِتَقُولَ إِنَّ الصَّائِمَ قَرِيبٌ مِنْ رَبِّهِ. وَجَوَابُ السُّؤَالِ بِلَا «قُلْ» يَدُلُّ عَلَى شِدَّةِ الْقُرْبِ: لَا وَاسِطَةَ بَيْنَ الْعَبْدِ وَرَبِّهِ.",
    "sharhEs": "La aleya aparece en medio de las del ayuno para decir que quien ayuna está cerca de su Señor. Que la respuesta no lleve «di» indica la proximidad: no hay intermediario entre el siervo y su Señor.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 38
   },
   {
    "text": "﴿ وَإِذۡ يَرۡفَعُ إِبۡرَٰهِـۧمُ ٱلۡقَوَاعِدَ مِنَ ٱلۡبَيۡتِ وَإِسۡمَٰعِيلُ رَبَّنَا تَقَبَّلۡ مِنَّآۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلۡعَلِيمُ ﴾",
    "explanationEs": "Y [recuerden] cuando Abraham e Ismael levantaron los cimientos de La Casa, dijeron: \"¡Oh, Señor! Acepta nuestra obra. Tú eres el que todo lo oye, todo lo sabe",
    "note": "سُورَةُ الْبَقَرَةِ (2:127)",
    "noteEs": "Sura Al-Baqara (2:127)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/002127.mp3"
    ],
    "isAyah": true,
    "sharhAr": "دُعَاءُ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَهُمَا يَبْنِيَانِ الْبَيْتَ: عَمَلٌ كَبِيرٌ ثُمَّ خَوْفٌ مِنْ عَدَمِ الْقَبُولِ. فَهَكَذَا يَصْنَعُ الْمُؤْمِنُ فِي نِهَايَةِ رَمَضَانَ: يَجْتَهِدُ ثُمَّ يَسْأَلُ الْقَبُولَ.",
    "sharhEs": "Súplica de Ibrahim e Ismail mientras levantaban la Casa: una gran obra y luego el temor de que no sea aceptada. Así hace el creyente al final de Ramadán: se esfuerza y después pide aceptación.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 39
   },
   {
    "text": "﴿ وَمِنۡهُم مَّن يَقُولُ رَبَّنَآ ءَاتِنَا فِي ٱلدُّنۡيَا حَسَنَةࣰ وَفِي ٱلۡأٓخِرَةِ حَسَنَةࣰ وَقِنَا عَذَابَ ٱلنَّارِ ﴾",
    "explanationEs": "Pero entre ellos hay quienes dicen: \"¡Señor nuestro! Danos bienestar en esta vida y en la otra, y presérvanos del tormento del Fuego",
    "note": "سُورَةُ الْبَقَرَةِ (2:201)",
    "noteEs": "Sura Al-Baqara (2:201)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/002201.mp3"
    ],
    "isAyah": true,
    "sharhAr": "أَجْمَعُ دُعَاءٍ لِلدُّنْيَا وَالْآخِرَةِ، وَكَانَ النَّبِيُّ ﷺ يُكْثِرُ مِنْهُ. تُنَاسِبُ كُلَّ مَقَامٍ وَكُلَّ حَاجَةٍ.",
    "sharhEs": "La súplica más completa para este mundo y el otro; el Profeta ﷺ la repetía mucho. Sirve para cualquier situación y necesidad.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 40
   },
   {
    "text": "﴿ رَّبَّنَآ إِنَّنَا سَمِعۡنَا مُنَادِيࣰا يُنَادِي لِلۡإِيمَٰنِ أَنۡ ءَامِنُواْ بِرَبِّكُمۡ فَـَٔامَنَّاۚ رَبَّنَا فَٱغۡفِرۡ لَنَا ذُنُوبَنَا وَكَفِّرۡ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلۡأَبۡرَارِ ﴾",
    "explanationEs": "¡Señor nuestro! Hemos oído a quien convocaba a la fe, diciendo: ‘Crean en su Señor’, y creímos. ¡Señor nuestro! Perdona nuestros pecados, borra nuestras malas acciones y, al morir, reúnenos con los piadosos",
    "note": "سُورَةُ آلِ عِمْرَانَ (3:193)",
    "noteEs": "Sura Aal Imran (3:193)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/003193.mp3"
    ],
    "isAyah": true,
    "sharhAr": "سُؤَالُ الْمَغْفِرَةِ وَتَكْفِيرِ السَّيِّئَاتِ وَحُسْنِ الْخَاتِمَةِ مَعَ الْأَبْرَارِ. يَنْبَغِي أَنْ يَسْأَلَهُ الصَّائِمُ فِي سَحَرِهِ.",
    "sharhEs": "Pide perdón, que se borren las faltas y un buen final con los justos. Conviene que el que ayuna lo pida en la hora previa al alba.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 41
   },
   {
    "text": "﴿ قَالَا رَبَّنَا ظَلَمۡنَآ أَنفُسَنَا وَإِن لَّمۡ تَغۡفِرۡ لَنَا وَتَرۡحَمۡنَا لَنَكُونَنَّ مِنَ ٱلۡخَٰسِرِينَ ﴾",
    "explanationEs": "Ellos dijeron [arrepentidos]: \"¡Señor nuestro! Hemos sido injustos con nosotros mismos; si no nos perdonas y nos tienes misericordia, seremos de los perdidos",
    "note": "سُورَةُ الْأَعْرَافِ (7:23)",
    "noteEs": "Sura Al-Araf (7:23)",
    "audioUrls": [
     "https://everyayah.com/data/Alafasy_128kbps/007023.mp3"
    ],
    "isAyah": true,
    "sharhAr": "دُعَاءُ آدَمَ وَحَوَّاءَ بَعْدَ الْخَطِيئَةِ: اعْتِرَافٌ بِالظُّلْمِ وَطَلَبٌ لِلْمَغْفِرَةِ، وَهُوَ بَابُ التَّوْبَةِ. وَالتَّوْبَةُ مِنْ أَجَلِّ مَا يَنْبَغِي فِي رَمَضَانَ.",
    "sharhEs": "Súplica de Adán y Hawwa tras su falta: reconocer el error y pedir perdón, la puerta del arrepentimiento. Arrepentirse es de lo más valioso que hacer en Ramadán.",
    "sharhLabAr": "هِدَايَاتُ الْآيَةِ",
    "sharhLabEs": "Lecciones de la aleya",
    "itemNumber": 42
   }
  ]
 },
 {
  "id": "ram_faq",
  "titleAr": "أَسْئِلَةٌ شَائِعَةٌ",
  "titleEs": "Preguntas frecuentes",
  "descAr": "بِإِيجَازٍ وَتَحَرٍّ",
  "descEs": "Respuestas breves y prudentes",
  "duas": [],
  "items": [
   {
    "isInfo": true,
    "text": "هَلْ يُفْطِرُ الْمُسْتَاكُ وَمَنْ ابْتَلَعَ رِيقَهُ؟",
    "explanationAr": "• السِّوَاكُ سُنَّةٌ فِي كُلِّ وَقْتٍ، وَالنَّبِيُّ ﷺ قَالَ: «لَوْلَا أَنْ أَشُقَّ عَلَى أُمَّتِي لَأَمَرْتُهُمْ بِالسِّوَاكِ» (الْبُخَارِيُّ 7240).\n• اسْتِعْمَالُ مَعْجُونِ الْأَسْنَانِ مَعَ الْحَذَرِ مِنْ ابْتِلَاعِ شَيْءٍ جَائِزٌ عِنْدَ الْجُمْهُورِ، وَبَعْضُهُمْ يَكْرَهُهُ.\n• ابْتِلَاعُ الرِّيقِ الْمُعْتَادِ لَا يُفْسِدُ الصَّوْمَ.\n• الْمَضْمَضَةُ وَالِاسْتِنْشَاقُ جَائِزَانِ مَعَ تَجَنُّبِ الْمُبَالَغَةِ.",
    "explanationEs": "Siwak, cepillado y saliva\n• El siwak es sunna en todo momento; el Profeta ﷺ dijo: «Si no fuera por la carga que supondría para mi comunidad, les habría ordenado el siwak» (al-Bujari 7240).\n• Usar pasta dental con cuidado de no tragar es admitido por la mayoría; algunos lo desaconsejan.\n• Tragar la saliva habitual no rompe el ayuno.\n• Enjuagarse y aspirar agua es lícito, evitando exagerar."
   },
   {
    "isInfo": true,
    "text": "الْمَرِيضُ وَالْمُسَافِرُ وَالْحَائِضُ",
    "explanationAr": "• الْمَرِيضُ الَّذِي يَشُقُّ عَلَيْهِ الصَّوْمُ أَوْ يَضُرُّهُ يُفْطِرُ وَيَقْضِي (الْبَقَرَةِ 184).\n• الْمُسَافِرُ لَهُ الْفِطْرُ وَالصَّوْمُ، وَيَخْتَارُ الْأَيْسَرَ.\n• الْحَائِضُ وَالنُّفَسَاءُ لَا تَصُومَانِ وَتَقْضِيَانِ الصَّوْمَ دُونَ الصَّلَاةِ.\n• الْحَامِلُ وَالْمُرْضِعُ إِنْ خَافَتَا عَلَى نَفْسَيْهِمَا أَوْ وَلَدَيْهِمَا أَفْطَرَتَا، وَفِي الْقَضَاءِ وَالْفِدْيَةِ تَفْصِيلٌ؛ فَاسْتَفْتِ أَهْلَ الْعِلْمِ.",
    "explanationEs": "Enfermos, viajeros y menstruación\n• El enfermo al que el ayuno le perjudica o le resulta penoso rompe el ayuno y lo recupera (Corán 2:184).\n• El viajero puede ayunar o no; elige lo más fácil.\n• La mujer con menstruación o posparto no ayuna y recupera los días, pero no las oraciones.\n• Embarazadas y lactantes que temen por sí mismas o por su bebé pueden romper el ayuno; hay detalle sobre si recuperar o dar fidya, así que consulta a un sabio."
   },
   {
    "isInfo": true,
    "text": "مَنْ فَاتَهُ رَمَضَانُ بِعُذْرٍ",
    "explanationAr": "• الْقَضَاءُ عَلَى التَّرَاخِي إِلَى شَعْبَانَ التَّالِي، وَالتَّعْجِيلُ أَفْضَلُ.\n• لَا يُشْتَرَطُ التَّتَابُعُ فِي الْقَضَاءِ.\n• مَنْ مَاتَ وَعَلَيْهِ صَوْمٌ لِعُذْرٍ لَمْ يَتَمَكَّنْ مِنْ قَضَائِهِ فَلَا إِثْمَ عَلَيْهِ.",
    "explanationEs": "Recuperar días pendientes\n• Se pueden recuperar hasta el siguiente Shaabán, aunque es mejor hacerlo pronto.\n• No hace falta que sean días seguidos.\n• Quien muere con días pendientes por una excusa que le impidió recuperarlos, no tiene falta."
   }
  ]
 },
 {
  "id": "ram_tracker",
  "titleAr": "مُتَابَعَةُ رَمَضَانَ",
  "titleEs": "Seguimiento de Ramadán",
  "descAr": "صِيَامُكَ وَقِيَامُكَ وَوِرْدُكَ وَصَدَقَتُكَ",
  "descEs": "Tu ayuno, tu oración, tu Corán y tu sadaqa, día a día",
  "duas": [],
  "items": [
   {
    "isInfo": true,
    "text": "مُتَابَعَةُ رَمَضَانَ",
    "explanationAr": "• عَلِّمْ كُلَّ يَوْمٍ مَا أَنْجَزْتَهُ: الصِّيَامَ وَالْقِيَامَ وَوِرْدَ الْقُرْآنِ وَالصَّدَقَةَ وَالْأَذْكَارَ.\n• الْبَيَانَاتُ تُحْفَظُ فِي جِهَازِكَ فَقَطْ.\n• التَّقْوِيمُ الْمَعْرُوضُ هُوَ التَّقْوِيمُ الْهِجْرِيُّ (أُمُّ الْقُرَى)، وَقَدْ يَخْتَلِفُ عَنْ إِعْلَانِ بَلَدِكَ بِيَوْمٍ.",
    "explanationEs": "Seguimiento de Ramadán\n• Marca cada día lo que lograste: ayuno, oración nocturna, Corán, sadaqa y adhkar.\n• Los datos se guardan solo en tu dispositivo.\n• La fecha mostrada usa el calendario hijri (Umm al-Qura) y puede diferir un día del anuncio oficial de tu país."
   }
  ]
 }
];
const RAM_LABELS = {"1": "ay", "2": "ay", "3": "hd", "4": "hd", "5": "hd", "6": "hd", "7": "hd", "8": "hd", "9": "ay", "10": "ay", "11": "hd", "12": "hd", "13": "hd", "14": "hd", "15": "hd", "16": "hd", "17": "hd", "18": "hd", "19": "hd", "20": "hd", "21": "hd", "22": "hd", "23": "ay", "24": "ay", "25": "hd", "26": "hd", "27": "hd", "28": "hd", "29": "hd", "30": "ay", "31": "ay", "32": "hd", "33": "ay", "34": "hd", "35": "hd", "36": "hd", "37": "hd", "38": "ay", "39": "ay", "40": "ay", "41": "ay", "42": "ay"};

(function (global) {
  const groups = ramadanData;
  function adminOk() { return typeof isRamadanVisible === 'function' && isRamadanVisible(); }
  function isEs() { return typeof currentLang !== 'undefined' && currentLang === 'es'; }
  function mk(tag, text, css) { var e = document.createElement(tag); if (text != null) e.textContent = text; if (css) e.style.cssText = css; return e; }
  const sectionModule = {
    id: 'ramadan',
    getGroups: function () { return groups; },
    findGroup: function (groupId) { return groups.find(function (g) { return g.id === groupId; }) || null; },
    getTitle: function () { return isEs() ? 'Ramadán' : 'رَمَضَانُ'; },
    isDevotional: true,
    isQuranItem: function (item) { return !!(item && item.isAyah); },
    getCountUnit: function (es) { return es ? 'elementos' : 'عناصر'; },
    getItemLabel: function (es, n) {
      var k = RAM_LABELS[n];
      var ar = { ay: 'آية', hd: 'حديث' }, esl = { ay: 'Aya', hd: 'Hadiz' };
      return es ? (esl[k] || 'Elemento') : (ar[k] || 'عنصر');
    },
    open: function (skipPushState) { if (!adminOk()) return; if (typeof global.showSection === 'function') global.showSection('ramadan', !!skipPushState); }
  };
  global.ZadSectionModules = global.ZadSectionModules || {};
  global.ZadSectionModules['ramadan'] = sectionModule;
  global.openRamadanSection = function (s) { sectionModule.open(!!s); };

  /* ───────── Calendario hijri (Umm al-Qura) ───────── */
  function hijri(d) {
    try {
      var p = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', { day: 'numeric', month: 'numeric', year: 'numeric' }).formatToParts(d), o = {};
      p.forEach(function (x) { o[x.type] = parseInt(x.value, 10); });
      return o.day ? o : null;
    } catch (e) { return null; }
  }
  function ramadanInfo() {
    var now = new Date(), h = hijri(now);
    if (!h) return null;
    if (h.month === 9) return { inside: true, day: h.day, year: h.year };
    for (var i = 1; i < 400; i++) {
      var d = new Date(now.getTime() + i * 86400000), x = hijri(d);
      if (x && x.month === 9 && x.day === 1) return { inside: false, left: i, year: x.year };
    }
    return null;
  }

  /* ───────── Seguimiento ───────── */
  var KEY = 'zad_ramadan_v1';
  var COLS = [
    { k: 's', ar: 'صِيَام', es: 'Ayuno' }, { k: 't', ar: 'قِيَام', es: 'Tarawih' }, { k: 'q', ar: 'وِرْد', es: 'Corán' }, { k: 'd', ar: 'صَدَقَة', es: 'Sadaqa' }, { k: 'a', ar: 'أَذْكَار', es: 'Adhkar' }
  ];
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }

  function renderTracker(box) {
    var old = box.querySelector('.ram-track'); if (old) old.remove();
    var es = isEs(), info = ramadanInfo(), yr = info ? info.year : 'x', data = load(), cur = data[yr] || (data[yr] = {});
    var wrap = mk('div', null, 'margin-top:.8rem;display:flex;flex-direction:column;gap:.7rem'); wrap.className = 'ram-track';
    var head = mk('div', null, 'padding:1rem;border-radius:1rem;border:1px solid rgba(251,191,36,.45);background:rgba(251,191,36,.08);text-align:center;font-weight:800;line-height:1.7');
    if (info && info.inside) head.textContent = es ? ('Hoy es el día ' + info.day + ' de Ramadán de ' + info.year + ' H') : ('الْيَوْمُ ' + info.day + ' مِنْ رَمَضَانَ ' + info.year + ' هـ');
    else if (info) head.textContent = es ? ('Faltan unos ' + info.left + ' días para Ramadán ' + info.year + ' H (según el calendario Umm al-Qura; depende de la luna)') : ('بَقِيَ نَحْوُ ' + info.left + ' يَوْمًا عَلَى رَمَضَانَ ' + info.year + ' هـ (بِحَسَبِ التَّقْوِيمِ، وَالْعِبْرَةُ بِالرُّؤْيَةِ)');
    else head.textContent = es ? 'Seguimiento de Ramadán' : 'مُتَابَعَةُ رَمَضَانَ';
    wrap.appendChild(head);

    var tot = {}; COLS.forEach(function (c) { tot[c.k] = 0; });
    Object.keys(cur).forEach(function (d) { COLS.forEach(function (c) { if (cur[d][c.k]) tot[c.k]++; }); });
    var sum = mk('div', null, 'display:grid;grid-template-columns:repeat(5,1fr);gap:.4rem');
    COLS.forEach(function (c) {
      var b = mk('div', null, 'padding:.5rem .2rem;border-radius:.8rem;background:rgba(5,150,105,.12);border:1px solid rgba(52,211,153,.3);text-align:center;font-size:.72rem;font-weight:700');
      b.appendChild(mk('div', tot[c.k] + '/30', 'font-size:1.05rem;font-weight:800'));
      b.appendChild(mk('div', es ? c.es : c.ar));
      sum.appendChild(b);
    });
    wrap.appendChild(sum);

    var grid = mk('div', null, 'display:flex;flex-direction:column;gap:.35rem');
    var hd = mk('div', null, 'display:grid;grid-template-columns:2.4rem repeat(5,1fr);gap:.3rem;font-size:.7rem;font-weight:800;text-align:center;opacity:.8');
    hd.appendChild(mk('div', es ? 'Día' : 'يَوْم')); COLS.forEach(function (c) { hd.appendChild(mk('div', es ? c.es : c.ar)); });
    grid.appendChild(hd);
    for (var day = 1; day <= 30; day++) (function (day) {
      var isToday = info && info.inside && info.day === day;
      var row = mk('div', null, 'display:grid;grid-template-columns:2.4rem repeat(5,1fr);gap:.3rem;align-items:center;padding:.2rem;border-radius:.7rem;' + (isToday ? 'background:rgba(251,191,36,.18);box-shadow:0 0 0 2px #fbbf24 inset' : ''));
      row.appendChild(mk('div', String(day), 'text-align:center;font-weight:800'));
      COLS.forEach(function (c) {
        var on = !!(cur[day] && cur[day][c.k]);
        var b = mk('button', on ? '✓' : '', 'height:2rem;border-radius:.6rem;border:1px solid rgba(52,211,153,.4);font-weight:800;cursor:pointer;font-family:inherit;color:#fff;background:' + (on ? 'linear-gradient(135deg,#059669,#115e59)' : 'transparent'));
        b.type = 'button'; b.setAttribute('aria-label', (es ? c.es : c.ar) + ' ' + day);
        b.onclick = function () {
          var all = load(), y = all[yr] || (all[yr] = {}), r = y[day] || (y[day] = {});
          if (r[c.k]) delete r[c.k]; else r[c.k] = 1;
          if (!Object.keys(r).length) delete y[day];
          save(all); renderTracker(box);
        };
        row.appendChild(b);
      });
      grid.appendChild(row);
    })(day);
    wrap.appendChild(grid);

    var rs = mk('button', es ? 'Reiniciar este seguimiento' : 'مَسْحُ الْمُتَابَعَةِ', 'margin-top:.4rem;padding:.7rem;border-radius:.9rem;border:1px solid rgba(248,113,113,.5);background:transparent;color:#f87171;font-weight:700;cursor:pointer;font-family:inherit');
    rs.type = 'button';
    rs.onclick = function () {
      if (!confirm(es ? '¿Borrar todo el seguimiento de este Ramadán?' : 'هَلْ تَمْسَحُ مُتَابَعَةَ هَذَا الشَّهْرِ؟')) return;
      var all = load(); delete all[yr]; save(all); renderTracker(box);
    };
    wrap.appendChild(rs);
    box.appendChild(wrap);
  }

  var orig = global.renderGroupItems;
  if (typeof orig === 'function') {
    global.renderGroupItems = function () {
      var r = orig.apply(this, arguments);
      try {
        var cg = (typeof currentGroup !== 'undefined') ? currentGroup : null;
        var box = document.getElementById('itemsContainer');
        if (!box || !cg || typeof currentSection === 'undefined' || currentSection !== 'ramadan') return r;
        Array.prototype.forEach.call(box.querySelectorAll('[id^="zikr-card-"]'), function (c) {
          var h = c.firstElementChild;
          if (h && h.classList.contains('justify-between')) { h.style.flexDirection = 'column'; h.style.alignItems = 'center'; h.style.justifyContent = 'center'; h.style.gap = '.45rem'; h.style.textAlign = 'center'; }
          if (c.querySelector('.ram-sharh')) return;
          var ix = parseInt(c.id.replace('zikr-card-', ''), 10), it = cg.items[ix];
          if (!it || !it.sharhAr) return;
          var esx = isEs(), d = document.createElement('details');
          d.className = 'ram-sharh'; d.setAttribute('data-no-share', '');
          d.style.cssText = 'border:1px solid rgba(5,150,105,.35);border-radius:1rem;background:rgba(5,150,105,.07);padding:.2rem .9rem';
          d.appendChild(mk('summary', esx ? it.sharhLabEs : it.sharhLabAr, 'cursor:pointer;font-weight:800;padding:.65rem 0;text-align:center;list-style:none'));
          var p = mk('div', esx ? it.sharhEs : it.sharhAr, 'line-height:1.9;padding:.2rem 0 .8rem;text-align:' + (esx ? 'left' : 'center') + ';font-size:' + (esx ? '.95rem' : '1.08rem'));
          p.setAttribute('dir', esx ? 'ltr' : 'rtl'); d.appendChild(p);
          var anchor = c.querySelector('[data-no-share]');
          if (anchor) c.insertBefore(d, anchor); else c.appendChild(d);
        });
        if (cg.id === 'ram_tracker') renderTracker(box);
        var old = box.querySelector('.ram-next'); if (old) old.remove();
        var i = groups.indexOf(cg), nx = groups[i + 1];
        if (nx) {
          var nb = mk('button', (isEs() ? 'Siguiente: ' : 'التَّالِي: ') + (isEs() ? nx.titleEs : nx.titleAr), 'width:100%;margin-top:.8rem;padding:.95rem;border-radius:1rem;border:0;background:linear-gradient(135deg,#0284c7,#0c4a6e);color:#fff;font-weight:800;cursor:pointer;font-family:inherit');
          nb.type = 'button'; nb.className = 'ram-next';
          nb.onclick = function () { global.openGroup(nx.id, false, 'ramadan'); window.scrollTo({ top: 0, behavior: 'instant' }); };
          box.appendChild(nb);
        }
      } catch (e) {}
      return r;
    };
  }
})(window);
