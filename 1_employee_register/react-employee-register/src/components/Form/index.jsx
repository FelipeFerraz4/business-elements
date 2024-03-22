import PropTypes from 'prop-types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import { ContainerForms, Forms } from './styles';

function Form({title}) {
    return(
        <ContainerForms>
            <h3>{title}</h3>
            <Forms action="">
                <TextInput title={'Full Name'} type={'text'}/>
                <TextInput title={'CPF'} type={'text'}/>
                <TextInput title={'Telefone1'} type={'text'}/>
                <TextInput title={'Telefone2'} type={'text'}/>
                <TextInput title={'E-mail'} type={'email'}/>
                <TextInput title={'Confirmação do E-mail'} type={'email'}/>
                <TextInput title={'CEP'} type={'text'}/>
                <SelectInput/>
                <TextInput title={'Bairro'} type={'text'}/>
                <TextInput title={'Rua'} type={'text'}/>
                <TextInput title={'Complemento'} type={'text'}/>
                <TextInput title={'Senha'} type={'text'}/>
                <TextInput title={'Confirmação da Senha'} type={'text'}/>
            </Forms>
        </ContainerForms>
    );
}

Form.propTypes = {
    title: PropTypes.string,
}
export default Form;
