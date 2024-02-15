
import AccountInfo from '../components/account/accountInfo';
import Navbar from '../components/navbar';
import SearchComponent from '../components/search';

const AccountDetails = () => {
    return (
    <div className="home">
      <Navbar />
      <div className='px-10 lg:px-20 xl:px-60  py-10'>
        <SearchComponent />
        <div className='flex flex-col gap-10 py-10'>
          <AccountInfo />
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
