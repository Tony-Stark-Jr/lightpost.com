import React from 'react'
import '../assets/loader.css'

function Loader() {
    return (
        <div className='flex items-center justify-center'>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader