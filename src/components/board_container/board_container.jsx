import React, { useEffect, useState } from "react"
import QuestionBoard from "../board/qestion_board"
import styles from "./board_container.module.css"
import HttpClient from "../../network/httpClient"
import BoardService from "../../service/questionBoardService"
import { useHistory } from "react-router"

const BoardContainer = () => {
    const history = useHistory()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        new BoardService(new HttpClient(), process.env.REACT_APP_BASE_URL)
            .getBoards()
            .then((response) => setQuestions(response.data))
            .catch((error) => console.log(error))
    }, [])

    const onClickHandler = () => {
        history.push("/create/question")
    }

    return (
        <>
            <header className={styles.title}>
                <h1 className={styles.name}>Q & A</h1>
                <button className={styles.postButton} onClick={onClickHandler}>
                    POST
                </button>
            </header>
            <div className={styles.container}>
                {questions.map((question) => (
                    <QuestionBoard
                        key={question.id}
                        title={question.title}
                        createdAt={question.createdAt}
                        content={question.content}
                    />
                ))}
            </div>
        </>
    )
}

export default BoardContainer
