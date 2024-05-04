import React from "react";

const questionStyle = "font-mono text-2xl leading-tight";

const Question = ({ currentQuiz }) => (
	<p className={questionStyle}>{currentQuiz?.questionTitle}</p>
);

export default Question;
