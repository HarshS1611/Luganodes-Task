const Blocks = () => {
    return (
        <>
            <table class="table-auto text-white w-full border-white rounded border-2">
                <thead className="w-full">
                    <tr className="  w-full">
                        <th className="flex justify-start ml-5 ">Latest Blocks</th>
                        <th className=" ">Customize</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b px-4" >
                        <td className="flex flex-col justify-start mx-5">
                            <p className="flex justify-start">
                            #
                            32005547
                        </p>
                        <p className="flex justify-start">

                            Validated by
                            EternityHub.tech
                            </p></td>
                        <td>15 TXS
                           <p>2 secs ago</p> </td>
                    </tr>
                    <tr >
                        <td className="flex flex-col justify-start mx-5">
                            <p className="flex justify-start">
                            #
                            32005547
                        </p>
                        <p className="flex justify-start">

                            Validated by
                            EternityHub.tech
                            </p></td>
                        <td>15 TXS
                           <p>2 secs ago</p> </td>
                    </tr>


                </tbody>
            </table></>
    )
}

export default Blocks;