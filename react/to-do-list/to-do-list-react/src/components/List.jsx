function List({ tasks, type, onDeleteTask, onChangeStatus }) {
	if (!tasks.length) return;
	const taskList = tasks
		.filter(item => item.status === type)
		.map((item, key) => (
			<div key={key} className={item.done ? ' task task-done' : 'task'}>
				<div
					className={item.done ? ' done-btn done' : 'done-btn'}
					onClick={() => onChangeStatus(item)}
				></div>
				<p>{item.value}</p>
				<div className='delete-btn' onClick={() => onDeleteTask(item)}></div>
			</div>
		));

	return <div className='todo-box'>{taskList}</div>;
}

export default List;
