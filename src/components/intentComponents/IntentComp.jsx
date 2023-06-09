import React, { useState, useRef, useEffect, createContext, useContext } from 'react'
import AddIntent from '../../components/intentComponents/AddIntent/AddIntent'
import IntentsList from '../../components/intentComponents/IntentsList/IntentsList'
import PastIntentsList from '../../components/intentComponents/IntentsList/PastIntentsList'
import * as intentsAPI from '../../utilities/intents-api';
import { TimeContext } from '../../Pages/Dashboard/Dashboard'

//////// createContext
export const IntentContext = createContext(true)
// export const PageReloadContext = createContext()

export default function IntentComp({user}) {
    // importing TimeContext from Dashboard
    const {sessionTimer, setSessionTimer, timerStarted, setTimerStarted} = useContext(TimeContext)

    const updateRef = useRef()
    // state for holding user's intents from db
    const [masterIntents, setMasterIntents] = useState([])  
    const [unfinishedInt, setUnfinishedInt] = useState([])
    // useState with IntentContext - keeps track of changing components in intents comp with a boolean
    const [pageReload, setPageReload] = useState(true)

    // useEffect for retrieving intents from db
    // if the pageReload useContext variable is changed, reloads. 
    useEffect(()=>{
        async function getAllIntents(){
            try{
                const intents = await intentsAPI.getAll()
                setMasterIntents(intents)
                const unfinished = intents.filter(intent =>
                    intent.intentComplete === false
                )
                setUnfinishedInt(unfinished)
            } catch(err){
                console.error('err', err)
            }
        }
        getAllIntents()
    },[pageReload])

    return (
        <>  
            <IntentContext.Provider value={{pageReload, setPageReload}}>
                <div>
                    <AddIntent user={user} intents={masterIntents} updateRef={updateRef} />
                </div>
            </IntentContext.Provider>
        </>
    )
}
