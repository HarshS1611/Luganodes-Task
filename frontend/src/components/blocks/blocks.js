import React, { useEffect, useState } from 'react';
import { BsBox } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blocks = () => {

    const [blocks, setBlocks] = useState([]);
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
            url: `https://api-gateway.skymavis.com/skynet/ronin/blocks?limit=20&offset=${20 * page}`,
            headers: {
                'Accept': 'application/json',
                'X-API-Key': 'ZGjxZj0JZN63VwlAnEzfExGHR6DbfO57'
            }
        };


        axios(config)
            .then((response) => {
                setBlocks(response.data.result);
                setTotalPages(Math.ceil(response.data.result.paging.total / 20));

            })
            .catch((error) => {
                console.log(error);
            });


    }

    useEffect(() => {

        if (blocks.length <= 0) {
            BlockAPI(currentPage);
        }
    }, [blocks, currentPage]);

    console.log(blocks, currentPage, totalPages)


    return (
        <>
            <div className='text-white flex flex-col justify-start w-full'>
                <p className='flex justify-start text-4xl font-bold'>Blocks</p>
                <p className='flex justify-start'>Total {blocks && blocks.paging && (blocks.paging.total)} transactions (Show 10,000 latest records)</p>
            </div>
            <div className='overflow-auto'>
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
                        {blocks && blocks.items && blocks.items.map((block, index) => {
                            // console.log(block)
                            return (<tr key={index} className="border-b-[0.7px] border-black text-sm lg:text-lg px-4">
                                <td className="flex w-fit gap-4 my-5 items-center ml-5">
                                    <div className='flex items-center border-[1px] h-10 bg-black rounded-full'>
                                        <BsBox className=' h-5 w-10 ' />
                                    </div>
                                    <Link to={`/blocks/${block.number}`} className='hover:underline'>

                                        {block.number}

                                    </Link>
                                </td>
                                <td>
                                    <div className='flex gap-2 justify-center'>
                                        Validated by <p className='hover:underline'>{(block.coinbase).substring(0, 4)}...{(block.coinbase).substring(38, block.coinbase.length)}</p>

                                    </div>
                                </td>
                                <td>
                                    {block.transactions.length} TXS
                                </td>
                                <td>
                                    {(block.gasUsed)}
                                </td>
                                <td>
                                    <p>{timeAgo(block.timestamp)}</p>
                                </td>
                            </tr>)
                        }
                        )}


                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    {blocks && Array.from({ length: totalPages }, (_, index) => index + 1).slice(0, 10).map((page) => (
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

export default Blocks;