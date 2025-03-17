import { useState } from "react"
import { createPost } from "../api"

export function CreateBlog() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")

    async function handleSubmit(){
        let submitObject = {
            title: title,
            description: description,
            content: content,
            author: null,
            dateCreated: new Date()
        }

        await createPost(submitObject)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Blog Post Title</label>
            <input type="text" maxLength={100} name="title"  required onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="description">Post Description</label>
            <input type="text" maxLength={200} required name="description"  onChange={(e) => setDescription(e.target.value)}/>

            <label htmlFor="content">Post Content</label>
            <textarea name="content" maxLength={1000}  required id="" onChange={(e) =>   setContent(e.target.value)}></textarea>

            <button type="submit">Submit</button>
        </form>
    )
}