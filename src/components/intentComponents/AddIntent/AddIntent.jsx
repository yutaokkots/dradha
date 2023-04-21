import React from 'react'
import {useState, useContext} from 'react'
import * as intentsAPI from '../../../utilities/intents-api'
import { IntentContext} from '../IntentComp'
import Intent from '../Intent/Intent'

export default function AddIntent({user, intents}) {
    const [newIntent, setNewIntent] = useState('')
    const [newIntentObject, setNewIntentObject] = useState({intentUserId:`${user._id}`,intentDescription: '', intentPublic: false})
    const [checkbox, setCheckbox] = useState(false)
 
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
        setCheckbox(false)
    }

    function handleSelect(evt){
        setCheckbox(evt.target.checked)
        setNewIntentObject({...newIntentObject, [evt.target.name]: evt.target.checked})
    }



    return (
        <>
        <style>{`body { background-image: url("https://res.cloudinary.com/dykpeapfn/image/upload/v1682059454/deer_ozlfzt.jpg"); }`}</style>
            <div  className='flex flex-col'>

                <div className="p-6 max-w-sm mt-3 mb-3 mx-auto w-3/4 bg-vanilla text-cardamom rounded-xl opacity-85 shadow-2xl flex items-center">
                    <form
                        onSubmit={handleSubmit}>
                        <div>
                            <label>I am working on / meditating on: </label>
                        </div>
                        <div>
                            <input 
                                name="intentDescription"
                                type='text'
                                value={newIntent} 
                                onChange={handleChange}
                                required
                                ></input>
                            </div>
                        <div>
                            <label>public<span> </span></label>
                            <input
                                type='checkbox'
                                name='intentPublic'
                                onChange={handleSelect}
                                checked={checkbox}
                                >
                            </input>
                        </div>
                        <button className=" border-2 border-sunset p-1 rounded-md hover:bg-sunset hover:text-vanilla mt-3" type='submit'>Submit</button>
                    </form>
                </div>


                { intents.length > 0 && <div className="p-6 max-w-sm mx-auto mt-2 mb-3 w-3/4 bg-white rounded-xl shadow-lg flex items-center" >
                    <ul>

                        {intents.map((intent,idx)=>  
                            !intent.intentComplete && <Intent key={idx} intent={intent}/> )}

                    </ul>
                </div>
                }
                
            </div>
        </>
    )
}

{/* <div>
<ul>
    {intents.map((intent,idx)=> 
        intent.intentComplete && <Intent key={idx} intent={intent}/> )} 
</ul>
</div> */}