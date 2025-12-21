import { NextPage } from 'next'
import Link from 'next/link'
import { PROJECTS, ProjectProps, statusLabels, typeLabels } from './projects'
import Image from 'next/image'

const Project: NextPage<ProjectProps> = (props: ProjectProps) => {
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
      href={props.page}
      className={`group flex w-150 -skew-x-12 ${props.bgImg ? `bg-center bg-cover` : `bg-linear-to-b`} select-none flex-col rounded-3xl pb-2 focus:outline-hidden bg-black/25`}
    >
      <div className="from-white to-[#c0d3fb] dark:border-black/50  dark:from-[#1c2f58]/25 dark:to-[#262f4a]/25  dark:group-hover:bg-gray-900 transition-all duration-200 ease-in rounded-3xl group-hover:-translate-y-2 group-focus:-translate-y-2 ring-blue-600 group-hover:ring-4 group-focus:ring-4 ">
        <div
          className="rounded-3xl absolute w-full h-full bg-cover bg-center group-hover:blur-[2px]"
          style={{
            backgroundImage: props.bgImg
              ? `linear-gradient(var(--button-top), var(--button-bottom)), url(${props.bgImg})`
              : '',
            backgroundColor: props.bgCol ? `${props.bgCol}` : '',
          }}
        ></div>
        <div className="px-2 py-1">
          <div className="skew-x-12 pl-6">
            <p className=" font-teko text-3xl sm:text-2xl text-white text-shadow-black text-shadow-xl">{props.title}</p>
          </div>
          <div className="relative w-full h-32">
            <Image
              src={props.logo}
              alt={`${props.title} logo`}
              fill
              className="object-contain w-full h-auto skew-x-12 p-2 "
            />
          </div>

          <div className="skew-x-12 flex w-full justify-between pr-6 ">
            <div>
              {props.techstack.map((tech: string, index: number) => (
                <span
                  className={`font-roboto ml-2 rounded-md px-2 py-1 text-xs text-nowrap ring-2 ring-black/25 ${getColours(tech)}`}
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  const groupedProjects = PROJECTS.reduce((acc: any, project: ProjectProps) => {
    if (!acc[project['type']]) {
      acc[project['type']] = []
    }
    acc[project['type']].push(project)
    return acc
  }, {})

  return (
    <div className="flex justify-center font-(family-name:--font-geist-sans)">
      {/* Projects */}
      <div className="mb-24 flex flex-col px-3 md:px-12 lg:w-3/4">
        {Object.keys(groupedProjects).map((projectType) => (
          <div key={projectType}>
            <div className="flex min-h-12 items-center justify-center">
              <div className="p-2 w-full select-none xl:w-1/2 dark:border-sky-600/ my-2 rounded-lg flex min-h-12 items-center justify-center bg-linear-to-b font-teko text-2xl dark:from-sky-500 dark:to-sky-500/50">
                {typeLabels[projectType as keyof typeof typeLabels]}
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-6 px-6 py-2 xl:grid-cols-3 md:grid-cols-2">
              {groupedProjects[projectType].map((project: ProjectProps, index: number) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
