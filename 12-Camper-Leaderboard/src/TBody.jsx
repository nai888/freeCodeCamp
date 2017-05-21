import React, { Component } from 'react';
import 'whatwg-fetch';
import DataRow from './DataRow';

class TBody extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = { recData: [], allData: [] };
  }

  componentDidMount() {
    var apiRoot = "//fcctop100.herokuapp.com/api/fccusers/top/";
    fetch(apiRoot + "recent").then((response) => { return response.json(); }).then((response) => { this.setState({ recData: response }); });
    fetch(apiRoot + "alltime").then((response) => { return response.json(); }).then((response) => { this.setState({ allData: response }); });
  }

  render() {
    const data = this.props.whichData === "recent" ? this.state.recData : this.state.allData;
    return (
      <tbody>
        {data.map((user, index) => {
          return <DataRow key={user.username} rank={index + 1} username={user.username} avatar={user.img} recPoints={user.recent} allPoints={user.alltime} />
        })}
      </tbody>
    );
  };
}

export default TBody;