
import Blocks from '../components/blocks/blocks';
import Navbar from '../components/navbar';
import SearchComponent from '../components/search';

const AllBlocks = () => {
    return (
    <div className="home">
      <Navbar />
      <div className='px-10 lg:px-20 xl:px-60  py-10'>
        <SearchComponent />
        <div className='flex flex-col gap-10 py-10'>
          <Blocks />
        </div>
      </div>
    </div>
  );
}

export default AllBlocks;
