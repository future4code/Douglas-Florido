import React, { useState, useEffect } from 'react'
import { commentDetail, newComment } from '../../Components/Requisitions/Requisitions'
import useForm from '../../Components/CustomHook/CustomHook'
import { likeOrDeslikeComment } from '../../Components/Requisitions/Requisitions'
import { Header } from '../../Components/Header/Header'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import { Grid } from '@material-ui/core'
import { BoxButtons, BoxColumns, InputText } from './Styled.js'
import styled from 'styled-components'

function PostPage() {
  const [formInfo, setFormInfo] = useState([]);
  const [form, onChange, clear] = useForm({ text: "" })
  const id = localStorage.getItem("postid")


  useEffect(() => {
    commentDetail(setFormInfo, id)

  }, [form, formInfo])

  let details = formInfo.comments

  return (
    <BoxColumns>
      <div>
        <Header />
        <Card variant="outlined">
          <CardContent>
            <Typography>
              {formInfo.username}
            </Typography>
            <Typography>
              {formInfo.text}
            </Typography>
          </CardContent>
        </Card>


        <div>
          {
            details && details.map((detail) => {
              return (

                <Card variant="outlined">
                  <CardContent>

                    <Typography>{detail.username}</Typography>
                    <Typography>{JSON.stringify(detail.text)}</Typography>
                    <BoxButtons>
                      <Button variant="contained" onClick={() => likeOrDeslikeComment(id, 1, detail.id)}><ThumbUpAltOutlinedIcon /></Button>
                      <Typography>{detail.votesCount}</Typography>
                      <Button variant="contained" onClick={() => likeOrDeslikeComment(id, 0, detail.id)}><ThumbDownAltOutlinedIcon /></Button>
                    </BoxButtons>
                  </CardContent>
                </Card>

              )
            })
          }
        </div>
        <div>
          <div>Comment Here!</div>
          <InputText name="text" type="text" placeholder="text" onChange={onChange} />
          <button onClick={() => newComment(form, id, clear)}><CommentOutlinedIcon /></button>
        </div>
      </div>
    </BoxColumns>
  );
}

export default PostPage;
