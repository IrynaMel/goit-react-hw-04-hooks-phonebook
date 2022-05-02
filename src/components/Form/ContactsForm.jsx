import {useState} from 'react';
import { Container, Button } from './ContactForm.styled';

export default function ContactForm({onSubmit}){
    const [name, setName]=useState('');
    const [number, setNumber]= useState('');

    const nameChange = e=>{
        setName(e.currentTarget.value)
    };

    const numberChange  = e=>{
        setNumber(e.currentTarget.value)
    };

    const handleSubmit = e =>{
        e.preventDefault();
        onSubmit(name, number);
        setName('')
        setNumber('')

    }



    return (
        <Container>
          <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={nameChange}
            />
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={numberChange}
            />
            <Button type="submit">Add Contact</Button>
          </form>
        </Container>
      );

}