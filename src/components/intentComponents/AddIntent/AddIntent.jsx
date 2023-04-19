import React from 'react'
import {useState, useContext} from 'react'
import * as intentsAPI from '../../../utilities/intents-api'
import { IntentContext} from '../IntentComp'
import Intent from '../Intent/Intent'

export default function AddIntent({user, intents}) {
    const [newIntent, setNewIntent] = useState('')
    const [newIntentObject, setNewIntentObject] = useState({intentUserId:`${user._id}`,intentDescription: ''})
    
    // useContext located in '../IntentComp' to re-render useEffect (reload data)
    const {pageReload, setPageReload} = useContext(IntentContext)

    function handleChange(evt){
        setNewIntent(evt.target.value)
        setNewIntentObject({...newIntentObject, [evt.target.name]: evt.target.value})
    }

    async function handleSubmit(evt){
        evt.preventDefault() 
        try {
            const result = await intentsAPI.createOne(newIntentObject);
            setPageReload(!pageReload)
        } catch (error) {
        setError(`Error: ${error.message}`);
        }
        setNewIntent('')
    }

    return (
        <>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <ul>
                    {intents.map((intent,idx)=>  
                        !intent.intentComplete && <Intent key={idx} intent={intent}/> )}
                </ul>
            </div>
            <div className="p-6 max-w-sm mx-auto bg-teal-900 rounded-xl shadow-lg flex items-center space-x-4">
                <form
                    onSubmit={handleSubmit}>
                    <label>I am working on / meditating on: </label>
                    <input 
                        name="intentDescription"
                        value={newIntent} 
                        onChange={handleChange}
                        required
                        ></input>
                    <button className="bg-sky-500 hover:bg-sky-700" type='submit'>Submit</button>
                </form>
            </div>
            <div>
                <ul>
                    {intents.map((intent,idx)=> 
                        intent.intentComplete && <Intent key={idx} intent={intent}/> )} 
                </ul>
            </div>
        </>
    )
}

