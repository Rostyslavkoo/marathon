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

const list = [
	{
		name: 'create a post',
		status: STATUS.IN_PROGRESS,
		priority: PRIORITY.log,
	},
	{
		name: 'test',
		status: STATUS.DONE,
		priority: PRIORITY.HIGHT,
	},
	{
		name: 'make a bed',
		status: STATUS.IN_PROGRESS,
		priority: PRIORITY.HIGHT,
	},
	{
		name: 'test',
		status: STATUS.IN_PROGRESS,
		priority: PRIORITY.LOW,
	},
];

function checkValidStatus(status) {
	return Object.values(STATUS).includes(status);
}

function checkValidPriority(priority) {
	return Object.values(PRIORITY).includes(priority);
}
function checkExistTask(taskName) {
	return list.find(task => task.name === taskName);
}
function checkSameStatus(taskName, status) {
	let task = list.find(task => task.name === taskName);
	return task.status === status;
}
function changeStatus(taskName, status) {
	let isExistTrask = checkExistTask(taskName);
	let isValidStatus = checkValidStatus(status);
	let hasSameStatus = checkSameStatus(taskName, status);
	if (!isExistTrask) {
		console.error('CHANGE STATUS ERROR!!! task not found');
		return;
	}
	if (!isValidStatus) {
		console.error('CHANGE STATUS ERROR!!! status not valid');
		return;
	}
	if (hasSameStatus) {
		console.error('CHANGE STATUS ERROR!!! task has the same status');
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
	let isExistTrask = checkExistTask(taskName);
	let isValidPriority = checkValidPriority(priority);
	let isValidStatus = checkValidStatus(status);

	if (isExistTrask) {
		console.error('ADD TASK ERROR!!! task already exist');
		return;
	}
	if (!isValidStatus) {
		console.error('CHANGE STATUS ERROR!!! status not valid');
		return;
	}
	if (!isValidPriority) {
		console.error('ADD TASK ERROR!!!!! not valid priority');
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
	let isExistTask = checkExistTask(taskName);
	if (!isExistTask) {
		console.error('DELETE TASK ERROR!!! task not found');
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

	console.log(event === 'status' ? showByStatus : showByPriority);
}
addTask('new task', 'hight');
deleteTask('make a bed');
changeStatus('create a post', 'Done');
showBy('status');
