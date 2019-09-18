import React, { Component } from 'react';
import NavBar from "../NavBar"
import { shallow } from 'enzyme'

describe('UI Test for Nav Bar', () => {

    it('Nav Bar to be defined', () => {
        expect(NavBar).toBeDefined();
    });

    it('Nav Bar should render correctly', () => {
    
        const snapshot = shallow(
            <NavBar title="CDK Test"/>
            );
        expect(snapshot).toMatchSnapshot();
      });

      it('Nav Bar having proper Title as specified in the props', () => {
        var title="Title";
        const snapshot = shallow(
            <NavBar title={title}/>
            );
            expect(snapshot.find('span').text()).toEqual(title);
      });
})