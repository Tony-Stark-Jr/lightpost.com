import React from 'react'
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { useGlobalContext } from './AppProvider';

function Pagination() {


    const { totalResults, page ,getNextPage,getPrevPage} = useGlobalContext()

    return (
        <div className="button-container flex justify-between items-center container ">

            <button  onClick={() => getPrevPage()} className="flex justify-center items-center gap-x-0.5 text-white bg-slate-800 border-0 py-1 px-3 focus:outline-none hover:bg-slate-900 rounded text-base mt-4 md:mt-0">
                <HiOutlineArrowSmallLeft />
                Prev
            </button>

            <p>{page} of {totalResults}</p>

            <button onClick={() => getNextPage()} className="flex justify-center items-center gap-x-0.5 text-white bg-slate-800 border-0 py-1 px-3 focus:outline-none hover:bg-slate-900 rounded text-base mt-4 md:mt-0">Next
                <HiOutlineArrowSmallRight />
            </button>
        </div>
    )
}

export default Pagination