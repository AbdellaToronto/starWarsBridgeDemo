import React, {Component} from 'react';
import $ from "jquery";
import Planet from '../../components/planet/planet';

export default class Planets extends Component {

  PLANET_LIST_URL = 'http://swapi.co/api/planets';

  state = {
    nextUrl: null,
    planetList: []
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

      <Planet name="Planet Della" climate="Cool" terrain="Rocky" population="40000"></Planet>

      {this.state.planetList.map(planet =>
        <Planet
        key={planet.name}
        name={planet.name}
        climate={planet.climate}
        terrain={planet.terrain}
        population={planet.population}
        testProp={(res) => res * 4}
        />)}
      {this.state.nextUrl ?
        <button onClick={() => this.getPlanets(this.state.nextUrl)}>Load more planets...</button> :
        <h6>Nothing Else To Add</h6>}

    </div>
  }

}