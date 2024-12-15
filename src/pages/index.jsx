import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Column from '../components/Column';
import styles from "../styles/index.module.css"

export default function Home() {
  const documents = useSelector(state => state.site.documents);
  const [ docs, setDocs ] = useState({
    inProgress: [],
    underReview: [],
    done: [],
  });

  useEffect(() => {
    setDocs({
      inProgress: documents.filter((item) => item.status === "in-progress"),
      underReview: documents.filter((item) => item.status === "under-review"),
      done: documents.filter((item) => item.status === "done"),
    })
  }, [documents]);

  return (
    <main className={styles.app__wrapper}>
      <Column className="inProgress" header="В работе" docs={docs.inProgress}/>
      <Column className="underReview" header="На проверке" docs={docs.underReview}/>
      <Column className="done" header="Завершено" docs={docs.done}/>
    </main>
  );
}
