/**
 * Normalize user-entered credential URL for href / DOCX hyperlinks.
 * Trims; prepends https:// when no http(s) scheme is present.
 */
function certificationAbsUrl(raw) {
  const s = String(raw ?? '').trim();
  if (!s) return '';
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s.replace(/^\/+/, '')}`;
}

module.exports = { certificationAbsUrl };
