import ReactDOM from 'react-dom/client';
import './assets/scss/common.scss';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function List(props) {
	if (!props.tasks.length) return;
	const taskList = props.tasks
		.filter(item => item.status === props.type)
		.map((item, key) => (
			<div key={key} className={item.done ? ' task task-done' : 'task'}>
				<div
					className={item.done ? ' done-btn done' : 'done-btn'}
					onClick={() => props.onChangeStatus(item)}
				></div>
				<p>{item.value}</p>
				<div
					className='delete-btn'
					onClick={() => props.onDeleteTask(item)}
				></div>
			</div>
		));

	return <div className='todo-box'>{taskList}</div>;
}

function Task(props) {
	function onChange(e) {
		props.onChangeTaskName(e.target.value, props.type);
	}
	function onClickAdd() {
		props.onInputTask(props.type);
	}
	return (
		<div className='search__wrapper'>
			<input
				value={props.value}
				type='text'
				placeholder={props.placeholder}
				onChange={e => onChange(e)}
			/>
			<div className='input-btn' onClick={onClickAdd}></div>
		</div>
	);
}

function Header(props) {
	return (
		<div className='high__container container'>
			<h1>{props.type === 'low' ? 'Low' : 'Hight'}</h1>
			<Task
				value={props.value}
				placeholder={props.placeholder}
				onInputTask={props.onAddTask}
				onChangeTaskName={props.onChangeTaskName}
				type={props.type}
			/>
			<List
				tasks={props.tasks}
				onChangeStatus={props.onChangeStatus}
				onDeleteTask={props.onDeleteTask}
				type={props.type}
			/>
		</div>
	);
}
function App() {
	const [ImportantTaskValue, setImportantTaskValue] = useState('');
	const [LowTaskValue, setLowTaskValue] = useState('');
	const [tasks, setTasks] = useState([
		{ value: 'hight task', status: 'hight', done: false },
		{ value: 'low task', status: 'low', done: false },
	]);

	function handleAddTask(type) {
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
		setTasks([{ chosenItem }, ...tasks]);
	}
	function onDeleteTask(chosenItem) {
		setTasks([...tasks.filter(taskItem => taskItem.value !== chosenItem.value)]);
		console.log(tasks);
	}
	function onChangeTaskName(e, type) {
		changeTaskValue(e, type);
	}
	function changeTaskValue(value, type) {
		type === 'low' ? setLowTaskValue(value) : setImportantTaskValue(value);
	}

	return (
		<div className='wrapper'>
			<Header
				type='hight'
				value={ImportantTaskValue}
				placeholder='add important cases'
				onAddTask={handleAddTask}
				onChangeTaskName={onChangeTaskName}
				onChangeStatus={onChangeStatus}
				onDeleteTask={onDeleteTask}
				tasks={tasks}
			/>
			<Header
				type='low'
				placeholder='add cases'
				onAddTask={handleAddTask}
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
