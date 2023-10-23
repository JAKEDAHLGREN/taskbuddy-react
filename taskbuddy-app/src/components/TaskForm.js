import React, { useState } from 'react';

function TaskForm(props) {
	const [input, setInput] = useState('');

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		});
		setInput('');
	};
	return (
		<div className='flex flex-row justify-center mt-6 '>
			<form
				onSubmit={handleSubmit}
			>
				<input
					className='border-solid border-black border-2'
					type='text'
					placeholder='Enter a Task...'
					value={input}
					name='text'
					onChange={handleChange}
				/>
				<button
					type='submit'
          className='rounded-lg bg-blue-500 hover:bg-blue-700 text-white ml-2 py-1 px-3'
				>
					Add Task
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
