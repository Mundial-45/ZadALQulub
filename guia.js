// guia.js — datos de la sección (se pueden editar desde la app con el botón Editar).
    const guiaData = [
      {
        "id": "guia_intro",
        "titleAr": "مُقَدِّمَةُ الدَّلِيلِ",
        "titleEs": "Introducción",
        "items": [
          {
            "isInfo": true,
            "text": "دَلِيلُ الطَّهَارَةِ وَالصَّلَاةِ عَلَى الْمَذْهَبِ الْمَالِكِيِّ",
            "titleEs": "Guía de la purificación y la oración (escuela malikí)",
            "explanationAr": "• هَذَا الدَّلِيلُ مُخْتَصَرٌ مُيَسَّرٌ لِمَنْ يُرِيدُ أَنْ يَتَعَلَّمَ الطَّهَارَةَ وَالصَّلَاةَ، وَلَا سِيَّمَا مَنْ دَخَلَ فِي الْإِسْلَامِ حَدِيثًا.\n• اعْتَمَدْنَا فِيهِ الْمَشْهُورَ مِنْ مَذْهَبِ الْإِمَامِ مَالِكِ بْنِ أَنَسٍ رَحِمَهُ اللَّهُ، وَهُوَ مَذْهَبُ أَهْلِ الْمَغْرِبِ وَالْأَنْدَلُسِ.\n• وَفِي الْمَسَائِلِ الَّتِي اخْتَلَفَ فِيهَا الْأَئِمَّةُ جَعَلْنَا لِكُلِّ مَذْهَبٍ مِنَ الْمَذَاهِبِ الْأَرْبَعَةِ (الْمَالِكِيِّ وَالْحَنَفِيِّ وَالشَّافِعِيِّ وَالْحَنْبَلِيِّ) قِسْمًا مُسْتَقِلًّا يُفْتَحُ بِالضَّغْطِ عَلَيْهِ، فِيهِ الْوَصْفُ الْكَامِلُ، وَكُلُّهَا مَذَاهِبُ أَهْلِ السُّنَّةِ، وَالْخِلَافُ بَيْنَهَا خِلَافُ اجْتِهَادٍ مُعْتَبَرٍ.\n• قَالَ النَّبِيُّ ﷺ: «صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي» (البخاري).",
            "explanationEs": "• Esta guía es un resumen sencillo para quien quiere aprender la purificación y la oración, sobre todo quien ha entrado en el islam hace poco.\n• Sigue la opinión más difundida (al-mashhūr) de la escuela del imam Mālik ibn Anas, que es la escuela del Magreb y de al-Ándalus.\n• En las cuestiones en las que los imames difieren, cada una de las cuatro escuelas (malikí, hanafí, shafi'í y hanbalí) tiene su propio apartado desplegable con la descripción completa. Las cuatro son escuelas de Ahl as-Sunna, y sus diferencias son de interpretación legítima (iŷtihād).\n• El Profeta ﷺ dijo: «Rezad como me habéis visto rezar» (Al-Bujari)."
          },
          {
            "isInfo": true,
            "text": "أَحْكَامُ الْأَفْعَالِ",
            "titleEs": "Categorías de los actos",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "• الْفَرْضُ: مَا لَا تَصِحُّ الْعِبَادَةُ بِدُونِهِ.\n• السُّنَّةُ الْمُؤَكَّدَةُ: يُثَابُ فَاعِلُهَا، وَمَنْ تَرَكَهَا سَهْوًا فِي الصَّلَاةِ سَجَدَ لِلسَّهْوِ.\n• الْفَضِيلَةُ (الْمَنْدُوبُ): يُثَابُ فَاعِلُهَا وَلَا شَيْءَ عَلَى تَارِكِهَا.\n• الْمَكْرُوهُ: يُثَابُ تَارِكُهُ وَلَا يُعَاقَبُ فَاعِلُهُ.",
                "es": "• Farḍ (obligatorio): sin él, el acto de adoración no es válido.\n• Sunna confirmada (mu'akkada): se recompensa a quien la hace; si se omite por olvido en la oración, se compensa con la postración del olvido.\n• Faḍīla (recomendado): se recompensa a quien lo hace y no pasa nada si se deja.\n• Makrūh (desaconsejado): se recompensa a quien lo deja y no se castiga a quien lo hace."
              },
              {
                "id": "hanafi",
                "ar": "• الْفَرْضُ: مَا ثَبَتَ بِدَلِيلٍ قَطْعِيٍّ، وَلَا تَصِحُّ الْعِبَادَةُ بِدُونِهِ.\n• الْوَاجِبُ: مَا ثَبَتَ بِدَلِيلٍ ظَنِّيٍّ، يَأْثَمُ تَارِكُهُ عَمْدًا، وَإِذَا تُرِكَ سَهْوًا فِي الصَّلَاةِ جُبِرَ بِسُجُودِ السَّهْوِ.\n• السُّنَّةُ الْمُؤَكَّدَةُ: يُثَابُ فَاعِلُهَا وَيُلَامُ تَارِكُهَا.\n• الْمَنْدُوبُ: يُثَابُ فَاعِلُهُ وَلَا يُلَامُ تَارِكُهُ.\n• الْمَكْرُوهُ: تَحْرِيمًا (قَرِيبٌ مِنَ الْحَرَامِ) أَوْ تَنْزِيهًا (الْأَوْلَى تَرْكُهُ).",
                "es": "• Farḍ: lo probado con una prueba definitiva; sin él, el acto de adoración no es válido.\n• Wāŷib: lo probado con una prueba no definitiva; quien lo deja a propósito peca, y si se omite por olvido en la oración se compensa con la postración del olvido.\n• Sunna confirmada: se recompensa a quien la hace y se reprocha a quien la deja.\n• Mandūb (recomendado): se recompensa a quien lo hace y no se reprocha a quien lo deja.\n• Makrūh: puede ser cercano a lo prohibido (taḥrīman) o simplemente preferible dejarlo (tanzīhan)."
              },
              {
                "id": "shafii",
                "ar": "• الرُّكْنُ (الْفَرْضُ): لَا تَصِحُّ الصَّلَاةُ بِدُونِهِ، وَلَا يُجْبَرُ بِالسُّجُودِ.\n• السُّنَنُ قِسْمَانِ:\n  - الْأَبْعَاضُ: كَالتَّشَهُّدِ الْأَوَّلِ وَالْقُنُوتِ، يُسْجَدُ لِتَرْكِهَا.\n  - الْهَيْئَاتُ: كَالتَّكْبِيرَاتِ وَالتَّسْبِيحِ وَالسُّورَةِ، لَا يُسْجَدُ لِتَرْكِهَا.\n• الْمَكْرُوهُ: يُثَابُ تَارِكُهُ وَلَا يُعَاقَبُ فَاعِلُهُ.\n• الْفَرْضُ وَالْوَاجِبُ عِنْدَهُمْ بِمَعْنًى وَاحِدٍ.",
                "es": "• Rukn (pilar, farḍ): sin él la oración no es válida, y no se compensa con la postración.\n• Las sunnas son de dos tipos:\n  - Abʿāḍ: como el primer tashahhud o el qunūt; si se omiten, se hace la postración del olvido.\n  - Hayʾāt: como los takbīr, la glorificación o la sura; si se omiten, no se hace la postración.\n• Makrūh: se recompensa a quien lo deja y no se castiga a quien lo hace.\n• Farḍ y wāŷib significan lo mismo para ellos."
              },
              {
                "id": "hanbali",
                "ar": "• الرُّكْنُ: لَا يَسْقُطُ عَمْدًا وَلَا سَهْوًا، وَلَا تَصِحُّ الصَّلَاةُ بِدُونِهِ.\n• الْوَاجِبُ: تَبْطُلُ الصَّلَاةُ بِتَرْكِهِ عَمْدًا، وَيُجْبَرُ بِسُجُودِ السَّهْوِ إِنْ تُرِكَ سَهْوًا، كَتَكْبِيرَاتِ الِانْتِقَالِ وَالتَّسْبِيحِ وَالتَّشَهُّدِ الْأَوَّلِ.\n• السُّنَّةُ: لَا تَبْطُلُ الصَّلَاةُ بِتَرْكِهَا، وَلَا يَجِبُ لَهَا سُجُودٌ.\n• الْمَكْرُوهُ: يُثَابُ تَارِكُهُ وَلَا يُعَاقَبُ فَاعِلُهُ.",
                "es": "• Rukn (pilar): no se puede omitir ni a propósito ni por olvido; sin él la oración no es válida.\n• Wāŷib: dejarlo a propósito invalida la oración; si se omite por olvido se compensa con la postración, como los takbīr de transición, la glorificación o el primer tashahhud.\n• Sunna: omitirla no invalida la oración ni obliga a postrarse.\n• Makrūh: se recompensa a quien lo deja y no se castiga a quien lo hace."
              }
            ]
          }
        ]
      },
      {
        "id": "guia_wudu",
        "titleAr": "الْوُضُوءُ",
        "titleEs": "El wudu (ablución menor)",
        "items": [
          {
            "isInfo": true,
            "text": "فَضْلُ الْوُضُوءِ",
            "titleEs": "La virtud del wudu",
            "explanationAr": "قَالَ النَّبِيُّ ﷺ: «لَا تُقْبَلُ صَلَاةٌ بِغَيْرِ طُهُورٍ» (مسلم). وَالْوُضُوءُ وَاجِبٌ لِلصَّلَاةِ وَلِلطَّوَافِ وَلِمَسِّ الْمُصْحَفِ، وَيَكُونُ بِمَاءٍ طَهُورٍ لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رِيحُهُ بِشَيْءٍ يُفَارِقُهُ غَالِبًا.",
            "explanationEs": "El Profeta ﷺ dijo: «No se acepta una oración sin purificación» (Muslim). El wudu es obligatorio para rezar, para dar las vueltas a la Kaaba (ṭawāf) y para tocar el Mushaf. Se hace con agua pura cuyo color, sabor u olor no haya cambiado por algo que normalmente no se mezcla con ella."
          },
          {
            "isInfo": true,
            "text": "فَرَائِضُ الْوُضُوءِ (سَبْعٌ)",
            "titleEs": "Los actos obligatorios del wudu (siete)",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "١. النِّيَّةُ عِنْدَ غَسْلِ الْوَجْهِ.\n٢. غَسْلُ الْوَجْهِ: مِنْ مَنَابِتِ شَعْرِ الرَّأْسِ إِلَى آخِرِ الذَّقَنِ، وَمِنَ الْأُذُنِ إِلَى الْأُذُنِ.\n٣. غَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ مَعَ تَخْلِيلِ الْأَصَابِعِ.\n٤. مَسْحُ جَمِيعِ الرَّأْسِ.\n٥. غَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ.\n٦. الدَّلْكُ: إِمْرَارُ الْيَدِ عَلَى الْعُضْوِ مَعَ الْمَاءِ.\n٧. الْفَوْرُ (الْمُوَالَاةُ): أَلَّا يُفَرِّقَ بَيْنَ الْأَعْضَاءِ تَفْرِيقًا طَوِيلًا، مَعَ الذِّكْرِ وَالْقُدْرَةِ.",
                "es": "1. La intención (niyya), al lavar la cara.\n2. Lavar la cara: desde donde nace el pelo hasta el final de la barbilla, y de oreja a oreja.\n3. Lavar las manos y los brazos hasta los codos incluidos, pasando el agua entre los dedos.\n4. Pasar las manos mojadas por toda la cabeza (masḥ).\n5. Lavar los pies hasta los tobillos incluidos.\n6. Frotar (dalk): pasar la mano sobre cada parte con el agua.\n7. Continuidad (fawr): no dejar mucho tiempo entre una parte y otra, si uno se acuerda y puede hacerlo."
              },
              {
                "id": "hanafi",
                "ar": "الْفَرَائِضُ أَرْبَعٌ:\n١. غَسْلُ الْوَجْهِ.\n٢. غَسْلُ الْيَدَيْنِ مَعَ الْمِرْفَقَيْنِ.\n٣. مَسْحُ رُبُعِ الرَّأْسِ.\n٤. غَسْلُ الرِّجْلَيْنِ مَعَ الْكَعْبَيْنِ.\nأَمَّا النِّيَّةُ وَالتَّسْمِيَةُ وَالتَّرْتِيبُ وَالْمُوَالَاةُ فَسُنَنٌ، وَلَا يُشْتَرَطُ الدَّلْكُ.",
                "es": "Los actos obligatorios son cuatro:\n1. Lavar la cara.\n2. Lavar las manos y los brazos con los codos.\n3. Pasar la mano mojada por un cuarto de la cabeza.\n4. Lavar los pies con los tobillos.\nLa intención, decir «Bismillāh», el orden y la continuidad son sunna, y frotar no es condición."
              },
              {
                "id": "shafii",
                "ar": "الْفَرَائِضُ سِتٌّ:\n١. النِّيَّةُ عِنْدَ غَسْلِ الْوَجْهِ.\n٢. غَسْلُ الْوَجْهِ.\n٣. غَسْلُ الْيَدَيْنِ مَعَ الْمِرْفَقَيْنِ.\n٤. مَسْحُ بَعْضِ الرَّأْسِ وَلَوْ شَعْرَةً.\n٥. غَسْلُ الرِّجْلَيْنِ مَعَ الْكَعْبَيْنِ.\n٦. التَّرْتِيبُ.\nأَمَّا الْمُوَالَاةُ وَالدَّلْكُ فَسُنَّةٌ.",
                "es": "Los actos obligatorios son seis:\n1. La intención, al lavar la cara.\n2. Lavar la cara.\n3. Lavar las manos y los brazos con los codos.\n4. Pasar la mano mojada por una parte de la cabeza, aunque sea un pelo.\n5. Lavar los pies con los tobillos.\n6. El orden.\nLa continuidad y el frotar son sunna."
              },
              {
                "id": "hanbali",
                "ar": "الْفَرَائِضُ سِتٌّ:\n١. غَسْلُ الْوَجْهِ، وَمِنْهُ الْمَضْمَضَةُ وَالِاسْتِنْشَاقُ.\n٢. غَسْلُ الْيَدَيْنِ مَعَ الْمِرْفَقَيْنِ.\n٣. مَسْحُ الرَّأْسِ كُلِّهِ، وَمِنْهُ الْأُذُنَانِ.\n٤. غَسْلُ الرِّجْلَيْنِ مَعَ الْكَعْبَيْنِ.\n٥. التَّرْتِيبُ.\n٦. الْمُوَالَاةُ.\nوَالنِّيَّةُ شَرْطٌ، وَالتَّسْمِيَةُ وَاجِبَةٌ مَعَ الذِّكْرِ.",
                "es": "Los actos obligatorios son seis:\n1. Lavar la cara, que incluye enjuagar la boca y la nariz.\n2. Lavar las manos y los brazos con los codos.\n3. Pasar la mano mojada por toda la cabeza, incluidas las orejas.\n4. Lavar los pies con los tobillos.\n5. El orden.\n6. La continuidad.\nLa intención es condición, y decir «Bismillāh» es obligatorio si uno se acuerda."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "سُنَنُ الْوُضُوءِ وَفَضَائِلُهُ",
            "titleEs": "Sunnas y actos recomendados del wudu",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "السُّنَنُ: غَسْلُ الْيَدَيْنِ إِلَى الْكُوعَيْنِ قَبْلَ إِدْخَالِهِمَا فِي الْإِنَاءِ، الْمَضْمَضَةُ، الِاسْتِنْشَاقُ، الِاسْتِنْثَارُ، رَدُّ مَسْحِ الرَّأْسِ، مَسْحُ الْأُذُنَيْنِ، تَجْدِيدُ الْمَاءِ لَهُمَا، التَّرْتِيبُ بَيْنَ الْفَرَائِضِ.\nالْفَضَائِلُ: التَّسْمِيَةُ، السِّوَاكُ، الْبَدْءُ بِالْمَيَامِنِ، الْغَسْلَةُ الثَّانِيَةُ وَالثَّالِثَةُ، الْبَدْءُ بِمُقَدَّمِ الرَّأْسِ، قِلَّةُ الْمَاءِ.",
                "es": "Sunna: lavar las manos hasta las muñecas antes de meterlas en el recipiente, enjuagarse la boca, aspirar agua por la nariz, expulsarla, volver a pasar las manos por la cabeza de atrás hacia delante, pasar las manos por las orejas, tomar agua nueva para ellas y respetar el orden de los actos obligatorios.\nRecomendados: decir «Bismillāh», usar el siwāk, empezar por el lado derecho, lavar cada parte una segunda y una tercera vez, empezar la cabeza por delante y no derrochar agua."
              },
              {
                "id": "hanafi",
                "ar": "مِنْ سُنَنِ الْوُضُوءِ: النِّيَّةُ، التَّسْمِيَةُ، غَسْلُ الْيَدَيْنِ إِلَى الرُّسْغَيْنِ، السِّوَاكُ، الْمَضْمَضَةُ، الِاسْتِنْشَاقُ، تَخْلِيلُ اللِّحْيَةِ وَالْأَصَابِعِ، تَثْلِيثُ الْغَسْلِ، اسْتِيعَابُ الرَّأْسِ بِالْمَسْحِ مَرَّةً، مَسْحُ الْأُذُنَيْنِ بِمَاءِ الرَّأْسِ، التَّرْتِيبُ، وَالْمُوَالَاةُ.\nوَمِنَ الْمُسْتَحَبَّاتِ: التَّيَامُنُ، وَمَسْحُ الرَّقَبَةِ، وَالذِّكْرُ بَعْدَهُ.",
                "es": "Sunna: la intención, decir «Bismillāh», lavar las manos hasta las muñecas, el siwāk, enjuagar la boca y la nariz, pasar el agua entre la barba y entre los dedos, lavar cada parte tres veces, pasar la mano por toda la cabeza una vez, pasar las manos por las orejas con el agua de la cabeza, el orden y la continuidad.\nRecomendado: empezar por la derecha, pasar la mano por la nuca y el dhikr al terminar."
              },
              {
                "id": "shafii",
                "ar": "مِنْ سُنَنِ الْوُضُوءِ: السِّوَاكُ، التَّسْمِيَةُ، غَسْلُ الْكَفَّيْنِ، الْمَضْمَضَةُ وَالِاسْتِنْشَاقُ، تَثْلِيثُ الْغَسْلِ وَالْمَسْحِ، مَسْحُ جَمِيعِ الرَّأْسِ، مَسْحُ الْأُذُنَيْنِ بِمَاءٍ جَدِيدٍ، تَخْلِيلُ اللِّحْيَةِ الْكَثَّةِ وَالْأَصَابِعِ، التَّيَامُنُ، الْمُوَالَاةُ، الدَّلْكُ، وَالذِّكْرُ بَعْدَهُ.",
                "es": "Sunna: el siwāk, decir «Bismillāh», lavar las manos, enjuagar la boca y la nariz, repetir tres veces cada lavado y el paso de la mano por la cabeza, pasar la mano por toda la cabeza, pasar las manos por las orejas con agua nueva, pasar el agua entre la barba espesa y entre los dedos, empezar por la derecha, la continuidad, frotar y el dhikr al terminar."
              },
              {
                "id": "hanbali",
                "ar": "مِنْ سُنَنِ الْوُضُوءِ: السِّوَاكُ، غَسْلُ الْكَفَّيْنِ ثَلَاثًا، الْبَدَاءَةُ بِالْمَضْمَضَةِ وَالِاسْتِنْشَاقِ وَالْمُبَالَغَةُ فِيهِمَا لِغَيْرِ الصَّائِمِ، تَخْلِيلُ اللِّحْيَةِ الْكَثِيفَةِ وَالْأَصَابِعِ، التَّيَامُنُ، وَالْغَسْلَةُ الثَّانِيَةُ وَالثَّالِثَةُ.\nأَمَّا التَّسْمِيَةُ فَوَاجِبَةٌ مَعَ الذِّكْرِ، وَالْمَضْمَضَةُ وَالِاسْتِنْشَاقُ وَاجِبَانِ لِأَنَّهُمَا مِنَ الْوَجْهِ، وَالتَّرْتِيبُ فَرْضٌ.",
                "es": "Sunna: el siwāk, lavar las manos tres veces, empezar enjuagando la boca y la nariz y hacerlo a fondo (salvo quien ayuna), pasar el agua entre la barba espesa y entre los dedos, empezar por la derecha y lavar una segunda y una tercera vez.\nDecir «Bismillāh» es obligatorio si uno se acuerda; enjuagar la boca y la nariz es obligatorio porque forman parte de la cara; y el orden es obligatorio."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "النِّيَّةُ وَغَسْلُ الْكَفَّيْنِ",
            "titleEs": "La intención y lavar las manos",
            "note": "الْخُطْوَةُ ١",
            "noteEs": "Paso 1",
            "explanationAr": "انْوِ بِقَلْبِكَ رَفْعَ الْحَدَثِ، وَقُلْ: «بِسْمِ اللَّهِ»، ثُمَّ اغْسِلْ يَدَيْكَ إِلَى الْكُوعَيْنِ ثَلَاثًا قَبْلَ إِدْخَالِهِمَا فِي الْإِنَاءِ.",
            "explanationEs": "Ten en el corazón la intención de purificarte, di «Bismillāh» y lava las manos hasta las muñecas tres veces antes de meterlas en el recipiente."
          },
          {
            "isInfo": true,
            "text": "الْمَضْمَضَةُ وَالِاسْتِنْشَاقُ",
            "titleEs": "Enjuagar la boca y la nariz",
            "note": "الْخُطْوَةُ ٢",
            "noteEs": "Paso 2",
            "explanationAr": "تَمَضْمَضْ ثَلَاثًا: أَدْخِلِ الْمَاءَ فِي فَمِكَ وَحَرِّكْهُ ثُمَّ مُجَّهُ. ثُمَّ اسْتَنْشِقِ الْمَاءَ بِأَنْفِكَ وَاسْتَنْثِرْهُ ثَلَاثًا، مُمْسِكًا أَنْفَكَ بِيَدِكَ الْيُسْرَى.",
            "explanationEs": "Enjuágate la boca tres veces: mete agua, muévela y escúpela. Después aspira agua por la nariz y expúlsala tres veces, sujetándote la nariz con la mano izquierda."
          },
          {
            "isInfo": true,
            "text": "غَسْلُ الْوَجْهِ",
            "titleEs": "Lavar la cara",
            "note": "الْخُطْوَةُ ٣",
            "noteEs": "Paso 3",
            "explanationAr": "اغْسِلْ وَجْهَكَ ثَلَاثًا مَعَ الدَّلْكِ: مِنْ مَنَابِتِ شَعْرِ الرَّأْسِ إِلَى آخِرِ الذَّقَنِ، وَمِنَ الْأُذُنِ إِلَى الْأُذُنِ، وَخَلِّلِ اللِّحْيَةَ الْخَفِيفَةَ.",
            "explanationEs": "Lava la cara tres veces frotando: desde donde nace el pelo hasta el final de la barbilla, y de oreja a oreja. Si la barba es poco poblada, haz llegar el agua entre ella."
          },
          {
            "isInfo": true,
            "text": "غَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ",
            "titleEs": "Lavar los brazos hasta los codos",
            "note": "الْخُطْوَةُ ٤",
            "noteEs": "Paso 4",
            "explanationAr": "اغْسِلْ يَدَكَ الْيُمْنَى مِنْ أَطْرَافِ الْأَصَابِعِ إِلَى الْمِرْفَقِ ثَلَاثًا مَعَ الدَّلْكِ وَتَخْلِيلِ الْأَصَابِعِ، ثُمَّ الْيُسْرَى كَذَلِكَ.",
            "explanationEs": "Lava el brazo derecho desde la punta de los dedos hasta el codo incluido, tres veces, frotando y pasando el agua entre los dedos; luego el izquierdo igual."
          },
          {
            "isInfo": true,
            "text": "مَسْحُ الرَّأْسِ",
            "titleEs": "Pasar las manos por la cabeza",
            "note": "الْخُطْوَةُ ٥",
            "noteEs": "Paso 5",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "بَلِّلْ يَدَيْكَ وَامْسَحْ رَأْسَكَ كُلَّهُ: ابْدَأْ مِنْ مُقَدَّمِهِ إِلَى قَفَاكَ، ثُمَّ رُدَّ يَدَيْكَ إِلَى حَيْثُ بَدَأْتَ، مَرَّةً وَاحِدَةً.",
                "es": "Moja las manos y pásalas por toda la cabeza: desde la frente hasta la nuca, y vuelve al punto de partida, una sola vez."
              },
              {
                "id": "hanafi",
                "ar": "الْفَرْضُ مَسْحُ رُبُعِ الرَّأْسِ مَرَّةً وَاحِدَةً، وَالسُّنَّةُ اسْتِيعَابُهُ كُلِّهِ مَرَّةً: يَبْدَأُ مِنْ مُقَدَّمِهِ إِلَى قَفَاهُ، ثُمَّ يَمْسَحُ أُذُنَيْهِ بِمَاءِ الرَّأْسِ.",
                "es": "Lo obligatorio es pasar la mano mojada por un cuarto de la cabeza, una vez. La sunna es pasarla por toda la cabeza una vez, de la frente a la nuca, y luego pasar las manos por las orejas con la misma agua de la cabeza."
              },
              {
                "id": "shafii",
                "ar": "الْفَرْضُ مَسْحُ بَعْضِ الرَّأْسِ وَلَوْ شَعْرَةً وَاحِدَةً، وَالسُّنَّةُ اسْتِيعَابُهُ وَتَثْلِيثُ الْمَسْحِ، ثُمَّ مَسْحُ الْأُذُنَيْنِ بِمَاءٍ جَدِيدٍ.",
                "es": "Lo obligatorio es pasar la mano mojada por una parte de la cabeza, aunque sea un solo pelo. La sunna es pasarla por toda la cabeza y repetirlo tres veces, y después pasar las manos por las orejas con agua nueva."
              },
              {
                "id": "hanbali",
                "ar": "الْفَرْضُ مَسْحُ جَمِيعِ الرَّأْسِ مَرَّةً وَاحِدَةً مَعَ الْأُذُنَيْنِ: يَبْدَأُ مِنْ مُقَدَّمِهِ إِلَى قَفَاهُ ثُمَّ يَرُدُّ يَدَيْهِ إِلَى حَيْثُ بَدَأَ، وَلَا يُسَنُّ تَكْرَارُ الْمَسْحِ.",
                "es": "Lo obligatorio es pasar la mano mojada por toda la cabeza una vez, junto con las orejas: de la frente a la nuca y vuelta al punto de partida. No es sunna repetirlo."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "مَسْحُ الْأُذُنَيْنِ",
            "titleEs": "Pasar las manos por las orejas",
            "note": "الْخُطْوَةُ ٦",
            "noteEs": "Paso 6",
            "explanationAr": "خُذْ مَاءً جَدِيدًا وَامْسَحْ أُذُنَيْكَ: بَاطِنَهُمَا بِالسَّبَّابَتَيْنِ، وَظَاهِرَهُمَا بِالْإِبْهَامَيْنِ.",
            "explanationEs": "Toma agua nueva y pasa las manos por las orejas: el interior con los índices y el exterior con los pulgares."
          },
          {
            "isInfo": true,
            "text": "غَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ",
            "titleEs": "Lavar los pies hasta los tobillos",
            "note": "الْخُطْوَةُ ٧",
            "noteEs": "Paso 7",
            "explanationAr": "اغْسِلْ رِجْلَكَ الْيُمْنَى إِلَى الْكَعْبِ ثَلَاثًا مَعَ الدَّلْكِ وَتَخْلِيلِ الْأَصَابِعِ، ثُمَّ الْيُسْرَى كَذَلِكَ.",
            "explanationEs": "Lava el pie derecho hasta el tobillo incluido, tres veces, frotando y pasando el agua entre los dedos; luego el izquierdo igual."
          },
          {
            "isInfo": true,
            "text": "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ، وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
            "titleEs": "Lo que se dice después del wudu",
            "latin": "Ashhadu an lā ilāha illallāhu waḥdahū lā sharīka lah, wa ashhadu anna Muḥammadan ʿabduhū wa rasūluh. Allāhumma-jʿalnī minat-tawwābīn, wa-jʿalnī minal-mutaṭahhirīn.",
            "explanationAr": "الذِّكْرُ بَعْدَ الْوُضُوءِ: «مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ ثُمَّ قَالَ: أَشْهَدُ… فُتِحَتْ لَهُ أَبْوَابُ الْجَنَّةِ الثَّمَانِيَةُ يَدْخُلُ مِنْ أَيِّهَا شَاءَ» (مسلم، وَالزِّيَادَةُ عِنْدَ التِّرْمِذِيِّ).",
            "explanationEs": "Lo que se dice después del wudu: «Atestiguo que no hay divinidad excepto Allah, Único, sin asociado, y atestiguo que Muhammad es Su siervo y Su mensajero. Oh Allah, ponme entre los que se arrepienten y entre los que se purifican». A quien lo dice tras un buen wudu se le abren las ocho puertas del Paraíso para entrar por la que quiera (Muslim; la última frase, At-Tirmidhi)."
          },
          {
            "isInfo": true,
            "text": "نَوَاقِضُ الْوُضُوءِ",
            "titleEs": "Lo que anula el wudu",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "الْأَحْدَاثُ: الْخَارِجُ الْمُعْتَادُ مِنَ الْمَخْرَجِ الْمُعْتَادِ: الْبَوْلُ، الْغَائِطُ، الرِّيحُ، الْمَذْيُ، الْوَدْيُ.\nالْأَسْبَابُ: زَوَالُ الْعَقْلِ بِنَوْمٍ ثَقِيلٍ أَوْ إِغْمَاءٍ أَوْ سُكْرٍ أَوْ جُنُونٍ؛ لَمْسُ مَنْ يُلْتَذُّ بِهِ عَادَةً إِذَا قَصَدَ اللَّذَّةَ أَوْ وَجَدَهَا؛ مَسُّ الذَّكَرِ بِبَاطِنِ الْكَفِّ أَوِ الْأَصَابِعِ.\nوَيَنْقُضُهُ أَيْضًا: الرِّدَّةُ، وَالشَّكُّ فِي الْحَدَثِ بَعْدَ تَيَقُّنِ الطَّهَارَةِ (عَلَى الْمَشْهُورِ).",
                "es": "Impurezas (aḥdāth): lo que sale habitualmente por las vías naturales: orina, heces, gases, madhy (líquido previo) y wady (líquido posterior a la orina).\nCausas: perder la consciencia por sueño profundo, desmayo, embriaguez o locura; tocar con deseo, o sintiéndolo, a alguien que habitualmente despierta deseo; tocar el pene con la palma o la cara interior de los dedos.\nTambién lo anulan: la apostasía, y dudar de si se ha anulado el wudu cuando uno estaba seguro de tenerlo (según la opinión más difundida)."
              },
              {
                "id": "hanafi",
                "ar": "يَنْقُضُ الْوُضُوءَ:\n• كُلُّ مَا خَرَجَ مِنَ السَّبِيلَيْنِ.\n• الدَّمُ أَوِ الْقَيْحُ إِذَا سَالَ عَنْ مَوْضِعِهِ.\n• الْقَيْءُ مِلْءَ الْفَمِ.\n• النَّوْمُ مُضْطَجِعًا أَوْ مُتَّكِئًا.\n• زَوَالُ الْعَقْلِ بِإِغْمَاءٍ أَوْ سُكْرٍ أَوْ جُنُونٍ.\n• الْقَهْقَهَةُ فِي صَلَاةٍ ذَاتِ رُكُوعٍ وَسُجُودٍ.\nوَلَا يَنْقُضُهُ مَسُّ الذَّكَرِ، وَلَا لَمْسُ الْمَرْأَةِ، وَلَا أَكْلُ لَحْمِ الْإِبِلِ.",
                "es": "Anulan el wudu:\n• Todo lo que sale por las dos vías naturales.\n• La sangre o el pus cuando fluye fuera de su sitio.\n• Vomitar a boca llena.\n• Dormir tumbado o recostado.\n• Perder la consciencia por desmayo, embriaguez o locura.\n• Reírse a carcajadas en una oración con inclinación y postración.\nNo lo anulan tocar el pene, tocar a una mujer ni comer carne de camello."
              },
              {
                "id": "shafii",
                "ar": "يَنْقُضُ الْوُضُوءَ:\n• الْخَارِجُ مِنَ السَّبِيلَيْنِ، إِلَّا الْمَنِيَّ.\n• زَوَالُ الْعَقْلِ، إِلَّا نَوْمَ مَنْ مَكَّنَ مَقْعَدَتَهُ مِنَ الْأَرْضِ.\n• لَمْسُ بَشَرَةِ الْمَرْأَةِ الْأَجْنَبِيَّةِ بِلَا حَائِلٍ، وَلَوْ بِغَيْرِ شَهْوَةٍ.\n• مَسُّ الْقُبُلِ أَوِ الدُّبُرِ بِبَاطِنِ الْكَفِّ.\nوَلَا يَنْقُضُهُ الدَّمُ وَلَا الْقَيْءُ وَلَا أَكْلُ لَحْمِ الْإِبِلِ.",
                "es": "Anulan el wudu:\n• Lo que sale por las dos vías naturales, salvo el semen.\n• Perder la consciencia, salvo el sueño de quien está bien sentado en el suelo.\n• Tocar sin barrera la piel de una mujer no maḥram, aunque sea sin deseo.\n• Tocar las partes íntimas con la palma de la mano.\nNo lo anulan la sangre, el vómito ni comer carne de camello."
              },
              {
                "id": "hanbali",
                "ar": "يَنْقُضُ الْوُضُوءَ:\n• الْخَارِجُ مِنَ السَّبِيلَيْنِ.\n• الْخَارِجُ النَّجِسُ الْكَثِيرُ مِنْ سَائِرِ الْبَدَنِ.\n• زَوَالُ الْعَقْلِ، إِلَّا يَسِيرَ نَوْمٍ مِنْ جَالِسٍ أَوْ قَائِمٍ.\n• مَسُّ الْفَرْجِ بِالْيَدِ بِلَا حَائِلٍ.\n• لَمْسُ الْمَرْأَةِ بِشَهْوَةٍ.\n• غَسْلُ الْمَيِّتِ.\n• أَكْلُ لَحْمِ الْإِبِلِ.\n• الرِّدَّةُ.",
                "es": "Anulan el wudu:\n• Lo que sale por las dos vías naturales.\n• Una impureza abundante que sale de cualquier otra parte del cuerpo.\n• Perder la consciencia, salvo un sueño ligero sentado o de pie.\n• Tocar las partes íntimas con la mano sin barrera.\n• Tocar a una mujer con deseo.\n• Lavar a un difunto.\n• Comer carne de camello.\n• La apostasía."
              }
            ]
          }
        ]
      },
      {
        "id": "guia_ghusl",
        "titleAr": "الْغُسْلُ",
        "titleEs": "El ghusl (ablución mayor)",
        "items": [
          {
            "isInfo": true,
            "text": "مُوجِبَاتُ الْغُسْلِ",
            "titleEs": "Lo que hace obligatorio el ghusl",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "١. الْجَنَابَةُ: بِخُرُوجِ الْمَنِيِّ بِلَذَّةٍ مُعْتَادَةٍ وَلَوْ فِي النَّوْمِ، أَوْ بِمَغِيبِ الْحَشَفَةِ فِي الْفَرْجِ وَلَوْ بِغَيْرِ إِنْزَالٍ.\n٢. الْحَيْضُ.\n٣. النِّفَاسُ.\n٤. الْمَوْتُ (يُغَسَّلُ الْمَيِّتُ الْمُسْلِمُ).\n٥. إِسْلَامُ الْكَافِرِ إِذَا كَانَ جُنُبًا، وَيُسْتَحَبُّ لَهُ عَلَى كُلِّ حَالٍ.",
                "es": "1. La ŷanāba: la salida de semen con el placer habitual, aunque sea dormido, o la relación sexual aunque no haya eyaculación.\n2. El fin de la menstruación.\n3. El fin del sangrado posparto (nifās).\n4. La muerte (se lava al musulmán fallecido).\n5. La entrada en el islam si la persona estaba en estado de ŷanāba; en cualquier caso es recomendable."
              },
              {
                "id": "hanafi",
                "ar": "يَجِبُ الْغُسْلُ بِـ:\n١. خُرُوجِ الْمَنِيِّ بِشَهْوَةٍ.\n٢. الْتِقَاءِ الْخِتَانَيْنِ وَلَوْ بِغَيْرِ إِنْزَالٍ.\n٣. انْقِطَاعِ الْحَيْضِ.\n٤. انْقِطَاعِ النِّفَاسِ.\nوَيَجِبُ عَلَى الْأَحْيَاءِ غُسْلُ الْمَيِّتِ الْمُسْلِمِ. وَمَنْ أَسْلَمَ يَجِبُ عَلَيْهِ الْغُسْلُ إِنْ كَانَ جُنُبًا، وَإِلَّا اسْتُحِبَّ.",
                "es": "El ghusl es obligatorio por:\n1. La salida de semen con deseo.\n2. La relación sexual, aunque no haya eyaculación.\n3. El fin de la menstruación.\n4. El fin del sangrado posparto.\nLos vivos deben lavar al musulmán fallecido. Quien entra en el islam debe hacer ghusl si estaba en ŷanāba; si no, es recomendable."
              },
              {
                "id": "shafii",
                "ar": "يَجِبُ الْغُسْلُ بِـ:\n١. خُرُوجِ الْمَنِيِّ وَلَوْ بِغَيْرِ شَهْوَةٍ.\n٢. الْتِقَاءِ الْخِتَانَيْنِ.\n٣. الْحَيْضِ.\n٤. النِّفَاسِ.\n٥. الْوِلَادَةِ.\n٦. الْمَوْتِ.\nوَيُسْتَحَبُّ لِمَنْ أَسْلَمَ إِنْ لَمْ يَكُنْ جُنُبًا.",
                "es": "El ghusl es obligatorio por:\n1. La salida de semen, aunque sea sin deseo.\n2. La relación sexual.\n3. La menstruación.\n4. El sangrado posparto.\n5. El parto.\n6. La muerte.\nEs recomendable para quien entra en el islam si no estaba en ŷanāba."
              },
              {
                "id": "hanbali",
                "ar": "يَجِبُ الْغُسْلُ بِـ:\n١. خُرُوجِ الْمَنِيِّ بِلَذَّةٍ.\n٢. الْتِقَاءِ الْخِتَانَيْنِ.\n٣. إِسْلَامِ الْكَافِرِ، مُطْلَقًا.\n٤. الْحَيْضِ.\n٥. النِّفَاسِ.\n٦. الْمَوْتِ.",
                "es": "El ghusl es obligatorio por:\n1. La salida de semen con placer.\n2. La relación sexual.\n3. La entrada en el islam, en todo caso.\n4. La menstruación.\n5. El sangrado posparto.\n6. La muerte."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "فَرَائِضُ الْغُسْلِ وَسُنَنُهُ",
            "titleEs": "Actos obligatorios y sunnas del ghusl",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "الْفَرَائِضُ: النِّيَّةُ، تَعْمِيمُ الْجَسَدِ بِالْمَاءِ، الدَّلْكُ، الْفَوْرُ، تَخْلِيلُ الشَّعْرِ.\nالسُّنَنُ: غَسْلُ الْيَدَيْنِ أَوَّلًا إِلَى الْكُوعَيْنِ، الْمَضْمَضَةُ، الِاسْتِنْشَاقُ، الِاسْتِنْثَارُ، مَسْحُ صِمَاخِ الْأُذُنَيْنِ.",
                "es": "Obligatorio: la intención, que el agua llegue a todo el cuerpo, frotar, la continuidad y hacer llegar el agua entre el pelo.\nSunna: lavar primero las manos hasta las muñecas, enjuagarse la boca, aspirar agua por la nariz, expulsarla y pasar el dedo mojado por el conducto de las orejas."
              },
              {
                "id": "hanafi",
                "ar": "الْفَرَائِضُ ثَلَاثٌ: الْمَضْمَضَةُ، وَالِاسْتِنْشَاقُ، وَغَسْلُ سَائِرِ الْبَدَنِ.\nوَمِنَ السُّنَنِ: النِّيَّةُ، وَالتَّسْمِيَةُ، وَغَسْلُ الْيَدَيْنِ وَالْفَرْجِ أَوَّلًا، وَالْوُضُوءُ قَبْلَهُ، وَالدَّلْكُ، وَتَثْلِيثُ الْغَسْلِ.",
                "es": "Lo obligatorio son tres cosas: enjuagar la boca, enjuagar la nariz y lavar todo el cuerpo.\nSunna: la intención, decir «Bismillāh», lavar primero las manos y las partes íntimas, hacer el wudu antes, frotar y lavar tres veces."
              },
              {
                "id": "shafii",
                "ar": "الْفَرَائِضُ: النِّيَّةُ، وَتَعْمِيمُ الْبَدَنِ بِالْمَاءِ بَشَرًا وَشَعْرًا.\nوَمِنَ السُّنَنِ: التَّسْمِيَةُ، وَالْوُضُوءُ قَبْلَهُ، وَالْمَضْمَضَةُ وَالِاسْتِنْشَاقُ، وَالدَّلْكُ، وَالتَّثْلِيثُ، وَالْبَدْءُ بِالْأَيْمَنِ.",
                "es": "Lo obligatorio es la intención y que el agua llegue a todo el cuerpo, piel y pelo.\nSunna: decir «Bismillāh», hacer el wudu antes, enjuagar la boca y la nariz, frotar, lavar tres veces y empezar por la derecha."
              },
              {
                "id": "hanbali",
                "ar": "النِّيَّةُ شَرْطٌ، وَالتَّسْمِيَةُ وَاجِبَةٌ مَعَ الذِّكْرِ، وَالْوَاجِبُ تَعْمِيمُ الْبَدَنِ بِالْمَاءِ مَعَ الْمَضْمَضَةِ وَالِاسْتِنْشَاقِ.\nوَمِنَ السُّنَنِ: الْوُضُوءُ قَبْلَهُ، وَالدَّلْكُ، وَالْبَدْءُ بِالْأَيْمَنِ، وَتَثْلِيثُ الْإِفَاضَةِ عَلَى الرَّأْسِ.",
                "es": "La intención es condición y decir «Bismillāh» es obligatorio si uno se acuerda. Lo obligatorio es que el agua llegue a todo el cuerpo, enjuagando también la boca y la nariz.\nSunna: hacer el wudu antes, frotar, empezar por la derecha y echar agua tres veces sobre la cabeza."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "صِفَةُ الْغُسْلِ",
            "titleEs": "Cómo se hace el ghusl",
            "explanationAr": "١. انْوِ رَفْعَ الْحَدَثِ الْأَكْبَرِ، وَقُلْ: بِسْمِ اللَّهِ.\n٢. اغْسِلْ يَدَيْكَ، ثُمَّ اغْسِلْ مَا عَلَى فَرْجِكَ مِنْ أَذًى.\n٣. تَوَضَّأْ وُضُوءَكَ لِلصَّلَاةِ.\n٤. خَلِّلْ أُصُولَ شَعْرِ رَأْسِكَ بِالْمَاءِ، ثُمَّ صُبَّ عَلَى رَأْسِكَ ثَلَاثَ غَرَفَاتٍ.\n٥. أَفِضِ الْمَاءَ عَلَى شِقِّكَ الْأَيْمَنِ ثُمَّ الْأَيْسَرِ، مَعَ الدَّلْكِ وَتَتَبُّعِ الْمَغَابِنِ (الْإِبْطَيْنِ وَالسُّرَّةِ وَخَلْفَ الرُّكْبَتَيْنِ).",
            "explanationEs": "1. Ten la intención de quitar la impureza mayor y di: «Bismillāh».\n2. Lava las manos y luego limpia las partes íntimas.\n3. Haz el wudu como para la oración.\n4. Haz llegar el agua a la raíz del pelo con los dedos y echa tres veces agua sobre la cabeza.\n5. Echa agua sobre el lado derecho del cuerpo y luego sobre el izquierdo, frotando y cuidando los pliegues (axilas, ombligo, detrás de las rodillas)."
          }
        ]
      },
      {
        "id": "guia_tayammum",
        "titleAr": "التَّيَمُّمُ وَالْمَسْحُ عَلَى الْخُفَّيْنِ",
        "titleEs": "El tayammum y el masaḥ sobre el calzado",
        "items": [
          {
            "isInfo": true,
            "text": "مَتَى يُشْرَعُ التَّيَمُّمُ؟",
            "titleEs": "¿Cuándo se hace tayammum?",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "يَتَيَمَّمُ مَنْ عَدِمَ الْمَاءَ الْكَافِيَ، أَوْ خَافَ بِاسْتِعْمَالِهِ مَرَضًا أَوْ زِيَادَتَهُ أَوْ تَأَخُّرَ بُرْءٍ، أَوْ خَافَ خُرُوجَ الْوَقْتِ بِطَلَبِهِ. وَيَكُونُ بِالصَّعِيدِ الطَّاهِرِ: التُّرَابِ وَمَا صَعِدَ عَلَى وَجْهِ الْأَرْضِ مِنْ رَمْلٍ وَحِجَارَةٍ وَنَحْوِهَا.",
                "es": "Hace tayammum quien no tiene agua suficiente, quien teme enfermar, empeorar o tardar en curarse si la usa, o quien teme que se acabe el tiempo de la oración buscándola. Se hace con tierra limpia (ṣaʿīd): tierra y lo que forma la superficie del suelo, como arena o piedra."
              },
              {
                "id": "hanafi",
                "ar": "يَتَيَمَّمُ مَنْ عَدِمَ الْمَاءَ أَوْ كَانَ بَعِيدًا عَنْهُ نَحْوَ مِيلٍ، أَوْ خَافَ بِاسْتِعْمَالِهِ مَرَضًا أَوْ زِيَادَتَهُ. وَيَصِحُّ بِكُلِّ مَا كَانَ مِنْ جِنْسِ الْأَرْضِ: التُّرَابِ وَالرَّمْلِ وَالْحَجَرِ وَنَحْوِهَا.",
                "es": "Hace tayammum quien no tiene agua o está lejos de ella (aproximadamente una milla), o teme enfermar o empeorar si la usa. Vale todo lo que es de la naturaleza del suelo: tierra, arena, piedra y similares."
              },
              {
                "id": "shafii",
                "ar": "يَتَيَمَّمُ مَنْ فَقَدَ الْمَاءَ بَعْدَ طَلَبِهِ، أَوْ خَافَ بِاسْتِعْمَالِهِ مَرَضًا أَوْ زِيَادَتَهُ أَوْ تَأَخُّرَ بُرْئِهِ. وَلَا يَصِحُّ إِلَّا بِتُرَابٍ طَاهِرٍ لَهُ غُبَارٌ.",
                "es": "Hace tayammum quien no encuentra agua después de buscarla, o teme enfermar, empeorar o tardar en curarse si la usa. Solo vale tierra limpia con polvo."
              },
              {
                "id": "hanbali",
                "ar": "يَتَيَمَّمُ مَنْ عَدِمَ الْمَاءَ، أَوْ خَافَ بِاسْتِعْمَالِهِ ضَرَرًا فِي بَدَنِهِ، أَوْ خَافَ عَطَشًا. وَلَا يَصِحُّ إِلَّا بِتُرَابٍ طَهُورٍ لَهُ غُبَارٌ يَعْلَقُ بِالْيَدِ.",
                "es": "Hace tayammum quien no tiene agua, o teme que usarla le haga daño, o que le falte para beber. Solo vale tierra pura con polvo que se pegue a la mano."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "صِفَةُ التَّيَمُّمِ",
            "titleEs": "Cómo se hace el tayammum",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "١. انْوِ اسْتِبَاحَةَ الصَّلَاةِ، وَقُلْ: بِسْمِ اللَّهِ.\n٢. اضْرِبْ بِكَفَّيْكَ الصَّعِيدَ ضَرْبَةً وَاحِدَةً (فَرْضٌ).\n٣. امْسَحْ وَجْهَكَ كُلَّهُ.\n٤. امْسَحْ يَدَيْكَ إِلَى الْكُوعَيْنِ (فَرْضٌ)، وَإِلَى الْمِرْفَقَيْنِ سُنَّةٌ، وَالضَّرْبَةُ الثَّانِيَةُ لِلْيَدَيْنِ سُنَّةٌ.\nوَمِنْ فَرَائِضِهِ: الْمُوَالَاةُ، وَأَنْ يَكُونَ بَعْدَ دُخُولِ الْوَقْتِ، وَيُبْطِلُهُ مَا يُبْطِلُ الْوُضُوءَ وَوُجُودُ الْمَاءِ قَبْلَ الصَّلَاةِ.",
                "es": "1. Ten la intención de que te sea permitido rezar y di: «Bismillāh».\n2. Golpea la tierra con las palmas una vez (obligatorio).\n3. Pasa las manos por toda la cara.\n4. Pasa las manos por las manos hasta las muñecas (obligatorio); hasta los codos es sunna, y dar un segundo golpe para las manos también es sunna.\nTambién es obligatorio hacerlo seguido y una vez entrado el tiempo de la oración. Lo anula lo mismo que anula el wudu, y encontrar agua antes de empezar a rezar."
              },
              {
                "id": "hanafi",
                "ar": "١. النِّيَّةُ.\n٢. يَضْرِبُ بِيَدَيْهِ الصَّعِيدَ ضَرْبَةً وَيَمْسَحُ بِهِمَا وَجْهَهُ.\n٣. يَضْرِبُ ضَرْبَةً ثَانِيَةً وَيَمْسَحُ يَدَيْهِ إِلَى الْمِرْفَقَيْنِ.\nوَالضَّرْبَتَانِ وَاجِبَتَانِ، وَيَصِحُّ التَّيَمُّمُ قَبْلَ دُخُولِ الْوَقْتِ.",
                "es": "1. La intención.\n2. Golpea la tierra con las manos y se pasa las manos por la cara.\n3. Golpea por segunda vez y se pasa las manos por los brazos hasta los codos.\nLos dos golpes son obligatorios, y el tayammum es válido antes de que entre el tiempo de la oración."
              },
              {
                "id": "shafii",
                "ar": "١. النِّيَّةُ عِنْدَ نَقْلِ التُّرَابِ.\n٢. ضَرْبَةٌ لِلْوَجْهِ يَمْسَحُهُ بِهَا.\n٣. ضَرْبَةٌ ثَانِيَةٌ لِلْيَدَيْنِ يَمْسَحُهُمَا إِلَى الْمِرْفَقَيْنِ.\n٤. التَّرْتِيبُ.\nوَدُخُولُ الْوَقْتِ شَرْطٌ، وَيَتَيَمَّمُ لِكُلِّ فَرِيضَةٍ.",
                "es": "1. La intención, al tomar la tierra.\n2. Un golpe para la cara, que se pasa por ella.\n3. Un segundo golpe para las manos, que se pasan hasta los codos.\n4. El orden.\nQue haya entrado el tiempo es condición, y se hace un tayammum para cada oración obligatoria."
              },
              {
                "id": "hanbali",
                "ar": "١. النِّيَّةُ.\n٢. التَّسْمِيَةُ (وَاجِبَةٌ مَعَ الذِّكْرِ).\n٣. ضَرْبَةٌ وَاحِدَةٌ يَمْسَحُ بِهَا وَجْهَهُ وَكَفَّيْهِ إِلَى الْكُوعَيْنِ.\nوَالتَّرْتِيبُ وَالْمُوَالَاةُ وَاجِبَانِ فِي الْحَدَثِ الْأَصْغَرِ، وَدُخُولُ الْوَقْتِ شَرْطٌ.",
                "es": "1. La intención.\n2. Decir «Bismillāh» (obligatorio si uno se acuerda).\n3. Un solo golpe, con el que se pasa las manos por la cara y por las manos hasta las muñecas.\nEl orden y la continuidad son obligatorios en la impureza menor, y que haya entrado el tiempo es condición."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "الْمَسْحُ عَلَى الْخُفَّيْنِ",
            "titleEs": "Pasar la mano sobre el calzado (masḥ ʿalal-juffayn)",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "يَجُوزُ لِلْمُقِيمِ وَالْمُسَافِرِ الْمَسْحُ عَلَى الْخُفَّيْنِ بَدَلَ غَسْلِ الرِّجْلَيْنِ فِي الْوُضُوءِ، بِشُرُوطٍ: أَنْ يَكُونَا مِنْ جِلْدٍ، طَاهِرَيْنِ، سَاتِرَيْنِ لِمَحَلِّ الْفَرْضِ، يُمْكِنُ تَتَابُعُ الْمَشْيِ بِهِمَا، وَأَنْ يَلْبَسَهُمَا عَلَى طَهَارَةٍ مَائِيَّةٍ كَامِلَةٍ.\nوَصِفَتُهُ: يَضَعُ يَدَهُ الْيُمْنَى عَلَى ظَاهِرِ أَطْرَافِ أَصَابِعِ رِجْلِهِ وَالْيُسْرَى تَحْتَهَا، وَيُمِرُّهُمَا إِلَى الْكَعْبَيْنِ.\nوَلَا تَوْقِيتَ لَهُ فِي الْمَشْهُورِ، وَيُنْدَبُ نَزْعُهُمَا كُلَّ جُمُعَةٍ.",
                "es": "Tanto el residente como el viajero pueden pasar la mano mojada sobre el calzado (juff) en lugar de lavar los pies en el wudu, con estas condiciones: que sea de cuero, limpio, que cubra la zona obligatoria, que permita caminar con él, y que se haya puesto estando en wudu completo hecho con agua.\nForma: se pone la mano derecha sobre la punta del pie y la izquierda por debajo, y se pasan hasta los tobillos.\nSegún la opinión más difundida no tiene límite de tiempo, aunque se recomienda quitárselo cada viernes."
              },
              {
                "id": "hanafi",
                "ar": "يَجُوزُ الْمَسْحُ يَوْمًا وَلَيْلَةً لِلْمُقِيمِ، وَثَلَاثَةَ أَيَّامٍ بِلَيَالِيهَا لِلْمُسَافِرِ، تَبْدَأُ مِنْ أَوَّلِ حَدَثٍ بَعْدَ اللُّبْسِ، بِشَرْطِ أَنْ يَلْبَسَهُمَا عَلَى طَهَارَةٍ كَامِلَةٍ. وَيَجُوزُ عَلَى الْجَوْرَبِ الثَّخِينِ. وَالْفَرْضُ مَسْحُ ظَاهِرِ الْخُفِّ قَدْرَ ثَلَاثِ أَصَابِعَ مِنْ أَصَابِعِ الْيَدِ.",
                "es": "Se permite pasar la mano sobre el calzado un día y una noche al residente, y tres días con sus noches al viajero, contando desde la primera impureza después de ponérselo, con la condición de habérselo puesto en estado de purificación completa. Se permite también sobre calcetines gruesos. Lo obligatorio es pasar sobre la parte de arriba del calzado el ancho de tres dedos de la mano."
              },
              {
                "id": "shafii",
                "ar": "يَجُوزُ الْمَسْحُ يَوْمًا وَلَيْلَةً لِلْمُقِيمِ، وَثَلَاثَةَ أَيَّامٍ بِلَيَالِيهَا لِلْمُسَافِرِ، بِشَرْطِ أَنْ يَلْبَسَهُ عَلَى طَهَارَةٍ كَامِلَةٍ، وَأَنْ يَكُونَ سَاتِرًا قَوِيًّا يُمْكِنُ الْمَشْيُ فِيهِ. وَالْوَاجِبُ مَسْحُ شَيْءٍ مِنْ ظَاهِرِ أَعْلَاهُ، وَالسُّنَّةُ مَسْحُ أَعْلَاهُ وَأَسْفَلِهِ خُطُوطًا.",
                "es": "Se permite pasar la mano sobre el calzado un día y una noche al residente, y tres días con sus noches al viajero, si se lo puso en estado de purificación completa y es resistente, cubre y permite caminar. Lo obligatorio es pasar la mano por una parte de la cara superior; la sunna es pasarla por arriba y por abajo, en líneas."
              },
              {
                "id": "hanbali",
                "ar": "يَجُوزُ الْمَسْحُ يَوْمًا وَلَيْلَةً لِلْمُقِيمِ، وَثَلَاثَةَ أَيَّامٍ بِلَيَالِيهَا لِلْمُسَافِرِ، بِشَرْطِ اللُّبْسِ عَلَى طَهَارَةٍ كَامِلَةٍ. وَيَجُوزُ عَلَى الْجَوَارِبِ الصَّفِيقَةِ وَعَلَى الْعِمَامَةِ. وَالْوَاجِبُ مَسْحُ أَكْثَرِ أَعْلَى الْخُفِّ، وَلَا يُسَنُّ مَسْحُ أَسْفَلِهِ.",
                "es": "Se permite pasar la mano sobre el calzado un día y una noche al residente, y tres días con sus noches al viajero, si se lo puso en estado de purificación completa. Se permite también sobre calcetines gruesos y sobre el turbante. Lo obligatorio es pasar la mano por la mayor parte de la cara superior; no es sunna pasarla por debajo."
              }
            ]
          }
        ]
      },
      {
        "id": "guia_shurut",
        "titleAr": "شُرُوطُ الصَّلَاةِ وَفَرَائِضُهَا",
        "titleEs": "Condiciones y pilares de la oración",
        "items": [
          {
            "isInfo": true,
            "text": "شُرُوطُ الصَّلَاةِ",
            "titleEs": "Condiciones de la oración",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "• شُرُوطُ الْوُجُوبِ: الْإِسْلَامُ، الْبُلُوغُ، الْعَقْلُ، دُخُولُ الْوَقْتِ، النَّقَاءُ مِنَ الْحَيْضِ وَالنِّفَاسِ.\n• شُرُوطُ الصِّحَّةِ: الطَّهَارَةُ مِنَ الْحَدَثِ، الطَّهَارَةُ مِنَ النَّجَاسَةِ فِي الْبَدَنِ وَالثَّوْبِ وَالْمَكَانِ (مَعَ الذِّكْرِ وَالْقُدْرَةِ)، سَتْرُ الْعَوْرَةِ، اسْتِقْبَالُ الْقِبْلَةِ.\n• الْعَوْرَةُ فِي الصَّلَاةِ: لِلرَّجُلِ مِنَ السُّرَّةِ إِلَى الرُّكْبَةِ، وَلِلْمَرْأَةِ جَمِيعُ بَدَنِهَا إِلَّا الْوَجْهَ وَالْكَفَّيْنِ.",
                "es": "• Condiciones para que sea obligatoria: ser musulmán, haber alcanzado la pubertad, estar en uso de razón, que haya entrado su tiempo y, en la mujer, no estar con la menstruación ni el sangrado posparto.\n• Condiciones de validez: estar purificado (wudu o ghusl); que el cuerpo, la ropa y el lugar estén limpios de impureza (si uno se acuerda y puede); cubrir la ʿawra; y orientarse hacia la qibla.\n• La ʿawra en la oración: para el hombre, del ombligo a las rodillas; para la mujer, todo el cuerpo salvo la cara y las manos."
              },
              {
                "id": "hanafi",
                "ar": "• شُرُوطُ الصِّحَّةِ: الطَّهَارَةُ مِنَ الْحَدَثِ، وَالطَّهَارَةُ مِنَ النَّجَاسَةِ فِي الْبَدَنِ وَالثَّوْبِ وَالْمَكَانِ، وَسَتْرُ الْعَوْرَةِ، وَاسْتِقْبَالُ الْقِبْلَةِ، وَدُخُولُ الْوَقْتِ، وَالنِّيَّةُ، وَتَكْبِيرَةُ الْإِحْرَامِ.\n• عَوْرَةُ الرَّجُلِ: مِنَ السُّرَّةِ إِلَى الرُّكْبَةِ، وَالرُّكْبَةُ مِنَ الْعَوْرَةِ.\n• عَوْرَةُ الْمَرْأَةِ: جَمِيعُ بَدَنِهَا إِلَّا الْوَجْهَ وَالْكَفَّيْنِ وَالْقَدَمَيْنِ.",
                "es": "• Condiciones de validez: estar purificado; que el cuerpo, la ropa y el lugar estén limpios de impureza; cubrir la ʿawra; orientarse a la qibla; que haya entrado el tiempo; la intención; y el takbīr de entrada.\n• ʿAwra del hombre: del ombligo a las rodillas, rodillas incluidas.\n• ʿAwra de la mujer: todo el cuerpo salvo la cara, las manos y los pies."
              },
              {
                "id": "shafii",
                "ar": "• شُرُوطُ الصِّحَّةِ: الطَّهَارَةُ مِنَ الْحَدَثِ، وَالطَّهَارَةُ مِنَ النَّجَاسَةِ فِي الْبَدَنِ وَالثَّوْبِ وَالْمَكَانِ، وَسَتْرُ الْعَوْرَةِ، وَاسْتِقْبَالُ الْقِبْلَةِ، وَمَعْرِفَةُ دُخُولِ الْوَقْتِ.\n• عَوْرَةُ الرَّجُلِ: مَا بَيْنَ السُّرَّةِ وَالرُّكْبَةِ.\n• عَوْرَةُ الْمَرْأَةِ: جَمِيعُ بَدَنِهَا إِلَّا الْوَجْهَ وَالْكَفَّيْنِ.",
                "es": "• Condiciones de validez: estar purificado; que el cuerpo, la ropa y el lugar estén limpios de impureza; cubrir la ʿawra; orientarse a la qibla; y saber que ha entrado el tiempo.\n• ʿAwra del hombre: lo que hay entre el ombligo y las rodillas.\n• ʿAwra de la mujer: todo el cuerpo salvo la cara y las manos."
              },
              {
                "id": "hanbali",
                "ar": "• شُرُوطُ الصِّحَّةِ: الْإِسْلَامُ، وَالْعَقْلُ، وَالتَّمْيِيزُ، وَالطَّهَارَةُ مِنَ الْحَدَثِ، وَدُخُولُ الْوَقْتِ، وَسَتْرُ الْعَوْرَةِ، وَاجْتِنَابُ النَّجَاسَةِ، وَاسْتِقْبَالُ الْقِبْلَةِ، وَالنِّيَّةُ.\n• عَوْرَةُ الرَّجُلِ: مَا بَيْنَ السُّرَّةِ وَالرُّكْبَةِ.\n• عَوْرَةُ الْمَرْأَةِ فِي الصَّلَاةِ: جَمِيعُ بَدَنِهَا إِلَّا وَجْهَهَا.",
                "es": "• Condiciones de validez: ser musulmán, estar en uso de razón, tener discernimiento, estar purificado, que haya entrado el tiempo, cubrir la ʿawra, evitar la impureza, orientarse a la qibla y la intención.\n• ʿAwra del hombre: lo que hay entre el ombligo y las rodillas.\n• ʿAwra de la mujer en la oración: todo el cuerpo salvo la cara."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "فَرَائِضُ الصَّلَاةِ",
            "titleEs": "Pilares (obligatorios) de la oración",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "١. النِّيَّةُ.\n٢. تَكْبِيرَةُ الْإِحْرَامِ.\n٣. الْقِيَامُ لَهَا.\n٤. قِرَاءَةُ الْفَاتِحَةِ.\n٥. الْقِيَامُ لَهَا.\n٦. الرُّكُوعُ.\n٧. الرَّفْعُ مِنْهُ.\n٨. السُّجُودُ عَلَى الْجَبْهَةِ.\n٩. الرَّفْعُ مِنْهُ.\n١٠. السَّلَامُ.\n١١. الْجُلُوسُ لِلسَّلَامِ.\n١٢. الطُّمَأْنِينَةُ.\n١٣. الِاعْتِدَالُ.\n١٤. تَرْتِيبُ الْأَدَاءِ.\n١٥. نِيَّةُ الِاقْتِدَاءِ لِلْمَأْمُومِ.",
                "es": "1. La intención.\n2. El takbīr de entrada («Allāhu akbar»).\n3. Estar de pie al decirlo.\n4. Recitar Al-Fātiḥa.\n5. Estar de pie al recitarla.\n6. La inclinación (rukūʿ).\n7. Incorporarse de ella.\n8. La postración (suŷūd) con la frente en el suelo.\n9. Incorporarse de ella.\n10. El saludo final (salām).\n11. Estar sentado para el salām.\n12. Hacer cada postura con calma (ṭumaʾnīna).\n13. Quedarse recto al incorporarse (iʿtidāl).\n14. Respetar el orden de los actos.\n15. Para quien reza detrás de un imam: tener la intención de seguirle."
              },
              {
                "id": "hanafi",
                "ar": "الْفَرَائِضُ: التَّحْرِيمَةُ (وَهِيَ شَرْطٌ)، الْقِيَامُ، الْقِرَاءَةُ وَلَوْ آيَةً، الرُّكُوعُ، السُّجُودُ، الْقُعُودُ الْأَخِيرُ قَدْرَ التَّشَهُّدِ، وَالْخُرُوجُ مِنَ الصَّلَاةِ بِفِعْلِ الْمُصَلِّي.\nوَمِنَ الْوَاجِبَاتِ: قِرَاءَةُ الْفَاتِحَةِ، وَضَمُّ سُورَةٍ، وَالطُّمَأْنِينَةُ، وَالتَّشَهُّدَانِ، وَلَفْظُ السَّلَامِ، وَالْقُنُوتُ فِي الْوِتْرِ.\nوَالْمَأْمُومُ لَا يَقْرَأُ خَلْفَ الْإِمَامِ.",
                "es": "Obligatorio (farḍ): el takbīr de entrada (que es condición), estar de pie, recitar aunque sea una aleya, la inclinación, la postración, la última sentada el tiempo del tashahhud y salir de la oración por un acto propio.\nWāŷib: recitar Al-Fātiḥa, añadir una sura, la calma en cada postura, los dos tashahhud, la palabra «salām» y el qunūt del witr.\nQuien reza detrás del imam no recita."
              },
              {
                "id": "shafii",
                "ar": "الْأَرْكَانُ: النِّيَّةُ، تَكْبِيرَةُ الْإِحْرَامِ، الْقِيَامُ، قِرَاءَةُ الْفَاتِحَةِ (عَلَى كُلِّ مُصَلٍّ حَتَّى الْمَأْمُومِ)، الرُّكُوعُ، الِاعْتِدَالُ، السُّجُودُ مَرَّتَيْنِ، الْجُلُوسُ بَيْنَ السَّجْدَتَيْنِ، الطُّمَأْنِينَةُ فِي ذَلِكَ كُلِّهِ، التَّشَهُّدُ الْأَخِيرُ، الْقُعُودُ لَهُ، الصَّلَاةُ عَلَى النَّبِيِّ ﷺ فِيهِ، التَّسْلِيمَةُ الْأُولَى، وَالتَّرْتِيبُ.",
                "es": "Pilares: la intención, el takbīr de entrada, estar de pie, recitar Al-Fātiḥa (todo el que reza, también detrás del imam), la inclinación, quedarse recto al incorporarse, las dos postraciones, sentarse entre ellas, la calma en todo ello, el último tashahhud, estar sentado para él, las bendiciones por el Profeta ﷺ en él, el primer saludo y el orden."
              },
              {
                "id": "hanbali",
                "ar": "الْأَرْكَانُ أَرْبَعَةَ عَشَرَ: الْقِيَامُ، تَكْبِيرَةُ الْإِحْرَامِ، قِرَاءَةُ الْفَاتِحَةِ (وَيَتَحَمَّلُهَا الْإِمَامُ عَنِ الْمَأْمُومِ)، الرُّكُوعُ، الرَّفْعُ مِنْهُ، الِاعْتِدَالُ، السُّجُودُ عَلَى الْأَعْضَاءِ السَّبْعَةِ، الرَّفْعُ مِنْهُ، الْجُلُوسُ بَيْنَ السَّجْدَتَيْنِ، الطُّمَأْنِينَةُ، التَّشَهُّدُ الْأَخِيرُ، الْجُلُوسُ لَهُ، الصَّلَاةُ عَلَى النَّبِيِّ ﷺ فِيهِ، التَّسْلِيمَتَانِ، وَالتَّرْتِيبُ.",
                "es": "Catorce pilares: estar de pie, el takbīr de entrada, recitar Al-Fātiḥa (el imam la carga por quien reza detrás), la inclinación, incorporarse, quedarse recto, la postración sobre los siete miembros, incorporarse de ella, sentarse entre las dos postraciones, la calma, el último tashahhud, estar sentado para él, las bendiciones por el Profeta ﷺ en él, los dos saludos y el orden."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "سُنَنُ الصَّلَاةِ الْمُؤَكَّدَةُ",
            "titleEs": "Sunnas confirmadas de la oración",
            "explanationAr": "قِرَاءَةُ سُورَةٍ بَعْدَ الْفَاتِحَةِ فِي الرَّكْعَتَيْنِ الْأُولَيَيْنِ، وَالْقِيَامُ لَهَا، وَالْجَهْرُ فِيمَا يُجْهَرُ فِيهِ، وَالسِّرُّ فِيمَا يُسَرُّ فِيهِ، وَكُلُّ تَكْبِيرَةٍ غَيْرَ تَكْبِيرَةِ الْإِحْرَامِ، وَ«سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ» لِلْإِمَامِ وَالْفَذِّ، وَالتَّشَهُّدَانِ، وَالْجُلُوسُ لَهُمَا، وَالصَّلَاةُ عَلَى النَّبِيِّ ﷺ فِي التَّشَهُّدِ الْأَخِيرِ، وَالسُّجُودُ عَلَى الْأَنْفِ وَالرُّكْبَتَيْنِ وَأَطْرَافِ الْقَدَمَيْنِ، وَرَدُّ الْمَأْمُومِ السَّلَامَ عَلَى إِمَامِهِ.",
            "explanationEs": "Recitar una sura después de Al-Fātiḥa en las dos primeras rakʿas y estar de pie para ello; recitar en voz alta donde corresponde y en voz baja donde corresponde; todos los takbīr salvo el de entrada; decir «Samiʿallāhu liman ḥamidah» (el imam y quien reza solo); los dos tashahhud y estar sentado para ellos; la oración sobre el Profeta ﷺ en el último tashahhud; apoyar en la postración la nariz, las rodillas y las puntas de los pies; y que quien reza detrás del imam le devuelva el saludo."
          }
        ]
      },
      {
        "id": "guia_sifa",
        "titleAr": "صِفَةُ الصَّلَاةِ خُطْوَةً خُطْوَةً",
        "titleEs": "La oración paso a paso",
        "items": [
          {
            "isInfo": true,
            "text": "النِّيَّةُ",
            "titleEs": "La intención",
            "note": "الْخُطْوَةُ ١",
            "noteEs": "Paso 1",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "اسْتَقْبِلِ الْقِبْلَةَ، وَانْوِ بِقَلْبِكَ الصَّلَاةَ الْمُعَيَّنَةَ (الصُّبْحَ مَثَلًا). مَحَلُّ النِّيَّةِ الْقَلْبُ، وَالْأَوْلَى عِنْدَ الْمَالِكِيَّةِ تَرْكُ التَّلَفُّظِ بِهَا إِلَّا لِلْمُوَسْوِسِ.",
                "es": "Oriéntate hacia la qibla y ten en el corazón la intención de la oración concreta (por ejemplo, el Fajr). La intención está en el corazón; para los malikíes es preferible no pronunciarla en voz alta, salvo para quien sufre dudas obsesivas."
              },
              {
                "id": "hanafi",
                "ar": "النِّيَّةُ شَرْطٌ مَحَلُّهَا الْقَلْبُ: أَنْ يَعْلَمَ بِقَلْبِهِ أَيَّ صَلَاةٍ يُصَلِّي. وَاسْتَحْسَنَ بَعْضُ الْحَنَفِيَّةِ التَّلَفُّظَ بِهَا لِجَمْعِ الْقَلْبِ.",
                "es": "La intención es condición y está en el corazón: saber en el corazón qué oración se reza. Algunos hanafíes aprobaron pronunciarla para concentrarse."
              },
              {
                "id": "shafii",
                "ar": "النِّيَّةُ رُكْنٌ بِالْقَلْبِ، تَكُونُ مُقَارِنَةً لِتَكْبِيرَةِ الْإِحْرَامِ، وَيُعَيِّنُ فِيهَا الصَّلَاةَ وَأَنَّهَا فَرْضٌ. وَيُسْتَحَبُّ التَّلَفُّظُ بِهَا قَبْلَ التَّكْبِيرِ لِيُسَاعِدَ اللِّسَانُ الْقَلْبَ.",
                "es": "La intención es un pilar que está en el corazón; debe acompañar al takbīr de entrada e indicar qué oración es y que es obligatoria. Es recomendable pronunciarla antes del takbīr para que la lengua ayude al corazón."
              },
              {
                "id": "hanbali",
                "ar": "النِّيَّةُ شَرْطٌ مَحَلُّهَا الْقَلْبُ، يُعَيِّنُ فِيهَا الصَّلَاةَ. وَاسْتَحَبَّ بَعْضُ الْمُتَأَخِّرِينَ التَّلَفُّظَ بِهَا سِرًّا، وَالْمُحَقِّقُونَ عَلَى أَنَّهُ لَمْ يَرِدْ عَنِ النَّبِيِّ ﷺ.",
                "es": "La intención es condición y está en el corazón, indicando qué oración es. Algunos hanbalíes posteriores recomendaron pronunciarla en voz baja; los sabios que verificaron la cuestión señalan que no está transmitido del Profeta ﷺ."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "تَكْبِيرَةُ الْإِحْرَامِ: اللَّهُ أَكْبَرُ",
            "titleEs": "El takbīr de entrada: «Allāhu akbar»",
            "note": "الْخُطْوَةُ ٢",
            "noteEs": "Paso 2",
            "latin": "Allāhu akbar.",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "قِفْ مُعْتَدِلًا، وَقُلْ: «اللَّهُ أَكْبَرُ» رَافِعًا يَدَيْكَ حَذْوَ مَنْكِبَيْكَ أَوْ دُونَ ذَلِكَ، وَبُطُونُهُمَا إِلَى الْأَرْضِ. وَلَا يُجْزِئُ غَيْرُ هَذَا اللَّفْظِ.",
                "es": "Ponte de pie y di «Allāhu akbar» (Allah es el más Grande), levantando las manos a la altura de los hombros o algo menos, con las palmas hacia el suelo. No sirve otra fórmula."
              },
              {
                "id": "hanafi",
                "ar": "يَقُولُ: «اللَّهُ أَكْبَرُ»، وَيَرْفَعُ الرَّجُلُ يَدَيْهِ حَتَّى يُحَاذِيَ بِإِبْهَامَيْهِ شَحْمَتَيْ أُذُنَيْهِ، وَالْمَرْأَةُ إِلَى مَنْكِبَيْهَا. وَلَا يَرْفَعُ يَدَيْهِ إِلَّا فِي تَكْبِيرَةِ الْإِحْرَامِ.",
                "es": "Dice «Allāhu akbar». El hombre levanta las manos hasta que los pulgares quedan a la altura del lóbulo de las orejas; la mujer, hasta los hombros. Solo se levantan las manos en el takbīr de entrada."
              },
              {
                "id": "shafii",
                "ar": "يَقُولُ: «اللَّهُ أَكْبَرُ» رَافِعًا يَدَيْهِ حَذْوَ مَنْكِبَيْهِ. وَيُسَنُّ رَفْعُهُمَا أَيْضًا عِنْدَ الرُّكُوعِ، وَعِنْدَ الرَّفْعِ مِنْهُ، وَعِنْدَ الْقِيَامِ مِنَ التَّشَهُّدِ الْأَوَّلِ.",
                "es": "Dice «Allāhu akbar» levantando las manos a la altura de los hombros. También es sunna levantarlas al inclinarse, al incorporarse de la inclinación y al levantarse del primer tashahhud."
              },
              {
                "id": "hanbali",
                "ar": "يَقُولُ: «اللَّهُ أَكْبَرُ» رَافِعًا يَدَيْهِ حَذْوَ مَنْكِبَيْهِ أَوْ إِلَى فُرُوعِ أُذُنَيْهِ. وَيُسَنُّ رَفْعُهُمَا أَيْضًا عِنْدَ الرُّكُوعِ وَعِنْدَ الرَّفْعِ مِنْهُ.",
                "es": "Dice «Allāhu akbar» levantando las manos a la altura de los hombros o de la parte alta de las orejas. También es sunna levantarlas al inclinarse y al incorporarse de la inclinación."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "الْقِيَامُ وَوَضْعُ الْيَدَيْنِ",
            "titleEs": "De pie: la posición de las manos",
            "note": "الْخُطْوَةُ ٣",
            "noteEs": "Paso 3",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "الْمَشْهُورُ فِي الْمَذْهَبِ: إِرْسَالُ الْيَدَيْنِ (السَّدْلُ) فِي الْفَرِيضَةِ، وَيَجُوزُ الْقَبْضُ فِي النَّافِلَةِ. وَرَوَى مَالِكٌ فِي الْمُوَطَّإِ حَدِيثَ وَضْعِ الْيُمْنَى عَلَى الْيُسْرَى، وَقَالَ بِهِ جَمَاعَةٌ مِنَ الْمَالِكِيَّةِ فِي الْفَرْضِ أَيْضًا. وَانْظُرْ إِلَى مَوْضِعِ سُجُودِكَ.",
                "es": "Lo más difundido en la escuela es dejar los brazos sueltos a los lados (sadl) en la oración obligatoria; en la voluntaria se permite cogerlos. Mālik transmitió en Al-Muwaṭṭaʾ el hadiz de poner la mano derecha sobre la izquierda, y un grupo de malikíes lo sostiene también en la obligatoria. Mira al lugar donde te vas a postrar."
              },
              {
                "id": "hanafi",
                "ar": "يَضَعُ الرَّجُلُ يَدَهُ الْيُمْنَى عَلَى الْيُسْرَى تَحْتَ السُّرَّةِ، وَالْمَرْأَةُ عَلَى صَدْرِهَا، وَيَنْظُرُ إِلَى مَوْضِعِ سُجُودِهِ.",
                "es": "El hombre pone la mano derecha sobre la izquierda bajo el ombligo, y la mujer sobre el pecho. Mira al lugar donde se va a postrar."
              },
              {
                "id": "shafii",
                "ar": "يَضَعُ يَدَهُ الْيُمْنَى عَلَى الْيُسْرَى تَحْتَ الصَّدْرِ فَوْقَ السُّرَّةِ، وَيَنْظُرُ إِلَى مَوْضِعِ سُجُودِهِ.",
                "es": "Pone la mano derecha sobre la izquierda bajo el pecho, por encima del ombligo, y mira al lugar donde se va a postrar."
              },
              {
                "id": "hanbali",
                "ar": "يَضَعُ يَدَهُ الْيُمْنَى عَلَى كُوعِ الْيُسْرَى تَحْتَ سُرَّتِهِ، وَيَنْظُرُ إِلَى مَوْضِعِ سُجُودِهِ.",
                "es": "Pone la mano derecha sobre la muñeca izquierda bajo el ombligo, y mira al lugar donde se va a postrar."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "الْقِرَاءَةُ: الْفَاتِحَةُ ثُمَّ سُورَةٌ",
            "titleEs": "La recitación: Al-Fātiḥa y una sura",
            "note": "الْخُطْوَةُ ٤",
            "noteEs": "Paso 4",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "اقْرَأِ الْفَاتِحَةَ مُبَاشَرَةً بَعْدَ التَّكْبِيرِ، ثُمَّ سُورَةً أَوْ مَا تَيَسَّرَ فِي الرَّكْعَتَيْنِ الْأُولَيَيْنِ. اجْهَرْ فِي الصُّبْحِ وَالْأُولَيَيْنِ مِنَ الْمَغْرِبِ وَالْعِشَاءِ، وَأَسِرَّ فِي الظُّهْرِ وَالْعَصْرِ وَالْبَاقِي.\nلَا يُسْتَحَبُّ فِي الْفَرِيضَةِ عِنْدَ الْمَالِكِيَّةِ دُعَاءُ الِاسْتِفْتَاحِ وَلَا التَّعَوُّذُ وَلَا الْبَسْمَلَةُ (وَيَجُوزُ ذَلِكَ فِي النَّافِلَةِ)، وَخُرُوجًا مِنَ الْخِلَافِ اسْتَحَبَّ بَعْضُهُمْ الْبَسْمَلَةَ سِرًّا.\nآمِينَ: يَقُولُهَا الْفَذُّ وَالْمَأْمُومُ، وَالْإِمَامُ فِي السِّرِّيَّةِ، وَيُسِرُّونَ بِهَا.",
                "es": "Recita Al-Fātiḥa justo después del takbīr, y después una sura o lo que puedas en las dos primeras rakʿas. Recita en voz alta en el Fajr y en las dos primeras del Maghrib y del ʿIshāʾ; en voz baja en el Ẓuhr, el ʿAṣr y el resto.\nEn la oración obligatoria los malikíes no recomiendan la súplica de apertura, ni el taʿawwudh, ni la basmala (en la voluntaria se permiten); para salir de la diferencia de opiniones, algunos recomiendan decir la basmala en voz baja.\n«Āmīn»: lo dicen quien reza solo y quien reza detrás del imam, y el imam en las oraciones en voz baja; se dice en voz baja."
              },
              {
                "id": "hanafi",
                "ar": "يَسْتَفْتِحُ: «سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ»، ثُمَّ يَتَعَوَّذُ، وَيُبَسْمِلُ سِرًّا، وَيَقْرَأُ الْفَاتِحَةَ وَسُورَةً فِي الْأُولَيَيْنِ، وَالْفَاتِحَةَ فِي الْأُخْرَيَيْنِ. يَقُولُ الْإِمَامُ وَالْمَأْمُومُ: «آمِينَ» سِرًّا. وَالْمَأْمُومُ لَا يَقْرَأُ خَلْفَ الْإِمَامِ.",
                "es": "Hace la súplica de apertura: «Subḥānaka-llāhumma wa bi-ḥamdik, wa tabāraka-smuk, wa taʿālā ŷadduk, wa lā ilāha ghayruk»; luego el taʿawwudh y la basmala en voz baja, y recita Al-Fātiḥa y una sura en las dos primeras rakʿas, y Al-Fātiḥa en las dos últimas. El imam y quien le sigue dicen «Āmīn» en voz baja. Quien reza detrás del imam no recita."
              },
              {
                "id": "shafii",
                "ar": "يَسْتَفْتِحُ: «وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ…»، ثُمَّ يَتَعَوَّذُ سِرًّا، ثُمَّ يَقْرَأُ الْفَاتِحَةَ، وَالْبَسْمَلَةُ آيَةٌ مِنْهَا يَجْهَرُ بِهَا فِي الْجَهْرِيَّةِ، ثُمَّ سُورَةً فِي الْأُولَيَيْنِ. يَجْهَرُ الْإِمَامُ وَالْمَأْمُومُ بِـ«آمِينَ» فِي الْجَهْرِيَّةِ. وَالْمَأْمُومُ يَقْرَأُ الْفَاتِحَةَ وُجُوبًا.",
                "es": "Hace la súplica de apertura: «Waŷŷahtu waŷhiya lil-ladhī faṭaras-samāwāti wal-arḍ…»; luego el taʿawwudh en voz baja, y recita Al-Fātiḥa, de la que la basmala es una aleya y se dice en voz alta en las oraciones en voz alta; después una sura en las dos primeras rakʿas. El imam y quien le sigue dicen «Āmīn» en voz alta en las oraciones en voz alta. Quien reza detrás del imam debe recitar Al-Fātiḥa."
              },
              {
                "id": "hanbali",
                "ar": "يَسْتَفْتِحُ: «سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ…»، ثُمَّ يَتَعَوَّذُ، وَيُبَسْمِلُ سِرًّا، ثُمَّ يَقْرَأُ الْفَاتِحَةَ وَسُورَةً فِي الْأُولَيَيْنِ. يَجْهَرُ الْإِمَامُ وَالْمَأْمُومُ بِـ«آمِينَ» فِي الْجَهْرِيَّةِ. وَيُسْتَحَبُّ لِلْمَأْمُومِ أَنْ يَقْرَأَ فِي سَكَتَاتِ الْإِمَامِ وَفِي السِّرِّيَّةِ.",
                "es": "Hace la súplica de apertura: «Subḥānaka-llāhumma wa bi-ḥamdik…»; luego el taʿawwudh y la basmala en voz baja, y recita Al-Fātiḥa y una sura en las dos primeras rakʿas. El imam y quien le sigue dicen «Āmīn» en voz alta en las oraciones en voz alta. A quien reza detrás del imam se le recomienda recitar en las pausas del imam y en las oraciones en voz baja."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "الرُّكُوعُ: سُبْحَانَ رَبِّيَ الْعَظِيمِ",
            "titleEs": "La inclinación (rukūʿ)",
            "note": "الْخُطْوَةُ ٥",
            "noteEs": "Paso 5",
            "latin": "Subḥāna Rabbiyal-ʿAẓīm.",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "كَبِّرْ وَارْكَعْ: ضَعْ يَدَيْكَ عَلَى رُكْبَتَيْكَ، وَسَوِّ ظَهْرَكَ، وَاطْمَئِنَّ. وَيُسْتَحَبُّ أَنْ تَقُولَ: «سُبْحَانَ رَبِّيَ الْعَظِيمِ»، وَلَا حَدَّ لِعَدَدِهِ عِنْدَ الْمَالِكِيَّةِ.",
                "es": "Di «Allāhu akbar» e inclínate: pon las manos sobre las rodillas, deja la espalda recta y quédate tranquilo. Se recomienda decir «Subḥāna Rabbiyal-ʿAẓīm» (Glorificado sea mi Señor, el Grandioso); para los malikíes no hay un número fijo."
              },
              {
                "id": "hanafi",
                "ar": "يُكَبِّرُ وَيَرْكَعُ بِلَا رَفْعٍ لِلْيَدَيْنِ، وَيَضَعُ يَدَيْهِ عَلَى رُكْبَتَيْهِ مُفَرِّجًا أَصَابِعَهُ، وَيَقُولُ: «سُبْحَانَ رَبِّيَ الْعَظِيمِ» ثَلَاثًا، وَهُوَ سُنَّةٌ. وَالطُّمَأْنِينَةُ وَاجِبَةٌ.",
                "es": "Dice «Allāhu akbar» y se inclina sin levantar las manos; pone las manos sobre las rodillas con los dedos separados y dice «Subḥāna Rabbiyal-ʿAẓīm» tres veces, lo cual es sunna. La calma es wāŷib."
              },
              {
                "id": "shafii",
                "ar": "يَرْفَعُ يَدَيْهِ مُكَبِّرًا وَيَرْكَعُ، وَيَضَعُ يَدَيْهِ عَلَى رُكْبَتَيْهِ، وَيَقُولُ: «سُبْحَانَ رَبِّيَ الْعَظِيمِ» ثَلَاثًا، وَهُوَ سُنَّةٌ. وَالطُّمَأْنِينَةُ رُكْنٌ.",
                "es": "Levanta las manos diciendo «Allāhu akbar» y se inclina; pone las manos sobre las rodillas y dice «Subḥāna Rabbiyal-ʿAẓīm» tres veces, lo cual es sunna. La calma es pilar."
              },
              {
                "id": "hanbali",
                "ar": "يَرْفَعُ يَدَيْهِ مُكَبِّرًا وَيَرْكَعُ، وَيَقُولُ: «سُبْحَانَ رَبِّيَ الْعَظِيمِ»، وَالْمَرَّةُ الْوَاحِدَةُ وَاجِبَةٌ، وَأَدْنَى الْكَمَالِ ثَلَاثٌ. وَالطُّمَأْنِينَةُ رُكْنٌ.",
                "es": "Levanta las manos diciendo «Allāhu akbar» y se inclina, y dice «Subḥāna Rabbiyal-ʿAẓīm»; decirlo una vez es wāŷib y lo mínimo recomendable son tres. La calma es pilar."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "الرَّفْعُ: سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ",
            "titleEs": "Incorporarse de la inclinación",
            "note": "الْخُطْوَةُ ٦",
            "noteEs": "Paso 6",
            "latin": "Samiʿallāhu liman ḥamidah. Rabbanā wa lakal-ḥamd.",
            "explanationAr": "ارْفَعْ رَأْسَكَ قَائِلًا: «سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ» (الْإِمَامُ وَالْفَذُّ)، وَيَقُولُ الْمَأْمُومُ وَالْفَذُّ: «رَبَّنَا وَلَكَ الْحَمْدُ». وَاعْتَدِلْ قَائِمًا وَاطْمَئِنَّ.",
            "explanationEs": "Incorpórate diciendo «Samiʿallāhu liman ḥamidah» (Allah oye a quien Le alaba) si eres imam o rezas solo; quien reza detrás del imam, y también quien reza solo, dice «Rabbanā wa lakal-ḥamd» (Señor nuestro, Tuya es la alabanza). Quédate de pie, recto y tranquilo."
          },
          {
            "isInfo": true,
            "text": "السُّجُودُ: سُبْحَانَ رَبِّيَ الْأَعْلَى",
            "titleEs": "La postración (suŷūd)",
            "note": "الْخُطْوَةُ ٧",
            "noteEs": "Paso 7",
            "latin": "Subḥāna Rabbiyal-Aʿlā.",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "كَبِّرْ وَاسْجُدْ عَلَى جَبْهَتِكَ وَأَنْفِكَ وَيَدَيْكَ وَرُكْبَتَيْكَ وَأَطْرَافِ قَدَمَيْكَ، وَيُسْتَحَبُّ تَقْدِيمُ الْيَدَيْنِ قَبْلَ الرُّكْبَتَيْنِ. جَافِ مِرْفَقَيْكَ عَنْ جَنْبَيْكَ (لِلرَّجُلِ)، وَاطْمَئِنَّ. قُلْ: «سُبْحَانَ رَبِّيَ الْأَعْلَى»، وَادْعُ بِمَا شِئْتَ؛ فَإِنَّ «أَقْرَبَ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ» (مسلم).",
                "es": "Di «Allāhu akbar» y póstrate sobre la frente, la nariz, las manos, las rodillas y las puntas de los pies; se recomienda apoyar las manos antes que las rodillas. El hombre separa los codos del cuerpo; quédate tranquilo. Di «Subḥāna Rabbiyal-Aʿlā» (Glorificado sea mi Señor, el Altísimo) y suplica lo que quieras, pues «el momento en que el siervo está más cerca de su Señor es cuando está postrado» (Muslim)."
              },
              {
                "id": "hanafi",
                "ar": "يُكَبِّرُ وَيَنْزِلُ بِرُكْبَتَيْهِ ثُمَّ يَدَيْهِ، وَيَسْجُدُ عَلَى جَبْهَتِهِ وَأَنْفِهِ، وَيَقُولُ: «سُبْحَانَ رَبِّيَ الْأَعْلَى» ثَلَاثًا، وَهُوَ سُنَّةٌ.",
                "es": "Dice «Allāhu akbar» y baja apoyando primero las rodillas y luego las manos; se postra sobre la frente y la nariz, y dice «Subḥāna Rabbiyal-Aʿlā» tres veces, lo cual es sunna."
              },
              {
                "id": "shafii",
                "ar": "يُكَبِّرُ وَيَنْزِلُ بِرُكْبَتَيْهِ ثُمَّ يَدَيْهِ، وَيَسْجُدُ عَلَى الْأَعْضَاءِ السَّبْعَةِ وُجُوبًا وَالْجَبْهَةُ مَكْشُوفَةٌ، وَيَقُولُ: «سُبْحَانَ رَبِّيَ الْأَعْلَى» ثَلَاثًا، وَهُوَ سُنَّةٌ.",
                "es": "Dice «Allāhu akbar» y baja apoyando primero las rodillas y luego las manos; postrarse sobre los siete miembros es obligatorio, con la frente descubierta, y dice «Subḥāna Rabbiyal-Aʿlā» tres veces, lo cual es sunna."
              },
              {
                "id": "hanbali",
                "ar": "يُكَبِّرُ وَيَنْزِلُ بِرُكْبَتَيْهِ ثُمَّ يَدَيْهِ، وَالسُّجُودُ عَلَى الْأَعْضَاءِ السَّبْعَةِ مَعَ الْأَنْفِ رُكْنٌ، وَيَقُولُ: «سُبْحَانَ رَبِّيَ الْأَعْلَى»، وَالْمَرَّةُ الْوَاحِدَةُ وَاجِبَةٌ.",
                "es": "Dice «Allāhu akbar» y baja apoyando primero las rodillas y luego las manos; postrarse sobre los siete miembros y la nariz es pilar, y dice «Subḥāna Rabbiyal-Aʿlā»: decirlo una vez es wāŷib."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "الْجُلُوسُ بَيْنَ السَّجْدَتَيْنِ: رَبِّ اغْفِرْ لِي",
            "titleEs": "Sentado entre las dos postraciones",
            "note": "الْخُطْوَةُ ٨",
            "noteEs": "Paso 8",
            "latin": "Rabbigh-fir lī.",
            "explanationAr": "كَبِّرْ وَارْفَعْ مِنَ السُّجُودِ، وَاجْلِسْ مُطْمَئِنًّا، وَقُلْ: «رَبِّ اغْفِرْ لِي، وَارْحَمْنِي…». ثُمَّ كَبِّرْ وَاسْجُدِ السَّجْدَةَ الثَّانِيَةَ كَالْأُولَى، ثُمَّ قُمْ مُكَبِّرًا لِلرَّكْعَةِ الثَّانِيَةِ.",
            "explanationEs": "Di «Allāhu akbar», levántate de la postración y siéntate tranquilo diciendo «Rabbigh-fir lī, war-ḥamnī…» (Señor mío, perdóname y ten misericordia de mí…). Luego di «Allāhu akbar» y haz la segunda postración igual que la primera; después levántate diciendo «Allāhu akbar» para la segunda rakʿa."
          },
          {
            "isInfo": true,
            "text": "التَّشَهُّدُ",
            "titleEs": "El tashahhud",
            "note": "الْخُطْوَةُ ٩",
            "noteEs": "Paso 9",
            "latin": "At-taḥiyyātu lillāh, az-zākiyātu lillāh, aṭ-ṭayyibātuṣ-ṣalawātu lillāh. As-salāmu ʿalayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh. As-salāmu ʿalaynā wa ʿalā ʿibādillāhiṣ-ṣāliḥīn. Ashhadu an lā ilāha illallāhu waḥdahū lā sharīka lah, wa ashhadu anna Muḥammadan ʿabduhū wa rasūluh.",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "بَعْدَ الرَّكْعَةِ الثَّانِيَةِ تَجْلِسُ لِلتَّشَهُّدِ، وَتَشَهُّدُ الْمَالِكِيَّةِ تَشَهُّدُ عُمَرَ رَضِيَ اللَّهُ عَنْهُ (الْمُوَطَّأُ):\n«التَّحِيَّاتُ لِلَّهِ، الزَّاكِيَاتُ لِلَّهِ، الطَّيِّبَاتُ الصَّلَوَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ».\nالْجِلْسَةُ: التَّوَرُّكُ فِي الْجُلُوسَيْنِ: تُفْضِي بِوَرِكِكَ الْأَيْسَرِ إِلَى الْأَرْضِ، وَتُخْرِجُ رِجْلَكَ الْيُسْرَى مِنْ تَحْتِ الْيُمْنَى، وَتَنْصِبُ الْيُمْنَى. وَتَقْبِضُ أَصَابِعَ يَدِكَ الْيُمْنَى إِلَّا السَّبَّابَةَ وَتُحَرِّكُهَا. فِي الصَّلَاةِ الثُّلَاثِيَّةِ وَالرُّبَاعِيَّةِ تَقُومُ بَعْدَ التَّشَهُّدِ الْأَوَّلِ مُكَبِّرًا، وَتَقْرَأُ فِي الْبَاقِي بِالْفَاتِحَةِ وَحْدَهَا سِرًّا.",
                "es": "Después de la segunda rakʿa te sientas para el tashahhud. El de los malikíes es el tashahhud de ʿUmar (Al-Muwaṭṭaʾ):\n«Los saludos son para Allah; las obras puras son para Allah; las buenas palabras y las oraciones son para Allah. La paz sea contigo, oh Profeta, y la misericordia de Allah y Sus bendiciones. La paz sea con nosotros y con los siervos rectos de Allah. Atestiguo que no hay divinidad excepto Allah, Único, sin asociado, y atestiguo que Muhammad es Su siervo y Su mensajero».\nForma de sentarse: tawarruk en las dos sentadas, con la cadera izquierda en el suelo, el pie izquierdo saliendo por debajo de la pierna derecha y el pie derecho levantado. Cierra los dedos de la mano derecha salvo el índice, que mueves. En las oraciones de tres o cuatro rakʿas, te levantas tras el primer tashahhud diciendo «Allāhu akbar» y en las rakʿas que quedan recitas solo Al-Fātiḥa en voz baja."
              },
              {
                "id": "hanafi",
                "ar": "تَشَهُّدُ ابْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ:\n«التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ».\nالْجِلْسَةُ: الِافْتِرَاشُ فِي الْجُلُوسَيْنِ لِلرَّجُلِ: يَجْلِسُ عَلَى رِجْلِهِ الْيُسْرَى وَيَنْصِبُ الْيُمْنَى. يَرْفَعُ السَّبَّابَةَ عِنْدَ «لَا إِلَهَ» وَيَضَعُهَا عِنْدَ «إِلَّا اللَّهُ». وَالتَّشَهُّدَانِ وَاجِبَانِ.",
                "es": "Tashahhud de Ibn Masʿūd:\n«At-taḥiyyātu lillāhi waṣ-ṣalawātu waṭ-ṭayyibāt. As-salāmu ʿalayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh. As-salāmu ʿalaynā wa ʿalā ʿibādillāhiṣ-ṣāliḥīn. Ashhadu an lā ilāha illallāh, wa ashhadu anna Muḥammadan ʿabduhū wa rasūluh».\nForma de sentarse: el hombre se sienta sobre el pie izquierdo con el derecho levantado (iftirāsh) en las dos sentadas. Levanta el índice en «lā ilāha» y lo baja en «illallāh». Los dos tashahhud son wāŷib."
              },
              {
                "id": "shafii",
                "ar": "تَشَهُّدُ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا:\n«التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ».\nالْجِلْسَةُ: الِافْتِرَاشُ فِي الْأَوَّلِ، وَالتَّوَرُّكُ فِي الْأَخِيرِ. يَقْبِضُ أَصَابِعَ الْيُمْنَى إِلَّا الْمُسَبِّحَةَ وَيَرْفَعُهَا عِنْدَ «إِلَّا اللَّهُ». التَّشَهُّدُ الْأَوَّلُ سُنَّةٌ (مِنَ الْأَبْعَاضِ)، وَالْأَخِيرُ رُكْنٌ.",
                "es": "Tashahhud de Ibn ʿAbbās:\n«At-taḥiyyātul-mubārakātuṣ-ṣalawātuṭ-ṭayyibātu lillāh. As-salāmu ʿalayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh. As-salāmu ʿalaynā wa ʿalā ʿibādillāhiṣ-ṣāliḥīn. Ashhadu an lā ilāha illallāh, wa ashhadu anna Muḥammadan rasūlullāh».\nForma de sentarse: iftirāsh en la primera sentada y tawarruk en la última. Cierra los dedos de la mano derecha salvo el índice, que levanta en «illallāh». El primer tashahhud es sunna (de las abʿāḍ) y el último es pilar."
              },
              {
                "id": "hanbali",
                "ar": "تَشَهُّدُ ابْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ:\n«التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ».\nالْجِلْسَةُ: الِافْتِرَاشُ، وَالتَّوَرُّكُ فِي التَّشَهُّدِ الْأَخِيرِ مِنْ صَلَاةٍ فِيهَا تَشَهُّدَانِ. يُشِيرُ بِالسَّبَّابَةِ عِنْدَ ذِكْرِ اللَّهِ. التَّشَهُّدُ الْأَوَّلُ وَاجِبٌ، وَالْأَخِيرُ رُكْنٌ.",
                "es": "Tashahhud de Ibn Masʿūd:\n«At-taḥiyyātu lillāhi waṣ-ṣalawātu waṭ-ṭayyibāt. As-salāmu ʿalayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh. As-salāmu ʿalaynā wa ʿalā ʿibādillāhiṣ-ṣāliḥīn. Ashhadu an lā ilāha illallāh, wa ashhadu anna Muḥammadan ʿabduhū wa rasūluh».\nForma de sentarse: iftirāsh, y tawarruk en el último tashahhud de las oraciones con dos tashahhud. Señala con el índice cada vez que menciona a Allah. El primer tashahhud es wāŷib y el último es pilar."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "الصَّلَاةُ عَلَى النَّبِيِّ ﷺ وَالدُّعَاءُ",
            "titleEs": "Bendiciones por el Profeta ﷺ y súplica",
            "note": "الْخُطْوَةُ ١٠",
            "noteEs": "Paso 10",
            "latin": "Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd. Allāhumma bārik ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd.",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "فِي التَّشَهُّدِ الْأَخِيرِ، بَعْدَ التَّشَهُّدِ، تُصَلِّي عَلَى النَّبِيِّ ﷺ:\n«اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ» (البخاري).\nثُمَّ تَدْعُو بِمَا شِئْتَ، وَمِنْهُ: «اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ» (مسلم).",
                "es": "En el último tashahhud, después de él, pides bendiciones por el Profeta ﷺ:\n«Oh Allah, bendice a Muhammad y a la familia de Muhammad como bendijiste a Ibrāhīm y a la familia de Ibrāhīm; Tú eres Digno de alabanza, Glorioso. Oh Allah, colma de bendiciones a Muhammad y a la familia de Muhammad como colmaste de bendiciones a Ibrāhīm y a la familia de Ibrāhīm; Tú eres Digno de alabanza, Glorioso» (Al-Bujari).\nDespués suplicas lo que quieras, por ejemplo: «Oh Allah, me refugio en Ti del castigo del Infierno, del castigo de la tumba, de las pruebas de la vida y de la muerte, y del mal de la prueba del falso Mesías (Daŷŷāl)» (Muslim)."
              },
              {
                "id": "hanafi",
                "ar": "بَعْدَ التَّشَهُّدِ الْأَخِيرِ يُصَلِّي عَلَى النَّبِيِّ ﷺ بِالصِّيغَةِ الْإِبْرَاهِيمِيَّةِ، وَهِيَ سُنَّةٌ، ثُمَّ يَدْعُو بِمَا يُشْبِهُ أَلْفَاظَ الْقُرْآنِ وَالسُّنَّةِ.",
                "es": "Después del último tashahhud pide bendiciones por el Profeta ﷺ con la fórmula de Ibrāhīm, lo cual es sunna; después suplica con palabras parecidas a las del Corán y la Sunna."
              },
              {
                "id": "shafii",
                "ar": "الصَّلَاةُ عَلَى النَّبِيِّ ﷺ فِي التَّشَهُّدِ الْأَخِيرِ رُكْنٌ، وَأَقَلُّهَا: «اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ»، وَأَكْمَلُهَا الصِّيغَةُ الْإِبْرَاهِيمِيَّةُ. وَالصَّلَاةُ عَلَى الْآلِ سُنَّةٌ. ثُمَّ يَدْعُو، وَمِنْهُ الِاسْتِعَاذَةُ مِنَ الْأَرْبَعِ.",
                "es": "Las bendiciones por el Profeta ﷺ en el último tashahhud son un pilar; lo mínimo es «Allāhumma ṣalli ʿalā Muḥammad» y lo completo es la fórmula de Ibrāhīm. Incluir a su familia es sunna. Después suplica, por ejemplo refugiándose de las cuatro cosas (el Infierno, la tumba, las pruebas de la vida y la muerte, y el Daŷŷāl)."
              },
              {
                "id": "hanbali",
                "ar": "الصَّلَاةُ عَلَى النَّبِيِّ ﷺ فِي التَّشَهُّدِ الْأَخِيرِ رُكْنٌ، بِالصِّيغَةِ الْإِبْرَاهِيمِيَّةِ، ثُمَّ يُسْتَحَبُّ الدُّعَاءُ، وَمِنْهُ الِاسْتِعَاذَةُ مِنْ عَذَابِ جَهَنَّمَ وَعَذَابِ الْقَبْرِ وَفِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَفِتْنَةِ الْمَسِيحِ الدَّجَّالِ.",
                "es": "Las bendiciones por el Profeta ﷺ en el último tashahhud son un pilar, con la fórmula de Ibrāhīm. Después se recomienda suplicar, por ejemplo refugiándose del castigo del Infierno, del castigo de la tumba, de las pruebas de la vida y de la muerte y de la prueba del Daŷŷāl."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "السَّلَامُ: السَّلَامُ عَلَيْكُمْ",
            "titleEs": "El saludo final (salām)",
            "note": "الْخُطْوَةُ ١١",
            "noteEs": "Paso 11",
            "latin": "As-salāmu ʿalaykum.",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "تُسَلِّمُ تَسْلِيمَةً وَاحِدَةً قَائِلًا: «السَّلَامُ عَلَيْكُمْ»، تَبْدَؤُهَا تِلْقَاءَ وَجْهِكَ وَتَتَيَامَنُ بِهَا قَلِيلًا. وَيَزِيدُ الْمَأْمُومُ تَسْلِيمَةً يَرُدُّ بِهَا عَلَى الْإِمَامِ، وَأُخْرَى عَلَى يَسَارِهِ إِنْ كَانَ عَلَيْهِ أَحَدٌ.",
                "es": "Saluda una sola vez diciendo «As-salāmu ʿalaykum» (La paz sea con vosotros), empezando de frente y girando un poco a la derecha. Quien reza detrás del imam añade un saludo para devolvérselo al imam, y otro a su izquierda si hay alguien rezando a ese lado."
              },
              {
                "id": "hanafi",
                "ar": "يُسَلِّمُ يَمِينًا ثُمَّ يَسَارًا قَائِلًا: «السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ». وَلَفْظُ السَّلَامِ وَاجِبٌ، وَالْفَرْضُ الْخُرُوجُ مِنَ الصَّلَاةِ بِفِعْلِ الْمُصَلِّي.",
                "es": "Saluda a la derecha y luego a la izquierda diciendo «As-salāmu ʿalaykum wa raḥmatullāh». La palabra «salām» es wāŷib; lo farḍ es salir de la oración por un acto propio."
              },
              {
                "id": "shafii",
                "ar": "يُسَلِّمُ قَائِلًا: «السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ» يَمِينًا ثُمَّ يَسَارًا. التَّسْلِيمَةُ الْأُولَى رُكْنٌ، وَالثَّانِيَةُ سُنَّةٌ.",
                "es": "Saluda diciendo «As-salāmu ʿalaykum wa raḥmatullāh» a la derecha y luego a la izquierda. El primer saludo es pilar y el segundo, sunna."
              },
              {
                "id": "hanbali",
                "ar": "يُسَلِّمُ قَائِلًا: «السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ» يَمِينًا ثُمَّ يَسَارًا، وَالتَّسْلِيمَتَانِ رُكْنَانِ فِي الْفَرِيضَةِ.",
                "es": "Saluda diciendo «As-salāmu ʿalaykum wa raḥmatullāh» a la derecha y luego a la izquierda. En la oración obligatoria los dos saludos son pilares."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "الْقُنُوتُ فِي صَلَاةِ الصُّبْحِ",
            "titleEs": "El qunūt en la oración del Fajr",
            "latin": "Allāhumma innā nastaʿīnuka wa nastaghfiruk, wa nuʾminu bika wa natawakkalu ʿalayk, wa nakhnaʿu lak, wa nakhlaʿu wa natruku man yakfuruk. Allāhumma iyyāka naʿbud, wa laka nuṣallī wa nasjud, wa ilayka nasʿā wa naḥfid, narjū raḥmatak, wa nakhāfu ʿadhābakal-jidd, inna ʿadhābaka bil-kāfirīna mulḥiq.",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "يُسْتَحَبُّ عِنْدَ الْمَالِكِيَّةِ الْقُنُوتُ فِي الصُّبْحِ سِرًّا، فِي الرَّكْعَةِ الثَّانِيَةِ قَبْلَ الرُّكُوعِ (وَيَجُوزُ بَعْدَهُ)، وَلَفْظُهُ الْمُخْتَارُ:\n«اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ، وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ، وَنَخْنَعُ لَكَ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَكْفُرُكَ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ، وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ، وَنَخَافُ عَذَابَكَ الْجِدَّ، إِنَّ عَذَابَكَ بِالْكَافِرِينَ مُلْحِقٌ».",
                "es": "Para los malikíes se recomienda el qunūt en el Fajr, en voz baja, en la segunda rakʿa antes de inclinarse (también se permite después). Su fórmula preferida es:\n«Oh Allah, Te pedimos ayuda y perdón, creemos en Ti y en Ti confiamos, nos sometemos a Ti, y abandonamos y dejamos a quien reniega de Ti. Oh Allah, solo a Ti adoramos, para Ti rezamos y nos postramos, hacia Ti nos apresuramos y nos esforzamos; esperamos Tu misericordia y tememos Tu castigo verdadero; Tu castigo alcanzará a los incrédulos»."
              },
              {
                "id": "hanafi",
                "ar": "لَا قُنُوتَ فِي صَلَاةِ الصُّبْحِ إِلَّا فِي النَّوَازِلِ. وَمَحَلُّهُ صَلَاةُ الْوِتْرِ، فِي الرَّكْعَةِ الثَّالِثَةِ قَبْلَ الرُّكُوعِ، طُولَ السَّنَةِ، وَهُوَ وَاجِبٌ، بِلَفْظِ: «اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ…».",
                "es": "No hay qunūt en el Fajr salvo en calamidades. Su lugar es el witr, en la tercera rakʿa antes de la inclinación, todo el año, y es wāŷib, con la fórmula «Allāhumma innā nastaʿīnuka wa nastaghfiruk…»."
              },
              {
                "id": "shafii",
                "ar": "الْقُنُوتُ سُنَّةٌ فِي الصُّبْحِ بَعْدَ الرَّفْعِ مِنْ رُكُوعِ الثَّانِيَةِ، يَرْفَعُ فِيهِ يَدَيْهِ وَيَجْهَرُ بِهِ الْإِمَامُ، بِلَفْظِ: «اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ…». وَيُقْنَتُ فِي وِتْرِ النِّصْفِ الثَّانِي مِنْ رَمَضَانَ.",
                "es": "El qunūt es sunna en el Fajr después de incorporarse de la inclinación de la segunda rakʿa, levantando las manos; el imam lo dice en voz alta, con la fórmula «Allāhumma-hdinī fīman hadayt, wa ʿāfinī fīman ʿāfayt…». También se hace en el witr de la segunda mitad de Ramadán."
              },
              {
                "id": "hanbali",
                "ar": "لَا قُنُوتَ فِي صَلَاةِ الصُّبْحِ إِلَّا فِي النَّوَازِلِ. وَمَحَلُّهُ صَلَاةُ الْوِتْرِ بَعْدَ الرُّكُوعِ، طُولَ السَّنَةِ، بِلَفْظِ: «اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ…».",
                "es": "No hay qunūt en el Fajr salvo en calamidades. Su lugar es el witr, después de la inclinación, todo el año, con la fórmula «Allāhumma-hdinī fīman hadayt…»."
              }
            ]
          }
        ]
      },
      {
        "id": "guia_rakaat",
        "titleAr": "الصَّلَوَاتُ وَعَدَدُ رَكَعَاتِهَا",
        "titleEs": "Las oraciones y sus rakʿas",
        "items": [
          {
            "isInfo": true,
            "text": "الصَّلَوَاتُ الْخَمْسُ",
            "titleEs": "Las cinco oraciones",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "• الصُّبْحُ: رَكْعَتَانِ جَهْرًا.\n• الظُّهْرُ: أَرْبَعٌ سِرًّا.\n• الْعَصْرُ: أَرْبَعٌ سِرًّا.\n• الْمَغْرِبُ: ثَلَاثٌ، تَجْهَرُ فِي الْأُولَيَيْنِ.\n• الْعِشَاءُ: أَرْبَعٌ، تَجْهَرُ فِي الْأُولَيَيْنِ.\nوَفِي السَّفَرِ تُقْصَرُ الرُّبَاعِيَّةُ رَكْعَتَيْنِ، وَالْقَصْرُ سُنَّةٌ مُؤَكَّدَةٌ عِنْدَ الْمَالِكِيَّةِ.",
                "es": "• Fajr (Ṣubḥ): 2 rakʿas, en voz alta.\n• Ẓuhr: 4, en voz baja.\n• ʿAṣr: 4, en voz baja.\n• Maghrib: 3; las dos primeras en voz alta.\n• ʿIshāʾ: 4; las dos primeras en voz alta.\nEn el viaje, las oraciones de cuatro se acortan a dos; para los malikíes acortar es sunna confirmada."
              },
              {
                "id": "hanafi",
                "ar": "عَدَدُ الرَّكَعَاتِ وَمَوَاضِعُ الْجَهْرِ كَمَا سَبَقَ. وَالْقَصْرُ فِي السَّفَرِ وَاجِبٌ (عَزِيمَةٌ): يُصَلِّي الرُّبَاعِيَّةَ رَكْعَتَيْنِ، فَإِنْ أَتَمَّ أَسَاءَ.",
                "es": "El número de rakʿas y las partes en voz alta son iguales. En el viaje, acortar es obligatorio: las oraciones de cuatro se rezan de dos, y quien reza las cuatro obra mal."
              },
              {
                "id": "shafii",
                "ar": "عَدَدُ الرَّكَعَاتِ وَمَوَاضِعُ الْجَهْرِ كَمَا سَبَقَ. وَالْقَصْرُ فِي السَّفَرِ رُخْصَةٌ يَجُوزُ تَرْكُهَا، وَهُوَ أَفْضَلُ إِذَا بَلَغَ السَّفَرُ ثَلَاثَ مَرَاحِلَ.",
                "es": "El número de rakʿas y las partes en voz alta son iguales. En el viaje, acortar es una facilidad que se puede no usar; es preferible si el viaje alcanza tres etapas."
              },
              {
                "id": "hanbali",
                "ar": "عَدَدُ الرَّكَعَاتِ وَمَوَاضِعُ الْجَهْرِ كَمَا سَبَقَ. وَالْقَصْرُ فِي السَّفَرِ رُخْصَةٌ، وَهُوَ أَفْضَلُ مِنَ الْإِتْمَامِ.",
                "es": "El número de rakʿas y las partes en voz alta son iguales. En el viaje, acortar es una facilidad, y es preferible a rezar completo."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "الرَّغِيبَةُ وَالْوِتْرُ",
            "titleEs": "La ragība del Fajr, el shafʿ y el witr",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "• رَغِيبَةُ الْفَجْرِ: رَكْعَتَانِ قَبْلَ الصُّبْحِ، تَقْرَأُ فِيهِمَا بِالْفَاتِحَةِ وَحْدَهَا سِرًّا.\n• الشَّفْعُ وَالْوِتْرُ: بَعْدَ الْعِشَاءِ رَكْعَتَانِ (الشَّفْعُ) ثُمَّ رَكْعَةٌ وَاحِدَةٌ (الْوِتْرُ) يُفْصَلُ بَيْنَهُمَا بِسَلَامٍ؛ وَالْوِتْرُ سُنَّةٌ مُؤَكَّدَةٌ.",
                "es": "• Ragība del Fajr: dos rakʿas antes de la oración del Fajr, recitando en ellas solo Al-Fātiḥa en voz baja.\n• Shafʿ y witr: después del ʿIshāʾ, dos rakʿas (shafʿ) y luego una sola (witr), separadas por un salām. El witr es sunna confirmada."
              },
              {
                "id": "hanafi",
                "ar": "• سُنَّةُ الْفَجْرِ: رَكْعَتَانِ قَبْلَ الصُّبْحِ، يَقْرَأُ فِيهِمَا بَعْدَ الْفَاتِحَةِ «الْكَافِرُونَ» وَ«الْإِخْلَاصُ»، وَهِيَ آكَدُ السُّنَنِ.\n• الْوِتْرُ: وَاجِبٌ، ثَلَاثُ رَكَعَاتٍ بِتَشَهُّدَيْنِ وَسَلَامٍ وَاحِدٍ كَالْمَغْرِبِ، مَعَ الْقُنُوتِ قَبْلَ الرُّكُوعِ فِي الثَّالِثَةِ.",
                "es": "• Sunna del Fajr: dos rakʿas antes del Fajr; tras Al-Fātiḥa se recitan Al-Kāfirūn y Al-Ijlāṣ. Es la sunna más confirmada.\n• Witr: es wāŷib; tres rakʿas con dos tashahhud y un solo salām, como el Maghrib, con qunūt antes de la inclinación de la tercera."
              },
              {
                "id": "shafii",
                "ar": "• سُنَّةُ الْفَجْرِ: رَكْعَتَانِ يَقْرَأُ فِيهِمَا «الْكَافِرُونَ» وَ«الْإِخْلَاصُ».\n• الْوِتْرُ: سُنَّةٌ مُؤَكَّدَةٌ، أَقَلُّهُ رَكْعَةٌ وَأَكْثَرُهُ إِحْدَى عَشْرَةَ، وَالْأَفْضَلُ الْفَصْلُ بَيْنَ الشَّفْعِ وَالْوِتْرِ بِسَلَامٍ.",
                "es": "• Sunna del Fajr: dos rakʿas, recitando Al-Kāfirūn y Al-Ijlāṣ.\n• Witr: sunna confirmada; como mínimo una rakʿa y como máximo once; es mejor separar con un salām el shafʿ del witr."
              },
              {
                "id": "hanbali",
                "ar": "• سُنَّةُ الْفَجْرِ: رَكْعَتَانِ يَقْرَأُ فِيهِمَا «الْكَافِرُونَ» وَ«الْإِخْلَاصُ».\n• الْوِتْرُ: سُنَّةٌ مُؤَكَّدَةٌ، أَقَلُّهُ رَكْعَةٌ وَأَكْثَرُهُ إِحْدَى عَشْرَةَ، وَأَدْنَى الْكَمَالِ ثَلَاثٌ بِسَلَامَيْنِ، مَعَ الْقُنُوتِ بَعْدَ الرُّكُوعِ.",
                "es": "• Sunna del Fajr: dos rakʿas, recitando Al-Kāfirūn y Al-Ijlāṣ.\n• Witr: sunna confirmada; como mínimo una rakʿa y como máximo once; lo mínimo recomendable son tres con dos salām, con qunūt después de la inclinación."
              }
            ]
          }
        ]
      },
      {
        "id": "guia_sahw",
        "titleAr": "سُجُودُ السَّهْوِ",
        "titleEs": "La postración del olvido",
        "items": [
          {
            "isInfo": true,
            "text": "مَتَى يُسْجَدُ لِلسَّهْوِ؟",
            "titleEs": "¿Cuándo se hace la postración del olvido?",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "قَاعِدَةُ الْمَالِكِيَّةِ:\n• لِلنَّقْصِ (كَتَرْكِ سُنَّةٍ مُؤَكَّدَةٍ أَوْ سُنَّتَيْنِ خَفِيفَتَيْنِ): سَجْدَتَانِ قَبْلَ السَّلَامِ (الْقَبْلِيُّ).\n• لِلزِّيَادَةِ (كَزِيَادَةِ رَكْعَةٍ أَوْ سَلَامٍ قَبْلَ تَمَامِ الصَّلَاةِ سَهْوًا): سَجْدَتَانِ بَعْدَ السَّلَامِ (الْبَعْدِيُّ).\n• إِذَا اجْتَمَعَ النَّقْصُ وَالزِّيَادَةُ: قَبْلَ السَّلَامِ.\nوَمَنْ شَكَّ فِي عَدَدِ الرَّكَعَاتِ بَنَى عَلَى الْيَقِينِ (الْأَقَلِّ) وَسَجَدَ بَعْدَ السَّلَامِ.\nوَلَا يُجْبَرُ الْفَرْضُ بِالسُّجُودِ، بَلْ لَا بُدَّ مِنَ الْإِتْيَانِ بِهِ.",
                "es": "Regla de los malikíes:\n• Por omisión (por ejemplo, dejar una sunna confirmada o dos sunnas ligeras): dos postraciones antes del salām (qablī).\n• Por añadido (por ejemplo, rezar una rakʿa de más o saludar antes de terminar, por olvido): dos postraciones después del salām (baʿdī).\n• Si hay omisión y añadido a la vez: antes del salām.\nQuien duda del número de rakʿas cuenta lo seguro (el número menor) y se postra después del salām.\nUn acto obligatorio omitido no se compensa con la postración: hay que hacerlo."
              },
              {
                "id": "hanafi",
                "ar": "سُجُودُ السَّهْوِ وَاجِبٌ لِتَرْكِ وَاجِبٍ أَوْ تَأْخِيرِهِ، أَوْ تَأْخِيرِ رُكْنٍ سَهْوًا. وَهُوَ كُلُّهُ بَعْدَ السَّلَامِ، سَوَاءٌ كَانَ عَنْ نَقْصٍ أَوْ زِيَادَةٍ.\nوَمَنْ شَكَّ فِي عَدَدِ الرَّكَعَاتِ عَمِلَ بِغَالِبِ ظَنِّهِ، فَإِنْ لَمْ يَتَرَجَّحْ لَهُ شَيْءٌ بَنَى عَلَى الْأَقَلِّ.",
                "es": "La postración del olvido es wāŷib por omitir o retrasar un wāŷib, o retrasar un pilar por olvido. Siempre se hace después del salām, sea por omisión o por añadido.\nQuien duda del número de rakʿas sigue lo que le parece más probable; si no tiene preferencia, cuenta el número menor."
              },
              {
                "id": "shafii",
                "ar": "سُجُودُ السَّهْوِ سُنَّةٌ، يُشْرَعُ لِتَرْكِ بَعْضٍ مِنَ الْأَبْعَاضِ، أَوْ لِفِعْلِ مَا يُبْطِلُ عَمْدُهُ سَهْوًا، أَوْ لِلشَّكِّ فِي عَدَدِ الرَّكَعَاتِ. وَهُوَ كُلُّهُ قَبْلَ السَّلَامِ.\nوَمَنْ شَكَّ بَنَى عَلَى الْيَقِينِ وَهُوَ الْأَقَلُّ.",
                "es": "La postración del olvido es sunna: se hace por omitir una de las abʿāḍ, por hacer por olvido algo que a propósito invalidaría la oración, o por dudar del número de rakʿas. Siempre se hace antes del salām.\nQuien duda cuenta lo seguro, el número menor."
              },
              {
                "id": "hanbali",
                "ar": "سُجُودُ السَّهْوِ وَاجِبٌ لِمَا يُبْطِلُ عَمْدُهُ الصَّلَاةَ مِنْ زِيَادَةٍ أَوْ نَقْصٍ أَوْ شَكٍّ، وَيُسَنُّ لِغَيْرِهِ.\nوَهُوَ قَبْلَ السَّلَامِ، إِلَّا إِذَا سَلَّمَ قَبْلَ تَمَامِ صَلَاتِهِ، أَوْ بَنَى الْإِمَامُ عَلَى غَالِبِ ظَنِّهِ، فَيَسْجُدُ بَعْدَ السَّلَامِ.\nوَمَنْ شَكَّ بَنَى عَلَى الْيَقِينِ (لِلْمُنْفَرِدِ)، وَالْإِمَامُ يَعْمَلُ بِغَالِبِ ظَنِّهِ.",
                "es": "La postración del olvido es wāŷib por lo que a propósito invalidaría la oración (añadido, omisión o duda), y sunna en lo demás.\nSe hace antes del salām, salvo si saludó antes de terminar o si el imam siguió lo más probable: entonces se hace después del salām.\nQuien reza solo y duda cuenta lo seguro; el imam sigue lo que le parece más probable."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "صِفَةُ سُجُودِ السَّهْوِ",
            "titleEs": "Cómo se hace la postración del olvido",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "• الْقَبْلِيُّ: بَعْدَ أَنْ تُتِمَّ التَّشَهُّدَ الْأَخِيرَ، تَسْجُدُ سَجْدَتَيْنِ تُكَبِّرُ لَهُمَا فِي الْخَفْضِ وَالرَّفْعِ، ثُمَّ تَتَشَهَّدُ مَرَّةً أُخْرَى وَتُسَلِّمُ.\n• الْبَعْدِيُّ: بَعْدَ السَّلَامِ تُكَبِّرُ وَتَسْجُدُ سَجْدَتَيْنِ، ثُمَّ تَتَشَهَّدُ وَتُسَلِّمُ، وَلَا تَحْتَاجُ إِلَى تَكْبِيرَةِ إِحْرَامٍ جَدِيدَةٍ.\n• وَيَحْمِلُ الْإِمَامُ سَهْوَ الْمَأْمُومِ، وَيَسْجُدُ الْمَأْمُومُ مَعَ إِمَامِهِ وَإِنْ لَمْ يَسْهُ هُوَ.",
                "es": "• Antes del salām (qablī): cuando terminas el último tashahhud, haces dos postraciones diciendo «Allāhu akbar» al bajar y al subir; luego repites el tashahhud y saludas.\n• Después del salām (baʿdī): tras saludar dices «Allāhu akbar» y haces dos postraciones; luego haces el tashahhud y saludas. No hace falta un nuevo takbīr de entrada.\n• El imam carga con el olvido de quien reza detrás de él, y este se postra con su imam aunque él no se haya equivocado."
              },
              {
                "id": "hanafi",
                "ar": "بَعْدَ التَّشَهُّدِ الْأَخِيرِ يُسَلِّمُ تَسْلِيمَةً وَاحِدَةً عَنْ يَمِينِهِ، ثُمَّ يُكَبِّرُ وَيَسْجُدُ سَجْدَتَيْنِ، ثُمَّ يَجْلِسُ فَيَتَشَهَّدُ، وَيُصَلِّي عَلَى النَّبِيِّ ﷺ وَيَدْعُو، ثُمَّ يُسَلِّمُ.",
                "es": "Tras el último tashahhud saluda una vez a la derecha, dice «Allāhu akbar» y hace dos postraciones; después se sienta, repite el tashahhud, pide bendiciones por el Profeta ﷺ, suplica y saluda."
              },
              {
                "id": "shafii",
                "ar": "بَعْدَ التَّشَهُّدِ الْأَخِيرِ وَالصَّلَاةِ عَلَى النَّبِيِّ ﷺ وَقَبْلَ السَّلَامِ، يَسْجُدُ سَجْدَتَيْنِ يُكَبِّرُ لَهُمَا، ثُمَّ يُسَلِّمُ مُبَاشَرَةً بِلَا تَشَهُّدٍ.",
                "es": "Tras el último tashahhud y las bendiciones por el Profeta ﷺ, antes del salām, hace dos postraciones diciendo «Allāhu akbar», y luego saluda directamente, sin repetir el tashahhud."
              },
              {
                "id": "hanbali",
                "ar": "• إِذَا كَانَ قَبْلَ السَّلَامِ: يَسْجُدُ سَجْدَتَيْنِ بَعْدَ التَّشَهُّدِ الْأَخِيرِ، ثُمَّ يُسَلِّمُ مُبَاشَرَةً بِلَا تَشَهُّدٍ.\n• إِذَا كَانَ بَعْدَ السَّلَامِ: يُسَلِّمُ، ثُمَّ يَسْجُدُ سَجْدَتَيْنِ، ثُمَّ يَتَشَهَّدُ التَّشَهُّدَ الْأَخِيرَ وَيُسَلِّمُ.",
                "es": "• Si es antes del salām: hace dos postraciones tras el último tashahhud y saluda directamente, sin tashahhud.\n• Si es después del salām: saluda, hace dos postraciones, repite el último tashahhud y saluda."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "حَالَاتُ السُّجُودِ الْقَبْلِيِّ (لِلنَّقْصِ)",
            "titleEs": "Casos antes del salām (por omisión)",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "• نَسِيتَ السُّورَةَ بَعْدَ الْفَاتِحَةِ فِي الرَّكْعَةِ الْأُولَى أَوِ الثَّانِيَةِ.\n• أَسْرَرْتَ فِي صَلَاةٍ جَهْرِيَّةٍ (فِي الْفَاتِحَةِ أَوِ السُّورَةِ).\n• نَسِيتَ تَكْبِيرَتَيْنِ أَوْ أَكْثَرَ غَيْرَ تَكْبِيرَةِ الْإِحْرَامِ، أَوْ «سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ» مَرَّتَيْنِ.\n• نَسِيتَ التَّشَهُّدَ الْأَوَّلَ أَوِ الْجُلُوسَ لَهُ وَقُمْتَ.\nأَمَّا نِسْيَانُ تَكْبِيرَةٍ وَاحِدَةٍ أَوْ «سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ» مَرَّةً وَاحِدَةً فَلَا سُجُودَ فِيهِ، لِأَنَّهَا سُنَّةٌ خَفِيفَةٌ.",
                "es": "• Olvidaste la sura después de Al-Fātiḥa en la primera o la segunda rakʿa.\n• Recitaste en voz baja en una oración en voz alta (Al-Fātiḥa o la sura).\n• Olvidaste dos o más takbīr (salvo el de entrada), o dos veces «Samiʿallāhu liman ḥamidah».\n• Olvidaste el primer tashahhud o sentarte para él y te levantaste.\nSi solo olvidas un takbīr o un «Samiʿallāhu liman ḥamidah», no hay postración, porque es una sunna ligera."
              },
              {
                "id": "hanafi",
                "ar": "يَسْجُدُ (بَعْدَ السَّلَامِ) إِذَا تَرَكَ وَاجِبًا سَهْوًا، مِثْلَ:\n• قِرَاءَةِ الْفَاتِحَةِ أَوِ السُّورَةِ.\n• التَّشَهُّدِ الْأَوَّلِ أَوِ الْقُعُودِ لَهُ.\n• الْجَهْرِ فِي مَوْضِعِ الْإِسْرَارِ أَوِ الْعَكْسِ.\n• الْقُنُوتِ فِي الْوِتْرِ.\n• تَأْخِيرِ رُكْنٍ عَنْ مَوْضِعِهِ.",
                "es": "Se postra (después del salām) si omite por olvido un wāŷib, por ejemplo:\n• Recitar Al-Fātiḥa o la sura.\n• El primer tashahhud o sentarse para él.\n• Recitar en voz alta donde va en voz baja, o al revés.\n• El qunūt del witr.\n• Retrasar un pilar de su sitio."
              },
              {
                "id": "shafii",
                "ar": "يَسْجُدُ قَبْلَ السَّلَامِ لِتَرْكِ الْأَبْعَاضِ:\n• التَّشَهُّدِ الْأَوَّلِ.\n• الْقُعُودِ لَهُ.\n• الصَّلَاةِ عَلَى النَّبِيِّ ﷺ فِيهِ.\n• الْقُنُوتِ فِي الصُّبْحِ.\nوَلَا يَسْجُدُ لِتَرْكِ السُّورَةِ أَوِ التَّكْبِيرَاتِ أَوِ الْجَهْرِ وَالْإِسْرَارِ، لِأَنَّهَا مِنَ الْهَيْئَاتِ.",
                "es": "Se postra antes del salām por omitir las abʿāḍ:\n• El primer tashahhud.\n• Sentarse para él.\n• Las bendiciones por el Profeta ﷺ en él.\n• El qunūt del Fajr.\nNo se postra por omitir la sura, los takbīr o la voz alta o baja, porque son hayʾāt."
              },
              {
                "id": "hanbali",
                "ar": "يَسْجُدُ قَبْلَ السَّلَامِ وُجُوبًا لِتَرْكِ وَاجِبٍ سَهْوًا، مِثْلَ:\n• تَكْبِيرَاتِ الِانْتِقَالِ.\n• «سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ» وَ«رَبَّنَا وَلَكَ الْحَمْدُ».\n• «سُبْحَانَ رَبِّيَ الْعَظِيمِ» وَ«سُبْحَانَ رَبِّيَ الْأَعْلَى» مَرَّةً.\n• «رَبِّ اغْفِرْ لِي» بَيْنَ السَّجْدَتَيْنِ.\n• التَّشَهُّدِ الْأَوَّلِ وَالْجُلُوسِ لَهُ.\nوَلَا يَجِبُ السُّجُودُ لِتَرْكِ السُّنَنِ.",
                "es": "Debe postrarse antes del salām por omitir un wāŷib por olvido, por ejemplo:\n• Los takbīr de transición.\n• «Samiʿallāhu liman ḥamidah» y «Rabbanā wa lakal-ḥamd».\n• «Subḥāna Rabbiyal-ʿAẓīm» y «Subḥāna Rabbiyal-Aʿlā», una vez.\n• «Rabbigh-fir lī» entre las dos postraciones.\n• El primer tashahhud y sentarse para él.\nNo es obligatorio postrarse por omitir una sunna."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "حَالَاتُ السُّجُودِ الْبَعْدِيِّ (لِلزِّيَادَةِ)",
            "titleEs": "Casos después del salām (por añadido)",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "• زِدْتَ رَكْعَةً سَهْوًا (خَامِسَةً فِي الرُّبَاعِيَّةِ مَثَلًا): تَجْلِسُ فَوْرَ تَذَكُّرِكَ، وَتَتَشَهَّدُ وَتُسَلِّمُ، ثُمَّ تَسْجُدُ بَعْدَ السَّلَامِ.\n• سَلَّمْتَ قَبْلَ تَمَامِ الصَّلَاةِ (بَعْدَ رَكْعَتَيْنِ مِنَ الظُّهْرِ مَثَلًا) وَتَذَكَّرْتَ قَرِيبًا: تَرْجِعُ بِتَكْبِيرٍ وَنِيَّةِ إِتْمَامٍ، وَتُكْمِلُ مَا بَقِيَ، ثُمَّ تَسْجُدُ بَعْدَ السَّلَامِ.\n• جَهَرْتَ فِي صَلَاةٍ سِرِّيَّةٍ بِأَكْثَرَ مِنْ آيَةٍ.\n• تَكَلَّمْتَ سَهْوًا كَلَامًا قَلِيلًا.\n• شَكَكْتَ فِي عَدَدِ الرَّكَعَاتِ (ثَلَاثًا صَلَّيْتَ أَمْ أَرْبَعًا؟): تَبْنِي عَلَى الْأَقَلِّ وَهُوَ الْيَقِينُ، وَتَأْتِي بِمَا بَقِيَ، ثُمَّ تَسْجُدُ بَعْدَ السَّلَامِ.\nوَإِذَا اجْتَمَعَ نَقْصٌ وَزِيَادَةٌ (كَمَنْ نَسِيَ السُّورَةَ وَزَادَ رَكْعَةً) سَجَدَ قَبْلَ السَّلَامِ.",
                "es": "• Añadiste una rakʿa por olvido (por ejemplo, una quinta en una oración de cuatro): te sientas en cuanto te das cuenta, haces el tashahhud, saludas y te postras después del salām.\n• Saludaste antes de terminar (por ejemplo, tras dos rakʿas del Ẓuhr) y te acuerdas al poco: vuelves a la oración con un takbīr y la intención de completarla, haces lo que falta y te postras después del salām.\n• Recitaste en voz alta más de una aleya en una oración en voz baja.\n• Hablaste un poco por olvido.\n• Dudas del número de rakʿas (¿tres o cuatro?): cuentas lo seguro, el número menor, completas lo que falta y te postras después del salām.\nSi hay a la vez omisión y añadido (por ejemplo, olvidaste la sura y añadiste una rakʿa), te postras antes del salām."
              },
              {
                "id": "hanafi",
                "ar": "كُلُّ سُجُودِ السَّهْوِ بَعْدَ السَّلَامِ:\n• إِنْ قَامَ إِلَى خَامِسَةٍ قَبْلَ أَنْ يَقْعُدَ قَدْرَ التَّشَهُّدِ: يَعُودُ مَا لَمْ يَسْجُدْ، فَإِنْ سَجَدَ صَارَتْ نَافِلَةً وَبَطَلَ فَرْضُهُ.\n• وَإِنْ قَعَدَ قَدْرَ التَّشَهُّدِ ثُمَّ قَامَ إِلَى خَامِسَةٍ: يَعُودُ وَيُسَلِّمُ وَيَسْجُدُ، فَإِنْ سَجَدَ لَهَا ضَمَّ إِلَيْهَا سَادِسَةً وَسَجَدَ لِلسَّهْوِ.\n• الْكَلَامُ فِي الصَّلَاةِ يُبْطِلُهَا وَلَوْ سَهْوًا.\n• فِي الشَّكِّ: يَعْمَلُ بِغَالِبِ ظَنِّهِ، وَإِلَّا بَنَى عَلَى الْأَقَلِّ.",
                "es": "Toda postración del olvido es después del salām:\n• Si se levanta a una quinta rakʿa antes de haberse sentado el tiempo del tashahhud: vuelve mientras no se haya postrado; si se postró, esa oración se vuelve voluntaria y la obligatoria no es válida.\n• Si ya se había sentado el tiempo del tashahhud y se levantó a una quinta: vuelve, saluda y se postra; si llegó a postrarse en ella, añade una sexta y hace la postración del olvido.\n• Hablar en la oración la invalida, aunque sea por olvido.\n• En la duda: sigue lo más probable; si no lo tiene claro, cuenta el número menor."
              },
              {
                "id": "shafii",
                "ar": "يَسْجُدُ قَبْلَ السَّلَامِ لِكُلِّ زِيَادَةٍ سَهْوًا:\n• إِنْ زَادَ رَكْعَةً: يَجْلِسُ مَتَى تَذَكَّرَ، وَيَتَشَهَّدُ وَيَسْجُدُ ثُمَّ يُسَلِّمُ.\n• إِنْ سَلَّمَ قَبْلَ تَمَامِهَا وَتَذَكَّرَ قَرِيبًا: يُكْمِلُ وَيَسْجُدُ قَبْلَ السَّلَامِ.\n• الْكَلَامُ الْيَسِيرُ سَهْوًا لَا يُبْطِلُ الصَّلَاةَ وَيَسْجُدُ لَهُ.\n• فِي الشَّكِّ: يَبْنِي عَلَى الْيَقِينِ وَيَسْجُدُ قَبْلَ السَّلَامِ.",
                "es": "Se postra antes del salām por todo añadido por olvido:\n• Si añadió una rakʿa: se sienta en cuanto se acuerda, hace el tashahhud, se postra y saluda.\n• Si saludó antes de terminar y se acuerda al poco: completa la oración y se postra antes del salām.\n• Hablar un poco por olvido no invalida la oración, y se postra por ello.\n• En la duda: cuenta lo seguro y se postra antes del salām."
              },
              {
                "id": "hanbali",
                "ar": "• إِنْ زَادَ رَكْعَةً: يَجْلِسُ مَتَى تَذَكَّرَ، وَيَتَشَهَّدُ إِنْ لَمْ يَكُنْ تَشَهَّدَ، وَيَسْجُدُ قَبْلَ السَّلَامِ.\n• إِنْ سَلَّمَ قَبْلَ تَمَامِهَا وَتَذَكَّرَ قَرِيبًا: يُكْمِلُ وَيَسْجُدُ بَعْدَ السَّلَامِ.\n• فِي الشَّكِّ: يَبْنِي الْمُنْفَرِدُ عَلَى الْيَقِينِ وَيَسْجُدُ قَبْلَ السَّلَامِ، وَالْإِمَامُ يَعْمَلُ بِغَالِبِ ظَنِّهِ وَيَسْجُدُ بَعْدَ السَّلَامِ.",
                "es": "• Si añadió una rakʿa: se sienta en cuanto se acuerda, hace el tashahhud si no lo había hecho y se postra antes del salām.\n• Si saludó antes de terminar y se acuerda al poco: completa la oración y se postra después del salām.\n• En la duda: quien reza solo cuenta lo seguro y se postra antes del salām; el imam sigue lo más probable y se postra después del salām."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "نِسْيَانُ رُكْنٍ (فَرْضٍ)",
            "titleEs": "Si se olvida un pilar",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "الْفَرْضُ لَا يُجْبَرُ بِالسُّجُودِ، بَلْ لَا بُدَّ مِنَ الْإِتْيَانِ بِهِ:\n• إِذَا تَذَكَّرْتَهُ قَبْلَ أَنْ تَرْفَعَ رَأْسَكَ مِنْ رُكُوعِ الرَّكْعَةِ التَّالِيَةِ: تَرْجِعُ إِلَيْهِ فَتَأْتِي بِهِ وَبِمَا بَعْدَهُ، وَتَسْجُدُ بَعْدَ السَّلَامِ.\n• إِذَا تَذَكَّرْتَهُ بَعْدَ رَفْعِ رَأْسِكَ مِنْ رُكُوعِ الرَّكْعَةِ التَّالِيَةِ: تَبْطُلُ الرَّكْعَةُ الَّتِي نَقَصَ مِنْهَا الرُّكْنُ، وَتَقُومُ الَّتِي بَعْدَهَا مَقَامَهَا، وَتَزِيدُ رَكْعَةً فِي آخِرِ صَلَاتِكَ، وَتَسْجُدُ.\nمِثَالٌ: نَسِيتَ سَجْدَةً مِنَ الرَّكْعَةِ الْأُولَى وَتَذَكَّرْتَ وَأَنْتَ قَائِمٌ فِي الثَّانِيَةِ: تَجْلِسُ وَتَسْجُدُ السَّجْدَةَ ثُمَّ تُكْمِلُ.",
                "es": "Un pilar (farḍ) no se compensa con la postración: hay que hacerlo.\n• Si te acuerdas antes de incorporarte de la inclinación de la rakʿa siguiente: vuelves a ese pilar, lo haces junto con lo que va después y te postras después del salām.\n• Si te acuerdas después de incorporarte de la inclinación de la rakʿa siguiente: la rakʿa a la que le faltó el pilar se anula, la siguiente ocupa su lugar, añades una rakʿa al final de la oración y te postras.\nEjemplo: olvidaste una postración de la primera rakʿa y te acuerdas estando de pie en la segunda: te sientas, haces la postración que faltaba y continúas."
              },
              {
                "id": "hanafi",
                "ar": "إِذَا تَرَكَ سَجْدَةً سَهْوًا قَضَاهَا مَتَى تَذَكَّرَهَا قَبْلَ السَّلَامِ، وَلَوْ فِي آخِرِ الصَّلَاةِ، وَلَا تَبْطُلُ الرَّكْعَةُ، ثُمَّ يَسْجُدُ لِلسَّهْوِ بَعْدَ السَّلَامِ. أَمَّا إِذَا تَرَكَ الرُّكُوعَ فَلَا يُعْتَدُّ بِالسُّجُودِ الَّذِي بَعْدَهُ حَتَّى يَرْكَعَ.",
                "es": "Si omitió una postración por olvido, la hace cuando se acuerde antes del salām, aunque sea al final de la oración; la rakʿa no se anula, y hace la postración del olvido después del salām. Si omitió la inclinación, la postración que vino después no cuenta hasta que se incline."
              },
              {
                "id": "shafii",
                "ar": "إِنْ تَذَكَّرَ الرُّكْنَ قَبْلَ أَنْ يَصِلَ إِلَى مِثْلِهِ مِنَ الرَّكْعَةِ التَّالِيَةِ: عَادَ إِلَيْهِ فَأَتَى بِهِ وَبِمَا بَعْدَهُ. وَإِنْ وَصَلَ إِلَى مِثْلِهِ: تَمَّتْ بِهِ الرَّكْعَةُ الْأُولَى وَلَغَا مَا بَيْنَهُمَا، وَيَأْتِي بِرَكْعَةٍ فِي آخِرِ صَلَاتِهِ، وَيَسْجُدُ قَبْلَ السَّلَامِ.",
                "es": "Si se acuerda del pilar antes de llegar al mismo pilar en la rakʿa siguiente: vuelve a él y lo hace junto con lo que va después. Si ya llegó a ese mismo pilar: con él se completa la rakʿa anterior, lo que hay en medio no cuenta, añade una rakʿa al final y se postra antes del salām."
              },
              {
                "id": "hanbali",
                "ar": "إِنْ تَذَكَّرَ الرُّكْنَ قَبْلَ أَنْ يَشْرَعَ فِي قِرَاءَةِ الرَّكْعَةِ التَّالِيَةِ: عَادَ إِلَيْهِ فَأَتَى بِهِ وَبِمَا بَعْدَهُ. وَإِنْ شَرَعَ فِي قِرَاءَتِهَا: بَطَلَتِ الرَّكْعَةُ الَّتِي تَرَكَهُ مِنْهَا، وَقَامَتِ الَّتِي بَعْدَهَا مَقَامَهَا، وَيَسْجُدُ قَبْلَ السَّلَامِ.",
                "es": "Si se acuerda del pilar antes de empezar la recitación de la rakʿa siguiente: vuelve a él y lo hace junto con lo que va después. Si ya empezó a recitar: la rakʿa en la que lo omitió se anula, la siguiente ocupa su lugar y se postra antes del salām."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "إِذَا نَسِيتَ التَّشَهُّدَ الْأَوَّلَ وَقُمْتَ",
            "titleEs": "Si olvidas el primer tashahhud y te levantas",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "• إِنْ لَمْ تُفَارِقِ الْأَرْضَ بِيَدَيْكَ وَرُكْبَتَيْكَ: تَرْجِعُ إِلَى الْجُلُوسِ وَلَا سُجُودَ عَلَيْكَ.\n• إِنْ فَارَقْتَهَا: تَسْتَمِرُّ فِي قِيَامِكَ وَلَا تَرْجِعُ، وَتَسْجُدُ قَبْلَ السَّلَامِ.\n• إِنْ رَجَعْتَ بَعْدَ أَنِ اسْتَقْلَلْتَ قَائِمًا: لَا تَبْطُلُ صَلَاتُكَ عَلَى الْمَشْهُورِ، وَتَسْجُدُ بَعْدَ السَّلَامِ.",
                "es": "• Si aún no habías despegado del suelo las manos y las rodillas: vuelves a sentarte y no hay postración.\n• Si ya las habías despegado: sigues de pie, no vuelves, y te postras antes del salām.\n• Si volviste a sentarte cuando ya estabas de pie del todo: según la opinión más difundida la oración es válida, y te postras después del salām."
              },
              {
                "id": "hanafi",
                "ar": "يَعُودُ إِلَى الْجُلُوسِ مَا دَامَ أَقْرَبَ إِلَى الْقُعُودِ، وَلَا سُجُودَ عَلَيْهِ عَلَى الصَّحِيحِ. فَإِنْ صَارَ أَقْرَبَ إِلَى الْقِيَامِ لَمْ يَعُدْ، وَيَسْجُدُ لِلسَّهْوِ بَعْدَ السَّلَامِ.",
                "es": "Vuelve a sentarse mientras esté más cerca de estar sentado, y según la opinión correcta no hay postración. Si ya está más cerca de estar de pie, no vuelve y se postra por el olvido después del salām."
              },
              {
                "id": "shafii",
                "ar": "إِنْ لَمْ يَنْتَصِبْ قَائِمًا عَادَ إِلَى الْجُلُوسِ. وَإِنِ انْتَصَبَ قَائِمًا لَمْ يَجُزْ لَهُ الرُّجُوعُ، فَإِنْ عَادَ عَامِدًا عَالِمًا بِالتَّحْرِيمِ بَطَلَتْ صَلَاتُهُ. وَيَسْجُدُ قَبْلَ السَّلَامِ.",
                "es": "Si aún no se ha puesto de pie del todo, vuelve a sentarse. Si ya se puso de pie, no puede volver; si vuelve a propósito sabiendo que está prohibido, la oración se invalida. Se postra antes del salām."
              },
              {
                "id": "hanbali",
                "ar": "إِنْ لَمْ يَسْتَتِمَّ قَائِمًا رَجَعَ إِلَى الْجُلُوسِ. وَإِنِ اسْتَتَمَّ قَائِمًا كُرِهَ رُجُوعُهُ، وَإِنْ شَرَعَ فِي الْقِرَاءَةِ حَرُمَ عَلَيْهِ الرُّجُوعُ. وَيَسْجُدُ قَبْلَ السَّلَامِ.",
                "es": "Si aún no se ha puesto de pie del todo, vuelve a sentarse. Si ya se puso de pie, volver es desaconsejado, y si empezó a recitar, prohibido. Se postra antes del salām."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "إِذَا نَسِيتَ سُجُودَ السَّهْوِ",
            "titleEs": "Si olvidas la postración del olvido",
            "explanationAr": "• الْقَبْلِيُّ: إِنْ نَسِيتَهُ وَسَلَّمْتَ، سَجَدْتَهُ إِنْ تَذَكَّرْتَ قَرِيبًا. فَإِنْ طَالَ الْفَصْلُ وَكَانَ عَنْ نَقْصِ ثَلَاثِ سُنَنٍ فَأَكْثَرَ بَطَلَتِ الصَّلَاةُ وَتُعِيدُهَا، وَإِنْ كَانَ عَنْ أَقَلَّ فَلَا شَيْءَ عَلَيْكَ.\n• الْبَعْدِيُّ: تَسْجُدُهُ مَتَى تَذَكَّرْتَهُ وَلَوْ بَعْدَ مُدَّةٍ طَوِيلَةٍ، وَلَا تَبْطُلُ الصَّلَاةُ بِتَرْكِهِ.\n• وَلَا سُجُودَ لِلسَّهْوِ فِي سُجُودِ السَّهْوِ نَفْسِهِ.",
            "explanationEs": "• El de antes del salām: si lo olvidaste y saludaste, lo haces si te acuerdas al poco. Si ha pasado mucho tiempo y se debía a omitir tres sunnas o más, la oración se invalida y hay que repetirla; si era por menos, no hay que hacer nada.\n• El de después del salām: lo haces cuando te acuerdes, aunque sea mucho después; la oración no se invalida por dejarlo.\n• No hay postración del olvido por equivocarse en la propia postración del olvido."
          }
        ]
      },
      {
        "id": "guia_tarqi",
        "titleAr": "تَرْقِيعُ الصَّلَاةِ (الْمَسْبُوقُ)",
        "titleEs": "Completar la oración (quien llega tarde)",
        "items": [
          {
            "isInfo": true,
            "text": "مَتَى تُدْرِكُ الرَّكْعَةَ؟",
            "titleEs": "¿Cuándo alcanzas la rakʿa?",
            "explanationAr": "الْمَسْبُوقُ هُوَ مَنْ فَاتَهُ شَيْءٌ مِنَ الصَّلَاةِ مَعَ الْإِمَامِ.\n• تُدْرِكُ الرَّكْعَةَ إِذَا رَكَعْتَ وَوَضَعْتَ يَدَيْكَ عَلَى رُكْبَتَيْكَ قَبْلَ أَنْ يَرْفَعَ الْإِمَامُ رَأْسَهُ مِنَ الرُّكُوعِ.\n• تُكَبِّرُ تَكْبِيرَةَ الْإِحْرَامِ وَأَنْتَ قَائِمٌ، ثُمَّ تَدْخُلُ مَعَ الْإِمَامِ عَلَى الْحَالِ الَّتِي هُوَ عَلَيْهَا (رَاكِعًا أَوْ سَاجِدًا أَوْ جَالِسًا).\n• إِذَا دَخَلْتَ بَعْدَ رَفْعِهِ مِنْ رُكُوعِ الرَّكْعَةِ الْأَخِيرَةِ، فَقَدْ فَاتَتْكَ الصَّلَاةُ مَعَ الْجَمَاعَةِ، وَتُصَلِّيهَا كَامِلَةً بَعْدَ سَلَامِهِ، وَلَكَ أَجْرُ مَا أَدْرَكْتَ.",
            "explanationEs": "El masbūq es quien llega tarde y se pierde una parte de la oración con el imam.\n• Alcanzas una rakʿa si te inclinas y pones las manos sobre las rodillas antes de que el imam se incorpore de la inclinación.\n• Dices el takbīr de entrada estando de pie y te unes al imam en la postura en que esté (inclinado, postrado o sentado).\n• Si entras después de que se haya incorporado de la inclinación de la última rakʿa, no has alcanzado la oración en grupo: la rezas completa tras su salām, y tienes la recompensa de lo que alcanzaste."
          },
          {
            "isInfo": true,
            "text": "الْقَاعِدَةُ: قَضَاءُ الْقَوْلِ وَبِنَاءُ الْفِعْلِ",
            "titleEs": "La regla: recuperar la recitación y continuar los actos",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "بَعْدَ سَلَامِ الْإِمَامِ تَقُومُ لِتُكْمِلَ مَا فَاتَكَ، وَقَاعِدَةُ الْمَالِكِيَّةِ:\n• فِي الْقِرَاءَةِ (الْقَوْلِ): مَا فَاتَكَ هُوَ أَوَّلُ صَلَاتِكَ، فَتَقْرَأُ فِيهِ كَمَا فَاتَكَ: الْفَاتِحَةَ وَسُورَةً، جَهْرًا فِي الْجَهْرِيَّةِ.\n• فِي الْأَفْعَالِ (الْجُلُوسِ): مَا أَدْرَكْتَهُ هُوَ أَوَّلُ صَلَاتِكَ، فَتَبْنِي عَلَيْهِ فِي الْجُلُوسِ وَالتَّشَهُّدِ.\nوَبِعِبَارَةٍ مُخْتَصَرَةٍ: تَقْضِي الْقَوْلَ وَتَبْنِي الْفِعْلَ.",
                "es": "Tras el salām del imam te levantas para completar lo que te faltó. La regla de los malikíes:\n• En la recitación: lo que te perdiste es el principio de tu oración, así que lo recitas como lo perdiste: Al-Fātiḥa y una sura, en voz alta si la oración es en voz alta.\n• En los actos (sentarse): lo que alcanzaste es el principio de tu oración, así que te sientas y haces el tashahhud contando a partir de ahí.\nEn resumen: recuperas la recitación y continúas los actos."
              },
              {
                "id": "hanafi",
                "ar": "مَا يَقْضِيهِ الْمَسْبُوقُ هُوَ أَوَّلُ صَلَاتِهِ فِي حَقِّ الْقِرَاءَةِ، فَيَقْرَأُ فِيهِ الْفَاتِحَةَ وَسُورَةً، وَآخِرُهَا فِي حَقِّ التَّشَهُّدِ، فَيَجْلِسُ عَلَى حَسَبِ مَا أَدْرَكَ. وَهُوَ قَرِيبٌ مِنْ قَوْلِ الْمَالِكِيَّةِ.",
                "es": "Lo que recupera quien llega tarde es el principio de su oración en cuanto a la recitación, así que recita Al-Fātiḥa y una sura; y es el final en cuanto al tashahhud, así que se sienta según lo que alcanzó. Es parecido a la postura malikí."
              },
              {
                "id": "shafii",
                "ar": "مَا أَدْرَكَهُ الْمَسْبُوقُ مَعَ الْإِمَامِ هُوَ أَوَّلُ صَلَاتِهِ، وَمَا يَقْضِيهِ آخِرُهَا. فَإِذَا أَدْرَكَ رَكْعَتَيْنِ مِنَ الرُّبَاعِيَّةِ أَتَى بِرَكْعَتَيْنِ بِالْفَاتِحَةِ، وَيُسْتَحَبُّ أَنْ يَقْرَأَ السُّورَةَ فِيهِمَا إِنْ فَاتَتْهُ مَعَ الْإِمَامِ.",
                "es": "Lo que alcanzó con el imam es el principio de su oración, y lo que recupera es el final. Si alcanzó dos rakʿas de una oración de cuatro, reza dos rakʿas con Al-Fātiḥa, y es recomendable añadir la sura si no la pudo recitar con el imam."
              },
              {
                "id": "hanbali",
                "ar": "مَا أَدْرَكَهُ الْمَسْبُوقُ آخِرُ صَلَاتِهِ، وَمَا يَقْضِيهِ أَوَّلُهَا: يَسْتَفْتِحُ وَيَتَعَوَّذُ وَيَقْرَأُ الْفَاتِحَةَ وَسُورَةً. لَكِنْ إِذَا أَدْرَكَ رَكْعَةً مِنَ الْمَغْرِبِ أَوِ الرُّبَاعِيَّةِ تَشَهَّدَ عَقِبَ قَضَاءِ رَكْعَةٍ.",
                "es": "Lo que alcanzó es el final de su oración y lo que recupera es el principio: hace la súplica de apertura, el taʿawwudh y recita Al-Fātiḥa y una sura. Pero si alcanzó una rakʿa del Maghrib o de una oración de cuatro, hace el tashahhud después de recuperar una rakʿa."
              }
            ]
          },
          {
            "isInfo": true,
            "text": "هَلْ تَقُومُ بِتَكْبِيرٍ؟",
            "titleEs": "¿Te levantas con takbīr?",
            "explanationAr": "• إِذَا كَانَ جُلُوسُكَ الْأَخِيرُ مَعَ الْإِمَامِ هُوَ ثَانِيَتَكَ أَنْتَ (أَدْرَكْتَ رَكْعَتَيْنِ)، أَوْ أَدْرَكْتَ أَقَلَّ مِنْ رَكْعَةٍ: تَقُومُ بِتَكْبِيرٍ.\n• وَإِلَّا (أَدْرَكْتَ رَكْعَةً أَوْ ثَلَاثًا): تَقُومُ بِغَيْرِ تَكْبِيرٍ، لِأَنَّ ذَلِكَ الْجُلُوسَ لَمْ يَكُنْ فِي مَوْضِعِ جُلُوسِكَ.",
            "explanationEs": "• Si tu última sentada con el imam era tu segunda rakʿa (alcanzaste dos rakʿas), o alcanzaste menos de una rakʿa: te levantas diciendo «Allāhu akbar».\n• Si no (alcanzaste una o tres rakʿas): te levantas sin decir «Allāhu akbar», porque esa sentada no correspondía a tu propia oración."
          },
          {
            "isInfo": true,
            "text": "أَمْثِلَةٌ: الظُّهْرُ وَالْعَصْرُ وَالْعِشَاءُ",
            "titleEs": "Ejemplos: Ẓuhr, ʿAṣr e ʿIshāʾ",
            "explanationAr": "• فَاتَتْكَ رَكْعَةٌ (أَدْرَكْتَ ثَلَاثًا): تَقُومُ بِلَا تَكْبِيرٍ، وَتَأْتِي بِرَكْعَةٍ بِالْفَاتِحَةِ وَسُورَةٍ، ثُمَّ تَجْلِسُ وَتَتَشَهَّدُ وَتُسَلِّمُ.\n• فَاتَتْكَ رَكْعَتَانِ (أَدْرَكْتَ رَكْعَتَيْنِ): تَقُومُ بِتَكْبِيرٍ، وَتَأْتِي بِرَكْعَتَيْنِ بِالْفَاتِحَةِ وَسُورَةٍ فِي كُلٍّ مِنْهُمَا، وَلَا تَجْلِسُ بَيْنَهُمَا، ثُمَّ تَتَشَهَّدُ وَتُسَلِّمُ.\n• فَاتَتْكَ ثَلَاثٌ (أَدْرَكْتَ رَكْعَةً): تَقُومُ بِلَا تَكْبِيرٍ، وَتَأْتِي بِرَكْعَةٍ بِالْفَاتِحَةِ وَسُورَةٍ وَتَجْلِسُ لِلتَّشَهُّدِ (لِأَنَّهَا ثَانِيَتُكَ)، ثُمَّ تَقُومُ بِتَكْبِيرٍ فَتَأْتِي بِرَكْعَةٍ بِالْفَاتِحَةِ وَسُورَةٍ وَلَا تَجْلِسُ، ثُمَّ بِرَكْعَةٍ بِالْفَاتِحَةِ وَحْدَهَا، وَتَتَشَهَّدُ وَتُسَلِّمُ.\nوَفِي الْعِشَاءِ تَجْهَرُ فِيمَا تَقْضِيهِ مِنَ الرَّكْعَتَيْنِ الْأُولَيَيْنِ.",
            "explanationEs": "• Te faltó una rakʿa (alcanzaste tres): te levantas sin takbīr, rezas una rakʿa con Al-Fātiḥa y una sura, te sientas, haces el tashahhud y saludas.\n• Te faltaron dos (alcanzaste dos): te levantas con takbīr, rezas dos rakʿas con Al-Fātiḥa y una sura en cada una, sin sentarte entre ellas, y luego haces el tashahhud y saludas.\n• Te faltaron tres (alcanzaste una): te levantas sin takbīr; rezas una rakʿa con Al-Fātiḥa y una sura y te sientas para el tashahhud (porque es tu segunda); te levantas con takbīr y rezas otra con Al-Fātiḥa y una sura, sin sentarte; después una con solo Al-Fātiḥa, haces el tashahhud y saludas.\nEn el ʿIshāʾ, lo que recuperes de las dos primeras rakʿas lo recitas en voz alta."
          },
          {
            "isInfo": true,
            "text": "أَمْثِلَةٌ: الْمَغْرِبُ وَالصُّبْحُ",
            "titleEs": "Ejemplos: Maghrib y Fajr",
            "explanationAr": "• الْمَغْرِبُ، فَاتَتْكَ رَكْعَةٌ (أَدْرَكْتَ رَكْعَتَيْنِ): تَقُومُ بِتَكْبِيرٍ، وَتَأْتِي بِرَكْعَةٍ بِالْفَاتِحَةِ وَسُورَةٍ جَهْرًا، ثُمَّ تَتَشَهَّدُ وَتُسَلِّمُ.\n• الْمَغْرِبُ، فَاتَتْكَ رَكْعَتَانِ (أَدْرَكْتَ رَكْعَةً): تَقُومُ بِلَا تَكْبِيرٍ، وَتَأْتِي بِرَكْعَةٍ بِالْفَاتِحَةِ وَسُورَةٍ جَهْرًا وَتَجْلِسُ لِلتَّشَهُّدِ، ثُمَّ تَقُومُ بِتَكْبِيرٍ فَتَأْتِي بِرَكْعَةٍ بِالْفَاتِحَةِ وَسُورَةٍ جَهْرًا، ثُمَّ تَتَشَهَّدُ وَتُسَلِّمُ. فَتَكُونُ قَدْ جَلَسْتَ ثَلَاثَ مَرَّاتٍ.\n• الصُّبْحُ، فَاتَتْكَ رَكْعَةٌ: تَقُومُ بِلَا تَكْبِيرٍ، وَتَأْتِي بِرَكْعَةٍ بِالْفَاتِحَةِ وَسُورَةٍ جَهْرًا، ثُمَّ تَتَشَهَّدُ وَتُسَلِّمُ.",
            "explanationEs": "• Maghrib, te faltó una rakʿa (alcanzaste dos): te levantas con takbīr, rezas una rakʿa con Al-Fātiḥa y una sura en voz alta, haces el tashahhud y saludas.\n• Maghrib, te faltaron dos (alcanzaste una): te levantas sin takbīr; rezas una rakʿa con Al-Fātiḥa y una sura en voz alta y te sientas para el tashahhud; te levantas con takbīr y rezas otra con Al-Fātiḥa y una sura en voz alta; haces el tashahhud y saludas. Así te habrás sentado tres veces.\n• Fajr, te faltó una rakʿa: te levantas sin takbīr, rezas una rakʿa con Al-Fātiḥa y una sura en voz alta, haces el tashahhud y saludas."
          },
          {
            "isInfo": true,
            "text": "الْمَسْبُوقُ وَسُجُودُ السَّهْوِ",
            "titleEs": "El masbūq y la postración del olvido",
            "madhahib": [
              {
                "id": "maliki",
                "ar": "• إِذَا سَجَدَ الْإِمَامُ قَبْلَ السَّلَامِ: تَسْجُدُ مَعَهُ إِنْ أَدْرَكْتَ مَعَهُ رَكْعَةً كَامِلَةً، ثُمَّ تَقُومُ بَعْدَ سَلَامِهِ لِتُكْمِلَ.\n• إِذَا سَجَدَ بَعْدَ السَّلَامِ: لَا تَسْجُدُ مَعَهُ، بَلْ تَقُومُ لِتُكْمِلَ صَلَاتَكَ، ثُمَّ تَسْجُدُ بَعْدَ سَلَامِكَ أَنْتَ (إِنْ أَدْرَكْتَ مَعَهُ رَكْعَةً).\n• وَإِذَا سَهَوْتَ أَنْتَ فِيمَا تَقْضِيهِ بَعْدَ سَلَامِ الْإِمَامِ، فَأَنْتَ كَالْمُصَلِّي وَحْدَهُ: تَسْجُدُ لِسَهْوِكَ.",
                "es": "• Si el imam se postra antes del salām: te postras con él si alcanzaste con él al menos una rakʿa completa, y tras su salām te levantas para completar.\n• Si se postra después del salām: no te postras con él; te levantas a completar tu oración y te postras después de tu propio salām (si alcanzaste con él una rakʿa).\n• Si te equivocas tú en lo que recuperas después del salām del imam, eres como quien reza solo: te postras por tu propio olvido."
              },
              {
                "id": "hanafi",
                "ar": "يَسْجُدُ الْمَسْبُوقُ مَعَ إِمَامِهِ بَعْدَ سَلَامِهِ (وَلَا يُسَلِّمُ مَعَهُ)، ثُمَّ يَقُومُ لِيَقْضِيَ مَا فَاتَهُ.",
                "es": "Quien llega tarde se postra con su imam después del salām de este (sin saludar con él), y luego se levanta a recuperar lo que le faltó."
              },
              {
                "id": "shafii",
                "ar": "يَسْجُدُ الْمَسْبُوقُ مَعَ إِمَامِهِ، ثُمَّ يُعِيدُ السُّجُودَ فِي آخِرِ صَلَاتِهِ قَبْلَ سَلَامِهِ.",
                "es": "Quien llega tarde se postra con su imam, y vuelve a hacer la postración al final de su oración, antes de su salām."
              },
              {
                "id": "hanbali",
                "ar": "إِنْ سَجَدَ الْإِمَامُ قَبْلَ السَّلَامِ سَجَدَ الْمَسْبُوقُ مَعَهُ، ثُمَّ قَامَ لِيَقْضِيَ. وَإِنْ سَجَدَ بَعْدَ السَّلَامِ قَامَ لِيَقْضِيَ، ثُمَّ سَجَدَ بَعْدَ سَلَامِهِ.",
                "es": "Si el imam se postra antes del salām, quien llega tarde se postra con él y luego se levanta a recuperar. Si se postra después del salām, se levanta a recuperar y se postra después de su propio salām."
              }
            ]
          }
        ]
      }
    ];

(function (global) {
  const groups = guiaData;
  const sectionModule = {
    id: 'guia',
    getGroups: function () { return groups; },
    findGroup: function (groupId) { return groups.find(function (group) { return group.id === groupId; }) || null; },
    getTitle: function (texts) { return texts.guiaSectionTitle; },
    isDevotional: true,
    isQuranItem: function () { return false; },
    getCountUnit: function (isEs) { return isEs ? 'apartados' : 'فقرات'; },
    open: function (skipPushState) {
      if (typeof global.showSection === 'function') global.showSection('guia', !!skipPushState);
    }
  };
  global.ZadSectionModules = global.ZadSectionModules || {};
  global.ZadSectionModules['guia'] = sectionModule;
})(window);
