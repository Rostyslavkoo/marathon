function Task({ value, placeholder, type, onInputTask, onChangeTaskName }) {
	function onChange(e) {
		onChangeTaskName(e.target.value, type);
	}
	function onClickAdd() {
		onInputTask(type);
	}
	return (
		<div className='search__wrapper'>
			<input
				value={value}
				type='text'
				placeholder={placeholder}
				onChange={e => onChange(e)}
			/>
			<div className='input-btn' onClick={onClickAdd}></div>
		</div>
	);
}
export default Task;
