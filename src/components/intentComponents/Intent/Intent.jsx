import React from 'react'
import * as intentsAPI from '../../../utilities/intents-api'

export default function Intent({intent}) {
  
  
  function handleClick(evt){
  }

  function handleSubmit(evt){
      this[`${evt.target.name}`] = () => {
        intentsAPI.deleteOne(intent._id)
      }

  }
  
  
  return (
    <>  
        <li>
          {intent.intentDescription}
          <div>{intent._id}</div>
          <form
            onSubmit={handleSubmit}
            >
              <button
                  name='startTimer'
                  onClick={handleClick}
                  >start timer</button>
              <button
                  name='edit'
                  onClick={handleClick}
                  >edit</button>
              <button
                  name='deleteOne'
                  onClick={handleClick}
                  >delete</button>
          </form>
        </li>
    </>
  )
}
