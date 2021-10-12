import React from 'react';
import styles from './question_board.module.css';

const QuestionBoard = ({ title, createdAt, content }) => {
  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <div className={styles.author}>
          <p>{createdAt.substring(0, 10)}</p>
        </div>
      </div>
      <div className={styles.body}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default QuestionBoard;