import React, { useEffect } from 'react'
import Intent from '../Intent/Intent'
import {useState, createContext, useContext } from 'react'
import { IntentContext} from '../IntentComp'


export default function IntentsList({intents}) {
  // useContext located in '../IntentComp' to re-render useEffect (reload data)
  const {pageReload, setPageReload} = useContext(IntentContext)
  const [render, setRender] = useState(null)

  useEffect (()=>{
      setRender(pageReload)
  }, [pageReload])

  return (
    <>
        <ul>
            <h1>pageReload</h1>
            {render}
            {intents.map((intent,idx)=>  !intent.intentComplete && <Intent key={idx} intent={intent}/> )}
        </ul>
    </>
    
  )
}
