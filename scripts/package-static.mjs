import { cpSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

const base = process.env.STATIC_BASE_PATH ?? "/ungubani";
const out = "out";
const dest = "hostinger-upload";

if (!existsSync(out)) throw new Error("`out/` not found — the static export failed.");

// Internal component gallery must never ship.
for (const l of ["pt", "en"]) rmSync(`${out}/${l}/preview`, { recursive: true, force: true });

// "/" has no page in the app (it's a redirect), so ship a tiny redirect page.
writeFileSync(
  `${out}/index.html`,
  `<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><title>Ungubani</title><meta name="robots" content="noindex, nofollow"><meta http-equiv="refresh" content="0; url=${base}/pt/"><script>location.replace("${base}/pt/")</script></head><body><a href="${base}/pt/">Ungubani</a></body></html>\n`,
);

writeFileSync(
  `${out}/.htaccess`,
  `DirectoryIndex index.html
ErrorDocument 404 ${base}/404.html
Options -Indexes

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase ${base}/
  RewriteRule ^$ ${base}/pt/ [R=302,L]
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
</IfModule>
`,
);

rmSync(dest, { recursive: true, force: true });
cpSync(out, dest, { recursive: true });
rmSync(`${dest}.zip`, { force: true });
execSync(`cd ${dest} && zip -qr ../${dest}.zip . -x ".DS_Store"`);
console.log(`\nReady: ./${dest}/ and ./${dest}.zip`);
