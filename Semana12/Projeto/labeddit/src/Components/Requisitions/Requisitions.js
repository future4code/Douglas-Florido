import axios from 'axios'
import { BASE_URL } from '../../Constants/URLs'
import { goToFeedPage } from '../../Routes/Walker'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export const signup = (info, clear) => {

    const body = {
        email: info.email,
        password: info.password,
        username: info.username
    }

    axios.post(BASE_URL + 'signup/', body)
        .then((res) => {
            console.log(res)
            alert("Account Successfully created")
            clear()
        })
        .catch((err) => {
            console.log(err)
        })

}

export const login = (info, history) => {


    const body = {
        email: info.email,
        password: info.password
    }

    axios.post(BASE_URL + 'login/', body)
        .then((res) => {
            // console.log(res)
            alert("Welcome " + res.data.user.username)
            goToFeedPage(history)
            localStorage.setItem("token", res.data.token)
            console.log(res.data.token)

        })
        .catch((err) => {
            console.log(err)
        })

}

export const FeedPosts = (info) => {
    const token = localStorage.getItem("token")
    const headers = {
        headers: {
            Authorization: token
        }
    }
    axios.get(BASE_URL + "posts", headers)
        .then((res) => {
            info(res.data.posts)


        })
        .catch((err) => {
            console.log(err)
        })
}

export const likeOrDeslike = (id, num) => {
    const token = localStorage.getItem("token")
    // console.log(num)
    // console.log(id)

    const body = {
        direction: num
    }


    const headers = {
        headers: {
            Authorization: token
        }
    }
    console.log(`${BASE_URL}${id}/vote`)
    axios.put(`${BASE_URL}posts/${id}/vote`, body, headers)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

}

export const likeOrDeslikeComment = ( postId, num, commentId) => {
    const token = localStorage.getItem("token")

    console.log("postId:", postId)
    console.log("num:", num)
    console.log("commentId:",commentId)
    
    const body = {
        direction: num
    }
 
    const headers = {
        headers: {
            Authorization: token
        }
    }

    axios.put(`${BASE_URL}posts/${postId}/comment/${commentId}/vote`,body,headers)
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) })

}



export const commentDetail = (info,id) => {
    const token = localStorage.getItem("token")

    const headers = {
        headers: {
            Authorization: token
        }
    }

    axios.get(`${BASE_URL}posts/${id}`, headers)
    .then((res) => {
        // console.log(res.data.post)
        info(res.data.post)
    })
    .catch((err) => {
        console.log(err)
    })  
    

}

export const newComment = (info, id, clear) => {
    const token = localStorage.getItem("token")

    const headers = {
        headers: {
            Authorization: token
        }
    }
    const body = {
        text: info.text
    }

    axios.post(`${BASE_URL}posts/${id}/comment`,body,headers)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const createPost = (form) => {
    const token = localStorage.getItem("token")

    console.log(form.title)
    console.log(form.text)

    const headers = {
        headers: {
            Authorization: token
        }
    }

    const body = {
        title: form.title,
        text: form.text
    }

    axios.post(`${BASE_URL}posts`, body, headers)
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) })
}