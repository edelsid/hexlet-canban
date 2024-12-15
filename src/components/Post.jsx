import styles from "../styles/Post.module.css"

export default function Post({ title, text }) {
  return (
    <li className={styles.post}>
      <h3 className={styles.post__title}>{title}</h3>
      <p>{text}</p>
    </li>
  )
}
