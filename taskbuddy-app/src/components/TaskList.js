import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

function TaskList() {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		if (!task.text || /^\s*$/.test(task.text)) {
			return;
		}
		const newTask = [task, ...tasks];
		setTasks(newTask);
	};

	const updateTask = (taskId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}
		setTasks((prev) =>
			prev.map((item) => (item.id === taskId ? newValue : item))
		);
	};

	const removeTask = (id) => {
		const removeArr = [...tasks].filter((task) => task.id !== id);

		setTasks(removeArr);
	};

	const completeTask = (id) => {
		let updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.isComplete = !task.isComplete;
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	return (
		<div className='flex flex-col justify-center bg-slate-800 p-12 mt-11 rounded-lg overflow-auto'>
			<h1 className='text-center text-xl font-bold mt-1 text-white'>
				TASKS OF THE DAY
			</h1>
			<TaskForm onSubmit={addTask} />
			<div>
				<Task
					tasks={tasks}
					completeTask={completeTask}
					removeTask={removeTask}
					updateTask={updateTask}
				/>
			</div>
		</div>
	);
}

export default TaskList;
