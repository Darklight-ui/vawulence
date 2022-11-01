/** @format */
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
	const [answerShowing, setAnswerShowing] = useState(false);

	return (
		<article className='faq' onClick={() => setAnswerShowing((prev) => !prev)}>
			<div>
				<h4>{question}</h4>
				<button className='faq__icon'>
					{!answerShowing ? <AiOutlinePlus /> : <AiOutlineMinus />}
				</button>
			</div>
			{answerShowing && <p>{answer}</p>}
		</article>
	);
};

export default FAQ;
