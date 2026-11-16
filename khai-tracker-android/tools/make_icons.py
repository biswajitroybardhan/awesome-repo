"""Generates Khai Tracker launcher icons, Play listing assets and notification art.

Mark: a cream bowl-ring on deep green, with a single gold leaf inside. No text, so it holds up
at 48 px and looks deliberate on a home screen full of icons.
"""
from PIL import Image, ImageDraw
import math, os

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "app", "res")

GREEN_DARK = (20, 61, 39)
GREEN = (31, 92, 58)
CREAM = (247, 244, 235)
GOLD = (200, 162, 74)


def gradient(size, top, bottom):
    img = Image.new("RGB", (size, size), top)
    px = img.load()
    for y in range(size):
        t = y / max(1, size - 1)
        r = int(top[0] + (bottom[0] - top[0]) * t)
        g = int(top[1] + (bottom[1] - top[1]) * t)
        b = int(top[2] + (bottom[2] - top[2]) * t)
        for x in range(size):
            px[x, y] = (r, g, b)
    return img


def emblem(size, scale=1.0, background=True, rounded=True):
    S = size * 4  # supersample
    if background:
        base = gradient(S, GREEN, GREEN_DARK[:3]).convert("RGBA")
    else:
        base = Image.new("RGBA", (S, S), (0, 0, 0, 0))

    layer = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    c = S / 2
    u = S / 1024.0 * scale

    # bowl ring
    r_out = 300 * u
    ring = 52 * u
    d.ellipse([c - r_out, c - r_out + 40 * u, c + r_out, c + r_out + 40 * u],
              outline=CREAM + (255,), width=int(ring))

    # leaf: two mirrored quadratic curves meeting at top and bottom tips
    h = 190 * u
    w = 108 * u
    pts = []
    for i in range(61):
        t = i / 60.0
        x = w * math.sin(math.pi * t)
        y = -h + 2 * h * t
        pts.append((c + x, c + y))
    for i in range(60, -1, -1):
        t = i / 60.0
        x = -w * math.sin(math.pi * t)
        y = -h + 2 * h * t
        pts.append((c + x, c + y))
    d.polygon(pts, fill=GOLD + (255,))

    # stem
    d.line([(c, c - h * 0.9), (c, c + h * 0.92)], fill=GREEN_DARK + (255,), width=max(2, int(9 * u)))

    base.alpha_composite(layer)

    if rounded and background:
        mask = Image.new("L", (S, S), 0)
        md = ImageDraw.Draw(mask)
        rad = int(S * 0.22)
        md.rounded_rectangle([0, 0, S - 1, S - 1], radius=rad, fill=255)
        base.putalpha(mask)

    return base.resize((size, size), Image.LANCZOS)


def circular(size):
    S = size * 4
    img = emblem(size, rounded=False)
    img = img.resize((S, S), Image.LANCZOS)
    mask = Image.new("L", (S, S), 0)
    d = ImageDraw.Draw(mask)
    d.ellipse([0, 0, S - 1, S - 1], fill=255)
    img.putalpha(mask)
    return img.resize((size, size), Image.LANCZOS)


def foreground(size):
    S = size * 4
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    c = S / 2
    u = S / 1024.0 * 0.62
    r_out = 300 * u
    d.ellipse([c - r_out, c - r_out + 30 * u, c + r_out, c + r_out + 30 * u],
              outline=CREAM + (255,), width=int(48 * u))
    h = 176 * u
    w = 100 * u
    pts = []
    for i in range(61):
        t = i / 60.0
        pts.append((c + w * math.sin(math.pi * t), c - h + 2 * h * t))
    for i in range(60, -1, -1):
        t = i / 60.0
        pts.append((c - w * math.sin(math.pi * t), c - h + 2 * h * t))
    d.polygon(pts, fill=GOLD + (255,))
    return img.resize((size, size), Image.LANCZOS)


def write(path, img):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, "PNG", optimize=True)
    print("wrote", path, img.size)


DENSITIES = {"mdpi": 1, "hdpi": 1.5, "xhdpi": 2, "xxhdpi": 3, "xxxhdpi": 4}

for name, mult in DENSITIES.items():
    px = int(48 * mult)
    write(os.path.join(OUT, f"mipmap-{name}", "ic_launcher.png"), emblem(px))
    write(os.path.join(OUT, f"mipmap-{name}", "ic_launcher_round.png"), circular(px))
    write(os.path.join(OUT, f"mipmap-{name}", "ic_launcher_foreground.png"), foreground(int(108 * mult)))

# Play Console assets
store = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "store")
write(os.path.join(store, "play-icon-512.png"), emblem(512, rounded=False).convert("RGB"))
write(os.path.join(store, "app-icon-1024.png"), emblem(1024, rounded=False).convert("RGB"))

# Feature graphic 1024x500: brand field with emblem left, wordmark right
fg = Image.new("RGB", (1024, 500), GREEN)
d = ImageDraw.Draw(fg)
for y in range(500):
    t = y / 499
    d.line([(0, y), (1024, y)], fill=(int(31 + 10 * t), int(92 - 12 * t), int(58 - 6 * t)))
mark = emblem(300, rounded=False)
fg.paste(mark, (70, 100), mark)
try:
    from PIL import ImageFont
    font = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 84)
    small = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 30)
    d.text((420, 168), "Khai Tracker", font=font, fill=CREAM)
    d.text((424, 268), "Your day, measured.", font=small, fill=(214, 228, 218))
    d.text((424, 310), "Offline first  Â·  English and Hindi  Â·  No ads", font=small, fill=(214, 228, 218))
except Exception as e:
    print("font fallback:", e)
write(os.path.join(store, "feature-graphic-1024x500.png"), fg)

