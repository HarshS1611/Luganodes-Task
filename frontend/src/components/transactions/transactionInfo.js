
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";

const TransactionInfo = () => {


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
            url: 'https://api-gateway.skymavis.com/explorer/tx/0x9dab05666dd07461451d3002cce594270865c8291747621ae6c5635c3c763723',
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
            <div className='text-white flex flex-col gap-5 justify-start w-full'>
                <div className='flex gap-5'>
                    <p className='flex justify-start text-4xl font-bold'>Transaction </p>
                    <p className='flex items-center  px-4 text-md bg-green-600 rounded-full'>Success</p>
                </div>
                <p className='flex justify-start text-gray-400'> {transactions && transactions.hash && (transactions.hash)}</p>
                <div className='py-5'>
                    <div className='flex flex-col justify-start rounded-xl py-2 px-5 border-white border-[1px] text-white'>
                        <div className='flex justify-between'>
                            <div className='text-lg font-semibold'>SubmitBlockReward</div>
                            <div className='text-sm'> {timeAgo(transactions.timestamp)}
                                ∙ {new Date(transactions.timestamp * 1000).toLocaleString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short', timeZone: 'Asia/Kolkata' })}
                            </div>
                        </div>
                        <div className='my-5 border-b-[1px]'>
                            <div className='flex py-4 justify-start gap-6'>From <p>{transactions.from}</p></div>
                            <div className=''><FaArrowDown /></div>
                            <div className='flex py-4 justify-start gap-10'>To <p>{transactions.to}</p></div>

                        </div>
                        <div className='border-b-[1px]'>
                            <div className='flex py-4 justify-start gap-10'> RON Transferred <p>{(parseFloat(transactions.value, 16) / 1e18)} RON</p> </div>
                        </div>
                        <summary className='relative flex justify-start py-4 border-b-[1px]'>
                            {/* <div>Advance Details</div> */}
                            <details className=''>
                                <div className='flex py-4 justify-start gap-10'>Block <p>{transactions.block_number}</p></div>
                                <div className='flex py-4 justify-start gap-10'>Gas Price <p>{transactions.gas_price} GWEI</p></div>
                                <div className='flex py-4 justify-start gap-10'>Nonce <p>{transactions.nonce}</p></div>
                                <div className='flex py-4 justify-start gap-10'>Fee <p>Free</p></div>
                                <div className='flex py-4 justify-start gap-10'>Gas Used <p>{transactions.gas_used}</p></div>

                            </details>
                        </summary>
                        <div className='border-b-[1px]'>
                            Logs
                            <div>{transactions && transactions.logs && transactions.logs.map((log, idx) => (
                                <div key={idx}>
                                <div>{log.address}</div>
                                <div>{log.topics[0]}</div>
                                </div>
                            ))}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TransactionInfo;