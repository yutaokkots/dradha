import React from 'react'
import Intent from '../Intent/Intent'

export default function PastIntentsList({intents}) {
  return (
    <>
    <ul>
        {intents.map((intent,idx)=> intent.intentComplete && <Intent key={idx} intent={intent}/> )} 
    </ul>
</>
  )
}
