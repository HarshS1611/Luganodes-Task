
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";

const BlockInfo = () => {


    const [blocks, setblocks] = useState([]);
    const { blockID } = useParams();


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
            url: `https://api-gateway.skymavis.com/explorer/block/${blockID}`,
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };

        axios(config)
            .then((response) => {
                setblocks(response.data)
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
            <div className='text-white overflow-hidden flex flex-col gap-5 justify-start w-full'>
                <div className='flex gap-5'>
                    <p className='flex justify-start text-4xl font-bold'>Block </p>
                    <p className='flex items-center  px-4 text-md bg-green-600 rounded-full'>#{blocks.number}</p>
                </div>
                <p className='flex justify-start text-gray-400'> {blocks && blocks.hash && (blocks.hash)}</p>
                <div className='py-5'>
                    <div className='flex flex-col justify-start rounded-xl py-2 px-5 border-gray-600 shadow-lg border-[1px] bg-gray-800 text-white'>
                        <div className='flex justify-between py-5 border-b-[1px]'>
                            <div className='text-lg font-semibold'>Block Detail</div>
                            <div className='text-sm'> {timeAgo(blocks.timestamp)}
                                ∙ {new Date(blocks.timestamp * 1000).toLocaleString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short', timeZone: 'Asia/Kolkata' })}
                            </div>
                        </div>
                        <div className='my-5 overflow-auto'>
                            <div className='flex py-4 justify-start gap-6'>Block Height <p>{blocks.number}</p></div>
                            {/* <div className=''><FaArrowDown /></div> */}
                            <div className='flex py-4 justify-start gap-10'>Validated By <p>{blocks.miner}</p></div>
                            <div className='flex py-4 justify-start gap-10'>Gas Used <p>{(blocks.gas_used)}</p></div>

                            <div className='flex py-4 justify-start gap-10'>Gas Limit <p>{(blocks.gas_limit)}</p></div>

                            <div className='flex py-4 justify-start gap-10'>Size <p>{blocks.size} Bytes</p></div>


                        </div>
                      
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlockInfo;