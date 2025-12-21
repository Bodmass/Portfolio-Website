'use client'

import { NextPage } from 'next'
import Link from 'next/link'
import { PROJECTS, ProjectProps, statusLabels, typeLabels } from './projects'
import Image from 'next/image'
import { useState, Dispatch, SetStateAction, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faGamepad, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

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
  const shouldReduceMotion = useReducedMotion()

  return (
    <Link
      href={props.page}
      aria-label={`View project: ${props.title}`}
      className="
        group flex w-150 -skew-x-12 select-none
        flex-col rounded-3xl bg-black/25 hover:drop-shadow-2xl transition-shadow"
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl  group-hover: ring-blue-400 group-hover:ring-4 "
        whileHover={!shouldReduceMotion ? { y: -8 } : undefined}
        whileFocus={!shouldReduceMotion ? { y: -8 } : undefined}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl bg-cover bg-center blur-[1px]"
          aria-hidden="true"
          style={{
            backgroundImage: props.bgImg
              ? `linear-gradient(var(--button-top), var(--button-bottom)), url(${props.bgImg})`
              : '',
            backgroundColor: props.bgCol || '',
          }}
        />

        <div className="relative px-2 py-1">
          <div className="skew-x-12 pl-6">
            <p className="font-teko text-3xl sm:text-2xl text-white">{props.title}</p>
          </div>

          <div className="relative w-full h-32 select-none ">
            <Image
              draggable={false}
              src={props.logo}
              alt={`${props.title} logo`}
              fill
              className="object-contain skew-x-12 p-2 "
            />
          </div>

          <div className="skew-x-12 flex w-full justify-between pr-6">
            <div>
              {props.techstack.map((tech: string, index: number) => (
                <span
                  key={index}
                  className={`ml-2 rounded-md px-2 py-1 text-xs ring-2 ring-black/25 ${getColours(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

const Filters = ({ filter, setFilter }: { filter: string; setFilter: Dispatch<SetStateAction<string>> }) => {
  type FilterIconProps = {
    children: ReactNode
    filterName: string
  }
  function FilterIcon({ children, filterName: filterName }: FilterIconProps) {
    return (
      <div
        className={`${filterName == filter ? `bg-[#293451]` : `bg-transparent`} inline-flex select-none rounded-2xl m-2 font-roboto h-8 min-w-10 items-center p-2.5 text-center text-md font-medium hover:bg-blue-400 hover:text-white focus:outline-hidden cursor-pointer focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800`}
      >
        <a onClick={() => setFilter(filterName)}> {children} </a>
      </div>
    )
  }
  return (
    <div className="w-full flex justify-center ">
      <div className="mt-2 bg-[#121723] w-fit rounded-3xl">
        <FilterIcon filterName="">
          <FontAwesomeIcon icon={faBorderAll} className="fa-fw" />
          <span>ALL</span>
        </FilterIcon>
        <FilterIcon filterName="WEB">
          <FontAwesomeIcon icon={faGlobe} className="fa-fw" />
          <span>WEB</span>
        </FilterIcon>
        <FilterIcon filterName="GAME">
          <FontAwesomeIcon icon={faGamepad} className="fa-fw flex" />
          <span>GAMES</span>
        </FilterIcon>
      </div>
    </div>
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

  const [filter, setFilter] = useState('')
  const filteredProjects = PROJECTS.filter((project) => project.type.toUpperCase().includes(filter))

  return (
    <div>
      <Filters filter={filter} setFilter={setFilter} />

      <div className="mt-2 flex justify-center font-(family-name:--font-geist-sans)">
        <div className="mb-24 flex flex-col px-3 md:px-12 lg:w-3/4">
          <div className="flex flex-row flex-wrap justify-center gap-6 px-6 py-2 xl:grid-cols-3 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((projectType) => (
                <motion.div
                  key={projectType.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <Project {...projectType} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
