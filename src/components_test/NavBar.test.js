import React, { Component } from 'react';
import NavBar from "../components/NavBar.component"
import { shallow } from 'enzyme'

describe('UI Test for Nav Bar', () => {
    let snapshot;
    var title = "CDK Test";

    beforeEach(() => {
        snapshot = shallow(
            <NavBar title={title} />
        );
    });
    it('Nav Bar to be defined', () => {
        expect(NavBar).toBeDefined();
    });

    it('Nav Bar should render correctly', () => {
        expect(snapshot).toMatchSnapshot();
    });

    it('Nav Bar having proper Title as specified in the props', () => {
        expect(snapshot.find('span').text()).toEqual(title);
    });
})