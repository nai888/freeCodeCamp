import React, { Component } from 'react';
import Title from './Title';
import Entry from './Entry';
import Renderer from './Renderer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="col col-1">
					<Title areaName="Entry" />
					<Entry />
				</div>
				<div className="col col-2">
					<Title areaName="Renderer" />
					<Renderer />
				</div>
			</div>
		);
	}
}

export default App;