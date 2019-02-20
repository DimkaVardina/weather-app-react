import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { HomePage } from './HomePage';
import { WeatherList } from './WeatherList'

describe('Home Page', () => {
    it('Home page should contain list with weather records', () => {
        const props = {
            days: [],
        };

        const wrapper = mount(<HomePage {...props}/>);
        expect(wrapper.find('.weather-list').length).toBe(1);
    });
});