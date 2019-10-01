import React, { Component } from 'react';
import LoginForm from "../components/LoginForm.component"
import { shallow,mount } from 'enzyme'
import { Provider } from 'react-redux';
import { store } from '../datasource/dataStore';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'



describe('UI Test for LoginForm', () => {
    let wrapper;
    
    beforeEach(() => {
        const initialState = {
            username:"",loggedIn:false
        };
        let mockData = {user:{
            username:"",loggedIn:false
        }};
        const mockStore = configureStore()(mockData);
        wrapper = shallow(
                <LoginForm store={mockStore}/>
        );
    }); 
    it('LoginForm to be defined', () => {
        expect(LoginForm).toBeDefined();
    });

    it('LoginForm should render correctly', () => {
    });


    it('LoginForm having on input box with text as input type', () => {
        //console.log(wrapper.render().html());
       // console.log(wrapper.find('#LoginFormTitle').render());

        expect(wrapper.find('#formLogin')).toBeDefined();
    });
   
})