import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';

import SearchItem from 'components/search-item'
import SearchItemList from 'components/search-items-list'
import { searchIssues } from 'hooks/use-suggestions/searchIssues';
import data from './mockData.json';

Enzyme.configure({
  adapter: new Adapter(),
})


describe('Test <SearchItemsList /> component', () => {
  test('should be have active prop the first suggestion item', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    const setArrowKeys = e => { }

    newSearchResults('react')

    const wrapper = mount(
      <SearchItemList
        items={searchResults}
        index={0}
        setArrowKeys={setArrowKeys}
      />
    );

    const initialProp = wrapper.find(SearchItem).first().props().active;


    act(() => {
      wrapper.setProps({
        index: 0
      })
    })

    expect(wrapper.find(SearchItem).first().props().active).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be change active prop from first to the second suggestion item', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    const setArrowKeys = e => { }

    newSearchResults('react')

    const wrapper = mount(
      <SearchItemList
        items={searchResults}
        index={0}
        setArrowKeys={setArrowKeys}
      />
    );

    const initialProp = wrapper.find(SearchItem).first().props().active;


    act(() => {
      wrapper.setProps({
        index: 1
      })
    })

    expect(wrapper.find(SearchItem).first().props().active).not.toBe(initialProp);
    expect(wrapper.find(SearchItem).at(1).props().active).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have active prop the last suggestion item', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    const setArrowKeys = e => { }

    newSearchResults('react')

    const wrapper = mount(
      <SearchItemList
        items={searchResults}
        index={0}
        setArrowKeys={setArrowKeys}
      />
    );

    act(() => {
      wrapper.setProps({
        index: 4
      })
    })

    expect(wrapper.find(SearchItem).last().props().active).not.toBe(false);
    expect(wrapper).toMatchSnapshot();
  });


})