import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';

import Search from 'components/search';
import data from './mockData.json';
import { searchIssues } from 'hooks/use-suggestions/searchIssues';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('Test <Search /> component', () => {
  test('should be render', async () => {
    var searchResults = [];
    const newSearchResults = (value) => {
      searchResults = searchIssues(value, data);
    };
    var index = 0;
    const setArrowKeys = (e) => {};

    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should be regenerate html when pass new props', async () => {
    var searchResults = [];
    const newSearchResults = (value) => {
      searchResults = searchIssues(value, data);
    };
    var index = 0;
    const setArrowKeys = (e) => {};

    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );

    const initialHTML = wrapper.html();

    act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'good' } });
    });

    act(() => {
      wrapper.setProps({
        searchResults,
      });
    });

    expect(wrapper.html()).not.toBe(initialHTML);

    expect(wrapper).toMatchSnapshot();
  });

  test('should be have a length 5 when search "react" label in the input', async () => {
    var searchResults = [];
    const newSearchResults = (value) => {
      searchResults = searchIssues(value, data);
    };
    var index = 0;
    const setArrowKeys = (e) => {};

    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );

    const initialHTML = wrapper.html();

    act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'react' } });
    });

    act(() => {
      wrapper.setProps({
        searchResults,
      });
    });

    expect(wrapper.html()).not.toBe(initialHTML);

    expect(wrapper.find('ul').children().length).toBe(5);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have a length 3 when search "good first issue" label in the input', async () => {
    var searchResults = [];
    const newSearchResults = (value) => {
      searchResults = searchIssues(value, data);
    };
    var index = 0;
    const setArrowKeys = (e) => {};

    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );

    const initialHTML = wrapper.html();

    act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'good first issue' } });
    });

    act(() => {
      wrapper.setProps({
        searchResults,
      });
    });

    expect(wrapper.html()).not.toBe(initialHTML);

    expect(wrapper.find('ul').children().length).toBe(3);
    expect(wrapper).toMatchSnapshot();
  });
});
