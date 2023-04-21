import React, {useEffect, useState} from 'react'
import * as inspAPI from '../../utilities/insp-api'



export default function Inspiration({quote, getNewQuote}) {

    function handleClick(){
        getNewQuote()
    }


  return (
    <>
    <style>{`body { background-image: url("https://res.cloudinary.com/dykpeapfn/image/upload/v1682066118/sunset_xeib2e.jpg"); }`}</style>
        <div className='flex items-center justify-center'>
            <div className="p-6 max-w-sm mt-3 mb-3 mx-auto w-3/4 bg-cardamom text-vanilla rounded-md opacity-80 shadow-2xl flex flex-col">
                <div>{quote.quote}</div>
                <div> - {quote.source}</div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className=' text-vanilla bg-cardamom hover:bg-vanilla hover:text-cardamom py-1 px-1 rounded mt-2 mb-5' 
                onClick={handleClick}
                    >Reset</button>
        </div>
    </>

  )
}
