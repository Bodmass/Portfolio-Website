import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

function Card({ children, image }) {
  return (
    <div className="card">
      <img className="cardimg" draggable={false} src={image} alt="" />
      <div className="cardcontent">{children}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aziz - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <div className="cards">
          <Card image="../images/cards/leap.jpg">
            <p>Game Project: C#, Unity</p>
            <ul>
              <li>2D Action RPG</li>
              <li>Imbue the power of various elements with the help of Fairies you meet</li>
              <li>Wield a time-altering polearm artifact to view the events of the Great Levian War</li>
            </ul>

            <Button href="#">View Project</Button>
          </Card>
          <Card image="../images/cards/ld45.jpg">
            <p>Game Project: C#, Unity</p>
            <ul>
              <li>Game Jam: Ludum Dare 45</li>
              <li>Theme: Start with nothing</li>
              <li>You have no resources and need to gather materials to craft more drones to protect you!</li>
            </ul>

            <Button href="https://bodmassad.itch.io/ld45">Play on Itch.io</Button>
          </Card>

          <Card image="../images/cards/snakegame.jpg">
            <p>Game Project: C++, SFML</p>
            <ul>
              <li>2 Player Snake Game</li>
              <li>Try gain the highest score</li>
              <li>Gather glue to freeze yourself tactically to kill the enemy snake!</li>
            </ul>
            <Button href="#">Read More</Button>
          </Card>
          <Card image="../images/cards/hapivania.jpg">
            <p>Game Engine: C++, HAPI</p>
            <p>Level Editor: C#, WPF</p>
            <ul>
              <li>A 2D Platformer Game Engine</li>
              <li>Create Levels in the Level Editor (AzEditor)</li>
              <li>Place down and collect upgrades!</li>
            </ul>
            <Button href="#">Read More</Button>
          </Card>

          <Card image="../images/cards/tilemapgenerator.jpg">
            <p>Unity Plugin: C#, Unity</p>
            <ul>
              <li>2D Level Generator</li>
              <li>
                Using Perlin Noise and Binary Space Partioning to generate Topdown World Maps, Dungeons and
                Sidescrolling Levels
              </li>
              <li>Generate foliage and foliage density.</li>
              <li>Import your own tiles to be used in the generated level</li>
            </ul>
            <Button href="#">Read More</Button>
          </Card>
          <Card image="../images/cards/ffxivsssdps.jpg">
            <p>FFXIV App: Javascript</p>
            <ul>
              <li>Calculates DPS based on Stone Sky and Sea attempts</li>
              <li>Select Boss Fights from Shadowbringers and Legacy</li>
            </ul>
            <Button href="#">View Project</Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
