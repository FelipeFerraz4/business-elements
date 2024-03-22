import Form from '../../components/Form';
import Header from '../../components/Header';
import { ContainerHome } from './styles';

function Home() {
    return(
        <ContainerHome>
            <Header title={'Olá Gestor'} subTitle={'Adicione um funcionario'}/>
            <Form title={'Employee'}/>
        </ContainerHome>
    );
}

export default Home;
