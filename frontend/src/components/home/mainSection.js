import React, { useEffect, useState } from 'react';
import { MdOutlineAttachMoney } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaTachometerAlt } from "react-icons/fa";
import { GrDocumentVerified } from "react-icons/gr";
import { MdCurrencyExchange } from "react-icons/md";

import axios from 'axios';
import SearchComponent from '../search';

function MainSection() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const [latestBlock, setLatestBlock] = useState(0);
    const [totalAddresses, setTotalAddresses] = useState(0);
    const [totalTransaction, setTotalTransaction] = useState(0);
    const [supply, setSupply] = useState(0);

    const GetInfo = () => {

        const options = {
            method: 'GET',
            headers: { accept: 'application/json', api_key: 'tm-fdc9c1b7-1135-48f8-a7cf-69a949381914' }
        };

        fetch('https://api.tokenmetrics.com/v2/price-prediction?symbol=RON&limit=1&page=0', options)
            .then(response => response.json())
            .then(response => console.log(setPrice(response.data[0]['FORECASTS_FOR_NEXT_7_DAYS']['1-day-forecast'])))
            .catch(err => console.error(err));

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api-gateway.skymavis.com/explorer/blocks/latest',
            headers: {
                'Accept': 'application/json',
                'X-API-Key': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };
        let config2 = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api-gateway.skymavis.com/skynet/ronin/txs?limit=1',
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };


        let config3 = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api-gateway.skymavis.com/explorer/addresses/wealthiest?size=1',
            headers: {
                'Accept': 'application/json',
                'X-API-Key': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };


        let config4 = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api-gateway.skymavis.com/skynet/ronin/supplies/circulating',
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };

        axios(config4)
            .then((response) => {
                setSupply(response.data.result.value)
            })
            .catch((error) => {
                console.log(error);
            });

        axios(config3)
            .then((response) => {
                setTotalAddresses(response.data)
            })
            .catch((error) => {
                console.log(error);
            });

        axios(config2)
            .then((response) => {
                setTotalTransaction(response.data.result)
            })
            .catch((error) => {
                console.log(error);
            });


        axios(config)
            .then((response) => {
                setLatestBlock(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (!latestBlock) {
            GetInfo();
        }
    }, []);

    console.log(price, supply)

    return (
        <div className="flex flex-col gap-4 text-white py-10">
            <p className='flex justify-start text-[30px] font-semibold'>The Ronin Blockchain Explorer</p>

            <SearchComponent />
            <div>
                <div className='grid grid-rows-2 rounded-xl grid-flow-col gap-4 mt-5 xl:mt-10 p-5 bg-gray-800'>
                    <div className='flex gap-4 items-center'> <MdOutlineAttachMoney className='text-white h-10 w-10' /> <div className='lg:text-lg  text-gray-300'><p className='text-xs'> RONIN PRICE </p> <p className='flex text-sm lg:text-lg justify-start text-white '>${price && (price + 0.265).toLocaleString().substring(0, 4)}</p></div> </div>
                    <div className='flex gap-4 items-center'> <CiGlobe className='text-white h-10 w-10' />  <div className='lg:text-lg  text-gray-300'><p className='flex justify-start text-xs'> MARKET CAP
                    </p> <p className='flex justify-start text-sm lg:text-lg text-white '>${supply && ((price + 0.265) * parseFloat(supply)).toLocaleString()}
                        </p></div></div>
                    <div className='flex gap-4 items-center'> <AiOutlineTransaction className='text-white h-10 w-10' />
                        <div className='lg:text-lg  text-gray-300'><p className='flex justify-start text-xs'>TRANSACTIONS
                        </p> <p className='flex justify-start text-white text-sm lg:text-lg'>{totalTransaction && totalTransaction.paging.total.toLocaleString()}</p></div>  </div>
                    <div className='flex gap-4 items-center'><FaTachometerAlt className='text-white h-10 w-10' />  <div className='lg:text-lg  text-gray-300'><p className='text-xs'> LAST FINALIZED BLOCK
                    </p> <p className='flex justify-start text-white text-sm lg:text-lg'>{latestBlock && latestBlock.number.toLocaleString()}</p></div>  </div>
                    <div className='flex gap-4 items-center'><GrDocumentVerified className='text-white h-10 w-10' />  <div className='lg:text-lg  text-gray-300'><p className='text-xs'> TOTAL ADDRESSES
                    </p> <p className='flex justify-start text-white text-sm lg:text-lg'>{totalAddresses && totalAddresses.total && totalAddresses.total.toLocaleString()}</p></div>  </div>
                    <div className='flex gap-4 items-center'><MdCurrencyExchange className='text-white h-10 w-10' />  <div className=' lg:text-lg  text-gray-300'><p className='flex justify-start text-xs'> TOTAL CIRCULATING SUPPLY
                    </p> <p className='flex justify-start text-white text-sm lg:text-lg'>{supply && supply.toLocaleString().substring(0, 13)} RON</p></div>  </div>
                    <div className='hidden xl:block flex items-center'>TRANSACTION HISTORY IN 14 DAYS  </div>
                </div>
            </div>


        </div >
    );
}

export default MainSection;
