
import Navbar from '../components/navbar';
import SearchComponent from '../components/search';
import Transactions from '../components/transactions/transactions';
const AllTransactions = () => {
  return (
    <div className="home">
      <Navbar />
      <div className='px-40 py-10'>
        <SearchComponent />
        <div className='flex flex-col gap-10 py-10'>
          <Transactions />
        </div>
      </div>
    </div>
  );
}

export default AllTransactions;
