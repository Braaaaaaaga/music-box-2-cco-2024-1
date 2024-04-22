// Importa o componente App do arquivo './App'
import App from './App';

// Importa a biblioteca React
import React from 'react';

// Importa a biblioteca ReactDOM específica para o gerenciamento de DOM em aplicações React
import ReactDOM from 'react-dom/client';

// Cria uma referência ao elemento raiz ('root') do DOM. Isto é onde a aplicação React será montada.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderiza o componente App dentro do elemento raiz do DOM, utilizando StrictMode.
// StrictMode é uma ferramenta para destacar potenciais problemas em uma aplicação.
// Não afeta a renderização, mas ativa verificações e avisos adicionais para seus descendentes.
root.render(
  <React.StrictMode>
    <App /> {/* // Componente App sendo renderizado */}
  </React.StrictMode>
);