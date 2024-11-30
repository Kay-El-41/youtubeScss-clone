import './_videoComments.scss'
import Comment from '../comment/Comment'
export default function VideoComments() {
  const  handleComment=()=>{}
  return (
    <div className='video__comments'>
      <p>1000 Comments</p>

      <div className='comments__form'>
        <img src="https://yt3.ggpht.com/ytc/AIdro_lDUXR5Yos7YCaNZJBnjlcG5UMUH6KRCmR7vqitvWUf2g=s68-c-k-c0x00ffffff-no-rj" alt=""
        className='rounded-circle mr-3'
        />

        
        <form onSubmit={handleComment} >
          <input
            type='text'
            className='flex-grow'
            placeholder='Add a comment...'
            />
          <div className='form__btn'>
          <button>Cancel</button>
          <button>Comment</button>
          </div>
          </form>
          
      </div>

      <div className='comments_list'>
        {
          [...Array(15)].map((_, index) => <Comment key={index} />)
        }
      </div>
    </div>
  )
}
