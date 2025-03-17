import { Link } from "react-router-dom"

export function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to my first MERN website</p>
            <p>I'm learning, and I will soon become a master</p>
            <p>Wanna write a post, visit <Link to="/createBlog">Create Blog</Link></p>
        </div>
    )
}