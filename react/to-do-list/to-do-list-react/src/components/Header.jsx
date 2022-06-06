import Task from './Task.jsx';
import List from './List.jsx';

function Header({
	value,
	placeholder,
	onAddTask,
	onChangeTaskName,
	type,
	tasks,
	onChangeStatus,
	onDeleteTask,
}) {
	return (
		<div className='high__container container'>
			<h1>{type === 'low' ? 'Low' : 'Hight'}</h1>
			<Task
				value={value}
				placeholder={placeholder}
				onInputTask={onAddTask}
				onChangeTaskName={onChangeTaskName}
				type={type}
			/>
			<List
				tasks={tasks}
				onChangeStatus={onChangeStatus}
				onDeleteTask={onDeleteTask}
				type={type}
			/>
		</div>
	);
}
export default Header;
