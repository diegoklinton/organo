import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time/time';
import Rodape from './componentes/rodape/rodape';

function App() {

  const times = [
  {
    nome: "Programação",
    corPrimaria: '#D9F7E9',
    corSecundaria:'#57C278',
  },

  {
    nome: "Front-End",
    corPrimaria: '#E8F8FF',
    corSecundaria:'#82CFFA',
  },

  {
    nome: "Data Science",
    corPrimaria: '#F0F8E2',
    corSecundaria:'#A6D157',
  },

  {
    nome: "Devops",
    corPrimaria: '#FDE7E8',
    corSecundaria:'#E06B69',
  },

  {
    nome: "Ux e Design",
    corPrimaria: '#FAE9F5',
    corSecundaria:'#DB6EBF',
  },

  {
    nome: "Mobile",
    corPrimaria: '#FFF5D9',
    corSecundaria:'#FFBA05',
  },
  
  {
    nome: "Inovação e Gestão",
    corPrimaria: '#FFEEDF',
    corSecundaria:'#FF8A29',
  },

  ]

  const [colaboradores, setColaboradores] = useState([])

  const novoColaboradorAdd = (colaborador) => {
    //debugger: é usado para investigar o código linha a linha 
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time=>time.nome)} aoNovoColaboradorCadastrado={colaborador => novoColaboradorAdd(colaborador)}/>
      {times.map(time=><Time 
      key={time.nome} 
      nomeTime={time.nome} 
      corFundoTime={time.corPrimaria} 
      corBordaTime={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
