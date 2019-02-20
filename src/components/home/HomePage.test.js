import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { HomePage } from './HomePage';

describe('Home Page', () => {
    it('sets error message when trying to save empty title', () => {
        const props = {
            days: [],
        };

        const wrapper = mount(<HomePage {...props}/>);
        expect(wrapper.find('#time').text()).to.equal('Time');
    });
});