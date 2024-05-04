import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <ul className='flex bg-slate-500 text-xl'>
                <li className='mr-6 p-2'>
                    <a className='text-white font-mono' href="http://localhost:3000">ListQuestions</a>
                </li>
                <li className='mr-6 p-2'>
                    <a className='text-white font-mono' href='http://localhost:3000/quiz'>Quiz</a>
                </li>
                <li className='mr-6 p-2'>
                    <a className='text-gray-400 cursor-not-allowed font-mono' href='#'>Disabled</a>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default HeaderComponent