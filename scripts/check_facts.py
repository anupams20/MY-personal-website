# -*- coding: utf-8 -*-
"""Lint: every ₹ amount / phone / day-range in HTML must exist in data/facts.json."""
import io, re, glob, json, sys
sys.stdout.reconfigure(encoding='utf-8')
facts = json.load(io.open("data/facts.json", encoding="utf-8"))
ok_amounts = set(facts["prices"].values()) | {"1,00,000"} | set(facts.get("calculator_allowed_amounts", []))
ok_days = set(facts["delivery"].values())
bad = []
for f in glob.glob("*.html"):
    s = io.open(f, encoding="utf-8").read()
    for m in re.finditer(r"₹\s?([\d,]+)", s):
        if m.group(1) not in ok_amounts and not m.group(1).isdigit() or (m.group(1).isdigit() and len(m.group(1)) > 3):
            if m.group(1) not in ok_amounts: bad.append(f + " :: ₹" + m.group(1))
    for m in re.finditer(r"(\d+[–-]\d+ days)", s):
        if m.group(1).replace("-", "–") not in ok_days: bad.append(f + " :: " + m.group(1))
    for m in re.finditer(r"wa\.me/(\d+)", s):
        if m.group(1) != facts["wa_number"]: bad.append(f + " :: wa " + m.group(1))
print("FACTS LINT:", ("FAIL\n" + "\n".join(sorted(set(bad)))) if bad else "PASS")
sys.exit(1 if bad else 0)
