import React from "react";

const Answer = ({ choice, text, onSelectAnswer }) => {
	const answerStyle = {
		label: ` p-3 px-5 block cursor-pointer rounded-full border border-black border-opacity-20 mb-3  ${
			choice === text &&
			"bg-black text-slate-100 border-transparent"
		} hover:bg-black hover:text-slate-100`,
		text: "ps-3 text-lg font-mono",
	};

	return (
		<div>
			<label className={answerStyle.label}>
				<input
					type="radio"
					name="answer"
					checked={choice === text}
					onChange={() => {
						onSelectAnswer(text);
					}}
					// className=" absolute opacity-0"
					className=" accent-yellow-50"
				/>
				<span className={answerStyle.text}>{text}</span>
			</label>
		</div>
	);
};

export default Answer;
