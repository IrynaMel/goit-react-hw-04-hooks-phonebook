import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

import ContactForm from './components/Form/ContactFormOld';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContatctList';

import Container from './App.styled';

export default function App(){
    const [contacts, setContacts] = useState( [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]);
      const [filter, setFilter]=useState('')


useEffect(()=>{
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

useEffect(()=>{
  const contact = localStorage.getItem('contacts')
    const parsedContact = JSON.parse(contact);
    if(parsedContact){
    setContacts( parsedContact)}
},[])


const onFilter =e=>{
 return setFilter(e.currentTarget.value)
}

const addContact = ( name, number ) => {
 

  if (
    contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
  ) {
    alert(`${name} is already in contacts`);
    return;
  }

  let id = nanoid();

  const contact = {
    id,
    name,
    number,
  };

  setContacts(prevState => ({
    contacts: [contact, ...prevState.contacts],
  }));
};
const deleteContact = contactEl => {
  setContacts(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactEl),
  }));
};
const visibleContact =contacts.filter(el =>
  el.name.toLowerCase().includes(filter.toLowerCase())
  )


return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={this.state.filter} onFilter={onFilter} />
      <ContactList visible={visibleContact} onDelete={deleteContact} />
    </Container>
  );
}