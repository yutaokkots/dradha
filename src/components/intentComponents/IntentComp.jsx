import React from 'react'
import AddIntent from '../../components/intentComponents/AddIntent/AddIntent'
import IntentsList from '../../components/intentComponents/IntentsList/IntentsList'

export default function IntentComp({intents, user}) {
    return (
        <>
            <IntentsList intents={intents}/>
            <AddIntent user={user} />
        </>
    )
}
