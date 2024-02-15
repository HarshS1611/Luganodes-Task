import './App.css';
import Home from './pages/home';
import TransactionDetails from './pages/transactionDetails';
import BlockDetails from './pages/blockDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllTransactions from './pages/transaction';
import AllBlocks from './pages/block';
import AccountDetails from './pages/accountDetails';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/txns' element={<AllTransactions />} />
          <Route path='/blocks' element={<AllBlocks />} />
          <Route path="/txns/:txnHash" element={<TransactionDetails />} />
          <Route path="/blocks/:blockID" element={<BlockDetails />} />
          <Route path='/address/:address' element={<AccountDetails/>} />
        </Routes>
      </div></BrowserRouter>
  );
}

export default App;
