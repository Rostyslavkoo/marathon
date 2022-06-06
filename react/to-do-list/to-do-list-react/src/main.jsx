import ReactDOM from 'react-dom/client';
import './assets/scss/common.scss';
import { useState } from 'react';
import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
const PRIORITY = {
	LOW: 'low',
	HIGHT: 'hight',
};
function App() {
	const [ImportantTaskValue, setImportantTaskValue] = useState('');
	const [LowTaskValue, setLowTaskValue] = useState('');
	const [tasks, setTasks] = useState([
		{ value: 'hight task', status: PRIORITY.HIGHT, done: false },
		{ value: 'low task', status: PRIORITY.LOW, done: false },
	]);

	function onAddTask(type) {
		const taskValue = type === 'low' ? LowTaskValue : ImportantTaskValue;
		if (!taskValue) return;
		setTasks([
			{
				value: taskValue,
				status: type,
				done: false,
			},
			...tasks,
		]);
		changeTaskValue('', type);
	}

	function onChangeStatus(chosenItem) {
		chosenItem.done = !chosenItem.done;
		setTasks([...tasks]);
	}
	function onDeleteTask(chosenItem) {
		setTasks([
			...tasks.filter(taskItem => taskItem.value !== chosenItem.value),
		]);
		console.log(tasks);
	}
	function onChangeTaskName(e, type) {
		changeTaskValue(e, type);
	}
	function changeTaskValue(value, type) {
		type === PRIORITY.LOW
			? setLowTaskValue(value)
			: setImportantTaskValue(value);
	}

	return (
		<div className='wrapper'>
			<Header
				type={PRIORITY.HIGHT}
				value={ImportantTaskValue}
				placeholder='add important cases'
				onAddTask={onAddTask}
				onChangeTaskName={onChangeTaskName}
				onChangeStatus={onChangeStatus}
				onDeleteTask={onDeleteTask}
				tasks={tasks}
			/>
			<Header
				type={PRIORITY.LOW}
				placeholder='add cases'
				onAddTask={onAddTask}
				onChangeTaskName={onChangeTaskName}
				onChangeStatus={onChangeStatus}
				onDeleteTask={onDeleteTask}
				tasks={tasks}
				value={LowTaskValue}
			/>
		</div>
	);
}

root.render(<App />);
