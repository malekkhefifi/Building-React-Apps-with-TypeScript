import React from 'react';
import Greeting from './Greeting'; 
import Counter from './counter';   

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome to my App</h1>
      {/* Utilisation de Greeting */}
      <Greeting name="Malek" />
      {/* Utilisation de Counter */}
      <Counter />
    </div>
  );
};

export default App;


