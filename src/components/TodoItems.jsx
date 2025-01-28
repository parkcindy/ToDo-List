import React from 'react';
import check_14025690 from '../assets/check_14025690.png';
import unchecked from '../assets/unchecked.png';
import bin_3389017 from '../assets/bin_3389017.png';

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer gap-5'>
        <img className='w-8' src={isComplete ? check_14025690 : unchecked} alt="" />
        <p className={`text-slate-700 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>

      <img onClick={() => {deleteTodo(id)}} className='cursor-pointer w-6' src={bin_3389017} alt="" />
    </div>
  )
}

export default TodoItems
