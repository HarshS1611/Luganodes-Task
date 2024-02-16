
import Blocks from '../components/blocks/blocks';
import Navbar from '../components/navbar';
import SearchComponent from '../components/search';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const AllBlocks = () => {
    return (
    <div className="home  overflow-hidden">
      <Navbar />
      <div className='px-4 md:px-10 lg:px-20 xl:px-60  py-10'>
      <Link to={'/'} className='flex justify-start text-gray-200  w-full'><p className='flex items-center gap-2 border-[0.7px] border-black bg-gray-700 p-2 rounded-2xl px-4'><IoMdArrowRoundBack/> Home</p></Link>

        <SearchComponent />
        <div className='flex flex-col gap-10 py-10'>
          <Blocks />
        </div>
      </div>
    </div>
  );
}

export default AllBlocks;
