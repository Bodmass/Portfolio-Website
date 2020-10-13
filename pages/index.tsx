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
        <title>Aziz - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <div className="cards">
          <Card image="../images/cards/leap.jpg" page="#" />
          <Card image="../images/cards/ld45.jpg" page="#" />
          <Card image="../images/cards/projects.jpg" page="projects" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
