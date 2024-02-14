import React, { useEffect, useState } from 'react';
import { BsBox } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blocks = () => {

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
            return Math.floor(interval) + " mins ago";
        }
        return Math.floor(seconds) + " secs ago";
    };

    const BlockAPI = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api-gateway.skymavis.com/explorer/blocks?from=1&size=10',
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
            <div className='text-white flex flex-col justify-start w-full'>
                <p className='flex justify-start text-4xl font-bold'>Blocks</p>
                <p className='flex justify-start'>Total {blocks && blocks.total && (blocks.total).toLocaleString()} transactions (Show 10,000 latest records)</p>
            </div>
            <table class="table-auto bg-gray-800 rounded-lg text-white w-full ">
                <thead className="rounded-lg border-b-[1px] w-full">
                    <tr className="  w-full">
                        <th className="flex justify-start w-max ml-5 py-4 ">Latest Blocks</th>
                        <th className="w-fit"> Validaters</th>

                        <th className=""> Tx Count</th>

                        <th className=" ">  Gas Used</th>

                        <th className=""> Age</th>

                    </tr>
                </thead>
                <tbody>
                    {blocks && blocks.results && blocks.results.map((block, index) => {
                        // console.log(block)
                        return (<tr key={index} className="border-b-[0.7px] border-black  px-4">
                            <td className="flex w-fit gap-4 my-5 items-center ml-5">
                                <div className='flex items-center border-[1px] h-10 bg-black rounded-full'>
                                    <BsBox className=' h-5 w-10 ' />
                                </div>
                                <div className='hover:underline'>

                                        {block.number}

                                </div>
                            </td>
                            <td>
                                <div className='flex gap-2 justify-center'>
                                Validated by <p className='hover:underline'>{(block.miner).substring(0, 4)}...{(block.miner).substring(38, block.miner.length)}</p>

                                </div>
                            </td>
                            <td>
                                {block.transactions} TXS
                            </td>
                            <td>
                                {(block.gas_used).toLocaleString()}
                            </td>
                            <td>
                                <p>{timeAgo(block.timestamp)}</p>
                            </td>
                        </tr>)
                    }
                    )}


                </tbody>
            </table></>
    )
}

export default Blocks;