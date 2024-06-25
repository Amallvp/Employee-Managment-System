import React, { createContext, useState } from 'react'


// context creation

export const registerContext=createContext()


// update creation

export const updateContext=createContext()


function ContextShare({children}) {

    //  state for registerContext
    const[registerUpdate,setRegisterUpdate]=useState("")

    // state for updateContext

    const[updateStatus,setUpdateStatus]=useState("")

  return (
    <div>
       <updateContext.Provider value={{updateStatus,setUpdateStatus}}>
          <registerContext.Provider value={{registerUpdate,setRegisterUpdate}}>
              {children}
          </registerContext.Provider>
       </updateContext.Provider>

    </div>
  )
}

export default ContextShare