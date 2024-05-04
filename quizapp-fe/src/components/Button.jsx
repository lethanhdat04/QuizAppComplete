import React from "react";

const btnDefaultStyle =
	"bg-black text-white font-mono px-10 py-2 rounded-full float-right flex items-center gap-2";

const Button = ({ children, customStyle, onClickButton }) => (
	<button
		type="button"
		className={customStyle || btnDefaultStyle}
		onClick={onClickButton}
	>
		{children}
	</button>
);

export default Button;
