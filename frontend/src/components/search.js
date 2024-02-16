import React, { useEffect, useState } from 'react';
import { BsBox } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaExchangeAlt } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosReturnLeft } from "react-icons/io";

function SearchComponent() {

    const [searchType, setSearchType] = useState('');

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const determineSearchType = (query) => {
        if (query) {
            if (query.startsWith('0x') && query.length === 42) {
                return 'address';
            } else if (query.startsWith('0x') && query.length === 66) {
                return 'transaction';
            } else if (!isNaN(query) && query.length === 8) {
                return 'block';
            } else if (query.startsWith('0x')) {
                return 'latestTransaction';
            } else {
                return 'unknown';
            }
        }
    };


    const GetInfo = (type, query) => {

        console.log(type, query)


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '',
            headers: {
                'Accept': 'application/json',
                'X-API-Key': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };

        switch (type) {
            case 'address':
                config.url = `https://api-gateway.skymavis.com/explorer/address/${query}`;
                break;
            case 'transaction':
                config.url = `https://api-gateway.skymavis.com/explorer/tx/${query}`;
                break;
            case 'block':
                config.url = `https://api-gateway.skymavis.com/explorer/block/${query}`;
                break;
            case 'latestTransaction':
                config.url = `https://api-gateway.skymavis.com/explorer/txs?size=5`;
                break;
            default:
                console.log('Unknown search type');
                return;
        }

        axios(config)
            .then((response) => {
                setSearchResult(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        console.log(searchResult)
    }

    const handleSearchChange = (e) => {
        // const { value } = e.target.value;
        console.log(searchQuery)
        // setSearchQuery(value);
        const type = determineSearchType(searchQuery);
        setSearchType(type)
        if (type !== 'unknown') {
            GetInfo(type, searchQuery); 
        } else {
            console.log('Invalid search query');
        }
    };


    useEffect(() => {
        handleSearchChange();
    }, [searchQuery]);

    console.log(searchResult)

    return (
        <div className="flex flex-col gap-4 text-white py-5">

            <form >
                <div class="flex">
                    {/* <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
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
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</button>
                            </li>

                        </ul>
                    </div> */}

                    <div class="relative w-full md:w-[80%] lg:w-[70%]">

                        <input type="search" id="default-search"
                            className="block rounded-xl w-full p-4 text-xs lg:text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Address / Txn Hash / Block etc."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                handleSearchChange();
                            }} required />

                        <div className="flex items-center text-gray-800 absolute px-2 end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
                            {searchQuery ? (<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>):(<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>)}
                            </div>

                    </div>

                </div>
                {searchQuery && <div>{searchResult ? (
                    <div className="flex justify-start  md:w-full text-white   shadow">
                        <div className='flex justify-start bg-gray-800 rounded-r-lg rounded-b-lg'>
                            <div className='flex  items-start w-72 md:w-full overflow-hidden md:w-full'>{searchType === 'block' ? (<>
                                <Link to={`/blocks/${searchResult.number}`} className="flex py-2 overflow-hidden md:py-5 flex-row gap-2 md:gap-4 justify-start mx-5">
                                    <div className='flex items-center border-[1px] h-10 bg-black rounded-full'>
                                        <BsBox className=' h-5 w-10 ' />
                                    </div>
                                    <div>
                                        <Link to={`/blocks/${searchResult.number}`} className="flex justify-start hover:underline">

                                            #{searchResult.number}
                                        </Link>
                                        <p className='text-xs'>{new Date(searchResult.timestamp * 1000).toLocaleString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short', timeZone: 'Asia/Kolkata' })}</p>


                                    </div>
                                    <div className='flex items-center'>
                                        <IoIosReturnLeft className='font-bold h-6 w-6' />
                                    </div>

                                </Link></>)
                                : (<>{searchType === 'address' ? (<Link to={`/address/${searchResult.address}`} className='flex overflow-hidden items-center p-2 md:p-4 gap-2 text-xs md:text-md lg:text-lg md:gap-5'><MdAccountBalanceWallet /> <p>{searchResult.address}</p><div className='flex items-center'>
                                    <IoIosReturnLeft className='font-bold h-6 w-6' />
                                </div></Link>) : (<Link to={`/txns/${searchResult.hash}`} className="flex py-5 flex-row gap-6 justify-start mx-5">
                                    <div className='flex items-center border-[1px] h-10 bg-black rounded-full'>
                                        <FaExchangeAlt className=' h-5 w-10 ' />
                                    </div>
                                    <div>
                                        <Link to={`/txns/${searchResult.hash}`} className="flex justify-start hover:underline">

                                            {searchResult && searchResult.hash && searchResult.hash.length > 0 && (searchResult.hash || "Loading").substring(0, 7)}...{(searchResult.hash || "Loading").substring(60, searchResult.hash && searchResult.hash.length)}                                        </Link>
                                        <p className='text-xs'>{new Date(searchResult.timestamp * 1000).toLocaleString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short', timeZone: 'Asia/Kolkata' })}</p>

                                    </div>
                                    <div className='flex items-center'>
                                        <IoIosReturnLeft className='font-bold h-6 w-6' />
                                    </div>
                                </Link>)}</>)}</div></div>
                    </div>
                ) : (<div className='flex justify-start'>Loading...</div>)}</div>}
            </form>



        </div >
    );
}

export default SearchComponent;
