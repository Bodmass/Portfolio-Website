import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBluesky, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

function Socials() {
  function SocialIcon({ children, link }) {
    return (
      <div className="me-2 inline-flex h-8 min-w-10 items-center justify-center rounded-lg p-2.5 text-center text-xl font-medium hover:scale-90 hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
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
  return (
    <div className="min-w-screen mb-4 min-h-40 shadow-2xl dark:bg-[#1d2539]">
      <div className="flex justify-center p-2 min-h-40">
        <div className="flex items-center">
          {/* <div className="animate-border rounded-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 bg-[length:400%_400%] p-1 shadow-xl transition [animation-duration:_4s] dark:shadow-gray-700/25">
            <img className="h-36 w-36 rounded-full object-cover" src="/me-2.jpg" />
          </div> */}
          <div className="flex flex-col px-4 text-center ">
            <span className="select-none text-nowrap bg-gradient-to-b from-blue-500 to-blue-600 bg-clip-text font-delius text-7xl font-bold text-transparent dark:from-blue-400 dark:to-blue-500">
              Aziz Arar
            </span>
            <div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-2">
        <div className="flex justify-center space-x-4">
          <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
            Projects
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About Me
          </a>
        </div>
      </div>
    </div>
  )
}
