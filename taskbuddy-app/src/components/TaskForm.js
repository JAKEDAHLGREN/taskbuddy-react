import React, { useState } from 'react';

function TaskForm(props) {
	const [input, setinput] = useState('');

	const handleChange = (e) => {
		setinput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		});

		setinput('');
	};
	return (
		<div className='flex flex-row justify-center mt-6'>
			<form
				className=''
				onSubmit={handleSubmit}
			>
				<input
					className='border-solid border-black border-2'
					type='text'
					placeholder='Add a Task...'
					value={input}
					name='name'
					onChange={handleChange}
				/>
				<button
					type='submit'
				>
					Add Task
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
