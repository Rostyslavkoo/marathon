const TO_DO = 'To Do';
const IN_PROGRESS = 'In Progress';
const DONE = 'Done';

const list = {
	'create a new practice task': 'In Progress',
	'make a bed': 'Done',
	'new post': 'To Do',
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
	let toDoList = '';
	let inProgressList = '';
	let doneList = '';
	for (item in list) {
		if (list[item] === TO_DO) {
			toDoList += ` ${item}'\n`;
		}
		if (list[item] === IN_PROGRESS) {
			inProgressList += ` '${item}'\n`;
		}
		if (list[item] === DONE) {
			doneList += ` '${item}'\n`;
		}
	}
	console.log(
		`To Do: \n${toDoList || ' --'}\nIn Progress: \n${inProgressList || ' --'}\nDone: \n${doneList || ' --'}\n`
	);
}
addTask('new task');
deleteTask('make a bed');
changeStatus('write a post', 'Done');
showList();
