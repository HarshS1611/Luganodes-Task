
import Blocks from '../components/home/blocks';
import Navbar from '../components/navbar';
import SearchComponent from '../components/search';
import Transactions from '../components/home/transactions';

function BlockDetails() {
  return (
    <div className="home">
      <Navbar />
      <div className='px-60'>
        {/* <SearchComponent /> */}
        <div className='flex gap-10'>
          <Transactions /><Blocks />
        </div>
      </div>
    </div>
  );
}

export default BlockDetails;
