import React from 'react'
import Intent from '../Intent/Intent'


export default function IntentsList({intents}) {
  return (
    <>
        <ul>
            {intents.map((intent,idx)=> <Intent key={idx} intent={intent} />  )}
        </ul>
    </>
    
  )
}
