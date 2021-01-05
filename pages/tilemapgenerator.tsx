import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aziz - Tilemap Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <div className="projectbanner">
          <img className="banner" src="../images/logos/tilemapgenerator/SplitLogo.png" alt="" />
        </div>
        <hr />
        <div className="pagecontent">
          <p>
            Tilemap Generator
            <ul>
              <li>C#</li>
              <li>Unity (2018.2 used)</li>
            </ul>
          </p>
          <p>
            My Final Year Project was an asset for Unity which takes advantage of the Unity 2017 Tilemap feature to
            procedurally generate maps.
          </p>
          <p>
            This is a working level generation tool inside Unity. To easily access the demo scenes, using a version of
            Unity 2018.2 is recommended. Using a different version of Unity requires the{' '}
            <a href="https://github.com/Unity-Technologies/2d-extras/branches">2d-extras</a> files to be removed and
            replaced, with the branch following the version.
          </p>
          <p>
            The current state of the Tilemap Generator allows levels to be generated in 2D, in both top down and side
            scrolling perspectives. The size of the grid and tiles can be selected by the user, additionally, the option
            to generate Collision Maps, Foliage and Walls (for the Dungeon). Advanced options are available to change
            the size of cells, pixels per unit and Tilemap framerate, which defaults at 60fps.
          </p>
          <p>
            A demo included in the Artefact contains tiles for Animated Water, Rule Wall tiles, Terrain grass and Random
            foliage by taking advantage of the 2d extras features, however is not required for the application to
            function. The Tilemap Generator reached Version 0.7 in its development cycle.
          </p>
          Further development plans include:
          <ul>
            <li>Fixing currently known issues</li>
            <li>Updating Unity Version to 2018.3 for the Demo</li>
            <li>Isometric Tilemap</li>
            <li>Hexagonal Tiles for 2D Top down World Map</li>
            <li>
              Introducing Unity Jobs for the other generation scripts, currently only implemented on 2D Top down World
              Map.
            </li>
            <li>Tree generation for Perlin Noise generated maps.</li>
            <li>Research into what drives exploration in worlds and adapt the generation to cater to this.</li>
            <li>Implementing procedurally generated terrain when in a certain range.</li>
          </ul>
          <p>
            <b>
              <a href="https://github.com/Bodmass/TilemapGenerator">https://github.com/Bodmass/TilemapGenerator</a>
            </b>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
