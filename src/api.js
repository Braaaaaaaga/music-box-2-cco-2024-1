// Importa a biblioteca axios para fazer requisições HTTP
import axios from "axios";

// Cria uma instância do axios com configurações específicas
const api = axios.create({
    baseURL: "https://661efdd816358961cd934b04.mockapi.io/musicas" // Define a URL base para todas as requisições feitas através desta instância
    // Caso queiram utilizar o .env: utilize o baseURL: process.env.REACT_APP_API_URL
    // Crie um arquivo chamado .env e coloque esse valor REACT_APP_API_URL="enderecodoseumock"
});

// Exporta a instância 'api' como o padrão deste módulo, permitindo que ela seja reutilizada em outras partes da aplicação
export default api;