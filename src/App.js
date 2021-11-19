import { BrowserRouter } from 'react-router-dom';
import ProdutoProvider from './contexts/produto';
import Rotas from './routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ProdutoProvider>
      <BrowserRouter>
        <Rotas />
        <ToastContainer autoClose={3000}></ToastContainer>
      </BrowserRouter>
    </ProdutoProvider>
  );
}

export default App;
