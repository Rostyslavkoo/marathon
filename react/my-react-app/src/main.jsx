import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Example() {
	// Оголошуємо нову змінну стану "count"
	const [count, setCount] = useState(0);
	useEffect(() => {
		// Оновлюємо заголовок документа, використовуючи API браузера
		document.title = `Ви натиснули ${count} разів`;
	});

	return (
		<div>
			<p>Ви натиснули {count} разів</p>
			<button onClick={() => setCount(count + 1)}>Натисни мене</button>
		</div>
	);
}

root.render(<Example></Example>);
