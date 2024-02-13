import React, { useState } from 'react';
import { MdOutlineAttachMoney } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaTachometerAlt } from "react-icons/fa";

function SearchComponent() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4 text-white py-24">
            <p className='flex justify-start text-[30px] font-semibold'>The Ronin Blockchain Explorer</p>

            <form>
                <div class="flex">
                    <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button id="dropdown-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-10 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All Filters <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <div id="dropdown" className={`absolute z-10 top-68 ${isDropdownOpen ? '' : 'hidden'} bg-gray-800 divide-y divide-gray-100 rounded-lg shadow-md w-32`}>
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Filters</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Addresses</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Token</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Domain Name</button>
                            </li>
                        </ul>
                    </div>

                    <div class="relative w-full">

                        <input type="search" id="default-search" class="block rounded-r-xl w-full p-4  text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" required />

                        <button type="submit" class="text-white absolute px-2 end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg></button>
                    </div>
                </div>
            </form>
            <div>
                <div className='grid grid-rows-2 rounded-xl grid-flow-col gap-4 mt-10 p-5 bg-gray-800'>
                    <div className='flex gap-4 items-center'> <MdOutlineAttachMoney className='text-white h-10 w-10' /> <div className='text-lg  text-gray-300'><p className='text-xs'> RONIN PRICE </p> <p className='flex justify-start text-white '>$6.66</p></div> </div>
                    <div className='flex gap-4 items-center'> <CiGlobe className='text-white h-10 w-10' />  <div className='text-lg  text-gray-300'><p className='text-xs'> MARKET CAP
                    </p> <p className='flex justify-start text-white '>$316,241,693,471.00
                        </p></div></div>
                    <div className='flex gap-4 items-center'> <AiOutlineTransaction className='text-white h-10 w-10' />
                        <div className='text-lg  text-gray-300'><p className='text-xs'> TRANSACTIONS
                        </p> <p className='flex justify-start text-white '>2,259.66 M (13.8 TPS)</p></div>  </div>
                    <div className='flex gap-4 items-center'><FaTachometerAlt className='text-white h-10 w-10' />  <div className='text-lg  text-gray-300'><p className='text-xs'> LAST FINALIZED BLOCK
                    </p> <p className='flex justify-start text-white '>19220807</p></div>  </div>
                    <div className='flex items-center'>TRANSACTION HISTORY IN 14 DAYS  </div>
                </div>
            </div>
        </div >
    );
}

export default SearchComponent;
