import React, {useEffect, useState} from 'react'



export default function Inspiration({quote}) {

    function handleClick(){

    }


  return (
    <>
        <div className='flex items-center justify-center'>
            <div className="p-6 max-w-sm mt-3 mb-3 mx-auto w-3/4 bg-cardamom text-vanilla rounded-md shadow-lg flex flex-col">
                <div>{quote.quote}</div>
                <div> - {quote.source}</div>
            </div>

            <button className=' text-vanilla bg-cardamom hover:bg-vanilla hover:text-cardamom py-1 px-1 rounded mt-5 mb-5' 
                onClick={handleClick}
                    >Reset</button>

        </div>
    
    </>

  )
}
