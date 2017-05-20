import React, { Component } from 'react';

var marked = require('marked');
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: true
});

class Renderer extends Component {
	markdown(val) {
		if (this.props.value.length > 0) {
			return { __html: marked(val) };
		} else {
			return null;
		}
	}	

	render() {
		return (
			<div className="renderer" dangerouslySetInnerHTML={this.markdown(this.props.value)} />
		)
	}
}

export default Renderer;