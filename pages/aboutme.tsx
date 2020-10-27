import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aziz - About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <div className="projectbanner">
          <img className="banner" src="../images/logos/aboutme/aboutme.png" alt="" />
        </div>
        <hr />
        <div className="pagecontent">
          <p>My name is Aziz and I am recent BSc Computer Games Programming Graduate from Teesside University.</p>
          <p>I focus primarily on programming especially in C++, C# and Javascript.</p>
          <p>I have a huge passion for retro games and RPGs, especially in the 16-bit era of games.</p>
          <p>
            {' '}
            My interest in game development began by wanting to learn what went behind games. Assited by indie titles
            inspired by games of that era fueled my love for creating and programming games.
          </p>
          <p>
            <ul>
              I also have experience in the other areas such as:
              <li>Music</li>
              <li>Pixel Art (Using Asperite and Krita)</li>
              <li>3D Modelling</li>
            </ul>
          </p>
          <p>
            Programming is what I enjoy most as its the logic and core to what makes a program, or features of a game
            that really interest me.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
