// quran.js - قسم القرآن الكريم (فهرس السور والأحزاب والقارئ)

const quranSurahs = [
  { id: 1, nameAr: 'الفاتحة', nameEs: 'Al-Fātiḥah', type: 'مكية', ayahs: 7, page: 1, hizb: 1 },
  { id: 2, nameAr: 'البقرة', nameEs: 'Al-Baqarah', type: 'مدنية', ayahs: 286, page: 2, hizb: 1 },
  { id: 3, nameAr: 'آل عمران', nameEs: 'Āli ‘Imrān', type: 'مدنية', ayahs: 200, page: 48, hizb: 5 },
  { id: 4, nameAr: 'النساء', nameEs: 'An-Nisā’', type: 'مدنية', ayahs: 176, page: 74, hizb: 8 },
  { id: 5, nameAr: 'المائدة', nameEs: 'Al-Mā’idah', type: 'مدنية', ayahs: 120, page: 104, hizb: 11 },
  { id: 6, nameAr: 'الأنعام', nameEs: 'Al-An‘ām', type: 'مكية', ayahs: 165, page: 126, hizb: 13 },
  { id: 7, nameAr: 'الأعراف', nameEs: 'Al-A‘rāf', type: 'مكية', ayahs: 206, page: 150, hizb: 16 },
  { id: 8, nameAr: 'الأنفال', nameEs: 'Al-Anfāl', type: 'مدنية', ayahs: 75, page: 176, hizb: 18 },
  { id: 9, nameAr: 'التوبة', nameEs: 'At-Tawbah', type: 'مدنية', ayahs: 129, page: 187, hizb: 19 },
  { id: 10, nameAr: 'يونس', nameEs: 'Yūnus', type: 'مكية', ayahs: 109, page: 207, hizb: 21 },
  { id: 11, nameAr: 'هود', nameEs: 'Hūd', type: 'مكية', ayahs: 123, page: 221, hizb: 22 },
  { id: 12, nameAr: 'يوسف', nameEs: 'Yūsuf', type: 'مكية', ayahs: 111, page: 236, hizb: 24 },
  { id: 13, nameAr: 'الرعد', nameEs: 'Ar-Ra‘d', type: 'مدنية', ayahs: 43, page: 250, hizb: 25 },
  { id: 14, nameAr: 'إبراهيم', nameEs: 'Ibrāhīm', type: 'مكية', ayahs: 52, page: 256, hizb: 26 },
  { id: 15, nameAr: 'الحجر', nameEs: 'Al-Ḥijr', type: 'مكية', ayahs: 99, page: 263, hizb: 27 },
  { id: 16, nameAr: 'النحل', nameEs: 'An-Naḥl', type: 'مكية', ayahs: 128, page: 269, hizb: 27 },
  { id: 17, nameAr: 'الإسراء', nameEs: 'Al-Isrā’', type: 'مكية', ayahs: 111, page: 284, hizb: 29 },
  { id: 18, nameAr: 'الكهف', nameEs: 'Al-Kahf', type: 'مكية', ayahs: 110, page: 297, hizb: 30 },
  { id: 19, nameAr: 'مريم', nameEs: 'Maryam', type: 'مكية', ayahs: 98, page: 309, hizb: 31 },
  { id: 20, nameAr: 'طه', nameEs: 'Ṭāhā', type: 'مكية', ayahs: 135, page: 317, hizb: 32 },
  { id: 21, nameAr: 'الأنبياء', nameEs: 'Al-Anbiya’', type: 'مكية', ayahs: 112, page: 327, hizb: 33 },
  { id: 22, nameAr: 'الحج', nameEs: 'Al-Ḥajj', type: 'مدنية', ayahs: 78, page: 337, hizb: 34 },
  { id: 23, nameAr: 'المؤمنون', nameEs: 'Al-Mu’minūn', type: 'مكية', ayahs: 118, page: 347, hizb: 35 },
  { id: 24, nameAr: 'النور', nameEs: 'An-Nūr', type: 'مدنية', ayahs: 64, page: 356, hizb: 35 },
  { id: 25, nameAr: 'الفرقان', nameEs: 'Al-Furqān', type: 'مكية', ayahs: 77, page: 366, hizb: 36 },
  { id: 26, nameAr: 'الشعراء', nameEs: 'Ash-Shu‘arā’', type: 'مكية', ayahs: 227, page: 374, hizb: 37 },
  { id: 27, nameAr: 'النمل', nameEs: 'An-Naml', type: 'مكية', ayahs: 93, page: 385, hizb: 38 },
  { id: 28, nameAr: 'القصص', nameEs: 'Al-Qaṣaṣ', type: 'مكية', ayahs: 88, page: 394, hizb: 39 },
  { id: 29, nameAr: 'العنكبوت', nameEs: 'Al-‘Ankabūt', type: 'مكية', ayahs: 69, page: 405, hizb: 40 },
  { id: 30, nameAr: 'الروم', nameEs: 'Ar-Rūm', type: 'مكية', ayahs: 60, page: 413, hizb: 41 },
  { id: 31, nameAr: 'لقمان', nameEs: 'Luqmān', type: 'مكية', ayahs: 34, page: 420, hizb: 41 },
  { id: 32, nameAr: 'السجدة', nameEs: 'As-Sajdah', type: 'مكية', ayahs: 30, page: 424, hizb: 42 },
  { id: 33, nameAr: 'الأحزاب', nameEs: 'Al-Aḥzāb', type: 'مدنية', ayahs: 73, page: 427, hizb: 42 },
  { id: 34, nameAr: 'سبأ', nameEs: 'Saba’', type: 'مكية', ayahs: 54, page: 438, hizb: 43 },
  { id: 35, nameAr: 'فاطر', nameEs: 'Fāṭir', type: 'مكية', ayahs: 45, page: 445, hizb: 44 },
  { id: 36, nameAr: 'يس', nameEs: 'Yāsīn', type: 'مكية', ayahs: 83, page: 451, hizb: 44 },
  { id: 37, nameAr: 'الصافات', nameEs: 'Aṣ-Ṣāffāt', type: 'مكية', ayahs: 182, page: 457, hizb: 45 },
  { id: 38, nameAr: 'ص', nameEs: 'Ṣād', type: 'مكية', ayahs: 88, page: 465, hizb: 46 },
  { id: 39, nameAr: 'الزمر', nameEs: 'Az-Zumar', type: 'مكية', ayahs: 75, page: 471, hizb: 46 },
  { id: 40, nameAr: 'غافر', nameEs: 'Ghāfir', type: 'مكية', ayahs: 85, page: 480, hizb: 47 },
  { id: 41, nameAr: 'فصلت', nameEs: 'Fuṣṣilat', type: 'مكية', ayahs: 54, page: 490, hizb: 48 },
  { id: 42, nameAr: 'الشورى', nameEs: 'Ash-Shūrā', type: 'مكية', ayahs: 53, page: 496, hizb: 49 },
  { id: 43, nameAr: 'الزخرف', nameEs: 'Az-Zukhruf', type: 'مكية', ayahs: 89, page: 503, hizb: 49 },
  { id: 44, nameAr: 'الدخان', nameEs: 'Ad-Dukhān', type: 'مكية', ayahs: 59, page: 510, hizb: 50 },
  { id: 45, nameAr: 'الجاثية', nameEs: 'Al-Jāthiyah', type: 'مكية', ayahs: 37, page: 513, hizb: 50 },
  { id: 46, nameAr: 'الأحقاف', nameEs: 'Al-Aḥqāf', type: 'مكية', ayahs: 35, page: 517, hizb: 51 },
  { id: 47, nameAr: 'محمد', nameEs: 'Muḥammad', type: 'مدنية', ayahs: 38, page: 522, hizb: 51 },
  { id: 48, nameAr: 'الفتح', nameEs: 'Al-Fatḥ', type: 'مدنية', ayahs: 29, page: 527, hizb: 51 },
  { id: 49, nameAr: 'الحجرات', nameEs: 'Al-Ḥujurāt', type: 'مدنية', ayahs: 18, page: 532, hizb: 52 },
  { id: 50, nameAr: 'ق', nameEs: 'Qāf', type: 'مكية', ayahs: 45, page: 535, hizb: 52 },
  { id: 51, nameAr: 'الذاريات', nameEs: 'Adh-Dhāriyāt', type: 'مكية', ayahs: 60, page: 538, hizb: 52 },
  { id: 52, nameAr: 'الطور', nameEs: 'Aṭ-Ṭūr', type: 'مكية', ayahs: 49, page: 541, hizb: 53 },
  { id: 53, nameAr: 'النجم', nameEs: 'An-Najm', type: 'مكية', ayahs: 62, page: 543, hizb: 53 },
  { id: 54, nameAr: 'القمر', nameEs: 'Al-Qamar', type: 'مكية', ayahs: 55, page: 546, hizb: 53 },
  { id: 55, nameAr: 'الرحمن', nameEs: 'Ar-Raḥmān', type: 'مدنية', ayahs: 78, page: 550, hizb: 54 },
  { id: 56, nameAr: 'الواقعة', nameEs: 'Al-Wāqi‘ah', type: 'مكية', ayahs: 96, page: 553, hizb: 54 },
  { id: 57, nameAr: 'الحديد', nameEs: 'Al-Ḥadīd', type: 'مدنية', ayahs: 29, page: 557, hizb: 54 },
  { id: 58, nameAr: 'المجادلة', nameEs: 'Al-Mujādilah', type: 'مدنية', ayahs: 22, page: 562, hizb: 55 },
  { id: 59, nameAr: 'الحشر', nameEs: 'Al-Ḥashr', type: 'مدنية', ayahs: 24, page: 566, hizb: 55 },
  { id: 60, nameAr: 'الممتحنة', nameEs: 'Al-Mumtaḥanah', type: 'مدنية', ayahs: 13, page: 569, hizb: 55 },
  { id: 61, nameAr: 'الصف', nameEs: 'Aṣ-Ṣaff', type: 'مدنية', ayahs: 14, page: 572, hizb: 55 },
  { id: 62, nameAr: 'الجمعة', nameEs: 'Al-Jumu‘ah', type: 'مدنية', ayahs: 11, page: 574, hizb: 56 },
  { id: 63, nameAr: 'المنافقون', nameEs: 'Al-Munāfiqūn', type: 'مدنية', ayahs: 11, page: 576, hizb: 56 },
  { id: 64, nameAr: 'التغابن', nameEs: 'At-Taghābun', type: 'مدنية', ayahs: 18, page: 577, hizb: 56 },
  { id: 65, nameAr: 'الطلاق', nameEs: 'Aṭ-Ṭalāq', type: 'مدنية', ayahs: 12, page: 580, hizb: 56 },
  { id: 66, nameAr: 'التحريم', nameEs: 'At-Taḥrīm', type: 'مدنية', ayahs: 12, page: 582, hizb: 56 },
  { id: 67, nameAr: 'الملك', nameEs: 'Al-Mulk', type: 'مكية', ayahs: 30, page: 584, hizb: 57 },
  { id: 68, nameAr: 'القلم', nameEs: 'Al-Qalam', type: 'مكية', ayahs: 52, page: 587, hizb: 57 },
  { id: 69, nameAr: 'الحاقة', nameEs: 'Al-Ḥāqqah', type: 'مكية', ayahs: 52, page: 590, hizb: 57 },
  { id: 70, nameAr: 'المعارج', nameEs: 'Al-Ma‘ārij', type: 'مكية', ayahs: 44, page: 593, hizb: 57 },
  { id: 71, nameAr: 'نوح', nameEs: 'Nūḥ', type: 'مكية', ayahs: 28, page: 595, hizb: 57 },
  { id: 72, nameAr: 'الجن', nameEs: 'Al-Jinn', type: 'مكية', ayahs: 28, page: 597, hizb: 58 },
  { id: 73, nameAr: 'المزمل', nameEs: 'Al-Muzzammil', type: 'مكية', ayahs: 20, page: 599, hizb: 58 },
  { id: 74, nameAr: 'المدثر', nameEs: 'Al-Muddaththir', type: 'مكية', ayahs: 56, page: 601, hizb: 58 },
  { id: 75, nameAr: 'القيامة', nameEs: 'Al-Qiyāmah', type: 'مكية', ayahs: 40, page: 604, hizb: 58 },
  { id: 76, nameAr: 'الإنسان', nameEs: 'Al-Insān', type: 'مدنية', ayahs: 31, page: 605, hizb: 58 },
  { id: 77, nameAr: 'المرسلات', nameEs: 'Al-Mursalāt', type: 'مكية', ayahs: 50, page: 607, hizb: 58 },
  { id: 78, nameAr: 'النبأ', nameEs: 'An-Naba’', type: 'مكية', ayahs: 40, page: 609, hizb: 59 },
  { id: 79, nameAr: 'النازعات', nameEs: 'An-Nāzi‘āt', type: 'مكية', ayahs: 46, page: 611, hizb: 59 },
  { id: 80, nameAr: 'عبس', nameEs: '‘Abasa', type: 'مكية', ayahs: 42, page: 613, hizb: 59 },
  { id: 81, nameAr: 'التكوير', nameEs: 'At-Takwīr', type: 'مكية', ayahs: 29, page: 615, hizb: 59 },
  { id: 82, nameAr: 'الإنفطار', nameEs: 'Al-Infiṭār', type: 'مكية', ayahs: 19, page: 616, hizb: 59 },
  { id: 83, nameAr: 'المطففين', nameEs: 'Al-Muṭaffifīn', type: 'مكية', ayahs: 36, page: 617, hizb: 59 },
  { id: 84, nameAr: 'الإنشقاق', nameEs: 'Al-Inshiqāq', type: 'مكية', ayahs: 25, page: 618, hizb: 59 },
  { id: 85, nameAr: 'البروج', nameEs: 'Al-Burūj', type: 'مكية', ayahs: 22, page: 620, hizb: 59 },
  { id: 86, nameAr: 'الطارق', nameEs: 'Aṭ-Ṭāriq', type: 'مكية', ayahs: 17, page: 621, hizb: 59 },
  { id: 87, nameAr: 'الأعلى', nameEs: 'Al-A‘lā', type: 'مكية', ayahs: 19, page: 622, hizb: 60 },
  { id: 88, nameAr: 'الغاشية', nameEs: 'Al-Ghāshiyah', type: 'مكية', ayahs: 26, page: 623, hizb: 60 },
  { id: 89, nameAr: 'الفجر', nameEs: 'Al-Fajr', type: 'مكية', ayahs: 30, page: 624, hizb: 60 },
  { id: 90, nameAr: 'البلد', nameEs: 'Al-Balad', type: 'مكية', ayahs: 20, page: 625, hizb: 60 },
  { id: 91, nameAr: 'الشمس', nameEs: 'Ash-Shams', type: 'مكية', ayahs: 15, page: 626, hizb: 60 },
  { id: 92, nameAr: 'الليل', nameEs: 'Al-Layl', type: 'مكية', ayahs: 21, page: 627, hizb: 60 },
  { id: 93, nameAr: 'الضحى', nameEs: 'Aḍ-Ḍuḥā', type: 'مكية', ayahs: 11, page: 628, hizb: 60 },
  { id: 94, nameAr: 'الشرح', nameEs: 'Ash-Sharḥ', type: 'مكية', ayahs: 8, page: 628, hizb: 60 },
  { id: 95, nameAr: 'التين', nameEs: 'At-Tīn', type: 'مكية', ayahs: 8, page: 629, hizb: 60 },
  { id: 96, nameAr: 'العلق', nameEs: 'Al-‘Alaq', type: 'مكية', ayahs: 19, page: 629, hizb: 60 },
  { id: 97, nameAr: 'القدر', nameEs: 'Al-Qadr', type: 'مكية', ayahs: 5, page: 630, hizb: 60 },
  { id: 98, nameAr: 'البينة', nameEs: 'Al-Bayyinah', type: 'مدنية', ayahs: 8, page: 630, hizb: 60 },
  { id: 99, nameAr: 'الزلزلة', nameEs: 'Az-Zalzalah', type: 'مدنية', ayahs: 8, page: 632, hizb: 60 },
  { id: 100, nameAr: 'العاديات', nameEs: 'Al-‘Ādiyāt', type: 'مكية', ayahs: 11, page: 632, hizb: 60 },
  { id: 101, nameAr: 'القارعة', nameEs: 'Al-Qāri‘ah', type: 'مكية', ayahs: 11, page: 633, hizb: 60 },
  { id: 102, nameAr: 'التكاثر', nameEs: 'At-Takāthur', type: 'مكية', ayahs: 8, page: 633, hizb: 60 },
  { id: 103, nameAr: 'العصر', nameEs: 'Al-‘Aṣr', type: 'مكية', ayahs: 3, page: 634, hizb: 60 },
  { id: 104, nameAr: 'الهمزة', nameEs: 'Al-Humazah', type: 'مكية', ayahs: 9, page: 634, hizb: 60 },
  { id: 105, nameAr: 'الفيل', nameEs: 'Al-Fīl', type: 'مكية', ayahs: 5, page: 635, hizb: 60 },
  { id: 106, nameAr: 'قريش', nameEs: 'Quraysh', type: 'مكية', ayahs: 4, page: 635, hizb: 60 },
  { id: 107, nameAr: 'الماعون', nameEs: 'Al-Mā‘ūn', type: 'مكية', ayahs: 7, page: 636, hizb: 60 },
  { id: 108, nameAr: 'الكوثر', nameEs: 'Al-Kawthar', type: 'مكية', ayahs: 3, page: 636, hizb: 60 },
  { id: 109, nameAr: 'الكافرون', nameEs: 'Al-Kāfirūn', type: 'مكية', ayahs: 6, page: 637, hizb: 60 },
  { id: 110, nameAr: 'النصر', nameEs: 'An-Naṣr', type: 'مدنية', ayahs: 3, page: 637, hizb: 60 },
  { id: 111, nameAr: 'المسد', nameEs: 'Al-Masad', type: 'مكية', ayahs: 5, page: 637, hizb: 60 },
  { id: 112, nameAr: 'الإخلاص', nameEs: 'Al-Ikhlāṣ', type: 'مكية', ayahs: 4, page: 638, hizb: 60 },
  { id: 113, nameAr: 'الفلق', nameEs: 'Al-Falaq', type: 'مكية', ayahs: 5, page: 638, hizb: 60 },
  { id: 114, nameAr: 'الناس', nameEs: 'An-Nās', type: 'مكية', ayahs: 6, page: 638, hizb: 60 }
];

const quranAhzab = [
  { id: 1, nameAr: 'الحزب 1', nameEs: 'Hizb 1', page: 1, surahAr: 'الفاتحة', surahEs: 'Al-Fātiḥah' },
  { id: 2, nameAr: 'الحزب 2', nameEs: 'Hizb 2', page: 12, surahAr: 'البقرة', surahEs: 'Al-Baqarah' },
  { id: 3, nameAr: 'الحزب 3', nameEs: 'Hizb 3', page: 21, surahAr: 'البقرة', surahEs: 'Al-Baqarah' },
  { id: 4, nameAr: 'الحزب 4', nameEs: 'Hizb 4', page: 31, surahAr: 'البقرة', surahEs: 'Al-Baqarah' },
  { id: 5, nameAr: 'الحزب 5', nameEs: 'Hizb 5', page: 40, surahAr: 'البقرة / آل عمران', surahEs: 'Al-Baqarah / Āli ‘Imrān' },
  { id: 6, nameAr: 'الحزب 6', nameEs: 'Hizb 6', page: 50, surahAr: 'آل عمران', surahEs: 'Āli ‘Imrān' },
  { id: 7, nameAr: 'الحزب 7', nameEs: 'Hizb 7', page: 60, surahAr: 'آل عمران', surahEs: 'Āli ‘Imrān' },
  { id: 8, nameAr: 'الحزب 8', nameEs: 'Hizb 8', page: 70, surahAr: 'النساء', surahEs: 'An-Nisā’' },
  { id: 9, nameAr: 'الحزب 9', nameEs: 'Hizb 9', page: 79, surahAr: 'النساء', surahEs: 'An-Nisā’' },
  { id: 10, nameAr: 'الحزب 10', nameEs: 'Hizb 10', page: 89, surahAr: 'النساء', surahEs: 'An-Nisā’' },
  { id: 11, nameAr: 'الحزب 11', nameEs: 'Hizb 11', page: 99, surahAr: 'المائدة', surahEs: 'Al-Mā’idah' },
  { id: 12, nameAr: 'الحزب 12', nameEs: 'Hizb 12', page: 109, surahAr: 'المائدة', surahEs: 'Al-Mā’idah' },
  { id: 13, nameAr: 'الحزب 13', nameEs: 'Hizb 13', page: 119, surahAr: 'الأنعام', surahEs: 'Al-An‘ām' },
  { id: 14, nameAr: 'الحزب 14', nameEs: 'Hizb 14', page: 130, surahAr: 'الأنعام', surahEs: 'Al-An‘ām' },
  { id: 15, nameAr: 'الحزب 15', nameEs: 'Hizb 15', page: 141, surahAr: 'الأعراف', surahEs: 'Al-A‘rāf' },
  { id: 16, nameAr: 'الحزب 16', nameEs: 'Hizb 16', page: 150, surahAr: 'الأعراف', surahEs: 'Al-A‘rāf' },
  { id: 17, nameAr: 'الحزب 17', nameEs: 'Hizb 17', page: 161, surahAr: 'الأعراف', surahEs: 'Al-A‘rāf' },
  { id: 18, nameAr: 'الحزب 18', nameEs: 'Hizb 18', page: 172, surahAr: 'الأنفال', surahEs: 'Al-Anfāl' },
  { id: 19, nameAr: 'الحزب 19', nameEs: 'Hizb 19', page: 181, surahAr: 'التوبة', surahEs: 'At-Tawbah' },
  { id: 20, nameAr: 'الحزب 20', nameEs: 'Hizb 20', page: 192, surahAr: 'التوبة', surahEs: 'At-Tawbah' },
  { id: 21, nameAr: 'الحزب 21', nameEs: 'Hizb 21', page: 201, surahAr: 'يونس', surahEs: 'Yūnus' },
  { id: 22, nameAr: 'الحزب 22', nameEs: 'Hizb 22', page: 211, surahAr: 'هود', surahEs: 'Hūd' },
  { id: 23, nameAr: 'الحزب 23', nameEs: 'Hizb 23', page: 222, surahAr: 'هود', surahEs: 'Hūd' },
  { id: 24, nameAr: 'الحزب 24', nameEs: 'Hizb 24', page: 231, surahAr: 'يوسف', surahEs: 'Yūsuf' },
  { id: 25, nameAr: 'الحزب 25', nameEs: 'Hizb 25', page: 242, surahAr: 'الرعد', surahEs: 'Ar-Ra‘d' },
  { id: 26, nameAr: 'الحزب 26', nameEs: 'Hizb 26', page: 253, surahAr: 'إبراهيم', surahEs: 'Ibrāhīm' },
  { id: 27, nameAr: 'الحزب 27', nameEs: 'Hizb 27', page: 263, surahAr: 'الحجر', surahEs: 'Al-Ḥijr' },
  { id: 28, nameAr: 'الحزب 28', nameEs: 'Hizb 28', page: 274, surahAr: 'النحل', surahEs: 'An-Naḥl' },
  { id: 29, nameAr: 'الحزب 29', nameEs: 'Hizb 29', page: 284, surahAr: 'الإسراء', surahEs: 'Al-Isrā’' },
  { id: 30, nameAr: 'الحزب 30', nameEs: 'Hizb 30', page: 295, surahAr: 'الكهف', surahEs: 'Al-Kahf' },
  { id: 31, nameAr: 'الحزب 31', nameEs: 'Hizb 31', page: 305, surahAr: 'مريم', surahEs: 'Maryam' },
  { id: 32, nameAr: 'الحزب 32', nameEs: 'Hizb 32', page: 317, surahAr: 'طه', surahEs: 'Ṭāhā' },
  { id: 33, nameAr: 'الحزب 33', nameEs: 'Hizb 33', page: 327, surahAr: 'الأنبياء', surahEs: 'Al-Anbiya’' },
  { id: 34, nameAr: 'الحزب 34', nameEs: 'Hizb 34', page: 337, surahAr: 'الحج', surahEs: 'Al-Ḥajj' },
  { id: 35, nameAr: 'الحزب 35', nameEs: 'Hizb 35', page: 347, surahAr: 'المؤمنون', surahEs: 'Al-Mu’minūn' },
  { id: 36, nameAr: 'الحزب 36', nameEs: 'Hizb 36', page: 358, surahAr: 'النور / الفرقان', surahEs: 'An-Nūr / Al-Furqān' },
  { id: 37, nameAr: 'الحزب 37', nameEs: 'Hizb 37', page: 369, surahAr: 'الفرقان / الشعراء', surahEs: 'Al-Furqān / Ash-Shu‘arā’' },
  { id: 38, nameAr: 'الحزب 38', nameEs: 'Hizb 38', page: 379, surahAr: 'النمل', surahEs: 'An-Naml' },
  { id: 39, nameAr: 'الحزب 39', nameEs: 'Hizb 39', page: 390, surahAr: 'القصص', surahEs: 'Al-Qaṣaṣ' },
  { id: 40, nameAr: 'الحزب 40', nameEs: 'Hizb 40', page: 400, surahAr: 'العنكبوت', surahEs: 'Al-‘Ankabūt' },
  { id: 41, nameAr: 'الحزب 41', nameEs: 'Hizb 41', page: 410, surahAr: 'الروم', surahEs: 'Ar-Rūm' },
  { id: 42, nameAr: 'الحزب 42', nameEs: 'Hizb 42', page: 422, surahAr: 'السجدة', surahEs: 'As-Sajdah' },
  { id: 43, nameAr: 'الحزب 43', nameEs: 'Hizb 43', page: 432, surahAr: 'سبأ', surahEs: 'Saba’' },
  { id: 44, nameAr: 'الحزب 44', nameEs: 'Hizb 44', page: 441, surahAr: 'فاطر / يس', surahEs: 'Fāṭir / Yāsīn' },
  { id: 45, nameAr: 'الحزب 45', nameEs: 'Hizb 45', page: 453, surahAr: 'الصافات', surahEs: 'Aṣ-Ṣāffāt' },
  { id: 46, nameAr: 'الحزب 46', nameEs: 'Hizb 46', page: 463, surahAr: 'ص / الزمر', surahEs: 'Ṣād / Az-Zumar' },
  { id: 47, nameAr: 'الحزب 47', nameEs: 'Hizb 47', page: 475, surahAr: 'غافر', surahEs: 'Ghāfir' },
  { id: 48, nameAr: 'الحزب 48', nameEs: 'Hizb 48', page: 485, surahAr: 'فصلت', surahEs: 'Fuṣṣilat' },
  { id: 49, nameAr: 'الحزب 49', nameEs: 'Hizb 49', page: 495, surahAr: 'الشورى', surahEs: 'Ash-Shūrā' },
  { id: 50, nameAr: 'الحزب 50', nameEs: 'Hizb 50', page: 505, surahAr: 'الزخرف / الدخان', surahEs: 'Az-Zukhruf / Ad-Dukhān' },
  { id: 51, nameAr: 'الحزب 51', nameEs: 'Hizb 51', page: 517, surahAr: 'الأحقاف / محمد', surahEs: 'Al-Aḥqāf / Muḥammad' },
  { id: 52, nameAr: 'الحزب 52', nameEs: 'Hizb 52', page: 529, surahAr: 'الفتح / ق', surahEs: 'Al-Fatḥ / Qāf' },
  { id: 53, nameAr: 'الحزب 53', nameEs: 'Hizb 53', page: 539, surahAr: 'الذاريات / الطور', surahEs: 'Adh-Dhāriyāt / Aṭ-Ṭūr' },
  { id: 54, nameAr: 'الحزب 54', nameEs: 'Hizb 54', page: 550, surahAr: 'الرحمن / الواقعة', surahEs: 'Ar-Raḥmān / Al-Wāqi‘ah' },
  { id: 55, nameAr: 'الحزب 55', nameEs: 'Hizb 55', page: 562, surahAr: 'المجادلة', surahEs: 'Al-Mujādilah' },
  { id: 56, nameAr: 'الحزب 56', nameEs: 'Hizb 56', page: 574, surahAr: 'الجمعة', surahEs: 'Al-Jumu‘ah' },
  { id: 57, nameAr: 'الحزب 57', nameEs: 'Hizb 57', page: 584, surahAr: 'الملك', surahEs: 'Al-Mulk' },
  { id: 58, nameAr: 'الحزب 58', nameEs: 'Hizb 58', page: 597, surahAr: 'الجن', surahEs: 'Al-Jinn' },
  { id: 59, nameAr: 'الحزب 59', nameEs: 'Hizb 59', page: 609, surahAr: 'النبأ', surahEs: 'An-Naba’' },
  { id: 60, nameAr: 'الحزب 60', nameEs: 'Hizb 60', page: 622, surahAr: 'الأعلى', surahEs: 'Al-A‘lā' }
];

function showQuranView(skipPushState = false) {
  hideAllViews();
  document.getElementById('quranView')?.classList.remove('hidden');
  updateContinueReadingCard();
  if (!skipPushState && window.history && window.history.pushState) {
    try {
      window.history.pushState({ view: 'quran' }, '', '#quran');
    } catch (e) {}
  }
}

function showQuranSurahsView(skipPushState = false) {
  hideAllViews();
  document.getElementById('quranSurahsView')?.classList.remove('hidden');
  renderSurahsList();
  if (!skipPushState && window.history && window.history.pushState) {
    try {
      window.history.pushState({ view: 'quranSurahs' }, '', '#quranSurahs');
    } catch (e) {}
  }
}

function showQuranAhzabView(skipPushState = false) {
  hideAllViews();
  document.getElementById('quranAhzabView')?.classList.remove('hidden');
  renderAhzabList();
  if (!skipPushState && window.history && window.history.pushState) {
    try {
      window.history.pushState({ view: 'quranAhzab' }, '', '#quranAhzab');
    } catch (e) {}
  }
}

function renderAhzabList() {
  const container = document.getElementById('ahzabListContainer');
  if (!container) return;
  container.innerHTML = '';
  const isEs = currentLang === 'es';

  quranAhzab.forEach(h => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl border border-amber-200 dark:border-slate-700 hover:border-amber-500 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-1 cursor-pointer active:scale-95';
    card.onclick = () => openQuranPage(h.page);

    const hizbTitle = isEs ? `Hizb ${h.id}` : `الحزب ${h.id}`;
    const surahText = isEs ? h.surahEs : h.surahAr;
    const pageText = isEs ? `Pág. ${h.page}` : `صفحة ${h.page}`;

    card.innerHTML = `
      <span class="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-extrabold flex items-center justify-center text-xs border border-amber-300 dark:border-amber-800 shadow-sm">
        ${h.id}
      </span>
      <span class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm mt-1">${hizbTitle}</span>
      <span class="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">${surahText}</span>
      <span class="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800 mt-1">
        ${pageText}
      </span>
    `;
    container.appendChild(card);
  });
}

function updateContinueReadingCard() {
  const lastPage = parseInt(safeGetStorage('quran_last_page_v1')) || 1;
  const info = getSurahInfoForPage(lastPage);
  const isEs = currentLang === 'es';

  const subEl = document.getElementById('tabContinueSub');
  if (subEl) {
    subEl.innerText = isEs ? `Pág. ${lastPage} - ${info.title}` : `صفحة ${lastPage} - ${info.title}`;
  }
}

function continueLastReading() {
  const lastPage = parseInt(safeGetStorage('quran_last_page_v1')) || 1;
  openQuranPage(lastPage);
}

function renderSurahsList(query = '') {
  const container = document.getElementById('surahsListContainer');
  if (!container) return;
  container.innerHTML = '';
  const isEs = currentLang === 'es';

  const q = query.trim().toLowerCase();
  const filtered = quranSurahs.filter(s => {
    if (!q) return true;
    return s.id.toString() === q ||
           s.nameAr.includes(q) ||
           s.nameEs.toLowerCase().includes(q) ||
           s.page.toString() === q;
  });

  filtered.forEach(s => {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition flex items-center justify-between cursor-pointer';
    card.onclick = () => openQuranPage(s.page);

    const titleText = isEs ? `Sura ${s.nameEs}` : `سورة ${s.nameAr}`;
    const subTitleText = isEs ? `(${s.nameAr})` : `(${s.nameEs})`;
    const pageText = isEs ? `Pág. ${s.page}` : `صفحة ${s.page}`;
    const typeText = isEs ? (s.type === 'مكية' ? 'Mequí' : 'Mediní') : s.type;
    const hizbText = isEs ? `Hizb ${s.hizb}` : `الحزب ${s.hizb}`;
    const ayahsText = isEs ? `${s.ayahs} Ayyāt` : `${s.ayahs} آية`;

    card.innerHTML = `
      <div class="flex items-center space-x-3 space-x-reverse">
        <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-extrabold flex items-center justify-center text-sm shadow-sm">
          ${s.id}
        </div>
        <div>
          <div class="font-bold text-slate-800 dark:text-slate-100 text-base flex items-center gap-2">
            <span>${titleText}</span>
            <span class="text-xs font-normal text-slate-500 dark:text-slate-300">${subTitleText}</span>
          </div>
          <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2">
            <span class="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">${typeText}</span>
            <span>• ${ayahsText}</span>
            <span class="text-amber-700 dark:text-amber-400 font-medium">• ${hizbText}</span>
          </div>
        </div>
      </div>

      <div class="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800">
        ${pageText}
      </div>
    `;
    container.appendChild(card);
  });
}

function filterSurahs() {
  const input = document.getElementById('quranSearchInput');
  renderSurahsList(input ? input.value : '');
}

function getHizbForPage(page) {
  let hizbNum = 1;
  for (let i = 0; i < quranAhzab.length; i++) {
    if (quranAhzab[i].page <= page) {
      hizbNum = quranAhzab[i].id;
    } else {
      break;
    }
  }
  return hizbNum;
}

function getSurahInfoForPage(page) {
  let current = quranSurahs[0];
  for (let i = 0; i < quranSurahs.length; i++) {
    if (quranSurahs[i].page <= page) {
      current = quranSurahs[i];
    } else {
      break;
    }
  }
  const isEs = currentLang === 'es';
  return {
    title: isEs ? `Sura ${current.nameEs} (${current.nameAr})` : `سورة ${current.nameAr} (${current.nameEs})`,
    hizb: getHizbForPage(page)
  };
}

let currentQuranPage = 1;
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function openQuranPage(pageNumber, skipPushState = false) {
  hideAllViews();
  document.getElementById('quranReaderView')?.classList.remove('hidden');

  const pageNum = Math.min(Math.max(1, parseInt(pageNumber) || 1), 638);
  displayQuranPage(pageNum);

  if (!skipPushState && window.history && window.history.pushState) {
    try {
      window.history.pushState({ view: 'quranReader', page: pageNum }, '', `#quran-page-${pageNum}`);
    } catch (e) {}
  }
}

function displayQuranPage(pageNum, animDir = null) {
  currentQuranPage = Math.min(Math.max(1, parseInt(pageNum) || 1), 638);
  safeSetStorage('quran_last_page_v1', currentQuranPage);

  const isEs = currentLang === 'es';
  const t = uiTexts[currentLang];

  const imgEl = document.getElementById('quranPageImg');
  if (imgEl) {
    imgEl.style.transition = 'none';
    if (animDir === 'next') {
      imgEl.style.transform = 'translateX(25px)';
    } else if (animDir === 'prev') {
      imgEl.style.transform = 'translateX(-25px)';
    }
    imgEl.style.opacity = '0.2';
    imgEl.src = `quran_pages/page${currentQuranPage}.png`;

    imgEl.onload = () => {
      imgEl.style.transition = 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'translateX(0)';
    };
    imgEl.onerror = () => {
      imgEl.style.transition = 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'translateX(0)';
    };
  }

  const pageLabel = document.getElementById('pageLabelText');
  if (pageLabel) pageLabel.innerText = t.pageLabelText || (isEs ? 'Página' : 'صفحة');

  const pageOf = document.getElementById('pageOfText');
  if (pageOf) pageOf.innerText = t.pageOfText || (isEs ? 'de 638' : 'من 638');

  const numDisplay = document.getElementById('quranPageNumDisplay');
  if (numDisplay) numDisplay.innerText = currentQuranPage;

  const info = getSurahInfoForPage(currentQuranPage);

  const hizbDisplay = document.getElementById('quranHizbDisplay');
  if (hizbDisplay) hizbDisplay.innerText = isEs ? `Hizb ${info.hizb}` : `الحزب ${info.hizb}`;

  const surahDisplay = document.getElementById('quranSurahDisplay');
  if (surahDisplay) surahDisplay.innerText = info.title;

  const input = document.getElementById('jumpPageInput');
  if (input) input.value = currentQuranPage;

  const nextBtnText = document.getElementById('nextBtnText');
  if (nextBtnText) nextBtnText.innerText = t.nextPageBtn || (isEs ? 'Página siguiente ➔' : 'الصفحة التالية ➔');

  const prevBtnText = document.getElementById('prevBtnText');
  if (prevBtnText) prevBtnText.innerText = t.prevPageBtn || (isEs ? '⬅ Página anterior' : '⬅ الصفحة السابقة');

  const swipeHint = document.getElementById('swipeHint');
  if (swipeHint) swipeHint.innerText = t.swipeHintText || (isEs ? 'Desliza a la derecha para página siguiente ➔' : 'اسحب لليمين للصفحة التالية ➔');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  setupQuranTouchSwipe();
}

function nextQuranPage() {
  if (currentQuranPage < 638) {
    displayQuranPage(currentQuranPage + 1, 'next');
  } else {
    showToast(currentLang === 'es' ? 'Has llegado a la última página' : 'وصلت إلى نهاية المصحف الشريف');
  }
}

function prevQuranPage() {
  if (currentQuranPage > 1) {
    displayQuranPage(currentQuranPage - 1, 'prev');
  } else {
    showToast(currentLang === 'es' ? 'Esta es la primera página' : 'هذه هي الصفحة الأولى');
  }
}

function jumpToInputPage() {
  const input = document.getElementById('jumpPageInput');
  if (!input || input.value.trim() === '') {
    showToast(currentLang === 'es' ? 'Introduce un número de página entre 1 y 638.' : 'أدخل رقم صفحة من 1 إلى 638.');
    if (input) input.focus();
    return;
  }
  const page = Number(input.value);
  if (!Number.isInteger(page) || page < 1 || page > 638) {
    showToast(currentLang === 'es' ? 'El número de página debe estar entre 1 y 638.' : 'يجب أن يكون رقم الصفحة بين 1 و638.');
    input.focus();
    input.select();
    return;
  }
  openQuranPage(page);
}
function setupQuranTouchSwipe() {
  const wrapper = document.getElementById('quranImageWrapper');
  if (!wrapper || wrapper.dataset.swipeSetup) return;

  wrapper.dataset.swipeSetup = 'true';

  wrapper.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  wrapper.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches.length === 1) {
      touchEndX = e.changedTouches[0].clientX;
      touchEndY = e.changedTouches[0].clientY;
      handleQuranSwipeGesture();
    }
  }, { passive: true });
}

function handleQuranSwipeGesture() {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaX) > 35 && Math.abs(deltaY) < 80) {
    if (deltaX > 0) {
      // Arrastrar hacia la derecha (Swipe Right ➔) -> Ir a la Página Siguiente (Libro Árabe)
      nextQuranPage();
    } else {
      // Arrastrar hacia la izquierda (Swipe Left ⬅) -> Ir a la Página Anterior
      prevQuranPage();
    }
  }
}
