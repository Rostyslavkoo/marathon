import ReactDOM from 'react-dom/client';
import './assets/scss/common.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

function TasksContainer(props) {
	const taskList = props.tasks
		.filter(item => item.status === props.type)
		.map((item, key) => (
			<div key={key} className={item.done ? ' task task-done' : 'task'}>
				<div className={item.done ? ' done-btn done' : 'done-btn'}></div>
				<p>{item.value}</p>
				<div className='delete-btn'></div>
			</div>
		));

	return (
		<div className='high__container container'>
			<h1>{props.type === 'low' ? 'Low' : 'Hight'}</h1>
			<div className='search__wrapper'>
				<input type='text' placeholder={props.placeholder} />
				<div className='input-btn'></div>
			</div>
			<div className='todo-box'>{taskList}</div>
		</div>
	);
}
function App() {
	const tasks = [
		{ value: 'hight task', status: 'hight', done: false },
		{ value: 'low task', status: 'low', done: true },
	];
	return (
		<div className='wrapper'>
			<TasksContainer
				type='hight'
				placeholder='add important cases'
				tasks={tasks}
			/>
			<TasksContainer type='low' placeholder='add cases' tasks={tasks} />
		</div>
	);
}

root.render(<App />);
