
import BlockInfo from '../components/blocks/blockInfo';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";


function BlockDetails() {
  return (
    <div className="home">
      <Navbar />
      <div className='px-10 lg:px-32 xl:px-60 py-10'>
      <Link to={'/'} className='flex justify-start text-gray-200  w-full'><p className='flex items-center gap-2 border-[0.7px] border-black bg-gray-700 p-2 rounded-2xl px-4'><IoMdArrowRoundBack/> Home</p></Link>

        {/* <SearchComponent /> */}
        <div className='flex gap-10 py-5'>
          <BlockInfo/>
        </div>
      </div>
    </div>
  );
}

export default BlockDetails;
