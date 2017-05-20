import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="col col-1">
					<h2 className="title">Markdown Entry</h2>
					<textarea autoFocus="true"></textarea>
				</div>
				<div className="col col-2">
					<h2 className="title">Markdown Renderer</h2>
					<div className="renderer"></div>
				</div>
			</div>
		);
	}
}

export default App;