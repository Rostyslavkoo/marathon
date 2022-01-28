const TO_DO = 'To Do';
const IN_PROGRESS = 'In Progress';
const DONE = 'Done';

const list = {
	'create a new practice task': 'In Progress',
	'make a bed': 'Done',
	'write a post': 'To Do',
};

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
	list[event] = TO_DO;
}

function deleteTask(event) {
	if (event in list) {
		delete list[event];
		return;
	}
	console.error('DELETE TASK ERROR!!! task not found');
}

function showList() {
	console.warn('To Do:');
	for (item in list) {
		if (list[item] === TO_DO) {
			console.log(item);
		}
	}
	console.warn('In Progress:');
	for (item in list) {
		if (list[item] === IN_PROGRESS) {
			console.log(item);
		}
	}
	console.warn('Done:');
	for (item in list) {
		if (list[item] === DONE) {
			console.log(item);
		}
	}
}
addTask('new task');
deleteTask('make a bed');
changeStatus('write a post', 'Done');
showList();
