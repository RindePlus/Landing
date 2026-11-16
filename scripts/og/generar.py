"""Genera las imágenes para compartir links (Open Graph, 1200×630).

Una por página (inicio, nosotros, educacion) y por idioma, en public/og/.
Arma cada imagen como HTML con las fuentes y el logo del sitio y la
captura con Edge sin ventana.

    python scripts/og/generar.py

Usa Microsoft Edge (Windows). Si cambian los textos, los colores o el logo,
editar este archivo y volver a correrlo.
"""

import html
import shutil
import subprocess
import tempfile
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
SALIDA = RAIZ / 'public' / 'og'
EDGE = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

# Colores del sitio (src/index.css) y del manual de marca.
MARINO = '#0c2154'
AZUL = '#1a62e2'
AMARILLO = '#e5bd13'
FONDO = '#f3f2ee'
TARJETA = '#fbfaf8'
TINTA = '#161b24'
GRIS = '#424956'
MOMENTOS = {
    'planificar': '#7a4b26',
    'preparar': '#2a6f73',
    'fertilizar': '#1a62e2',
    'acompanar': '#3b6e25',
    'cerrar': '#8a5300',
}
MAPA = {'alto': '#4fa045', 'alto-claro': '#9cc94f', 'medio': '#d8cf4a', 'bajo': '#e8933f', 'bajo-fuerte': '#d4533b'}

TEXTOS = {
    'es': {
        'inicio': ('Inteligencia agronómica', 'para cada lote.', 'Clima, suelo, ambientes e historia de cada lote, convertidos en <b>decisiones</b>.'),
        'nosotros': ('Somos Rinde Plus', None, 'Mezclamos conocimiento agronómico y tecnología para que cada lote se decida con datos y con criterio.'),
        'educacion': ('Lo que hay detrás', 'de cada número', 'Los conceptos agronómicos detrás de cada decisión del lote y cómo se ven en Rinde Plus.'),
        'lotes': ('Lote 14', 'Lote 15'),
        'conceptos': [
            ('planificar', 'Ambientes'), ('planificar', 'Ley del mínimo'), ('preparar', 'Agua útil'),
            ('preparar', 'Carry-over de herbicidas'), ('fertilizar', 'Dosis óptima económica'), ('acompanar', 'Balance hídrico'),
            ('acompanar', 'DPV'), ('acompanar', 'NDVI'), ('cerrar', 'Rinde potencial y brecha'),
        ],
    },
    'en': {
        'inicio': ('Agronomic intelligence', 'for every field.', 'Weather, soil, zones and history of every field, turned into <b>decisions</b>.'),
        'nosotros': ('We are Rinde Plus', None, 'We combine agronomic knowledge and technology so every field is decided with data and with judgment.'),
        'educacion': ('What’s behind', 'every number', 'The agronomic concepts behind every field decision and how they look in Rinde Plus.'),
        'lotes': ('Field 14', 'Field 15'),
        'conceptos': [
            ('planificar', 'Management zones'), ('planificar', 'Law of the minimum'), ('preparar', 'Available water'),
            ('preparar', 'Herbicide carryover'), ('fertilizar', 'Economic optimum rate'), ('acompanar', 'Water balance'),
            ('acompanar', 'VPD'), ('acompanar', 'NDVI'), ('cerrar', 'Yield potential and gap'),
        ],
    },
    'pt': {
        'inicio': ('Inteligência agronômica', 'para cada talhão.', 'Clima, solo, ambientes e histórico de cada talhão, convertidos em <b>decisões</b>.'),
        'nosotros': ('Somos a Rinde Plus', None, 'Unimos conhecimento agronômico e tecnologia para que cada talhão seja decidido com dados e com critério.'),
        'educacion': ('O que há por trás', 'de cada número', 'Os conceitos agronômicos por trás de cada decisão do talhão e como aparecem na Rinde Plus.'),
        'lotes': ('Talhão 14', 'Talhão 15'),
        'conceptos': [
            ('planificar', 'Ambientes'), ('planificar', 'Lei do mínimo'), ('preparar', 'Água disponível'),
            ('preparar', 'Carryover de herbicidas'), ('fertilizar', 'Dose econômica'), ('acompanar', 'Balanço hídrico'),
            ('acompanar', 'DPV'), ('acompanar', 'NDVI'), ('cerrar', 'Potencial e lacuna'),
        ],
    },
}


def dos_lotes(nombres):
    """Los dos lotes vecinos de Nosotros (mismo dibujo que AboutPage.jsx)."""
    a, b = (html.escape(n) for n in nombres)
    m = MAPA
    return f'''
<svg viewBox="0 0 480 360" width="520" height="390">
  <defs>
    <clipPath id="A"><path d="M20 40 L250 24 L232 330 L12 316 Z"/></clipPath>
    <clipPath id="B"><path d="M250 24 L466 46 L458 322 L232 330 Z"/></clipPath>
    <pattern id="sA" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-4)"><line x1="0" y1="0" x2="0" y2="9" stroke="#fff" stroke-opacity=".2"/></pattern>
    <pattern id="sB" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(84)"><line x1="0" y1="0" x2="0" y2="9" stroke="#fff" stroke-opacity=".2"/></pattern>
  </defs>
  <g clip-path="url(#A)">
    <rect width="480" height="360" fill="{m['alto']}"/>
    <path fill="{m['alto-claro']}" d="M0 176 C 80 146, 160 206, 260 166 V360 H0 Z"/>
    <path fill="{m['medio']}" d="M0 262 C 80 242, 170 292, 260 252 V360 H0 Z"/>
    <rect width="480" height="360" fill="url(#sA)"/>
  </g>
  <g clip-path="url(#B)">
    <rect width="480" height="360" fill="{m['bajo']}"/>
    <path fill="{m['medio']}" d="M220 0 H480 V112 C 400 142, 320 92, 220 132 Z"/>
    <ellipse fill="{m['bajo-fuerte']}" cx="372" cy="252" rx="72" ry="44"/>
    <rect width="480" height="360" fill="url(#sB)"/>
  </g>
  <path d="M20 40 L250 24 L232 330 L12 316 Z" fill="none" stroke="{TINTA}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M250 24 L466 46 L458 322 L232 330 Z" fill="none" stroke="{TINTA}" stroke-width="2.5" stroke-linejoin="round"/>
  <g font-family="IBM Plex Sans" font-size="13" font-weight="600" fill="{TINTA}">
    <rect x="36" y="52" width="84" height="26" rx="13" fill="{TARJETA}" opacity=".92"/>
    <text x="78" y="70" text-anchor="middle">{a}</text>
    <rect x="364" y="284" width="84" height="26" rx="13" fill="{TARJETA}" opacity=".92"/>
    <text x="406" y="302" text-anchor="middle">{b}</text>
  </g>
</svg>'''


def conceptos(lista):
    """Los nueve conceptos de Educación, como en el índice de la página."""
    items = ''.join(
        f'<li><span class="punto" style="background:{MOMENTOS[mo]}"></span>'
        f'<span class="num">{i + 1:02d}</span>{html.escape(t)}</li>'
        for i, (mo, t) in enumerate(lista)
    )
    return f'<ol class="conceptos">{items}</ol>'


def pagina(lang, tipo, fuentes, logo, mapa):
    t = TEXTOS[lang]
    a, b, bajada = t[tipo]
    italica = tipo != 'inicio'
    if tipo == 'inicio':
        visual = f'<img class="mapa" src="{mapa}" alt="">'
    elif tipo == 'nosotros':
        visual = dos_lotes(t['lotes'])
    else:
        visual = conceptos(t['conceptos'])
    titulo = html.escape(a) + (f'<br><span class="acento">{html.escape(b)}</span>' if b else '')
    return f'''<!doctype html><html><head><meta charset="utf-8"><style>
@font-face {{ font-family: 'Aileron'; font-weight: 700; src: url('{fuentes}/aileron-latin-700-normal.woff2'); }}
@font-face {{ font-family: 'Aileron'; font-weight: 700; font-style: italic; src: url('{fuentes}/Aileron-BoldItalic.woff2'); }}
@font-face {{ font-family: 'IBM Plex Sans'; font-weight: 400 700; src: url('{fuentes}/ibm-plex-sans-latin.woff2'); }}
* {{ box-sizing: border-box; margin: 0; }}
html, body {{ width: 1200px; height: 630px; overflow: hidden; }}
body {{ position: relative; display: grid; grid-template-columns: 560px 1fr; align-items: center; gap: 40px;
  padding: 0 64px 12px; background: {FONDO}; font-family: 'IBM Plex Sans'; color: {TINTA}; }}
body::after {{ content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 12px; background: {AMARILLO}; }}
.logo {{ display: block; height: 64px; margin-bottom: 44px; }}
h1 {{ font-family: 'Aileron'; font-weight: 700; font-size: {64 if tipo == 'inicio' else 66}px; line-height: 1.06;
  letter-spacing: -0.01em; word-spacing: 0.08em; color: {AZUL if tipo == 'nosotros' else MARINO}; {'font-style: italic;' if italica else ''} }}
h1 .acento {{ color: {AZUL}; }}
p {{ margin-top: 24px; font-size: 25px; line-height: 1.45; color: {GRIS}; }}
p b {{ color: {TINTA}; }}
.url {{ margin-top: 36px; font-size: 21px; font-weight: 600; color: {MARINO}; }}
.visual {{ display: grid; place-items: center; }}
.mapa {{ width: 530px; }}
.conceptos {{ list-style: none; padding: 0; display: grid; gap: 10px; width: 100%; }}
.conceptos li {{ display: flex; align-items: center; gap: 12px; padding: 11px 18px; border-radius: 12px;
  background: {TARJETA}; box-shadow: 0 1px 3px rgba(22,27,36,.1), 0 1px 2px rgba(22,27,36,.05);
  font-family: 'Aileron'; font-weight: 700; font-size: 21px; color: {TINTA}; }}
.conceptos .punto {{ width: 10px; height: 10px; border-radius: 50%; flex: none; }}
.conceptos .num {{ font-family: 'IBM Plex Sans'; font-weight: 500; font-size: 16px; color: #525a68; width: 24px; }}
</style></head><body>
<div>
  <img class="logo" src="{logo}" alt="">
  <h1>{titulo}</h1>
  <p>{bajada}</p>
  <div class="url">rindeplus.com</div>
</div>
<div class="visual">{visual}</div>
</body></html>'''


def main():
    tmp = Path(tempfile.mkdtemp(prefix='rp-og-'))
    try:
        fuentes = (RAIZ / 'public' / 'fonts').as_uri()
        logo = (RAIZ / 'src' / 'assets' / 'rindeplus-logo-light.webp').as_uri()
        mapa = (Path(__file__).parent / 'mapa-lote.png').as_uri()
        for lang in TEXTOS:
            for tipo in ('inicio', 'nosotros', 'educacion'):
                archivo = tmp / f'{tipo}-{lang}.html'
                archivo.write_text(pagina(lang, tipo, fuentes, logo, mapa), encoding='utf-8')
                nombre = f'rindeplus-{lang}.png' if tipo == 'inicio' else f'rindeplus-{tipo}-{lang}.png'
                subprocess.run(
                    [EDGE, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
                     '--window-size=1200,630', '--virtual-time-budget=3000', '--allow-file-access-from-files',
                     f'--screenshot={SALIDA / nombre}', archivo.as_uri()],
                    check=True, capture_output=True,
                )
                print('ok', nombre)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == '__main__':
    main()
