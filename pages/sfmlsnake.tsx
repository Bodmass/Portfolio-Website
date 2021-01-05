import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aziz - Snake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <div className="projectbanner">
          <img className="banner" src="../images/logos/snake/snakelogo.png" alt="" />
        </div>
        <hr />
        <div className="pagecontent">
          <p>
            Snake:
            <ul>
              <li>C++</li>
              <li>Code::Blocks</li>
              <li>SFML Library</li>
            </ul>
          </p>
          <img className="vidembed" src="/images/previews/snake/snakegif.gif" alt="" />

          <p>
            This was a University project for my C++ Programming 2 Module in Teesside University 1st Year. I created it
            using Codeblocks between Linux and Windows using the SFML Library.
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
      <Footer />
    </div>
  )
}
