import React, { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { SearchContact } from '../SearchContact/SearchContact';
import { AppWrapper, PhoneBook } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(loadToLS('CONTACTS'));
  }, []);

  useEffect(() => {
    saveToLS('CONTACTS', contacts);
  }, [contacts]);

  // LOCALSTORAGE

  function saveToLS(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error.message);
    }
  }

  function loadToLS(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
      console.log(error.message);
      return localStorage.getItem(key);
    }
  }

  const handlerAddContact = (name, number) => {
    const result = contacts.some(el => el.name === name);
    if (result) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, { id: crypto.randomUUID(), name, number }]);
  };

  const handlerSearch = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(el => el.name.includes(filter));
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  return (
    <AppWrapper>
      <PhoneBook>
        <h3>Phonebook</h3>
        <ContactForm onContactAdd={handlerAddContact} />
        <h3>Contacts</h3>
        <SearchContact value={filter} onSearch={handlerSearch} />
        <ContactsList onDelete={handleDelete} contacts={filterContacts()} />
      </PhoneBook>
    </AppWrapper>
  );
};
