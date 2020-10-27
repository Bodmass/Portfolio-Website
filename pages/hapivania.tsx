import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aziz - HAPIvania</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <div className="projectbanner">
          <img className="banner" src="../images/logos/hapivania/HAPIvaniaBanner.png" alt="" />
        </div>
        <hr />
        <div className="pagecontent">
          <p>
            AzEngine (HAPIVANIA ENGINE AND GAME):
            <ul>
              <li>C++</li>
              <li>Visual Studio 2017</li>
              <li>HAPI Library (Private Library by Keith Ditchburn)</li>
            </ul>
            AzEditor (HAPIVANIA LEVEL EDITOR):
            <ul>
              <li>C#</li>
              <li>WPF</li>
              <li>Visual Studio Blend</li>
            </ul>
          </p>
          <p>
            This was a University project for my Games Engine Construction Module in Teesside University 2nd Year. I
            created it in C++ using a private library called HAPI by Keith Ditchburn.
          </p>
          <p>
            The game created using the engine is a Metroidvania-style platformer which allows the player to earn
            upgrades in order to progress.
          </p>
          <p>
            There are 3 upgrades which you can collect:
            <ul>
              <li>Sprint - Allowing you to move faster.</li>
              <li>Super Jump - Allowing you to jump with increased momentum.</li>
              <li>
                XRay Bullets - Your bullets will be replaced with XRay Bullets, allowing your bullets to pass through
                terrain.
              </li>
            </ul>
            HAPIvania also comes with a Level Editor created in WPF. The Editor exports and imports level using XML.
          </p>
          <p>Check out the gameplay below:</p>
          <iframe
            title="Hapi"
            className="vidembed"
            width="640"
            height="480"
            src="https://www.youtube.com/embed/QyaLomlXeRw"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          />
          <p />
          <p>
            <b>
              <a href="https://www.dropbox.com/s/ox8q7ezyt7bf2t1/AzEngine.zip?dl=0">Download AzEngine Source</a>
            </b>
          </p>

          <p>
            <b>
              <a href="https://www.dropbox.com/s/yxotvvtgzmf2pr0/AzEditor.zip?dl=0">Download AzEditor Source</a>
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
      <Footer />
    </div>
  )
}
