import { CreateUser } from "../components/CreateUser"
import { Login } from "../components/Login"
import { useState } from "react"


export function Landing() {

    //view == 0 - Login
    //view == 1 - Create User

    const [view, setView] = useState(0)
    return (
        <>
           {!view ? 
           <>
           <Login/> 
           <button onClick={() => setView(!view)}>Create Account</button>
           </>
           : 
           <>
           <CreateUser/>
           <button onClick={() => setView(!view)}>Login</button>
           </>}
        </>
    )
}