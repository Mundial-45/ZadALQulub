#!/usr/bin/env python3
"""Construye quran_tarjama_<id>.js a partir de un CSV de QuranEnc (numeracion Hafs),
reasignando cada aya Hafs a la aya del Mushaf Warsh (tools/warsh_to_hafs.json, derivado de
quran-ws/quran-text ayah-map, CC BY 4.0). Los textos NO se modifican: si una aya Warsh abarca
varias ayas Hafs se muestran enteras, una tras otra.
Uso: build_tarjama.py <csv> <salida.js> <variable JS>"""
import csv, json, sys, os
csv_path, out_path, var = sys.argv[1:4]
rows = list(csv.reader(open(csv_path, encoding='utf-8')))
head = [r for r in rows if r and r[0].startswith('Translation Info')]
info = rows[0][0] if rows else ''
h = next(i for i, r in enumerate(rows) if r[:3] == ['id', 'sura', 'aya'])
tr = {}
for r in rows[h + 1:]:
    if len(r) >= 4 and r[1].isdigit():
        tr[(int(r[1]), int(r[2]))] = (r[3], r[4] if len(r) > 4 else '')
mp = json.load(open(os.path.join(os.path.dirname(__file__), 'warsh_to_hafs.json')))
data = []
for s in range(1, 115):
    arr = []
    for hs in mp[str(s)]:
        t = '\n'.join(tr[(s, a)][0] for a in hs)
        f = '\n'.join(x for x in (tr[(s, a)][1] for a in hs) if x)
        arr.append([t, f] if f else [t])
    data.append(arr)
src = [l[2:].strip() for l in info.split('\n') if l.startswith('# ') and ('Translation ID' in l or 'Source' in l or 'Last update' in l or 'Language' in l)]
open(out_path, 'w', encoding='utf-8').write('// ' + ' | '.join(src) + '\n// Textos de QuranEnc sin modificar; ayas reagrupadas a la numeracion Warsh.\nwindow.' + var + '=' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n')
print(out_path, os.path.getsize(out_path))
