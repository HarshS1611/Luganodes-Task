
import Navbar from '../components/navbar';
import SearchComponent from '../components/search';
import TransactionInfo from '../components/transactions/transactionInfo';
function TransactionDetails() {
  return (
    <div className="home">
      <Navbar />
      <div className='px-10 lg:px-32 xl:px-60'>
        {/* <SearchComponent /> */}
        <div className='flex gap-10 py-10'>
          <TransactionInfo />
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
