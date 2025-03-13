import { useState, useEffect } from 'react'
// import axios from "axios"
import { getPost, getPosts, createPost, deletePost, updatePost } from './api'
import './App.css'

function App() {
  const [posts, setPosts] = useState()

  // function createPost(){
  //   let postObject = {
  //     title: "React Native vs React",
  //     description: "What is the difference",
  //     content: "React Native is an extension of React to handle mobile apps",
  //     author: "Emmanuel",
  //     dateCreated: new Date()
  //   }

  //   axios.post('http://localhost:3000/posts', postObject)
  // }


  useEffect(() => {
    async function loadAllPosts() {
      let data = await getPosts()
      if (data){
        setPosts(data)
      }
    } loadAllPosts()
  }, [])
 return (
  <>
  {JSON.stringify(posts)}
  {/* <button onClick={createPost}>Create Object</button> */}
  </>
 )
}

export default App
