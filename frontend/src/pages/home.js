
import Blocks from '../components/home/blocks';
import Navbar from '../components/navbar';
import MainSection from '../components/home/mainSection';
import Transactions from '../components/home/transactions';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className='px-4 md:px-10 lg:px-20 xl:px-60'>
        <MainSection />
        <div className=' flex flex-col xl:flex-row gap-10'>
          <Transactions /><Blocks />
        </div>
      </div>
    </div>
  );
}

export default Home;
