import fs from "node:fs";
import path from "node:path";

const SOURCE_PATH = path.join(
  process.cwd(),
  "src",
  "content",
  "socio-source.html",
);

const ANALYTICS_PATTERN =
  /googletagmanager|gtag\(|GTM-|hs-script-loader|hs-scripts\.com/i;

let cachedMarkup: string | null = null;

function extractSection(source: string, tagName: "head" | "body") {
  const match = source.match(
    new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"),
  );

  if (!match) {
    throw new Error(`Unable to find <${tagName}> in Socio source snapshot.`);
  }

  return match[1];
}

function stripTrackedScripts(html: string) {
  return html.replace(
    /<script\b[\s\S]*?<\/script>/gi,
    (tag) => (ANALYTICS_PATTERN.test(tag) ? "" : tag),
  );
}

function keepRelevantHeadScripts(headHtml: string) {
  const scripts = headHtml.match(/<script\b[\s\S]*?<\/script>/gi) ?? [];

  return scripts
    .filter((tag) => !ANALYTICS_PATTERN.test(tag))
    .filter((tag) =>
      /type=["']framer\/appear["']|__framer__|Motion|data-framer/i.test(tag),
    )
    .join("");
}

function collectHeadStyles(headHtml: string) {
  return (headHtml.match(/<style\b[\s\S]*?<\/style>/gi) ?? []).join("");
}

function absolutizeSocioLinks(html: string) {
  return html.replace(
    /(href|action)=(["'])\.\/([^"']*)\2/gi,
    (_, attr: string, quote: string, target: string) => {
      const normalizedTarget = target ? target.replace(/^\/+/, "") : "";
      const absoluteUrl = normalizedTarget
        ? `https://socio.ae/${normalizedTarget}`
        : "https://socio.ae/";

      return `${attr}=${quote}${absoluteUrl}${quote}`;
    },
  );
}

export function getSocioCloneMarkup() {
  if (cachedMarkup) {
    return cachedMarkup;
  }

  const source = fs.readFileSync(SOURCE_PATH, "utf8");
  const headHtml = extractSection(source, "head");
  const bodyHtml = extractSection(source, "body");

  const bootstrapHtml = collectHeadStyles(headHtml) + keepRelevantHeadScripts(headHtml);
  const sanitizedBody = absolutizeSocioLinks(stripTrackedScripts(bodyHtml));

  cachedMarkup = bootstrapHtml + sanitizedBody;
  return cachedMarkup;
}
