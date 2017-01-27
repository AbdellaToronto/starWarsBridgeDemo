import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Planets from './Planets';
import sinon from 'sinon';

describe('<Planets />', () => {


  it('should fire getPlanets when that button is clicked', () => {
    const wrapper = shallow(<Planets />);

    const spy = sinon.spy(wrapper.instance(), "getPlanets");
    wrapper.setState({nextUrl: 'foo'});
    wrapper.update(); //important for the spy to properly work


    wrapper.find('button').simulate('click');

    expect(spy.calledOnce).to.equal(true);

  });

  it('should fire getPlanets with the current nextUrl', () => {

    const wrapper = shallow(<Planets />);

    const spy = sinon.spy(wrapper.instance(), "getPlanets");
    wrapper.setState({nextUrl: 'foo'});
    wrapper.update(); //important for the spy to properly work


    wrapper.find('button').simulate('click');

    expect(spy.calledWith('foo')).to.equal(true);
  });


});
