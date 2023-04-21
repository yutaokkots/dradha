import React, {useEffect, useState} from 'react'



export default function Inspiration({quote}) {




  return (
    <>
        <div className='flex items-center'>
            <div className="p-6 max-w-sm mt-3 mb-3 mx-auto w-3/4 bg-cardamom text-vanilla rounded-md shadow-lg flex flex-col">
                
                <div>{quote.quote}</div>
                <div> {quote.source}</div>
                
            </div>
        </div>
    
    </>

  )
}
