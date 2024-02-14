import React, { useEffect, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);

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

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api-gateway.skymavis.com/explorer/txs?size=10',
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };

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

    console.log(transactions)
    return (
        <>
        <div className='text-white flex flex-col justify-start w-full'>
            <p className='flex justify-start text-4xl font-bold'>Transactions</p>
            <p className='flex justify-start'>Total {transactions && transactions.total && (transactions.total).toLocaleString()} transactions (Show 10,000 latest records)</p>
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
                        return (<tr key={index} className="border-b-[0.7px] mx-5 border-black">
                            <td className="flex w-fit gap-4 my-5 items-center ml-2">
                                <div className='flex  items-center border-[0.5px]  h-10 bg-black rounded-full'>
                                    <FaExchangeAlt className=' h-5 w-10 ' />
                                </div>
                                <div className='hover:underline'>

                                        {(transact.hash).substring(0,7)}...{(transact.hash).substring(60,transact.hash.length)}

                                </div>
                            </td>
                            <td>

                                <p className='hover:underline'>{transact.block_number}</p>
                            </td>
                            <td>
                                <p className='hover:underline'>{(transact.from).substring(0,7)}...{(transact.from).substring(35,transact.from.length)}</p>
                            </td>
                            <td>
                                <p className='hover:underline'>{(transact.to).substring(0,7)}...{(transact.to).substring(35,transact.to.length)}</p>
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
            </table></>
    )
}

export default Transactions;