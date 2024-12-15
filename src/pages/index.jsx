'use client'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Column from '../components/Column';
import styles from "../styles/index.module.css"

export default function Home() {
  const documents = useSelector(state => state.site.documents);
  const [ currentBoard, setCurrentBoard ] = useState(null);
  const [ boards, setBoards ] = useState([
    {
      id: 1, 
      className: "inProgress", 
      header: "В работе",
      docs: documents.filter((item) => item.status === "in-progress"),
    },
    {
      id: 2, 
      className: "underReview", 
      header: "На проверке",
      docs: documents.filter((item) => item.status === "under-review"),
    },
    {
      id: 3, 
      className: "done", 
      header: "Завершено",
      docs: documents.filter((item) => item.status === "done"),
    },
  ]);

  return (
    <main className={styles.app__wrapper}>
      {boards.map((item) => <Column 
        className={item.className}
        header={item.header}
        key={item.id}
        docs={item.docs}
        board={item}
        boards = {boards}
        setBoards={setBoards}
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
        id={item.id}/>)}
    </main>
  );
}
