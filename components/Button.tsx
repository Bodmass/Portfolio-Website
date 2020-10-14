import styles from './button.module.css'

const Button = ({ children, href }) => {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  )
}

export default Button
