import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Task({ tasks, completeTask, removeTask, updateTask }) {
	const [edit, setEdit] = useState({
		id: null,
		value: '',
	});

	const submitUpdate = (value) => {
		updateTask(edit.id, value);
		setEdit({
			id: null,
			value: '',
		});
	};

	if (edit.id) {
		return (
			<TaskForm
				edit={edit}
				onSubmit={submitUpdate}
			/>
		);
	}

	return tasks.map((task, index) => (
		<div
			className='flex justify-center items-center'
			key={index}
		>
			<div className={`flex flex-row justify-between items-center my-1 p-4 rounded-md w-full text-white ${task.color}`}>
				<div
					key={task.id}
					onClick={() => completeTask(task.id)}
				>
					* {task.text}
				</div>
				<div className='flex gap-3 items-center cursor-pointer'>
					<RiCloseCircleLine onClick={() => removeTask(task.id)} className='text-white text-2xl' />
					<TiEdit onClick={() => setEdit({ id: task.id, value: task.text })} className='text-white text-2xl'/>
				</div>
			</div>
		</div>
	));
}

export default Task;
