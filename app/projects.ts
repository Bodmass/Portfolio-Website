// import { faUnity, faWindows } from '@fortawesome/free-brands-svg-icons'

export interface ProjectProps {
  logo: string
  page: string
  title: string
  bgImg?: string
  bgCol?: string
  techstack: string[]
  status: 'released' | 'on-going' | 'hold' | 'development' | 'abandoned'
  type: 'Game' | 'Web' | 'Game Jam' | 'Game Tool'
}

export const statusLabels: { [key in ProjectProps['status']]: string } = {
  released: 'Released Works',
  hold: 'On Hold',
  development: 'In Development',
  abandoned: 'Abandoned',
  'on-going': 'On Going',
}

export const typeLabels: { [key in ProjectProps['type']]: string } = {
  Game: 'Games',
  Web: 'Web',
  'Game Jam': 'Game Jams',
  'Game Tool': 'Game Tools',
}

export const PROJECTS: ProjectProps[] = [
  {
    page: 'https://ffxiv.azizarar.com',
    title: 'Stone Sky Sea DPS Calculator',
    logo: '/projects/ffxiv-sss/ssslogo.png',
    techstack: ['Typescript', 'Javascript', 'Next.js'],
    bgCol: '#000000',
    status: 'on-going',
    type: 'Web',
  },
  {
    page: 'https://blu.azizarar.com',
    title: 'BLU Spellbook',
    logo: '/projects/ffxiv-blu/blulogo.png',
    techstack: ['Typescript', 'Javascript', 'Next.js'],
    bgCol: '#000000',
    status: 'hold',
    type: 'Web',
  },
  {
    page: 'https://bodmassad.itch.io/ld50',
    title: 'Dragpocalypse',
    logo: '/projects/dragpocolaypse/dragpocalypse_logo.png',
    bgImg: '/projects/dragpocolaypse/d-bg.jpg',
    techstack: ['Godot', 'Game Jam', 'Ludum Dare 50'],
    status: 'released',
    type: 'Game Jam',
  },
  {
    page: 'https://bodmassad.itch.io/ld48',
    title: 'Dreamscape',
    logo: '/projects/dreamscape/dreamscape_logo.png',
    bgCol: '#ffffff',
    techstack: ['C#', 'Unity', 'Game Jam', 'Ludum Dare 48'],
    status: 'released',
    type: 'Game Jam',
  },
  {
    page: 'https://guildy.azizarar.com',
    title: 'Guildy',
    bgImg: '/projects/guildy/bastion_bg.jpg',
    logo: '/projects/guildy/guildyLogo.png',
    techstack: ['Typescript', 'Javascript', 'Next.js'],
    status: 'hold',
    type: 'Web',
  },
  {
    page: 'https://bodmassad.itch.io/ld45',
    title: 'Brainwave',
    bgImg: '/projects/brainwave/bw_bg.jpg',
    logo: '/projects/brainwave/ld45_logo.png',
    techstack: ['C#', 'Unity', 'Game Jam', 'Ludum Dare 45'],
    status: 'released',
    type: 'Game Jam',
  },
  {
    page: '/projects/hapivania',
    title: 'HAPIvania Game Engine & Level Editor',
    bgCol: '#000',
    logo: '/projects/hapivania/hapivania_logo.png',
    techstack: ['C++', 'Game Engine', 'C#', '.NET', 'Level Editor'],
    status: 'released',
    type: 'Game Tool',
  },
  {
    page: '/projects/gourvid',
    title: 'Gourvid',
    bgCol: '#000',
    logo: '/projects/gourvid/gourvid-logo.png',
    techstack: ['Wordpress', 'PHP'],
    status: 'released',
    type: 'Web',
  },
  {
    page: '/projects/snake',
    title: 'SFML Snake',
    bgCol: '#000',
    logo: '/projects/snake/snakelogo.png',
    techstack: ['C++', 'SFML'],
    status: 'released',
    type: 'Game',
  },
  {
    page: '/projects/tilemap-generator',
    title: 'Tilemap Generator',
    bgImg: '/projects/tilemap-generator/SplitLogo.png',
    logo: '/projects/blank.png',
    techstack: ['C#', 'Plugin', 'Unity'],
    status: 'released',
    type: 'Game Tool',
  },
]
