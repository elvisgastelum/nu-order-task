import React from 'react';

import SearchItem from 'components/search-item'

import {
  SearchItemsListWrapper,
  SearchItemsListUl
} from 'components/search-items-list/styled'

/**
 * Render a list of suggestions
 *
 * @param {{ items: [], index: number, setArrowKeys: (keyCode: number, index?: number) => void}} props used for the component
 * @return {JSX.Element} the JSX.Element
 */
export default function SearchItemsList({ items, index, setArrowKeys }) {

  const itemClassName = i => i === index ? true : false;

  return (
    <SearchItemsListWrapper>
      <SearchItemsListUl>
        {
          items.map((item, i) => (
            <SearchItem
              item={item}
              key={item.id}
              active={itemClassName(i)}
              setArrowKeys={setArrowKeys}
              index={i + 1}
            />
          ))
        }
      </SearchItemsListUl>
    </SearchItemsListWrapper>
  )
}
