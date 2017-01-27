import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Planets from './Planets';


xdescribe('<Planets />', () => {


  it('should fire getPlanets when that button is clicked', () => {
    const wrapper = shallow(<Planets />);
    wrapper.find('button').simulate('click');


  })


});
