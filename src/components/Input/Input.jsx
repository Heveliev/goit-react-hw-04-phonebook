import PropTypes from 'prop-types';
import { ContactInput, Title } from './Input.styled';






export const Input = ({value,onChange,type,pattern,name,title,titleBox}) =>{
    return(<>
    <Title>{titleBox}
    <ContactInput
    value={value}
    onChange={onChange}
    type={type}
    pattern={pattern}
    name={name}
    title={title}
    required/></Title>
    </>

    )
}

Input.propTypes = {
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    pattern:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    titleBox:PropTypes.string.isRequired
}