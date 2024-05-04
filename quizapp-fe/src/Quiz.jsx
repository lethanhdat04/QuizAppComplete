import React, { useState, useEffect } from 'react'
import { RiArrowRightLine } from "react-icons/ri";
import Loader from './components/Loader';
import ResultPage from './components/ResultPage'
import AnswerList from './components/AnswerList';
import Question from './components/Question';
import Button from './components/Button';

const api_url = "http://localhost:8080/quiz/get";

const Quiz = () => {
	const [quizzes, setQuizzes] = useState([]);
	const [quizNo, setQuizNo] = useState(0);
	const [choice, setChoice] = useState("");
	const [score, setScore] = useState(0);
	const [isloading, setIsloading] = useState(true);

	const fetchData = async (url) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		} catch (e) {
			throw new Error(e);
		}
	};

	const handleSelectAnswer = (answer) => setChoice(answer);

	const handleClickNext = () => {
		checkAnswer();
		setQuizNo(quizNo + 1);
	};

	const handleClickTry = () => {
		setIsloading(true);
		setScore(0);
		setChoice("");
		setQuizNo(0);
		fetchData(api_url).then((data) => {
			setQuizzes(data);
			setIsloading(false);
		});
	}

	useEffect(() => {
		fetchData(api_url).then((data) => {
			setQuizzes(data);
			setIsloading(false);
		});
	}, []);

	const currentQuiz = quizzes.length > 0 && quizzes[quizNo];
	const answers = [currentQuiz?.option1, currentQuiz?.option2, currentQuiz?.option3, currentQuiz?.option4]
	const correctAnswer =  currentQuiz?.rightAnswer;
	const isCorrect = correctAnswer === choice;
	
	const checkAnswer = () => isCorrect && setScore(score + 1);

	return (
		<div className='h-screen text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3'>
			<div className=" w-full md:max-w-lg">
				{quizzes.length === 0 || isloading ? (
					<Loader />
				) : quizNo === quizzes.length ? (
					<ResultPage
						score={score}
						quizzes={quizzes}
						onClickTry={handleClickTry}
					/>
				) : (
					<div>
						<div className=" flex justify-between mb-3 font-mono">
							<span className='uppercase'>{currentQuiz?.category}</span>
							<span>
								{quizNo + 1}/{quizzes.length}
							</span>
						</div>

						<Question currentQuiz={currentQuiz} />

						<AnswerList
							answers={answers}
							choice={choice}
							onSelectAnswer={handleSelectAnswer}
						/>

						<Button onClickButton={handleClickNext}>
							Next
							<RiArrowRightLine />
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Quiz