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
		console.log('Updating task with value:', value);
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
			className={task.isComplete ? 'task-row complete' : 'task-row'}
			key={index}
		>
			<div className='flex flex-row justify-center'>
				<div
					key={task.id}
					onClick={() => completeTask(task.id)}
					className=''
				>
					{task.text}
				</div>
				<div className='flex gap-2 items-center'>
					<RiCloseCircleLine onClick={() => removeTask(task.id)} />
					<TiEdit onClick={() => setEdit({ id: task.id, value: task.text })} />
				</div>
			</div>
		</div>
	));
}

export default Task;
