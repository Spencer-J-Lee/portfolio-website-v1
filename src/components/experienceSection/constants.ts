export const SKILLS = {
  JAVASCRIPT: "JavaScript",
  TYPESCRIPT: "TypeScript",
  REACT: "React",
  NEXTJS: "Next.js",
  REDUX: "Redux",
  GOLANG: "Golang",
  POSTGRESQL: "PostgreSQL",
  JEST: "Jest",
  REACT_TESTING_LIBRARY: "React Testing Library",
  TAILWINDCSS: "TailwindCSS",
  MATERIAL_UI: "Material-UI",
  STORYBOOK: "Storybook",
  LOOKER: "Looker",
  EMBERJS: "Ember.js",
  BOOTSTRAP: "Bootstrap",
  CONTENTFUL: "Contentful",
  METABASE: "Metabase",
  SASS: "SASS",
  STYLED_COMPONENTS: "Styled Components",
  TS_PARTICLES: "tsParticles",
  SUPABASE: "Supabase",
  DRIZZLE: "Drizzle",
  TIPTAP: "Tiptap",
  TANSTACK_QUERY: "TanStack Query",
} as const;
export type Skill = (typeof SKILLS)[keyof typeof SKILLS];

export const COMPANIES = {
  MOOV: "Moov Technologies Inc.",
} as const;
