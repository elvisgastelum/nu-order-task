import { useState, useEffect } from 'react'


/**
 * Save to the Session Storage any object
 *
 * @param {Array} key - get or set new object
 * @param {Array=} val - object to save
 * @return {[ value, setValue ]} Return the list to consume
 */
export function useSessionStorage(key, val) {
  const [ value, setValue ] = useState(val || window.sessionStorage.getItem(key));
  
  useEffect(() => {
    window.sessionStorage.setItem(key, value)
  }, [ value, key ])

  return [ value, setValue ]
}
