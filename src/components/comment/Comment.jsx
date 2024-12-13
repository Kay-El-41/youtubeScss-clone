import moment from "moment";
import"./_comment.scss"

export default function Comment({ comment } ) {
  // console.log(comment)
  
  //youtube API
    const {authorDisplayName,authorProfileImageUrl,publishedAt,textDisplay}
    = comment.snippet.topLevelComment.snippet
  const profileImage = comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || defaultAvatar;

  //postgres
  
  const defaultAvatar='https://static.vecteezy.com/system/resources/previews/026/434/417/original/default-avatar-profile-icon-of-social-media-user-photo-vector.jpg'
  return (
    <div className="comment">
      <img src={authorProfileImageUrl||profileImage}
        alt=""
        onError={(e) => (e.target.src = defaultAvatar)}
      /* If the URL exists but the image doesn't load, 
      ensure an onError handler is in place. This will 
      replace broken images with the defaultAvatar
      */
      />
      <div className="comment__body">
        <p className="comment__header">
          <span className="comment__username">{authorDisplayName}</span>
          <span className="comment__time">{moment(publishedAt).fromNow()}</span>
        </p>

        <p className="comment__content">{textDisplay}</p>
      </div>

    </div>
  )
}
