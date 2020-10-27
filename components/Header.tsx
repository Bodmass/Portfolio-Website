import styles from './header.module.css'

function MenuBar() {
  function MenuBarButton({ link, children }) {
    return (
      <a href={link} className={styles.menubarbutton}>
        <div className={styles.menubarbuttontext}>{children}</div>
      </a>
    )
  }
  return (
    <div className={styles.menubar}>
      <MenuBarButton link="..">Home</MenuBarButton>
      <MenuBarButton link="aboutme">About</MenuBarButton>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerlogo}>
          <img src="../images/aziz.png" alt="logo" draggable="false" />
        </div>
        <div className={styles.headertext}>C++ | C# | JS</div>
      </div>
      <MenuBar />
    </div>
  )
}

export default Header
