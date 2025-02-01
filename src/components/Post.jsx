import styles from "../styles/Post.module.css"

export default function Post({ title, text, img, dragStart, dragEnd, dragLeave, dragOver, drop }) {

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
        {img ? <img src={img.link} alt={img.alt} className={styles.post__image}/> : <></>}
    </li>
  )
}
