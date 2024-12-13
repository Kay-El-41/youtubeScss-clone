import './_videoComments.scss'
import Comment from '../comment/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCommentsByVideoIdYoutubeAPI } from '../../redux/commentsSlice'
import { Spinner } from 'react-bootstrap'

export default function VideoComments({ videoId }) {
  
  const dispatch = useDispatch()
  const { videoComments, loading } = useSelector((state) => state.comments)||[]
  // console.log(videoComments)
  //{authorDisplayName,authorProfileImageUrl,publishedAt,textDisplay}
  const[showButton,setShowButton]=useState(false)
  
  useEffect(() => {
    if(videoId)
    dispatch(getCommentsByVideoIdYoutubeAPI(videoId))
  }, [videoId, dispatch])
  
  const commentsFormOnClick = () => {
    setShowButton(true)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    showButton(false)
  }
  const handleComment = () => { }
  return (
    <div className='video__comments'>
      <p>Comments</p>

      <div className='comments__form'>
        <img src="https://yt3.ggpht.com/ytc/AIdro_lDUXR5Yos7YCaNZJBnjlcG5UMUH6KRCmR7vqitvWUf2g=s68-c-k-c0x00ffffff-no-rj" alt=""
        className='rounded-circle mr-3'
        />

        
        <form onSubmit={handleComment} >
          <input
            onClick={commentsFormOnClick}
            type='text'
            className='flex-grow'
            placeholder='Add a comment...'
          />
          {showButton &&
          <div className='form__btn'>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button>Comment</button>
          </div>
          }
          </form>
          
      </div>

      <div className='comments_list'>
        {
          loading && !videoComments ? (
       <Spinner animation='border' variant='light'/>
          ) : videoComments&&videoComments.length>0?(
              videoComments.map((comment) => <Comment key={comment.id} comment={comment} />)  
            ) : (
                !loading && <p>No Comments found</p>
       )
        }
      </div>
    </div>
  )
}
