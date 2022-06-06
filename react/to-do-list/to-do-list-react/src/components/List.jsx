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

export default List;
