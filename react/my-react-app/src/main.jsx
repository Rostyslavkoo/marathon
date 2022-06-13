import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function useScreen(width, isMobile, isDesktop) {
	const [returnedWidth, setReturnedWidth] = useState(width);
	function handleResize() {
		setReturnedWidth(window.innerWidth);
	}
	useEffect(() => {
		handleResize();
	});
	return returnedWidth;
}

function App() {
	const screenWidth = useScreen(window.innerWidth,true);
	console.log(screenWidth);
	return <div>{screenWidth}</div>;
}

root.render(<App />);
