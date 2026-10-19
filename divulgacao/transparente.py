"""Deixa transparente o fundo de uma ilustração do design system e recorta a cena.

Uso (a partir de C:\\Dev\\cursoia):
    python divulgacao/transparente.py design/assets/illustrations/<nome>.png

Saída: divulgacao/ilustracoes/<nome>.png. O traço vira tinta (#14130E) com alfa
proporcional ao escuro do pixel, então o desenho fica igual sobre qualquer papel.
A faixa da direita (x >= 1240) é zerada para tirar a estrela que vem no canto.
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

PAPEL = 232.0  # o papel dos PNGs fica em ~243; a folga absorve o ruído


def main(origem: str) -> None:
    cinza = np.asarray(Image.open(origem).convert("L")).astype(float)
    alfa = np.clip((PAPEL - cinza) / (PAPEL - 20) * 255, 0, 255).astype("uint8")
    alfa[:, 1240:] = 0
    h, w = alfa.shape
    rgba = np.zeros((h, w, 4), "uint8")
    rgba[..., 0], rgba[..., 1], rgba[..., 2], rgba[..., 3] = 0x14, 0x13, 0x0E, alfa
    ys, xs = np.where(alfa > 80)
    caixa = (xs.min() - 6, ys.min() - 6, xs.max() + 7, ys.max() + 7)
    destino = Path(__file__).parent / "ilustracoes" / Path(origem).name
    destino.parent.mkdir(exist_ok=True)
    Image.fromarray(rgba, "RGBA").crop(caixa).save(destino, optimize=True)
    print(destino)


if __name__ == "__main__":
    main(sys.argv[1])
