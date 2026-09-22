export interface Project {
  slug: string;
  name: string;
  description: string;
  htmlUrl: string;
  language: string;
  // Add screenshot paths (e.g. from /public/projects/<slug>/) here once available.
  images: string[];
  // Set this once the project has a deployed/live URL.
  liveUrl: string | null;
}

// Curated by hand — add/remove entries here to change what shows in the Portfolio section.
export const projects: Project[] = [
  {
    slug: "cen-392-senior-design-project",
    name: "CEN-392-Senior-Design-Project",
    description: "CEN 392 Senior Design Project",
    htmlUrl: "https://github.com/Aske21/CEN-392-Senior-Design-Project",
    language: "TypeScript",
    images: [],
    liveUrl: null,
  },
  {
    slug: "it-308-advanced-mobile-programming",
    name: "IT-308-Advanced-Mobile-Programming",
    description: "IT 308 - Advanced Mobile Programming",
    htmlUrl: "https://github.com/Aske21/IT-308-Advanced-Mobile-Programming",
    language: "TypeScript",
    images: [],
    liveUrl: null,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
