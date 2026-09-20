export interface Frontmatter {
  [key: string]: string;
}

interface ParsedMarkdown {
  frontmatter: Frontmatter;
  body: string;
}

const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

export function parseFrontmatter(raw: string): ParsedMarkdown {
  const match = raw.match(FRONTMATTER_PATTERN);
  if (!match) {
    return { frontmatter: {}, body: raw.trim() };
  }

  const [, header, body] = match;
  const frontmatter: Frontmatter = {};

  header.split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    if (key) frontmatter[key] = value;
  });

  return { frontmatter, body: body.trim() };
}
