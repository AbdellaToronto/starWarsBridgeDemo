import React, {Component} from 'react';
import $ from "jquery";

export default class Planets extends Component {

  PLANET_LIST_URL = 'http://swapi.co/api/planets';

  state = {
    nextUrl: null,
    planetList: [{name: 'Planet Della'}]
  };


  componentDidMount() {
    this.getPlanets();
  }


  getPlanets(overWriteURL) {
    $.get(overWriteURL ? overWriteURL : this.PLANET_LIST_URL)
      .then(res => this.setState({
        planetList: this.state.planetList.concat(res.results),
        nextUrl: res.next
      }));
  }

  render(){

    return <div>
      <h2>Planet List</h2>
      {this.state.planetList.map(planet => <div key={planet.name}> {planet.name} </div>)}
      {this.state.nextUrl ?
        <button onClick={() => this.getPlanets(this.state.nextUrl)}>Load more planets...</button> :
        <h6>Nothing Else To Add</h6>}

    </div>
  }

}