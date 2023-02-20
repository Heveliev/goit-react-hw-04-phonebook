import { Input } from "./SearchContact.styled";
import PropTypes from 'prop-types';


export const SearchContact = ({value, onChange})=>{
    return(
        <>
        <h4>Find contacts by name</h4>
        <Input
        value={value}
        onChange={onChange}
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
/>
        </>
    )
}
SearchContact.propTypes = {
    value:PropTypes.string.isRequired ,
    onChange:PropTypes.func.isRequired
}