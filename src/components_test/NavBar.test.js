import React, { Component } from 'react';
import NavBar from "../components/NavBar.component"
import { shallow,mount } from 'enzyme'
import { Provider } from 'react-redux';
import { store } from '../datasource/dataStore';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'



describe('UI Test for Nav Bar', () => {
    let snapshot;
    var title = "CDK Test";

    beforeEach(() => {
        const initialState = {
            user:{username:"",loggedIn:false}
        };
        const mockStore = configureStore();
        let store = mockStore(initialState);
        snapshot = shallow(
            
                <NavBar title={title} store={store}/>
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