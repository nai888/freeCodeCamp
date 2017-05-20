import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import Entry from './Entry';
import Renderer from './Renderer';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated by a blank line.

Break to the next line to do a
line break.

Text attributes: *italic*, **bold**, ` + '`monospace`' + `, ~~strikethrough~~.

Shopping list:
  * apples
  * oranges
  * pears

Numbered list:
  1. apples
  2. oranges
  3. pears

The rain---not the reign---in Spain.` };
	}

	handleChange(value) {
		this.setState({ value });
	}

	render() {
		const value = this.state.value;
		return (
			<div className="App">
				<div className="col col-1">
					<Title areaName="Entry" />
					<Entry onChange={this.handleChange} value={this.state.value} />
				</div>
				<div className="col col-2">
					<Title areaName="Renderer" />
					<Renderer value={this.state.value} />
				</div>
			</div>
		);
	}
}

export default App;