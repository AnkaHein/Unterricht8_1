# 8.1 ESZ – Englisch & Deutsch

Gemeinsame Lern-Website für die Klasse 8.1 (Evangelisches Schulzentrum Bad Düben):
Englisch (NYC Survival) und Deutsch (Newsroom 8). Reine HTML-Seite, installierbar als App (PWA).

## Aufbau
- `index.html` – die komplette Seite
- `assets/` – Bilder aus dem Deutsch-Bereich
- `images/`, `files/` – Bilder, PDFs, Audios aus dem Englisch-Bereich
- `manifest.json`, `sw.js` – App-Installation und Offline-Betrieb
- Nach jeder Änderung an der Seite in `sw.js` die `VERSION` hochzählen (v1 → v2), damit die Geräte die neue Version laden.
