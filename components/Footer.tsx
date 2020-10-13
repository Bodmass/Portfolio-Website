import { FaTwitter, FaEnvelope } from 'react-icons/fa'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footeritems}>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <a href="https://twitter.com/bodmassad">
              {' '}
              <FaTwitter />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="mailto:aziz.n.arar@gmail.com">
              {' '}
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div>Aziz Arar © 2020</div>
      </div>
    </div>
  )
}

export default Footer
