import styles from "../styles/Post.module.css"

export default function Post({ title, text, dragStart, dragEnd, dragLeave, dragOver, drop }) {

  return (
    <li 
      className={styles.post} 
      draggable={true}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragLeave={dragLeave}
      onDragOver={dragOver}
      onDrop={drop}>
        <h3 className={styles.post__title}>{title}</h3>
        <p>{text}</p>
    </li>
  )
}
