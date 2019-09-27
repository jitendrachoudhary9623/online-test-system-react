import React, { Component } from 'react';
import AddQuestion from "../components/admin/AddQuestion.component"
import { shallow } from 'enzyme'

describe('UI Test for Add Question', () => {
    let snapshot;
   
    beforeEach(() => {
        snapshot = shallow(
            <AddQuestion/>
        );
    });
    it('Add Question to be defined', () => {
        expect(AddQuestion).toBeDefined();
    });

    it('AddQuestion should render correctly', () => {
        expect(snapshot).toMatchSnapshot();
    });

   
})