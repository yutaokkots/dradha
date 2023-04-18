import React, { useState } from 'react'
import * as intentsAPI from '../../../utilities/intents-api'


export default function Intent({intent, setUpdate}) {

    async function deleteOne(evt){
        evt.preventDefault()
        try{
          await intentsAPI.deleteOne(intent._id)
        } catch(err){
            console.error('err', err)
        }
      }

  async function completeOne(evt){
        evt.preventDefault()
        try{
          await intentsAPI.completeOne(intent._id)
        } catch(err){
            console.error('err', err)
        }
    }

  return (
    <>  
        <li>
          {intent.intentDescription}
          <form

            >
              <button
                  name='startTimer'

                  >start timer</button>
              <button
                  name='edit'

                  >edit</button>
              <button
                  name='deleteOne'
                  value='deleteOne'
                  onClick={deleteOne}
                  >delete</button>
              <button
                  name='completeOne'
                  value='completeOne'
                  onClick={completeOne}
                  >Complete</button>
          </form>
        </li>
    </>
  )
}
