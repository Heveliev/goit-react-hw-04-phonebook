import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';

export const ContactList = ({values, onDeleteContact}) => {
return(
    <>
    <ul>
        {values.map(value=><ContactItem 
        key={value.id} 
        id={value.id} 
        name={value.name} 
        number={value.number}
        onDeleteContact={onDeleteContact}/>)}
        
    </ul>
    </>
)
}

ContactList.propTypes ={
    values: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}