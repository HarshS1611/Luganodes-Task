import './App.css';
import Home from './pages/home';
import TransactionDetails from './pages/transactionDetails';
import BlockDetails from './pages/blockDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllTransactions from './pages/transaction';
import AllBlocks from './pages/block';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/txns' element={<AllTransactions />} />
          <Route path='/blocks' element={<AllBlocks />} />
          <Route path="/txns/:id" element={<TransactionDetails />} />
          <Route path="/blocks/:id" element={<BlockDetails />} />

        </Routes>
      </div></BrowserRouter>
  );
}

export default App;
