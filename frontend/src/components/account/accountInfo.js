import React, { useEffect, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const AccountInfo = () => {

    const [transactions, setTransactions] = useState([]);
    const [accountInfo,setAccountInfo] = useState([])
    const { address } = useParams();

    console.log(address)

    const timeAgo = (timestamp) => {
        const seconds = Math.floor((new Date() - new Date(timestamp * 1000)) / 1000);

        let interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " mins ago";
        }
        return Math.floor(seconds) + " secs ago";
    };

    const BlockAPI = () => {



        console.log(address)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api-gateway.skymavis.com/explorer/txs/${address}?size=10`,
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };

        let config2 = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api-gateway.skymavis.com/skynet/ronin/accounts/${address}`,
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };

        axios(config2)
        .then((response) => {
            setAccountInfo(response.data)
        })
        .catch((error) => {
            console.log(error);
        });



        axios(config)
            .then((response) => {
                setTransactions(response.data)
            })
            .catch((error) => {
                console.log(error);
            });


    }

    useEffect(() => {

        if (transactions.length <= 0) {
            BlockAPI();
        }




    }, [transactions]);

    console.log(accountInfo)
    return (
        <>
        <div className='text-white text-xl'>
            <div className='flex gap-5'>Address : <p>{accountInfo && accountInfo.result && accountInfo.result.address}</p></div>
            <div className='flex gap-5'>Balance : <p>{accountInfo && accountInfo.result && (Math.floor(accountInfo.result.balance)).toLocaleString()} RON</p></div>        </div>
            <div className='text-white flex flex-col justify-start w-full'>
                <p className='flex justify-start text-4xl font-bold'>Transactions</p>
                <p className='flex justify-start'>Total {transactions && transactions.total && (transactions.total).toLocaleString()} transactions by {transactions && transactions.results && transactions?.results.length > 0 && transactions?.results[0]?.from}</p>
            </div>
            <table class="table-auto bg-gray-800 rounded-xl text-white w-full ">
                <thead className="border-b-[1px] w-full">
                    <tr className="text-gray-400 w-max">
                        <th className="flex  py-2 w-fit justify-start ml-5 "> Transaction Hash</th>
                        <th className=""> Block</th>

                        <th className=""> From</th>

                        <th className=" ">  To</th>

                        <th className=""> Value</th>
                        <th className=""> Age</th>


                    </tr>
                </thead>
                <tbody>
                    {transactions && transactions.results && transactions.results.map((transact, index) => {
                        // console.log(block)
                        return (<tr key={index} className="border-b-[0.7px] mx-5 border-black text-xs lg:text-sm xl:text-lg">
                            <td className="flex w-fit gap-4 my-5 items-center ml-2">
                                <div className='flex  items-center border-[0.5px]  h-10 bg-black rounded-full'>
                                    <FaExchangeAlt className=' h-5 w-10 ' />
                                </div>
                                <Link to={`/txns/${transact.hash}`} className='hover:underline'>

                                    {(transact.hash).substring(0, 5)}...{(transact.hash).substring(60, transact.hash.length)}

                                </Link>
                            </td>
                            <td>

                                <Link to={`/blocks/${transact.block_number}`} className='hover:underline'>{transact.block_number}</Link>
                            </td>
                            <td>
                                <p className='hover:underline'>{(transact.from).substring(0, 4)}...{(transact.from).substring(35, transact.from.length)}</p>
                            </td>
                            <td>
                                <p className='hover:underline'>{(transact.to).substring(0, 4)}...{(transact.to).substring(35, transact.to.length)}</p>
                            </td>
                            <td>
                                {(parseFloat(transact.value, 16) / 1e18)} RON
                            </td>
                            <td>

                                <p>{timeAgo(transact.timestamp)}</p>
                            </td>
                        </tr>)
                    }
                    )}


                </tbody>
            </table>
            </>
    )
}

export default AccountInfo;