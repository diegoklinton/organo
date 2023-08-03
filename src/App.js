import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';




function App() {
  const [colaboradores, setColaboradores] = useState([])

  const novoColaboradorAdd = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    
    <div className="App">
      <Banner/>
      <Formulario aoNovoColaboradorCadastrado={colaborador => novoColaboradorAdd(colaborador)}/>           
    </div>
  );
}

export default App;
