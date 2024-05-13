// SearchBar.tsx
import React from 'react';
import "./SearchBar.scss";

interface SearchBarProps {

}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
  <form className="search" action="">
    <input type="search" placeholder="Search here..." required/>
    <button type="submit">Search</button>
</form>   
  
  );
};

export default SearchBar;