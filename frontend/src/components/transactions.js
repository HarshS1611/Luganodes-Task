import React, { useEffect, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";

import axios from 'axios';

const Transactions = () => {

    const [blocks, setBlocks] = useState([]);

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
            return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    };

    const BlockAPI = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api-gateway.skymavis.com/explorer/blocks?from=1&size=5',
            headers: {
                'Accept': 'application/json',
                'X-API-Key': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };
        

        axios(config)
            .then((response) => {
                setBlocks(response.data);

            })
            .catch((error) => {
                console.log(error);
            });

      
    }

    useEffect(() => {

        if (blocks.length <= 0) {
            BlockAPI();
        }




    }, [blocks]);

    console.log(blocks)
    return (
        <>
            <table class="table-auto bg-gray-800 rounded-lg text-white w-full ">
                <thead className="rounded-lg border w-full">
                    <tr className="  w-full">
                        <th className="flex justify-start py-5 ml-5 ">Latest Transactions</th>
                        <th className="py-5 ">View All</th>
                    </tr>
                </thead>
                <tbody>
                    {blocks && blocks.results && blocks.results.map((block, index) => {
                        // console.log(block)
                        return (<tr key={index} className="border-b  px-4">
                            <td className="flex py-5 flex-row gap-4 justify-start mx-5">
                                <div className='flex items-center border-[1px] h-10 bg-black rounded-full'>
                                    <FaExchangeAlt className=' h-5 w-10 ' />
                                </div>
                                <div>
                                    <p className="flex justify-start">

                                        #{block.number}
                                    </p>
                                    <p className="flex justify-start">
                                        Validated by {(block.miner).substring(0, 5)}...
                                    </p>
                                </div>
                            </td>
                            <td>
                                {block.transactions} TXS
                                <p>{timeAgo(block.timestamp)}</p>
                            </td>
                        </tr>)
                    }
                    )}


                </tbody>
            </table></>
    )
}

export default Transactions;