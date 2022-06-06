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
export default Task