import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Aziz Arar | SFML Snake',
}

export default function Page() {
  return (
    <div>
      <div className="w-full flex justify-center shadow-xl">
        <Image src="/projects/snake/snakelogo.png" width={500} height={100} alt="Snake logo" />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-2/3 m-2 wrap-break-word whitespace-normal text-left max-w-360">
          <div className="pagecontent">
            <span>Snake:</span>
            <ul>
              <li>C++</li>
              <li>Code::Blocks</li>
              <li>SFML Library</li>
            </ul>

            <img className="mt-4" src="/projects/snake/snakegif.gif" alt="" />

            <p>
              This was a University project for my C++ Programming 2 Module in Teesside University 1st Year. I created
              it using Codeblocks between Linux and Windows using the SFML Library.
            </p>
            <p>
              The game consists of two playable snakes where you battle for the highest score by collecting fruit while
              also having the addition of a new collectable type: Glue.
            </p>
            <p>
              With the Glue, you can collect it but can only be collected over time and once you absorb enough of it,
              you&apos;ll be able to use it to stop momentarily to gain a possible advantage over your opponent.
            </p>

            <p>
              <b>
                <a href="https://github.com/Bodmass/SnakeGame">https://github.com/Bodmass/SnakeGame</a>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
