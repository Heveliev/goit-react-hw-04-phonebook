  import PropTypes from 'prop-types';
import {useState} from 'react';
import { Input } from 'components/Input/Input';
import { Box,Btn } from './InputForm.styled';


const InputForm = ({onSubmit}) => {
  const [ name, setName ] = useState('');
  const [number, setNumber] = useState('');
  

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number })
    setName('')
    setNumber('')
  }
    const  handleInputChange = evt => {
      const target = evt.currentTarget;
      switch (target.name) {
        case 'name':
          setName(target.value)
          break;
        case 'number':
        setNumber(target.value)
          break;
        default:
          return;
      }
      };
  return (
    <Box
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        titleBox="Name"
        value={name}
        onChange={handleInputChange} 
        />
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        titleBox="Number"
        value={number}
        onChange={handleInputChange}/>
            <Btn type="submit">Add contact</Btn>
            </Box>
        )
      }
export {InputForm}



InputForm.popTypes ={
  onSubmit:PropTypes.func.isRequired
}