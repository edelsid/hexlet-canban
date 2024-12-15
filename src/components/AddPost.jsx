import styles from "../styles/AddPost.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addDocument } from "../store/site";

export default function AddPost({ setAddPost }) {
  const dispatch = useDispatch();
  const [ data, setData ] = useState({
    title: "",
    text: "",
    status: "in-progress"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDocument(data));
    setData({
      title: "",
      text: "",
    });
    setAddPost(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData ((prevForm) => ({
      ...prevForm,
      title: name === 'title' ? value : prevForm.title,
      text: name === 'text' ? value : prevForm.text,
    }));
  }

  return (
    <div className={styles.add__wrapper}>
      <form className={styles.add__form} onSubmit={handleSubmit}>
        <h3>Новый документ</h3>
        <ul className={styles.add__list}>
          <li>
            <label htmlFor="add-title">Заголовок</label>
            <input onChange={handleChange} id="add-title" className={styles.add__title} type="text" name="title" value={data.title}></input>
          </li>
          <li>
            <label htmlFor="add-text">Текст</label>
            <input onChange={handleChange} id="add-text" className={styles.add__text} type="text" name="text" value={data.text}></input>
          </li>
        </ul>
        <button type="submit" className={styles.btn__submit}>Добавить</button>
      </form>
    </div>
  )
}
