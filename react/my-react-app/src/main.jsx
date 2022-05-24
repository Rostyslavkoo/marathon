import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Button(props){
  return <button className={props.color}>Кнопка</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Button color="black"/>)