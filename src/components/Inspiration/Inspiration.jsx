import React, {useEffect, useState} from 'react'
import * as inspAPI from '../../utilities/insp-api'


export default function Inspiration() {
    const [quote, setQuote] = useState('')

    useEffect(()=>{
        async function getQuote(){
            try{
                const quote = await inspAPI.getQuote()
                setQuote(quote)

            } catch(err){
                console.error('err', err)
            }
        }
        getQuote()
    })

  return (
    <>
        <h1>quote here</h1>


        
    </>

  )
}
{/* <div>{quote}</div>
<div>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></div> */}