
import Blocks from '../components/blocks';
import Navbar from '../components/navbar';
import SearchComponent from '../components/search';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className='px-60'>
        <SearchComponent />
        <div className='flex gap-10'>
          <Blocks /><Blocks />
        </div>
      </div>
    </div>
  );
}

export default Home;
