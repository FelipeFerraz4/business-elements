import Form from '../../components/Form';
import Header from '../../components/Header';
import { ContainerHome } from './styles';

function Home() {
    return(
        <ContainerHome>
            <Header title={'Hello Manager'} subTitle={'Add an employee'}/>
            <Form title={'Employee'}/>
        </ContainerHome>
    );
}

export default Home;
