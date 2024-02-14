
import Navbar from '../components/navbar';
import SearchComponent from '../components/search';
import Transactions from '../components/home/transactions';

function TransactionDetails() {
  return (
    <div className="home">
      <Navbar />
      <div className='px-60'>
        {/* <SearchComponent /> */}
        <div className='flex gap-10'>
          <Transactions />
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
