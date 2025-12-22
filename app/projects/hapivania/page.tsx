import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Aziz Arar | HAPIVANIA',
}

export default function Page() {
  return (
    <div>
      <div className="w-full flex justify-center shadow-xl">
        <Image src="/projects/hapivania/hapivania_logo.png" width={500} height={100} alt="HAPIvania logo" />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-2/3 m-2 wrap-break-word whitespace-normal text-left max-w-360">
          <span>AzEngine (HAPIVANIA ENGINE AND GAME):</span>
          <ul>
            <li>C++</li>
            <li>Visual Studio 2017</li>
            <li>HAPI Library (Private Library by Keith Ditchburn)</li>
          </ul>
          <span>AzEditor (HAPIVANIA LEVEL EDITOR):</span>
          <ul>
            <li>C#</li>
            <li>WPF</li>
            <li>Visual Studio Blend</li>
          </ul>
          <p>
            This was a University project for my Games Engine Construction Module in Teesside University 2nd Year. I
            created it in C++ using a private library called HAPI by Keith Ditchburn.
          </p>
          <p>
            The game created using the engine is a Metroidvania-style platformer which allows the player to earn
            upgrades in order to progress.
          </p>
          <p>There are 3 upgrades which you can collect:</p>
          <ul>
            <li>Sprint - Allowing you to move faster.</li>
            <li>Super Jump - Allowing you to jump with increased momentum.</li>
            <li>
              XRay Bullets - Your bullets will be replaced with XRay Bullets, allowing your bullets to pass through
              terrain.
            </li>
          </ul>
          <p>
            HAPIvania also comes with a Level Editor created in WPF. The Editor exports and imports level using XML.
          </p>
          <p>Check out the gameplay below:</p>
          <div className="w-full max-w-3xl">
            <iframe
              title="Hapi"
              className="w-full"
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/QyaLomlXeRw"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
          <p>
            <b>
              <a href="https://github.com/Bodmass/HAPIVANIA-GameEngine">
                https://github.com/Bodmass/HAPIVANIA-GameEngine
              </a>
            </b>
          </p>
          <p>
            <b>
              <a href="https://github.com/Bodmass/HAPIVANIA_LevelEditor">
                https://github.com/Bodmass/HAPIVANIA_LevelEditor
              </a>
            </b>
          </p>
          <p>
            <b>
              <a href="https://www.dropbox.com/s/munka97yhq20h64/ExpoTalent%20AzEngine%20-%20HAPIVANIA%20%2B%20AzEditor.zip?dl=0">
                Download AzEngine + AzEditor
              </a>
            </b>
          </p>
        </div>
      </div>
    </div>
  )
}
