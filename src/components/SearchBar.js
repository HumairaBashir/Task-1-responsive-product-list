import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  width: 80%;
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <SearchContainer>
    <SearchInput
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </SearchContainer>
);

export default SearchBar;
