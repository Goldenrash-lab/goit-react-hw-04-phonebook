import React from 'react';
import { DeleteBtn, ContactItem } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(el => (
        <ContactItem key={crypto.randomUUID()}>
          <h4>
            {el.name}: {el.number}
          </h4>
          <DeleteBtn onClick={() => onDelete(el.id)} type="button">
            DELETE
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
