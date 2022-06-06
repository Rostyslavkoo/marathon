import Task from './Task.jsx';
import List from './List.jsx';

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
export default Header;
