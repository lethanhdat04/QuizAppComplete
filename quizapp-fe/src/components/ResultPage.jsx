import React from "react";
import Button from "./Button";

const ResultPage = ({ score, quizzes, onClickTry }) => (
	<div className="h-screen flex flex-col justify-center items-center gap-3 pb-8">
		<img
			src="/yayy.gif"
			className=" w-48  mt-auto md:mt-0 ms-11 "
			alt=""
		/>

		<span className="text-3xl font-mono">Congrats</span>

		<h2 className=" font-mono text-5xl">{score * (100 / quizzes.length)}% Score</h2>

		<span className="block text-lg font-mono">Quiz completed successfully.</span>

		<Button
			customStyle=" w-full md:w-fit bg-black text-white px-8 py-2 rounded-full mt-auto md:mt-8 font-mono"
			onClickButton={onClickTry}
		>
			Let's do it again
		</Button>
	</div>
);

export default ResultPage;
