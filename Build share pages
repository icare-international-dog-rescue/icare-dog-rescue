/*
 * Builds one small "share preview" page per dog into the /d folder.
 *
 * Why: Facebook, Instagram, WhatsApp, etc. read a page's preview (title +
 * image) from static HTML BEFORE any JavaScript runs. Our profile page
 * (dog.html) draws each dog with JavaScript, so crawlers only ever see one
 * generic preview. These per-dog pages carry the correct title + photo for
 * each dog in plain HTML, then send real visitors on to the live profile.
 *
 * This runs automatically via GitHub Actions whenever dogs.json changes.
 */

const fs = require('fs');
const path = require('path');

const SITE_BASE = 'https://icare-international-dog-rescue.github.io/icare-dog-rescue';
const OUT_DIR = path.join(process.cwd(), 'd');
const FALLBACK_IMG = SITE_BASE + '/og-cover.jpg';

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

// Absolute URL for an image path (handles full URLs and repo-relative paths).
function absImg(p) {
  if (!p) return '';
  if (/^https?:\/\//i.test(p)) return p;
  return SITE_BASE + '/' + String(p).replace(/^\/+/, '');
}

// Deterministic, ASCII-safe filename for any id (must match dog.html's slugForId).
function slugForId(id) {
  return encodeURIComponent(String(id == null ? '' : id))
    .replace(/%/g, '_')
    .replace(/[^A-Za-z0-9_-]/g, '_');
}

// Short, clean description from desc or story.
function shortDesc(d, name) {
  var t = (d.desc || d.story || '').toString().replace(/\s+/g, ' ').trim();
  if (t.length > 200) t = t.slice(0, 197).trim() + '…';
  return t || ('Meet ' + name + ', a rescue dog with iCARE International Dog Rescue.');
}

function readDogs() {
  var raw = JSON.parse(fs.readFileSync('dogs.json', 'utf8'));
  return Array.isArray(raw) ? raw : (raw.dogs || []);
}

function pageHtml(d) {
  var id = String(d.id || d.name || '').trim();
  var name = d.name || id;
  var isRescued = d.status === 'rescued';
  var img = absImg(d.photo) || FALLBACK_IMG;
  var title = name + ' · iCARE International Dog Rescue';
  var ogTitle = name + (isRescued ? ' — found a loving home ♥' : ' — looking for a loving home');
  var desc = shortDesc(d, name);
  var profileUrl = '../dog.html?id=' + encodeURIComponent(id);
  var pageUrl = SITE_BASE + '/d/' + slugForId(id) + '.html';

  return '<!doctype html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'<meta charset="utf-8">\n' +
'<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
'<title>' + esc(title) + '</title>\n' +
'<meta name="description" content="' + esc(desc) + '">\n' +
'<link rel="canonical" href="' + esc(pageUrl) + '">\n' +
'<meta property="og:type" content="website">\n' +
'<meta property="og:site_name" content="iCARE International Dog Rescue">\n' +
'<meta property="og:title" content="' + esc(ogTitle) + '">\n' +
'<meta property="og:description" content="' + esc(desc) + '">\n' +
'<meta property="og:url" content="' + esc(pageUrl) + '">\n' +
'<meta property="og:image" content="' + esc(img) + '">\n' +
'<meta name="twitter:card" content="summary_large_image">\n' +
'<meta name="twitter:title" content="' + esc(ogTitle) + '">\n' +
'<meta name="twitter:description" content="' + esc(desc) + '">\n' +
'<meta name="twitter:image" content="' + esc(img) + '">\n' +
'<meta http-equiv="refresh" content="0; url=' + esc(profileUrl) + '">\n' +
'<script>location.replace(' + JSON.stringify(profileUrl) + ');</script>\n' +
'</head>\n' +
'<body style="font-family:system-ui,sans-serif;padding:40px;text-align:center;color:#16243A">\n' +
'<p>Taking you to ' + esc(name) + '\u2019s profile\u2026 <a href="' + esc(profileUrl) + '">Tap here if it doesn\u2019t load.</a></p>\n' +
'</body>\n' +
'</html>\n';
}

function main() {
  var dogs = readDogs();

  // Rebuild the folder from scratch so removed/renamed dogs don't leave stale pages.
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  var made = 0, skipped = 0;
  dogs.forEach(function (d) {
    var id = String(d.id || d.name || '').trim();
    if (!id) { skipped++; return; }
    var file = slugForId(id) + '.html';
    fs.writeFileSync(path.join(OUT_DIR, file), pageHtml(d), 'utf8');
    made++;
  });

  // A tiny index so the folder isn't directly browsable as a blank listing.
  fs.writeFileSync(
    path.join(OUT_DIR, 'index.html'),
    '<!doctype html><meta http-equiv="refresh" content="0; url=../index.html">\n',
    'utf8'
  );

  console.log('Built ' + made + ' dog share page(s); skipped ' + skipped + ' without an id.');
}

main();
