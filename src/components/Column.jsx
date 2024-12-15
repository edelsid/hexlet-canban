import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import styles from "../styles/Column.module.css"
import Post from "./Post"

export default function Column({ className, header, docs }) {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    console.log(e);
  }

  return (
    <div className={`${styles.column} ${className}`}>
      <h2>{header}</h2>
      <ul className={styles.column__list}>
        {docs.map((item) => <Post key={item.id} title={item.title} text={item.text}/>)}
      </ul>
      {className === "inProgress" && 
      <button 
        className={styles.btn__add} 
        type="button"
        onClick={handleAdd}>
          Добавить документ
      </button>}
    </div>
  )
}
