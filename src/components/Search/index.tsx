import React from 'react';
import styles from './Search.module.scss';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
//rsc

const Search:React.FC = () => {
  const [value, setValue] = React.useState('');
 const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClearInput = () => {
    dispatch(setSearchValue(''))
    setValue('');
    inputRef.current?.focus();
  }

  const updateSearchValue = React.useCallback(
      debounce((str: string) => {
        dispatch(setSearchValue(str))
      }, 250),
      []
  )

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    updateSearchValue(evt.target.value);
  }

  return (
      <div className={styles.root}>
        <input ref={inputRef}
               value={value}
               onChange={onChangeInput}
               className={styles.input}
               placeholder="Поиск пиццы..." />
        <svg className={styles.search}
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M21 21L16.65 16.65" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>

        {value && (
            <button onClick={onClearInput}
                    className={styles.clear}>
              <svg width="40"
                   height="40"
                   viewBox="0 0 40 40"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.4882 10.4882C9.83728 11.139 9.83728 12.1943 10.4882 12.8452L27.1548 29.5118C27.8057 30.1627 28.861 30.1627 29.5118 29.5118C30.1627 28.861 30.1627 27.8057 29.5118 27.1548L12.8452 10.4882C12.1943 9.83728 11.139 9.83728 10.4882 10.4882Z" fill="black"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M29.5118 10.4882C30.1627 11.139 30.1627 12.1943 29.5118 12.8452L12.8452 29.5118C12.1943 30.1627 11.139 30.1627 10.4882 29.5118C9.83728 28.861 9.83728 27.8057 10.4882 27.1548L27.1548 10.4882C27.8057 9.83728 28.861 9.83728 29.5118 10.4882Z" fill="black"></path>
              </svg>
            </button>
        )}


      </div>

  )
}

export default Search;
