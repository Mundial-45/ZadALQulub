import json,sys,re
sys.path.insert(0,'/home/claude/work')
import guia_data, asma_data
import madh as MADH
FIX={'Al-Jabīr':'Al-Khabīr','Al-Jāliq':'Al-Khāliq','Al-Jallāq':'Al-Khallāq','Al-Ājir':'Al-Ākhir','Al-Ŷabbār':'Al-Jabbār','Al-Muŷīb':'Al-Mujīb','Al-Maŷīd':'Al-Majīd','Al-Ŷamīl':'Al-Jamīl','Al-Ŷawād':'Al-Jawād','Al-Muʾajjir':'Al-Muʾakhkhir','Al-Wāriz':'Al-Wārith'}
def module(var,mid,title_key,groups,extra):
    body=json.dumps(groups,ensure_ascii=False,indent=2)
    body='\n'.join(('    '+l if i else l) for i,l in enumerate(body.split('\n')))
    return f"""// {mid}.js — datos de la sección (se pueden editar desde la app con el botón Editar).
    const {var} = {body};

(function (global) {{
  const groups = {var};
  const sectionModule = {{
    id: '{mid}',
    getGroups: function () {{ return groups; }},
    findGroup: function (groupId) {{ return groups.find(function (group) {{ return group.id === groupId; }}) || null; }},
    getTitle: function (texts) {{ return texts.{title_key}; }},
    isDevotional: true,
    isQuranItem: function () {{ return false; }},
{extra}
    open: function (skipPushState) {{
      if (typeof global.showSection === 'function') global.showSection('{mid}', !!skipPushState);
    }}
  }};
  global.ZadSectionModules = global.ZadSectionModules || {{}};
  global.ZadSectionModules['{mid}'] = sectionModule;
}})(window);
"""
# guía
MALIKI_ONLY={'سُنَنُ الصَّلَاةِ الْمُؤَكَّدَةُ','هَلْ تَقُومُ بِتَكْبِيرٍ؟','أَمْثِلَةٌ: الظُّهْرُ وَالْعَصْرُ وَالْعِشَاءُ','أَمْثِلَةٌ: الْمَغْرِبُ وَالصُّبْحُ','إِذَا نَسِيتَ سُجُودَ السَّهْوِ'}
TES={
'guia_intro':['Guía de la purificación y la oración (las cuatro escuelas)','Categorías de los actos'],
'guia_wudu':['La virtud del wudu','Los actos obligatorios del wudu (siete)','Sunnas y actos recomendados del wudu','La intención y lavar las manos','Enjuagar la boca y la nariz','Lavar la cara','Lavar los brazos hasta los codos','Pasar las manos por la cabeza','Pasar las manos por las orejas','Lavar los pies hasta los tobillos','Lo que se dice después del wudu','Lo que anula el wudu'],
'guia_ghusl':['Lo que hace obligatorio el ghusl','Actos obligatorios y sunnas del ghusl','Cómo se hace el ghusl'],
'guia_tayammum':['¿Cuándo se hace tayammum?','Cómo se hace el tayammum','Pasar la mano sobre el calzado (masḥ ʿalal-juffayn)'],
'guia_shurut':['Condiciones de la oración','Pilares (obligatorios) de la oración','Sunnas confirmadas de la oración'],
'guia_sifa':['La intención','El takbīr de entrada: «Allāhu akbar»','De pie: la posición de las manos','La recitación: Al-Fātiḥa y una sura','La inclinación (rukūʿ)','Incorporarse de la inclinación','La postración (suŷūd)','Sentado entre las dos postraciones','El tashahhud','Bendiciones por el Profeta ﷺ y súplica','El saludo final (salām)','El qunūt en la oración del Fajr'],
'guia_rakaat':['Las cinco oraciones','La ragība del Fajr, el shafʿ y el witr'],
'guia_sahw':['¿Cuándo se hace la postración del olvido?','Cómo se hace la postración del olvido','Casos antes del salām (por omisión)','Casos después del salām (por añadido)','Si se olvida un pilar','Si olvidas el primer tashahhud y te levantas','Si olvidas la postración del olvido'],
'guia_tarqi':['¿Cuándo alcanzas la rakʿa?','La regla: recuperar la recitación y continuar los actos','¿Te levantas con takbīr?','Ejemplos: Ẓuhr, ʿAṣr e ʿIshāʾ','Ejemplos: Maghrib y Fajr','El masbūq y la postración del olvido'],
}
G=[];n=0
for g in guia_data.GROUPS:
    items=[]
    for it in g['items']:
        t=it['t'];m=re.match(r'^([٠-٩]+)\. ',t)
        o={'isInfo':True,'text':t[m.end():] if m else t}
        o['titleEs']=TES[g['id']][len(items)]
        if it['t'] in MALIKI_ONLY:
            o['note']='الْمَذْهَبُ الْمَالِكِيُّ';o['noteEs']='Escuela malikí'
        if m:
            o['note']='الْخُطْوَةُ '+m.group(1);o['noteEs']='Paso '+str(int(m.group(1).translate(str.maketrans('٠١٢٣٤٥٦٧٨٩','0123456789'))))
        # imágenes desactivadas por ahora
        if it.get('la'):o['latin']=it['la']
        if it['t'] in MADH.M:
            m=MADH.M[it['t']]
            o['madhahib']=[{'id':'maliki','ar':it['ar'],'es':it['es']}]+[{'id':k,'ar':m[k][0],'es':m[k][1]} for k in ('hanafi','shafii','hanbali')]
        else:
            o['explanationAr']=it['ar'];o['explanationEs']=it['es']
        items.append(o)
    G.append({'id':g['id'],'titleAr':g['ar'],'titleEs':g['es'],'items':items})
extra_g="""    getCountUnit: function (isEs) { return isEs ? 'apartados' : 'فقرات'; },"""
open('/home/claude/zadalqulub/guia.js','w').write(module('guiaData','guia','guiaSectionTitle',G,extra_g))
# nombres
ar_digits=str.maketrans('0123456789','٠١٢٣٤٥٦٧٨٩')
allnames=[(x,'q') for x in asma_data.QURAN]+[(x,'s') for x in asma_data.SUNNA]
def item(i,x,src):
    ar,la,es,eAr,eEs=x
    la=FIX.get(la,la)
    return {'itemNumber':i,'text':ar,'latin':la,'explanationAr':eAr,'explanationEs':f'{es}\n{eEs}',
            'note':'وَرَدَ فِي الْقُرْآنِ' if src=='q' else 'وَرَدَ فِي السُّنَّةِ','noteEs':'En el Corán' if src=='q' else 'En la Sunna'}
intro={'isInfo':True,'text':'أَسْمَاءُ اللَّهِ الْحُسْنَى',
 'explanationAr':'• قَالَ اللَّهُ تَعَالَى: ﴿وَلِلَّهِ ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَىٰ فَٱدۡعُوهُ بِهَا﴾ [الأعراف: 180].\n• وَقَالَ النَّبِيُّ ﷺ: «إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةً إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ» (البخاري ومسلم). وَإِحْصَاؤُهَا: حِفْظُهَا، وَفَهْمُ مَعَانِيهَا، وَالْإِيمَانُ بِهَا، وَدُعَاءُ اللَّهِ بِهَا، وَالْعَمَلُ بِمُقْتَضَاهَا.\n• وَأَسْمَاءُ اللَّهِ غَيْرُ مَحْصُورَةٍ فِي تِسْعَةٍ وَتِسْعِينَ، لِقَوْلِهِ ﷺ: «أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ» (أحمد).\n• لَمْ يَصِحَّ عَنِ النَّبِيِّ ﷺ تَعْيِينُ هَذِهِ الْأَسْمَاءِ، وَالسَّرْدُ الْمَشْهُورُ فِي رِوَايَةِ التِّرْمِذِيِّ ضَعَّفَهُ أَكْثَرُ أَهْلِ الْعِلْمِ. وَهَذِهِ الْقَائِمَةُ مِمَّا جَمَعَهُ الشَّيْخُ مُحَمَّدُ بْنُ صَالِحٍ الْعُثَيْمِينُ رَحِمَهُ اللَّهُ فِي «الْقَوَاعِدِ الْمُثْلَى» مِنَ الْكِتَابِ وَالسُّنَّةِ الصَّحِيحَةِ.\n• نُثْبِتُ هَذِهِ الْأَسْمَاءَ وَمَا تَضَمَّنَتْهُ مِنَ الصِّفَاتِ عَلَى مَا يَلِيقُ بِجَلَالِ اللَّهِ، مِنْ غَيْرِ تَحْرِيفٍ وَلَا تَعْطِيلٍ، وَمِنْ غَيْرِ تَكْيِيفٍ وَلَا تَمْثِيلٍ: ﴿لَيۡسَ كَمِثۡلِهِۦ شَيۡءٞۖ وَهُوَ ٱلسَّمِيعُ ٱلۡبَصِيرُ﴾ [الشورى: 11].',
 'explanationEs':'• Allah dice: «A Allah pertenecen los nombres más hermosos; invocadle, pues, con ellos» [Al-Aʿrāf: 180].\n• El Profeta ﷺ dijo: «Allah tiene noventa y nueve nombres, cien menos uno; quien los abarque entrará en el Paraíso» (Al-Bujari y Muslim). Abarcarlos significa memorizarlos, comprender su sentido, creer en ellos, invocar a Allah con ellos y actuar conforme a lo que implican.\n• Los Nombres de Allah no se limitan a noventa y nueve, pues el Profeta ﷺ dijo en una súplica: «…o que has reservado en Tu conocimiento de lo oculto» (Ahmad).\n• No está probado que el Profeta ﷺ enumerara estos nombres; la lista famosa de la narración de At-Tirmidhi la consideran débil la mayoría de los sabios. Esta lista es la que reunió el shaij Muhammad ibn Sālih al-ʿUzaymín en «Al-Qawāʿid al-Muzlā», a partir del Corán y la Sunna auténtica.\n• Afirmamos estos Nombres y los Atributos que contienen tal como corresponde a la majestad de Allah, sin alterar su sentido ni negarlos, y sin preguntar «cómo» ni compararlos con la creación: «No hay nada como Él, y Él es el que todo lo oye y todo lo ve» [Ash-Shūrā: 11].'}
ranges=[(0,25),(25,50),(50,81),(81,99)]
titles=[('الْأَسْمَاءُ مِنْ 1 إِلَى 25','Nombres 1–25'),('الْأَسْمَاءُ مِنْ 26 إِلَى 50','Nombres 26–50'),('الْأَسْمَاءُ مِنْ 51 إِلَى 81','Nombres 51–81'),('الْأَسْمَاءُ مِنْ 82 إِلَى 99 (مِنَ السُّنَّةِ)','Nombres 82–99 (de la Sunna)')]
A=[{'id':'asma_intro','titleAr':'مُقَدِّمَةٌ','titleEs':'Introducción','items':[intro]}]
for (a,b),(tar,tes) in zip(ranges,titles):
    A.append({'id':f'asma_{a+1}_{b}','titleAr':tar,'titleEs':tes,'items':[item(i+1,*allnames[i]) for i in range(a,b)]})
extra_a="""    getCountUnit: function (isEs) { return isEs ? 'nombres' : 'أسماء'; },
    getItemLabel: function (isEs, n) { return isEs ? ('Nombre n.º ' + n) : ('الاسم رقم ' + n); },"""
open('/home/claude/zadalqulub/asma.js','w').write(module('asmaData','asma','asmaSectionTitle',A,extra_a))
print('ok',sum(len(g['items']) for g in G),sum(len(g['items']) for g in A))
