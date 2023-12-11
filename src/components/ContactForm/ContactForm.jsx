import React, { useState } from 'react';
import { Input, Button } from './ContactForm.styled';

export const ContactForm = ({ onContactAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerChangeName = e => {
    setName(e.target.value);
    // this.setState({ name: e.target.value });
  };
  const handlerChangePhone = e => {
    setNumber(e.target.value);
    // this.setState({ number: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onContactAdd(name, number);
    setName(name);
    setNumber(number);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        onChange={handlerChangeName}
        type="text"
        name="name"
        value={name}
        required
      />
      <label htmlFor="phone">Phone</label>
      <Input
        id="phone"
        onChange={handlerChangePhone}
        type="tel"
        name="number"
        value={number}
        required
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};
