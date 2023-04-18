import React from 'react'
import {useState} from 'react'
import * as intentsAPI from '../../../utilities/intents-api'

export default function AddIntent({user, setUpdate}) {
    const [newIntent, setNewIntent] = useState('')
    const [newIntentObject, setNewIntentObject] = useState({intentUserId:`${user._id}`,intentDescription: ''})
    
    function handleChange(evt){
        setNewIntent(evt.target.value)
        setNewIntentObject({...newIntentObject, [evt.target.name]: evt.target.value})

    }
    async function handleSubmit(evt){
        evt.preventDefault() 
        try {
            const result = await intentsAPI.createOne(newIntentObject);
          } catch (error) {
            setError(`Error: ${error.message}`);
          }
        let array = [0,0]
        setUpdate(array.splice(1, 0, array[1]+1))
        setNewIntent('')
    }

    return (
        <>
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