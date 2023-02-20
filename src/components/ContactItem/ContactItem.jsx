import PropTypes from 'prop-types';
import { Item,Btn } from './ContactItem.styled';

export const ContactItem = ({id,name,number, onDeleteContact}) => {
    
    return (<>
    <Item id={id}><p>{name}: <span>{number}</span></p> 
    <Btn onClick={()=>onDeleteContact(id)} type='button'>Delete</Btn></Item>
        </>
    )
}
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}