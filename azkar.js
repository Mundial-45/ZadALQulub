// azkar — datos y funciones específicas de sección.
const azkarData = [
      {
            "id": "sabah",
            "titleAr": "أذكار الصباح",
            "titleEs": "Azkar de la Mañana",
            "items": [
                  {
                    "itemNumber": 1,
                    "text": "الْحَمْدُ لِلَّهِ وَحْدَهُ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى مَنْ لَا نَبِيَّ بَعْدَهُ\n\nأَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ:\n﴿ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ۝﴾",
                    "latin": "Al-ḥamdu lillāhi waḥdahu, waṣ-ṣalātu wa-s-salāmu ʿalā man lā nabiyya baʿdahu.\n\nAllāhu lā ilāha illā huwal-ḥayyul-qayyūmu, lā taʾkhudhuhu sinatun wa lā nawm, lahū mā fis-samāwāti wa mā fil-arḍ, man dhal-ladhī yashfaʿu ʿindahū illā bi-idhnihi, yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shayʾin min ʿilmihī illā bimā shāʾa, wasiʿa kursiyyuhus-samāwāti wal-arḍa, wa lā yaʾūduhū ḥifẓuhumā, wa huwal-ʿaliyyul-ʿaẓīm.",
                    "explanationEs": "Alabado sea Allah, Único, y que la paz y las bendiciones sean sobre aquel después de quien no habrá ningún profeta.\n\nMe refugio en Allah de Shaitán el maldito:\n¡Allah! No existe nada ni nadie con derecho a ser adorado excepto Él, el Viviente [Eterno], el Sustentador [y Gobernador de toda la creación]. No Lo afectan somnolencia ni sueño. Suyo es cuanto hay en los cielos y la Tierra. ¿Quién podrá interceder ante Él si no es con Su permiso? Conoce el pasado y el futuro [lo manifiesto y lo oculto] y nadie abarca de Su conocimiento salvo lo que Él quiere. El escabel de Su Trono abarca los cielos y la Tierra, y la custodia [y mantenimiento] de ambos no Lo agobia. Y Él es el Sublime, el Grandioso. [Al-Baqarah: 255]",
                    "count": 1,
                    "maxCount": 1,
                    "note": " آية الكرسي",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q002-255.mp3"
                    ]
                  },
                  {
                    "itemNumber": 2,
                    "text": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n﴿قُلۡ هُوَ ٱللَّهُ أَحَدٌ۝ ٱللَّهُ ٱلصَّمَدُ۝ لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ۝ وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ۝﴾",
                    "latin": "Bismillāhir-raḥmānir-raḥīm. Qul huwal-lāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakul-lahū kufuwan aḥad.",
                    "explanationEs": "En el nombre de Allah, el Compasivo, el Misericordioso. Di: «Él es Allah, Uno. Allah es el Absoluto. No engendró ni fue engendrado. Y no hay nada ni nadie que sea semejante a Él». (Surah Al-Ikhlas)",
                    "count": 3,
                    "maxCount": 3,
                    "note": "سورة الإخلاص",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q112.mp3"
                    ],
                    "audioUrl": ""
                  },
                  {
                    "itemNumber": 3,
                    "text": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n﴿قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ۝ مِن شَرِّ مَا خَلَقَ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ۝ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ۝﴾",
                    "latin": "Bismillāhir-raḥmānir-raḥīm. Qul aʿūdhu bi-rabbil-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharrin-naffāthāti fil-ʿuqad. Wa min sharri ḥāsidin idhā ḥasad.",
                    "explanationEs": "En el nombre de Allah, el Compasivo, el Misericordioso. Di: «Me refugio en el Señor del amanecer, de todo el mal que existe en lo que Él creó, del mal de la oscuridad de la noche cuando se extiende, del mal de las [hechiceras] sopladoras de nudos, y del mal del envidioso cuando envidia». (Surah Al-Falaq)",
                    "count": 3,
                    "maxCount": 3,
                    "note": "سورة الفلق",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q113.mp3"
                    ]
                  },
                  {
                    "itemNumber": 4,
                    "text": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n﴿قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ۝ مَلِكِ ٱلنَّاسِ۝ إِلَٰهِ ٱلنَّاسِ۝ مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ۝ ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ۝ مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ۝﴾",
                    "latin": "Bismillāhir-raḥmānir-raḥīm. Qul aʿūdhu bi-rabbin-nās. Malikin-nās. Ilāhin-nās. Min sharril-waswāsil-khannās. Alladhī yuwaswisu fī ṣudūrin-nās. Minal-jinnati wan-nās.",
                    "explanationEs": "En el nombre de Allah, el Compasivo, el Misericordioso. Di: «Me refugio en el Señor de los seres humanos, en el Rey Soberano de los seres humanos, en el [único] Dios de los seres humanos, de la maldad del [demonio] susurrador que huye [cuando el nombre de Allah es mencionado], que susurra en los corazones de los seres humanos, y existe entre los yinn y entre los seres humanos». (Surah An-Nas)",
                    "count": 3,
                    "maxCount": 3,
                    "note": "سورة الناس",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q114.mp3"
                    ]
                  },
                  {
                    "itemNumber": 5,
                    "text": "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
                    "latin": "Aṣbaḥnā wa aṣbaḥal-mulku lillāh, wal-ḥamdu lillāh, lā ilāha ill-Allāhu waḥdahū lā sharīka lah, lahul-mulku wa lahul-ḥamdu wa huwa ʿalā kulli shayʾin qadīr. Rabbi asʾaluka khayra mā fī hādhā l-yawmi wa khayra mā baʿdah, wa aʿūdhu bika min sharri mā fī hādhā l-yawmi wa sharri mā baʿdah, Rabbi aʿūdhu bika minal-kasali wa sūʾil-kibar, Rabbi aʿūdhu bika min ʿadhābin fin-nāri wa ʿadhābin fil-qabr.",
                    "explanationEs": "Hemos llegado a la mañana y el dominio pertenece a Allah, y alabado sea Allah. No hay más divinidad que Allah, Único, sin socios. Suyo es el dominio y Suya es la alabanza, y Él es sobre toda cosa Todopoderoso. Señor mío, Te pido el bien de este día y el bien de lo que le sigue, y me refugio en Ti del mal de este día y del mal de lo que le sigue. Señor mío, me refugio en Ti de la pereza y del mal de la vejez. Señor mío, me refugio en Ti del castigo en el Fuego y del castigo en la tumba.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%205.mp3"
                    ],
                    "note": "",
                    "audioUrl": ""
                  },
                  {
                    "itemNumber": 6,
                    "text": "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.",
                    "latin": "Allāhumma bika aṣbaḥnā, wa bika amsaynā, wa bika naḥyā, wa bika namūtu wa ilaykan-nushūr.",
                    "explanationEs": "¡Oh Allah! Por Ti amanecemos, por Ti anochecemos, por Ti vivimos, por Ti morimos y hacia Ti es la resurrección.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%206.mp3"
                    ]
                  },
                  {
                    "itemNumber": 7,
                    "text": "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.",
                    "latin": "Allāhumma anta Rabbī lā ilāha illā ant, khalaqtanī wa anā ʿabduk, wa anā ʿalā ʿahdika wa waʿdika mas-taṭaʿtu, aʿūdhu bika min sharri mā ṣanaʿtu, abūʾu laka bi-niʿmatika ʿalayya, wa abūʾu bi-dhanbī faghfir lī fa-innahū lā yaghfirudh-dhunūba illā ant.",
                    "explanationEs": "¡Oh Allah! Tú eres mi Señor, no hay más divinidad que Tú. Me creaste y yo soy Tu siervo, y mantengo Tu pacto y Tu promesa en la medida de mis posibilidades. Me refugio en Ti del mal que he cometido. Reconozco ante Ti Tus favores sobre mí y Te confieso mis pecados, así que perdóname, pues nadie perdona los pecados excepto Tú.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%207.mp3"
                    ]
                  },
                  {
                    "itemNumber": 8,
                    "text": "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.",
                    "latin": "Allāhumma innī aṣbaḥtu ushhiduka, wa ushhidu ḥamalata ʿarshika, wa malāʾikataka, wa jamīʿa khalqika, annaka ant-Allāhu lā ilāha illā anta waḥdaka lā sharīka laka, wa anna Muḥammadan ʿabduka wa rasūluk.",
                    "explanationEs": "¡Oh Allah! He amanecido tomándote como testigo, y tomando como testigos a los portadores de Tu Trono, a Tus ángeles y a toda Tu creación, de que Tú eres Allah, no hay más divinidad que Tú, Único, sin socios, y que Muhammad es Tu siervo y Tu Mensajero.",
                    "count": 4,
                    "maxCount": 4,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%208.mp3"
                    ]
                  },
                  {
                    "itemNumber": 9,
                    "text": "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.",
                    "latin": "Allāhumma mā aṣbaḥa bī min niʿmatin aw bi-aḥadin min khalqika fa-minka waḥdaka lā sharīka laka, fa-lakal-ḥamdu wa lakash-shukr.",
                    "explanationEs": "¡Oh Allah! Cualquier bendición que amaneciera en mí o en cualquiera de Tus criaturas proviene únicamente de Ti, sin socios. A Ti pertenece la alabanza y a Ti el agradecimiento.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%209.mp3"
                    ]
                  },
                  {
                    "itemNumber": 10,
                    "text": "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.",
                    "latin": "Allāhumma ʿāfinī fī badanī, Allāhumma ʿāfinī fī samʿī, Allāhumma ʿāfinī fī baṣarī, lā ilāha illā ant. Allāhumma innī aʿūdhu bika minal-kufri wal-faqr, wa aʿūdhu bika min ʿadhābil-qabr, lā ilāha illā ant.",
                    "explanationEs": "¡Oh Allah! Concédeme salud en mi cuerpo. ¡Oh Allah! Concédeme salud en mi oído. ¡Oh Allah! Concédeme salud en mi vista. No hay más divinidad que Tú. ¡Oh Allah! Me refugio en Ti de la incredulidad y de la pobreza, y me refugio en Ti del castigo de la tumba. No hay más divinidad que Tú.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2010.mp3"
                    ]
                  },
                  {
                    "itemNumber": 11,
                    "text": "حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
                    "latin": "Ḥasbiy-Allāhu lā ilāha illā huwa ʿalayhi tawakkaltu wa huwa Rabbul-ʿarshil-ʿaẓīm.",
                    "explanationEs": "Allah me basta; no hay más divinidad que Él. En Él he depositado mi confianza y Él es el Señor del Trono Grandioso.",
                    "count": 7,
                    "maxCount": 7,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2011.mp3"
                    ]
                  },
                  {
                    "itemNumber": 12,
                    "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
                    "latin": "Allāhumma innī asʾalukal-ʿafwa wal-ʿāfiyata fid-dunyā wal-ākhirah. Allāhumma innī asʾalukal-ʿafwa wal-ʿāfiyata fī dīnī wa dunyāya wa ahlī wa mālī. Allāhummas-tur ʿawrātī wa āmin rawʿātī. Allāhummaḥ-faẓnī min bayni yadayya wa min khalfī wa ʿan yamīnī wa ʿan shimālī wa min fawqī, wa aʿūdhu bi-ʿaẓamatika an ughtāla min taḥtī.",
                    "explanationEs": "¡Oh Allah! Te pido el perdón y la salud en esta vida y en la otra. ¡Oh Allah! Te pido el perdón y la salud en mi religión, mis asuntos mundanales, mi familia y mis bienes. ¡Oh Allah! Cubre mis faltas y calma mis temores. ¡Oh Allah! Protégeme por delante, por detrás, a mi derecha, a mi izquierda y por encima de mí; y me refugio en Tu grandeza de ser tragado por la tierra.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2012.mp3"
                    ]
                  },
                  {
                    "itemNumber": 13,
                    "text": "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
                    "latin": "Allāhumma ʿālimal-ghaybi wash-shahādati fāṭiras-samāwāti wal-arḍ, Rabba kulli shayʾin wa malīkah, ash-hadu an lā ilāha illā ant, aʿūdhu bika min sharri nafsī, wa min sharrish-shayṭāni wa shirkihi, wa an aqtarifa ʿalā nafsī sūʾan aw ajurrahū ilā muslim.",
                    "explanationEs": "¡Oh Allah! Conocedor de lo oculto y de lo manifiesto, Creador de los cielos y de la tierra, Señor de todas las cosas y su Soberano. Testifico que no hay más divinidad que Tú. Me refugio en Ti del mal de mi alma, del mal de Shaitán y de su idolatría, y de cometer un mal contra mí mismo o infligírselo a un musulmán.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2013.mp3"
                    ]
                  },
                  {
                    "itemNumber": 14,
                    "text": "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
                    "latin": "Bismillāhil-ladhī lā yaḍurru maʿasmihī shayʾun fil-arḍi wa lā fis-samāʾi wa huwas-samīʿul-ʿalīm.",
                    "explanationEs": "En el nombre de Allah, con Cuyo nombre nada daña en la tierra ni en el cielo, y Él es el Omnioyente, el Omnisciente.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2014.mp3"
                    ]
                  },
                  {
                    "itemNumber": 15,
                    "text": "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.",
                    "latin": "Raḍītu billāhi Rabban, wa bil-Islāmi dīnan, wa bi-Muḥammadin ṣall-Allāhu ʿalayhi wa sallama nabiyyā.",
                    "explanationEs": "Estoy complacido con Allah como Señor, con el Islam como religión y con Muhammad (que la paz y las bendiciones de Allah sean con él) como Profeta.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2015.mp3"
                    ]
                  },
                  {
                    "itemNumber": 16,
                    "text": "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
                    "latin": "Yā Ḥayyu yā Qayyūmu bi-raḥmatika astaghīthu aṣliḥ lī shaʾnī kullahu wa lā takilnī ilā nafsī ṭarfata ʿayn.",
                    "explanationEs": "¡Oh Viviente! ¡Oh Subsistente! En Tu misericordia busco auxilio; rectifica todos mis asuntos y no me encomiendes a mí mismo ni por el parpadeo de un ojo.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2016.mp3"
                    ]
                  },
                  {
                    "itemNumber": 17,
                    "text": "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.",
                    "latin": "Aṣbaḥnā wa aṣbaḥal-mulku lillāhi Rabbil-ʿālamīn, Allāhumma innī asʾaluka khayra hādhā l-yawmi: fatḥahū, wa naṣrahū, wa nūrahū, wa barakatahū, wa hudāh, wa aʿūdhu bika min sharri mā fīhi wa sharri mā baʿdah.",
                    "explanationEs": "Hemos llegado a la mañana y el dominio pertenece a Allah, Señor de los mundos. ¡Oh Allah! Te pido el bien de este día: su conquista, su victoria, su luz, su bendición y su guía; y me refugio en Ti del mal que hay en él y del mal de lo que le sigue.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2017.mp3"
                    ]
                  },
                  {
                    "itemNumber": 18,
                    "text": "أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.",
                    "latin": "Aṣbaḥnā ʿalā fiṭratil-Islām, wa ʿalā kalimatil-ikhlāṣ, wa ʿalā dīni nabiyyinā Muḥammadin ṣall-Allāhu ʿalayhi wa sallam, wa ʿalā millati abīnā Ibrāhīma ḥanīfan musliman wa mā kāna minal-mushrikīn.",
                    "explanationEs": "Amanecemos en la naturaleza pura del Islam, en la palabra de la devoción sincera, en la religión de nuestro Profeta Muhammad (que la paz y las bendiciones de Allah sean con él) y en la fe de nuestro padre Ibrahim, monoteísta puro y musulmán, quien no fue de los asociadores.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2018.mp3"
                    ]
                  },
                  {
                    "itemNumber": 19,
                    "text": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.",
                    "latin": "Subḥān-Allāhi wa bi-ḥamdihi: ʿadada khalqihi, wa riḍā nafsihi, wa zinata ʿarshihi, wa midāda kalimātih.",
                    "explanationEs": "Glorificado sea Allah y alabado sea, tantas veces como el número de Su creación, según Su complacencia, el peso de Su Trono y la tinta de Sus palabras.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2019.mp3"
                    ]
                  },
                  {
                    "itemNumber": 20,
                    "text": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
                    "latin": "Aʿūdhu bi-kalimātil-lāhit-tāmmāti min sharri mā khalaq.",
                    "explanationEs": "Me refugio en las palabras perfectas de Allah del mal de lo que ha creado.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2020.mp3"
                    ]
                  },
                  {
                    "itemNumber": 21,
                    "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.",
                    "latin": "Allāhumma innī asʾaluka ʿilman nāfiʿan, wa rizqan ṭayyiban, wa ʿamalan mutaqabbalā.",
                    "explanationEs": "¡Oh Allah! Te pido un conocimiento beneficioso, un sustento puro y una obra aceptada.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2021.mp3"
                    ]
                  },
                  {
                    "itemNumber": 22,
                    "text": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
                    "latin": "Lā ilāha ill-Allāhu waḥdahū lā sharīka lah, lahul-mulku wa lahul-ḥamdu, wa huwa ʿalā kulli shayʾin qadīr.",
                    "explanationEs": "No hay más divinidad que Allah, Único, sin socios. Suyo es el dominio y Suya es la alabanza, y Él es sobre toda cosa Todopoderoso.",
                    "count": 10,
                    "maxCount": 10,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2022.mp3"
                    ]
                  },
                  {
                    "itemNumber": 23,
                    "text": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
                    "latin": "Subḥān-Allāhi wa bi-ḥamdih.",
                    "explanationEs": "Glorificado sea Allah y alabado sea.",
                    "count": 100,
                    "maxCount": 100,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2023.mp3"
                    ]
                  },
                  {
                    "itemNumber": 24,
                    "text": "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",
                    "latin": "Astaghfirullāha wa atūbu ilayh.",
                    "explanationEs": "Pido perdón a Allah y me arrepiento ante Él.",
                    "count": 100,
                    "maxCount": 100,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2024.mp3"
                    ]
                  },
                  {
                    "itemNumber": 25,
                    "text": "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",
                    "latin": "Allāhumma ṣalli wa sallim ʿalā nabiyyinā Muḥammad.",
                    "explanationEs": "¡Oh Allah! Bendice y otorga la paz a nuestro Profeta Muhammad.",
                    "count": 10,
                    "maxCount": 10,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2025.mp3"
                    ]
                  }
            ]
      },
      {
            "id": "masaa",
            "titleAr": "أذكار المساء",
            "titleEs": "Azkar de la Tarde",
            "items": [
                  {
                    "itemNumber": 26,
                    "text": "الْحَمْدُ لِلَّهِ وَحْدَهُ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى مَنْ لَا نَبِيَّ بَعْدَهُ\n\nأَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ:\n﴿ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ۝﴾",
                    "latin": "Al-ḥamdu lillāhi waḥdahu, waṣ-ṣalātu wa-s-salāmu ʿalā man lā nabiyya baʿdahu.\n\nAllāhu lā ilāha illā huwal-ḥayyul-qayyūmu, lā taʾkhudhuhu sinatun wa lā nawm, lahū mā fis-samāwāti wa mā fil-arḍ, man dhal-ladhī yashfaʿu ʿindahū illā bi-idhnihi, yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shayʾin min ʿilmihī illā bimā shāʾa, wasiʿa kursiyyuhus-samāwāti wal-arḍa, wa lā yaʾūduhū ḥifẓuhumā, wa huwal-ʿaliyyul-ʿaẓīm.",
                    "explanationEs": "Alabado sea Allah, Único, y que la paz y las bendiciones sean sobre aquel después de quien no habrá ningún profeta.\n\nMe refugio en Allah de Shaitán el maldito:\n¡Allah! No existe nada ni nadie con derecho a ser adorado excepto Él, el Viviente [Eterno], el Sustentador [y Gobernador de toda la creación]. No Lo afectan somnolencia ni sueño. Suyo es cuanto hay en los cielos y la Tierra. ¿Quién podrá interceder ante Él si no es con Su permiso? Conoce el pasado y el futuro [lo manifiesto y lo oculto] y nadie abarca de Su conocimiento salvo lo que Él quiere. El escabel de Su Trono abarca los cielos y la Tierra, y la custodia [y mantenimiento] de ambos no Lo agobia. Y Él es el Sublime, el Grandioso. [Al-Baqarah: 255]",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q002-255.mp3"
                    ]
                  },
                  {
                    "itemNumber": 27,
                    "text": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n﴿قُلۡ هُوَ ٱللَّهُ أَحَدٌ۝ ٱللَّهُ ٱلصَّمَدُ۝ لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ۝ وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ۝﴾",
                    "latin": "Bismillāhir-raḥmānir-raḥīm. Qul huwal-lāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakul-lahū kufuwan aḥad.",
                    "explanationEs": "En el nombre de Allah, el Compasivo, el Misericordioso. Di: «Él es Allah, Uno. Allah es el Absoluto. No engendró ni fue engendrado. Y no hay nada ni nadie que sea semejante a Él». (Surah Al-Ikhlas)",
                    "count": 3,
                    "maxCount": 3,
                    "note": "سورة الإخلاص",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q112.mp3"
                    ]
                  },
                  {
                    "itemNumber": 28,
                    "text": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n﴿قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ۝ مِن شَرِّ مَا خَلَقَ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ۝ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ۝﴾",
                    "latin": "Bismillāhir-raḥmānir-raḥīm. Qul aʿūdhu bi-rabbil-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharrin-naffāthāti fil-ʿuqad. Wa min sharri ḥāsidin idhā ḥasad.",
                    "explanationEs": "En el nombre de Allah, el Compasivo, el Misericordioso. Di: «Me refugio en el Señor del amanecer, de todo el mal que existe en lo que Él creó, del mal de la oscuridad de la noche cuando se extiende, del mal de las [hechiceras] sopladoras de nudos, y del mal del envidioso cuando envidia». (Surah Al-Falaq)",
                    "count": 3,
                    "maxCount": 3,
                    "note": "سورة الفلق",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q113.mp3"
                    ]
                  },
                  {
                    "itemNumber": 29,
                    "text": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n﴿قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ۝ مَلِكِ ٱلنَّاسِ۝ إِلَٰهِ ٱلنَّاسِ۝ مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ۝ ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ۝ مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ۝﴾",
                    "latin": "Bismillāhir-raḥmānir-raḥīm. Qul aʿūdhu bi-rabbin-nās. Malikin-nās. Ilāhin-nās. Min sharril-waswāsil-khannās. Alladhī yuwaswisu fī ṣudūrin-nās. Minal-jinnati wan-nās.",
                    "explanationEs": "En el nombre de Allah, el Compasivo, el Misericordioso. Di: «Me refugio en el Señor de los seres humanos, en el Rey Soberano de los seres humanos, en el [único] Dios de los seres humanos, de la maldad del [demonio] susurrador que huye [cuando el nombre de Allah es mencionado], que susurra en los corazones de los seres humanos, y existe entre los yinn y entre los seres humanos». (Surah An-Nas)",
                    "count": 3,
                    "maxCount": 3,
                    "note": "سورة الناس",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q114.mp3"
                    ],
                    "audioUrl": ""
                  },
                  {
                    "itemNumber": 30,
                    "text": "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
                    "latin": "Amsaynā wa amsal-mulku lillāh, wal-ḥamdu lillāh, lā ilāha ill-Allāhu waḥdahū lā sharīka lah, lahul-mulku wa lahul-ḥamdu wa huwa ʿalā kulli shayʾin qadīr. Rabbi asʾaluka khayra mā fī hādhihi l-laylati wa khayra mā baʿdahā, wa aʿūdhu bika min sharri mā fī hādhihi l-laylati wa sharri mā baʿdahā, Rabbi aʿūdhu bika minal-kasali wa sūʾil-kibar, Rabbi aʿūdhu bika min ʿadhābin fin-nāri wa ʿadhābin fil-qabr.",
                    "explanationEs": "Hemos llegado a la tarde y el dominio pertenece a Allah, y alabado sea Allah. No hay más divinidad que Allah, Único, sin socios. Suyo es el dominio y Suya es la alabanza, y Él es sobre toda cosa Todopoderoso. Señor mío, Te pido el bien de esta noche y el bien de lo que le sigue, y me refugio en Ti del mal de esta noche y del mal de lo que le sigue. Señor mío, me refugio en Ti de la pereza y del mal de la vejez. Señor mío, me refugio en Ti del castigo en el Fuego y del castigo en la tumba.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%205m.mp3"
                    ]
                  },
                  {
                    "itemNumber": 31,
                    "text": "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ.",
                    "latin": "Allāhumma bika amsaynā, wa bika aṣbaḥnā, wa bika naḥyā, wa bika namūtu wa ilaykal-maṣīr.",
                    "explanationEs": "¡Oh Allah! Por Ti anochecemos, por Ti amanecemos, por Ti vivimos, por Ti morimos y hacia Ti es el retorno.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%206m.mp3"
                    ]
                  },
                  {
                    "itemNumber": 32,
                    "text": "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.",
                    "latin": "Allāhumma anta Rabbī lā ilāha illā ant, khalaqtanī wa anā ʿabduk, wa anā ʿalā ʿahdika wa waʿdika mas-taṭaʿtu, aʿūdhu bika min sharri mā ṣanaʿtu, abūʾu laka bi-niʿmatika ʿalayya, wa abūʾu bi-dhanbī faghfir lī fa-innahū lā yaghfirudh-dhunūba illā ant.",
                    "explanationEs": "¡Oh Allah! Tú eres mi Señor, no hay más divinidad que Tú. Me creaste y yo soy Tu siervo, y mantengo Tu pacto y Tu promesa en la medida de mis posibilidades. Me refugio en Ti del mal que he cometido. Reconozco ante Ti Tus favores sobre mí y Te confieso mis pecados, así que perdóname, pues nadie perdona los pecados excepto Tú.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%207.mp3"
                    ]
                  },
                  {
                    "itemNumber": 33,
                    "text": "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.",
                    "latin": "Allāhumma innī amsaytu ushhiduka, wa ushhidu ḥamalata ʿarshika, wa malāʾikataka, wa jamīʿa khalqika, annaka ant-Allāhu lā ilāha illā anta waḥdaka lā sharīka laka, wa anna Muḥammadan ʿabduka wa rasūluk.",
                    "explanationEs": "¡Oh Allah! He anochecido tomándote como testigo, y tomando como testigos a los portadores de Tu Trono, a Tus ángeles y a toda Tu creación, de que Tú eres Allah, no hay más divinidad que Tú, Único, sin socios, y que Muhammad es Tu siervo y Tu Mensajero.",
                    "count": 4,
                    "maxCount": 4,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%208m.mp3"
                    ]
                  },
                  {
                    "itemNumber": 34,
                    "text": "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.",
                    "latin": "Allāhumma mā amsā bī min niʿmatin aw bi-aḥadin min khalqika fa-minka waḥdaka lā sharīka laka, fa-lakal-ḥamdu wa lakash-shukr.",
                    "explanationEs": "¡Oh Allah! Cualquier bendición que anocheciera en mí o en cualquiera de Tus criaturas proviene únicamente de Ti, sin socios. A Ti pertenece la alabanza y a Ti el agradecimiento.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%209m.mp3"
                    ]
                  },
                  {
                    "itemNumber": 35,
                    "text": "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.",
                    "latin": "Allāhumma ʿāfinī fī badanī, Allāhumma ʿāfinī fī samʿī, Allāhumma ʿāfinī fī baṣarī, lā ilāha illā ant. Allāhumma innī aʿūdhu bika minal-kufri wal-faqr, wa aʿūdhu bika min ʿadhābil-qabr, lā ilāha illā ant.",
                    "explanationEs": "¡Oh Allah! Concédeme salud en mi cuerpo. ¡Oh Allah! Concédeme salud en mi oído. ¡Oh Allah! Concédeme salud en mi vista. No hay más divinidad que Tú. ¡Oh Allah! Me refugio en Ti de la incredulidad y de la pobreza, y me refugio en Ti del castigo de la tumba. No hay más divinidad que Tú.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2010.mp3"
                    ]
                  },
                  {
                    "itemNumber": 36,
                    "text": "حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
                    "latin": "Ḥasbiy-Allāhu lā ilāha illā huwa ʿalayhi tawakkaltu wa huwa Rabbul-ʿarshil-ʿaẓīm.",
                    "explanationEs": "Allah me basta; no hay más divinidad que Él. En Él he depositado mi confianza y Él es el Señor del Trono Grandioso.",
                    "count": 7,
                    "maxCount": 7,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2011.mp3"
                    ]
                  },
                  {
                    "itemNumber": 37,
                    "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
                    "latin": "Allāhumma innī asʾalukal-ʿafwa wal-ʿāfiyata fid-dunyā wal-ākhirah. Allāhumma innī asʾalukal-ʿafwa wal-ʿāfiyata fī dīnī wa dunyāya wa ahlī wa mālī. Allāhummas-tur ʿawrātī wa āmin rawʿātī. Allāhummaḥ-faẓnī min bayni yadayya wa min khalfī wa ʿan yamīnī wa ʿan shimālī wa min fawqī, wa aʿūdhu bi-ʿaẓamatika an ughtāla min taḥtī.",
                    "explanationEs": "¡Oh Allah! Te pido el perdón y la salud en esta vida y en la otra. ¡Oh Allah! Te pido el perdón y la salud en mi religión, mis asuntos mundanales, mi familia y mis bienes. ¡Oh Allah! Cubre mis faltas y calma mis temores. ¡Oh Allah! Protégeme por delante, por detrás, a mi derecha, a mi izquierda y por encima de mí; y me refugio en Tu grandeza de ser tragado por la tierra.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2012.mp3"
                    ]
                  },
                  {
                    "itemNumber": 38,
                    "text": "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
                    "latin": "Allāhumma ʿālimal-ghaybi wash-shahādati fāṭiras-samāwāti wal-arḍ, Rabba kulli shayʾin wa malīkah, ash-hadu an lā ilāha illā ant, aʿūdhu bika min sharri nafsī, wa min sharrish-shayṭāni wa shirkihi, wa an aqtarifa ʿalā nafsī sūʾan aw ajurrahū ilā muslim.",
                    "explanationEs": "¡Oh Allah! Conocedor de lo oculto y de lo manifiesto, Creador de los cielos y de la tierra, Señor de todas las cosas y su Soberano. Testifico que no hay más divinidad que Tú. Me refugio en Ti del mal de mi alma, del mal de Shaitán y de su idolatría, y de cometer un mal contra mí mismo o infligírselo a un musulmán.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2013.mp3"
                    ],
                    "note": "",
                    "audioUrl": ""
                  },
                  {
                    "itemNumber": 39,
                    "text": "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
                    "latin": "Bismillāhil-ladhī lā yaḍurru maʿasmihī shayʾun fil-arḍi wa lā fis-samāʾi wa huwas-samīʿul-ʿalīm.",
                    "explanationEs": "En el nombre de Allah, con Cuyo nombre nada daña en la tierra ni en el cielo, y Él es el Omnioyente, el Omnisciente.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2014.mp3"
                    ]
                  },
                  {
                    "itemNumber": 40,
                    "text": "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.",
                    "latin": "Raḍītu billāhi Rabban, wa bil-Islāmi dīnan, wa bi-Muḥammadin ṣall-Allāhu ʿalayhi wa sallama nabiyyā.",
                    "explanationEs": "Estoy complacido con Allah como Señor, con el Islam como religión y con Muhammad (que la paz y las bendiciones de Allah sean con él) como Profeta.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2015.mp3"
                    ]
                  },
                  {
                    "itemNumber": 41,
                    "text": "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
                    "latin": "Yā Ḥayyu yā Qayyūmu bi-raḥmatika astaghīthu aṣliḥ lī shaʾnī kullahu wa lā takilnī ilā nafsī ṭarfata ʿayn.",
                    "explanationEs": "¡Oh Viviente! ¡Oh Subsistente! En Tu misericordia busco auxilio; rectifica todos mis asuntos y no me encomiendes a mí mismo ni por el parpadeo de un ojo.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2016.mp3"
                    ],
                    "note": "",
                    "audioUrl": ""
                  },
                  {
                    "itemNumber": 42,
                    "text": "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.",
                    "latin": "Amsaynā wa amsal-mulku lillāhi Rabbil-ʿālamīn, Allāhumma innī asʾaluka khayra hādhihil-laylah: fatḥahā, wa naṣrahā, wa nūrahā, wa barakatahā, wa hudāhā, wa aʿūdhu bika min sharri mā fīhā wa sharri mā baʿdahā.",
                    "explanationEs": "Hemos llegado a la tarde y el dominio pertenece a Allah, Señor de los mundos. ¡Oh Allah! Te pido el bien de esta noche: su conquista, su victoria, su luz, su bendición y su guía; y me refugio en Ti del mal que hay en ella y del mal de lo que le sigue.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2017m.mp3"
                    ],
                    "note": "",
                    "audioUrl": ""
                  },
                  {
                    "itemNumber": 43,
                    "text": "أَمْسَيْنَا عَلَى فِطْرَةِ الإِسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.",
                    "latin": "Amsaynā ʿalā fiṭratil-Islām, wa ʿalā kalimatil-ikhlāṣ, wa ʿalā dīni nabiyyinā Muḥammadin ṣall-Allāhu ʿalayhi wa sallam, wa ʿalā millati abīnā Ibrāhīma ḥanīfan musliman wa mā kāna minal-mushrikīn.",
                    "explanationEs": "Anochecemos en la naturaleza pura del Islam, en la palabra de la devoción sincera, en la religión de nuestro Profeta Muhammad (que la paz y las bendiciones de Allah sean con él) y en la fe de nuestro padre Ibrahim, monoteísta puro y musulmán, quien no fue de los asociadores.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2018m.mp3"
                    ]
                  },
                  {
                    "itemNumber": 44,
                    "text": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.",
                    "latin": "Subḥān-Allāhi wa bi-ḥamdihi: ʿadada khalqihi, wa riḍā nafsihi, wa zinata ʿarshihi, wa midāda kalimātih.",
                    "explanationEs": "Glorificado sea Allah y alabado sea, tantas veces como el número de Su creación, según Su complacencia, el peso de Su Trono y la tinta de Sus palabras.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2019.mp3"
                    ]
                  },
                  {
                    "itemNumber": 45,
                    "text": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
                    "latin": "Aʿūdhu bi-kalimātil-lāhit-tāmmāti min sharri mā khalaq.",
                    "explanationEs": "Me refugio en las palabras perfectas de Allah del mal de lo que ha creado.",
                    "count": 3,
                    "maxCount": 3,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2020.mp3"
                    ]
                  },
                  {
                    "itemNumber": 46,
                    "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.",
                    "latin": "Allāhumma innī asʾaluka ʿilman nāfiʿan, wa rizqan ṭayyiban, wa ʿamalan mutaqabbalā.",
                    "explanationEs": "¡Oh Allah! Te pido un conocimiento beneficioso, un sustento puro y una obra aceptada.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2021.mp3"
                    ]
                  },
                  {
                    "itemNumber": 47,
                    "text": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
                    "latin": "Lā ilāha ill-Allāhu waḥdahū lā sharīka lah, lahul-mulku wa lahul-ḥamdu, wa huwa ʿalā kulli shayʾin qadīr.",
                    "explanationEs": "No hay más divinidad que Allah, Único, sin socios. Suyo es el dominio y Suya es la alabanza, y Él es sobre toda cosa Todopoderoso.",
                    "count": 10,
                    "maxCount": 10,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2022.mp3"
                    ]
                  },
                  {
                    "itemNumber": 48,
                    "text": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
                    "latin": "Subḥān-Allāhi wa bi-ḥamdih.",
                    "explanationEs": "Glorificado sea Allah y alabado sea.",
                    "count": 100,
                    "maxCount": 100,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2023.mp3"
                    ]
                  },
                  {
                    "itemNumber": 49,
                    "text": "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",
                    "latin": "Astaghfirullāha wa atūbu ilayh.",
                    "explanationEs": "Pido perdón a Allah y me arrepiento ante Él.",
                    "count": 100,
                    "maxCount": 100,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2024.mp3"
                    ]
                  },
                  {
                    "itemNumber": 50,
                    "text": "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",
                    "latin": "Allāhumma ṣalli wa sallim ʿalā nabiyyinā Muḥammad.",
                    "explanationEs": "¡Oh Allah! Bendice y otorga la paz a nuestro Profeta Muhammad.",
                    "count": 10,
                    "maxCount": 10,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2025.mp3"
                    ]
                  }
            ]
      },
      {
            "id": "nawm",
            "titleAr": "أذكار النوم",
            "titleEs": "Azkar antes de Dormir",
            "items": [
                  {
                    "itemNumber": 51,
                    "text": "يَجْمَعُ كَفَّيْهِ ثُمَّ يَنْفُثُ فِيهِمَا فَيَقْرَأُ فِيهِمَا:\n\nبِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n﴿قُلۡ هُوَ ٱللَّهُ أَحَدٌ۝ ٱللَّهُ ٱلصَّمَدُ۝ لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ۝ وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ۝﴾\n\nبِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n﴿قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ۝ مِن شَرِّ مَا خَلَقَ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ۝ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ۝﴾\n\nبِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n﴿قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ۝ مَلِكِ ٱلنَّاسِ۝ إِلَٰهِ ٱلنَّاسِ۝ مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ۝ ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ۝ مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ۝﴾\n\nثُمَّ يَمْسَحُ بِهِمَا مَا اسْتَطَاعَ مِنْ جَسَدِهِ يَبْدَأُ بِهِمَا عَلَى رَأْسِهِ وَوَجْهِهِ وَمَا أَقْبَلَ مِنْ جَسَدِهِ.",
                    "latin": "Yajmaʿu kaffayhi thumma yanfuthu fīhimā fa-yaqraʾu fīhimā:\nBismillāhir-raḥmānir-raḥīm. Qul Huwallāhu aḥad, Allāhuṣ-ṣamad, lam yalid wa lam yūlad, wa lam yakun lahū kufuwan aḥad.\n\nBismillāhir-raḥmānir-raḥīm. Qul aʿūdhu bi-rabbil-falaq, min sharri mā khalaq, wa min sharri ghāsiqin idhā waqab, wa min sharrin-naffāthāti fil-ʿuqad, wa min sharri ḥāsidin idhā ḥasad.\n\nBismillāhir-raḥmānir-raḥīm. Qul aʿūdhu bi-rabbin-nās, Malikin-nās, Ilāhin-nās, min sharril-waswāsil-khannās, alladhī yuwaswisu fī ṣudūrin-nās, minal-jinnati wan-nās.\nThumma yamsaḥu bihimā mā istaṭāʿa min jasadih, yabdaʾu bihimā ʿalā raʾsihī wa wajhihī wa mā aqbala min jasadih.",
                    "explanationEs": "Junta las palmas de sus manos, sopla suavemente en ellas y recita en ellas:\nEn el nombre de Allah, el Compasivo, el Misericordioso. Di: «Él es Allah, Uno. Allah es el Absoluto. No engendró ni fue engendrado. Y no hay nada ni nadie que sea semejante a Él».\n\nEn el nombre de Allah, el Compasivo, el Misericordioso. Di: «Me refugio en el Señor del amanecer, de todo el mal que existe en lo que Él creó, del mal de la oscuridad de la noche cuando se extiende, del mal de las [hechiceras] sopladoras de nudos, y del mal del envidioso cuando envidia».\n\nEn el nombre de Allah, el Compasivo, el Misericordioso. Di: «Me refugio en el Señor de los seres humanos, en el Rey Soberano de los seres humanos, en el [único] Dios de los seres humanos, de la maldad del [demonio] susurrador que huye [cuando el nombre de Allah es mencionado], que susurra en los corazones de los seres humanos, y existe entre los yinn y entre los seres humanos».\nLuego pasa las palmas de sus manos por el cuerpo hasta donde le sea posible alcanzar, comenzando por la cabeza, el rostro y la parte delantera del cuerpo.",
                    "count": 3,
                    "maxCount": 3,
                    "note": "سورة الإخلاص، سورة الفلق، سورة الناس",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2051-1.mp3",
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q112.mp3",
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q113.mp3",
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q114.mp3",
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2051-2.mp3"
                    ]
                  },
                  {
                        "itemNumber": 52,
                        "text": "﴿ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ۝﴾",
                        "latin": "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm, lā taʾkhudhuhu sinatun wa-lā nawm, lahu mā fis-samāwāti wa-mā fil-arḍ, man dhāl-ladhī yashfaʿu ʿindahu illā bi-idhnih, yaʿlamu mā bayna aydīhim wa-mā khalfahum, wa-lā yuḥīṭūna bi-shayʾin min ʿilmihi illā bimā shāʾ, wasiʿa kursiyyuhu as-samāwāti wal-arḍ, wa-lā yaʾūduhu ḥifẓuhumā, wa-huwa al-ʿaliyyu al-ʿaẓīm.",
                        "explanationEs": "¡Allah! No existe nada ni nadie con derecho a ser adorado excepto Él, el Viviente [Eterno], el Sustentador [y Gobernador de toda la creación]. No Lo afectan somnolencia ni sueño. Suyo es cuanto hay en los cielos y la Tierra. ¿Quién podrá interceder ante Él si no es con Su permiso? Conoce el pasado y el futuro [lo manifiesto y lo oculto] y nadie abarca de Su conocimiento salvo lo que Él quiere. El escabel de Su Trono abarca los cielos y la Tierra, y la custodia [y mantenimiento] de ambos no Lo agobia. Y Él es el Sublime, el Grandioso.",
                        "count": 1,
                        "maxCount": 1,
            "note": "آية الكرسي",
            "audioUrls": ["https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q002-255.mp3"]
      },
                  {
                    "itemNumber": 53,
                    "text": "﴿ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ۝ لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ۝﴾",
                    "latin": "Āmana ar-rasūlu bimā unzila ilayhi min rabbihi wal-muʾminūn, kullun āmana billāhi wa-malāʾikatihi wa-kutubihi wa-rusulih, lā nufarriqu bayna aḥadin min rusulih, wa-qālū samiʿnā wa-aṭaʿnā ghufrānaka rabbanā wa-ilayka al-maṣīr. Lā yukallifullāhu nafsan illā wusʿahā, lahā mā kasabat wa-ʿalayhā mak-tasabat, rabbanā lā tuʾākhidhnā in nasīnā aw akhṭaʾnā, rabbanā wa-lā taḥmil ʿalaynā iṣran kamā ḥamaltahu ʿalāl-ladhīna min qablinā, rabbanā wa-lā tuḥammilnā mā lā ṭāqata lanā bih, waʿfu ʿannā waghfir lanā war-ḥamnā, anta mawlānā fanṣurnā ʿalāl-qawmil-kāfirīn.",
                    "explanationEs": "El Mensajero y sus seguidores creen en lo que le fue revelado por su Señor [al Mensajero]. Todos creen en Allah, en Sus ángeles, en Sus Libros y en Sus Mensajeros [diciendo:] «No hacemos diferencia entre ninguno de Sus Mensajeros». Y dicen: «Oímos y obedecemos. Perdónanos Señor nuestro, que ante Ti retornaremos [para ser juzgados]». Allah no exige a nadie por encima de sus posibilidades, a su favor tendrá el bien que haga, y en su contra tendrá el mal que haga. «¡Señor nuestro! No nos castigues si olvidamos o cometemos un error. ¡Señor nuestro! No nos impongas una carga como la que impusiste a quienes nos precedieron. ¡Señor nuestro! No nos impongas algo superior a lo que podamos soportar. Perdónanos, absuélvenos y ten misericordia de nosotros. Tú eres nuestro Protector, concédenos el triunfo sobre los que niegan la verdad».",
                    "count": 1,
                    "maxCount": 1,
                    "note": "سورة البقرة الآيات 285-286",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q002-285-286.mp3"
                    ]
                  },
                  {
                    "itemNumber": 54,
                    "text": "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا، بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.",
                    "latin": "Bismika rabbī waḍaʿtu janbī wa-bika arfaʿuh, fa-in amsakta nafsī far-ḥamhā, wa-in arsaltahā faḥ-faẓhā bimā taḥfaẓu bihi ʿibādaka aṣ-ṣāliḥīn.",
                    "explanationEs": "En Tu nombre, Señor mío, me acuesto y en Tu nombre me levanto. Si tomas mi alma, ten misericordia de ella; y si la devuelves, protégela como proteges a Tus siervos virtuosos.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2054.m4a"
                    ],
                    "note": "",
                    "audioUrl": ""
                  },
                  {
                    "itemNumber": 55,
                    "text": "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْياهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا. اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ.",
                    "latin": "Allāhumma innaka khalaqta nafsī wa-anta tawaffāhā, laka mamātuhā wa-maḥyāhā, in aḥyaytahā faḥ-faẓhā, wa-in amattahā fagh-fir lahā. Allāhumma innī asʾaluka al-ʿāfiyah.",
                    "explanationEs": "¡Oh Allah! Tú has creado mi alma y Tú Te la llevas. A Ti pertenece su muerte y su vida. Si la mantienes con vida, protégela; y si la haces morir, perdónala. ¡Oh Allah! Te pido bienestar.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2055.m4a"
                    ]
                  },
                  {
                    "itemNumber": 56,
                    "text": "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.",
                    "latin": "Allāhumma qinī ʿadhābaka yawma tabʿathu ʿibādak.",
                    "explanationEs": "¡Oh Allah! Protégeme de Tu castigo el Día en que resucites a Tus siervos.",
                    "count": 3,
                    "maxCount": 3,
                    "note": "ثلاث مرات",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2056.m4a"
                    ]
                  },
                  {
                    "itemNumber": 57,
                    "text": "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",
                    "latin": "Bismika allāhumma amūtu wa-aḥyā.",
                    "explanationEs": "En Tu nombre, ¡oh Allah!, muero y vivo.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2057.m4a"
                    ]
                  },
                  {
                    "itemNumber": 58,
                    "text": "سُبْحَانَ اللَّهِ",
                    "latin": "Subḥān-Allāh.",
                    "explanationEs": "Glorificado sea Allah.",
                    "count": 33,
                    "maxCount": 33,
                    "note": "تسبيح النوم",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2058.mp3"
                    ]
                  },
                  {
                    "itemNumber": 59,
                    "text": "الْحَمْدُ لِلَّهِ",
                    "latin": "Al-ḥamdu lillāh.",
                    "explanationEs": "Alabado sea Allah.",
                    "count": 33,
                    "maxCount": 33,
                    "note": "تسبيح النوم",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2059.mp3"
                    ]
                  },
                  {
                    "itemNumber": 60,
                    "text": "اللَّهُ أَكْبَرُ",
                    "latin": "Allāhu akbar.",
                    "explanationEs": "Allah es el Más Grande.",
                    "count": 34,
                    "maxCount": 34,
                    "note": "تسبيح النوم",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2060.mp3"
                    ]
                  },
                  {
                        "itemNumber": 61,
                        "text": "اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَرَبَّ الأَرْضِ، وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ، وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ. اللَّهُمَّ أَنْتَ الأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ.",
                        "latin": "Allāhumma rabba as-samāwāti as-sabʿi wa-rabba al-ʿarshi al-ʿaẓīm, rabbanā wa-rabba kulli shayʾ, fāliqal-ḥabbi wan-nawā, wa-munzila at-tawrāti wal-injīli wal-furqān, aʿūdhu bika min sharri kulli shayʾin anta ākhidhun bi-nāṣiyatih. Allāhumma anta al-awwalu fa-laysa qablaka shayʾ, wa-anta al-ākhiru fa-laysa baʿdaka shayʾ, wa-anta aẓ-ẓāhiru fa-laysa fawqaka shayʾ, wa-anta al-bāṭinu fa-laysa dūnaka shayʾ, iqḍi ʿannā ad-dayna wa-aghninā minal-faqr.",
                        "explanationEs": "¡Oh Allah! Señor de los siete cielos, Señor de la Tierra y Señor del Grandioso Trono, Señor nuestro y Señor de todas las cosas, que haces germinar el grano y el hueso, revelador de la Torá, del Evangelio y del Criterio (el Corán). Me refugio en Ti del mal de toda cosa que esté bajo Tu dominio. ¡Oh Allah! Tú eres el Primero y no hay nada antes de Ti; Tú eres el Último y no hay nada después de Ti; Tú eres el Manifiesto y no hay nada por encima de Ti; Tú eres el Oculto y no hay nada más allá de Ti. Salda nuestras deudas y líbranos de la pobreza.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                            "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2039.mp3"
                        ]
                  },
                  {
                    "itemNumber": 62,
                    "text": "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا، وَآوَانَا، فَكَمْ مِمَّنْ لاَ كَافِيَ لَهُ وَلاَ مُؤْوِيَ.",
                    "latin": "Al-ḥamdu lillāhi alladhī aṭʿamanā wa-saqānā, wa-kafānā wa-āwānā, fa-kam mimman lā kāfiya lahu wa-lā muʾwī.",
                    "explanationEs": "Alabado sea Allah, Quien nos ha alimentado, nos ha dado de beber, nos ha provisto de lo suficiente y nos ha dado refugio; ¡cuántos hay que no tienen quien les provea ni les dé refugio!",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2062.m4a"
                    ]
                  },
                  {
                    "itemNumber": 63,
                    "text": "اللَّهُمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
                    "latin": "Allāhumma ʿālima al-ghaybi wash-shahādah, fāṭira as-samāwāti wal-arḍ, rabba kulli shayʾin wa-malīkah, ash-hadu an lā ilāha illā ant, aʿūdhu bika min sharri nafsī, wa-min sharri ash-shayṭāni wa-shirkih, wa-an aqtarifa ʿalā nafsī sūʾan aw ajurrahū ilā muslim.",
                    "explanationEs": "¡Oh Allah! Conocedor de lo oculto y de lo manifiesto, Creador de los cielos y de la tierra, Señor y Poseedor de todas las cosas. Testifico que no hay más divinidad que Tú. Me refugio en Ti del mal de mi propia alma, del mal de Shaitán y de su idolatría, y de cometer cualquier mal contra mí mismo o causárselo a otro musulmán.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2013.mp3"
                    ],
                    "note": "",
                    "audioUrl": ""
                  },
                  {
                    "itemNumber": 64,
                    "text": "قِرَاءَةُ سُورَةِ الْمُلْكِ كَامِلَةً",
                    "latin": "Qirāʾatu Sūrati al-Mulk kāmilatan.",
                    "explanationEs": "Lectura completa de la sura Al-Mulk.",
                    "count": 1,
                    "maxCount": 1,
                    "note": "سُورَةَ الْمُلْكِ",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q067.mp3"
                    ]
                  },
                  {
                    "itemNumber": 65,
                    "text": "قِرَاءَةُ سُورَةِ السَّجْدَةِ كَامِلَةً",
                    "latin": "Qirāʾatu Sūrati as-Sajdah kāmilatan.",
                    "explanationEs": "Lectura completa de la sura As-Sajdah.",
                    "count": 1,
                    "maxCount": 1,
                    "note": "سُورَةَ السَّجْدَةِ",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q032.mp3"
                    ]
                  },
                  {
                    "itemNumber": 66,
                    "text": "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ",
                    "latin": "Allāhumma aslamtu nafsī ilayka, wa wajjahtu wajhī ilayka, wa fawwaḍtu amrī ilayka, wa aljaʾtu ẓahrī ilayka, raghbatan wa rahbatan ilayka, lā maljaʾa wa lā manjā minka illā ilayka, āmantu bikitābika alladhī anzalta, wa binabiyyika alladhī arsalta.",
                    "explanationEs": "¡Oh, Allah! Me entrego a Ti, encomiendo a Ti todos mis asuntos, vuelvo mi rostro hacia Ti y me apoyo en Ti, anhelando Tu recompensa y temiendo Tu castigo. No hay refugio ni salvación de Ti sino en Ti. Creo en el Libro que has revelado y en el Profeta que has enviado",
                    "count": 1,
                    "maxCount": 1,
                    "note": "يُجعل آخر ما يقول قبل النوم",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2066.m4a"
                    ]
                  }
            ]
      },
      {
            "id": "istiyqadh",
            "titleAr": "أذكار الاستيقاظ",
            "titleEs": "Azkar al Despertar",
            "items": [
                  {
                    "itemNumber": 67,
                    "text": "الْحَمْدُ للَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُورُ",
                    "latin": "Alhamdu lillāhi-lladhī aḥyānā baʿda mā amātanā wa-ilayhi-n-nushūr.",
                    "explanationEs": "Alabado sea Allah, Quien nos devolvió la vida tras habernos hecho morir (dormir), y hacia Él es el retorno.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2067.m4a"
                    ]
                  },
                  {
                    "itemNumber": 68,
                    "text": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفِرْ لِي",
                    "latin": "Lā ilāha illa-llāhu waḥdahu lā sharīka lah, lahu-l-mulku wa-lahu-l-ḥamd, wa-huwa ʿalā kulli shayʾin qadīr. Subḥāna-llāhi, wa-l-ḥamdu lillāhi, wa-lā ilāha illa-llāhu, wa-llāhu akbar, wa-lā ḥawla wa-lā quwwata illā billāhi-l-ʿaliyyi-l-ʿaẓīm. Rabbi-ghfir lī.",
                    "explanationEs": "No hay más divinidad digna de adoración excepto Allah, Único, sin asociados. Suyo es el reino y Suya es la alabanza, y Él es Todopoderoso. Glorificado sea Allah, alabado sea Allah, no hay más divinidad que Allah, Allah es el Más Grande, y no hay fuerza ni poder excepto en Allah, el Altísimo, el Supremo. ¡Señor mío, perdóname!",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2068.mp3"
                    ]
                  },
                  {
                    "itemNumber": 69,
                    "text": "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لي بِذِكْرِهِ",
                    "latin": "Alhamdu lillāhi-lladhī ʿāfānī fī jasadī, wa-radda ʿalayya rūḥī, wa-adhina lī bi-dhikrih.",
                    "explanationEs": "Alabado sea Allah, Quien sanó mi cuerpo, me devolvió mi alma y me permitió recordarle.",
                    "count": 1,
                    "maxCount": 1,
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2069.mp3"
                    ]
                  },
                  {
                    "itemNumber": 70,
                    "text": "﴿إِنَّ فِي خَلۡقِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَٱخۡتِلَٰفِ ٱلَّيۡلِ وَٱلنَّهَارِ لَأٓيَٰتٖ لِّأُوْلِي ٱلۡأَلۡبَٰبِ۝ ٱلَّذِينَ يَذۡكُرُونَ ٱللَّهَ قِيَٰمٗا وَقُعُودٗا وَعَلَىٰ جُنُوبِهِمۡ وَيَتَفَكَّرُونَ فِي خَلۡقِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ رَبَّنَا مَا خَلَقۡتَ هَٰذَا بَٰطِلٗا سُبۡحَٰنَكَ فَقِنَا عَذَابَ ٱلنَّارِ۝ رَبَّنَآ إِنَّكَ مَن تُدۡخِلِ ٱلنَّارَ فَقَدۡ أَخۡزَيۡتَهُۥۖ وَمَا لِلظَّٰلِمِينَ مِنۡ أَنصَارٖ۝ رَّبَّنَآ إِنَّنَا سَمِعۡنَا مُنَادِيٗا يُنَادِي لِلۡإِيمَٰنِ أَنۡ ءَامِنُواْ بِرَبِّكُمۡ فَـَٔامَنَّاۚ رَبَّنَا فَٱغۡفِرۡ لَنَا ذُنُوبَنَا وَكَفِّرۡ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلۡأَبۡرَارِ۝ رَبَّنَا وَءَاتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخۡزِنَا يَوۡمَ ٱلۡقِيَٰمَةِۖ إِنَّكَ لَا تُخۡلِفُ ٱلۡمِيعَادَ۝ فَٱسۡتَجَابَ لَهُمۡ رَبُّهُمۡ أَنِّي لَآ أُضِيعُ عَمَلَ عَٰمِلٖ مِّنكُم مِّن ذَكَرٍ أَوۡ أُنثَىٰۖ بَعۡضُكُم مِّنۢ بَعۡضٖۖ فَٱلَّذِينَ هَاجَرُواْ وَأُخۡرِجُواْ مِن دِيَٰرِهِمۡ وَأُوذُواْ فِي سَبِيلِي وَقَٰتَلُواْ وَقُتِلُواْ لَأُكَفِّرَنَّ عَنۡهُمۡ سَيِّـَٔاتِهِمۡ وَلَأُدۡخِلَنَّهُمۡ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ ثَوَابٗا مِّنۡ عِندِ ٱللَّهِۚ وَٱللَّهُ عِندَهُۥ حُسۡنُ ٱلثَّوَابِ۝ لَا يَغُرَّنَّكَ تَقَلُّبُ ٱلَّذِينَ كَفَرُواْ فِي ٱلۡبِلَٰدِ۝ مَتَٰعٞ قَلِيلٞ ثُمَّ مَأۡوَىٰهُمۡ جَهَنَّمُۖ وَبِئۡسَ ٱلۡمِهَادُ۝ لَٰكِنِ ٱلَّذِينَ ٱتَّقَوۡاْ رَبَّهُمۡ لَهُمۡ جَنَّٰتٞ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَا نُزُلٗا مِّنۡ عِندِ ٱللَّهِۗ وَمَا عِندَ ٱللَّهِ خَيۡرٞ لِّلۡأَبۡرَارِ۝ وَإِنَّ مِنۡ أَهۡلِ ٱلۡكِتَٰبِ لَمَن يُؤۡمِنُ بِٱللَّهِ وَمَآ أُنزِلَ إِلَيۡكُمۡ وَمَآ أُنزِلَ إِلَيۡهِمۡ خَٰشِعِينَ لِلَّهِ لَا يَشۡتَرُونَ بِـَٔايَٰتِ ٱللَّهِ ثَمَنٗا قَلِيلًاۚ أُوْلَٰٓئِكَ لَهُمۡ أَجۡرُهُمۡ عِندَ رَبِّهِمۡۗ إِنَّ ٱللَّهَ سَرِيعُ ٱلۡحِسَابِ۝ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱصۡبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَٱتَّقُواْ ٱللَّهَ لَعَلَّكُمۡ تُفۡلِحُونَ۝﴾",
                    "latin": "Inna fī khalqis-samāwāti wal-arḍi wakhtilāfil-layli wan-nahāri la-āyātin li-ulil-albāb (190). Alladhīna yadhkurūnallāha qiyāman wa quʿūdan wa ʿalā junūbihim wa yatafakkarūna fī khalqis-samāwāti wal-arḍ, Rabbanā mā khalaqta hādhā bāṭilan subḥānaka fa-qinā ʿadhāban-nār (191). Rabbanā innaka man tudkhilin-nāra faqad akhzaytah, wa mā liẓ-ẓālimīna min anṣār (192). Rabbanā innanā samiʿnā munādiyan yunādī lil-īmāni an āminū bi-Rabbikum fa-āmannā, Rabbanā faghfir lanā dhunūbanā wa kaffir ʿannā sayyiʾātinā wa tawaffanā maʿal-abrār (193). Rabbanā wa ātinā mā waʿadtanā ʿalā rusulika wa lā tukhzinā yawmal-qiyāmah, innaka lā tukhliful-mīʿād (194). Fastajāba lahum Rabbuhum annī lā uḍīʿu ʿamala ʿāmilin minkum min dhakarin aw unthā baʿḍukum min baʿḍ, fal-ladhīna hājarū wa ukhrijū min diyārihim wa ūdhū fī sabīlī wa qātalū wa qutilū la-ukaffiranna ʿanhum sayyiʾātihim wa la-udkhilannahum jannātin tajrī min taḥtihal-anhār, thawāban min ʿindillāh, wallāhu ʿindahū ḥusnuth-thawāb (195). Lā yaghurrannaka taqallubul-ladhīna kafarū fil-bilād (196). Matāʿun qalīlun thumma maʾwāhum jahannamu wa biʾsal-mihād (197). Lākinil-ladhīnat-taqaw Rabbahum lahum jannātun tajrī min taḥtihal-anhāru khālidīna fīhā nuzulan min ʿindillāh, wa mā ʿindillāhi khayrun lil-abrār (198). Wa inna min ahlil-kitābi laman yuʾminu billāhi wa mā unzila ilaykum wa mā unzila ilayhim khāshiʿīna lillāhi lā yashtarūna bi-āyātillāhi thamanan qalīlā, ulāʾika lahum ajruhum ʿinda Rabbihim, innallāha sarīʿul-ḥisāb (199). Yā ayyuhal-ladhīna āmanūṣ-birū wa ṣābirū wa rābiṭū wat-taqullāha laʿallakum tufliḥūn (200).",
                    "explanationEs": "En la creación de los cielos y de la Tierra, y en la sucesión de la noche y el día, hay signos para los dotados de intelecto, que invocan a Allah de pie, sentados o recostados, que meditan en la creación de los cielos y la Tierra, y dicen: «¡Señor nuestro! No has creado todo esto sin un sentido. ¡Glorificado seas! Presérvanos del castigo del Fuego. ¡Señor nuestro! A quien condenes al Fuego lo habrás deshonrado, porque los opresores no tendrán quién los auxilie. ¡Señor nuestro! Hemos oído a quien convocaba a la fe, diciendo: “Crean en su Señor”, y creímos. ¡Señor nuestro! Perdona nuestros pecados, borra nuestras malas acciones y, al morir, reúnenos con los piadosos. ¡Señor nuestro! Concédenos lo que has prometido a través de Tus Mensajeros y no nos humilles el Día de la Resurrección. Tú no faltas a Tu promesa». Su Señor les respondió sus súplicas diciendo: «No dejaré de recompensar ninguna de sus obras, sean hombres o mujeres, descienden el uno del otro. A los que emigraron, fueron expulsados de sus hogares, padecieron dificultades por Mi causa, lucharon y cayeron, les perdonaré sus faltas y los introduciré en jardines por donde corren ríos». Ésta es la recompensa que Allah les concederá. Allah posee la más hermosa recompensa. No te dejes engañar por la opulencia y los viajes de negocios de los que niegan la verdad, porque es solo un disfrute temporal. Pero finalmente su destino será el Infierno. ¡Qué pésima morada! En cambio, quienes hayan tenido temor de su Señor vivirán eternamente en jardines por donde corren ríos, es la acogida que Allah les ha preparado. Lo que Allah tiene reservado para los virtuosos es superior al éxito de los incrédulos en esta vida. Entre la Gente del Libro hay quienes creen en Allah y en lo que ha sido revelado a ustedes y a ellos. Son humildes ante Allah, y no venden la palabra de Allah a vil precio. Ellos serán recompensados por su Señor. Allah es rápido en ajustar cuentas. ¡Oh, creyentes! Tengan paciencia, perseverancia, defiéndanse y tengan temor de Allah, que así tendrán éxito. (Sura Ali 'Imran 3:190-200; traducción de Isa García)",
                    "count": 1,
                    "maxCount": 1,
                    "note": "سورة آل عمران الآيات 190-200",
                    "audioUrls": [
                      "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q003-190-200.mp3"
                    ],
                    "audioUrl": ""
                  }
            ]
      },
      {
            "id": "libas",
            "titleAr": "أَذْكَارُ اللِّبَاسِ",
            "titleEs": "Azkar de la ropa",
            "items": [
                  {
                        "itemNumber": 71,
                        "subtitleAr": "دعاءُ لُبْسِ الثَّوْبِ",
                        "subtitleEs": "Súplica al vestirse",
                        "text": "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ) وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ.",
                        "latin": "Al-ḥamdu lillāhi alladhī kasānī hādhā (ath-thawba) wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwah.",
                        "explanationEs": "Alabado sea Allah, Quien me ha vestido con esta (prenda) y me la ha concedido sin que de mi parte haya habido fuerza ni poder.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2071.mp3"
                        ]
                  },
                  {
                        "itemNumber": 72,
                        "subtitleAr": "دعاءُ لُبْسِ الثَّوْبِ الجَدِيدِ",
                        "subtitleEs": "Súplica al vestirse con ropa nueva",
                        "text": "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ.",
                        "latin": "Allāhumma laka al-ḥamdu anta kasawtanīh, asʾaluka min khayrihi wa khayri mā ṣuniʿa lah, wa aʿūdhu bika min sharrihi wa sharri mā ṣuniʿa lah.",
                        "explanationEs": "¡Oh Allah! A Ti pertenecen las alabanzas. Tú me has vestido con ella. Te pido de su bien y del bien para el que fue hecha, y me refugio en Ti de su mal y del mal para el que fue hecha.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2072.mp3"
                        ]
                  },
                  {
                        "itemNumber": 73,
                        "subtitleAr": "الدُّعَاءُ لِمَنْ لَبِسَ ثَوْباً جَدِيداً",
                        "subtitleEs": "Súplica por alguien que estrena ropa nueva",
                        "text": "تُبْلِي وَيُخْلِفُ اللَّهُ تَعَالَى.",
                        "latin": "Tublī wa yukhlifu Allāhu taʿālā.",
                        "explanationEs": "Que la desgastes (con larga vida) y que Allah Altísimo te la reemplace.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2073.mp3"
                        ]
                  },
                  {
                        "itemNumber": 74,
                        "subtitleAr": "الدُّعَاءُ لِمَنْ لَبِسَ ثَوْباً جَدِيداً",
                        "subtitleEs": "Súplica por alguien que estrena ropa nueva",
                        "text": "اِلْبَسْ جَدِيداً وَعِشْ حَمِيداً وَمُتْ شَهِيداً.",
                        "latin": "Ilbas jadīdan, wa ʿish ḥamīdan, wa mut shahīdā.",
                        "explanationEs": "Vístete de nuevo, vive de manera elogiable y muere como mártir.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2074.mp3"
                        ]
                  },
                  {
                        "itemNumber": 75,
                        "subtitleAr": "مَا يَقُولُ إِذَا وَضَعَ ثَوْبَهُ",
                        "subtitleEs": "Lo que se dice al quitarse la ropa",
                        "text": "بِسْمِ اللَّهِ.",
                        "latin": "Bismillāh.",
                        "explanationEs": "En el nombre de Allah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2075.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "khala",
            "titleAr": "أَذْكَارُ الْخَلَاءِ",
            "titleEs": "Azkar del baño",
            "items": [
                  {
                        "itemNumber": 76,
                        "subtitleAr": "دُعَاءُ دُخُولِ الخَلاَءِ",
                        "subtitleEs": "Súplica al entrar al baño/sanitario",
                        "text": "[بِسْمِ اللَّهِ] اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ.",
                        "latin": "[Bismillāh] Allāhumma innī aʿūdhu bika minal-khubthi wal-khabāʾith.",
                        "explanationEs": "[En el nombre de Allah]. ¡Oh Allah! Me refugio en Ti de los demonios masculinos y femeninos (del mal y de las impurezas).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2076.mp3"
                        ]
                  },
                  {
                        "itemNumber": 77,
                        "subtitleAr": "دُعَاءُ الخُرُوجِ مِنَ الخَلاَءِ",
                        "subtitleEs": "Súplica al salir del baño/sanitario",
                        "text": "غُفْرَانَكَ.",
                        "latin": "Ghufrānak.",
                        "explanationEs": "Pido Tu perdón.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2077.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "wudu",
            "titleAr": "أَذْكَارُ الْوُضُوءِ",
            "titleEs": "Azkar de las abluciones (Wudu)",
            "items": [
                  {
                        "itemNumber": 78,
                        "subtitleAr": "الذِّكْرُ قَبْلَ الوُضُوءِ",
                        "subtitleEs": "Súplica antes de realizar las abluciones (Wudu)",
                        "text": "بِسْمِ اللَّهِ.",
                        "latin": "Bismillāh.",
                        "explanationEs": "En el nombre de Allah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2075.mp3"
                        ]
                  },
                  {
                        "itemNumber": 79,
                        "subtitleAr": "الذِّكْرُ بَعْدَ الفَرَاغِ مِنَ الوُضُوءِ",
                        "subtitleEs": "Súplica al terminar las abluciones (Wudu)",
                        "text": "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ.",
                        "latin": "Ashhadu an lā ilāha illā Allāhu waḥdahu lā sharīka lahu wa ashhadu anna Muḥammadan ʿabduhu wa rasūluh.",
                        "explanationEs": "Atestiguo que no hay más divinidad que Allah, Único, sin asociados, y atestiguo que Muhammad es Su siervo y mensajero.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2079.mp3"
                        ]
                  },
                  {
                        "itemNumber": 80,
                        "subtitleAr": "الذِّكْرُ بَعْدَ الفَرَاغِ مِنَ الوُضُوءِ",
                        "subtitleEs": "Súplica al terminar las abluciones (Wudu)",
                        "text": "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ.",
                        "latin": "Allāhumma ijʿalnī minat-tawwābīna wa ijʿalnī minal-mutaṭahhirīn.",
                        "explanationEs": "¡Oh Allah! Hazme de los que se arrepienten y hazme de los que se purifican.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%20163.mp3"
                        ]
                  },
                  {
                        "itemNumber": 81,
                        "subtitleAr": "الذِّكْرُ بَعْدَ الفَرَاغِ مِنَ الوُضُوءِ",
                        "subtitleEs": "Súplica al terminar las abluciones (Wudu)",
                        "text": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ.",
                        "latin": "Subḥānaka Allāhumma wa bi-ḥamdika, ashhadu an lā ilāha illā anta, astaghfiruka wa atūbu ilayk.",
                        "explanationEs": "Glorificado seas, ¡oh Allah!, y alabado seas. Atestiguo que no hay más divinidad excepto Tú, pido Tu perdón y me arrepiento ante Ti.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2081.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "manzil",
            "titleAr": "أَذْكَارُ الْمَنْزِلِ",
            "titleEs": "Azkar de la casa",
            "items": [
                  {
                        "itemNumber": 82,
                        "subtitleAr": "الذِّكْرُ عِنْدَ الخُرُوجِ مِنَ المَنْزِلِ",
                        "subtitleEs": "Súplica al salir de casa",
                        "text": "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
                        "latin": "Bismillāhi, tawakkaltu ʿalā Allāh, wa lā ḥawla wa lā quwwata illā billāh.",
                        "explanationEs": "En el nombre de Allah, me encomiendo a Allah; no hay fuerza ni poder sino en Allah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2082.mp3"
                        ]
                  },
                  {
                        "itemNumber": 83,
                        "subtitleAr": "الذِّكْرُ عِنْدَ الخُرُوجِ مِنَ المَنْزِلِ",
                        "subtitleEs": "Súplica al salir de casa",
                        "text": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ.",
                        "latin": "Allāhumma innī aʿūdhu bika an aḍilla, aw uḍalla, aw azilla, aw uzalla, aw aẓlima, aw uẓlama, aw ajhala, aw yujhala ʿalayy.",
                        "explanationEs": "¡Oh Allah! Me refugio en Ti para no extraviarme ni ser extraviado, no resbalar (cometer falta) ni ser hecho resbalar, no oprimir ni ser oprimido, y no actuar con ignorancia ni ser tratado con ignorancia.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2083.mp3"
                        ]
                  },
                  {
                        "itemNumber": 84,
                        "subtitleAr": "الذِّكْرُ عِنْدَ دُخُولِ المَنْزِلِ",
                        "subtitleEs": "Súplica al entrar a casa",
                        "text": "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا\n\n(ثُمَّ لِيُسَلِّمْ عَلَى أَهْلِهِ).",
                        "latin": "Bismillāhi walajnā, wa bismillāhi kharajnā, wa ʿalā Allāhi rabbinā tawakkalnā (luego saluda a su familia).",
                        "explanationEs": "En el nombre de Allah entramos y en el nombre de Allah salimos, y en Allah nuestro Señor confiamos. (Luego debe saludar a su familia).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2084.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "masjid",
            "titleAr": "أَذْكَارُ الْمَسْجِدِ",
            "titleEs": "Azkar de la mezquita",
            "items": [
                  {
                        "itemNumber": 85,
                        "subtitleAr": "دُعَاءُ الذَّهَابِ إِلَى المَسْجِدِ",
                        "subtitleEs": "Súplica al ir a la mezquita",
                        "text": "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُوراً، وَفِي لِسَانِي نُوراً، وَفِي سَمْعِي نُوراً، وَفِي بَصَرِي نُوراً، وَمِنْ فَوْقِي نُوراً، وَمِنْ تَحْتِي نُوراً، وَعَنْ يَمِينِي نُوراً، وَعَنْ شِمَالِي نُوراً، وَمِنْ أَمَامِي نُوراً، وَمِنْ خَلْفِي نُوراً، وَاجْعَلْ فِي نَفْسِي نُوراً، وَأَعْظِمْ لِي نُوراً، وَعَظِّمْ لِي نُوراً، وَاجْعَلْ لِي نُوراً، وَاجْعَلْنِي نُوراً، اللَّهُمَّ أَعْطِنِي نُوراً، وَاجْعَلْ فِي عَصَبِي نُوراً، وَفِي لَحْمِي نُوراً، وَفِي دَمِي نُوراً، وَفِي شَعْرِي نُوراً، وَفِي بَشَرِي نُوراً، اللَّهُمَّ اجْعَلْ لِي نُوراً فِي قَبْرِي وَنُوراً فِي عِظَامِي، وَزِدْنِي نُوراً، وَزِدْنِي نُوراً، وَزِدْنِي نُوراً، وَهَبْ لِي نُوراً عَلَى نُورٍ.",
                        "latin": "Allāhumma ijʿal fī qalbī nūran, wa fī lisānī nūran, wa fī samʿī nūran, wa fī baṣarī nūran, wa min fawqī nūran, wa min taḥtī nūran, wa ʿan yamīnī nūran, wa ʿan shimālī nūran, wa min amāmī nūran, wa min khalfī nūran, wa ijʿal fī nafsī nūran, wa aʿẓim lī nūran, wa ʿaẓẓim lī nūran, wa ijʿal lī nūran, wa ijʿalnī nūran, Allāhumma aʿṭinī nūran, wa ijʿal fī ʿaṣabī nūran, wa fī laḥmī nūran, wa fī damī nūran, wa fī shaʿrī nūran, wa fī basharī nūran, Allāhumma ijʿal lī nūrann fī qabrī wa nūrann fī ʿiẓāmī, wa zidnī nūran, wa zidnī nūran, wa zidnī nūran, wa hab lī nūrann ʿalā nūr.",
                        "explanationEs": "¡Oh Allah! Pon luz en mi corazón, luz en mi lengua, luz en mi oído, luz en mi vista, luz por encima de mí, luz por debajo de mí, luz a mi derecha, luz a mi izquierda, luz delante de mí y luz detrás de mí. Pon luz en mi alma, magnifica para mí la luz, aumenta para mí la luz, haz para mí una luz y hazme luz. ¡Oh Allah! Dame luz, pon luz en mis nervios, luz en mi carne, luz en mi sangre, luz en mi cabello y luz en mi piel. ¡Oh Allah! Pon para mí luz en mi tumba y luz en mis huesos, auméntame la luz, auméntame la luz, auméntame la luz y concédeme luz sobre luz.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2085.mp3"
                        ]
                  },
                  {
                        "itemNumber": 86,
                        "subtitleAr": "دُعَاءُ دُخُولِ المَسْجِدِ",
                        "subtitleEs": "Súplica al entrar a la mezquita",
                        "text": "يَبْدَأُ بِرِجْلِهِ الْيُمْنَى، وَيَقُولُ:\n\nأَعُوذُ بِاللَّهِ العَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ، [بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ]، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.",
                        "latin": "(Empieza con el pie derecho y dice): Aʿūdhu billāhi al-ʿaẓīm, wa bi-wajhihi al-karīm, wa sulṭānihi al-qadīm, minash-shayṭāni ar-rajīm. [Bismillāhi, waṣ-ṣalātu was-salāmu ʿalā rasūlillāh], Allāhumma iftaḥ lī abwāba raḥmatik.",
                        "explanationEs": "Entra con el pie derecho y dice: Me refugio en Allah el Grandioso, en Su noble Rostro y en Su poder eterno, de Shaitán el maldito. [En el nombre de Allah, y que las bendiciones y la paz sean sobre el Mensajero de Allah]. ¡Oh Allah! Ábreme las puertas de Tu misericordia.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2086.mp3"
                        ]
                  },
                  {
                        "itemNumber": 87,
                        "subtitleAr": "دُعَاءُ الخُرُوجِ مِنَ المَسْجِدِ",
                        "subtitleEs": "Súplica al salir de la mezquita",
                        "text": "يَبْدَأُ بِرِجْلِهِ الْيُسْرَى وَيَقُولُ:\n\nبِسْمِ اللَّهِ وَالصَّلاَةُ وَالسَّلاَمُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ، اللَّهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ.",
                        "latin": "(Empieza con el pie izquierdo y dice): Bismillāhi waṣ-ṣalātu was-salāmu ʿalā rasūlillāh, Allāhumma innī asʾaluka min faḍlik, Allāhumma iʿṣimnī minash-shayṭāni ar-rajīm.",
                        "explanationEs": "Sale con el pie izquierdo y dice: En el nombre de Allah, y que las bendiciones y la paz sean sobre el Mensajero de Allah. ¡Oh Allah! Te pido de Tu favor. ¡Oh Allah! Protégeme de Shaitán el maldito.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2087.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "azkar_adhan",
            "titleAr": "أَذْكَارُ الأَذَانِ",
            "titleEs": "Súplicas relacionadas con la llamada a la oración (Adhán)",
            "items": [
                  {
                        "itemNumber": 88,
                        "text": "يَقُولُ مِثْلَ مَا يَقُولُ الْمُؤَذِّنُ إِلاَّ فِي (حَيَّ عَلَى الصَّلاَةِ) وَ(حَيَّ عَلَى الْفَلاَحِ) فَيَقُولُ:\n\nلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
                        "latin": "Repite lo que dice el muecín, excepto en «Ḥayya ʿalā ṣ-ṣalāh» y «Ḥayya ʿalā l-falāḥ», donde dice: Lā ḥawla wa lā quwwata illā billāh.",
                        "explanationEs": "Repite las mismas palabras que el muecín (llamador a la oración), excepto al escuchar 'Acudid a la oración' y 'Acudid al éxito', donde debe decir: No hay fuerza ni poder sino en Allah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2088.mp3"
                        ]
                  },
                  {
                        "itemNumber": 89,
                        "text": "وَأَنَا أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبَّاً، وَبِمُحَمَّدٍ رَسُولاً، وَبِالإِسْلاَمِ دِيناً.\n\n(يَقُولُ ذَلِكَ عَقِبَ تَشَهُّدِ الْمُؤَذِّنِ).",
                        "latin": "Wa anā ashhadu an lā ilāha illā Allāhu waḥdahu lā sharīka lahu wa anna Muḥammadan ʿabduhu wa rasūluh, raḍītu billāhi rabban, wa bi-Muḥammadin rasūlan, wa bil-islāmi dīnan.",
                        "explanationEs": "Y yo atestiguo que no hay más divinidad que Allah, Único, sin asociados, y que Muhammad es Su siervo y mensajero. Acepto complacido a Allah como Señor, a Muhammad como Mensajero y al Islam como religión. (Dice esto tras la atestiguación del muecín).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2089.mp3"
                        ]
                  },
                  {
                        "itemNumber": 90,
                        "text": "يُصَلِّي عَلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بَعْدَ فَرَاغِهِ مِنْ إِجَابَةِ الْمُؤَذِّنِ.",
                        "latin": "Ṣallā Allāhu ʿalan-nabiyyi ṣallā Allāhu ʿalayhi wa sallam baʿda farāghihi min ijābati al-muʾadhdhin.",
                        "explanationEs": "Invoca bendiciones sobre el Profeta (que la paz y las bendiciones de Allah sean con él) tras responder a la llamada del muecín.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2090.mp3"
                        ]
                  },
                  {
                        "itemNumber": 91,
                        "text": "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّداً الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَاماً مَحْمُوداً الَّذِي وَعَدْتَهُ، [إِنَّكَ لاَ تُخْلِفُ الْمِيعَادَ].",
                        "latin": "Allāhumma rabba hādhihi ad-daʿwati at-tāmmah, waṣ-ṣalāti al-qāʾimah, āti Muḥammadan al-wasīlata wal-faḍīlah, wabʿathhu maqāman maḥmūdan alladhī waʿadtah, [innaka lā tukhlifu al-mīʿād].",
                        "explanationEs": "¡Oh Allah, Señor de esta llamada perfecta y de la oración que se va a celebrar! Concede a Muhammad la cercanía (Al-Wasilah) y la excelencia, y resucítalo en la posición honorable que le has prometido. [Ciertamente Tú no faltas a Tu promesa].",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2091.mp3"
                        ]
                  },
                  {
                        "itemNumber": 92,
                        "text": "يَدْعُو لِنَفْسِهِ بَيْنَ الأَذَانِ وَالإِقَامَةِ فَإِنَّ الدُّعَاءَ حِينَئِذٍ لاَ يُرَدُّ.",
                        "latin": "Yadʿū li-nafsihi bayna al-adhāni wal-iqāmah, fa-inna ad-duʿāʾa ḥīnaʾidhin lā yuradd.",
                        "explanationEs": "Suplica por sí mismo entre la llamada a la oración (Adhán) y el inicio de la misma (Iqámah), pues la súplica en ese momento no es rechazada.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2092.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "salat",
            "titleAr": "أَذْكَارُ الصَّلَاةِ",
            "titleEs": "Azkar de la oración",
            "items": [
                  {
                        "itemNumber": 93,
                        "subtitleAr": "دعاء استفتاح الصلاة",
                        "subtitleEs": "Súplicas de apertura de la oración",
                        "text": "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْني مِنْ خَطَايَايَ، بِالثَّلْجِ وَالْمَاءِ وَالْبَرَدِ.",
                        "latin": "Allāhumma bāʿid baynī wa bayna khaṭāyāya kamā bāʿadta baynal-mashriqi wal-maghrib, Allāhumma naqqinī min khaṭāyāya kamā yunaqqath-thawbul-abyaḍu minad-danas, Allāhummag-silnī min khaṭāyāya bith-thalji wal-māʾi wal-barad.",
                        "explanationEs": "¡Oh Allah! Aléjame de mis pecados tanto como has alejado el Oriente del Occidente. ¡Oh Allah! Purifícame de mis pecados tal como se limpia una vestidura blanca de la suciedad. ¡Oh Allah! Lava mis pecados con nieve, agua y granizo.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2093.mp3"
                        ]
                  },
                  {
                        "itemNumber": 94,
                        "subtitleAr": "دعاء استفتاح الصلاة",
                        "subtitleEs": "Súplicas de apertura de la oración",
                        "text": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ.",
                        "latin": "Subḥānakallāhumma wa bi-ḥamdika, wa tabārakasmuka, wa taʿālā jadduka, wa lā ilāha ghayruka.",
                        "explanationEs": "Glorificado seas, ¡Oh Allah!, y alabado seas. Bendito sea Tu Nombre, exaltada sea Tu Majestad, y no hay más divinidad con derecho a ser adorada excepto Tú.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2094.mp3"
                        ]
                  },
                  {
                        "itemNumber": 95,
                        "subtitleAr": "دعاء استفتاح الصلاة",
                        "subtitleEs": "Súplicas de apertura de la oración",
                        "text": "وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفاً وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ صَلاَتِي، وَنُسُكِي، وَمَحْيَايَ، وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ. اللَّهُمَّ أَنْتَ المَلِكُ لاَ إِلَهَ إِلاَّ أَنْتَ، أَنْتَ رَبِّي وَأَنَا عَبْدُكَ، ظَلَمْتُ نَفْسِي وَاعْتَرَفْتُ بِذَنْبِي فَاغْفِرْ لِي ذُنُوبي جَمِيعاً إِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ. وَاهْدِنِي لِأَحْسَنِ الأَخْلاَقِ لاَ يَهْدِي لِأَحْسَنِها إِلاَّ أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لاَ يَصْرِفُ عَنِّي سَيِّئَهَا إِلاَّ أَنْتَ، لَبَّيْكَ وَسَعْدَيْكَ، وَالخَيْرُ كُلُّهُ بِيَدَيْكَ، وَالشَّرُّ لَيْسَ إِلَيْكَ، أَنَا بِكَ وَإِلَيْكَ، تَبَارَكْتَ وَتَعَالَيْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ.",
                        "latin": "Wajjahtu wajhiya lilladhī faṭara as-samāwāti wal-arḍa ḥanīfan wa mā anā minal-mushrikīn. Inna ṣalātī, wa nusukī, wa maḥyāya, wa mamātī lillāhi rabbi al-ʿālamīn, lā sharīka lahu wa bidhālika umirtu wa anā minal-muslimīn. Allāhumma anta al-maliku lā ilāha illā ant, anta rabbī wa anā ʿabduk, ẓalamtu nafsī waʿtaraftu bidhanbī faghfir lī dhunūbī jamīʿan innahu lā yaghfiru adhdhunūba illā ant. Wahdinī li-aḥsani al-akhlāqi lā yahdī li-aḥsanihā illā ant, waṣrif ʿannī sayyiʾahā lā yaṣrifu ʿannī sayyiʾahā illā ant, labbayka wa saʿdayk, wal-khayru kulluhu bi-yadayk, wash-sharru laysa ilayk, anā bika wa ilayk, tabārakta wa taʿālayt, astaghfiruka wa atūbu ilayk.",
                        "explanationEs": "He orientado mi rostro, como monoteísta puro, hacia Aquel que creó los cielos y la tierra, y no soy de los asociadores. Ciertamente mi oración, mis sacrificios, mi vida y mi muerte pertenecen a Allah, Señor de los mundos, Sin asociados. Esto se me ha ordenado y soy de los musulmanes. ¡Oh Allah! Tú eres el Rey, no hay más divinidad excepto Tú. Tú eres mi Señor y yo soy Tu siervo. He sido injusto conmigo mismo y reconozco mi pecado, perdóname todos mis pecados, pues nadie perdona los pecados excepto Tú. Guíame hacia el mejor carácter, pues nadie guía hacia él excepto Tú, y aparta de mí el mal carácter, pues nadie lo aparta de mí excepto Tú. Heme aquí a Tu servicio, una y otra vez; todo el bien está en Tus manos y el mal no se Te atribuye. Existo por Ti y a Ti retorno. Bendito y Enaltecido seas; pido Tu perdón y me arrepiento ante Ti.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2095.mp3"
                        ]
                  },
                  {
                        "itemNumber": 96,
                        "subtitleAr": "دعاء استفتاح الصلاة",
                        "subtitleEs": "Súplicas de apertura de la oración",
                        "text": "اللَّهُمَّ رَبَّ جَبْرَائِيلَ وَمِيكَائِيلَ وَإِسْرَافِيلَ، فَاطِرَ السَّمَوَاتِ وَالأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، أَنْتَ تَحْكُمُ بَيْنَ عِبَادِكَ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ، اهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ، إِنَّكَ تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُسْتَقِيمٍ.",
                        "latin": "Allāhumma Rabba Jabrāʾīla wa Mīkāʾīla wa Isrāfīl, Fāṭiras-samāwāti wal-arḍ, ʿĀlimal-ghaybi wash-shahādah, Anta taḥkumu bayna ʿibādika fīmā kānū fīhi yakhtalifūn, ihdinī limākh-tulifa fīhi minal-ḥaqqi bi-idhnik, innaka tahdī man tashāʾu ilā ṣirāṭim-mustaqīm.",
                        "explanationEs": "¡Oh Allah! Señor de Yibril, Mikail e Israfil. Creador de los cielos y de la tierra, Conocedor de lo oculto y de lo manifiesto. Tú juzgas entre Tus siervos en aquello en lo que diferían. Guíame con Tu permiso hacia la verdad en aquello en lo que se discrepa. (Muslim)",
                        "note": "رواه مسلم",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2047.mp3"
                        ]
                  },
                  {
                        "itemNumber": 97,
                        "subtitleAr": "دعاء استفتاح الصلاة",
                        "subtitleEs": "Súplicas de apertura de la oración",
                        "text": "اللَّهُ أَكْبَرُ كَبِيراً، اللَّهُ أَكْبَرُ كَبِيراً، اللَّهُ أَكْبَرُ كَبِيراً، وَالْحَمْدُ لِلَّهِ كَثِيراً، وَالْحَمْدُ لِلَّهِ كَثِيراً، وَالْحَمْدُ لِلَّهِ كَثِيراً، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً (ثَلاَثاً). أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ: مِنْ نَفْخِهِ، وَنَفْثِهِ، وَهَمْزِهِ.",
                        "latin": "Allāhu akbaru kabīrā, Allāhu akbaru kabīrā, Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wal-ḥamdu lillāhi kathīrā, wal-ḥamdu lillāhi kathīrā, wa subḥāna Allāhi bukratan wa aṣīlā (tres veces). Aʿūdhu billāhi minash-shayṭāni: min nafkhihi, wa nafthihi, wa hamzih.",
                        "explanationEs": "Allah es el más Grande en grandeza (x3), y alabado sea Allah en abundancia (x3), y glorificado sea Allah por la mañana y por la tarde (x3). Me refugio en Allah de Shaitán: de su orgullo (soplo), de su poesía/hechicería (saliva) y de su locura/susurros.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2097.mp3"
                        ]
                  },
                  {
                        "itemNumber": 98,
                        "subtitleAr": "دعاء استفتاح الصلاة",
                        "subtitleEs": "Súplicas de apertura de la oración",
                        "text": "اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ رَبُّ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالأَرْضِ، وَلَكَ الْحَمْدُ، أَنْتَ الْحَقُّ، وَوَعْدُكَ الْحَقُّ، وَقَوْلُكَ الْحَقُّ، وَلِقَاؤُكَ الْحَقُّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالنَّبِيُّونَ حَقٌّ، وَمُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ حَقٌّ، وَالسّاعَةُ حَقٌّ، اللَّهُمَّ لَكَ أَسْلَمْتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَبِكَ آمَنْتُ، وَإِلَيْكَ أَنَبْتُ، وَبِكَ خَاصَمْتُ، وَإِلَيْكَ حَاكَمْتُ. فَاغْفِرْ لِي مَا قَدَّمْتُ، وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ، وَمَا أَعْلَنْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، أَنْتَ المُقَدِّمُ، وَأَنْتَ المُؤَخِّرُ لاَ إِلَهَ إِلاَّ أَنْتَ، أَنْتَ إِلَهِي لاَ إِلَهَ إِلاَّ أَنْتَ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
                        "latin": "Allāhumma laka al-ḥamd, anta nūru as-samāwāti wal-arḍi wa man fīhin, wa laka al-ḥamdu anta qayyimu as-samāwāti wal-arḍi wa man fīhin, wa laka al-ḥamdu anta rabbu as-samāwāti wal-arḍi wa man fīhin, wa laka al-ḥamdu laka mulku as-samāwāti wal-arḍi wa man fīhin, wa laka al-ḥamdu anta maliku as-samāwāti wal-arḍ, wa laka al-ḥamd, anta al-ḥaqq, wa waʿduka al-ḥaqq, wa qawluka al-ḥaqq, wa liqāʾuka al-ḥaqq, wal-jannatu ḥaqq, wan-nāru ḥaqq, wan-nabiyyūna ḥaqq, wa Muḥammadun ṣallā Allāhu ʿalayhi wa sallama ḥaqq, was-sāʿatu ḥaqq. Allāhumma laka aslamtu, wa ʿalayka tawakkaltu, wa bika āmantu, wa ilayka anabtu, wa bika khāṣamtu, wa ilayka ḥākamtu. Faghfir lī mā qaddamtu, wa mā akhkhartu, wa mā asrartu, wa mā aʿlantu, wa mā anta aʿlamu bihi minnī, anta al-muqaddimu wa anta al-muʾakhkhiru lā ilāha illā ant, anta ilāhī lā ilāha illā ant, wa lā ḥawla wa lā quwwata illā billāh.",
                        "explanationEs": "¡Oh Allah! A Ti pertenecen todas las alabanzas, Tú eres la Luz de los cielos y de la tierra y de cuanto hay en ellos. A Ti pertenecen las alabanzas, Tú eres el Sustentador de los cielos y de la tierra y de cuanto hay en ellos. A Ti pertenecen las alabanzas, Tú eres el Señor de los cielos y de la tierra y de cuanto hay en ellos. A Ti pertenecen las alabanzas, Tuyo es el reino de los cielos y de la tierra y de cuanto hay en ellos. A Ti pertenecen las alabanzas, Tú eres el Rey de los cielos y de la tierra. A Ti pertenecen las alabanzas, Tú eres la Verdad, Tu promesa es verdadera, Tu palabra es verdad, el encuentro Contigo es verdad, el Paraíso es verdad, el Infierno es verdad, los Profetas son verdad, Muhammad (que la paz y las bendiciones de Allah sean con él) es verdad y la Hora es verdad. ¡Oh Allah! A Ti me he sometido, en Ti he confiado, en Ti he creído, a Ti me he vuelto en arrepentimiento, por Ti he disputado y a Tu juicio me he acogido. Perdóname lo que he hecho en el pasado y lo que haga en el futuro, lo que he ocultado y lo que he manifestado, y lo que Tú conoces mejor que yo. Tú eres Quien adelanta y Quien retrasa, no hay más divinidad excepto Tú. Tú eres mi Dios, no hay más divinidad excepto Tú, y no hay fuerza ni poder sino en Allah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2098.mp3"
                        ]
                  },
                  {
                        "itemNumber": 99,
                        "subtitleAr": "دُعَاءُ الرُّكُوعِ",
                        "subtitleEs": "Súplica durante la inclinación (Rukūʿ)",
                        "text": "سُبْحَانَ رَبِّيَ الْعَظِيمِ.",
                        "latin": "Subḥāna rabbiya al-ʿaẓīm.",
                        "explanationEs": "Glorificado sea mi Señor, el Grandioso. (Se dice tres veces).",
                        "count": 3,
                        "maxCount": 3,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2099.mp3"
                        ]
                  },
                  {
                        "itemNumber": 100,
                        "subtitleAr": "دُعَاءُ الرُّكُوعِ",
                        "subtitleEs": "Súplica durante la inclinación (Rukūʿ)",
                        "text": "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي.",
                        "latin": "Subḥānaka Allāhumma rabbanā wa bi-ḥamdika, Allāhumma ighfir lī.",
                        "explanationEs": "Glorificado seas, ¡oh Allah, Señor nuestro!, y alabado seas. ¡Oh Allah! Perdóname.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20100.mp3"
                        ]
                  },
                  {
                        "itemNumber": 101,
                        "subtitleAr": "دُعَاءُ الرُّكُوعِ",
                        "subtitleEs": "Súplica durante la inclinación (Rukūʿ)",
                        "text": "سُبُّوحٌ، قُدُّوسٌ، رَبُّ الْمَلاَئِكَةِ وَالرُّوحِ.",
                        "latin": "Subbūḥun, quddūsun, rabbu al-malāʾikati war-rūḥ.",
                        "explanationEs": "Glorioso, Santísimo, Señor de los ángeles y del Espíritu (el ángel Yibril).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20101.mp3"
                        ]
                  },
                  {
                        "itemNumber": 102,
                        "subtitleAr": "دُعَاءُ الرُّكُوعِ",
                        "subtitleEs": "Súplica durante la inclinación (Rukūʿ)",
                        "text": "اللَّهُمَّ لَكَ رَكَعْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، خَشَعَ لَكَ سَمْعِي، وَبَصَرِي، وَمُخِّي، وَعَظْمِي، وَعَصَبِي، وَمَا اسْتَقَلَّتْ بِهِ قَدَمِي.",
                        "latin": "Allāhumma laka rakaʿtu, wa bika āmantu, wa laka aslamtu, khashaʿa laka samʿī, wa baṣarī, wa mukhkhī, wa ʿaẓmī, wa ʿaṣabī, wa mā istaqallat bihi qadamī.",
                        "explanationEs": "¡Oh Allah! Ante Ti me he inclinado, en Ti he creído y a Ti me he sometido. Se han humillado ante Ti mi oído, mi vista, mi cerebro, mis huesos, mis nervios y lo que sostienen mis pies.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20102.mp3"
                        ]
                  },
                  {
                        "itemNumber": 103,
                        "subtitleAr": "دُعَاءُ الرُّكُوعِ",
                        "subtitleEs": "Súplica durante la inclinación (Rukūʿ)",
                        "text": "سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ.",
                        "latin": "Subḥāna dhī al-jabarūti, wal-malakūti, wal-kibriyāʾi, wal-ʿaẓamah.",
                        "explanationEs": "Glorificado sea el Poseedor del poder absoluto, la soberanía, la grandeza y la majestad.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20103.mp3"
                        ]
                  },
                  {
                        "itemNumber": 104,
                        "subtitleAr": "دُعَاءُ الرَّفْعِ مِنَ الرُّكُوعِ",
                        "subtitleEs": "Súplica al levantarse de la inclinación (Rukūʿ)",
                        "text": "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ.",
                        "latin": "Samiʿa Allāhu liman ḥamidah.",
                        "explanationEs": "Allah escucha a quien lo alaba.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20104.mp3"
                        ]
                  },
                  {
                        "itemNumber": 105,
                        "subtitleAr": "دُعَاءُ الرَّفْعِ مِنَ الرُّكُوعِ",
                        "subtitleEs": "Súplica al levantarse de la inclinación (Rukūʿ)",
                        "text": "رَبَّنَا وَلَكَ الْحَمْدُ، حَمْداً كَثِيراً طَيِّباً مُبَارَكاً فِيهِ.",
                        "latin": "Rabbanā wa laka al-ḥamdu, ḥamdan kathīran ṭayyiban mubārakan fīh.",
                        "explanationEs": "¡Señor nuestro! A Ti pertenecen las alabanzas, alabanzas abundantes, puras y benditas.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20105.mp3"
                        ]
                  },
                  {
                        "itemNumber": 106,
                        "subtitleAr": "دُعَاءُ الرَّفْعِ مِنَ الرُّكُوعِ",
                        "subtitleEs": "Súplica al levantarse de la inclinación (Rukūʿ)",
                        "text": "مِلْءَ السَّمَوَاتِ وَمِلْءَ الأَرْضِ، وَمَا بَيْنَهُمَا، وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ. أَهْلَ الثَّنَاءِ وَالْمَجْدِ، أَحَقُّ مَا قَالَ الْعَبْدُ، وَكُلُّنَا لَكَ عَبْدٌ. اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.",
                        "latin": "Milʾa as-samāwāti wa milʾa al-arḍi, wa mā baynahumā, wa milʾa mā shiʾta min shayʾin baʿd. Ahla ath-thanāʾi wal-majd, aḥaqqu mā qāla al-ʿabdu, wa kullunā laka ʿabd. Allāhumma lā māniʿa limā aʿṭayta, wa lā muʿṭiya limā manaʿta, wa lā yanfaʿu dhā al-jaddi minka al-jadd.",
                        "explanationEs": "[Alabanzas que llenan] los cielos, la tierra, lo que hay entre ambos y cuanto Tú desees después. Digno de alabanza y gloria; es lo más verdadero que dice un siervo, y todos somos Tus siervos. ¡Oh Allah! Nadie puede privar lo que Tú concedes, ni nadie puede conceder lo que Tú privas, y la riqueza no beneficia a quien la posee frente a Ti.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20106.mp3"
                        ]
                  },
                  {
                        "itemNumber": 107,
                        "subtitleAr": "دُعَاءُ السُّجُودِ",
                        "subtitleEs": "Súplica durante la prosternación (Suyūd)",
                        "text": "سُبْحَانَ رَبِّيَ الأَعْلَى.",
                        "latin": "Subḥāna rabbiya al-aʿlā.",
                        "explanationEs": "Glorificado sea mi Señor, el Altísimo. (Se dice tres veces).",
                        "count": 3,
                        "maxCount": 3,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20107.mp3"
                        ]
                  },
                  {
                        "itemNumber": 108,
                        "subtitleAr": "دُعَاءُ السُّجُودِ",
                        "subtitleEs": "Súplica durante la prosternación (Suyūd)",
                        "text": "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي.",
                        "latin": "Subḥānaka Allāhumma rabbanā wa bi-ḥamdika, Allāhumma ighfir lī.",
                        "explanationEs": "Glorificado seas, ¡oh Allah, Señor nuestro!, y alabado seas. ¡Oh Allah! Perdóname.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20100.mp3"
                        ]
                  },
                  {
                        "itemNumber": 109,
                        "subtitleAr": "دُعَاءُ السُّجُودِ",
                        "subtitleEs": "Súplica durante la prosternación (Suyūd)",
                        "text": "سُبُّوحٌ، قُدُّوسٌ، رَبُّ الْمَلَائِكَةِ وَالرُّوحِ.",
                        "latin": "Subbūḥun, quddūsun, rabbu al-malāʾikati war-rūḥ.",
                        "explanationEs": "Glorioso, Santísimo, Señor de los ángeles y del Espíritu (el ángel Yibril).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20101.mp3"
                        ]
                  },
                  {
                        "itemNumber": 110,
                        "subtitleAr": "دُعَاءُ السُّجُودِ",
                        "subtitleEs": "Súplica durante la prosternación (Suyūd)",
                        "text": "اللَّهُمَّ لَكَ سَجَدْتُ وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَصَوَّرَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ.",
                        "latin": "Allāhumma laka sajadtu wa bika āmantu, wa laka aslamtu, sajada wajhiya lilladhī khalaqahu, wa ṣawwarahu, wa shaqqa samʿahu wa baṣarahu, tabāraka Allāhu aḥsanu al-khāliqīn.",
                        "explanationEs": "¡Oh Allah! Ante Ti me he prosternado, en Ti he creído y a Ti me he sometido. Se ha prosternado mi rostro ante Aquel que lo creó, le dio forma y abrió su oído y su vista. Bendito sea Allah, el mejor de los creadores.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20110.mp3"
                        ]
                  },
                  {
                        "itemNumber": 111,
                        "subtitleAr": "دُعَاءُ السُّجُودِ",
                        "subtitleEs": "Súplica durante la prosternación (Suyūd)",
                        "text": "سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ.",
                        "latin": "Subḥāna dhī al-jabarūti, wal-malakūti, wal-kibriyāʾi, wal-ʿaẓamah.",
                        "explanationEs": "Glorificado sea el Poseedor del poder absoluto, la soberanía, la grandeza y la majestad.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20103.mp3"
                        ]
                  },
                  {
                        "itemNumber": 112,
                        "subtitleAr": "دُعَاءُ السُّجُودِ",
                        "subtitleEs": "Súplica durante la prosternación (Suyūd)",
                        "text": "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ: دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلاَنِيَّتَهُ وَسِرَّهُ.",
                        "latin": "Allāhumma ighfir lī dhanbī kullah: diqqahu wa jillahu, wa awwalahu wa ākhirahu, wa ʿalāniyatahu wa sirrah.",
                        "explanationEs": "¡Oh Allah! Perdóname todos mis pecados: los pequeños y los grandes, los primeros y los últimos, los públicos y los secretos.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2035.mp3"
                        ]
                  },
                  {
                        "itemNumber": 113,
                        "subtitleAr": "دُعَاءُ السُّجُودِ",
                        "subtitleEs": "Súplica durante la prosternación (Suyūd)",
                        "text": "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لاَ أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ.",
                        "latin": "Allāhumma innī aʿūdhu bi-riḍāka min sakhaṭika, wa bi-muʿāfātika min ʿuqūbatika, wa aʿūdhu bika minka, lā uḥṣī thanāʾan ʿalayka, anta kamā athnayta ʿalā nafsik.",
                        "explanationEs": "¡Oh Allah! Me refugio en Tu complacencia de Tu enojo, en Tu perdón de Tu castigo, y me refugio en Ti de Ti. No puedo enumerar Tus alabanzas; Tú eres tal como Te has alabado a Ti mismo.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2048.mp3"
                        ]
                  },
                  {
                        "itemNumber": 114,
                        "subtitleAr": "دُعَاءُ الجَلْسَةِ بَيْنَ السَّجْدَتَيْنِ",
                        "subtitleEs": "Súplica en la sentada entre las dos prosternaciones",
                        "text": "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي.",
                        "latin": "Rabbi ighfir lī, Rabbi ighfir lī.",
                        "explanationEs": "Señor mío perdóname, Señor mío perdóname.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20114.mp3"
                        ]
                  },
                  {
                        "itemNumber": 115,
                        "subtitleAr": "دُعَاءُ الجَلْسَةِ بَيْنَ السَّجْدَتَيْنِ",
                        "subtitleEs": "Súplica en la sentada entre las dos prosternaciones",
                        "text": "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي.",
                        "latin": "Allāhumma ighfir lī, warḥamnī, wahdinī, wajburnī, wa ʿāfinī, warzuqnī, warfaʿnī.",
                        "explanationEs": "¡Oh Allah! Perdóname, ten misericordia de mí, guíame, reconforta mis carencias, dame salud, susténtame y elévame.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20115.mp3"
                        ]
                  },
                  {
                        "itemNumber": 116,
                        "subtitleAr": "دُعَاءُ سُجُودِ التِّلاَوَةِ",
                        "subtitleEs": "Súplica para la prosternación por lectura (Suyuud At-Tilawa)",
                        "text": "سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ، ﴿فَتَبَارَكَ ٱللَّهُ أَحۡسَنُ ٱلۡخَٰلِقِينَ۝﴾",
                        "latin": "Sajada wajhiya lilladhī khalaqahu, wa shaqqa samʿahu wa baṣarahu bi-ḥawlihi wa quwwatih, fa-tabāraka Allāhu aḥsanu al-khāliqīn.",
                        "explanationEs": "Se ha prosternado mi rostro ante Aquel que lo creó y le dio oído y vista con Su poder y fuerza. ¡Bendito sea Allah, el mejor de los creadores!",
                        "count": 1,
                        "maxCount": 1,
                        "note": "سورة المؤمنون الآية 14",
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q023-014.mp3"
                        ]
                  },
                  {
                        "itemNumber": 117,
                        "subtitleAr": "دُعَاءُ سُجُودِ التِّلاَوَةِ",
                        "subtitleEs": "Súplica para la prosternación por lectura (Suyuud At-Tilawa)",
                        "text": "اللَّهُمَّ اكْتُبْ لِي بِهَا عِنْدَكَ أَجْراً، وَضَعْ عَنِّي بِهَا وِزْراً، وَاجْعَلْهَا لِي عِنْدَكَ ذُخْراً، وَتَقَبَّلْهَا مِنِّي كَمَا تَقَبَّلْتَهَا مِنْ عَبْدِكَ دَاوُدَ.",
                        "latin": "Allāhumma iktub lī bihā ʿindaka ajran, wa ḍaʿ ʿannī bihā wizran, wa ijʿalhā lī ʿindaka dhukhran, wa taqabbalhā minnī kamā taqabbaltahā min ʿabdika Dāwūd.",
                        "explanationEs": "¡Oh Allah! Anota para mí por ella (esta prosternación) una recompensa ante Ti, quítame con ella una carga, hazla para mí un tesoro ante Ti y acéptala de mí como la aceptaste de Tu siervo Dawud.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20117.mp3"
                        ]
                  },
                  {
                        "itemNumber": 118,
                        "subtitleAr": "التَّشَهُّدُ",
                        "subtitleEs": "El Tashahhud",
                        "text": "التَّحِيَّاتُ لِلَّهِ، وَالصَّلَوَاتُ، وَالطَّيِّبَاتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ.",
                        "latin": "At-taḥiyyātu lillāhi, waṣ-ṣalawātu, waṭ-ṭayyibāt. As-salāmu ʿalayka ayyuhā an-nabiyyu wa raḥmatu Allāhi wa barakātuh, as-salāmu ʿalaynā wa ʿalā ʿibādillāhi aṣ-ṣāliḥīn. Ashhadu an lā ilāha illā Allāhu wa ashhadu anna Muḥammadan ʿabduhu wa rasūluh.",
                        "explanationEs": "Todas las veneraciones, oraciones y buenas palabras pertenecen a Allah. La paz sea contigo, ¡oh Profeta!, así como la misericordia de Allah y Sus bendiciones. La paz sea con nosotros y con los siervos piadosos de Allah. Atestiguo que no hay más divinidad que Allah y atestiguo que Muhammad es Su siervo y mensajero.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20118.mp3"
                        ]
                  },
                  {
                        "itemNumber": 119,
                        "subtitleAr": "الصَّلاَةُ عَلَى النَّبِيِّ بَعْدَ التَّشَهُّدِ",
                        "subtitleEs": "Súplica por el Profeta tras el Tashahhud",
                        "text": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.",
                        "latin": "Allāhumma ṣalli ʿalā Muḥammadin, wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma, wa ʿalā āli Ibrāhīm, innaka ḥamīdun majīd. Allāhumma bārik ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka ḥamīdun majīd.",
                        "explanationEs": "¡Oh Allah! Exalta a Muhammad y a la familia de Muhammad, como exaltaste a Ibrahim y a la familia de Ibrahim; ciertamente Tú eres Loable, Glorioso. ¡Oh Allah! Bendice a Muhammad y a la familia de Muhammad, como bendijiste a Ibrahim y a la familia de Ibrahim; ciertamente Tú eres Loable, Glorioso.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2060.mp3"
                        ]
                  },
                  {
                        "itemNumber": 120,
                        "subtitleAr": "الصَّلاَةُ عَلَى النَّبِيِّ بَعْدَ التَّشَهُّدِ",
                        "subtitleEs": "Súplica por el Profeta tras el Tashahhud",
                        "text": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى أَزْوَاجِهِ وَذُرِّيَّتِهِ، كَمَا صَلَّيْتَ عَلَى آلِ إِبْرَاهِيمَ. وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى أَزْوَاجِهِ وَذُرِّيَّتِهِ، كَمَا بَارَكْتَ عَلَى آلِ إِبْرَاهِيمَ. إِنَّكَ حَمِيدٌ مَجِيدٌ.",
                        "latin": "Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā azwājihi wa dhurriyyatih, kamā ṣallayta ʿalā āli Ibrāhīm. Wa bārik ʿalā Muḥammadin wa ʿalā azwājihi wa dhurriyyatih, kamā bārakta ʿalā āli Ibrāhīm. Innaka ḥamīdun majīd.",
                        "explanationEs": "¡Oh Allah! Exalta a Muhammad, a sus esposas y a su descendencia, como exaltaste a la familia de Ibrahim. Y bendice a Muhammad, a sus esposas y a su descendencia, como bendijiste a la familia de Ibrahim. Ciertamente Tú eres Loable, Glorioso.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20120.mp3"
                        ]
                  },
                  {
                        "itemNumber": 121,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ.",
                        "latin": "Allāhumma innī aʿūdhu bika min ʿadhābi al-qabr, wa min ʿadhābi jahannam, wa min fitnati al-maḥyā wal-mamāt, wa min sharri fitnati al-masīḥi ad-dajjāl.",
                        "explanationEs": "¡Oh Allah! Me refugio en Ti del castigo de la tumba, del castigo del Infierno, de las pruebas de la vida y de la muerte, y del mal de la prueba del Falso Mesías (Anticristo).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20121.mp3"
                        ]
                  },
                  {
                        "itemNumber": 122,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ.",
                        "latin": "Allāhumma innī aʿūdhu bika min ʿadhābi al-qabr, wa aʿūdhu bika min fitnati al-masīḥi ad-dajjāl, wa aʿūdhu bika min fitnati al-maḥyā wal-mamāt. Allāhumma innī aʿūdhu bika minal-maʾthami wal-maghram.",
                        "explanationEs": "¡Oh Allah! Me refugio en Ti del castigo de la tumba, del juicio del Falso Mesías, y de las pruebas de la vida y de la muerte. ¡Oh Allah! Me refugio en Ti del pecado y de las deudas agobiantes.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20122.mp3"
                        ]
                  },
                  {
                        "itemNumber": 123,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْماً كَثِيراً، وَلاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ.",
                        "latin": "Allāhumma innī ẓalamtu nafsī ẓulman kathīrā, wa lā yaghfiru adhdhunūba illā ant, faghfir lī maghfiratan min ʿindika warḥamnī, innaka anta al-ghafūru ar-raḥīm.",
                        "explanationEs": "¡Oh Allah! Ciertamente me he oprimido a mí mismo en gran manera y nadie perdona los pecados excepto Tú, concédeme pues un perdón de Tu parte y ten misericordia de mí, ciertamente Tú eres el Absolvedor, el Misericordioso.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2033.mp3"
                        ]
                  },
                  {
                        "itemNumber": 124,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ، وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ، وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي. أَنْتَ الْمُقَدِّمُ، وَأَنْتَ الْمُؤَخِّرُ لاَ إِلَهَ إِلاَّ أَنْتَ.",
                        "latin": "Allāhumma ighfir lī mā qaddamtu, wa mā akhkhartu, wa mā asrartu, wa mā aʿlantu, wa mā asraftu, wa mā anta aʿlamu bihi minnī. Anta al-muqaddimu, wa anta al-muʾakhkhiru lā ilāha illā ant.",
                        "explanationEs": "¡Oh Allah! Perdóname lo que he hecho en el pasado y lo que haga en el futuro, lo que he ocultado, lo que he manifestado, mis excesos y lo que Tú conoces mejor que yo. Tú eres Quien adelanta y Quien retrasa, no hay más divinidad excepto Tú.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20124.mp3"
                        ]
                  },
                  {
                        "itemNumber": 125,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ.",
                        "latin": "Allāhumma aʿinnī ʿalā dhikrika, wa shukrika, wa ḥusni ʿibādatik.",
                        "explanationEs": "¡Oh Allah! Ayúdame a recordarte, agradecerte y adorarte de la mejor manera.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20125.mp3"
                        ]
                  },
                  {
                        "itemNumber": 126,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبُخْلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا وَعَذَابِ الْقَبْرِ.",
                        "latin": "Allāhumma innī aʿūdhu bika minal-bukhl, wa aʿūdhu bika minal-jubn, wa aʿūdhu bika min an uradda ilā ardhali al-ʿumur, wa aʿūdhu bika min fitnati ad-dunyā wa ʿadhābi al-qabr.",
                        "explanationEs": "¡Oh Allah! Me refugio en Ti de la tacañería, la cobardía, la decrepitud en la vejez, las pruebas de este mundo y el castigo de la tumba.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2037.mp3"
                        ]
                  },
                  {
                        "itemNumber": 127,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ.",
                        "latin": "Allāhumma innī asʾaluka al-jannata wa aʿūdhu bika minan-nār.",
                        "explanationEs": "¡Oh Allah! Te pido el Paraíso y me refugio en Ti del Fuego.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20127.mp3"
                        ]
                  },
                  {
                        "itemNumber": 128,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ بِعِلْمِكَ الْغَيْبَ وَقُدْرَتِكَ عَلَى الْخَلْقِ أَحْيِنِي مَا عَلِمْتَ الْحَيَاةَ خَيْراً لِي، وَتَوَفَّنِي إِذَا عَلِمْتَ الْوَفَاةَ خَيْراً لِي، اللَّهُمَّ وَأَسْأَلُكَ خَشْيَتَكَ فِي الْغَيْبِ وَالشَّهَادَةِ، وَأَسْأَلُكَ كَلِمَةَ الْحَقِّ فِي الرِّضَا وَالْغَضَبِ، وَأَسْأَلُكَ الْقَصْدَ فِي الْفَقْرِ وَالْغِنَى، وَأَسْأَلُكَ نَعِيماً لَا يَنْفَدُ، وَأَسْأَلُكَ قُرَّةَ عَيْنٍ لَا تَنْقَطِعُ، وَأَسْأَلُكَ الرِّضَاءَ بَعْدَ الْقَضَاءِ، وَأَسْأَلُكَ بَرْدَ الْعَيْشِ بَعْدَ الْمَوْتِ، وَأَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ وَالشَّوْقَ إِلَى لِقَائِكَ فِي غَيْرِ ضَرَّاءَ مُضِرَّةٍ وَلَا فِتْنَةٍ مُضِلَّةٍ، اللَّهُمَّ زَيِّنَّا بِزِينَةِ الْإِيمَانِ، وَاجْعَلْنَا هُدَاةً مُهْتَدِينَ.",
                        "latin": "Allāhumma bi-ʿilmikal-ghayba wa qudratika ʿalal-khalqi aḥyinī mā ʿalimtal-ḥayāta khayran lī, wa tawaffanī idhā ʿalimtal-wafāta khayran lī. Allāhumma wa asʾaluka khashyataka fil-ghaybi wash-shahādah, wa asʾaluka kalimatil-ḥaqqi fir-riḍā wal-ghaḍab, wa asʾalukal-qaṣda fil-faqri wal-ghinā, wa asʾaluka naʿīman lā yanfad, wa asʾaluka qurrata ʿaynin lā tanqaṭiʿ, wa asʾalukar-riḍāʾa baʿdal-qaḍāʾ, wa asʾaluka bardal-ʿayshi baʿdal-mawt, wa asʾaluka ladhdhatan-naẓari ilā wajhika wash-shawqa ilā liqāʾik fī ghayri ḍarrāʾa muḍirrah, wa lā fitnatin muḍillatin. Allāhumma zayyinnā bi-zīnatil-īmāni waj-ʿalnā hudātan muhtadīn.",
                        "explanationEs": "¡Oh Allah! Por Tu conocimiento de lo oculto y Tu poder sobre la creación, mantenme con vida mientras sepas que la vida es mejor para mí, y hazme morir cuando sepas que la muerte es mejor para mí. Te pido que Te tema en privado y en público, que diga la verdad tanto en la satisfacción como en la ira, y que mantenga la moderación tanto en la pobreza como en la riqueza. Te pido un deleite que no se agote, una alegría que nunca se extinga, estar complacido después del decreto, una vida apacible después de la muerte, el placer de contemplar Tu Rostro y el anhelo de encontrarte, sin adversidad perjudicial ni prueba que me haga extraviarme. ¡Oh Allah! Adórnanos con la belleza de la fe y haz que seamos guías bien guiados.",
                        "note": "رواه النسائي (إسناد حسن)",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2052.mp3"
                        ]
                  },
                  {
                        "itemNumber": 129,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ يَا أَللَّهُ بِأَنَّكَ الْوَاحِدُ الأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُواً أَحَدٌ، أَنْ تَغْفِرَ لِي ذُنُوبِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ.",
                        "latin": "Allāhumma innī asʾaluka yā Allāhu bi-annaka al-wāḥidu al-aḥadu aṣ-ṣamadu alladhī lam yalid wa lam yūlad, wa lam yakun lahu kufuwan aḥad, an taghfira lī dhunūbī innaka anta al-ghafūru ar-raḥīm.",
                        "explanationEs": "¡Oh Allah! Te pido, ¡oh Allah!, porque Tú eres el Único, el Absoluto, Quien no engendró ni fue engendrado y no hay nadie semejante a Él, que perdones mis pecados. Ciertamente Tú eres el Absolvedor, el Misericordioso.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20129.mp3"
                        ]
                  },
                  {
                        "itemNumber": 130,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، الْمَنَّانُ، يَا بَدِيعَ السَّمَوَاتِ وَالأَرْضِ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ، يَا حَيُّ يَا قَيُّومُ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ.",
                        "latin": "Allāhumma innī asʾaluka bi-anna laka al-ḥamda lā ilāha illā anta waḥdaka lā sharīka lak, al-mannān, yā badīʿa as-samāwāti wal-arḍ, yā dhā al-jalāli wal-ikrām, yā ḥayyu yā qayyūmu innī asʾaluka al-jannata wa aʿūdhu bika minan-nār.",
                        "explanationEs": "¡Oh Allah! Te pido porque a Ti pertenecen las alabanzas, no hay más divinidad excepto Tú, Único, sin asociados, el Dadivoso, ¡oh Creador originario de los cielos y de la tierra!, ¡oh Poseedor de la majestad y del honor!, ¡oh Viviente, oh Sustentador de todo! Te pido el Paraíso y me refugio en Ti del Fuego.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20130.mp3"
                        ]
                  },
                  {
                        "itemNumber": 131,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ التَّشَهُّدِ الأَخِيرِ قَبْلَ السَّلاَمِ",
                        "subtitleEs": "Súplicas tras el último Tashahhud antes del saludo final",
                        "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنِّي أَشْهَدُ أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ الأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُواً أَحَدٌ.",
                        "latin": "Allāhumma innī asʾaluka bi-annī ashhadu annaka anta Allāhu lā ilāha illā anta al-aḥadu aṣ-ṣamadu alladhī lam yalid wa lam yūlad wa lam yakun lahu kufuwan aḥad.",
                        "explanationEs": "¡Oh Allah! Te pido pues atestiguo que Tú eres Allah, no hay más divinidad excepto Tú, el Único, el Absoluto, Quien no engendró ni fue engendrado y no hay nadie semejante a Él.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20131.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "azkar_bada_salah",
            "titleAr": "الأَذْكَارُ بَعْدَ السَّلاَمِ مِنَ الصَّلاَةِ",
            "titleEs": "Súplicas y alabanzas después de la oración",
            "items": [
                  {
                        "itemNumber": 132,
                        "text": "أَسْتَغْفِرُ اللَّهَ (ثَلاَثاً)، اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ.",
                        "latin": "Astaghfiru Allāh (tres veces). Allāhumma anta as-salām, wa minka as-salām, tabārakta yā dhā al-jalāli wal-ikrām.",
                        "explanationEs": "Pido perdón a Allah (tres veces). ¡Oh Allah! Tú eres la Paz y de Ti procede la paz. Bendito seas, ¡oh Poseedor de la majestad y del honor!",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20132.mp3"
                        ]
                  },
                  {
                        "itemNumber": 133,
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.",
                        "latin": "Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamd, wa huwa ʿalā kulli shayʾin qadīr. Allāhumma lā māniʿa limā aʿṭayt, wa lā muʿṭiya limā manaʿt, wa lā yanfaʿu dhā al-jaddi minka al-jadd.",
                        "explanationEs": "No hay más divinidad que Allah, Único, sin asociados. Suyo es el reino y Suya es la alabanza, y Él es Omnipotente sobre todas las cosas. ¡Oh Allah! Nadie puede privar lo que Tú concedes, ni nadie puede conceder lo que Tú privas, y la riqueza no beneficia a quien la posee frente a Ti.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20133.mp3"
                        ]
                  },
                  {
                        "itemNumber": 134,
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ، وَلاَ نَعْبُدُ إِلاَّ إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لاَ إِلَهَ إِلاَّ اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ.",
                        "latin": "Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku, wa lahu al-ḥamdu, wa huwa ʿalā kulli shayʾin qadīr. Lā ḥawla wa lā quwwata illā billāh, lā ilāha illā Allāhu, wa lā naʿbudu illā iyyāh, lahu an-niʿmatu wa lahu al-faḍlu wa lahu ath-thanāʾu al-ḥasan, lā ilāha illā Allāhu mukhliṣīna lahu ad-dīna wa law kariha al-kāfirūn.",
                        "explanationEs": "No hay más divinidad que Allah, Único, sin asociados. Suyo es el reino y Suya es la alabanza, y Él es Omnipotente sobre todas las cosas. No hay fuerza ni poder sino en Allah. No hay más divinidad que Allah y no adoramos sino a Él. De Él procede la gracia, el favor y la hermosa alabanza. No hay más divinidad que Allah, profesándole la religión de manera sincera aunque esto disguste a los incrédulos.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20134.mp3"
                        ]
                  },
                  {
                        "itemNumber": 135,
                        "text": "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ.",
                        "latin": "Subḥānallāh, wal-ḥamdu lillāh, wallāhu akbar.",
                        "explanationEs": "Glorificado sea Allah, alabado sea Allah, Allah es el más Grande. (33 veces cada uno).",
                        "count": 33,
                        "maxCount": 33,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20135.mp3"
                        ]
                  },
                  {
                        "itemNumber": 136,
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
                        "latin": "Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu wa huwa ʿalā kulli shayʾin qadīr.",
                        "explanationEs": "No hay más divinidad que Allah, Único, sin asociados. Suyo es el reino y Suya es la alabanza, y Él es Omnipotente sobre todas las cosas. (Se completa con esto el número 100 en el dhikr).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20136.mp3"
                        ]
                  },
                  {
                        "itemNumber": 137,
                        "text": "﴿بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ قُلۡ هُوَ ٱللَّهُ أَحَدٌ۝ ٱللَّهُ ٱلصَّمَدُ۝ لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ۝ وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ۝\n\nقُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ۝ مِن شَرِّ مَا خَلَقَ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ۝ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ۝\n\nقُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ۝ مَلِكِ ٱلنَّاسِ۝ إِلَٰهِ ٱلنَّاسِ۝ مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ۝ ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ۝ مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ۝﴾",
                        "latin": "Bismillāhir-raḥmānir-raḥīm: Qul Huwallāhu aḥad, Allāhuṣ-ṣamad, lam yalid wa lam yūlad, wa lam yakun lahū kufuwan aḥad. Wa Qul aʿūdhu bi-rabbil-falaq, min sharri mā khalaq, wa min sharri ghāsiqin idhā waqab, wa min sharrin-naffāthāti fil-ʿuqad, wa min sharri ḥāsidin idhā ḥasad. Wa Qul aʿūdhu bi-rabbin-nās, Malikin-nās, Ilāhin-nās, min sharril-waswāsil-khannās, alladhī yuwaswisu fī ṣudūrin-nās, minal-jinnati wan-nās.",
                        "explanationEs": "Lectura de las suras Al-Ijlás, Al-Falaq y An-Nas tras cada oración (se repiten tres veces tras la oración del Fajr y del Maghrib).\n\nEn el nombre de Allah, el Compasivo, el Misericordioso. Di: «Él es Allah, Uno. Allah es el Absoluto. No engendró ni fue engendrado. Y no hay nada ni nadie que sea semejante a Él».\n\nDi: «Me refugio en el Señor del amanecer, de todo el mal que existe en lo que Él creó, del mal de la oscuridad de la noche cuando se extiende, del mal de las [hechiceras] sopladoras de nudos, y del mal del envidioso cuando envidia».\n\nDi: «Me refugio en el Señor de los seres humanos, en el Rey Soberano de los seres humanos, en el [único] Dios de los seres humanos, de la maldad del [demonio] susurrador que huye [cuando el nombre de Allah es mencionado], que susurra en los corazones de los seres humanos, y existe entre los yinn y entre los seres humanos».",
                        "count": 1,
                        "maxCount": 1,
            "note": "سورة الإخلاص، سورة الفلق، سورة الناس",
            "audioUrls": ["https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q112.mp3","https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q113.mp3","https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q114.mp3"]
      },
                  {
                        "itemNumber": 138,
                        "text": "﴿ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ۝﴾",
                        "latin": "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm, lā taʾkhudhuhu sinatun wa lā nawm, lahu mā fis-samāwāti wa mā fil-arḍ, man dhā alladhī Yashfaʿu ʿindahu illā bi-idhnih, yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shayʾin min ʿilmihi illā bi-mā shāʾ, wasiʿa kursiyyuhu as-samāwāti wal-arḍ, wa lā yaʾūduhu ḥifẓuhumā wa huwa al-ʿaliyyu al-ʿaẓīm.",
                        "explanationEs": "¡Allah! No existe nada ni nadie con derecho a ser adorado excepto Él, el Viviente [Eterno], el Sustentador [y Gobernador de toda la creación]. No Lo afectan somnolencia ni sueño. Suyo es cuanto hay en los cielos y la Tierra. ¿Quién podrá interceder ante Él si no es con Su permiso? Conoce el pasado y el futuro [lo manifiesto y lo oculto] y nadie abarca de Su conocimiento salvo lo que Él quiere. El escabel de Su Trono abarca los cielos y la Tierra, y la custodia [y mantenimiento] de ambos no Lo agobia. Y Él es el Sublime, el Grandioso. [Al-Baqarah: 255]",
                        "count": 1,
                        "maxCount": 1,
            "note": "سورة البقرة الآية 255",
            "audioUrls": ["https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q002-255.mp3"]
      },
                  {
                        "itemNumber": 139,
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
                        "latin": "Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu yuḥyī wa yumītu wa huwa ʿalā kulli shayʾin qadīr.",
                        "explanationEs": "No hay más divinidad que Allah, Único, sin asociados, Suyo es el reino y Suya es la alabanza, Él da la vida y da la muerte, y Él es Omnipotente sobre todas las cosas (diez veces tras el Maghrib y el Fajr).",
                        "count": 10,
                        "maxCount": 10,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20139.mp3"
                        ]
                  },
                  {
                        "itemNumber": 140,
                        "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.",
                        "latin": "Allāhumma innī asʾaluka ʿilman nāfiʿā, wa rizqan ṭayyibā, wa ʿamalan mutaqabbalā.",
                        "explanationEs": "¡Oh Allah! Te pido un conocimiento útil, un sustento puro y lícito, y obras aceptables (se dice tras el saludo final de la oración del Fajr).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2021.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "istikhara",
            "titleAr": "دُعَاءُ صَلاَةِ الِاسْتِخَارَةِ",
            "titleEs": "Súplica de la oración de la orientación o consulta (Al-Istijárah)",
            "items": [
                  {
                        "itemNumber": 141,
                        "text": "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ؛ فَإِنَّكَ تَقْدِرُ وَلاَ أَقْدِرُ، وَتَعْلَمُ وَلاَ أَعْلَمُ، وَأَنْتَ عَلاَّمُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ\n\n- وَيُسَمِّي حَاجَتَهُ -\n\nخَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي\n\n(أَوْ قَالَ: عَاجِلِهِ وَآجِلِهِ)\n\nفَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي\n\n(أَوْ قَالَ: عَاجِلِهِ وَآجِلِهِ)\n\nفَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ.",
                        "latin": "Allāhumma innī astakhīruka bi-ʿilmika, wa astaqdiruka bi-qudratika, wa asʾaluka min faḍlika al-ʿaẓīm; fa-innaka taqdiru wa lā aqdir, wa taʿlamu wa lā aʿlam, wa anta ʿallāmu al-ghuyūb. Allāhumma in kunta taʿlamu anna hādhā al-amra (y nombra su asunto) khayrun lī fī dīnī wa maʿāshī wa ʿāqibati amrī (aw qāla: ʿājilihi wa ājilih) faqdurhu lī wa yassirhu lī thumma bārik lī fīh, wa in kunta taʿlamu anna hādhā al-amra sharrun lī fī dīnī wa maʿāshī wa ʿāqibati amrī (aw qāla: ʿājilihi wa ājilih) faṣrifhu ʿannī waṣrifnī ʿanhu waqdur lī al-khayra ḥaythu kāna thumma arḍinī bih.",
                        "explanationEs": "¡Oh Allah! Te pido orientación mediante Tu conocimiento, Te pido capacidad mediante Tu poder y Te pido de Tu gran favor; pues Tú puedes y yo no puedo, Tú sabes y yo no sé, y Tú eres el Conocedor de lo oculto. ¡Oh Allah! Si sabes que este asunto (nombra su necesidad) es bueno para mí en mi religión, mi vida y mi destino final, decrétamelo, facilítamelo y luego bendícemelo. Y si sabes que este asunto es malo para mí en mi religión, mi vida y mi destino final, apártalo de mí y apártame de él, decreta para mí el bien dondequiera que esté y haz que me sienta complacido con ello.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20141.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "layl",
            "titleAr": "أَذْكَارُ اللَّيْلِ وَالنَّوْمِ",
            "titleEs": "La noche y el sueño",
            "items": [
                  {
                        "itemNumber": 142,
                        "subtitleAr": "الدُّعَاءُ عِنْدَ التَّقَلُّبِ فِي الفِرَاشِ لَيْلاً",
                        "subtitleEs": "Súplica al darse la vuelta en la cama por la noche",
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ الْوَاحِدُ الْقَهَّارُ، رَبُّ السَّمَوَاتِ وَالأَرْضِ وَمَا بَيْنَهُمَا الْعَزِيزُ الْغَفَّارُ.",
                        "latin": "Lā ilāha illā Allāhu al-wāḥidu al-qahhār, rabbu as-samāwāti wal-arḍi wa mā baynahumā al-ʿazīzu al-ghaffār.",
                        "explanationEs": "No hay más divinidad que Allah, el Único, el Dominador, Señor de los cielos y de la tierra y de lo que hay entre ambos, el Poderoso, el Absolvedor.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20142.mp3"
                        ]
                  },
                  {
                        "itemNumber": 143,
                        "subtitleAr": "دُعَاءُ الفَزَعِ فِي النَّوْمِ وَمَنْ بُلِيَ بِالوَحْشَةِ",
                        "subtitleEs": "Súplica ante el sobresalto al dormir o la sensación de angustia",
                        "text": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَنْ يَحْضُرُونِ.",
                        "latin": "Aʿūdhu bi-kalimāti Allāhi at-tāmmāti min ghaḍabihi wa ʿiqābih, wa sharri ʿibādih, wa min hamazāti ash-shayāṭīni wa an yaḥḍurūn.",
                        "explanationEs": "Me refugio en las palabras perfectas de Allah de Su ira, de Su castigo, del mal de Sus siervos y de las incitaciones de los demonios y de que se presenten ante mí.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20143.mp3"
                        ]
                  },
                  {
                        "itemNumber": 144,
                        "subtitleAr": "مَا يَفْعَلُ مَنْ رَأَى الرُّؤْيَا أَوْ الحُلْمَ",
                        "subtitleEs": "Lo que debe hacer quien tiene una visión o un sueño",
                        "text": "يَنْفُثُ عَنْ يَسَارِهِ (ثَلاَثاً)، وَيَسْتَعِيذُ بِاللَّهِ مِنَ الشَّيْطَانِ وَمِنْ شَرِّ مَا رَأَى (ثَلاَثَ مَرَّاتٍ)، وَلاَ يُحَدِّثْ بِهَا أَحَداً، وَيَتَحَوَّلُ عَنْ جَنْبِهِ الَّذِي كَانَ عَلَيْهِ.",
                        "latin": "Yanfuthu ʿan yasārihi (thalāthan), wa yastaʿīdhu billāhi minash-shayṭāni wa min sharri mā raʾā (thalātha marrāt), wa lā yuḥaddith bihā aḥadā, wa yataḥawwalu ʿan janbihi alladhī kāna ʿalayh.",
                        "explanationEs": "Sopla suavemente a su izquierda tres veces, busca refugio en Allah de Shaitán y del mal de lo que vio (tres veces), no se lo cuenta a nadie y cambia del costado sobre el que estaba recostado.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20144.mp3"
                        ]
                  },
                  {
                        "itemNumber": 145,
                        "subtitleAr": "مَا يَفْعَلُ مَنْ رَأَى الرُّؤْيَا أَوْ الحُلْمَ",
                        "subtitleEs": "Lo que debe hacer quien tiene una visión o un sueño",
                        "text": "وَيَقُومُ يُصَلِّي إِنْ أَرَادَ ذَلِكَ.",
                        "latin": "Wa yaqūmu yuṣallī in arāda dhālik.",
                        "explanationEs": "Y se levanta a orar si así lo desea.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20145.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "witr",
            "titleAr": "أَذْكَارُ الْوِتْرِ",
            "titleEs": "Azkar del Witr",
            "items": [
                  {
                        "itemNumber": 146,
                        "subtitleAr": "دُعَاءُ قُنُوتِ الوِتْرِ",
                        "subtitleEs": "Súplica del Qunūt en la oración del Witr",
                        "text": "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ؛ فَإِنَّكَ تَقْضِي وَلاَ يُقْضَى عَلَيْكَ، إِنَّهُ لاَ يَذِلُّ مَنْ وَالَيْتَ، [وَلاَ يَعِزُّ مَنْ عَادَيْتَ]، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ.",
                        "latin": "Allāhumma ihdinī fīman hadayt, wa ʿāfinī fīman ʿāfayt, wa tawallanī fīman tawallayt, wa bārik lī fīmā aʿṭayt, wa qinī sharra mā qaḍayt; fa-innaka taqḍī wa lā yuqḍā ʿalayk, innahu lā yadhillu man wālayt, [wa lā yaʿizzu man ʿādayt], tabārakta rabbanā wa taʿālayt.",
                        "explanationEs": "¡Oh Allah! Guíame junto a quienes has guiado, dame salud junto a quienes has sanado, protégeme junto a quienes has protegido, bendice para mí lo que me has concedido y líbrame del mal de lo que has decretado. Ciertamente Tú decretas y nadie decreta contra Ti; no será humillado a quien Tú proteges [ni será enaltecido a quien Tú tomas por enemigo]. Bendito y Enaltecido seas, Señor nuestro.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20146.mp3"
                        ]
                  },
                  {
                        "itemNumber": 147,
                        "subtitleAr": "دُعَاءُ قُنُوتِ الوِتْرِ",
                        "subtitleEs": "Súplica del Qunūt en la oración del Witr",
                        "text": "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لاَ أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ.",
                        "latin": "Allāhumma innī aʿūdhu bi-riḍāka min sakhaṭika, wa bi-muʿāfātika min ʿuqūbatika, wa aʿūdhu bika minka, lā uḥṣī thanāʾan ʿalayka, anta kamā athnayta ʿalā nafsik.",
                        "explanationEs": "¡Oh Allah! Me refugio en Tu complacencia de Tu enojo, en Tu perdón de Tu castigo, y me refugio en Ti de Ti. No puedo enumerar Tus alabanzas; Tú eres tal como Te has alabado a Ti mismo.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2048.mp3"
                        ]
                  },
                  {
                        "itemNumber": 148,
                        "subtitleAr": "دُعَاءُ قُنُوتِ الوِتْرِ",
                        "subtitleEs": "Súplica del Qunūt en la oración del Witr",
                        "text": "اللَّهُمَّ إِيَّاكَ نَعْبُدُ، وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ، وَنَخْشَى عَذَابَكَ، إِنَّ عَذَابَكَ بِالْكَافِرِينَ مُلْحَقٌ. اللَّهُمَّ إِنَّا نَسْتَعِينُكَ، وَنَسْتَغْفِرُكَ، وَنُثْنِي عَلَيْكَ الْخَيْرَ، وَلاَ نَكْفُرُكَ، وَنُؤْمِنُ بِكَ، وَنَخْضَعُ لَكَ، وَنَخْلَعُ مَنْ يَكْفُرُكَ.",
                        "latin": "Allāhumma iyyāka naʿbudu, wa laka nuṣallī wa nasjudu, wa ilayka nasʿā wa naḥfid, narjū raḥmataka, wa nakhshā ʿadhābak, inna ʿadhābaka bil-kāfirīna mulḥaq. Allāhumma innā nastaʿīnuka, wa nastaghfiruka, wa nuthnī ʿalayka al-khayra, wa lā nakfuruka, wa nuʾminu bika, wa nakhḍaʿu laka, wa nakhlaʿu man yakfuruk.",
                        "explanationEs": "¡Oh Allah! A Ti solo adoramos, por Ti oramos y nos prosternamos, hacia Ti nos esmeramos y apresuramos. Esperamos Tu misericordia y tememos Tu castigo; ciertamente Tu castigo alcanzará a los incrédulos. ¡Oh Allah! A Ti pedimos ayuda, a Ti pedimos perdón, Te alabamos con todo bien, no somos ingratos Contigo, creemos en Ti, nos sometemos a Ti y nos apartamos de quien Te niega.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20148.mp3"
                        ]
                  },
                  {
                        "itemNumber": 149,
                        "subtitleAr": "الذِّكْرُ عَقِبَ السَّلاَمِ مِنَ الوِتْرِ",
                        "subtitleEs": "Súplica tras el saludo final en la oración del Witr",
                        "text": "سُبْحَانَ الْمَلِكِ الْقُدُّوسِ (ثَلاَثَ مَرَّاتٍ)،\n\nوَالثَّالِثَةُ يَجْهَرُ بِهَا وَيَمُدُّ بِهَا صَوْتَهُ يَقُولُ:\n\n[رَبِّ الْمَلاَئِكَةِ وَالرُّوحِ].",
                        "latin": "Subḥāna al-maliki al-quddūs (tres veces, alzando y alargando la voz en la tercera diciendo): [Rabbi al-malāʾikati war-rūḥ].",
                        "explanationEs": "Glorificado sea el Rey, el Santísimo (tres veces, elevando y alargando la voz en la tercera oportunidad diciendo: [Señor de los ángeles y del Espíritu]).",
                        "count": 3,
                        "maxCount": 3,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20149.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "karb_khawf",
            "titleAr": "أَدْعِيَةُ الْهَمِّ وَالْكَرْبِ وَالْخَوْفِ",
            "titleEs": "Angustia, aflicción y miedo",
            "items": [
                  {
                        "itemNumber": 150,
                        "subtitleAr": "دُعَاءُ الهَمِّ وَالحَزَنِ",
                        "subtitleEs": "Súplica ante la preocupación y la tristeza",
                        "text": "اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَداً مِنْ خَلْقِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلاَءَ حُزْنِي، وَذَهَابَ هَمِّي.",
                        "latin": "Allāhumma innī ʿabduka, ibnu ʿabdika, ibnu amatika, nāṣiyatī bi-yadik, māḍin fiyya ḥukmuk, ʿadlun fiyya qaḍāʾuk, asʾaluka bi-kulli ismin huwa lak, sammayta bihi nafsak, aw anzaltahu fī kitābik, aw ʿallamtahu aḥadan min khalqik, aw istaʾtharta bihi fī ʿilmi al-ghaybi ʿindak, an tajʿala al-qurʾāna rabīʿa qalbī, wa nūra ṣadrī, wa jalāʾa ḥuznī, wa dhahāba hammī.",
                        "explanationEs": "¡Oh Allah! Ciertamente soy Tu siervo, hijo de Tu siervo, hijo de Tu sierva. Mi frente está en Tu mano, Tu juicio sobre mí es ejecutable y Tu decreto sobre mí es justo. Te pido por cada nombre que Te pertenece, con el que Te has nombrado a Ti mismo, o has revelado en Tu Libro, o has enseñado a alguno de Tus seres creados, o Te has reservado en el conocimiento de lo oculto junto a Ti, que hagas del Corán la primavera de mi corazón, la luz de mi pecho, el alivio de mi tristeza y la liberación de mi preocupación.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20150.mp3"
                        ]
                  },
                  {
                        "itemNumber": 151,
                        "subtitleAr": "دُعَاءُ الهَمِّ وَالحَزَنِ",
                        "subtitleEs": "Súplica ante la preocupación y la tristeza",
                        "text": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.",
                        "latin": "Allāhumma innī aʿūdhu bika minal-hammi wal-ḥazan, wal-ʿajzi wal-kasal, wal-bukhli wal-jubn, wa ḍalaʿi ad-dayni wa ghalabati ar-rijāl.",
                        "explanationEs": "¡Oh Allah! Me refugio en Ti de la ansiedad y de la tristeza, de la incapacidad y de la pereza, de la tacañería y de la cobardía, del peso de las deudas y de la opresión de los hombres.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2036.mp3"
                        ]
                  },
                  {
                        "itemNumber": 152,
                        "subtitleAr": "دُعَاءُ الكَرْبِ",
                        "subtitleEs": "Súplica ante la aflicción o angustia severa",
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ الْعَظِيمُ الْحَلِيمُ، لاَ إِلَهَ إِلاَّ اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لاَ إِلَهَ إِلاَّ اللَّهُ رَبُّ السَّمَوَاتِ وَرَبُّ الأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ.",
                        "latin": "Lā ilāha illā Allāhu al-ʿaẓīmu al-ḥalīm, lā ilāha illā Allāhu rabbu al-ʿarshi al-ʿaẓīm, lā ilāha illā Allāhu rabbu as-samāwāti wa rabbu al-arḍi wa rabbu al-ʿarshi al-karīm.",
                        "explanationEs": "No hay más divinidad que Allah, el Grandioso, el Tolerante. No hay más divinidad que Allah, Señor del Trono grandioso. No hay más divinidad que Allah, Señor de los cielos, Señor de la tierra y Señor del Trono noble.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20152.mp3"
                        ]
                  },
                  {
                        "itemNumber": 153,
                        "subtitleAr": "دُعَاءُ الكَرْبِ",
                        "subtitleEs": "Súplica ante la aflicción o angustia severa",
                        "text": "اللَّهُمَّ رَحْمَتَكَ أَرْجُو، فَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لاَ إِلَهَ إِلاَّ أَنْتَ.",
                        "latin": "Allāhumma raḥmataka arjū, fa-lā takilnī ilā nafsī ṭarfata ʿayn, wa aṣliḥ lī shaʾnī kullah, lā ilāha illā ant.",
                        "explanationEs": "¡Oh Allah! Tu misericordia espero, no me abandones a mí mismo ni por el parpadeo de un ojo, y arregla todos mis asuntos. No hay más divinidad excepto Tú.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%20255.mp3"
                        ]
                  },
                  {
                        "itemNumber": 154,
                        "subtitleAr": "دُعَاءُ الكَرْبِ",
                        "subtitleEs": "Súplica ante la aflicción o angustia severa",
                        "text": "لاَ إِلَهَ إِلاَّ أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ.",
                        "latin": "Lā ilāha illā anta subḥānaka innī kuntu minaẓ-ẓālimīn.",
                        "explanationEs": "No hay más divinidad excepto Tú, ¡glorificado seas! Ciertamente he sido de los injustos.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20154.mp3"
                        ]
                  },
                  {
                        "itemNumber": 155,
                        "subtitleAr": "دُعَاءُ الكَرْبِ",
                        "subtitleEs": "Súplica ante la aflicción o angustia severa",
                        "text": "اللَّهُ اللَّهُ رَبِّي لاَ أُشْرِكُ بِهِ شَيْئاً.",
                        "latin": "Allāhu Allāhu rabbī lā ushriku bihi shayʾā.",
                        "explanationEs": "Allah, Allah es mi Señor, no le asocio absolutamente nada.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%20256.mp3"
                        ]
                  },
                  {
                        "itemNumber": 156,
                        "subtitleAr": "دُعَاءُ لِقَاءِ العَدُوِّ وَذِي السُّلْطَانِ",
                        "subtitleEs": "Súplica al enfrentarse al enemigo o a un gobernante/autoridad",
                        "text": "اللَّهُمَّ إِنَّا نَجْعَلُكَ فِي نُحُورِهِمْ، وَنَعُوذُ بِكَ مِنْ شُرُورِهِمْ.",
                        "latin": "Allāhumma innā najʿaluka fī nuḥūrihim, wa naʿūdhu bika min shurūrihim.",
                        "explanationEs": "¡Oh Allah! Te ponemos al frente contra ellos y nos refugiamos en Ti de sus males.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20156.mp3"
                        ]
                  },
                  {
                        "itemNumber": 157,
                        "subtitleAr": "دُعَاءُ لِقَاءِ العَدُوِّ وَذِي السُّلْطَانِ",
                        "subtitleEs": "Súplica al enfrentarse al enemigo o a un gobernante/autoridad",
                        "text": "اللَّهُمَّ أَنْتَ عَضُدِي، وَأَنْتَ نَصِيرِي، بِكَ أَحُولُ وَبِكَ أَصُولُ، وَبِكَ أُقَاتِلُ.",
                        "latin": "Allāhumma anta ʿaḍudī, wa anta naṣīrī, bika aḥūlu wa bika aṣūlu, wa bika uqātil.",
                        "explanationEs": "¡Oh Allah! Tú eres mi apoyo y Tú eres mi socorredor. Por Ti me muevo, por Ti me defiendo y por Ti combato.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20157.mp3"
                        ]
                  },
                  {
                        "itemNumber": 158,
                        "subtitleAr": "دُعَاءُ لِقَاءِ العَدُوِّ وَذِي السُّلْطَانِ",
                        "subtitleEs": "Súplica al enfrentarse al enemigo o a un gobernante/autoridad",
                        "text": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ.",
                        "latin": "Ḥasbunā Allāhu wa niʿma al-wakīl.",
                        "explanationEs": "Suficiente para nosotros es Allah, y ¡qué excelente Protector!",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20158.mp3"
                        ]
                  },
                  {
                        "itemNumber": 159,
                        "subtitleAr": "دُعَاءُ مَنْ خَافَ ظُلْمَ السُّلْطَانِ",
                        "subtitleEs": "Súplica de quien teme la opresión de un gobernante",
                        "text": "اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ، وَرَبَّ الْعَرْشِ الْعَظِيمِ، كُنْ لِي جَاراً مِنْ فُلاَنِ بْنِ فُلاَنٍ، وَأَحْزَابِهِ مِنْ خَلاَئِقِكَ، أَنْ يَفْرُطَ عَلَيَّ أَحَدٌ مِنْهُمْ أَوْ يَطْغَى، عَزَّ جَارُكَ، وَجَلَّ ثَنَاؤُكَ، وَلاَ إِلَهَ إِلاَّ أَنْتَ.",
                        "latin": "Allāhumma rabba as-samāwāti as-sabʿi, wa rabba al-ʿarshi al-ʿaẓīm, kun lī jāran min fulāni ibni fulān, wa aḥzābihi min khalāʾiqika, an yafruṭa ʿalayya aḥadun minhum aw yaṭghā, ʿazza jāruka, wa jalla thanāʾuka, wa lā ilāha illā ant.",
                        "explanationEs": "¡Oh Allah, Señor de los siete cielos y Señor del Trono grandioso! Sé para mí un protector contra (Fulano, hijo de Fulano) y sus aliados de Tu creación, para que ninguno de ellos se me adelante en agresión ni se extralimite contra mí. Poderoso es Tu protegido, gloriosa es Tu alabanza y no hay más divinidad excepto Tú.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20159.mp3"
                        ]
                  },
                  {
                        "itemNumber": 160,
                        "subtitleAr": "دُعَاءُ مَنْ خَافَ ظُلْمَ السُّلْطَانِ",
                        "subtitleEs": "Súplica de quien teme la opresión de un gobernante",
                        "text": "اللَّهُ أَكْبَرُ، اللَّهُ أَعَزُّ مِنْ خَلْقِهِ جَمِيعاً، اللَّهُ أَعَزُّ مِمَّا أَخَافُ وَأَحْذَرُ، أَعُوذُ بِاللَّهِ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ، الْمُمْسِكِ السَّمَوَاتِ السَّبْعِ أَنْ يَقَعْنَ عَلَى الأَرْضِ إِلاَّ بِإِذْنِهِ، مِنْ شَرِّ عَبْدِكَ فُلاَنٍ، وَجُنُودِهِ وَأَتْبَاعِهِ وَأَشْيَاعِهِ، مِنَ الْجِنِّ وَالإِنْسِ، اللَّهُمَّ كُنْ لِي جَاراً مِنْ شَرِّهِمْ، جَلَّ ثَنَاؤُكَ وَعَزَّ جَارُكَ، وَتَبَارَكَ اسْمُكَ، وَلاَ إِلَهَ غَيْرُكَ.",
                        "latin": "Allāhu akbaru, Allāhu aʿazzu min khalqihi jamīʿan, Allāhu aʿazzu mimmā akhāfu wa aḥdhar, aʿūdhu billāhi alladhī lā ilāha illā huwa, al-mumsiki as-samāwāti as-sabʿi an yaqaʿna ʿalal-arḍi illā bi-idhnih, min sharri ʿabdika fulān, wa junūdihi wa atbāʿihi wa ashyāʿih, minal-jinni wal-ins, Allāhumma kun lī jāran min sharrihim, jalla thanāʾuka wa ʿazza jāruk, wa tabāraka ismuk, wa lā ilāha ghayruk (tres veces).",
                        "explanationEs": "Allah es el más Grande, Allah es más poderoso que toda Su creación, Allah es más poderoso que lo que temo y precavo. Me refugio en Allah, no hay más divinidad excepto Él, Quien sostiene los siete cielos para que no caigan sobre la tierra sino por Su permiso, del mal de Tu siervo (Fulano), de sus ejércitos, sus seguidores y sus partidarios, de entre los genios y los humanos. ¡Oh Allah! Sé para mí un protector contra sus males. Gloriosa es Tu alabanza, poderoso es Tu protegido, bendito es Tu nombre y no hay más divinidad que Tú. (Se dice tres veces).",
                        "count": 3,
                        "maxCount": 3,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20160.mp3"
                        ]
                  },
                  {
                        "itemNumber": 161,
                        "subtitleAr": "الدُّعَاءُ عَلَى العَدُوِّ",
                        "subtitleEs": "Súplica contra el enemigo",
                        "text": "اللَّهُمَّ مُنْزِلَ الْكِتَابِ، سَرِيعَ الْحِسَابِ، اهْزِمِ الأَحْزَابَ، اللَّهُمَّ اهْزِمْهُمْ وَزَلْزِلْهُمْ.",
                        "latin": "Allāhumma munzila al-kitāb, sarīʿa al-ḥisāb, ihzimi al-aḥzāb, Allāhumma ihzimhum wa zalzilhum.",
                        "explanationEs": "¡Oh Allah! Revelador del Libro, Rápido en el cómputo, derrota a las facciones enemigas. ¡Oh Allah! Derrótalos y hazlos temblar.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20161.mp3"
                        ]
                  },
                  {
                        "itemNumber": 162,
                        "subtitleAr": "مَا يَقُولُ مَنْ خَافَ قَوْماً",
                        "subtitleEs": "Lo que dice quien teme a un grupo de personas",
                        "text": "اللَّهُمَّ اكْفِنِيهِمْ بِمَا شِئْتَ.",
                        "latin": "Allāhumma ikfinīhim bi-mā shiʾt.",
                        "explanationEs": "¡Oh Allah! Protégeme de ellos como Tú quieras.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20162.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "waswasa",
            "titleAr": "الْوَسْوَسَةُ وَطَرْدُ الشَّيْطَانِ",
            "titleEs": "Susurros y ahuyentar a Shaitán",
            "items": [
                  {
                        "itemNumber": 163,
                        "subtitleAr": "دُعَاءُ مَنْ أَصَابَهُ وَسْوَسَةٌ فِي الإِيمَانِ",
                        "subtitleEs": "Súplica para quien sufre de susurros/dudas sobre la fe",
                        "text": "يَسْتَعِيذُ بِاللَّهِ وَيَنْتَهِي عَمَّا شَكَّ فِيهِ.",
                        "latin": "Yastaʿīdhu billāhi wa yantahī ʿammā shakka fīh.",
                        "explanationEs": "Busca refugio en Allah y se abstiene de dar curso a las dudas que le surgen.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20163.mp3"
                        ]
                  },
                  {
                        "itemNumber": 164,
                        "subtitleAr": "دُعَاءُ مَنْ أَصَابَهُ وَسْوَسَةٌ فِي الإِيمَانِ",
                        "subtitleEs": "Súplica para quien sufre de susurros/dudas sobre la fe",
                        "text": "آمَنْتُ بِاللَّهِ وَرُسُلِهِ.",
                        "latin": "Āmantu billāhi wa rusulih.",
                        "explanationEs": "Dice: Creo en Allah y en Sus mensajeros.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20164.mp3"
                        ]
                  },
                  {
                        "itemNumber": 165,
                        "subtitleAr": "دُعَاءُ مَنْ أَصَابَهُ وَسْوَسَةٌ فِي الإِيمَانِ",
                        "subtitleEs": "Súplica para quien sufre de susurros/dudas sobre la fe",
                        "text": "﴿هُوَ ٱلۡأَوَّلُ وَٱلۡأٓخِرُ وَٱلظَّٰهِرُ وَٱلۡبَاطِنُۖ وَهُوَ بِكُلِّ شَيۡءٍ عَلِيمٌ۝﴾.",
                        "latin": "Huwa al-awwalu wal-ākhiru waẓ-ẓāhiru wal-bāṭinu wa huwa bi-kulli shayʾin ʿalīm.",
                        "explanationEs": "Lee las palabras del Altísimo: Él es el Primero y el Último, el Manifiesto y el Oculto. Él conoce todas las cosas.",
                        "count": 1,
                        "maxCount": 1,
                        "note": "سورة الحديد الآية 3",
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Quran/Q057-003.mp3"
                        ]
                  },
                  {
                        "itemNumber": 166,
                        "subtitleAr": "دُعَاءُ الوَسْوَسَةِ فِي الصَّلاَةِ وَالقِرَاءَةِ",
                        "subtitleEs": "Súplica contra las distracciones y susurros en la oración y la lectura",
                        "text": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ،\n\nوَاتْفُلْ عَلَى يَسَارِكَ (ثَلاَثاً).",
                        "latin": "Aʿūdhu billāhi minash-shayṭāni ar-rajīm (y escupe suavemente a la izquierda tres veces).",
                        "explanationEs": "Dice: Me refugio en Allah de Shaitán el maldito, y sopla suavemente hacia su izquierda tres veces.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20166.mp3"
                        ]
                  },
                  {
                        "itemNumber": 167,
                        "subtitleAr": "دُعَاءُ طَرْدِ الشَّيْطَانِ وَوَسَاوِسِهِ",
                        "subtitleEs": "Acciones para ahuyentar a Shaitán y sus susurros",
                        "text": "الاسْتِعَاذَةُ بِاللَّهِ مِنْهُ.",
                        "latin": "Al-istiʿādhatu billāhi minh.",
                        "explanationEs": "Buscar refugio en Allah de él (diciendo: A'udhu billahi mina ash-shaytan ar-rajim).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20167.mp3"
                        ]
                  },
                  {
                        "itemNumber": 168,
                        "subtitleAr": "دُعَاءُ طَرْدِ الشَّيْطَانِ وَوَسَاوِسِهِ",
                        "subtitleEs": "Acciones para ahuyentar a Shaitán y sus susurros",
                        "text": "الأَذَانُ.",
                        "latin": "Al-adhān.",
                        "explanationEs": "La llamada a la oración (el Adhán ahuyenta a Shaitán).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20168.mp3"
                        ]
                  },
                  {
                        "itemNumber": 169,
                        "subtitleAr": "دُعَاءُ طَرْدِ الشَّيْطَانِ وَوَسَاوِسِهِ",
                        "subtitleEs": "Acciones para ahuyentar a Shaitán y sus susurros",
                        "text": "الأَذْكَارُ وَقِرَاءَةُ الْقُرْآنِ.",
                        "latin": "Al-adhkāru wa qirāʾatu al-qurʾān.",
                        "explanationEs": "Las súplicas de recuerdo y la lectura del Corán.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20169.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "shadaid",
            "titleAr": "الشَّدَائِدُ وَالذُّنُوبُ",
            "titleEs": "Dificultades, deudas y pecados",
            "items": [
                  {
                        "itemNumber": 170,
                        "subtitleAr": "دُعَاءُ قَضَاءِ الدَّيْنِ",
                        "subtitleEs": "Súplica para el pago de las deudas",
                        "text": "اللَّهُمَّ اكْفِنِي بِحَلاَلِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.",
                        "latin": "Allāhumma ikfinī bi-ḥalālika ʿan ḥarāmik, wa aghninī bi-faḍlika ʿamman siwāk.",
                        "explanationEs": "¡Oh Allah! Haz que lo lícito me sea suficiente frente a lo ilícito, y enriquéceme con Tu favor prescindiendo de cualquier otro fuera de Ti.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2056.mp3"
                        ]
                  },
                  {
                        "itemNumber": 171,
                        "subtitleAr": "دُعَاءُ قَضَاءِ الدَّيْنِ",
                        "subtitleEs": "Súplica para el pago de las deudas",
                        "text": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.",
                        "latin": "Allāhumma innī aʿūdhu bika minal-hammi wal-ḥazan, wal-ʿajzi wal-kasal, wal-bukhli wal-jubn, wa ḍalaʿi ad-dayni wa ghalabati ar-rijāl.",
                        "explanationEs": "¡Oh Allah! Me refugio en Ti de la ansiedad y de la tristeza, de la incapacidad y de la pereza, de la tacañería y de la cobardía, del peso de las deudas y de la opresión de los hombres.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Dua/dua%2036.mp3"
                        ]
                  },
                  {
                        "itemNumber": 172,
                        "subtitleAr": "دُعَاءُ مَنِ اسْتَصْعَبَ عَلَيْهِ أَمْرٌ",
                        "subtitleEs": "Súplica para quien se le dificulta un asunto",
                        "text": "اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً.",
                        "latin": "Allāhumma lā sahla illā mā jaʿaltahu sahlā, wa anta tajʿalu al-ḥazna idhā shiʾta sahlā.",
                        "explanationEs": "¡Oh Allah! No hay nada fácil salvo lo que Tú haces fácil, y Tú haces que la dificultad, si quieres, sea fácil.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20172.mp3"
                        ]
                  },
                  {
                        "itemNumber": 173,
                        "subtitleAr": "مَا يَقُولُ وَيَفْعَلُ مَنْ أَذْنَبَ ذَنْباً",
                        "subtitleEs": "Lo que dice y hace quien comete un pecado",
                        "text": "مَا مِنْ عَبْدٍ يُذْنِبُ ذَنْباً فَيُحْسِنُ الطُّهُورَ، ثُمَّ يَقُومُ فَيُصَلِّي رَكْعَتَيْنِ، ثُمَّ يَسْتَغْفِرُ اللَّهَ إِلاَّ غَفَرَ اللَّهُ لَهُ.",
                        "latin": "Mā min ʿabdin yudhnibu dhanban fa-yuḥsinu aṭ-ṭuhūra, thumma yaqūmu fa-yuṣallī rakʿatayni, thumma yastaghfiru Allāha illā ghafara Allāhu lah.",
                        "explanationEs": "No hay siervo que cometa un pecado, se purifique minuciosamente, luego se levante y realice dos unidades de oración (raka'at), y pida perdón a Allah, sin que Allah lo perdone.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20173.mp3"
                        ]
                  },
                  {
                        "itemNumber": 174,
                        "subtitleAr": "الدُّعَاءُ حِينَمَا يَقَعُ مَا لاَ يَرْضَاهُ أَوْ غُلِبَ عَلَى أَمْرِهِ",
                        "subtitleEs": "Súplica cuando ocurre algo Indeseado o se es superado por las circunstancias",
                        "text": "قَدَرُ اللَّهِ وَمَا شَاءَ فَعَلَ.",
                        "latin": "Qadaru Allāhi wa mā shāʾa faʿal.",
                        "explanationEs": "Es el decreto de Allah, y Él hace lo que quiere.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20174.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "awlad",
            "titleAr": "أَذْكَارُ الْأَوْلَادِ",
            "titleEs": "Los hijos",
            "items": [
                  {
                        "itemNumber": 175,
                        "subtitleAr": "تَهْنِئَةُ المَوْلُودِ لَهُ وَجَوَابُهُ",
                        "subtitleEs": "Felicitación por el nacimiento de un bebé y su respuesta",
                        "text": "بَارَكَ اللَّهُ لَكَ فِي الْمَوْهُوبِ لَكَ، وَشَكَرْتَ الْوَاهِبَ، وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ بِرَّهُ.\n\nوَيَرُدُّ عَلَيْهِ الْمُهَنَّأُ فَيَقُولُ:\n\nبَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ، وَجَزَاكَ اللَّهُ خَيْراً، وَرَزَقَكَ اللَّهُ مِثْلَهُ، وَأَجْزَلَ ثَوَابَكَ.",
                        "latin": "Bāraka Allāhu laka fil-mawhūbi lak, wa shakarta al-wāhib, wa balagha ashuddah, wa ruziqta birrah. Wa yaruddu ʿalayhi al-muhannāʾu fa-yaqūl: Bāraka Allāhu laka wa bāraka ʿalayk, wa jazāka Allāhu khayrā, wa razaqaka Allāhu mithlah, wa ajzala thawābak.",
                        "explanationEs": "Que Allah bendiga para ti lo que te ha concedido, agradezcas al Otorgante, llegue a su madurez y seas agraciado con su piedad filial. Y quien recibe la felicitación responde: Que Allah te bendiga y derrame Sus bendiciones sobre ti, te recompense con el bien, te conceda algo semejante y multiplique tu recompensa.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20175.mp3"
                        ]
                  },
                  {
                        "itemNumber": 176,
                        "subtitleAr": "مَا يُعَوَّذُ بِهِ الأَوْلاَدُ",
                        "subtitleEs": "Súplica de protección para los niños",
                        "text": "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لاَمَّةٍ.",
                        "latin": "Uʿīdhukumā bi-kalimāti Allāhi at-tāmmati min kulli shayṭānin wa hāmmah, wa min kulli ʿaynin lāmmah.",
                        "explanationEs": "Los pongo bajo la protección de las palabras perfectas de Allah de todo demonio, de todo animal venenoso y de todo ojo dañino.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20176.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "marid",
            "titleAr": "أَذْكَارُ الْمَرِيضِ",
            "titleEs": "El enfermo",
            "items": [
                  {
                        "itemNumber": 177,
                        "subtitleAr": "الدُّعَاءُ لِلْمَرِيضِ فِي عِيَادَتِهِ",
                        "subtitleEs": "Súplica por el enfermo al visitarlo",
                        "text": "لاَ بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ.",
                        "latin": "Lā baʾsa ṭahūrun in shāʾa Allāh.",
                        "explanationEs": "No hay mal alguno, esto es una purificación, si Allah quiere.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20177.mp3"
                        ]
                  },
                  {
                        "itemNumber": 178,
                        "subtitleAr": "الدُّعَاءُ لِلْمَرِيضِ فِي عِيَادَتِهِ",
                        "subtitleEs": "Súplica por el enfermo al visitarlo",
                        "text": "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ.",
                        "latin": "Asʾalu Allāha al-ʿaẓīma rabba al-ʿarshi al-ʿaẓīmi an yashfiyak.",
                        "explanationEs": "Ruego a Allah el Grandioso, Señor del Trono grandioso, que te sane. (Siete veces).",
                        "count": 7,
                        "maxCount": 7,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20178.mp3"
                        ]
                  },
                  {
                        "itemNumber": 179,
                        "subtitleAr": "فَضْلُ عِيَادَةِ المَرِيضِ",
                        "subtitleEs": "Mérito de visitar al enfermo",
                        "text": "قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِذَا عَادَ الرَّجُلُ أَخَاهُ الْمُسْلِمَ مَشَى فِي خِرَافَةِ الْجَنَّةِ حَتَّى يَجْلِسَ، فَإِذَا جَلَسَ غَمَرَتْهُ الرَّحْمَةُ، فَإِنْ كَانَ غُدْوَةً صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُمْسِيَ، وَإِنْ كَانَ مَسَاءً صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُصْبِحَ.",
                        "latin": "Qāla an-nabiyyu ṣallā Allāhu ʿalayhi wa sallam: Idhā ʿāda ar-rajulu akhāhu al-muslima mashā fī khirāfati al-jannati ḥattā yajlis, fa-idhā jalasa ghamarathuhu ar-raḥmah, fa-in kāna ghudwatan ṣallā ʿalayhi sabʿūna alfa malakin ḥattā yumsiya, wa in kāna masāʾan ṣallā ʿalayhi sabʿūna alfa malakin ḥattā yuṣbiḥ.",
                        "explanationEs": "Dijo el Profeta (que la paz y las bendiciones de Allah sean con él): Cuando un musulmán visita a su hermano musulmán enfermo, camina recolectando los frutos del Paraíso hasta que se sienta; y cuando se sienta, la misericordia lo envuelve. Si es por la mañana, setenta mil ángeles piden por él hasta la tarde; y si es por la tarde, setenta mil ángeles piden por él hasta la mañana.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20179.mp3"
                        ]
                  },
                  {
                        "itemNumber": 180,
                        "subtitleAr": "دُعَاءُ المَرِيضِ الَّذِي يَئِسَ مِنْ حَيَاتِهِ",
                        "subtitleEs": "Súplica del enfermo terminal o que pierde la esperanza de vida",
                        "text": "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَأَلْحِقْنِي بِالرَّفِيقِ الأَعْلَى.",
                        "latin": "Allāhumma ighfir lī, warḥamnī, wal-ḥiqnī bir-rafīqi al-aʿlā.",
                        "explanationEs": "¡Oh Allah! Perdóname, ten misericordia de mí y reúneme con el Compañero Supremo (los profetas, los veraces, los mártires y los justos, en lo más alto del Paraíso).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20180.mp3"
                        ]
                  },
                  {
                        "itemNumber": 181,
                        "subtitleAr": "دُعَاءُ المَرِيضِ الَّذِي يَئِسَ مِنْ حَيَاتِهِ",
                        "subtitleEs": "Súplica del enfermo terminal o que pierde la esperanza de vida",
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ إِنَّ لِلْمَوْتِ سَكَرَاتٍ.",
                        "latin": "Lā ilāha illā Allāhu inna lil-mawti sakarāt.",
                        "explanationEs": "No hay más divinidad que Allah; ciertamente la muerte tiene sus agonías.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20181.mp3"
                        ]
                  },
                  {
                        "itemNumber": 182,
                        "subtitleAr": "دُعَاءُ المَرِيضِ الَّذِي يَئِسَ مِنْ حَيَاتِهِ",
                        "subtitleEs": "Súplica del enfermo terminal o que pierde la esperanza de vida",
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لاَ إِلَهَ إِلاَّ اللَّهُ لَهُ المُلْكُ وَلَهُ الْحَمْدُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
                        "latin": "Lā ilāha illā Allāhu wallāhu akbar, lā ilāha illā Allāhu waḥdah, lā ilāha illā Allāhu waḥdahu lā sharīka lah, lā ilāha illā Allāhu lahu al-mulku wa lahu al-ḥamd, lā ilāha illā Allāhu wa lā ḥawla wa lā quwwata illā billāh.",
                        "explanationEs": "No hay más divinidad que Allah y Allah es el más Grande. No hay más divinidad que Allah, Único. No hay más divinidad que Allah, Único, sin asociados. No hay más divinidad que Allah, Suyo es el reino y Suya es la alabanza. No hay más divinidad que Allah y no hay fuerza ni poder sino en Allah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20182.mp3"
                        ]
                  },
                  {
                        "itemNumber": 183,
                        "subtitleAr": "تَلْقِينُ المُحْتَضَرِ",
                        "subtitleEs": "Inculcar el testimonio al moribundo",
                        "text": "مَنْ كَانَ آخِرُ كَلاَمِهِ لاَ إِلَهَ إِلاَّ اللَّهُ دَخَلَ الْجَنَّةَ.",
                        "latin": "Man kāna ākhiru kalāmihi lā ilāha illā Allāhu dakhala al-jannah.",
                        "explanationEs": "Aquel cuyas últimas palabras sean 'no hay más divinidad que Allah', entrará al Paraíso.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20183.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "janaiz",
            "titleAr": "أَذْكَارُ الْمُصِيبَةِ وَالْجَنَائِزِ",
            "titleEs": "Desgracia, fallecimiento y entierro",
            "items": [
                  {
                        "itemNumber": 184,
                        "subtitleAr": "دُعَاءُ مَنْ أَصَابَهُ مُصِيبَةٌ",
                        "subtitleEs": "Súplica de quien sufre una desgracia o calamidad",
                        "text": "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي، وَأَخْلِفْ لِي خَيْراً مِنْهَا.",
                        "latin": "Innā lillāhi wa innā ilayhi rājiʿūn, Allāhummaʾ-jurnī fī muṣībatī, wa akhlif lī khayran minhā.",
                        "explanationEs": "Ciertamente pertenecemos a Allah y a Él hemos de retornar. ¡Oh Allah! Recompénsame en mi desgracia y reemplázamela por algo mejor.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20184.mp3"
                        ]
                  },
                  {
                        "itemNumber": 185,
                        "subtitleAr": "الدُّعَاءُ عِنْدَ إِغْمَاضِ المَيِّتِ",
                        "subtitleEs": "Súplica al cerrar los ojos al difunto",
                        "text": "اللَّهُمَّ اغْفِرْ لِفُلاَنٍ\n\n(بِاسْمِهِ)\n\nوَارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّينَ، وَاخْلُفْهُ فِي عَقِبِهِ فِي الْغَابِرِينَ، وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ الْعَالَمِينَ، وَافْسَحْ لَهُ فِي قَبْرِهِ، وَنَوِّرْ لَهُ فِيهِ.",
                        "latin": "Allāhumma ighfir li-fulān (por su nombre) warfaʿ darajatahu fil-mahdiyyīn, wakhlufhu fī ʿaqibihi fil-ghābirīn, waghfir lanā wa lahu yā rabba al-ʿālamīn, wafsaḥ lahu fī qabrih, wa nawwir lahu fīh.",
                        "explanationEs": "¡Oh Allah! Perdona a (menciona su nombre) y eleva su rango entre los bien guiados, sé Tú su sustituto entre sus descendientes que quedan atrás, perdónanos a nosotros y a él, ¡oh Señor de los mundos!, ensancha para él su tumba e ilumínasela.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20185.mp3"
                        ]
                  },
                  {
                        "itemNumber": 186,
                        "subtitleAr": "الدُّعَاءُ لِلْمَيِّتِ فِي الصَّلاَةِ عَلَيْهِ",
                        "subtitleEs": "Súplica por el difunto en la oración fúnebre (Janazah)",
                        "text": "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ، وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الأَبْيَضَ مِنَ الدَّنَسِ، وَأَبْدِلْهُ دَاراً خَيْراً مِنْ دَارِهِ، وَأَهْلاً خَيْراً مِنْ أَهْلِهِ، وَزَوْجاً خَيْراً مِنْ زَوْجِهِ، وَأَدْخِلْهُ الْجَنَّةَ، وَأَعِذْهُ مِنْ عَذَابِ القَبْرِ [وَعَذَابِ النَّارِ].",
                        "latin": "Allāhumma ighfir lahu warḥamhu, wa ʿāfihi, waʿfu ʿanhu, wa akrim nuzulahu, wa wassiʿ mudkhalahu, waghsilhu bil-māʾi wath-thalji wal-barad, wa naqqihi minal-khaṭāyā kamā naqqayta ath-thawba al-abyaḍa minad-danas, wa abdilhu dāran khayran min dārih, wa ahlan khayran min ahlih, wa zawjan khayran min zawjih, wa adkhilhu al-jannah, wa aʿidhhu min ʿadhābi al-qabr [wa ʿadhābi an-nār].",
                        "explanationEs": "¡Oh Allah! Perdónalo y ten misericordia de él, dale bienestar y perdónalo, honra su morada y ensancha su entrada; lávalo con agua, nieve y granizo, y purifícalo de los pecados como purificas el vestido blanco de la impureza. Concédele una morada mejor que su morada, una familia mejor que su familia, un cónyuge mejor que su cónyuge, introdúcelo en el Paraíso y protégelo del castigo de la tumba [y del castigo del Fuego].",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20186.mp3"
                        ]
                  },
                  {
                        "itemNumber": 187,
                        "subtitleAr": "الدُّعَاءُ لِلْمَيِّتِ فِي الصَّلاَةِ عَلَيْهِ",
                        "subtitleEs": "Súplica por el difunto en la oración fúnebre (Janazah)",
                        "text": "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبِيرِنَا، وَذَكَرِنَا وَأُنْثَانَا. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الإِسْلاَمِ، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الإِيمَانِ، اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُ، وَلاَ تُضِلَّنَا بَعْدَهُ.",
                        "latin": "Allāhumma ighfir li-ḥayyinā wa mayyitinā, wa shāhidinā wa ghāʾibinā, wa ṣaghīrinā wa kabīrinā, wa dhakarinā wa unthānā. Allāhumma man aḥyaytahu minnā fa-aḥyihi ʿalal-islām, wa man tawaffaytahu minnā fa-tawaffahu ʿalal-īmān. Allāhumma lā taḥrimnā ajrah, wa lā tuḍillanā baʿdah.",
                        "explanationEs": "¡Oh Allah! Perdona a nuestros vivos y a nuestros muertos, a los presentes y a los ausentes, a nuestros pequeños y a nuestros grandes, a nuestros hombres y a nuestras mujeres. ¡Oh Allah! A quien de nosotros mantengas con vida, hazlo vivir en el Islam, y a quien hagas morir, hazlo morir en la fe. ¡Oh Allah! No nos prives de su recompensa ni nos extravíes después de él.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20187.mp3"
                        ]
                  },
                  {
                        "itemNumber": 188,
                        "subtitleAr": "الدُّعَاءُ لِلْمَيِّتِ فِي الصَّلاَةِ عَلَيْهِ",
                        "subtitleEs": "Súplica por el difunto en la oración fúnebre (Janazah)",
                        "text": "اللَّهُمَّ إِنَّ فُلاَنَ بْنَ فُلاَنٍ فِي ذِمَّتِكَ، وَحَبْلِ جِوَارِكَ، فَقِهِ مِنْ فِتْنَةِ الْقَبْرِ، وَعَذَابِ النَّارِ، وَأَنْتَ أَهْلُ الْوَفَاءِ وَالْحَقِّ، فَاغْفِرْ لَهُ وَارْحَمْهُ إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ.",
                        "latin": "Allāhumma inna fulāna ibna fulān fī dhimmatika, wa ḥabli jiwārik, fa-qihi min fitnati al-qabr, wa ʿadhābi an-nār, wa anta ahlu al-wafāʾi wal-ḥaqq, faghfir lahu warḥamhu innaka anta al-ghafūru ar-raḥīm.",
                        "explanationEs": "¡Oh Allah! Ciertamente (Fulano hijo de Fulano) está bajo Tu protección y Tu amparo; protégelo de la prueba de la tumba y del castigo del Fuego. Tú eres el Dueño del cumplimiento y de la Verdad, perdónalo y ten misericordia de él, ciertamente Tú eres el Absolvedor, el Misericordioso.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20188.mp3"
                        ]
                  },
                  {
                        "itemNumber": 189,
                        "subtitleAr": "الدُّعَاءُ لِلْمَيِّتِ فِي الصَّلاَةِ عَلَيْهِ",
                        "subtitleEs": "Súplica por el difunto en la oración fúnebre (Janazah)",
                        "text": "اللَّهُمَّ عَبْدُكَ وَابْنُ أَمَتِكَ احْتَاجَ إِلَى رَحْمَتِكَ، وَأَنْتَ غَنِيٌّ عَنْ عَذَابِهِ، إِنْ كَانَ مُحْسِناً فَزِدْ فِي حَسَنَاتِهِ، وَإِنْ كَانَ مُسِيئاً فَتَجَاوَزْ عَنْهُ.",
                        "latin": "Allāhumma ʿabduka wabnu amatika iḥtāja ilā raḥmatik, wa anta ghaniyyun ʿan ʿadhābih, in kāna muḥsinan fa-zid fī ḥasanātih, wa in kāna musīʾan fa-tajāwaz ʿanh.",
                        "explanationEs": "¡Oh Allah! Tu siervo e hijo de Tu sierva está necesitado de Tu misericordia, y Tú no necesitas de su castigo. Si fue benefactor, aumenta sus buenas obras; y si fue pecador, pasa por alto sus faltas.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20189.mp3"
                        ]
                  },
                  {
                        "itemNumber": 190,
                        "subtitleAr": "الدُّعَاءُ لِلْفَرَطِ فِي الصَّلاَةِ عَلَيْهِ",
                        "subtitleEs": "Súplica en la oración fúnebre por un niño fallecido (Farat)",
                        "text": "اللَّهُمَّ أَعِذْهُ مِنْ عَذَابِ الْقَبْرِ. [اللَّهُمَّ اجْعَلْهُ فَرَطاً وَذُخْراً لِوَالِدَيْهِ، وَشَفِيعاً مُجَاباً، اللَّهُمَّ ثَقِّلْ بِهِ مَوَازِينَهُمَا، وَأَعْظِمْ بِهِ أُجُورَهُمَا، وَأَلْحِقْهُ بِصَالِحِ الْمُؤْمِنِينَ، وَاجْعَلْهُ فِي كَفَالَةِ إِبْرَاهِيمَ، وَقِهِ بِرَحْمَتِكَ عَذَابَ الْجَحِيمِ، وَأَبْدِلْهُ دَاراً خَيْراً مِنْ دَارِهِ، وَأَهْلاً خَيْراً مِنْ أَهْلِهِ، اللَّهُمَّ اغْفِرْ لِأَسْلاَفِنَا، وَأَفْرَاطِنَا، وَمَنْ سَبَقَنَا بِالإِيمَانِ].",
                        "latin": "Allāhumma aʿidhhu min ʿadhābi al-qabr. [Allāhumma ijʿalhu faraṭan wa dhukhran li-wālidayh, wa shafīʿan mujābā, Allāhumma thaqqil bihi mawāzīnahumā, wa aʿẓim bihi ujūrahumā, wal-ḥiqhu bi-ṣāliḥi al-muʾminīn, wa ijʿalhu fī kafālati Ibrāhīm, wa qihi bi-raḥmatika ʿadhāba al-jaḥīm, wa abdilhu dāran khayran min dārih, wa ahlan khayran min ahlih, Allāhumma ighfir li-aslāfinā, wa afrāṭinā, wa man sabaqanā bil-īmān].",
                        "explanationEs": "¡Oh Allah! Protégelo del castigo de la tumba. [¡Oh Allah! Hazlo un precursor y un tesoro para sus padres, y un intercesor cuya intercesión sea aceptada. ¡Oh Allah! Haz pesada con él la balanza de sus padres, engrandece con él sus recompensas, únelo a los creyentes piadosos, ponlo bajo el cuidado de Ibrahim y líbralo con Tu misericordia del castigo del Infierno. Concédele una morada mejor que su morada y una familia mejor que su familia. ¡Oh Allah! Perdona a nuestros antepasados, a nuestros niños fallecidos y a quienes nos precedieron en la fe].",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20190.mp3"
                        ]
                  },
                  {
                        "itemNumber": 191,
                        "subtitleAr": "الدُّعَاءُ لِلْفَرَطِ فِي الصَّلاَةِ عَلَيْهِ",
                        "subtitleEs": "Súplica en la oración fúnebre por un niño fallecido (Farat)",
                        "text": "اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطاً، وَسَلَفاً، وَأَجْراً.",
                        "latin": "Allāhumma ijʿalhu lanā faraṭan, wa salafan, wa ajran.",
                        "explanationEs": "¡Oh Allah! Hazlo para nosotros un precursor, un antecesor y una recompensa.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20191.mp3"
                        ]
                  },
                  {
                        "itemNumber": 192,
                        "subtitleAr": "دُعَاءُ التَّعْزِيَةِ",
                        "subtitleEs": "Súplica de pésame o condolencia",
                        "text": "إِنَّ لِلَّهِ مَا أَخَذَ، وَلَهُ مَا أَعْطَى، وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمًّى... فَلْتَصْبِرْ وَلْتَحْتَسِبْ. [أَعْظَمَ اللَّهُ أَجْرَكَ، وَأَحْسَنَ عَزَاءَكَ، وَغَفَرَ لِمَيِّتِكَ].",
                        "latin": "Inna lillāhi mā akhadha, wa lahu mā aʿṭā, wa kullu shayʾin ʿindahu bi-ajalin musammā... fal-taṣbir wal-taḥtasib. [Aʿẓama Allāhu ajrak, wa aḥsana ʿazāʾak, wa ghafara li-mayyitik].",
                        "explanationEs": "Ciertamente a Allah pertenece lo que toma y lo que da, y todo para Él tiene un plazo fijado... Ten paciencia y busca la recompensa divina. [Que Allah engrandezca tu recompensa, consolide tu consuelo y perdone a tu difunto].",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20192.mp3"
                        ]
                  },
                  {
                        "itemNumber": 193,
                        "subtitleAr": "الدُّعَاءُ عِنْدَ إِدْخَالِ المَيِّتِ القَبْرَ",
                        "subtitleEs": "Súplica al introducir al difunto en la tumba",
                        "text": "بِسْمِ اللَّهِ وَعَلَى سُنَّةِ رَسُولِ اللَّهِ.",
                        "latin": "Bismillāhi wa ʿalā sunnati rasūlillāh.",
                        "explanationEs": "En el nombre de Allah y siguiendo la Sunnah (tradición) del Mensajero de Allah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20193.mp3"
                        ]
                  },
                  {
                        "itemNumber": 194,
                        "subtitleAr": "الدُّعَاءُ بَعْدَ دَفْنِ المَيِّتِ",
                        "subtitleEs": "Súplica después de sepultar al difunto",
                        "text": "اللَّهُمَّ اغْفِرْ لَهُ، اللَّهُمَّ ثَبِّتْهُ.",
                        "latin": "Allāhumma ighfir lah, Allāhumma thabbith.",
                        "explanationEs": "¡Oh Allah! Perdónalo. ¡Oh Allah! Manténlo firme (ante las preguntas de los ángeles).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20194.mp3"
                        ]
                  },
                  {
                        "itemNumber": 195,
                        "subtitleAr": "دُعَاءُ زِيَارَةِ القُبُورِ",
                        "subtitleEs": "Súplica al visitar los cementerios",
                        "text": "السَّلاَمُ عَلَيْكُمْ أَهْلَ الدِّيَارِ، مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لاَحِقُونَ، [وَيَرْحَمُ اللَّهُ الْمُسْتَقْدِمِينَ مِنَّا وَالْمُسْتَأْخِرِينَ]، أَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ.",
                        "latin": "As-salāmu ʿalaykum ahla ad-diyār, minal-muʾminīna wal-muslimīn, wa innā in shāʾa Allāhu bikum lāḥiqūn, [wa yarḥamu Allāhu al-mustaqdimīna minnā wal-mustaʾkhirīn], asʾalu Allāha lanā wa lakumu al-ʿāfiyah.",
                        "explanationEs": "La paz sea con vosotros, habitantes de las moradas, de entre los creyentes y los musulmanes. Ciertamente nosotros, si Allah quiere, nos uniremos a vosotros. [Que Allah tenga misericordia de los primeros y de los últimos de entre nosotros]. Pido a Allah el bienestar para nosotros y para vosotros.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20195.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "rih_matar",
            "titleAr": "أَذْكَارُ الرِّيحِ وَالْمَطَرِ وَالْهِلَالِ",
            "titleEs": "Viento, lluvia y luna nueva",
            "items": [
                  {
                        "itemNumber": 196,
                        "subtitleAr": "دُعَاءُ الرِّيحِ",
                        "subtitleEs": "Súplica cuando sopla el viento",
                        "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا.",
                        "latin": "Allāhumma innī asʾaluka khayrahā, wa aʿūdhu bika min sharrihā.",
                        "explanationEs": "¡Oh Allah! Te pido su bien y me refugio en Ti de su mal.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20196.mp3"
                        ]
                  },
                  {
                        "itemNumber": 197,
                        "subtitleAr": "دُعَاءُ الرِّيحِ",
                        "subtitleEs": "Súplica cuando sopla el viento",
                        "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَخَيْرَ مَا فِيهَا، وَخَيْرَ مَا أُرْسِلَتْ بِهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ مَا فِيهَا، وَشَرِّ مَا أُرْسِلَتْ بِهِ.",
                        "latin": "Allāhumma innī asʾaluka khayrahā, wa khayra mā fīhā, wa khayra mā ursilat bih, wa aʿūdhu bika min sharrihā, wa sharri mā fīhā, wa sharri mā ursilat bih.",
                        "explanationEs": "¡Oh Allah! Te pido su bien, el bien de lo que hay en él y el bien con el que ha sido enviado; y me refugio en Ti de su mal, del mal de lo que hay en él y del mal con el que ha sido enviado.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20197.mp3"
                        ]
                  },
                  {
                        "itemNumber": 198,
                        "subtitleAr": "دُعَاءُ الرَّعْدِ",
                        "subtitleEs": "Súplica al escuchar el trueno",
                        "text": "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكَةُ مِنْ خِيفَتِهِ.",
                        "latin": "Subḥāna alladhī yusabbiḥu ar-raʿdu bi-ḥamdihi wal-malāʾikatu min khīfatih.",
                        "explanationEs": "Glorificado sea Aquel a Quien el trueno alaba con Sus elogios y los ángeles por el temor a Él.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20198.mp3"
                        ]
                  },
                  {
                        "itemNumber": 199,
                        "subtitleAr": "مِنْ أَدْعِيَةِ الاسْتِسْقَاءِ",
                        "subtitleEs": "Súplicas para pedir la lluvia (Istisqa')",
                        "text": "اللَّهُمَّ اسْقِنَا غَيْثاً مُغِيثاً مَرِيئاً مَرِيعاً، نَافِعاً غَيْرَ ضَارٍّ، عَاجِلاً غَيْرَ آجِلٍ.",
                        "latin": "Allāhumma isqinā ghaythan mughīthan marīʾan marīʿā, nāfiʿan ghayra ḍārr, ʿājilan ghayra ājil.",
                        "explanationEs": "¡Oh Allah! Envíanos una lluvia socorredora, provechosa, fértil, beneficiosa y no perjudicial, pronta y no demorada.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20199.mp3"
                        ]
                  },
                  {
                        "itemNumber": 200,
                        "subtitleAr": "مِنْ أَدْعِيَةِ الاسْتِسْقَاءِ",
                        "subtitleEs": "Súplicas para pedir la lluvia (Istisqa')",
                        "text": "اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا.",
                        "latin": "Allāhumma aghithnā, Allāhumma aghithnā, Allāhumma aghithnā.",
                        "explanationEs": "¡Oh Allah! Socórrenos con lluvia, ¡oh Allah! Socórrenos con lluvia, ¡oh Allah! Socórrenos con lluvia.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20200.mp3"
                        ]
                  },
                  {
                        "itemNumber": 201,
                        "subtitleAr": "مِنْ أَدْعِيَةِ الاسْتِسْقَاءِ",
                        "subtitleEs": "Súplicas para pedir la lluvia (Istisqa')",
                        "text": "اللَّهُمَّ اسْقِ عِبَادَكَ، وَبَهَائِمَكَ، وَانْشُرْ رَحْمَتَكَ، وَأَحْيِي بَلَدَكَ الْمَيِّتَ.",
                        "latin": "Allāhumma isqi ʿibādaka, wa bahāʾimaka, wan-shur raḥmataka, wa aḥyi baladaka al-mayyit.",
                        "explanationEs": "¡Oh Allah! Da de beber a Tus siervos y a Tus animales, extiende Tu misericordia y da vida a Tu tierra muerta.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20201.mp3"
                        ]
                  },
                  {
                        "itemNumber": 202,
                        "subtitleAr": "الدُّعَاءُ إِذَا نَزَلَ المَطَرُ",
                        "subtitleEs": "Súplica cuando comienza a llover",
                        "text": "اللَّهُمَّ صَيِّباً نَافِعاً.",
                        "latin": "Allāhumma ṣayyiban nāfiʿan.",
                        "explanationEs": "¡Oh Allah! Haz que sea una lluvia abundante y beneficiosa.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20202.mp3"
                        ]
                  },
                  {
                        "itemNumber": 203,
                        "subtitleAr": "الذِّكْرُ بَعْدَ نُزُولِ المَطَرِ",
                        "subtitleEs": "Súplica después de la lluvia",
                        "text": "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ.",
                        "latin": "Muṭirnā bi-faḍli Allāhi wa raḥmatih.",
                        "explanationEs": "Ha llovido sobre nosotros por la gracia de Allah y Su misericordia.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20203.mp3"
                        ]
                  },
                  {
                        "itemNumber": 204,
                        "subtitleAr": "مِنْ أَدْعِيَةِ الاسْتِصْحَاءِ",
                        "subtitleEs": "Súplica para detener el exceso de lluvia (Istishā')",
                        "text": "اللَّهُمَّ حَوَالَيْنَا وَلاَ عَلَيْنَا، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ، وَبُطُونِ الأَوْدِيَةِ، وَمَنَابِتِ الشَّجَرِ.",
                        "latin": "Allāhumma ḥawālaynā wa lā ʿalaynā, Allāhumma ʿalal-ākāmi waẓ-ẓirāb, wa buṭūni al-awdiyah, wa manābiti ash-shajar.",
                        "explanationEs": "¡Oh Allah! Que llueva a nuestro alrededor y no sobre nosotros; ¡oh Allah! Sobre las colinas, las montañas, los lechos de los valles y donde crecen los árboles.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20204.mp3"
                        ]
                  },
                  {
                        "itemNumber": 205,
                        "subtitleAr": "دُعَاءُ رُؤْيَةِ الهِلاَلِ",
                        "subtitleEs": "Súplica al avistar la luna creciente (Creciente lunar)",
                        "text": "اللَّهُ أَكْبَرُ، اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالأَمْنِ وَالإِيمَانِ، وَالسَّلاَمَةِ وَالإِسْلاَمِ، وَالتَّوْفِيقِ لِمَا تُحِبُّ رَبَّنَا وَتَرْضَى، رَبُّنَا وَرَبُّكَ اللَّهُ.",
                        "latin": "Allāhu akbar, Allāhumma ahillahu ʿalaynā bil-amni wal-īmān, was-salāmati wal-islām, wat-tawfīqi limā tuḥibbu rabbanā wa tarḍā, rabbunā wa rabbuka Allāh.",
                        "explanationEs": "Allah es el más Grande. ¡Oh Allah! Haz que este creciente surja sobre nosotros con seguridad y fe, paz e Islam, y con éxito en lo que Tú amas, Señor nuestro, y te complace. Nuestro Señor y tu Señor (¡oh luna!) es Allah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20205.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "taam_siyam",
            "titleAr": "أَذْكَارُ الطَّعَامِ وَالصِّيَامِ",
            "titleEs": "Comida y ayuno",
            "items": [
                  {
                        "itemNumber": 206,
                        "subtitleAr": "الدُّعَاءُ عِنْدَ إِفْطَارِ الصَّائِمِ",
                        "subtitleEs": "Súplica al romper el ayuno",
                        "text": "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ العُرُوقُ، وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ.",
                        "latin": "Dhahaba aẓ-ẓamaʾu wabtallati al-ʿurūq, wa thabata al-ajru in shāʾa Allāh.",
                        "explanationEs": "La sed se ha ido, las venas se han humedecido y la recompensa se ha confirmado, si Allah quiere.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20206.mp3"
                        ]
                  },
                  {
                        "itemNumber": 207,
                        "subtitleAr": "الدُّعَاءُ عِنْدَ إِفْطَارِ الصَّائِمِ",
                        "subtitleEs": "Súplica al romper el ayuno",
                        "text": "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي.",
                        "latin": "Allāhumma innī asʾaluka bi-raḥmatika allatī wasiʿat kulla shayʾin an taghfira lī.",
                        "explanationEs": "¡Oh Allah! Te pido por Tu misericordia, que abarca todas las cosas, que me perdones.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20207.mp3"
                        ]
                  },
                  {
                        "itemNumber": 208,
                        "subtitleAr": "الدُّعَاءُ قَبْلَ الطَّعَامِ",
                        "subtitleEs": "Súplica antes de comer",
                        "text": "إِذَا أَكَلَ أَحَدُكُمْ طَعَاماً فَلْيَقُلْ:\n\nبِسْمِ اللَّهِ،\n\nفَإِنْ نَسِيَ فِي أَوَّلِهِ فَلْيَقُلْ:\n\nبِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ.",
                        "latin": "Idhā akala aḥadukum ṭaʿāman fal-yaqul: Bismillāh, fa-in nasiya fī awwalihi fal-yaqul: Bismillāhi fī awwalihi wa ākhirih.",
                        "explanationEs": "Cuando uno de vosotros vaya a comer, que diga 'Bismillah' (En el nombre de Allah). Si lo olvida al principio, que diga 'Bismillahi fi awwalihi wa akhirih' (En el nombre de Allah al principio y al final).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20208.mp3"
                        ]
                  },
                  {
                        "itemNumber": 209,
                        "subtitleAr": "الدُّعَاءُ قَبْلَ الطَّعَامِ",
                        "subtitleEs": "Súplica antes de comer",
                        "text": "مَنْ أَطْعَمَهُ اللَّهُ الطَّعَامَ فَلْيَقُلْ:\n\nاللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْراً مِنْهُ،\n\nوَمَنْ سَقَاهُ اللَّهُ لَبَناً فَلْيَقُلْ:\n\nاللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ.",
                        "latin": "Man aṭʿamahu Allāhu aṭ-ṭaʿāma fal-yaqul: Allāhumma bārik lanā fīhi wa aṭʿimnā khayran minh. Wa man saqāhu Allāhu labanan fal-yaqul: Allāhumma bārik lanā fīhi wa zidnā minh.",
                        "explanationEs": "A quien Allah le proporcione comida, que diga: '¡Oh Allah! Bendícenosla y danos de comer algo mejor que ella'. Y a quien Allah le dé de beber leche, que diga: '¡Oh Allah! Bendícenosla y auméntanosla'.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20209.mp3"
                        ]
                  },
                  {
                        "itemNumber": 210,
                        "subtitleAr": "الدُّعَاءُ عِنْدَ الفَرَاغِ مِنَ الطَّعَامِ",
                        "subtitleEs": "Súplica al terminar de comer",
                        "text": "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ، مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ.",
                        "latin": "Al-ḥamdu lillāhi alladhī aṭʿamanī hādhā, wa razaqanīhi, min ghayri ḥawlin minnī wa lā quwwah.",
                        "explanationEs": "Alabado sea Allah, Quien me ha alimentado con esto y me lo ha concedido sin que de mi parte haya habido fuerza ni poder.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20210.mp3"
                        ]
                  },
                  {
                        "itemNumber": 211,
                        "subtitleAr": "الدُّعَاءُ عِنْدَ الفَرَاغِ مِنَ الطَّعَامِ",
                        "subtitleEs": "Súplica al terminar de comer",
                        "text": "الْحَمْدُ لِلَّهِ حَمْداً كَثِيراً طَيِّباً مُبَارَكاً فِيهِ، غَيْرَ مَكْفِيٍّ وَلاَ مُوَدَّعٍ، وَلاَ مُسْتَغْنَىً عَنْهُ رَبَّنَا.",
                        "latin": "Al-ḥamdu lillāhi ḥamdan kathīran ṭayyiban mubārakan fīh, ghayra makfiyyin wa lā muwaddaʿin, wa lā mustaghnan ʿanhu rabbanā.",
                        "explanationEs": "Alabado sea Allah con alabanzas abundantes, puras y benditas; una alabanza continua, jamás suficiente, incesante e indispensable, ¡oh Señor nuestro!",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20211.mp3"
                        ]
                  },
                  {
                        "itemNumber": 212,
                        "subtitleAr": "دُعَاءُ الضَّيْفِ لِصَاحِبِ الطَّعَامِ",
                        "subtitleEs": "Súplica del invitado para el anfitrión que ofrece la comida",
                        "text": "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ، وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ.",
                        "latin": "Allāhumma bārik lahum fīmā razaqtahum, waghfir lahum warḥamhum.",
                        "explanationEs": "¡Oh Allah! Bendíceles el sustento que les has concedido, perdónales y ten misericordia de ellos.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20212.mp3"
                        ]
                  },
                  {
                        "itemNumber": 213,
                        "subtitleAr": "التَّعْرِيضُ بِالدُّعَاءِ لِطَلَبِ الطَّعَامِ أَوْ الشَّرَابِ",
                        "subtitleEs": "Súplica para quien da de comer o de beber",
                        "text": "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي، وَاسْقِ مَنْ سَقَانِي.",
                        "latin": "Allāhumma aṭʿim man aṭʿamanī, wasqi man saqānī.",
                        "explanationEs": "¡Oh Allah! Alimenta a quien me alimentó y da de beber a quien me dio de beber.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20213.mp3"
                        ]
                  },
                  {
                        "itemNumber": 214,
                        "subtitleAr": "الدُّعَاءُ إِذَا أَفْطَرَ عِنْدَ أَهْلِ بَيْتٍ",
                        "subtitleEs": "Súplica al romper el ayuno en casa de alguien",
                        "text": "أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ المَلاَئِكَةُ.",
                        "latin": "Afṭara ʿindakumu aṣ-ṣāʾimūn, wa akala ṭaʿāmakumu al-abrār, wa ṣallat ʿalaykumu al-malāʾikah.",
                        "explanationEs": "Que rompan el ayuno en vuestra casa los ayunantes, coman de vuestra comida los piadosos y roguen por vosotros los ángeles.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20214.mp3"
                        ]
                  },
                  {
                        "itemNumber": 215,
                        "subtitleAr": "دُعَاءُ الصَّائِمِ إِذَا حَضَرَ الطَّعَامُ وَلَمْ يُفْطِرْ",
                        "subtitleEs": "Qué debe hacer el ayunante si le invitan a comer y no rompe su ayuno",
                        "text": "إِذَا دُعِيَ أَحَدُكُمْ فَلْيُجِبْ، فَإِنْ كَانَ صَائِماً فَلْيُصَلِّ، وَإِنْ كَانَ مُفْطِراً فَلْيَطْعَمْ (وَمَعْنَى فَلْيُصَلِّ أَيْ فَلْيَدْعُ).",
                        "latin": "Idhā duʿiya aḥadukum fal-yujib, fa-in kāna ṣāʾiman fal-yuṣalli, wa in kāna mufṭiran fal-yaṭʿam (wa maʿnā fal-yuṣalli ay fal-yadʿu).",
                        "explanationEs": "Si uno de vosotros es invitado a comer, que acepte. Si está ayunando, que suplique por los anfitriones; y si no está ayunando, que coma.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20215.mp3"
                        ]
                  },
                  {
                        "itemNumber": 216,
                        "subtitleAr": "مَا يَقُولُ الصَّائِمُ إِذَا سَابَّهُ أَحَدٌ",
                        "subtitleEs": "Lo que dice el ayunante si alguien lo insulta o provoca",
                        "text": "إِنِّي صَائِمٌ، إِنِّي صَائِمٌ.",
                        "latin": "Innī ṣāʾim, innī ṣāʾim.",
                        "explanationEs": "Estoy ayunando, estoy ayunando.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20216.mp3"
                        ]
                  },
                  {
                        "itemNumber": 217,
                        "subtitleAr": "الدُّعَاءُ عِنْدَ رُؤْيَةِ بَاكُورَةِ الثَّمَرِ",
                        "subtitleEs": "Súplica al ver los primeros frutos de la temporada",
                        "text": "اللَّهُمَّ بَارِكْ لَنَا فِي ثَمَرِنَا، وَبَارِكْ لَنَا فِي مَدِينَتِنَا، وَبَارِكْ لَنَا فِي صَاعِنَا، وَبَارِكْ لَنَا فِي مُدِّنَا.",
                        "latin": "Allāhumma bārik lanā fī thamarinā, wa bārik lanā fī madīnatinā, wa bārik lanā fī ṣāʿinā, wa bārik lanā fī muddinā.",
                        "explanationEs": "¡Oh Allah! Bendícenos en nuestros frutos, bendícenos en nuestra ciudad, bendícenos en nuestros recipientes de medida (Sa' y Mudd).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20217.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "utas",
            "titleAr": "أَذْكَارُ الْعُطَاسِ",
            "titleEs": "El estornudo",
            "items": [
                  {
                        "itemNumber": 218,
                        "subtitleAr": "دُعَاءُ العَطَاسِ",
                        "subtitleEs": "Etiqueta y súplica al estornudar",
                        "text": "إِذَا عَطَسَ أَحَدُكُمْ فَلْيَقُلْ:\n\nالْحَمْدُ لِلَّهِ،\n\nوَلْيَقُلْ لَهُ أَخُوهُ أَوْ صَاحِبُهُ:\n\nيَرْحَمُكَ اللَّهُ،\n\nفَإِذَا قَالَ لَهُ: يَرْحَمُكَ اللَّهُ، فَلْيَقُلْ:\n\nيَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ.",
                        "latin": "Idhā ʿaṭaṣa aḥadukum fal-yaqul: Al-ḥamdu lillāh, wa l-yaqul lahu akhūhu aw ṣāḥibuh: Yarḥamuka Allāh, fa-idhā qāla lah: Yarḥamuka Allāh, fal-yaqul: Yahdīkumu Allāhu wa yuṣliḥu bālakum.",
                        "explanationEs": "Cuando alguno de vosotros estornude, que diga 'Alabado sea Allah'. Su hermano o compañero debe responderle 'Que Allah tenga misericordia de ti'. Y cuando le responda esto, el que estornudó debe decir 'Que Allah os guíe y mejore vuestra situación'.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20218.mp3"
                        ]
                  },
                  {
                        "itemNumber": 219,
                        "subtitleAr": "مَا يُقَالُ لِلْكَافِرِ إِذَا عَطَسَ فَحَمِدَ اللَّهَ",
                        "subtitleEs": "Lo que se responde a un no musulmán cuando estornuda y alaba a Allah",
                        "text": "يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ.",
                        "latin": "Yahdīkumu Allāhu wa yuṣliḥu bālakum.",
                        "explanationEs": "Que Allah os guíe y mejore vuestra situación.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20219.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "zawaj",
            "titleAr": "أَذْكَارُ الزَّوَاجِ",
            "titleEs": "El matrimonio",
            "items": [
                  {
                        "itemNumber": 220,
                        "subtitleAr": "الدُّعَاءُ لِلْمُتَزَوِّجِ",
                        "subtitleEs": "Súplica de felicitación al recién casado",
                        "text": "بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ.",
                        "latin": "Bāraka Allāhu laka, wa bāraka ʿalayka, wa jamaʿa baynakumā fī khayr.",
                        "explanationEs": "Que Allah te bendiga, derrame Su bendición sobre ti y os una a ambos en el bien.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20220.mp3"
                        ]
                  },
                  {
                        "itemNumber": 221,
                        "subtitleAr": "دُعَاءُ المُتَزَوِّجِ وَشِرَاءِ الدَّابَّةِ",
                        "subtitleEs": "Súplica del recién casado o al adquirir una montura/vehículo",
                        "text": "إِذَا تَزَوَّجَ أَحَدُكُمُ امْرَأَةً، أَوْ إِذَا اشْتَرَى خَادِماً فَلْيَقُلْ:\n\nاللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ.\n\nوَإِذَا اشْتَرَى بَعِيراً فَلْيَأْخُذْ بِذِرْوَةِ سَنَامِهِ وَلْيَقُلْ مِثْلَ ذَلِكَ.",
                        "latin": "Idhā tazawwaja aḥadukumu imraʾatan, aw idhā ishtarā khādiman fal-yaqul: Allāhumma innī asʾaluka khayrahā, wa khayra mā jabaltahā ʿalayh, wa aʿūdhu bika min sharrihā, wa sharri mā jabaltahā ʿalayh. Wa idhā ishtarā baʿīran fal-yaʾkhudh bi-dhirwati sanāmihi wa l-yaqul mithla dhālik.",
                        "explanationEs": "Cuando alguno de vosotros se case con una mujer o compre un sirviente, que diga: '¡Oh Allah! Te pido de su bien y del bien de la naturaleza con que la creaste, y me refugio en Ti de su mal y del mal de la naturaleza con que la creaste'. Y si compra un camello (o vehículo), que tome la parte superior de su joroba y diga lo mismo.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20221.mp3"
                        ]
                  },
                  {
                        "itemNumber": 222,
                        "subtitleAr": "الدُّعَاءُ قَبْلَ إِتْيَانِ الزَّوْجَةِ",
                        "subtitleEs": "Súplica antes de la intimidad con la esposa",
                        "text": "بِسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ، وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا.",
                        "latin": "Bismillāh, Allāhumma jannibnā ash-shayṭān, wa jannibi ash-shayṭāna mā razaqtanā.",
                        "explanationEs": "En el nombre de Allah. ¡Oh Allah! Aleja de nosotros a Shaitán y aleja a Shaitán de la descendencia que nos concedas.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20222.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "muamala",
            "titleAr": "أَذْكَارُ الْمُعَامَلَةِ وَالْمَجَالِسِ",
            "titleEs": "Trato con la gente y reuniones",
            "items": [
                  {
                        "itemNumber": 223,
                        "subtitleAr": "دُعَاءُ الغَضَبِ",
                        "subtitleEs": "Súplica cuando se siente ira o enojo",
                        "text": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ.",
                        "latin": "Aʿūdhu billāhi minash-shayṭāni ar-rajīm.",
                        "explanationEs": "Me refugio en Allah de Shaitán el maldito.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20223.mp3"
                        ]
                  },
                  {
                        "itemNumber": 224,
                        "subtitleAr": "دُعَاءُ مَنْ رَأَى مُبْتَلًى",
                        "subtitleEs": "Súplica al ver a una persona afligida o con alguna prueba",
                        "text": "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلاَكَ بِهِ، وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلاً.",
                        "latin": "Al-ḥamdu lillāhi alladhī ʿāfānī mimmā ibtalāka bih, wa faḍḍalanī ʿalā kathīrin mimman khalaqa tafḍīlā.",
                        "explanationEs": "Alabado sea Allah, Quien me ha librado de la prueba con la que te ha probado a ti, y me ha favorecido notablemente por encima de gran parte de Su creación.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20224.mp3"
                        ]
                  },
                  {
                        "itemNumber": 225,
                        "subtitleAr": "مَا يُقَالُ فِي المَجْلِسِ",
                        "subtitleEs": "Lo que se dice durante una reunión o asamblea",
                        "text": "رَبِّ اغْفِرْ لِي، وَتُبْ عَلَيَّ، إِنَّكَ أَنْتَ التَّوَّابُ الْغَفُورُ.",
                        "latin": "Rabbi ighfir lī, wa tub ʿalayya, innaka anta at-tawwābu al-ghafūr.",
                        "explanationEs": "Se contaba que el Mensajero de Allah decía cien veces en una misma reunión antes de levantarse: 'Señor mío perdóname y acepta mi arrepentimiento, ciertamente Tú eres el Indulgente, el Absolvedor'.",
                        "count": 100,
                        "maxCount": 100,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20225.mp3"
                        ]
                  },
                  {
                        "itemNumber": 226,
                        "subtitleAr": "كَفَّارَةُ المَجْلِسِ",
                        "subtitleEs": "Súplica de expiación al concluir una reunión",
                        "text": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ.",
                        "latin": "Subḥānaka Allāhumma wa bi-ḥamdika, ashhadu an lā ilāha illā anta, astaghfiruka wa atūbu ilayk.",
                        "explanationEs": "Glorificado seas, ¡oh Allah!, y alabado seas. Atestiguo que no hay más divinidad excepto Tú, pido Tu perdón y me arrepiento ante Ti.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2081.mp3"
                        ]
                  },
                  {
                        "itemNumber": 227,
                        "subtitleAr": "الدُّعَاءُ لِمَنْ قَالَ: غَفَرَ اللَّهُ لَكَ",
                        "subtitleEs": "Súplica para quien te dice 'Que Allah te perdone'",
                        "text": "وَلَكَ.",
                        "latin": "Wa lak.",
                        "explanationEs": "Y a ti también.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20227.mp3"
                        ]
                  },
                  {
                        "itemNumber": 228,
                        "subtitleAr": "الدُّعَاءُ لِمَنْ صَنَعَ إِلَيْكَ مَعْرُوفاً",
                        "subtitleEs": "Súplica para quien te hace un favor o buena acción",
                        "text": "جَزَاكَ اللَّهُ خَيْراً.",
                        "latin": "Jazāka Allāhu khayran.",
                        "explanationEs": "Que Allah te recompense con el bien.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20228.mp3"
                        ]
                  },
                  {
                        "itemNumber": 229,
                        "subtitleAr": "الدُّعَاءُ لِمَنْ قَالَ: إِنِّي أُحِبُّكَ فِي اللَّهِ",
                        "subtitleEs": "Súplica para quien te dice 'Te amo por la causa de Allah'",
                        "text": "أَحَبَّكَ الَّذِي أَحْبَبْتَنِي لَهُ.",
                        "latin": "Aḥabbaka alladhī aḥbabtanī lah.",
                        "explanationEs": "Que te ame Aquel por Quien me has amado.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20229.mp3"
                        ]
                  },
                  {
                        "itemNumber": 230,
                        "subtitleAr": "الدُّعَاءُ لِمَنْ عَرَضَ عَلَيْكَ مَالَهُ",
                        "subtitleEs": "Súplica para quien te ofrece compartir su dinero",
                        "text": "بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ.",
                        "latin": "Bāraka Allāhu laka fī ahlika wa mālik.",
                        "explanationEs": "Que Allah bendiga para ti a tu familia y tus bienes.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20230.mp3"
                        ]
                  },
                  {
                        "itemNumber": 231,
                        "subtitleAr": "الدُّعَاءُ لِمَنْ أَقْرَضَ عِنْدَ القَضَاءِ",
                        "subtitleEs": "Súplica para el prestamista al saldar la deuda",
                        "text": "بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ، إِنَّمَا جَزَاءُ السَّلَفِ الْحَمْدُ وَالأَدَاءُ.",
                        "latin": "Bāraka Allāhu laka fī ahlika wa mālik, innamā jazāʾu as-salafi al-ḥamdu wal-adāʾ.",
                        "explanationEs": "Que Allah bendiga para ti a tu familia y tus bienes. La verdadera recompensa por un préstamo es el agradecimiento y la devolución puntual.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20231.mp3"
                        ]
                  },
                  {
                        "itemNumber": 232,
                        "subtitleAr": "الدُّعَاءُ لِمَنْ قَالَ: بَارَكَ اللَّهُ فِيكَ",
                        "subtitleEs": "Súplica para quien te dice 'Que Allah te bendiga'",
                        "text": "وَفِيكَ بَارَكَ اللَّهُ.",
                        "latin": "Wa fīka bāraka Allāh.",
                        "explanationEs": "Y que Allah te bendiga a ti también.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20232.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "himayat_din",
            "titleAr": "حِفْظُ الدِّينِ مِنَ الْفِتَنِ",
            "titleEs": "Protección de la fe",
            "items": [
                  {
                        "itemNumber": 233,
                        "subtitleAr": "مَا يَعْصِمُ اللَّهُ بِهِ مِنَ الدَّجَّالِ",
                        "subtitleEs": "Protección contra la prueba del Falso Mesías (Anticristo)",
                        "text": "مَنْ حَفِظَ عَشْرَ آيَاتٍ مِنْ أَوَّلِ سُورَةِ الْكَهْفِ عُصِمَ مِنَ الدَّجَّالِ، وَالاسْتِعَاذَةُ بِاللَّهِ مِنْ فِتْنَتِهِ عَقِبَ التَّشَهُّدِ الأَخِيرِ مِنْ كُلِّ صَلاَةٍ.",
                        "latin": "Man ḥafiẓa ʿashra āyātin min awwali sūrati al-kahfi ʿuṣima minad-dajjāl, wal-istiʿādhatu billāhi min fitnatihi ʿaqiba at-tashahhudi al-ākhiri min kulli ṣalāh.",
                        "explanationEs": "Quien memorice los primeros diez versículos de la sura Al-Kahf estará protegido del Falso Mesías, así como quien busque refugio en Allah de su prueba tras el último Tashahhud en cada oración.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20233.mp3"
                        ]
                  },
                  {
                        "itemNumber": 234,
                        "subtitleAr": "دُعَاءُ الخَوْفِ مِنَ الشِّرْكِ",
                        "subtitleEs": "Súplica para prevenir el Shirk (asociar socios a Allah)",
                        "text": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لاَ أَعْلَمُ.",
                        "latin": "Allāhumma innī aʿūdhu bika an ushrika bika wa anā aʿlam, wa astaghfiruka limā lā aʿlam.",
                        "explanationEs": "¡Oh Allah! Me refugio en Ti de asociarte algo a sabiendas, y Te pido perdón por lo que desconozco.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20234.mp3"
                        ]
                  },
                  {
                        "itemNumber": 235,
                        "subtitleAr": "دُعَاءُ كَرَاهِيَةِ الطِّيَرَةِ",
                        "subtitleEs": "Súplica contra la superstición o el mal augurio (Tiyarah)",
                        "text": "اللَّهُمَّ لاَ طَيْرَ إِلاَّ طَيْرُكَ، وَلاَ خَيْرَ إِلاَّ خَيْرُكَ، وَلاَ إِلَهَ غَيْرُكَ.",
                        "latin": "Allāhumma lā ṭayra illā ṭayruk, wa lā khayra illā khayruk, wa lā ilāha ghayruk.",
                        "explanationEs": "¡Oh Allah! No hay augurio sino Tu decreto, no hay bien sino Tu bien, y no hay más divinidad aparte de Ti.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20235.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "safar_all",
            "titleAr": "أَذْكَارُ السَّفَرِ",
            "titleEs": "El viaje",
            "items": [
                  {
                        "itemNumber": 236,
                        "subtitleAr": "دُعَاءُ الرُّكُوبِ",
                        "subtitleEs": "Súplica al montar un medio de transporte",
                        "text": "بِسْمِ اللَّهِ، وَالْحَمْدُ لِلَّهِ ﴿سُبۡحَٰنَ ٱلَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُۥ مُقۡرِنِينَ۝ وَإِنَّآ إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ۝﴾، الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَكَ اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي؛ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.",
                        "latin": "Bismillāh, wal-ḥamdu lillāh Subḥāna alladhī sakhkhara lanā hādhā wa mā kunnā lahu muqrinīn, wa innā ilā rabbinā la-munqalibūn, Al-ḥamdu lillāh, Al-ḥamdu lillāh, Al-ḥamdu lillāh, Allāhu akbar, Allāhu akbar, Allāhu akbar, Subḥānaka Allāhumma innī ẓalamtu nafsī faghfir lī; fa-innahu lā yaghfiru adhdhunūba illā ant.",
                        "explanationEs": "En el nombre de Allah, y alabado sea Allah. «Glorificado sea Quien nos lo ha facilitado, ya que nosotros no habríamos sido capaces [por nuestro mero esfuerzo], y ante nuestro Señor hemos de regresar». Alabado sea Allah (x3), Allah es el más Grande (x3). Glorificado seas, ¡oh Allah! Ciertamente me he oprimido a mí mismo, perdóname pues nadie perdona los pecados excepto Tú.",
                        "count": 1,
                        "maxCount": 1,
                        "note": "سورة الزخرف الآيات 13-14",
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20236.mp3"
                        ]
                  },
                  {
                        "itemNumber": 237,
                        "subtitleAr": "دُعَاءُ السَّفَرِ",
                        "subtitleEs": "Súplica de viaje",
                        "text": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، ﴿سُبۡحَٰنَ ٱلَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُۥ مُقۡرِنِينَ۝ وَإِنَّآ إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ۝﴾. اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا البِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ المَنْظَرِ، وَسُوءِ المُنْقَلَبِ فِي المَالِ وَالأَهْلِ. (وَإِذَا رَجَعَ قَالَهُنَّ وَزَادَ فِيهِنَّ: آيِبُونَ، تَائِبُونَ، عَابِدُونَ، لِرَبِّنَا حَامِدُونَ).",
                        "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbar, Subḥāna alladhī sakhkhara lanā hādhā wa mā kunnā lahu muqrinīn, wa innā ilā rabbinā la-munqalibūn. Allāhumma innā nasʾaluka fī safarinā hādhā al-birra wat-taqwā, wa minal-ʿamali mā tarḍā, Allāhumma hawwin ʿalaynā safaranā hādhā waṭwi ʿannā buʿdah, Allāhumma anta aṣ-ṣāḥibu fis-safar, wal-khalīfatu fil-ahl, Allāhumma innī aʿūdhu bika min waʿthāʾi as-safar, wa kaʾābati al-manẓar, wa sūʾi al-munqalabi fil-māli wal-ahl. (Wa idhā rajaʿa qālahunna wa zāda fīhinna: Āyibūna, tāʾibūna, ʿābidūna, li-rabbinā ḥāmidūn).",
                        "explanationEs": "Allah es el Más Grande (tres veces). «Glorificado sea Quien nos lo ha facilitado, ya que nosotros no habríamos sido capaces [por nuestro mero esfuerzo], y ante nuestro Señor hemos de regresar». ¡Oh Allah! Te pedimos en este viaje la piedad, el temor de Ti y las obras que Te complacen. ¡Oh Allah! Haznos fácil este viaje y acorta su distancia. ¡Oh Allah! Tú eres el Compañero en el viaje y el Protector de la familia. ¡Oh Allah! Me refugio en Ti de las dificultades del viaje, de la tristeza de las vistas y de un mal regreso en mis bienes y mi familia. Al regresar, repite lo mismo y añade: «Regresamos arrepentidos, adorando y alabando a nuestro Señor».",
                        "count": 1,
                        "maxCount": 1,
                        "note": "سورة الزخرف الآيات 13-14",
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20237.mp3"
                        ]
                  },
                  {
                        "itemNumber": 238,
                        "subtitleAr": "دُعَاءُ دُخُولِ القَرْيَةِ أَوْ البَلْدَةِ",
                        "subtitleEs": "Súplica al entrar a un pueblo o ciudad",
                        "text": "اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَمَا أَظْلَلْنَ، وَرَبَّ الأَرَضِينَ السَّبْعِ وَمَا أَقْلَلْنَ، وَرَبَّ الشَّيَاطِينِ وَمَا أَضْلَلْنَ، وَرَبَّ الرِّيَاحِ وَمَا ذَرَيْنَ، أَسْأَلُكَ خَيْرَ هَذِهِ الْقَرْيَةِ، وَخَيْرَ أَهْلِهَا، وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ أَهْلِهَا، وَشَرِّ مَا فِيهَا.",
                        "latin": "Allāhumma rabba as-samāwāti as-sabʿi wa mā aẓlaln, wa rabba al-araḍīna as-sabʿi wa mā aqlaln, wa rabba ash-shayāṭīni wa mā aḍlaln, wa rabba ar-riyāḥi wa mā dharayn, asʾaluka khayra hādhihi al-qaryah, wa khayra ahlihā, wa khayra mā fīhā, wa aʿūdhu bika min sharrihā, wa sharri ahlihā, wa sharri mā fīhā.",
                        "explanationEs": "¡Oh Allah! Señor de los siete cielos y de lo que cubren, Señor de las siete tierras y de lo que sostienen, Señor de los demonios y de a quienes extravían, Señor de los vientos y de lo que dispersan. Te pido el bien de este pueblo, el bien de sus habitantes y el bien de lo que hay en él; y me refugio en Ti de su mal, del mal de sus habitantes y del mal de lo que hay en él.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20238.mp3"
                        ]
                  },
                  {
                        "itemNumber": 239,
                        "subtitleAr": "دُعَاءُ دُخُولِ السُّوقِ",
                        "subtitleEs": "Súplica al entrar al mercado",
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لاَ يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
                        "latin": "Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku, wa lahu al-ḥamd, yuḥyī wa yumīt, wa huwa ḥayyun lā yamūt, bi-yadihi al-khayr, wa huwa ʿalā kulli shayʾin qadīr.",
                        "explanationEs": "No hay más divinidad que Allah, Único, sin asociados. Suyo es el reino y Suya es la alabanza, da la vida y da la muerte, y Él es Inmortal. En Su mano está el bien y Él es Omnipotente sobre todas las cosas.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20239.mp3"
                        ]
                  },
                  {
                        "itemNumber": 240,
                        "subtitleAr": "الدُّعَاءُ إِذَا تَعِسَ المَرْكُوبُ",
                        "subtitleEs": "Súplica si tropieza la montura o el vehículo sufre un percance",
                        "text": "بِسْمِ اللَّهِ.",
                        "latin": "Bismillāh.",
                        "explanationEs": "En el nombre de Allah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2075.mp3"
                        ]
                  },
                  {
                        "itemNumber": 241,
                        "subtitleAr": "دُعَاءُ المُسَافِرِ لِلْمُقِيمِ",
                        "subtitleEs": "Súplica del viajero para el residente al despedirse",
                        "text": "أَسْتَوْدِعُكُمُ اللَّهَ الَّذِي لاَ تَضِيعُ وَدَائِعُهُ.",
                        "latin": "Astawdiʿukumu Allāha alladhī lā taḍīʿu wadāʾiʿuh.",
                        "explanationEs": "Os encomiendo a Allah, Aquel ante Quien los depósitos encomendados nunca se pierden.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20241.mp3"
                        ]
                  },
                  {
                        "itemNumber": 242,
                        "subtitleAr": "دُعَاءُ المُقِيمِ لِلْمُسَافِرِ",
                        "subtitleEs": "Súplica del residente para el viajero",
                        "text": "أَسْتَوْدِعُ اللَّهَ دِينَكَ، وَأَمَانَتَكَ، وَخَوَاتِيمَ عَمَلِكَ.",
                        "latin": "Astawdiʿu Allāha dīnaka, wa amānataka, wa khawātīma ʿamalik.",
                        "explanationEs": "Encomiendo a Allah tu religión, tu fidelidad y las últimas de tus obras.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20242.mp3"
                        ]
                  },
                  {
                        "itemNumber": 243,
                        "subtitleAr": "دُعَاءُ المُقِيمِ لِلْمُسَافِرِ",
                        "subtitleEs": "Súplica del residente para el viajero",
                        "text": "زَوَّدَكَ اللَّهُ التَّقْوَى، وَغَفَرَ ذَنْبَكَ، وَيَسَّرَ لَكَ الخَيْرَ حَيْثُ مَا كُنْتَ.",
                        "latin": "Zawwadaka Allāhu at-taqwā, wa ghafara dhanbaka, wa yassara laka al-khayra ḥaythu mā kunt.",
                        "explanationEs": "Que Allah te provea de piedad, perdone tu pecado y te facilite el bien dondequiera que estés.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20243.mp3"
                        ]
                  },
                  {
                        "itemNumber": 244,
                        "subtitleAr": "التَّكْبِيرُ وَالتَّسْبِيحُ فِي سَيْرِ السَّفَرِ",
                        "subtitleEs": "Proclamar la grandeza de Allah y glorificarlo durante el viaje",
                        "text": "قَالَ جَابِرٌ رَضِيَ اللَّهُ عَنْهُ: كُنَّا إِذَا صَعَدْنَا كَبَّرْنَا، وَإِذَا نَزَلْنَا سَبَّحْنَا.",
                        "latin": "Qāla Jābirun raḍiya Allāhu ʿanh: Kunnā idhā ṣaʿidnā kabbarnā, wa idhā nazalnā sabbaḥnā.",
                        "explanationEs": "Dijo Jabir (que Allah esté complacido con él): Cuando subíamos (una cuesta o montaña) decíamos 'Allahu Akbar' (Allah es el más Grande), y cuando bajábamos decíamos 'Subhanallah' (Glorificado sea Allah).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20244.mp3"
                        ]
                  },
                  {
                        "itemNumber": 245,
                        "subtitleAr": "دُعَاءُ المُسَافِرِ إِذَا أَسْحَرَ",
                        "subtitleEs": "Súplica del viajero al amanecer (al rayar el alba)",
                        "text": "سَمَّعَ سَامِعٌ بِحَمْدِ اللَّهِ، وَحُسْنِ بَلاَئِهِ عَلَيْنَا، رَبَّنَا صَاحِبْنَا، وَأَفْضِلْ عَلَيْنَا، عَائِذاً بِاللَّهِ مِنَ النَّارِ.",
                        "latin": "Sammaʿa sāmiʿun bi-ḥamdi Allāhi, wa ḥusni balāʾihi ʿalaynā, rabbanā ṣāḥibnā, wa afḍil ʿalaynā, ʿāʾidhan billāhi minan-nār.",
                        "explanationEs": "Que un testigo atestigüe nuestra alabanza a Allah y Sus buenas pruebas sobre nosotros. Señor nuestro, acompáñanos y agrácianos con Tu favor; nos refugiamos en Allah del Fuego.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20245.mp3"
                        ]
                  },
                  {
                        "itemNumber": 246,
                        "subtitleAr": "الدُّعَاءُ إِذَا نَزَلَ مَنْزِلاً فِي سَفَرٍ أَوْ غَيْرِهِ",
                        "subtitleEs": "Súplica al hacer una parada o alojarse en un lugar",
                        "text": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
                        "latin": "Aʿūdhu bi-kalimāti Allāhi at-tāmmāti min sharri mā khalaq.",
                        "explanationEs": "Me refugio en las palabras perfectas de Allah del mal de lo que ha creado.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%2020.mp3"
                        ]
                  },
                  {
                        "itemNumber": 247,
                        "subtitleAr": "ذِكْرُ الرُّجُوعِ مِنَ السَّفَرِ",
                        "subtitleEs": "Súplica al regresar de un viaje",
                        "text": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، آيِبُونَ، تَائِبُونَ، عَابِدُونَ، لِرَبِّنَا حَامِدُونَ، صَدَقَ اللَّهُ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الأَحْزَابَ وَحْدَهُ.",
                        "latin": "Allāhu akbar, Allāhu akbar, Allāhu akbar, lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku, wa lahu al-ḥamd, wa huwa ʿalā kulli shayʾin qadīr, āyibūna, tāʾibūna, ʿābidūna, li-rabbinā ḥāmidūn, ṣadaqa Allāhu waʿdah, wa naṣara ʿabdah, wa hazama al-aḥzāba waḥdah.",
                        "explanationEs": "Allah es el más Grande (x3). No hay más divinidad que Allah, Único, sin asociados. Suyo es el reino y Suya es la alabanza, y Él es Omnipotente sobre todas las cosas. Regresamos arrepentidos, adorando y alabando a nuestro Señor. Allah ha cumplido Su promesa, ha socorrido a Su siervo y ha derrotado Él solo a las facciones enemigas.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20247.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "amr_yasurruhu_aw_yakrahuh",
            "titleAr": "مَا يَقُولُ مَنْ أَتَاهُ أَمْرٌ يَسُرُّهُ أَوْ يَكْرَهُهُ",
            "titleEs": "Lo que se dice ante un acontecimiento agradable o desagradable",
            "items": [
                  {
                        "itemNumber": 248,
                        "text": "كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا أَتَاهُ الأَمْرُ يَسُرُّهُ قَالَ:\n\nالْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ،\n\nوَإِذَا أَتَاهُ الأَمْرُ يَكْرَهُهُ قَالَ:\n\nالْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ.",
                        "latin": "Kāna an-nabiyyu ṣallā Allāhu ʿalayhi wa sallama idhā atāhu al-amru yasurruhu qāl: Al-ḥamdu lillāhi alladhī bi-niʿmatihi tatimmu aṣ-ṣāliḥāt, wa idhā atāhu al-amru yakrahuhu qāl: Al-ḥamdu lillāhi ʿalā kulli ḥāl.",
                        "explanationEs": "Cuando al Profeta (paz y bendiciones de Allah sean con él) le llegaba algo alegre, decía: 'Alabado sea Allah, con Cuyo favor se completan las buenas obras'. Y cuando le acontecía algo indeseado, decía: 'Alabado sea Allah en toda circunstancia'.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20248.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "fadl_salah_ala_nabi",
            "titleAr": "فَضْلُ الصَّلاَةِ عَلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
            "titleEs": "Virtud de pedir bendiciones por el Profeta",
            "items": [
                  {
                        "itemNumber": 249,
                        "text": "قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَنْ صَلَّى عَلَيَّ صَلاَةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْراً.",
                        "latin": "Qāla an-nabiyyu ṣallā Allāhu ʿalayhi wa sallam: Man ṣallā ʿalayya ṣalātan ṣallā Allāhu ʿalayhi bihā ʿashrā.",
                        "explanationEs": "Dijo el Profeta (paz y bendiciones sean con él): Quien pida para mí una bendición, Allah lo bendecirá diez veces por ella.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20249.mp3"
                        ]
                  },
                  {
                        "itemNumber": 250,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: لاَ تَجْعَلُوا قَبْرِي عِيداً وَصَلُّوا عَلَيَّ؛ فَإِنَّ صَلاَتَكُمْ تَبْلُغُنِي حَيْثُ كُنْتُمْ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Lā tajʿalū qabrī ʿīdā, wa ṣallū ʿalayya; fa-inna ṣalātakum tablughunī ḥaythu kuntum.",
                        "explanationEs": "Y dijo: No hagáis de mi tumba un lugar de festividad recurrente, y pedid bendiciones por mí; pues vuestra oración me llega dondequiera que estéis.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20250.mp3"
                        ]
                  },
                  {
                        "itemNumber": 251,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: الْبَخِيلُ مَنْ ذُكِرْتُ عِنْدَهُ فَلَمْ يُصَلِّ عَلَيَّ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Al-bakhīlu man dhukirtu ʿindahu falam yuṣalli ʿalayy.",
                        "explanationEs": "Y dijo: El tacaño es aquel ante quien soy mencionado y no pide bendiciones por mí.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20251.mp3"
                        ]
                  },
                  {
                        "itemNumber": 252,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ لِلَّهِ مَلاَئِكَةً سَيَّاحِينَ فِي الأَرْضِ يُبَلِّغُونِي مِنْ أُمَّتِي السَّلاَمَ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Inna lillāhi malāʾikatan sayyāḥīna fil-arḍi yuballighūnī min ummatī as-salām.",
                        "explanationEs": "Y dijo: Allah tiene ángeles que recorren la tierra para hacerme llegar el saludo de paz de mi comunidad.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20252.mp3"
                        ]
                  },
                  {
                        "itemNumber": 253,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَا مِنْ أَحَدٍ يُسَلِّمُ عَلَيَّ إِلاَّ رَدَّ اللَّهُ عَلَيَّ رُوحِيَ حَتَّى أَرُدَّ عَلَيْهِ السَّلاَمَ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Mā min aḥadin yusallimu ʿalayya illā radda Allāhu ʿalayya rūḥī ḥattā arudda ʿalayhi as-salām.",
                        "explanationEs": "Y dijo: No hay nadie que me salude con la paz sin que Allah me devuelva el alma para que yo le devuelva el saludo.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20253.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "salam",
            "titleAr": "أَذْكَارُ السَّلَامِ",
            "titleEs": "El saludo de paz",
            "items": [
                  {
                        "itemNumber": 254,
                        "subtitleAr": "إِفْشَاءُ السَّلاَمِ",
                        "subtitleEs": "Difundir el saludo de paz (Salam)",
                        "text": "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: لاَ تَدْخُلُوا الْجَنَّةَ حَتَّى تُؤْمِنُوا، وَلاَ تُؤْمِنُوا حَتَّى تَحَابُّوا، أَوَلاَ أَدُلُّكُمْ عَلَى شَيْءٍ إِذَا فَعَلْتُمُوهُ تَحَابَبْتُمْ، أَفْشُوا السَّلاَمَ بَيْنَكُمْ.",
                        "latin": "Qāla rasūlu Allāhi ṣallā Allāhu ʿalayhi wa sallam: Lā tadkhulū al-jannata ḥattā tuʾminū, wa lā tuʾminū ḥattā taḥābbū, awalā adullukum ʿalā shayʾin idhā faʿaltumūhu taḥābabtum, afshū as-salāma baynakum.",
                        "explanationEs": "Dijo el Mensajero de Allah (paz y bendiciones de Allah sean con él): No entraréis al Paraíso hasta que creáis, y no creeréis (plenamente) hasta que os améis unos a otros. ¿Acaso no os indicaré algo que si lo hacéis os amaréis? Difundid el saludo de paz entre vosotros.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20254.mp3"
                        ]
                  },
                  {
                        "itemNumber": 255,
                        "subtitleAr": "إِفْشَاءُ السَّلاَمِ",
                        "subtitleEs": "Difundir el saludo de paz (Salam)",
                        "text": "ثَلاَثٌ مَنْ جَمَعَهُنَّ فَقَدْ جَمَعَ الإِيمَانَ: الإِنْصَافُ مِنْ نَفْسِكَ، وَبَذْلُ السَّلاَمِ لِلْعَالَمِ، وَالإِنْفَاقُ مِنَ الإِقْتَارِ.",
                        "latin": "Thalāthun man jamaʿahunna faqad jamaʿa al-īmān: Al-inṣāfu min nafsik, wa badhlu as-salāmi lil-ʿālam, wal-infāqu minal-iqtār.",
                        "explanationEs": "Tres cosas, quien las reúna habrá reunido la fe completa: la equidad con uno mismo, saludar con la paz a todo el mundo y dar en caridad aun en la escasez.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20255.mp3"
                        ]
                  },
                  {
                        "itemNumber": 256,
                        "subtitleAr": "إِفْشَاءُ السَّلاَمِ",
                        "subtitleEs": "Difundir el saludo de paz (Salam)",
                        "text": "وَعَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا: أَنَّ رَجُلاً سَأَلَ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيُّ الإِسْلاَمِ خَيْرٌ؟ قَالَ: تُطْعِمُ الطَّعَامَ، وَتَقْرَأُ السَّلاَمَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ.",
                        "latin": "Wa ʿan ʿAbdillāhi ibni ʿUmara raḍiya Allāhu ʿanhumā: Anna rajulan saʾala an-nabiyya ṣallā Allāhu ʿalayhi wa sallama ayyu al-islāmi khayr? Qāl: Tuṭʿimu aṭ-ṭaʿām, wa taqraʾu as-salāma ʿalā man ʿarafta wa man lam taʿrif.",
                        "explanationEs": "Un hombre preguntó al Profeta (paz y bendiciones sean con él): ¿Qué acción del Islam es la mejor? Respondió: Dar de comer y saludar con la paz a quien conoces y a quien no conoces.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20256.mp3"
                        ]
                  },
                  {
                        "itemNumber": 257,
                        "subtitleAr": "كَيْفَ يَرُدُّ السَّلاَمَ عَلَى الكَافِرِ إِذَا سَلَّمَ",
                        "subtitleEs": "Cómo responder el saludo a un no musulmán",
                        "text": "إِذَا سَلَّمَ عَلَيْكُمْ أَهْلُ الْكِتَابِ فَقُولُوا:\n\nوَعَلَيْكُمْ.",
                        "latin": "Idhā sallama ʿalaykum ahlu al-kitābi fa-qūlū: Wa ʿalaykum.",
                        "explanationEs": "Cuando os saluden la Gente del Libro (cristianos o judíos), decid: 'Y sobre vosotros'.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20257.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "hayawan",
            "titleAr": "عِنْدَ سَمَاعِ الْحَيَوَانَاتِ",
            "titleEs": "Al escuchar animales",
            "items": [
                  {
                        "itemNumber": 258,
                        "subtitleAr": "الدُّعَاءُ عِنْدَ سَمَاعِ صِيَاحِ الدِّيكِ وَنَهِيقِ الحِمَارِ",
                        "subtitleEs": "Súplica al escuchar el canto del gallo o el rebuzno del asno",
                        "text": "إِذَا سَمِعْتُمْ صِيَاحَ الدِّيَكَةِ فَاسْأَلُوا اللَّهَ مِنْ فَضْلِهِ؛ فَإِنَّهَا رَأَتْ مَلَكاً، وَإِذَا سَمِعْتُمْ نَهِيقَ الْحِمَارِ فَتَعَوَّذُوا بِاللَّهِ مِنَ الشَّيْطَانِ؛ فَإِنَّهُ رَأَى شَيْطَاناً.",
                        "latin": "Idhā samiʿtum ṣiyāḥa ad-diyakati fasʾalū Allāha min faḍlihi; fa-innahā raʾat malakā, wa idhā samiʿtum nahīqa al-ḥimāri fa-taʿawwadhū billāhi minash-shayṭāni; fa-innahu raʾā shayṭānā.",
                        "explanationEs": "Cuando escuchéis el canto de los gallos, pedid a Allah de Su favor, pues han visto a un ángel; y cuando escuchéis el rebuzno del asno, refugiaos en Allah de Shaitán, pues ha visto a un demonio.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20258.mp3"
                        ]
                  },
                  {
                        "itemNumber": 259,
                        "subtitleAr": "دُعَاءُ نُبَاحِ الكِلاَبِ بِاللَّيْلِ",
                        "subtitleEs": "Súplica al escuchar el ladrido de los perros por la noche",
                        "text": "إِذَا سَمِعْتُمْ نُبَاحَ الْكِلاَبِ وَنَهِيقَ الْحَمِيرِ بِاللَّيْلِ فَتَعَوَّذُوا بِاللَّهِ مِنْهُنَّ؛ فَإِنَّهُنَّ يَرَيْنَ مَا لاَ تَرَوْنَ.",
                        "latin": "Idhā samiʿtum nubāḥa al-kilābi wa nahīqa al-ḥamīri bil-layli fa-taʿawwadhū billāhi minhunna; fa-innahunna yarayna mā lā tarawn.",
                        "explanationEs": "Cuando escuchéis el ladrido de los perros o el rebuzno de los asnos por la noche, refugiaos en Allah de ellos, pues ven lo que vosotros no veis.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20259.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "dua_liman_sababtah",
            "titleAr": "الدُّعَاءُ لِمَنْ سَبَبْتَهُ",
            "titleEs": "Súplica por alguien a quien hayas insultado o injuriado",
            "items": [
                  {
                        "itemNumber": 260,
                        "text": "اللَّهُمَّ فَأَيُّمَا مُؤْمِنٍ سَبَبْتُهُ فَاجْعَلْ ذَلِكَ لَهُ قُرْبَةً إِلَيْكَ يَوْمَ الْقِيَامَةِ.",
                        "latin": "Allāhumma fa-ayyumā muʾminin sababtuhu fajʿal dhālika lahu qurbatan ilayka yawma al-qiyāmah.",
                        "explanationEs": "Dijo el Profeta (paz y bendiciones sean con él): ¡Oh Allah! A cualquier creyente al que haya insultado, haz que eso sea para él un motivo de cercanía a Ti en el Día de la Resurrección.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20260.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "madh_muslim",
            "titleAr": "مَا يَقُولُ المُسْلِمُ إِذَا مَدَحَ المُسْلِمَ",
            "titleEs": "Lo que se dice al elogiar a otro creyente",
            "items": [
                  {
                        "itemNumber": 261,
                        "text": "إِذَا كَانَ أَحَدُكُمْ مَادِحاً صَاحِبَهُ لاَ مَحَالَةَ فَلْيَقُلْ:\n\nأَحْسِبُ فُلاَناً وَاللَّهُ حَسِيبُهُ، وَلاَ أُزَكِّي عَلَى اللَّهِ أَحَداً، أَحْسِبُهُ (إِنْ كَانَ يَعْلَمُ ذَاكَ) كَذَا وَكَذَا.",
                        "latin": "Idhā kāna aḥadukum mādiḥan ṣāḥibahu lā maḥālata fal-yaqul: Aḥsibu fulānan wallāhu ḥasībuh, wa lā uzakkī ʿalā Allāhi aḥadā, aḥsibuhu (in kāna yaʿlamu dhāk) kadhā wa kadhā.",
                        "explanationEs": "Si alguno de vosotros no tiene más remedio que elogiar a su hermano, que diga: 'Considero a Fulano —y Allah es su Juez, y no purifico a nadie por encima de Allah— que es así y así', si conoce eso de él.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20261.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "idha_zukkiya",
            "titleAr": "مَا يَقُولُ المُسْلِمُ إِذَا زُكِّيَ",
            "titleEs": "Lo que dice el musulmán cuando es elogiado",
            "items": [
                  {
                        "itemNumber": 262,
                        "text": "اللَّهُمَّ لاَ تُؤَاخِذْنِي بِمَا يَقُولُونَ، وَاغْفِرْ لِي مَا لاَ يَعْلَمُونَ، [وَاجْعَلْنِي خَيْراً مِمَّا يَظُنُّونَ].",
                        "latin": "Allāhumma lā tuʾākhidhnī bi-mā yaqūlūn, waghfir lī mā lā yaʿlamūn, [wajʿalnī khayran mimmā yaẓunnūn].",
                        "explanationEs": "¡Oh Allah! No me juzgues por lo que dicen, perdóname lo que ignoran de mí y [hazme mejor de lo que ellos piensan].",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20262.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "hajj",
            "titleAr": "أَذْكَارُ الْحَجِّ وَالْعُمْرَةِ",
            "titleEs": "Hajj y Umra",
            "items": [
                  {
                        "itemNumber": 263,
                        "subtitleAr": "كَيْفَ يُلَبِّي المُحْرِمُ فِي الحَجِّ أَوْ العُمْرَةِ؟",
                        "subtitleEs": "La Talbiyah durante el Hajj o la Umrah",
                        "text": "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ، وَالنِّعْمَةَ، لَكَ وَالْمُلْكُ، لاَ شَرِيكَ لَكَ.",
                        "latin": "Labbayka Allāhumma labbayk, labbayka lā sharīka laka labbayk, inna al-ḥamda, wan-niʿmata, laka wal-mulk, lā sharīka lak.",
                        "explanationEs": "Heme aquí, ¡oh Allah!, a Tu servicio. Heme aquí, no tienes asociados, heme aquí. Ciertamente la alabanza, las bendiciones y la soberanía Te pertenecen, no tienes asociados.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20263.mp3"
                        ]
                  },
                  {
                        "itemNumber": 264,
                        "subtitleAr": "التَّكْبِيرُ إِذَا أَتَى الرُّكْنَ الأَسْوَدَ",
                        "subtitleEs": "Proclamar la grandeza de Allah al llegar a la Piedra Negra",
                        "text": "طَافَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِالْبَيْتِ عَلَى بَعِيرٍ كُلَّمَا أَتَى الرُّكْنَ أَشَارَ إِلَيْهِ بِشَيْءٍ عِنْدَهُ وَكَبَّرَ.",
                        "latin": "Ṭāfa an-nabiyyu ṣallā Allāhu ʿalayhi wa sallama bil-bayti ʿalā baʿīrin kullamā atā ar-rukna ashāra ilayhi bi-shayʾin ʿindahu wa kabbar.",
                        "explanationEs": "El Profeta (paz y bendiciones sean con él) realizó el Tawaf alrededor de la Kaaba sobre un camello; cada vez que llegaba a la esquina de la Piedra Negra, la señalaba con lo que tenía en la mano y decía 'Allahu Akbar'.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20264.mp3"
                        ]
                  },
                  {
                        "itemNumber": 265,
                        "subtitleAr": "الدُّعَاءُ بَيْنَ الرُّكْنِ اليَمَانِي وَالحَجَرِ الأَسْوَدِ",
                        "subtitleEs": "Súplica entre la Esquina Yamani y la Piedra Negra",
                        "text": "﴿رَبَّنَآ ءَاتِنَا فِي ٱلدُّنۡيَا حَسَنَةٗ وَفِي ٱلۡأٓخِرَةِ حَسَنَةٗ وَقِنَا عَذَابَ ٱلنَّارِ۝﴾",
                        "latin": "Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ʿadhāba an-nār.",
                        "explanationEs": "¡Señor nuestro! Danos bienestar en esta vida y en la otra, y presérvanos del tormento del Fuego.",
                        "count": 1,
                        "maxCount": 1,
                        "note": "سورة البقرة الآية 201",
                        "audioUrls": [
                              "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20265.mp3"
                        ]
                  },
                  {
                        "itemNumber": 266,
                        "subtitleAr": "دُعَاءُ الوُقُوفِ عَلَى الصَّفَا وَالمَرْوَةِ",
                        "subtitleEs": "Súplica al subir a las colinas de As-Safa y Al-Marwah",
                        "text": "قَرَأَ:\n\nإِنَّ ٱلصَّفَا وَٱلۡمَرۡوَةَ مِن شَعَآئِرِ ٱللَّهِۖ، أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ،\n\nفَبَدَأَ بِالصَّفَا فَرَقِيَ عَلَيْهِ حَتَّى رَأَى الْبَيْتَ، فَاسْتَقْبَلَ الْقِبْلَةَ، فَوَحَّدَ اللَّهَ وَكَبَّرَهُ وَقَالَ:\n\nلاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الأَحْزَابَ وَحْدَهُ،\n\nثُمَّ دَعَا بَيْنَ ذَلِكَ (ثَلاَثَ مَرَّاتٍ).",
                        "latin": "Qaraʾa: Inna aṣ-ṣafā wal-marwata min shaʿāʾirillāh, abdaʾu bi-mā badaʾa Allāhu bih, fa-badaʾa biṣ-ṣafā fa-raqiya ʿalayhi ḥattā raʾā al-bayt, fas-taqbala al-qiblata, fa-waḥḥada Allāha wa kabbarah, wa qāl: Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu wa huwa ʿalā kulli shayʾin qadīr, lā ilāha illā Allāhu waḥdah, anjaza waʿdah, wa naṣara ʿabdah, wa hazama al-aḥzāba waḥdah, thumma daʿā bayna dhālik (thalātha marrāt).",
                        "explanationEs": "Leyó: Ciertamente As-Safa y Al-Marwah son símbolos de Allah. Empiezo por aquello por lo que Allah empezó. Comenzó por As-Safa y subió hasta ver la Casa (la Kaaba); se orientó hacia la qibla, proclamó la unicidad de Allah y Su grandeza, y dijo: «No hay divinidad digna de adoración excepto Allah, Único, sin asociado. Suyo es el dominio y Suya es la alabanza, y Él tiene poder sobre todas las cosas. No hay divinidad digna de adoración excepto Allah, Único; cumplió Su promesa, ayudó a Su siervo y derrotó Él solo a los confederados». Luego suplicó entre esas invocaciones (tres veces). Hizo en Al-Marwah lo mismo que en As-Safa.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20266.mp3"
                        ]
                  },
                  {
                        "itemNumber": 267,
                        "subtitleAr": "الدُّعَاءُ يَوْمَ عَرَفَةَ",
                        "subtitleEs": "Súplica en el día de Arafah",
                        "text": "قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: خَيْرُ الدُّعَاءِ دُعَاءُ يَوْمِ عَرَفَةَ، وَخَيْرُ مَا قُلْتُ أَنَا وَالنَّبِيُّونَ مِنْ قَبْلِي:\n\nلاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
                        "latin": "Qāla an-nabiyyu ṣallā Allāhu ʿalayhi wa sallam: Khayru ad-duʿāʾi duʿāʾu yawmi ʿarafah, wa khayru mā qultu anā wan-nabiyyūna min qablī: Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamd, wa huwa ʿalā kulli shayʾin qadīr.",
                        "explanationEs": "Dijo el Profeta (paz y bendiciones sean con él): La mejor súplica es la del día de Arafah, y lo mejor que he dicho yo y los profetas anteriores a mí es: 'No hay más divinidad que Allah, Único, sin asociados. Suyo es el reino y Suya es la alabanza, y Él es Omnipotente sobre todas las cosas'.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20267.mp3"
                        ]
                  },
                  {
                        "itemNumber": 268,
                        "subtitleAr": "الذِّكْرُ عِنْدَ المَشْعَرِ الحَرَامِ",
                        "subtitleEs": "Recuerdo en Al-Mash'ar Al-Haram (Muzdalifah)",
                        "text": "رَكِبَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْقَصْوَاءَ حَتَّى أَتَى الْمَشْعَرَ الْحَرَامَ فَاسْتَقْبَلَ الْقِبْلَةَ (فَدَعَاهُ، وَكَبَّرَهُ، وَهَلَّلَهُ، وَوَحَّدَهُ) فَلَمْ يَزَلْ وَاقِفاً حَتَّى أَسْفَرَ جِدّاً فَدَفَعَ قَبْلَ أَنْ تَطْلُعَ الشَّمْسُ.",
                        "latin": "Rakiba an-nabiyyu ṣallā Allāhu ʿalayhi wa sallam al-qaṣwāʾa ḥattā atā al-mashʿara al-ḥarāma fas-taqbala al-qiblah (fa-daʿāh, wa kabbarah, wa hallalah, wa waḥḥadah) fa-lam yazal wāqifan ḥattā asfara jiddān fa-dafaʿa qabla an taṭluʿa ash-shams.",
                        "explanationEs": "El Profeta (paz y bendiciones sean con él) montó su camella Al-Qaswa hasta llegar a Al-Mash'ar Al-Haram, se orientó a la Qibla, suplicó a Allah, enalteció Su grandeza, proclamó Su unicidad y permaneció allí hasta que aclaró bien el día, partiendo antes de que saliera el sol.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20268.mp3"
                        ]
                  },
                  {
                        "itemNumber": 269,
                        "subtitleAr": "التَّكْبِيرُ عِنْدَ رَمْيِ الجِمَارِ مَعَ كُلِّ حَصَاةٍ",
                        "subtitleEs": "Proclamar la grandeza de Allah al lanzar las piedras en los Jamarat",
                        "text": "يُكَبِّرُ كُلَّمَا رَمَى بِحَصَاةٍ عِنْدَ الْجِمَارِ الثَّلاَثِ، ثُمَّ يَتَقَدَّمُ، وَيَقِفُ يَدْعُو مُسْتَقْبِلَ الْقِبْلَةِ، رَافِعاً يَدَيْهِ بَعْدَ الْجَمْرَةِ الأُولَى وَالثَّانِيَةِ. أَمَّا جَمْرَةُ الْعَقَبَةِ فَيَرْمِيهَا وَيُكَبِّرُ عِنْدَ كُلِّ حَصَاةٍ وَيَنْصَرِفُ وَلاَ يَقِفُ عِنْدَهَا.",
                        "latin": "Yukabbiru kullamā ramā bi-ḥaṣātin ʿinda al-jimāri ath-thalāth, thumma yataqaddamu, wa yaqifu yadʿū mustaqbila al-qiblati, rāfiʿan yadayhi baʿda al-jamrati al-ūlā wath-thāniyah. Ammā jamratu al-ʿaqabati fa-yarmīhā wa yukabbiru ʿinda kulli ḥaṣātin wa yanṣarif wa lā yaqifu ʿindahā.",
                        "explanationEs": "Dice 'Allahu Akbar' con cada guijarro que lanza en los tres pilares (Jamarat). Tras el primero y el segundo, avanza, se orienta a la Qibla con las manos levantadas y suplica. En cuanto al pilar grande (Jamrat Al-Aqabah), lanza las piedras diciendo 'Allahu Akbar' en cada una y se retira sin detenerse a suplicar.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20269.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "taajjub_amr_sarr",
            "titleAr": "دُعَاءُ التَّعَجُّبِ وَالأَمْرِ السَّارِّ",
            "titleEs": "Exclamaciones ante el asombro o una noticia grata",
            "items": [
                  {
                        "itemNumber": 270,
                        "text": "سُبْحَانَ اللَّهِ!",
                        "latin": "Subḥānallāh!",
                        "explanationEs": "¡Glorificado sea Allah!",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20270.mp3"
                        ]
                  },
                  {
                        "itemNumber": 271,
                        "text": "اللَّهُ أَكْبَرُ!",
                        "latin": "Allāhu akbar!",
                        "explanationEs": "¡Allah es el más Grande!",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20271.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "amr_yasurruh",
            "titleAr": "مَا يَفْعَلُ مَنْ أَتَاهُ أَمْرٌ يَسُرُّهُ",
            "titleEs": "Lo que hace quien recibe un acontecimiento feliz",
            "items": [
                  {
                        "itemNumber": 272,
                        "text": "كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا أَتَاهُ أَمْرٌ يَسُرُّهُ أَوْ يُسَرُّ بِهِ خَرَّ سَاجِداً شُكْراً لِلَّهِ تَبَارَكَ وَتَعَالَى.",
                        "latin": "Kāna an-nabiyyu ṣallā Allāhu ʿalayhi wa sallama idhā atāhu amrun yasurruhu aw yusarru bihi kharra sājidan shukran lillāhi tabāraka wa taʿālā.",
                        "explanationEs": "Cuando al Profeta (paz y bendiciones sean con él) le llegaba algo que le alegraba, se prosternaba inmediatamente en agradecimiento a Allah, Bendito y Enaltecido sea.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20272.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "waja_fi_jasad",
            "titleAr": "مَا يَقُولُ مَنْ أَحَسَّ وَجَعاً فِي جَسَدِهِ",
            "titleEs": "Lo que dice quien siente un dolor en el cuerpo",
            "items": [
                  {
                        "itemNumber": 273,
                        "text": "ضَعْ يَدَكَ عَلَى الَّذِي تَأَلَّمَ مِنْ جَسَدِكَ وَقُلْ:\n\nبِسْمِ اللَّهِ\n\n(ثَلاَثاً)، وَقُلْ (سَبْعَ مَرَّاتٍ):\n\nأَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ.",
                        "latin": "Ḍaʿ yadaka ʿalā alladhī taʾallama min jasadika wa qul: Bismillāh (tres veces), wa qul (siete veces): Aʿūdhu billāhi wa qudratihi min sharri mā ajidu wa uḥādhir.",
                        "explanationEs": "Coloca tu mano sobre el lugar donde sientes dolor en tu cuerpo y di 'Bismillah' (En el nombre de Allah) tres veces, y luego di siete veces: 'Me refugio en Allah y en Su poder del mal que siento y al que temo'.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20273.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "khashya_isabat_ayn",
            "titleAr": "دُعَاءُ مَنْ خَشِيَ أَنْ يُصِيبَ شَيْئاً بِعَيْنِهِ",
            "titleEs": "Súplica para evitar causar mal de ojo inadvertidamente",
            "items": [
                  {
                        "itemNumber": 274,
                        "text": "إِذَا رَأَى أَحَدُكُمْ مِنْ أَخِيهِ، أَوْ مِنْ نَفْسِهِ، أَوْ مِنْ مَالِهِ مَا يُعْجِبُهُ فَلْيَدْعُ لَهُ بِالْبَرَكَةِ فَإِنَّ الْعَيْنَ حَقٌّ.",
                        "latin": "Idhā raʾā aḥadukum min akhīhi, aw min nafsihi, aw min mālihi mā yuʿjibuhu fal-yadʿu lahu bil-barakah, fa-inna al-ʿayna ḥaqq.",
                        "explanationEs": "Si alguno de vosotros ve algo que le admire en su hermano, en sí mismo o en sus bienes, que invoque la bendición de Allah para ello, pues el mal de ojo es una realidad.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20274.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "ind_faza",
            "titleAr": "مَا يُقَالُ عِنْدَ الفَزَعِ",
            "titleEs": "Lo que se exclama al sentir susto o pánico",
            "items": [
                  {
                        "itemNumber": 275,
                        "text": "لاَ إِلَهَ إِلاَّ اللَّهُ!",
                        "latin": "Lā ilāha illā Allāh!",
                        "explanationEs": "¡No hay más divinidad que Allah!",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20275.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "dhabh_nahr",
            "titleAr": "مَا يَقُولُ عِنْدَ الذَّبْحِ أَوْ النَّحْرِ",
            "titleEs": "Lo que se dice al sacrificar un animal",
            "items": [
                  {
                        "itemNumber": 276,
                        "text": "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ [اللَّهُمَّ مِنْكَ وَلَكَ] اللَّهُمَّ تَقَبَّلْ مِنِّي.",
                        "latin": "Bismillāhi wallāhu akbar [Allāhumma minka wa lak] Allāhumma taqabbal minnī.",
                        "explanationEs": "En el nombre de Allah, y Allah es el más Grande. [¡Oh Allah! De Ti proviene y a Ti se ofrece]. ¡Oh Allah! Acepta de mí.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20276.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "radd_kayd_shayatin",
            "titleAr": "مَا يَقُولُ لِرَدِّ كَيْدِ مَرَدَةِ الشَّيَاطِينِ",
            "titleEs": "Súplica para repeler la trama de los demonios rebeldes",
            "items": [
                  {
                        "itemNumber": 277,
                        "text": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ الَّتِي لاَ يُجَاوِزُهُنَّ بَرٌّ وَلاَ فَاجِرٌ: مِنْ شَرِّ مَا خَلَقَ، وَبَرَأَ وَذَرَأَ، وَمِنْ شَرِّ مَا يَنْزِلُ مِنَ السَّمَاءِ، وَمِنْ شَرِّ مَا يَعْرُجُ فِيهَا، وَمِنْ شَرِّ مَا ذَرَأَ فِي الأَرْضِ، وَمِنْ شَرِّ مَا يَخْرُجُ مِنْهَا، وَمِنْ شَرِّ فِتَنِ اللَّيْلِ وَالنَّهَارِ، وَمِنْ شَرِّ كُلِّ طَارِقٍ إِلاَّ طَارِقاً يَطْرُقُ بِخَيْرٍ يَا رَحْمَنُ.",
                        "latin": "Aʿūdhu bi-kalimāti Allāhi at-tāmmāti allatī lā yujāwizuhunna barrun wa lā fājir: min sharri mā khalaqa, wa baraʾa wa dharaʾa, wa min sharri mā yanzilu minas-samāʾi, wa min sharri mā yaʿruju fīhā, wa min sharri mā dharaʾa fil-arḍi, wa min sharri mā yakhruju minhā, wa min sharri fitani al-layli wan-nahār, wa min sharri kulli ṭāriqin illā ṭāriqan yaṭruqu bi-khayrin yā raḥmān.",
                        "explanationEs": "Me refugio en las palabras perfectas de Allah, que ningún piadoso ni perverso puede traspasar: del mal de lo que creó, concibió y multiplicó; del mal de lo que desciende del cielo y de lo que asciende a él; del mal de lo que se multiplica en la tierra y de lo que sale de ella; del mal de las pruebas de la noche y del día; y del mal de todo visitante nocturno, excepto aquel que trae el bien, ¡oh Misericordioso!",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20277.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "istighfar_tawbah",
            "titleAr": "الاسْتِغْفَارُ وَالتَّوْبَةُ",
            "titleEs": "El pedido de perdón (Istighfar) y el arrepentimiento (Tawbah)",
            "items": [
                  {
                        "itemNumber": 278,
                        "text": "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: وَاللَّهِ إِنِّي لأَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ فِي الْيَوْمِ أَكْثَرَ مِنْ سَبْعِينَ مَرَّةً.",
                        "latin": "Qāla rasūlu Allāhi ṣallā Allāhu ʿalayhi wa sallam: Wallāhi innī la-astaghfiru Allāha wa atūbu ilayhi fil-yawmi akthara min sabʿīna marrah.",
                        "explanationEs": "Dijo el Mensajero de Allah (paz y bendiciones sean con él): ¡Por Allah! Pido perdón a Allah y me arrepiento ante Él en el día más de setenta veces.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20278.mp3"
                        ]
                  },
                  {
                        "itemNumber": 279,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: يَا أَيُّهَا النَّاسُ تُوبُوا إِلَى اللَّهِ فَإِنِّي أَتُوبُ فِي الْيَوْمِ إِلَيْهِ مِائَةَ مَرَّةٍ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Yā ayyuhā an-nāsu tūbū ilā Allāhi fa-innī atūbu fil-yawmi ilayhi miʾata marrah.",
                        "explanationEs": "Y dijo: ¡Oh gente! Arrepentíos ante Allah, pues yo me arrepiento ante Él cien veces al día.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20279.mp3"
                        ]
                  },
                  {
                        "itemNumber": 280,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَنْ قَالَ\n\nأَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ القَيُّومُ وَأَتُوبُ إِلَيْهِ،\n\nغَفَرَ اللَّهُ لَهُ وَإِنْ كَانَ فَرَّ مِنَ الزَّحْفِ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Man qāla astaghfiru Allāha al-ʿaẓīma alladhī lā ilāha illā huwa al-ḥayyu al-qayyūmu wa atūbu ilayh, ghafara Allāhu lahu wa in kāna farra minaz-zaḥf.",
                        "explanationEs": "Y dijo: Quien diga 'Pido perdón a Allah el Grandioso, no hay más divinidad excepto Él, el Viviente, el Sustentador de todo, y me arrepiento ante Él', Allah lo perdonará aunque haya huido del combate.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20280.mp3"
                        ]
                  },
                  {
                        "itemNumber": 281,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَقْرَبُ مَا يَكُونُ الرَّبُّ مِنَ الْعَبْدِ فِي جَوْفِ اللَّيْلِ الآخِرِ، فَإِنِ اسْتَطَعْتَ أَنْ تَكُونَ مِمَّنْ يَذْكُرُ اللَّهَ فِي تِلْكَ السَّاعَةِ فَكُنْ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Aqrabu mā yakūnu ar-rabbu minal-ʿabdi fī jawfi al-layli al-ākhir, fa-inis-taṭaʿta an takūna mimman yadhkuru Allāha fī tilka as-sāʿati fa-kun.",
                        "explanationEs": "Y dijo: Lo más cerca que está el Señor de Su siervo es en lo profundo de la última parte de la noche. Si puedes ser de los que recuerdan a Allah en esa hora, sélo.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20281.mp3"
                        ]
                  },
                  {
                        "itemNumber": 282,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكْثِرُوا الدُّعَاءَ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Aqrabu mā yakūnu al-ʿabdu min rabbihi wa huwa sājidun fa-akthirū ad-duʿāʾ.",
                        "explanationEs": "Y dijo: Lo más cerca que está el siervo de su Señor es cuando está prosternado; por tanto, abundad en las súplicas.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20282.mp3"
                        ]
                  },
                  {
                        "itemNumber": 283,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّهُ لَيُغَانُ عَلَى قَلْبِي وَإِنِّي لأَسْتَغْفِرُ اللَّهَ فِي الْيَوْمِ مِائَةَ مَرَّةٍ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Innahu la-yughānu ʿalā qalbī wa innī la-astaghfiru Allāha fil-yawmi miʾata marrah.",
                        "explanationEs": "Y dijo: Ciertamente ocurre que mi corazón se distrae levemente y pido perdón a Allah cien veces al día.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20283.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "fadl_tasbih_tahlil",
            "titleAr": "فَضْلُ التَّسْبِيحِ وَالتَّحْمِيدِ، وَالتَّهْلِيلِ، وَالتَّكْبِيرِ",
            "titleEs": "Las virtudes del Tasbih, Tahmid, Tahlil y Takbir",
            "items": [
                  {
                        "itemNumber": 284,
                        "text": "قَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَنْ قَالَ\n\nسُبْحَانَ اللَّهِ وَبِحَمْدِهِ\n\nفِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ وَلَوْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ.",
                        "latin": "Qāla ṣallā Allāhu ʿalayhi wa sallam: Man qāla Subḥānallāhi wa bi-ḥamdihi fī yawmin miʾata marrah ḥuṭṭat khaṭāyāhu wa law kānat mithla zabadi al-baḥr.",
                        "explanationEs": "Dijo el Profeta (paz y bendiciones sean con él): Quien diga 'Glorificado sea Allah y alabado sea' cien veces al día, sus pecados serán borrados aunque sean como la espuma del mar.",
                        "count": 100,
                        "maxCount": 100,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20284.mp3"
                        ]
                  },
                  {
                        "itemNumber": 285,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَنْ قَالَ\n\nلاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ\n\nعَشْرَ مِرَارٍ، كَانَ كَمَنْ أَعْتَقَ أَرْبَعَةَ أَنْفُسٍ مِنْ وَلَدِ إِسْمَاعِيلَ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Man qāla Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu al-mulku, wa lahu al-ḥamd, wa huwa ʿalā kulli shayʾin qadīr ʿashra mirār, kāna ka-man aʿtaqa arbaʿata anfusin min waladi Ismāʿīl.",
                        "explanationEs": "Y dijo (la paz y las bendiciones de Allah sean con él): «Quien diga diez veces: “No hay divinidad digna de adoración excepto Allah, Único, sin asociado; Suyo es el dominio y Suya es la alabanza, y Él tiene poder sobre todas las cosas”, será como quien haya liberado a cuatro personas de los descendientes de Ismail».",
                        "count": 10,
                        "maxCount": 10,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20285.mp3"
                        ]
                  },
                  {
                        "itemNumber": 286,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ:\n\nسُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Kalimatāni khafīfatāni ʿalal-lisān, thaqīlatāni fil-mīzān, ḥabībatāni ilar-raḥmān: Subḥānallāhi wa bi-ḥamdih, Subḥānallāhi al-ʿaẓīm.",
                        "explanationEs": "Y dijo: Dos palabras son livianas para la lengua, pesadas en la balanza y amadas por el Misericordioso: 'Subhanallahi wa bihamdih, Subhanallahil-'Azim' (Glorificado sea Allah y alabado sea, Glorificado sea Allah el Grandioso).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20286.mp3"
                        ]
                  },
                  {
                        "itemNumber": 287,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: لَأَنْ أَقُولَ\n\nسُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ،\n\nأَحَبُّ إِلَيَّ مِمَّا طَلَعَتْ عَلَيْهِ الشَّمْسُ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: La-an aqūla Subḥānallāh, wal-ḥamdu lillāh, wa lā ilāha illā Allāh, wallāhu akbar, aḥabbu ilayya mimmā ṭalaʿat ʿalayhi ash-shams.",
                        "explanationEs": "Y dijo: Decir 'Subhanallah, wal-hamdulillah, wa la ilaha illallah, wallahu akbar' me es más querido que todo aquello sobre lo que sale el sol.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20287.mp3"
                        ]
                  },
                  {
                        "itemNumber": 288,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَيَعْجِزُ أَحَدُكُمْ أَنْ يَكْسِبَ كُلَّ يَوْمٍ أَلْفَ حَسَنَةٍ؟ يُسَبِّحُ مِائَةَ تَسْبِيحَةٍ، فَيُكْتَبُ لَهُ أَلْفُ حَسَنَةٍ أَوْ يُحَطُّ عَنْهُ أَلْفُ خَطِيئَةٍ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: A-yaʿjizu aḥadukum an yaksiba kulla yawmin alfa ḥasanah? Yusabbiḥu miʾata tasbīḥah, fa-yuktabu lahu alfu ḥasanatin aw yuḥaṭṭu ʿanhu alfu khaṭīʾah.",
                        "explanationEs": "Y dijo: ¿Acaso es incapaz alguno de vosotros de ganar mil buenas acciones cada día? Glorifica a Allah (diciendo Subhanallah) cien veces, y se le anotarán mil buenas acciones o se le borrarán mil pecados.",
                        "count": 100,
                        "maxCount": 100,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20288.mp3"
                        ]
                  },
                  {
                        "itemNumber": 289,
                        "text": "مَنْ قَالَ:\n\nسُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ\n\nغُرِسَتْ لَهُ نَخْلَةٌ فِي الْجَنَّةِ.",
                        "latin": "Man qāla: Subḥānallāhi al-ʿaẓīmi wa bi-ḥamdihi ghurisat lahu nakhlatun fil-jannah.",
                        "explanationEs": "Quien diga 'Subhanallahil-'Azimi wa bihamdih' (Glorificado sea Allah el Grandioso y alabado sea), se le plantará una palmera en el Paraíso.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20289.mp3"
                        ]
                  },
                  {
                        "itemNumber": 290,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: يَا عَبْدَ اللَّهِ بْنَ قَيْسٍ أَلاَ أَدُلُّكَ عَلَى كَنْزٍ مِنْ كُنُوزِ الْجَنَّةِ؟ قُلْ:\n\nلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Yā ʿAbdallāhi ibna Qaysin alā adulluka ʿalā kanzin min kunūzi al-jannah? Qul: Lā ḥawla wa lā quwwata illā billāh.",
                        "explanationEs": "Y dijo: ¡Oh Abdullah bin Qais! ¿Acaso no te indicaré un tesoro de los tesoros del Paraíso? Di: 'La hawla wa la quwwata illa billah' (No hay fuerza ni poder sino en Allah).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20290.mp3"
                        ]
                  },
                  {
                        "itemNumber": 291,
                        "text": "وَقَالَ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَحَبُّ الْكَلاَمِ إِلَى اللَّهِ أَرْبَعٌ:\n\nسُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ،\n\nلاَ يَضُرُّكَ بِأَيِّهِنَّ بَدَأْتَ.",
                        "latin": "Wa qāla ṣallā Allāhu ʿalayhi wa sallam: Aḥabbu al-kalāmi ilā Allāhi arbaʿ: Subḥānallāh, wal-ḥamdu lillāh, wa lā ilāha illā Allāh, wallāhu akbar, lā yaḍurruka bi-ayyihinna badaʾt.",
                        "explanationEs": "Y dijo: Las palabras más amadas por Allah son cuatro: Subhanallah, Al-hamdulillah, La ilaha illallah y Allahu Akbar; no importa con cuál de ellas comiences.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20291.mp3"
                        ]
                  },
                  {
                        "itemNumber": 292,
                        "text": "جَاءَ أَعْرَابِيٌّ إِلَى رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: عَلِّمْنِي كَلاَماً أَقُولُهُ، قَالَ: قُلْ:\n\nلاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، اللَّهُ أَكْبَرُ كَبِيراً، وَالْحَمْدُ لِلَّهِ كَثِيراً، سُبْحَانَ اللَّهِ رَبِّ الْعَالَمِينَ، لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَزِيزِ الْحَكِيمِ.\n\nقَالَ: فَهَؤُلاَءِ لِرَبِّي، فَمَا لِي؟ قَالَ: قُلْ:\n\nاللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَارْزُقْنِي.",
                        "latin": "Jāʾa aʿrābiyyun ilā rasūli Allāhi ṣallā Allāhu ʿalayhi wa sallam fa-qāl: ʿAllimnī kalāman aqūluh, qāl: Qul: Lā ilāha illā Allāhu waḥdahu lā sharīka lah, Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, Subḥānallāhi rabbi al-ʿālamīn, lā ḥawla wa lā quwwata illā billāhi al-ʿazīzi al-ḥakīm. Qāl: Fa-hāʾulāʾi li-rabbī, fa-mā lī? Qāl: Qul: Allāhumma ighfir lī, warḥamnī, wahdinī, warzuqnī.",
                        "explanationEs": "Un beduino vino al Mensajero de Allah (paz y bendiciones sean con él) y dijo: Enséñame unas palabras que decir. Dijo: Di 'No hay más divinidad que Allah, Único, sin asociados; Allah es el más Grande en grandeza, alabado sea Allah en abundancia, glorificado sea Allah, Señor de los mundos, no hay fuerza ni poder sino en Allah el Poderoso, el Sabio'. El hombre dijo: Esas son para mi Señor, ¿y para mí? Dijo: Di '¡Oh Allah! Perdóname, ten misericordia de mí, guíame y susténtame'.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20292.mp3"
                        ]
                  },
                  {
                        "itemNumber": 293,
                        "text": "كَانَ الرَّجُلُ إِذَا أَسْلَمَ عَلَّمَهُ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الصَّلاَةَ ثُمَّ أَمَرَهُ أَنْ يَدْعُوَ بِهَؤُلاَءِ الْكَلِمَاتِ:\n\nاللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي.",
                        "latin": "Kāna ar-rajulu idhā aslama ʿallamahu an-nabiyyu ṣallā Allāhu ʿalayhi wa sallam aṣ-ṣalāta thumma amarahu an yadʿuwa bi-hāʾulāʾi al-kalimāt: Allāhumma ighfir lī, warḥamnī, wahdinī, wa ʿāfinī, warzuqnī.",
                        "explanationEs": "Cuando una persona abrazaba el Islam, el Profeta (paz y bendiciones sean con él) le enseñaba la oración y luego le ordenaba suplicar con estas palabras: '¡Oh Allah! Perdóname, ten misericordia de mí, guíame, dame salud y susténtame'.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20293.mp3"
                        ]
                  },
                  {
                        "itemNumber": 294,
                        "text": "إِنَّ أَفْضَلَ الدُّعَاءِ الْحَمْدُ لِلَّهِ، وَأَفْضَلَ الذِّكْرِ لاَ إِلَهَ إِلاَّ اللَّهُ.",
                        "latin": "Inna afḍala ad-duʿāʾi Al-ḥamdu lillāh, wa afḍala adh-dhikri Lā ilāha illā Allāh.",
                        "explanationEs": "La mejor súplica es 'Al-hamdulillah' (Alabado sea Allah), y el mejor recuerdo es 'La ilaha illallah' (No hay más divinidad que Allah).",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20294.mp3"
                        ]
                  },
                  {
                        "itemNumber": 295,
                        "text": "الْبَاقِيَاتُ الصَّالِحَاتُ:\n\nسُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.",
                        "latin": "Al-bāqiyātu aṣ-ṣāliḥāt: Subḥānallāh, wal-ḥamdu lillāh, wa lā ilāha illā Allāh, wallāhu akbar, wa lā ḥawla wa lā quwwata illā billāh.",
                        "explanationEs": "Las obras perdurables y piadosas son: Subhanallah, Al-hamdulillah, La ilaha illallah, Allahu Akbar, wa La hawla wa la quwwata illa billah.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20295.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "kayfa_yusabbih_nabi",
            "titleAr": "كَيْفَ كَانَ النَّبِيُّ يُسَبِّحُ؟",
            "titleEs": "Cómo realizaba el Profeta el conteo de las glorificaciones",
            "items": [
                  {
                        "itemNumber": 296,
                        "text": "عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو رَضِيَ اللَّهُ عَنْهُ قَالَ: رَأَيْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَعْقِدُ التَّسْبِيحَ بِيَمِينِهِ.",
                        "latin": "ʿAn ʿAbdillāhi ibni ʿAmrin raḍiya Allāhu ʿanhumā qāl: Raʾaytu an-nabiyya ṣallā Allāhu ʿalayhi wa sallama yaʿqidu at-tasbīḥa bi-yamīnih.",
                        "explanationEs": "De Abdullah bin Amr (que Allah esté complacido con ambos), dijo: Vi al Profeta (paz y bendiciones de Allah sean con él) contar las glorificaciones con los dedos de su mano derecha.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20296.mp3"
                        ]
                  }
            ]
      },
      {
            "id": "anwa_khayr_adab",
            "titleAr": "مِنْ أَنْوَاعِ الخَيْرِ وَالآدَابِ الجَامِعَةِ",
            "titleEs": "Diversas obras de bien y normas de conducta",
            "items": [
                  {
                        "itemNumber": 297,
                        "text": "قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِذَا كَانَ جُنْحُ اللَّيْلِ (أَوْ أَمْسَيْتُمْ) فَكُفُّوا صِبْيَانَكُمْ، فَإِنَّ الشَّيَاطِينَ تَنْتَشِرُ حِينَئِذٍ، فَإِذَا ذَهَبَ سَاعَةٌ مِنَ اللَّيْلِ فَخَلُّوهُمْ، وَأَغْلِقُوا الأَبْوَابَ وَاذْكُرُوا اسْمَ اللَّهِ؛ فَإِنَّ الشَّيْطَانَ لاَ يَفْتَحُ بَاباً مُغْلَقاً، وَأَوْكُوا قِرَبَكُمْ وَاذْكُرُوا اسْمَ اللَّهِ، وَخَمِّرُوا آنِيَتَكُمْ وَاذْكُرُوا اسْمَ اللَّهِ وَلَوْ أَنْ تَعْرُضُوا عَلَيْهَا شَيْئاً، وَأَطْفِئُوا مَصَابِيحَكُمْ.",
                        "latin": "Qāla an-nabiyyu ṣallā Allāhu ʿalayhi wa sallam: Idhā kāna junḥu al-layl (aw amsaytum) fa-kuffū ṣibyānakum, fa-inna ash-shayāṭīna tantashiru ḥīnaʾidhin, fa-idhā dhahaba sāʿatun minal-layli fa-khallūhum, wa aghliqū al-abwāba wadhkurū isma Allāh; fa-inna ash-shayṭāna lā yaftaḥu bāban mughlaqā, wa awkū qirabakum wadhkurū isma Allāh, wa khammirū āniyatakum wadhkurū isma Allāh wa law an taʿriḍū ʿalayhā shayʾā, wa aṭfiʾū maṣābīḥakum.",
                        "explanationEs": "Dijo el Profeta (paz y bendiciones sean con él): Al anochecer (o entrada la tarde), mantened a vuestros niños dentro de casa, pues los demonios se dispersan en ese momento. Transcurrida una hora de la noche, dejadlos; cerrad las puertas mencionando el nombre de Allah, pues Shaitán no abre una puerta cerrada; atad los odres mencionando el nombre de Allah; cubrid vuestros recipientes mencionando el nombre de Allah aunque sea atravesando algo sobre ellos, y apagad vuestras lámparas.",
                        "count": 1,
                        "maxCount": 1,
                        "audioUrls": [
                          "https://github.com/Mundial-45/ZadAlQulub-Audio/raw/refs/heads/main/Zikr/zikr%20297.mp3"
                        ]
                  }
            ]
      }
];

// API de esta sección: datos y funciones específicas.
(function (global) {
  const groups = azkarData;
  const sectionModule = {
    id: 'azkar',
    getGroups: function () { return groups; },
    findGroup: function (groupId) { return groups.find(function (group) { return group.id === groupId; }) || null; },
    getTitle: function (texts) { return texts.azkarSectionTitle; },
    isDevotional: false,
    isQuranItem: function (item) { return true && /[﴿﴾]/u.test((item && item.text) || ''); },
    open: function (skipPushState) {
      if (typeof global.showSection === 'function') global.showSection('azkar', !!skipPushState);
    }
  };
  global.ZadSectionModules = global.ZadSectionModules || {};
  global.ZadSectionModules['azkar'] = sectionModule;
  global.openAzkarSection = function (skipPushState) { sectionModule.open(!!skipPushState); };
})(window);
