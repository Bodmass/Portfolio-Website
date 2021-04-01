import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aziz - Leap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <div className="projectbanner">
          <img className="banner" src="../images/logos/leap/LeapBanner.png" alt="" />
        </div>
        <hr />
        <div className="pagecontent">
          <p>
            Leap:
            <ul>
              <li>C#</li>
              <li>Unity</li>
            </ul>
          </p>
          <p>
            This Story-gripping Action RPG will put your hearts to the test as you take on the role of Faith, a girl who
            is forced into a distant world where magic and fairytale exists... However not all is as it seems. This
            place is known as Levia.
          </p>

          <p>
            Levia has been left vulnerable to the corruption of Mariasha since the eradication of the Timewalkers in the
            Great War of Levia, we thought everything was at peace. However since the Timewalkers are no longer around
            to protect Levia, they are at great risk as the corruption breeds once again.
          </p>

          <p>
            Check out the Team:
            <p>
              <a href="../index.html">Aziz Arar</a> - Project Leader, Programmer, Music, Pixel Art & UI Art
            </p>
            <p>
              <a href="https://blackrosemii.deviantart.com/">BlackRoseMii</a> - Character Concept Art
            </p>
          </p>
          <div>
            <p>Early in-game previews</p>
            <p>
              <iframe
                className="vidembed"
                title="Leap: Gameplay Preview"
                src="https://www.youtube-nocookie.com/embed/mW2kVTHNBes?showinfo=0&rel=0&iv_load_policy=3&autohide=0&disablekb=1"
                width="640"
                height="360"
                frameBorder="0"
              />
            </p>
            <p>
              <iframe
                className="vidembed"
                title="Leap: Systems Progress"
                src="https://www.youtube-nocookie.com/embed/L8a_pLknTxE?showinfo=0&rel=0&iv_load_policy=3&autohide=0&disablekb=1"
                width="640"
                height="360"
                frameBorder="0"
              />
            </p>
          </div>
          <p>
            The implementation and thought process of the some systems developed:
            <ul>
              <li>
                Dialogue System:
                <p>
                  I&apos;ve created a modular node based Dialogue system which allows me to easily create conversations
                  without any additional scripting. <br />I can create branches depending on choices selected, and even
                  allow unique interactions if the player has a certain item or has triggered a certain flag.
                </p>
                <p>
                  Creating a Dialogue System in this way is incredibly time-saving and also more efficient as the entire
                  dialogue for a NPC is compressed into a single asset.
                </p>
              </li>
              <li>
                Combat System:
                <p>
                  I&apos;ve created a Combo-based Action Combat System where alternating abilities such as a Slash and
                  Lunge can create unique combos.
                </p>
                <p>In the system preview video, the combos displayed are as follows:</p>
                <p>Overpower: 3 Slashes in a Row.</p>
                <p>Gouge: Slash, Lunge, Slash</p>
                <p>Uppercut: Slash, Slash, Lunge</p>
                <p>The combo is activated upon pressing an action after completeling the required combo sequence.</p>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
