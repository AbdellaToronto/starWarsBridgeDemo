import React, {Component} from 'react';



export default class Planets extends Component {

  state = {
    planetList: [{name: 'Planet Della'}]
  };


  componentDidMount() {
    
  }


  render(){

    return <div>
      <h2>Planet List</h2>
      {this.state.planetList.map(planet => <div> {planet.name} </div>)}
    </div>
  }

}