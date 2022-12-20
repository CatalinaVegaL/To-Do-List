//Impotación de React
import React from 'react';
//Impotación de estilos CCS
import './App.scss';
//Impotación de Container de la carpeta componentes
import Container from './components/Container';

//Creación de función App que retorna un div que a su vez llama al componente container 
function App() {
  return (
    <div className="App">
      <Container/>
    </div>
  );
};

export default App;