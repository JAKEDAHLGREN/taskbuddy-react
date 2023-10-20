import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskList() {
	const [tasks, setTasks] = useState([]);

	const addTask = task => {
		if (!task.text || /^\s*$/.test(task.text)) {
			return;
		}

		const newTask = [task, ...tasks];
		setTasks(newTask);
		console.log(newTask);
	};
	return (
		<div>
			<h1 className='text-center text-xl font-bold mt-4'>Task List</h1>
			<TaskForm 
                onSubmit={addTask} 
            />
		</div>
	);
}

export default TaskList;
