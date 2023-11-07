import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
	const [input, setInput] = useState('');
	const [colorIndex, setColorIndex] = useState(0);

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
			color:
			colorIndex % 6 === 0 
			? 'bg-gradient-to-r from-orange-500 to-red-500'
			: colorIndex % 6 === 1 
			?'bg-gradient-to-r from-purple-500 to-indigo-600'
			: colorIndex % 6 === 2 
			?'bg-gradient-to-r from-pink-500 to-red-600'
			: colorIndex % 6 === 3
			?'bg-gradient-to-r from-lime-500 to-emerald-600'
			: colorIndex % 6 === 4 
			?'bg-gradient-to-r from-teal-500 to-blue-600'
			:'bg-gradient-to-r from-amber-500 to-cyan-600'
		});
		setColorIndex(colorIndex + 1);
		setInput('');
	};
	return (
		<div className='flex flex-row justify-center mt-4 mb-6'>
			<form onSubmit={handleSubmit}>
				<input
					className='border-solid border-black border-2 rounded-md h-8'
					type='text'
					placeholder=' Enter a Task...'
					value={input}
					name='text'
					onChange={handleChange}
					autoFocus 
				/>
				<button
					type='submit'
					className='rounded-md bg-blue-500 hover:bg-blue-700 text-white ml-2 py-1 px-3'
				>
					Add Task
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
