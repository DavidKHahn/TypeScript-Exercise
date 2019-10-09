import * as React from 'react';

interface ISearchBoxProps {
// 'HTMLInputElement' represents an input element which works as an event
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;