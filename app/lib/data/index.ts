export const links = {
  home: 'home',
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  resume: 'resume',
  contact: 'contact'
} as const;

export const projectsData = [
  {
    title: "Splendid Spoon",
    description:
    "I worked as a contributing full-stack developer on this website for 2 years. E-commernce meal kit delivery website.",
    tags: ["React", "TypeScript", "Bootstrap", "Redux", "Zustand", "Django", "Python", "Hugo"],
    imageUrl: "https://i.imgur.com/KimwQrn.png",
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "https://i.imgur.com/dKOEoRQ.png",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "https://i.imgur.com/D2YVV9L.png",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "https://i.imgur.com/nc8Kws9.png",
  },
] as const;

export const skillsData = [
'React.js',
'Redux',
'Bootstrap',
'Tailwind',
'Zustand',
'Hugo',
'HTML5',
'CSS3',
'SASS',
'Typescript',
'Nextjs',
'Node.js',
'Express.js',
'Django',
'SQL',
'Postgres',
'MongoDB',
'GraphQL'] as const;

export const mailerApi = '/mailer/api'