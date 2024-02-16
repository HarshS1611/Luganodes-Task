
import Navbar from '../components/navbar';
import TransactionInfo from '../components/transactions/transactionInfo';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function TransactionDetails() {
  return (
    <div className="home">
      <Navbar />
      <div className='px-4 md:px-10 lg:px-32 xl:px-60 py-10'>
      <Link to={'/'} className='flex justify-start text-gray-200  w-full'><p className='flex items-center gap-2 border-[0.7px] border-black bg-gray-700 p-2 rounded-2xl px-4'><IoMdArrowRoundBack/> Home</p></Link>

        {/* <SearchComponent /> */}
        <div className='flex overflow-hidden gap-10 py-5'>
          <TransactionInfo />
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
