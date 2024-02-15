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
            url: 'https://api-gateway.skymavis.com/explorer/txs?size=5',
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
            <table class="table-auto bg-gray-800 rounded-lg text-white w-full ">
                <thead className="rounded-lg border-b-[1px] w-full">
                    <tr className="  w-full">
                        <th className="flex justify-start py-4 ml-5 ">Latest Transactions</th>
                        <th className="py-4 "><Link className='text-sky-700' to={'/txns'}>View All</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions && transactions.results && transactions.results.map((transact, index) => {
                        // console.log(block)
                        return (<tr key={index} className="border-b-[0.7px] border-black  px-4">
                            <td className="flex py-5 flex-row gap-4 justify-start mx-5">
                                <div className='flex items-center border-[1px] h-10 bg-black rounded-full'>
                                    <FaExchangeAlt className=' h-5 w-10 ' />
                                </div>
                                <div>
                                    <Link to={`/txns/${transact.hash}`} className="flex justify-start hover:underline">

                                    {(transact.hash).substring(0,7)}...{(transact.hash).substring(60,transact.hash.length)}
                                    </Link>
                                    <p className="flex gap-2 justify-start">
                                    from <Link to={`/address/${transact.from}`}  className='hover:underline'>{(transact.from).substring(0,4)}...{(transact.from).substring(38,transact.from.length)}</Link>  to <Link to={`/address/${transact.to}`}  className='hover:underline'>{(transact.to).substring(0,4)}...{(transact.to).substring(38,transact.to.length)}</Link>
                                    </p>
                                </div>
                            </td>
                            <td>
                            {parseFloat(transact.value, 16) / 1e18} RON
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