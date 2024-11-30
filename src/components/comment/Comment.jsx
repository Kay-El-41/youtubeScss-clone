import moment from "moment";
import"./_comment.scss"

export default function Comment() {
  return (
    <div className="comment">
      <img src="https://yt3.ggpht.com/ytc/AIdro_lDUXR5Yos7YCaNZJBnjlcG5UMUH6KRCmR7vqitvWUf2g=s68-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <div className="comment__body">
        <p className="comment__header">
          <span className="comment__username">@username</span>
          <span className="comment__time">{moment('2024-11-25').fromNow()}</span>
        </p>

        <p className="comment__content">Nice video!</p>
      </div>

    </div>
  )
}
