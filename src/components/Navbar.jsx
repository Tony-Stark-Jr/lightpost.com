import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from './AppProvider'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
// 

function Navbar() {

    const { query, searchPost } = useGlobalContext();;




    return (
        <>
            <header className="text-gray-600 body-font bg-gray-200">
                <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">



                    <Link to='#' className='text-4xl font-[600]'>Lightpost.com</Link>


                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                        <Link to='/world' className="mr-5 hover:text-gray-900">World</Link>

                        <Link to='/business' className="mr-5 hover:text-gray-900">Business</Link>


                        <Link to='/technology' className="mr-5 hover:text-gray-900">Technology</Link>

                        <Link to='/entertainment' className="mr-5 hover:text-gray-900">Entertainment</Link>


                        <Link to='/environment' className="mr-5 hover:text-gray-900">Enviroment</Link>

                        <Link to='/food' className="mr-5 hover:text-gray-900">Food</Link>

                        <Link to='/health' className="mr-5 hover:text-gray-900">Health</Link>

                        <Link to='/politics' className="mr-5 hover:text-gray-900">Politics</Link>

                        <Link to='/science' className="mr-5 hover:text-gray-900">Science</Link>

                        <Link to='/bookmark' className="mr-5 hover:text-gray-900">Saved Stories</Link>

                    </nav>




                    <form onSubmit={(e) => e.preventDefault()} className='w-96 p-2 border-2 border-solid border-slate-900  rounded-md flex items-center gap-2'>
                        <div className="search hover:bg-white">
                            <HiOutlineMagnifyingGlass size={20} />
                        </div>

                        <input type="text" placeholder='Search for business, markets, sports' value={query} onChange={(e) => searchPost(e.target.value)} className='w-96 p-2 outline-none' />
                    </form>





                </div>
            </header>
        </>
    )
}

export default Navbar