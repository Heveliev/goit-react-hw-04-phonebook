import {useState,useEffect} from 'react';
import { Section } from './Section/Section';
import {InputForm} from './InputForm/InputForm';
import {ContactList} from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import {SearchContact} from './SearchContact/SearchContact';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ??
    [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
  );
  const [filter, setFilter] = useState('');
  
  useEffect(()=>{localStorage.setItem('contacts', JSON.stringify(contacts))},[contacts])

  const  formSubmitHandler = data =>{
    const {name,number} = data;
       if (contacts.find(contact=>contact.name === name) ){
        Notify.info(`${name} is already in contacts.`);
        return

       }
       const newContact = {
        id: nanoid(),
        name,
        number
      };

    setContacts(prevState=>{
      return  [newContact, ...prevState]
    })
  }

const  filterContactsFunc = ()=>{
   const normaliaedFilter = filter.toLowerCase();
  return contacts.filter(contact=>contact.name.toLowerCase().includes(normaliaedFilter));
 }

  
  const searchHandle = evt => {
    const evtTarget = evt.currentTarget.value;
    setFilter(evtTarget)
  }

  const  deleteContact = (contactId) =>{
 setContacts(prevState=> prevState.filter(contact=>contact.id !==contactId)
 )
 }

  return (
    <>
     <Section title='Phonebook' >
        <InputForm
          onSubmit={formSubmitHandler}
        />
     </Section>
       <Section title='Contacts' >
        <SearchContact
          value={filter}
          onChange={searchHandle}
        />
        {contacts.length ? <ContactList
          onDeleteContact={deleteContact}
          values={filterContactsFunc()} /> : ''}
       </Section>
       </>
  )
}





// class App extends React.Component{
//   componentDidMount (){
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts) {
//       this.setState({contacts: contacts})
//     }
    
//     }
    
// componentDidUpdate(prevProps, prevState){
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

// };


export {App}