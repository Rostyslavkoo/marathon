import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map((todo, key) => (
			<Todo key={key} {...todo} onClick={onTodoClick(key)} />
		))}
	</ul>
);
