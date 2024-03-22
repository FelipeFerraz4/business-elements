import PropTypes from 'prop-types';
import { ContainerForms } from './styles';

function Form({title}) {
    return(
        <ContainerForms>
            <h3>{title}</h3>
        </ContainerForms>
    );
}

Form.propTypes = {
    title: PropTypes.string,
}
export default Form;
