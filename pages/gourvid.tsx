import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aziz - Gourvid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <div className="projectbanner">
          <img className="banner" src="../images/logos/gourvid/GourvidLogo.png" alt="" />
        </div>
        <hr />
        <div className="pagecontent">
          <p>
            <i>This website is under development, and is not publicly accessible at this time</i>
          </p>
          <p>
            Gourvid:
            <ul>
              <li>Wordpress</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>CSS</li>
            </ul>
          </p>
          <p>In Collaboration with Lauryn (Portfolio Not Yet Available)</p>
          <p>
            Software Used:
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe XD</li>
            </ul>
          </p>
          <h2>Research:</h2>
          <p>We were hired by Gourvid as Web Developers to create two websites for them.</p>
          <p>
            We have been tasked with the creation of the Gourvid Website, a portfolio of their work and services.
            Firstly, we were tasked with creating a new logo for Gourvid. Lauryn and I concepted various Logos,
          </p>
          <p>These were the ones I created:</p>
          <p>
            <table>
              <tr>
                <td>
                  <img
                    className="vidembed"
                    width="256px"
                    src="/images/previews/gourvid/gourvidlogoconcept1.png"
                    alt=""
                  />
                </td>
                <td>
                  <img
                    className="vidembed"
                    width="256px"
                    src="/images/previews/gourvid/gourvidlogoconcept2.png"
                    alt=""
                  />
                </td>
                <td>
                  <img
                    className="vidembed"
                    width="256px"
                    src="/images/previews/gourvid/gourvidlogoconcept3.png"
                    alt=""
                  />
                </td>
              </tr>
            </table>
          </p>
          <p>The Logo that was decided on was a modified version of one of Lauryn&apos;s Designs</p>
          <p>
            The Final Logo
            <table>
              <tr>
                <td>
                  <img className="vidembed" width="512px" src="../images/logos/gourvid/GourvidLogo.png" alt="" />
                </td>
              </tr>
            </table>
          </p>
          <p>
            Now moving our focus to the Gourvid Website, we took at it in it&apos;s current state (now visible at
            <b>
              <a href="https://old.gourvid.com"> old.gourvid.com</a>
            </b>
            )
          </p>
          <img className="vidembed" src="/images/previews/gourvid/gourvid1.jpg" alt="" />
          <p>
            This is the page we are first greeted with when we open the website. We have a header at the top with a menu
            bar with overlapping elements and underneath a large logo and links to social media. The dropdown from the
            menu bar features white text and a white background. Making the text invisible until you highlight it.
          </p>
          <img className="vidembed" src="/images/previews/gourvid/gourvid3.jpg" alt="" />
          &nbsp;
          <img className="vidembed" src="/images/previews/gourvid/gourvid4.jpg" alt="" />
          <p>
            We can learn instantly that gourvid is a company which imports and distributes wine from South America from
            the carousel featured in the middle of the page.
          </p>
          <img className="vidembed" src="/images/previews/gourvid/gourvid2.jpg" alt="" />
          <p>
            The carousel moves incredibly fast and the user gets little to no time to read it. The title element
            overlaps with the background, and having a dark background with dark text makes it difficult to read.
          </p>
          <p>
            Using Google Development Tools to view the website. It doesn’t seem to respect resolution to dictate how
            elements should be displayed. The website completely breaks. I’m unable to easily view the css for this
            file, this is likely because of how the wix page builder works. Each element is likely its own separate
            component styled by scripts. The creative freedom is very limited as you’ve got to work inside the page
            builder.
          </p>
          <p>
            Surprisingly viewing the website on an actual mobile device changes the website to a mobile theme. It is
            possible wix decides what users see based on device type rather than resolution. This could affect customers
            that visit the website and see a website which breaks because of the resolution of their screen.
          </p>
          <p>
            There is a page which lists all the wineries they represent based on their country. The buttons for these
            wineries are visually appealing, and when clicked into displays some information about the Winery, a list of
            their wines and even allows you to click into the wine for detailed information.
          </p>
          <h2>Requirements:</h2>
          <p>
            We have been tasked to create a website for them. We opted out of using Wix as we don’t believe a page
            builder like this would give us what we require to make the website as we want it. We have been given full
            creative freedom to create the website best we want it to.
          </p>
          <p>Here is a list of requirements for the website:</p>
          <ul>
            <li>A website strongly showing the gourvid brand</li>
            <li>It’s to be a portfolio</li>
            <li>Display the Wineries they represent by Country</li>
            <ul>
              <li>The Countries</li>
              <ul>
                <li>Argentina</li>
                <li>Brazil</li>
                <li>Chile</li>
                <li>Spain</li>
              </ul>
              <li>The Winery</li>
              <ul>
                <li>Name</li>
                <li>Description</li>
                <li>Wines</li>
                <ul>
                  <li>Name of Wine</li>
                  <li>Wine Year</li>
                  <li>Suitability</li>
                  <ul>
                    <li>Vegetarian</li>
                    <li>Vegan</li>
                  </ul>
                  <li>Lid Type</li>
                  <ul>
                    <li>Screwtop</li>
                    <li>Corktop</li>
                  </ul>
                  <li>Download Buttons for Bottle</li>
                  <li>Download Buttons for Technical Sheet</li>
                </ul>
              </ul>
            </ul>
            <li>Meet the Team Page</li>
            <li>Services Page</li>
            <li>Social Media Links</li>
            <li>Ability to Edit the Website</li>
            <li>WhatsApp Integration</li>
            <li>Full support for devices of varying resolution</li>
          </ul>
          <h2>Planning:</h2>
          <p>
            We have opted for Wordpress as it features a page builder just for the content of the site, and the code
            will be primarily on the theme. However it will take some time as research of wordpress, its functions and
            features will be needed.
          </p>
          <p>
            When designing a website, we need to think about specifically what devices we are wanting to support, the
            fonts we want to use as some may require commercial licensing, the resolution, quality of images due to file
            size and the layout of the website and its elements and SEO.
          </p>
          <h3>Browser Support</h3>
          <p>
            It’s important that our implementations can support all modern up to date browsers. Therefore we have
            decided not to support Internet Explorer 11 and versions of browsers released before 2016.
          </p>
          <p>
            All Modern and Updated Browsers will be supported:
            <ul>
              <li>Google Chrome (v60+) + Mobile</li>
              <li>Edge (v79+)</li>
              <li>Firefox (v52+) + Mobile Version</li>
              <li>Safari (v11+) + iOS Version</li>
              <li>Opera (v47+)</li>
              <li>Android Browser (v5.6.x+)</li>
              <li>Samsung Internet (v8.2+)</li>
              <li>Unlisted Browsers may support the website but it is not guaranteed.</li>
            </ul>
            See here for Browser Support for Wordpress
            <a href="https://make.wordpress.org/core/handbook/best-practices/browser-support/">
              <b> https://make.wordpress.org/core/handbook/best-practices/browser-support/</b>
            </a>
          </p>
          <h3>Fonts</h3>
          <p>
            Fonts We have made a decision to go with fonts exclusively available through https://fonts.google.com/. The
            reason for this decision as the entire library available from google, is free and open source. Allowing us
            to use any font in their collection without having to worry about licensing.
          </p>
          <h3>SEO</h3>
          <p>
            Search Engine Optimisations need to be made to ensure that Gourvid shows up in peoples search results, and
            Google favours sites which load faster. We need to ensure that the website is as optimised as possible to
            attempt to reach the most number of users that we can.
          </p>
          <p>
            There are a few wave we can achieve this.
            <ol>
              <li>Wordpress has its own Search Engine Optimisations, we can take advantage of that.</li>
              <li>
                Keyword targeting. Keywords that are most relevant to what people are searching for to put you ahead of
                your competition.
              </li>
              <li>Researching the top search queries to know what your customers are looking for.</li>
              <li>Having strong UX.</li>
              <li>Having buttons to share your website and links to your social media.</li>
              <li>
                Making the website easily accessible to search engine crawl bots to find the information they need fast.
              </li>
              <li>Having your strong headline as your very first H1 tag.</li>
              <li>Meta description</li>
              <li>
                Alt attributes in images to explain what they are (These bots don’t have eyes) Segmented, logical
                structure of the URL, being short and descriptive. Images
              </li>
              <li>Segmented, logical structure of the URL, being short and descriptive.</li>
            </ol>
          </p>
          <h3>Images</h3>
          <p>
            The entirety of the site will consist of images, either as backgrounds or as a feature such as logos. It is
            vital that these images are small so not only users, but crawl bots can access the page as soon as possible
            to gather the information they need to boost our SEO. There are three types of images we will focus on using
            to achieve this.
          </p>
          <table>
            <tr>
              <td>PNG</td>
              <td>Exclusively for images with any transparent parts</td>
            </tr>
            <tr>
              <td>JPEG</td>
              <td>Photos or images with lots of colour</td>
            </tr>
            <tr>
              <td>GIF</td>
              <td>Animated images ONLY</td>
            </tr>
          </table>
          <h2>Design Phase</h2>
          <p>We created various tables featuring potential Typography and Colour Palettes.</p>
          <img className="vidembed" src="/images/previews/gourvid/gourvid5.jpg" alt="" />
          <p>Colour Palettes were also created for platforms most likely to be featured on Gourvid&apos;s Website.</p>
          <img className="vidembed" src="/images/previews/gourvid/gourvid6.jpg" alt="" />
          <p>Below you will find our Website Designs until reaching the current version of the site.</p>
          <p>
            <img className="vidembed" src="/images/previews/gourvid/gourvid7.jpg" alt="" />
          </p>
          <p>
            <img className="vidembed" src="/images/previews/gourvid/gourvid8.jpg" alt="" />
          </p>
          <p>
            <img className="vidembed" src="/images/previews/gourvid/gourvid9.jpg" alt="" />
            &nbsp;
            <img className="vidembed" src="/images/previews/gourvid/gourvid10.jpg" alt="" />
          </p>
          <p>
            <img className="vidembed" src="/images/previews/gourvid/gourvid11.jpg" alt="" />
          </p>
          <h3>Favicon</h3>
          <p>
            Having a favicon is incredibly important for the website, as it represents our website or brand in a single
            icon. It can either text or an image, however these icons are condensed down into a 16x16 pixel icon so
            there is not an incredible amount of detail.
          </p>
          <p>
            We would want the same for Gourvid, so concepting some strong favicons is important. Fortunately, working in
            wordpress allows us to upload a larger image (as big as 512x512 pixels) and it will condense the image for
            us.
          </p>
          <p>Here are some favicons I’ve created and how they look before and after.</p>
          <img className="vidembed" src="/images/previews/gourvid/gourvid12.jpg" alt="" />
          <h2>Website Development</h2>
          <p>
            The way Wordpress works, is that all the pages are stored in the database. This means the creation of the
            website will be split into 2 parts. Part 1: The Theme.
          </p>
          <p>
            Wordpress websites are based on a theme, and we are creating a theme specifically for Gourvid. The theme
            decides how the website will be styled.
          </p>
          <p>Part 2: Wordpress Pages</p>
          <p>
            Wordpress allows you to create pages, and select which ones will be visible in the menu bar, and which pages
            are children to others.
          </p>
          <p>
            We also have the capability of having a custom image header and logo set, in the case of a future rebranding
            or redesign. The website needs to be editable past its initial release, so creating the website this way is
            the best way to achieve the desired goals.
          </p>
          <p>
            Using the Wordpress Page Builder gives a friendly user interface to create pages, so those without coding
            experience can create a website. This is necessary as the company needs to be able to maintain the website
            without us.
          </p>
          <p>I created Buttons with Mouse Over effects for each of the wineries.</p>
          <video className="vidembed" autoPlay muted loop>
            <source src="/images/previews/gourvid/gourvid13.mp4" type="video/mp4" />
          </video>
          <p>Some Previews of the Menu Bar</p>
          <p>Desktop:</p>
          <p>
            <video className="vidembed" autoPlay muted loop>
              <source src="/images/previews/gourvid/gourvid14.mp4" type="video/mp4" />
            </video>
          </p>
          <p>Mobile:</p>
          <p>
            <video className="vidembed" autoPlay muted loop>
              <source src="/images/previews/gourvid/gourvid15.mp4" type="video/mp4" />
            </video>
          </p>
          <p>
            <b>Gourvid is Still Under Development</b>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
