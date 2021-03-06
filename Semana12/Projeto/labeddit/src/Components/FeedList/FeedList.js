import { FeedPosts,likeOrDeslike,createPost } from '../Requisitions/Requisitions'
import React, { useEffect } from 'react'
import { useState } from "react";
import {FeedListDetail} from '../FeedListDetail/FeedListDetail'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {goToPostpage} from '../../Routes/Walker'
import useForm from '../CustomHook/CustomHook'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import {useStyles} from './Styled'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';

export const FeedList = () => {
    const classes = useStyles()
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
                        <Card variant="outlined">
                            <CardContent>
                            <Typography>
                                {post.title}
                            </Typography>
                            <Typography>
                                {post.text}
                            </Typography>
                            <Typography>
                                {post.username}
                            </Typography>
                            
                            <Button variant="contained" onClick={() => likeOrDeslike(post.id, 1)}><ThumbUpAltOutlinedIcon/></Button>
                            <p>Votes: {post.votesCount}</p>
                            <Button variant="contained" onClick={() => likeOrDeslike(post.id, 0)}><ThumbDownAltOutlinedIcon/></Button>
                            <p>Comments: {post.commentsCount}</p>
                            <Button variant="contained" onClick={() => listDetail(post)}><CommentOutlinedIcon/></Button>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    )
}