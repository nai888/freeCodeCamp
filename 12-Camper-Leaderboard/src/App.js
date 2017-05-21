import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event.target.value);
  }

  render() {
    var nameClass = null;
    this.props.which === this.props.sortBy ? nameClass = "active" : nameClass = "inactive";
    return this.props.which !== undefined ? <th className={nameClass}>{this.props.text}</th> : <th>{this.props.text}</th>;
  }
}

class HeaderRow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event.target.value);
  }

  render() {
    return (
      <tr className="headerRow">
        <Header text="Rank" />
        <Header text="Camper Name" />
        <Header text="Points Last 30 Days" which="recent" sortBy={this.props.sortBy} onClick={this.handleClick} />
        <Header text="All Time Points" which="all" sortBy={this.props.sortBy} onClick={this.handleClick} />
      </tr>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { whichData: "recent" };
    this.recData = null;
    this.allData = null;
  }

  componentDidMount() {
    var apiRoot = "//fcctop100.herokuapp.com/api/fccusers/top/";
    var xhr;
    function loadJSON(apiPath, success, error) {
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            if (success) {
              success(JSON.parse(xhr.responseText));
            }
          } else {
            if (error) {
              error(xhr);
            }
          }
        }
      };
      xhr.open("GET", apiRoot + apiPath, true);
      xhr.send();
    }
    var rec = null;
    loadJSON("recent",
      function (data) { rec = data; },
      function (xhr) { console.error(xhr); }
    );
    this.recData = rec;
    var all = null;
    loadJSON("alltime",
      function (data) { all = data; },
      function (xhr) { console.error(xhr); }
    );
    this.allData = all;
  }

  handleClick(whichData) {
    this.setState({ whichData });
  }

  render() {
    return (
      <table className="App">
        <thead>  
          <HeaderRow sortBy={this.state.whichData} onClick={this.handleClick} />
        </thead>
        <tbody>
        </tbody>  
      </table>
    );
  }
}

export default App;