import * as operations from './operations.js';

let pushBtn = document.querySelector('#push');
let newInput = document.querySelector('.new-task input');
let tasks__inner = document.querySelector('.tasks__inner');
let error_msg = document.querySelector('.error-msg');
let no_msg = document.querySelector('#no-msg');

pushBtn.addEventListener('click', () => {
	operations.addTask(
		newInput.value,
		operations.DEFAULT.PRIORITY,
		operations.DEFAULT.STATUS
	);
	setErrorMsg();
	window.localStorage.setItem('toDoList', JSON.stringify(operations.list));
	newInput.value = '';
	showTasks('status');
});

function setErrorMsg(message) {
	if (operations.errorMSG) {
		error_msg.innerHTML = operations.errorMSG;
	} else {
		error_msg.innerHTML = '';
	}
}

function showTasks(event) {
	document.querySelectorAll('.tasks_block').forEach(item => {
		item.innerHTML = '';
	});
	if (operations.list.length < 1) {
		no_msg.style.display = 'block';
		tasks__inner.style.display = 'none';
		return;
	}
	const tasks = {
		[event === 'status' ? operations.STATUS.TO_DO : operations.PRIORITY.HIGHT]:
			[],
		[event === 'status'
			? operations.STATUS.IN_PROGRESS
			: operations.PRIORITY.LOW]: [],
		[event === 'status' ? operations.STATUS.DONE : '']: [],
	};

	operations.list.forEach(task => {
		let htmlTask = document.createElement('div');
		htmlTask.className = 'task';
		htmlTask.innerHTML = `<span >${task.name}</span>
        <span class="date">${new Date().toLocaleDateString('en-GB')}</span>
                 ${
										task.status === operations.STATUS.TO_DO
											? '<button class="to-progress"> <i class="fa fa-play"></i></button>'
											: task.status === operations.STATUS.IN_PROGRESS
											? '<button class="to-done"> <i class="fa fa-check-double"></i></button>'
											: ''
									}
         <button id="" class="delete"> <i  class="fa fa-trash-alt"></i></button>`;

		if (task.status === operations.STATUS.TO_DO) {
			htmlTask.querySelector('.to-progress').onclick = function () {
				operations.changeStatus(task.name, operations.STATUS.IN_PROGRESS);
				window.localStorage.setItem(
					'toDoList',
					JSON.stringify(operations.list)
				);
				setErrorMsg();
				showTasks('status');
			};
		} else if (task.status === operations.STATUS.IN_PROGRESS) {
			htmlTask.querySelector('.to-done').onclick = function () {
				operations.changeStatus(task.name, operations.STATUS.DONE);
				window.localStorage.setItem(
					'toDoList',
					JSON.stringify(operations.list)
				);

				showTasks('status');
				setErrorMsg();
			};
		}
		htmlTask.querySelector('.delete').onclick = function () {
			operations.deleteTask(task.name);
			window.localStorage.setItem('toDoList', JSON.stringify(operations.list));

			showTasks('status');
			setErrorMsg();
		};

		tasks[event === 'status' ? task.status : task.priority].push(htmlTask);
	});
	Object.keys(tasks).forEach((item, index) => {
		tasks[item].forEach(task => {
			document
				.querySelector(`.${Object.keys(operations.STATUS)[index]} .tasks_block`)
				.append(task);
			document.querySelector(
				`.${Object.keys(operations.STATUS)[index]}`
			).style.display = 'block';
		});
	});
	Object.keys(operations.STATUS).forEach((item, index) => {
		let visibility = '';
		if (tasks[operations.STATUS[item]].length) {
			visibility = 'block';
		} else {
			visibility = 'none';
		}
		document.querySelector(
			`.${Object.keys(operations.STATUS)[index]}`
		).style.display = visibility;
	});
	tasks__inner.style.display = 'block';
	no_msg.style.display = 'none';
}

showTasks('status');
