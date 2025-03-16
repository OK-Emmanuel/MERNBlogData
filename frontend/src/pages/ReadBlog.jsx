import { getPost } from "../api"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function ReadBlog() {
    
    const [post, setPost] = useState({})

    let params = useParams()
    const navigate = useNavigate()
    let id = params.id

    useEffect(() => {
        async function loadPost() {
            let data = await getPost(id)
            let date = new Date(data.dateCreated)
            data.dateCreated = date.toString()
            setPost(data)
        }
        loadPost()
    }, [])
    
    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{ post.title }</h1>
            <h3>{ post.description }</h3>
            <h3>{ post.content }</h3>
            <p>{ post.dateCreated?.slice(4, 15) }</p>
        </>
    )
}