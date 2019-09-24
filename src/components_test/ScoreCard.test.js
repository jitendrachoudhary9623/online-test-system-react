import React, { Component } from 'react';
import ScoreCard from "../components/client_components/ScoreCard"
import { shallow } from 'enzyme'

describe('UI Test for ScoreCard', () => {

    it('Score Card to be defined', () => {
        expect(ScoreCard).toBeDefined();
    });

    it('Score Card should render correctly', () => {
        const snapshot = shallow(
            <ScoreCard />
        );
        expect(snapshot).toMatchSnapshot();
    });


    it('Score card score should be displayed properly', () => {
        var score = "10";
        const wrapper = shallow(
            <ScoreCard score={score} />
        );

        expect(wrapper.find('h3').text()).toEqual(score);

    });

});