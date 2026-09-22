const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  PHP: "#4F5D95",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  Vue: "#41b883",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

const FALLBACK_COLOR = "#89b4fa";

export function getLanguageColor(language: string | null): string {
  if (!language) return "#6c7086";
  return LANGUAGE_COLORS[language] ?? FALLBACK_COLOR;
}
