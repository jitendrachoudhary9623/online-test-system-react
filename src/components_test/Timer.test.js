
import React, { Component } from 'react';
import Timer from "../components/client_components/Timer"
import { shallow } from 'enzyme'


describe('UI Test for timer', () => {

    it('Timer to be defined', () => {
        expect(Timer).toBeDefined();
    });

    it('Timer should render correctly', () => {
        const snapshot = shallow(
            <Timer />
        );
        expect(snapshot).toMatchSnapshot();
    });

    it('Timer should stop after specified time', () => {
        var specifiedTime = 10;
        const wrapper = shallow(
            <Timer seconds={specifiedTime} />
        );
        setTimeout(function () {
            expect(wrapper.state('timer')).toEqual(0);
        }.bind(this), specifiedTime * 100);
    });
    it('Timer text should be equal to seconds left', () => {
        var specifiedTime = 10;
        const wrapper = shallow(
            <Timer seconds={specifiedTime} />
        );
        setTimeout(function () {
            expect(wrapper.find('a').text()).toEqual("00 : 05");
        }.bind(this), (specifiedTime/2) * 100);
    });
    it('Timer text should show 00 : 00 after timer is out', () => {
        var specifiedTime = 10;
        const wrapper = shallow(
            <Timer seconds={specifiedTime} />
        );
        setTimeout(function () {
            expect(wrapper.find('a').text()).toEqual("00 : 00");
        }.bind(this), specifiedTime * 100);
    });
    it('Timer text after timeout', () => {
        var specifiedTime = 10;
        const wrapper = shallow(
            <Timer seconds={specifiedTime} />
        );
        setTimeout(function () {
            expect(wrapper.find('a').text()).toEqual("00 : 00");
        }.bind(this), (specifiedTime+3) * 100);
    });
    it('Timer text should be equal to specified time at the start', () => {
        var specifiedTime = 10;
        const wrapper = shallow(
            <Timer seconds={specifiedTime} />
        );
        expect(wrapper.find('a').text()).toEqual(`00 : ${specifiedTime}`);
    });
})