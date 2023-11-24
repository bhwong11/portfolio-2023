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
    title: "Splendor Board Game",
    description:
      "An Online version of the resource management board game Splendor! Candy themed. (similiar to the game Cantan)",
    tags: ["Reactjs", "Next.js", "Express","Socket.io","Node","MongoDB", "Tailwind"],
    imageUrl: "https://i.imgur.com/dKOEoRQ.png",
  },
  {
    title: "Word Analytics",
    description:
      "A quiz game where users can play trivia quiz games of various difficulty, save scores, and see top ranking players.",
    tags: ["Reactjs", "TypeScript", "Express", "GraphQL","Node","MongoDB", "Bootstap"],
    imageUrl: "https://i.imgur.com/D2YVV9L.png",
  },
  {
    title: "Word Analytics",
    description:
      "An Ecommerce Store where users can buy products and leave reviews, and admin users can create products and product categories",
    tags: ["Reactjs", "TypeScript", "Redux", "Reactjs", "Stripe", "GraphQL", "Node", "Express", "MongoDB"],
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