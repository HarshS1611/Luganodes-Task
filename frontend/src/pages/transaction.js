
import Navbar from '../components/navbar';
import SearchComponent from '../components/search';
import Transactions from '../components/transactions/transactions';
const AllTransactions = () => {
  return (
    <div className="home overflow-hidden">
      <Navbar />
      <div className='px-4 md:px-8 lg:px-20 xl:px-60 py-10'>
        <SearchComponent />
        <div className='flex  flex-col gap-10 py-8 xl:py-10'>
          <Transactions />
        </div>
      </div>
    </div>
  );
}

export default AllTransactions;
