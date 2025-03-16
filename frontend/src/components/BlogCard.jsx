import { Link } from "react-router-dom"

export function BlogCard({post}){

    // format date before returning
    let date = new Date(post.dateCreated)
    let stringDate = date.toString()

    return (
        <Link to={`/readblog/${post._id}`} className="post">
            <h1>{ post.title }</h1>
            <h3>{ post.description }</h3>
            <p>{ stringDate.slice(4, 15) }</p>
        </Link>
    )
}