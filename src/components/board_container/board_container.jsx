import React from 'react';
import QuestionBoard from '../board/qestion_board';
import styles from './board_container.module.css';

const BoardContainer = () => {
  return (
    <>
      <div className={styles.title}>
        <h1>Q & A</h1>
      </div>
      <div className={styles.container}>
        <QuestionBoard />
        <QuestionBoard />
        <QuestionBoard />
        <QuestionBoard />
      </div>
    </>
  );
}

export default BoardContainer;