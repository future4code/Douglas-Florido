import { FeedPosts,likeOrDeslike,createPost } from '../Requisitions/Requisitions'
import React, { useEffect } from 'react'
import { useState } from "react";
import {FeedListDetail} from '../FeedListDetail/FeedListDetail'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {goToPostpage} from '../../Routes/Walker'
import useForm from '../CustomHook/CustomHook'

export const FeedList = () => {
    const [form, setForm] = useState([]);
    const[info, onChange,clear] = useForm({title: "", text: ""})
    const history = useHistory()
    



    useEffect(() => {
        FeedPosts(setForm)
        // console.log(form)
    }, [form, info])

    const listDetail = (post) => {
        localStorage.setItem("postid",post.id)
        goToPostpage(history)        
    }

    return (
        <div>
            <div>
            <input placeholder="Title" name="title" value={form.title} onChange={onChange}></input>
            <input placeholder="Text" name="text" value={form.text} onChange={onChange}></input>
            <button onClick={() => createPost(info)}>Create</button>
            </div>
            {

                form && form.map((post) => {
                    return (
                        <>
                            <hr />
                            <h1>
                                {post.title}
                            </h1>
                            <h2>
                                {post.text}
                            </h2>
                            <h3>
                                {post.username}
                            </h3>
                            <button onClick={() => likeOrDeslike(post.id, 1)}>like</button>
                            <p>Votes: {post.votesCount}</p>
                            <button onClick={() => likeOrDeslike(post.id, 0)}>deslike</button>
                            <p>Comments: {post.commentsCount}</p>
                            <button onClick={() => listDetail(post)}>comment</button>
                            <hr />
                        </>
                    )
                })
            }
        </div>
    )
}