import React, { Component } from 'react';
import SubmitButton from "../components/client_components/SubmitButton"
import { shallow } from 'enzyme'


describe('UI Test for Submit Button', () => {

    it('Submit Button to be defined', () => {
        expect(SubmitButton).toBeDefined();
    });

    it('Submit Button  should render correctly', () => {
        const snapshot = shallow(
          <SubmitButton/>
        );
        expect(snapshot).toMatchSnapshot();
      });
})