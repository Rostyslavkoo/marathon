const STATUS = {
	TO_DO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
};
const list = {
	'create a new practice task': STATUS.IN_PROGRESS,
	'make a bed': STATUS.DONE,
	'new post': STATUS.TO_DO,
	'write a post': STATUS.TO_DO,
};
function checkValidStatus(status) {
	const isValidStatus = status in STATUS;
}

function changeStatus(event, status) {
	if (event in list) {
		if (list[event] !== status) {
			list[event] = status;
		} else {
			console.error('CHANGE STATUS ERROR!!! task have same status');
		}
	} else {
		console.error('CHANGE STATUS ERROR!!! task not found');
	}
}
function addTask(event) {
	if (event in list) {
		console.error('ADD TASK ERROR!!! task already exist');
		return;
	}
	list[event] = STATUS.TO_DO;
}
function deleteTask(event) {
	if (event in list) {
		delete list[event];
		return;
	}
	console.error('DELETE TASK ERROR!!! task not found');
}

function showList() {
	const emptyTasks = ' --';
	const tasks = {
		[STATUS.TO_DO]: '',
		[STATUS.IN_PROGRESS]: '',
		[STATUS.DONE]: '',
	};
	for (item in list) {
		tasks[list[item]] += ` ${item} \n`;
	}
	console.log(
		`${STATUS.TO_DO}: \n${tasks[STATUS.TO_DO] || emptyTasks}\n${STATUS.IN_PROGRESS}: \n${tasks[STATUS.IN_PROGRESS] || emptyTasks}\n${STATUS.DONE}: \n${tasks[STATUS.DONE] || emptyTasks}\n`
	);
}
addTask('new task');
deleteTask('make a bed');
changeStatus('write a post', 'Done');
showList();
