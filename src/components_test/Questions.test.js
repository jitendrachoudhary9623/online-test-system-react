import React, { Component } from 'react';
import Question from "../components/Question"
import { shallow } from 'enzyme'

describe('UI Test for Question', () => {

    it('Question to be defined', () => {
        expect(Question).toBeDefined();
    });

    it('Question should render correctly', () => {
        const mockHandler = jest.fn(event => {
            console.log("Mocked function");
        });
        let questionMock = {
            "id": 1,
            "type": "objective",
            "Question": "A train 120 meters long is running with a speed of 60 km/hr. In what time will it pass a boy who is running at 6 km/hr in the direction opposite to that in which the train is going?",
            "Answers": [{ option: "6.54 sec", marked: false }, { option: "44.32 sec", marked: false }, { option: "55 sec", marked: false }, { option: "30.2 sec", marked: false }],
            "userAnswer": "",
            "actualAnswer": "1"
        };
        const snapshot = shallow(
            <Question key={'b1'} item={questionMock} id={'a1'} handleAnswerClick={mockHandler} />
        );
        expect(snapshot).toMatchSnapshot();
    });

    it('Question should render 4 answer box for 4 number of choices  ', () => {
        const mockHandler = jest.fn(event => {
            console.log("Mocked function");
        });
        let questionMock = {
            "id": 1,
            "type": "objective",
            "Question": "A train 120 meters long is running with a speed of 60 km/hr. In what time will it pass a boy who is running at 6 km/hr in the direction opposite to that in which the train is going?",
            "Answers": [{ option: "6.54 sec", marked: false }, { option: "44.32 sec", marked: false }, { option: "55 sec", marked: false }, { option: "30.2 sec", marked: false }],
            "userAnswer": "",
            "actualAnswer": "1"
        };
        const snapshot = shallow(
            <Question key={'b1'} item={questionMock} id={'a1'} handleAnswerClick={mockHandler} />
        );
        expect(snapshot.find('.card-action').length).toBe(questionMock.Answers.length);
    });

    it('Question should render 2 answer box for 2 number of choices  ', () => {
        const mockHandler = jest.fn(event => {
            console.log("Mocked function");
        });
        let questionMock = {
            "id": 1,
            "type": "objective",
            "Question": "A train 120 meters long is running with a speed of 60 km/hr. In what time will it pass a boy who is running at 6 km/hr in the direction opposite to that in which the train is going?",
            "Answers": [{ option: "55 sec", marked: false }, { option: "30.2 sec", marked: false }],
            "userAnswer": "",
            "actualAnswer": "1"
        };
        const snapshot = shallow(
            <Question key={'b1'} item={questionMock} id={'a1'} handleAnswerClick={mockHandler} />
        );
        expect(snapshot.find('.card-action').length).toBe(questionMock.Answers.length);
    });


});