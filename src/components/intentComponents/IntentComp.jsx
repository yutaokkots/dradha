import React from 'react'
import AddIntent from '../../components/intentComponents/AddIntent/AddIntent'
import IntentsList from '../../components/intentComponents/IntentsList/IntentsList'
import PastIntentsList from '../../components/intentComponents/IntentsList/PastIntentsList'


export default function IntentComp({intents, user, setUpdate}) {
    return (
        <>
            <div>
                <IntentsList intents={intents} setUpdate={setUpdate}/>
            </div>
            <div>
                <AddIntent user={user} setUpdate={setUpdate}/>
            </div>
            <div>
                <PastIntentsList intents={intents} setUpdate={setUpdate} />
            </div>
        </>
    )
}
