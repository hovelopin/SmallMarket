import React, { useState } from 'react';
import styles from './create_question_board.module.css';
import HttpClient from '../../network/httpClient';
import BoardService from '../../service/questionBoardService';
import { useHistory } from 'react-router';

const CreateQuestion = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();
  const TOKEN = 'token';
  const token = localStorage.getItem(TOKEN);
  const base = process.env.REACT_APP_BASE_URL;
  const httpClient = new HttpClient();
  const boardService = new BoardService(httpClient, base, token);

  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const onDescriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  }

  const onCreateHandler = () => {
    boardService.createBoard(title, description);
    alert('Success create post!');
    history.push('/board');
  }

  return (
    <>
      <header className={styles.create}>
        <h1>Post Q & A</h1>
        <button 
          className={styles.createButton}
          onClick={onCreateHandler}
        >
          Creae Q & A
        </button>
      </header>
      <section className={styles.container}>
        <div className={styles.post}>
          <div className={styles.title}>
            <input 
              type="text" 
              placeholder="Write your question title" 
              className={styles.inputTitle}
              onChange={onTitleChangeHandler}
            />
            <div className={styles.author}>
              <p>Author</p>
            </div>
          </div>
          <div className={styles.body}>
            <textarea 
              type="text"
              placeholder="Write your opninion"
              onChange={onDescriptionChangeHandler}
              className={styles.inputDescription}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateQuestion;