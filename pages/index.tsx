import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Card({ children, image, page }) {
  return (
    <a href={page} className="card">
      <img className="cardimg" draggable={false} src={image} alt="" />
      <div className="cardcontent">{children}</div>
    </a>
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
        <div className="aboutme">
          <p>
            Hey, I&apos;m Aziz!
            <br /> I enjoy making games, particularly RPGs, taking part in game jams,
            <br />
            and creating useful functional web apps.
          </p>
        </div>
        <hr />
        <div className="cards">
          <Card image="../images/cards/leap.jpg" page="leap">
            <p>Game Project: C#, Unity</p>
            <ul>
              <li>2D Action RPG</li>
              <li>Imbue the power of various elements with the help of Fairies you meet</li>
              <li>Wield a time-altering polearm artifact to view the events of the Great Levian War</li>
            </ul>
          </Card>
          <Card image="../images/cards/ffxivsssdps.jpg" page="https://ffxiv.azizarar.com">
            <p>FFXIV App: React, Javascript</p>
            <ul>
              <li>Calculates DPS based on Stone Sky and Sea attempts</li>
              <li>Select Boss Fights from Shadowbringers and Legacy</li>
            </ul>
          </Card>
          <Card image="../images/cards/gourvid.jpg" page="gourvid">
            <p>Gourvid</p>
            <ul>
              <li>Created Website for Gourvid</li>
              <li>Collaborated with a Designer to bring their vision to life</li>
            </ul>
          </Card>
          <Card image="../images/cards/ld45.jpg" page="https://bodmassad.itch.io/ld45">
            <p>Game Project: C#, Unity</p>
            <ul>
              <li>Game Jam: Ludum Dare 45</li>
              <li>Theme: Start with nothing</li>
              <li>You have no resources and need to gather materials to craft more drones to protect you!</li>
            </ul>
          </Card>

          <Card image="../images/cards/snakegame.jpg" page="sfmlsnake">
            <p>Game Project: C++, SFML</p>
            <ul>
              <li>2 Player Snake Game</li>
              <li>Try gain the highest score</li>
              <li>Gather glue to freeze yourself tactically to kill the enemy snake!</li>
            </ul>
          </Card>
          <Card image="../images/cards/hapivania.jpg" page="hapivania">
            <p>Game Engine: C++, HAPI</p>
            <p>Level Editor: C#, WPF</p>
            <ul>
              <li>A 2D Platformer Game Engine</li>
              <li>Create Levels in the Level Editor (AzEditor)</li>
              <li>Place down and collect upgrades!</li>
            </ul>
          </Card>

          <Card image="../images/cards/tilemapgenerator.jpg" page="tilemapgenerator">
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
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
