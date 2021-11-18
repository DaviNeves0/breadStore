import { BrowserRouter } from 'react-router-dom';
import ProdutoProvider from './contexts/produto';
import Rotas from './routes';

function App() {
  return (
    <ProdutoProvider>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </ProdutoProvider>
  );
}

export default App;
