import React, {useEffect, useState} from 'react'
import { listQuestion } from '../services/QuestionService'
import { Navigate, useNavigate } from 'react-router-dom'

export const ListQuestionComponent = () => {


    const [questions, setQuestions] = useState([])
    
    const navigator = useNavigate();

    useEffect(() => {
        listQuestion().then((response) => {
            setQuestions(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewQuestion(){
        navigator('/add-question')
    }


  return (
    <div className='container px-4'>
        <h1 className='font-mono text-xl text-center uppercase pt-4'>List of Questions</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-mono py-2 px-2 rounded-md' onClick={addNewQuestion}>
            Add Question
        </button>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th scope='col' className='px-2 py-2 font-mono text-base'>ID</th>
                        <th scope='col' className='px-2 py-2 font-mono text-base'>Question Title</th>
                        <th scope='col' className='px-2 py-2 font-mono text-base'>Option 1</th>
                        <th scope='col' className='px-2 py-2 font-mono text-base'>Option 2</th>
                        <th scope='col' className='px-2 py-2 font-mono text-base'>Option 3</th>
                        <th scope='col' className='px-2 py-2 font-mono text-base'>Option 4</th>
                        <th scope="col" className="px-4 py-3"><span className='sr-only'>Edit</span></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map(question =>
                            <tr className='odd:bg-white even:bg-gray-50 border-b' key={question.id}>
                                <th className='scope="row" px-4 py-2 font-mono text-gray-900 whitespace-nowrap'>{question.id}</th>
                                <th className='scope="row" px-4 py-2 font-mono text-gray-900'>{question.questionTitle}</th>
                                <td className='px-2 py-2 font-mono' >{question.option1}</td>
                                <td className='px-2 py-2 font-mono' >{question.option2}</td>
                                <td className='px-2 py-2 font-mono' >{question.option3}</td>
                                <td className='px-2 py-2 font-mono' >{question.option4}</td>
                                <td class="px-6 py-4 text-right">
                    <               a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
