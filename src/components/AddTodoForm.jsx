import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';

function AddTodoForm() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();


    const onClick = () => {

        
        if (value) {
			dispatch(
				addTodo({
					title: value
				})
			);
		}	};

  return (
    <div>
        <label className=''>Name</label>
    <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Add todo...'
        value={value}
        onChange={(event) => setValue(event.target.value)}
    ></input>

    <button onClick={onClick} type='button' className=''>
        Submit
    </button></div>
  )
}

export default AddTodoForm