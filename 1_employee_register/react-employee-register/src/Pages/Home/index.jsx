import Header from '../../components/Header';
import { ContainerHome } from './styles';

function Home() {
    return(
        <ContainerHome>
            <Header title={'Olá Gestor'} subTitle={'Adicione um funcionario'}/>
        </ContainerHome>
    );
}

export default Home;
