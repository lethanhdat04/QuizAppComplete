import axios from "axios"

const REST_API_QUIZ_URL_GET  = "http://localhost:8080/quiz/get"

export const listQuiz = () => axios.get(REST_API_QUIZ_URL_GET)