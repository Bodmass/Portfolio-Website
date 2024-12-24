import { NextPage } from 'next'
import Link from 'next/link'
import { PROJECTS } from './projects'
import Image from 'next/image'

interface ProjectProps {
  logo: string
  page: string
  title: string
  bgImg?: string
  bgCol?: string
  techstack: string[]
}

const Project: NextPage<ProjectProps> = ({ logo, page, title, techstack, bgImg, bgCol }) => {
  function getColours(tech: string) {
    switch (tech) {
      case 'Next.js':
        return 'bg-purple-600  text-white'
      case 'Typescript':
        return 'bg-[#3178C6] text-white'
      case 'Godot':
        return 'bg-[#5789ba] text-white'
      default:
        return 'dark:bg-white dark:text-black bg-black text-white'
    }
  }
  return (
    <Link
      href={page}
      className={`flex w-full -skew-x-12 ${bgImg ? `bg-center bg-cover` : `bg-gradient-to-b`} select-none flex-col rounded-3xl  from-white to-[#c0d3fb] p-1 pb-2 shadow-2xl drop-shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-4 dark:border-black/50  dark:from-[#1c2f58]/25 dark:to-[#262f4a]/25  dark:hover:bg-gray-900`}
    >
      <div
        className="rounded-3xl absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: bgImg ? `linear-gradient(var(--button-top), var(--button-bottom)), url(${bgImg})` : '',
          backgroundColor: bgCol ? `${bgCol}` : '',
        }}
      ></div>
      <div className="skew-x-12 px-2 py-1 ">
        <div className="pl-6 text-xl ">
          <span className="font-kalam text-3xl sm:text-2xl text-white drop-shadow-[0_0.2px_1.2px_rgba(0,0,0,1)]">
            {title}
          </span>
        </div>
        <div className="relative w-full h-32">
          <Image src={logo} alt={`${title} logo`} fill className="w-full h-auto p-2" objectFit="contain" />
        </div>
        <div className="flex w-full justify-end pr-6">
          {techstack.map((tech: string, index: number) => (
            <span
              className={`ml-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 ${getColours(tech)}`}
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen justify-center font-[family-name:var(--font-geist-sans)]">
      {/* Projects */}
      <div className="mb-24 flex min-h-screen w-screen flex-col px-3 md:px-12 lg:w-3/4">
        {/* <div className="dark:border-sky-600/ mb-2 flex min-h-12 min-w-fit items-center justify-center rounded-tr-3xl rounded-tl-3xl bg-blue-300 bg-gradient-to-r font-kalam text-2xl dark:from-sky-900 dark:to-sky-800">
          <div>TOOLS</div>
        </div> */}
        <div className="grid grid-flow-row grid-cols-1 justify-center gap-6 px-6 py-2 xl:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
