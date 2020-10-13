import { FaTwitter, FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import styles from './footer.module.css'

function FooterList() {
  function FooterIcon({ children, link }) {
    return (
      <div className={styles.icon}>
        <a href={link}> {children}</a>
      </div>
    )
  }
  return (
    <div className={styles.icons}>
      <FooterIcon link="https://twitter.com/bodmass">
        <FaTwitter />
      </FooterIcon>
      <FooterIcon link="https://github.com/bodmass">
        <FaGithub />
      </FooterIcon>
      <FooterIcon link="https://linkedin.com/in/aziz-arar">
        <FaLinkedinIn />
      </FooterIcon>
      <FooterIcon link="mailto:aziz.n.arar@gmail.com">
        <FaEnvelope />
      </FooterIcon>
    </div>
  )
}

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footeritems}>
        <div className={styles.icons}>
          <FooterList />
        </div>
        <div>© Aziz Arar</div>
      </div>
    </div>
  )
}

export default Footer
