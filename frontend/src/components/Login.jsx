import { verifyUser } from "../api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export function Login(){
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value })
    }
    
    async function handleSubmit(e){
        e.preventDefault()

        try {
            const response = await verifyUser(user)
            if (response) {
                localStorage.setItem("user", JSON.stringify(response))
                navigate("/home")
            } else {
                alert("Invalid username or password")
            }
        } catch (error) {
            console.error('Login error:', error)
            alert("Error during login")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder={"Email"} onChange={handleChange} name="email" required maxLength={40}/>
            <input type="password" placeholder={"Password"} onChange={handleChange} name="password" required maxLength={20}/>

            <button type="submit">Login</button>
        </form>
    )
}