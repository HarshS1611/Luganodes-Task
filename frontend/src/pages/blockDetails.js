
import BlockInfo from '../components/blocks/blockInfo';
import Navbar from '../components/navbar';


function BlockDetails() {
  return (
    <div className="home">
      <Navbar />
      <div className='px-60'>
        {/* <SearchComponent /> */}
        <div className='flex gap-10 py-10'>
          <BlockInfo/>
        </div>
      </div>
    </div>
  );
}

export default BlockDetails;
