import React, { useEffect, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

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

    const BlockAPI = (page) => {

        console.log(page)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api-gateway.skymavis.com/skynet/ronin/txs?limit=20&offset=${20 * page}`,
            headers: {
                'Accept': 'application/json',
                'X-API-Key': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        }

        axios(config)
            .then((response) => {
                setTransactions(response.data.result)
                setTotalPages(Math.ceil(response.data.result.paging.total / 20));
            })
            .catch((error) => {
                console.log(error);
            });


    }

    useEffect(() => {

        if (transactions.length <= 0) {
            BlockAPI(currentPage);
        }
    }, [transactions, currentPage]);

    console.log(transactions, currentPage, totalPages)
    return (
        <>
            <div className=' text-white flex flex-col justify-start w-full'>
                <p className='flex justify-start text-2xl lg:text-4xl font-bold'>Transactions</p>
                <p className='flex justify-start'>Total {transactions && transactions.paging && transactions.paging.total && (transactions.paging.total)} transactions (Show 10,000 latest records)</p>
            </div>

            <div className='overflow-auto'>
                <table class=" table-auto bg-gray-800 rounded-xl text-white xl:w-full ">
                    <thead className="border-b-[1px] w-full">
                        <tr className="text-gray-400 w-fit">
                            <th className="flex  py-2 w-fit justify-start  ml-5 "> Transaction Hash</th>
                            <th className=""> Block</th>

                            <th className=""> From</th>

                            <th className=" ">  To</th>

                            <th className=""> Gas Price</th>
                            <th className=""> Age</th>


                        </tr>
                    </thead>
                    <tbody>
                        {transactions && transactions.items && transactions.items.map((transact, index) => {
                            // console.log(block)
                            return (<tr key={index} className="border-b-[0.7px] text-xs md:text-sm lg:text-md xl:text-lg xl:mx-5 border-black">
                                <td className="flex w-fit gap-4 my-5 items-center ml-2">
                                    <div className='flex  items-center border-[0.5px]  h-10 bg-black rounded-full'>
                                        <FaExchangeAlt className='h-5 w-10 ' />
                                    </div>
                                    <Link to={`/txns/${transact.transactionHash}`} className='hover:underline'>

                                        {(transact.transactionHash).substring(0, 7)}...{(transact.transactionHash).substring(60, transact.transactionHash.length)}

                                    </Link>
                                </td>
                                <td>

                                    <Link to={`/blocks/${transact.blockNumber}`} className='hover:underline'>{transact.blockNumber}</Link>
                                </td>
                                <td>
                                    <p className='hover:underline'>{(transact.from).substring(0, 4)}...{(transact.from).substring(38, transact.from.length)}</p>
                                </td>
                                <td>
                                    <p className='hover:underline'>{(transact.to).substring(0, 4)}...{(transact.to).substring(38, transact.to.length)}</p>
                                </td>
                                <td>
                                    {parseInt(transact.gasPrice, 16)} GWEI
                                </td>
                                <td>

                                    <p>{timeAgo(transact.blockTime)}</p>
                                </td>
                            </tr>)
                        }
                        )}


                    </tbody>
                </table>

                <div className="flex justify-center mt-4">
                    {transactions && Array.from({ length: totalPages }, (_, index) => index + 1).slice(0, 10).map((page) => (
                        <button
                            key={page}
                            className={`mx-1 px-3 py-1 rounded-lg text-xs md:text-md ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => { setCurrentPage(page); BlockAPI(page) }}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Transactions;