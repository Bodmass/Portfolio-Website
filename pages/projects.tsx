import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Card({ image, page }) {
  return (
    <div className="card">
      <a href={page}>
        <img src={image} alt="" />
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aziz - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="content">
        <div className="cards">
          <Card image="../images/cards/leap.jpg" page="#" />
        </div>
        <hr />
        <div className="cardtitle">Game Jams</div>
        <div className="cards">
          <Card image="../images/cards/ld45.jpg" page="#" />
        </div>
        <hr />
        <div className="cardtitle">Academic</div>
        <div className="cards">
          <Card image="../images/cards/snakegame.jpg" page="#" />
          <Card image="../images/cards/hapivania.jpg" page="#" />
        </div>
        <hr />
        <div className="cardtitle">Plugins / Misc</div>
        <div className="cards">
          <Card image="../images/cards/tilemapgenerator.jpg" page="#" />
          <Card image="../images/cards/ffxivsssdps.jpg" page="#" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
