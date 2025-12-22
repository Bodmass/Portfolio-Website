// import { faUnity, faWindows } from '@fortawesome/free-brands-svg-icons'

export interface ProjectProps {
  logo: string
  page: string
  title: string
  bgImg?: string
  bgCol?: string
  techstack: string[]
  status: 'released' | 'on-going' | 'hold' | 'development' | 'abandoned'
  type: 'Game' | 'Web App' | 'Game Jam' | 'Game Tool'
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
  'Web App': 'Web Apps',
  'Game Jam': 'Game Jams',
  'Game Tool': 'Game Tools',
}

export const PROJECTS: ProjectProps[] = [
  {
    page: 'https://ffxiv.azizarar.com',
    title: 'Stone Sky Sea DPS Calculator',
    logo: '/projects/ffxiv-sss/ssslogo.png',
    techstack: ['Next.js', 'Typescript'],
    bgCol: '#000000',
    status: 'on-going',
    type: 'Web App',
  },
  {
    page: 'https://blu.azizarar.com',
    title: 'BLU Spellbook',
    logo: '/projects/ffxiv-blu/blulogo.png',
    techstack: ['Next.js', 'Typescript'],
    bgCol: '#000000',
    status: 'hold',
    type: 'Web App',
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
    techstack: ['Unity', 'Game Jam', 'Ludum Dare 48'],
    status: 'released',
    type: 'Game Jam',
  },
  {
    page: 'https://guildy.azizarar.com',
    title: 'Guildy',
    bgImg: '/projects/guildy/bastion_bg.jpg',
    logo: '/projects/guildy/guildyLogo.png',
    techstack: ['Next.js', 'Typescript'],
    status: 'hold',
    type: 'Web App',
  },
  {
    page: 'https://bodmassad.itch.io/ld45',
    title: 'Brainwave',
    bgImg: '/projects/brainwave/bw_bg.jpg',
    logo: '/projects/brainwave/ld45_logo.png',
    techstack: ['Unity', 'Game Jam', 'Ludum Dare 45'],
    status: 'released',
    type: 'Game Jam',
  },
  {
    page: '/projects/hapivania',
    title: 'HAPIVANIA GAME ENGINE',
    bgCol: '#000',
    logo: '/projects/hapivania/hapivania_logo.png',
    techstack: ['C++', 'Game Engine'],
    status: 'released',
    type: 'Game Tool',
  },
]
