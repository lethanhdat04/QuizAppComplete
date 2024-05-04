import axios from "axios";

const REST_API_BASE_URL_GET = 'http://localhost:8080/question/allQuestions';

const REST_API_BASE_URL_POST = 'http://localhost:8080/question/add';

export const listQuestion = () => axios.get(REST_API_BASE_URL_GET);

export const createQuestion = (question) => axios.post(REST_API_BASE_URL_POST, question);