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
      case 'C++':
        return 'bg-[#6399d7]  text-white'
      case 'Next.js':
        return 'bg-black  text-white'
      case 'Typescript':
        return 'bg-[#3178C6] text-white'
      case 'Javascript':
        return 'bg-[#efd71b] text-black'
      case 'Godot':
        return 'bg-[#5789ba] text-white'
      case 'C#':
        return 'bg-[#662079] text-white'
      case '.NET':
        return 'bg-[#9580e5] text-black'
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
        group flex w-[90vw] lg:w-150 -skew-x-12 select-none flex-col rounded-3xl bg-black/25 hover:drop-shadow-2xl transition-shadow"
    >
      <motion.div
        className="p-2 relative overflow-hidden rounded-3xl  group-hover: ring-blue-400 group-hover:ring-4 "
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
            <p className="font-teko md:text-2xl text-xl text-white">{props.title}</p>
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
        className={`${filterName == filter ? `bg-[#51a2ff]` : `bg-transparent`} first:rounded-l-lg last:rounded-r-lg transition-all  inline-flex select-none font-roboto h-8 min-w-10 items-center text-center text-md font-medium hover:bg-blue-400 hover:text-white focus:outline-hidden cursor-pointer focus:ring-4 active:scale-90 focus:ring-blue-300 dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800`}
      >
        <a className="flex gap-1 p-2 items-center font-sharetechmono" onClick={() => setFilter(filterName)}>
          {children}
        </a>
      </div>
    )
  }
  return (
    <div className="w-full flex justify-center ">
      <div className="mt-2 bg-[#121723] w-fit rounded-xl">
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
  const [filter, setFilter] = useState('')
  const filteredProjects = PROJECTS.filter((project) => project.type.toUpperCase().includes(filter))

  return (
    <div>
      <Filters filter={filter} setFilter={setFilter} />

      <div className="mt-2 flex justify-center font-(family-name:--font-geist-sans)">
        <div className="mb-24 flex flex-col lg:w-3/4">
          <div className="flex flex-row flex-wrap justify-center gap-6 py-2 ">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((projectType) => (
                <motion.div
                  key={projectType.title}
                  layout
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 25, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
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
