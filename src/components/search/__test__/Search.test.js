import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';

import Search from '../Search';
import data from './mockData.json';
import { key } from '../../../hooks/use-arrow-keys/key-code';
import { searchIssues } from '../../../hooks/use-suggestions/searchIssues';

Enzyme.configure({
  adapter: new Adapter(),
})

describe('Test <Search /> component', () => {
  
  test('should be render', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {}
    
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
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {}
      
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
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })

    
  
    expect(wrapper.html()).not.toBe(initialHTML);

    expect(wrapper).toMatchSnapshot();
  });

  test('should be have a length 5 when search "react" label in the input', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {}
      
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
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })

    expect(wrapper.html()).not.toBe(initialHTML);
    
    expect(wrapper.find('ul').children().length).toBe(5);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have a length 3 when search "good first issue" label in the input', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {}
      
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
    })
    
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })
    
    expect(wrapper.html()).not.toBe(initialHTML);

    expect(wrapper.find('ul').children().length).toBe(3);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have active class the first suggestion item', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {}
      
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
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })

    expect(wrapper.html()).not.toBe(initialHTML);

    expect(wrapper.find('li').first().hasClass('active')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have active class the second suggestion item when press key.DOWN arrow', async () => {
    
    var index = 0;
    var searchResults = [];

    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    const handleArrowKeys = (keyCode, length) => {
      length = length - 1;
      switch (keyCode) {
        case key.DOWN:
          if (index < length) {
            index++;
            break;
          }
          index = 0;
          break;
        case key.UP:
          if (index > 0) {
            index--;
            break;
          }
          index = length;
          break;
        case key.ENTER:
          console.log('Enter pressed');
          break;
        case key.MOUSE_EVENT:
          index = length;
          break;
        default:
          index = 0;
      }

    }
    const setArrowKeys = keyCode => {
      handleArrowKeys(keyCode, searchResults.length);
    }
      
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
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })
    
    expect(wrapper.find('li').first().hasClass('active')).toBe(true);
    
    act(() => {
      wrapper.find('input').simulate('keydown', {keyCode: key.DOWN})
    })
    
    act(() => {
      wrapper.setProps({
        index
      })
    })
    
    expect(wrapper.html()).not.toBe(initialHTML);

    expect(wrapper.find('li').first().hasClass('active')).toBe(false);
    expect(wrapper.find('ul').childAt(1).hasClass('active')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have active class the last suggestion item when press key.UP arrow', async () => {
    
    var index = 0;
    var searchResults = [];

    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    const handleArrowKeys = (keyCode, length) => {
      length = length - 1;
      switch (keyCode) {
        case key.DOWN:
          if (index < length) {
            index++;
            break;
          }
          index = 0;
          break;
        case key.UP:
          if (index > 0) {
            index--;
            break;
          }
          index = length;
          break;
        case key.ENTER:
          console.log('Enter pressed');
          break;
        case key.MOUSE_EVENT:
          index = length;
          break;
        default:
          index = 0;
      }

    }
    const setArrowKeys = keyCode => {
      handleArrowKeys(keyCode, searchResults.length);
    }
      
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
    })
    
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })
    
    expect(wrapper.find('li').first().hasClass('active')).toBe(true);
    
    act(() => {
      wrapper.find('input').simulate('keydown', {keyCode: key.UP})
    })
    
    act(() => {
      wrapper.setProps({
        index
      })
    })
    
    expect(wrapper.html()).not.toBe(initialHTML);

    expect(wrapper.find('li').first().hasClass('active')).toBe(false);
    expect(wrapper.find('li').last().hasClass('active')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });



})

