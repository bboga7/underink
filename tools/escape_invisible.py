"""Rewrite invisible/format characters in source files as \\uXXXX escapes.

Source code for a hidden-text detector should not itself contain hidden text.
Usage: python3 tools/escape_invisible.py src/*.js
"""
import sys
import unicodedata

BS = chr(92)

def needs_escape(c):
    cp = ord(c)
    return unicodedata.category(c) in ("Cf", "Mn", "Zl", "Zp") and cp > 0x7F or 0xFE00 <= cp <= 0xFE0F

for path in sys.argv[1:]:
    s = open(path, encoding="utf-8").read()
    out = []
    for c in s:
        if needs_escape(c) and ord(c) <= 0xFFFF:
            out.append(BS + "u" + format(ord(c), "04X"))
        elif needs_escape(c) or 0xE0000 <= ord(c) <= 0xE01EF:
            # astral: write as a surrogate pair, valid in strings and in regexes with or without /u
            v = ord(c) - 0x10000
            out.append(BS + "u" + format(0xD800 + (v >> 10), "04X") + BS + "u" + format(0xDC00 + (v & 0x3FF), "04X"))
        else:
            out.append(c)
    t = "".join(out)
    if t != s:
        open(path, "w", encoding="utf-8").write(t)
        print("escaped", sum(1 for a in s if needs_escape(a)), "chars in", path)
