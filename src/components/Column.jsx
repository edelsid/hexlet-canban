import { useDispatch, useSelector } from "react-redux";
import { setCard, changeDocs } from "../store/site";
import { useState } from "react";
import styles from "../styles/Column.module.css"
import Post from "./Post"
import AddPost from "./AddPost";

export default function Column({ 
  className, 
  header, 
  docs, 
  board, 
  boards, 
  setBoards,
  currentBoard,
  setCurrentBoard}) {

  const dispatch = useDispatch();
  const documents = useSelector(state => state.site.documents);
  const currentCard = useSelector(state => state.site.currentCard);
  const [ addPost, setAddPost ] = useState(false);

  const handleAdd = () => {
    setAddPost(!addPost);
  }

  const dragStart = (e, card, board) => {
    setCurrentBoard(board);
    dispatch(setCard(card));
  }

  const dragEnd = (e) => {
    e.target.closest("li").style.background = "white";
  }

  const dragLeave = (e) => {
    e.target.closest("li").style.background = "white";
  }

  const dragOver = (e) => {
    e.preventDefault();
    e.target.closest("li").style.background = "lightgrey";
  }

  const drop = (e, card, board) => {
    e.preventDefault();
    const currentIndex = currentBoard.docs.indexOf(currentCard);
    currentBoard.docs.splice(currentIndex, 1);
    const dropIndex = board.docs.indexOf(card);
    board.docs.splice(dropIndex + 1, 0, currentCard);

    const newDocuments = [...documents];
    const newCard = { ...currentCard };
    newCard.status = board.id;
    const docIndex = newDocuments.indexOf(currentCard);
    newDocuments[docIndex] = newCard;
    dispatch(changeDocs(newDocuments));

    setBoards(boards.map((item) => {
      if (item.id !==board.id) {
        return item;
      }
      if (item.id === board.id) {
        return board;
      }
      if (item.id === currentBoard.id) {
        return currentBoard;
      }
    }));

    e.target.closest("li").style.background = "white";
  }

  return (
    <div className={`${styles.column} ${className}`}>
      <h2>{header}</h2>
      <ul className={styles.column__list}>
        {docs.map((item) => <Post 
          key={item.id} 
          title={item.title} 
          text={item.text}
          dragStart={(e) => dragStart(e, item, board)}
          dragEnd={dragEnd}
          dragLeave={dragLeave}
          dragOver={dragOver}
          drop={(e) => drop(e, item, board)}/>)}
      </ul>
      {className === "inProgress" && 
      <button 
        className={`${styles.btn__add} ${addPost ? "active" : ""}`} 
        type="button"
        onClick={handleAdd}>
          Добавить документ
      </button>}
      {className === "inProgress" && addPost ? <AddPost setAddPost={setAddPost}/> : <></>}
    </div>
  )
}
