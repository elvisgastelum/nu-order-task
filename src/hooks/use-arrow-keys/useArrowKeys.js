import { useState } from 'react';

import { key } from './key-code';

export const useArrowKeys = (initialState, fn) => {
  const [index, setIndex] = useState(initialState);

  const handleArrowKeys = (keyCode, length) => {
    length = length - 1;
    switch (keyCode) {
      case key.DOWN:
        if (index < length) {
          setIndex(index + 1);
          break;
        }
        setIndex(0);
        break;
      case key.UP:
        if (index > 0) {
          setIndex(index - 1);
          break;
        }
        setIndex(length);
        break;
      case key.ENTER:
        fn();
        break;
      case key.MOUSE_EVENT:
        setIndex(length);
        break;
      default:
        setIndex(0);
    }
  };

  return [index, handleArrowKeys];
};
