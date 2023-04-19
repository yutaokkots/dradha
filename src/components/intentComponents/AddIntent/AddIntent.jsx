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
            <div>
                <ul>
                    {intents.map((intent,idx)=>  
                        !intent.intentComplete && <Intent key={idx} intent={intent}/> )}
                </ul>
            </div>
            <div>
                <form
                    onSubmit={handleSubmit}>
                    <label>I am working on / meditating on: </label>
                    <input 
                        name="intentDescription"
                        value={newIntent} 
                        onChange={handleChange}
                        required
                        ></input>
                    <button type='submit'>Submit</button>
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



// const intentFeedbackSchema = new Schema({
//     commentUser: {
//       type: Schema.Types.ObjectId,
//       ref: 'Profile',
//       required: false
//     },
//     comment: { 
//         type: String, 
//         required: false
//     }},{
//         toJSON: { virtuals: true }
// });

// const intentLikesSchema = new Schema({
//   commentUser: {
//     type: Schema.Types.ObjectId,
//     ref: 'Profile',
//     required: false
//   },
//   likes: { 
//       type: Number, 
//       default: 1 },
//   }, {
//       toJSON: { virtuals: true }
// });

// const intentSchema = new Schema({
//     intentUserId:{
//         type: String,
//         required: true
//     },

//     intentDescription: {
//         type: String,
//         required: true
//     },
//     intentComplete: { 
//         type: Boolean, 
//         default: false 
//     },
//     intentLikes: [intentLikesSchema],
//     intentFeedback: [intentFeedbackSchema]
//     },{
//     timestamps: true,
//     toJSON: { virtuals: true }
//   });