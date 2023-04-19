import React, { useState, useRef, useEffect, createContext } from 'react'
import AddIntent from '../../components/intentComponents/AddIntent/AddIntent'
import IntentsList from '../../components/intentComponents/IntentsList/IntentsList'
import PastIntentsList from '../../components/intentComponents/IntentsList/PastIntentsList'
import * as intentsAPI from '../../utilities/intents-api';

export const IntentContext = createContext(true)
// export const PageReloadContext = createContext()

export default function IntentComp({user}) {
    const updateRef = useRef()
    // state for holding user's intents from db
    const [masterIntents, setMasterIntents] = useState([])  

    // useContext - keeps track of changing components based on bool
    const [pageReload, setPageReload] = useState(true)

    // useEffect for retrieving intents from db
    useEffect(()=>{
        async function getAllIntents(){
            try{
                const intents = await intentsAPI.getAll()
                setMasterIntents(intents)

                //updateRef.current
                //console.log(intents)
                //updateRef.current = [...new Set(intents.map((intent) => intent.intentDescription))];

                //setIntents(updateRef.current[0]);

            } catch(err){
                console.error('err', err)
            }
        }
        console.log(pageReload)
        getAllIntents()
    },[pageReload])


    return (
        <>  
            <IntentContext.Provider value={{pageReload, setPageReload}}>
                <div>
                    <AddIntent user={user} intents={masterIntents} updateRef={updateRef} style={{border: '2px solid rgb(255, 99, 71)'}}/>
                </div>
            </IntentContext.Provider>
        </>
    )
}

{/* <div>
<IntentsList intents={masterIntents} />
</div>
<div>
    <PastIntentsList intents={masterIntents}  />
</div> */}