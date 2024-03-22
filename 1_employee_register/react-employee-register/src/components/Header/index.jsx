import PropTypes from 'prop-types';
import { ContainerHeader } from './styles';

function Header({ title, subTitle }) {
    return(
        <ContainerHeader>
            <h1 className='mb-3'>{title}</h1>
            <h2 className='mx-3'>{subTitle}</h2>
        </ContainerHeader>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default Header;
