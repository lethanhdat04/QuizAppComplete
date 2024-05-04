import React, { useState } from 'react'
import { createQuestion } from '../services/QuestionService';
import { useNavigate } from 'react-router-dom';

const QuestionComponent = () => {

    const [questionTitle, setQuestionTitle] = useState('')
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [rightAnswer, setRightAnswer] = useState('')
    const [difficulty_level, setDifficulty_level] = useState('')
    const [category, setCategory] = useState('');

    const navigator = useNavigate();

    function saveQuestion(e){
        e.preventDefault();

        const question = {questionTitle, option1, option2, option3, option4, rightAnswer, difficulty_level, category};
        console.log(question);
        createQuestion(question).then((response) => {
            console.log(response.data);
            navigator('/question/allQuestions')
        })
    }

  return (
    
    <div className="font-mono w-full max-w-sm p-4 bg-white border border-gray-200 rounded-16px shadow sm:p-6 md:p-8 mx-auto my-auto">
        <form className="space-y-6">
            <h5 className="text-xl font-bold text-center text-gray-900uppercase">Add the question</h5>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title of question</label>
                <input type="text" name="questionTitle" value={questionTitle} onChange={(e) => setQuestionTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="questionTitle" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option1</label>
                <input type="text" name="option1" value={option1} onChange={(e) => setOption1(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option2</label>
                <input type="text" name="option2" value={option2} onChange={(e) => setOption2(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option3</label>
                <input type="text" name="option3" value={option3} onChange={(e) => setOption3(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option4</label>
                <input type="text" name="option4" value={option4} onChange={(e) => setOption4(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RightAnswer</label>
                <input type="text" name="rightAnswer" value={rightAnswer} onChange={(e) => setRightAnswer(e.target.value)} placeholder="rightAnswer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Difficult</label>
                <input type="text" name="difficulty_level" value={difficulty_level} onChange={(e) => setDifficulty_level(e.target.value)} placeholder="rightAnswer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="rightAnswer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <button onClick={saveQuestion} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to your question</button>
        </form>
    </div>
  )
}

export default QuestionComponent