import React, {PropTypes} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


const Planet = (props) => (
  <Card style={{marginBottom: '20px'}} zDepth={2}>
    <CardHeader title={props.name}></CardHeader>
    <CardText>
      <p>Terrain: {props.terrain}</p>
      <p>Climate: {props.climate}</p>
      <p>Population: {props.population}</p>
    </CardText>
  </Card>
);


Planet.propTypes = {
  name: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
};



export default Planet;