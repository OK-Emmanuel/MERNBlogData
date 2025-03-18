import axios from "axios";

const URL = "http://localhost:3000"

export async function getPosts() {
    const response = await axios.get(`${URL}/posts`)

    if (response.status === 200){
        return response.data
    }else {
        return 
    }
}

export async function getPost(id) {
    // http://localhost:3000/posts/12345
    const response = await axios.get(`${URL}/posts/${id}`)

    if (response.status === 200){
        return response.data
    }else {
        return 
    }
}

export async function createPost(post) {
    // http://localhost:3000/posts/
    const response = await axios.post(`${URL}/posts`, post)
    return response   
    }

export async function updatePost(id, post) {
    // http://localhost:3000/posts/12345
    const response = await axios.put(`${URL}/posts/${id}`)
    return response      
}

export async function deletePost(id) {
    // http://localhost:3000/posts/12345
    const response = await axios.delete(`${URL}/posts/${id}`)
    return response

}

// Users

export async function getUsers() {
    const response = await axios.get(`${URL}/users`)

    if (response.status === 200){
        return response.data
    }else {
        return 
    }
}

export async function getUser(id) {
    // http://localhost:3000/users/12345
    const response = await axios.get(`${URL}/users/${id}`)

    if (response.status === 200){
        return response.data
    }else {
        return 
    }
}

export async function createUser(user) {
    // http://localhost:3000/users/
    const response = await axios.post(`${URL}/users`, user)
    return response   
    }

export async function updateUser(id, user) {
    // http://localhost:3000/users/12345
    const response = await axios.put(`${URL}/users/${id}`)
    return response      
}

export async function verifyUser(user){
    try {
        const response = await axios.post(`${URL}/users/login`, user)
        // Return the entire response.data instead of just the token
        return response.data
    } catch (error) {
        console.error('Login error:', error)
        return null
    }
}