import React from 'react'
import { useState } from 'react'
import SignUpForm from '../../components/authComponents/SignUpForm'
import LoginForm from '../../components/authComponents/LoginForm'
import ToggleButton from '../../components/authComponents/ToggleButton'

//import logo from "../../assets/logos/dradha_logo.png"
// import logo from "https://i.imgur.com/bg0EkMW.png"


export default function AuthPage({setUser}) {
    const [toggle, setToggle] = useState(1)

    function handleToggle(){
      setToggle(-toggle)
    }
  
    return (
        <div class="flex items-center justify-center h-screen bg-vanilla">
          <div className="w-full max-w-sm ">
            <div className="w-full flex justify-center">
              <img className="h-80 mb-20" src='https://i.imgur.com/bg0EkMW.png' alt="Logo" />
            </div>
            <div class="bg-cardamom text-vanilla rounded-20px mt-20 mb-20 overflow-hidden shadow-lg">
              {toggle > 0 ? (
                <SignUpForm setUser={setUser} />
              ) : (
                <LoginForm setUser={setUser} />
              )}
              <ToggleButton toggler={handleToggle} toggleState={toggle} />
            </div>
          </div>
        </div>
      );
    }


//     return (
//         <>  
//         <div className="bg-vanilla  h-screen">
//             <div className="container mx-auto ">

//                     <div className="w-max h-64">
//                         <img className="mt-10" src={logo} />
//                     </div>

//                     <div className=" bg-cardamom text-vanilla max-w-sm rounded-[20px] mt-48 overflow-hidden shadow-lg">
//                         { toggle > 0 
//                         ? 
//                         <div>
//                             <SignUpForm setUser={setUser}/> 
//                         </div>
//                         : 
//                         <div className='max-w-sm rounded overflow-hidden shadow-lg '>
//                             <LoginForm setUser={setUser} /> 
//                         </div>
//                         }
//                         <ToggleButton toggler={handleToggle} toggleState={toggle}/>
//                     </div>
 
//             </div>
//             </div>
//         </>
//     )
// }
