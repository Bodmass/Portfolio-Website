'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBluesky, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'
import path from 'path'
import { AnimatePresence, motion } from 'framer-motion'

function Socials() {
  type SocialIconProps = {
    children: React.ReactNode
    link: string
  }
  function SocialIcon({ children, link }: SocialIconProps) {
    return (
      <div className="me-2 inline-flex h-8 min-w-10 items-center justify-center rounded-lg p-2.5 text-center text-xl transition-transform font-medium hover:scale-90 hover:bg-blue-400 hover:text-white focus:outline-hidden focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
        <Link href={link}>{children}</Link>
      </div>
    )
  }
  return (
    <div className="mt-2 flex justify-center">
      <SocialIcon link="https://bsky.app/profile/azizarar.com">
        <FontAwesomeIcon icon={faBluesky} className="fa-fw flex" />
      </SocialIcon>
      <SocialIcon link="https://github.com/bodmass">
        <FontAwesomeIcon icon={faGithub} className="fa-fw" />
      </SocialIcon>
      <SocialIcon link="https://bodmassad.itch.io">
        <FontAwesomeIcon icon={faItchIo} className="fa-fw" />
      </SocialIcon>
      <SocialIcon link="mailto:aziz.n.arar@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
      </SocialIcon>
    </div>
  )
}

export default function Header() {
  const pathname = usePathname()
  return (
    <div className=" mb-4 min-h-40 shadow-2xl bg-[#1d2539]">
      <div className="flex justify-center p-2 min-h-40">
        <div className="flex items-center">
          <div className="flex flex-col px-4 text-center ">
            <span className="select-none text-nowrap bg-linear-to-b from-blue-500 to-blue-600 bg-clip-text font-delius text-7xl font-bold text-transparent dark:from-blue-400 dark:to-blue-500">
              Aziz Arar
            </span>
            <div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-2 font-sharetechmono">
        <nav className="flex justify-center space-x-4 ">
          <div className="bg-[#121929] py-2 rounded-sm outline-2 outline-[#121929]">
            <Link href="/" className={pathname == '/' ? styles.current : styles.link} aria-current="page">
              Projects
            </Link>
            {pathname != '/' && pathname != '/about' ? (
              <Link id="current" href="" className={styles.current}>
                /{pathname.split('/')[pathname.split('/').length - 1].toUpperCase()}
              </Link>
            ) : null}
            <Link id="about" href="/about" className={pathname == '/about' ? styles.current : styles.link}>
              About Me
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
