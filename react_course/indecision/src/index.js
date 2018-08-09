import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var app = {
	title:"Indecision App",
	subtitle:'Put your life in the hands in the life of a computer',
	options:[]
}
var template = (
<div>
	<h1>{app.title}</h1>
	{app.subtitle && <p>{app.subtitle}</p>}
	<p>{(app.options.length > 0) ? "Here are your options":"No options"}</p>
	<ol>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ol>
</div>
);
// var user = {
// name:"Sajiv",
// age:42,
// location:"Ellicott City"
// }
// /**
// */
// function getLocation(location){
// if (location) {
// return <p>Location: {location}</p>
// }
// }
// var template2 = (
// <div>
// <h1>{(user.name) ? user.name: "Anonymous"}</h1>
// {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// {getLocation(user.location)}
// </div>
// )
var count = 0;
const addOne = () => {
	count++
    // console.log("Add One")
    renderCounterApp()

};
const minusOne = () => {
	count--
    // console.log("Minus One")
    renderCounterApp()

};
const reset = () => {
    // console.log("Reset")
    count = 0;
    renderCounterApp()
}
const renderCounterApp = () => {
	var template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button id="increment" onClick={addOne}>Increment by 1</button><br />
        <button onClick={minusOne}>Decrement by 1</button><br />
        <button onClick={reset}>Reset</button><br />
    </div>
    )

	ReactDOM.render(template2, document.getElementById('root'));

}
renderCounterApp()
