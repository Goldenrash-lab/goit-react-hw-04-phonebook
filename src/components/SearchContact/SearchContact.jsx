import React from 'react';
import { SearchWrapper } from './SearchContact.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';

export const SearchContact = ({ value, onSearch }) => {
  return (
    <SearchWrapper>
      <label htmlFor="search">Find contact:</label>
      <Input value={value} onChange={onSearch} type="text" id="search" />
    </SearchWrapper>
  );
};
