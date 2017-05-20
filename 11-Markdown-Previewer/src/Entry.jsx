import React, { Component } from 'react';

class Entry extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onChange(event.target.value);
	}	

	render() {
		const value = this.props.value;

		return (
			<textarea type="text" value={value} onChange={this.handleChange}>
				{value}
			</textarea>
		)
	}
}

export default Entry;