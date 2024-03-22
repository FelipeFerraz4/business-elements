import PropTypes from 'prop-types';
import { ContainerTextInput } from './styles';

function TextInput({title, type}) {
    return(
        <ContainerTextInput>
            <label htmlFor={title}>{title}</label>
            <input type={type} name={title} id={title} />
        </ContainerTextInput>
    );
}

TextInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
}
export default TextInput;
