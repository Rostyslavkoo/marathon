const STATUS = {
	TO_DO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
};
const PRIORITY = {
	HIGHT: 'hight',
	LOW: 'low',
};
const DEFAULT = {
	STATUS: STATUS.TO_DO,
	PRIORITY: PRIORITY.LOW,
};
const localStoreTasks = window.localStorage.getItem('toDoList');
let errorMSG = '';
const list = [];
if (localStoreTasks) {
	JSON.parse(localStoreTasks).forEach(item => {
		list.push(item);
	});
}
function checkValidStatus(status) {
	return Object.values(STATUS).includes(status);
}

function checkValidPriority(priority) {
	return Object.values(PRIORITY).includes(priority);
}
function checkExistTask(taskName) {
	return list.find(task => task.name === taskName);
}
function checkEmptytTask(taskName) {
	return Boolean(taskName)
}
function checkSameStatus(taskName, status) {
	let task = list.find(task => task.name === taskName);
	return task.status === status;
}
function changeStatus(taskName, status) {
	errorMSG = '';
	let isExistTrask = checkExistTask(taskName);
	let isValidStatus = checkValidStatus(status);
	let hasSameStatus = checkSameStatus(taskName, status);
	if (!isExistTrask) {
		errorMSG = 'CHANGE STATUS ERROR!!! task not found';
		return;
	}
	if (!isValidStatus) {
		errorMSG = 'CHANGE STATUS ERROR!!! status not valid';
		return;
	}
	if (hasSameStatus) {
		errorMSG = 'CHANGE STATUS ERROR!!! task has the same status';
		return;
	}

	let task = list.find(task => task.name === taskName);
	task.status = status;
}
function addTask(
	taskName,
	priority = DEFAULT.PRIORITY,
	status = DEFAULT.STATUS
) {
	errorMSG = '';
	let isExistTrask = checkExistTask(taskName);
	let isEmptyTask = checkEmptytTask(taskName);
	let isValidPriority = checkValidPriority(priority);
	let isValidStatus = checkValidStatus(status);

	if (!isEmptyTask) {
		errorMSG = 'ADD TASK ERROR!!! task cannot be empty';
		return;
	}
	if (isExistTrask) {
		errorMSG = 'ADD TASK ERROR!!! task already exist';
		return;
	}
	if (!isValidStatus) {
		errorMSG = 'CHANGE STATUS ERROR!!! status not valid';
		return;
	}
	if (!isValidPriority) {
		errorMSG = 'ADD TASK ERROR!!!!! not valid priority';
		return;
	}
	const newTask = {
		name: taskName,
		status: status,
		priority: priority,
	};
	list.push(newTask);
}
function deleteTask(taskName) {
	errorMSG = '';
	let isExistTask = checkExistTask(taskName);
	if (!isExistTask) {
		errorMSG = 'DELETE TASK ERROR!!! task not found';
		return;
	}
	let taskIndex = list.indexOf(list.find(task => task.name === taskName));
	list.splice(taskIndex, 1);
}

function showBy(event) {
	const emptyTasks = ' --';
	const tasks = {
		[event === 'status' ? STATUS.TO_DO : PRIORITY.HIGHT]: '',
		[event === 'status' ? STATUS.IN_PROGRESS : PRIORITY.LOW]: '',
		[event === 'status' ? STATUS.DONE : '']: '',
	};

	list.forEach(task => {
		tasks[
			event === 'status' ? task.status : task.priority
		] += ` ${task.name} \n`;
	});

	let showByStatus = `${STATUS.TO_DO}: \n${
		tasks[STATUS.TO_DO] || emptyTasks
	}\n${STATUS.IN_PROGRESS}: \n${tasks[STATUS.IN_PROGRESS] || emptyTasks}\n${
		STATUS.DONE
	}: \n${tasks[STATUS.DONE] || emptyTasks}\n`;

	let showByPriority = `${PRIORITY.HIGHT}: \n${
		tasks[PRIORITY.HIGHT] || emptyTasks
	}\n${PRIORITY.LOW}: \n${tasks[PRIORITY.LOW] || emptyTasks}\n`;

	// event === 'status' ? showByStatus : showByPriority;
}

export {
	STATUS,
	PRIORITY,
	DEFAULT,
	list,
	checkValidStatus,
	checkValidPriority,
	checkExistTask,
	checkSameStatus,
	changeStatus,
	addTask,
	deleteTask,
	showBy,
	errorMSG,
};
