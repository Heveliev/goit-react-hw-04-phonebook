import React from 'react';
import { Section } from './Section/Section';
import {InputForm} from './InputForm/InputForm';
import {ContactList} from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import {SearchContact} from './SearchContact/SearchContact';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



class App extends React.Component{
  state = {
    contacts: [    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  };
  componentDidMount (){
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({contacts: contacts})
    }
    
    }
    
componentDidUpdate(prevProps, prevState){
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  formSubmitHandler = data =>{

    const {contacts} = this.state;
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

    this.setState(({contacts})=>{
      return {contacts: [newContact, ...contacts]}
    })
  }

searchHandle = evt =>{
  const evtTarget = evt.currentTarget.value;
 this.setState({filter: evtTarget})
 
}

filterContactsFunc = ()=>{
  const normaliaedFilter = this.state.filter.toLowerCase();
  return this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(normaliaedFilter));
}


deleteContact = (contactId)=>{
this.setState(prevState=>({
  contacts: prevState.contacts.filter(contact=>contact.id !==contactId),})
)
}
  render(){
    const list = this.state.contacts.length;
   
    const filterContacts = this.filterContactsFunc();
    return (<>
    <Section title='Phonebook' >
      <InputForm onSubmit={this.formSubmitHandler}/>
    </Section>
      <Section title='Contacts' >
      <SearchContact value={this.state.filter} onChange={this.searchHandle}/>
        {list ? <ContactList onDeleteContact={this.deleteContact}  values={filterContacts}/> : ''}
      </Section>
      </>
        );
  }

};


export {App}