import React, { useState, useEffect } from 'react'
import { commentDetail, newComment } from '../../Components/Requisitions/Requisitions'
import useForm from '../../Components/CustomHook/CustomHook'
import {likeOrDeslikeComment} from '../../Components/Requisitions/Requisitions'

function PostPage() {
  const [formInfo, setFormInfo] = useState([]);
  const [form, onChange, clear] = useForm({text: "" })
  const id = localStorage.getItem("postid")


  useEffect(() => {
    commentDetail(setFormInfo, id)

  }, [form, formInfo])

  let details = formInfo.comments

  return (
    <>
      <hr />
      <h1>
        {formInfo.username}
      </h1>
      <h2>
        {formInfo.text}
      </h2>
      <hr />

      <div>
        {
          details && details.map((detail) => {
            return (

              <>
                <hr />
                <h2>{detail.username}</h2>
                <h4>{JSON.stringify(detail.text)}</h4>
                <button onClick={() => likeOrDeslikeComment(id, 1, detail.id)}>like</button>
                <div>{detail.votesCount}</div>
                <button onClick={() => likeOrDeslikeComment(id, 0, detail.id)}>deslike</button>
                <hr />
              </>

            )
          })
        }
      </div>
      <div>
        <div>Comment Here!</div>
        <input name="text" type="text" placeholder="text" onChange={onChange} />
        <button onClick={() => newComment(form, id, clear)}>Comment</button>
      </div>
    </>
  );
}

export default PostPage;
