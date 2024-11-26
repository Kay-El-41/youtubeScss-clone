import moment from "moment"
import"./_videoMetaData.scss"
import numeral from "numeral"
import { MdThumbDown, MdThumbUp } from "react-icons/md"
export default function VideoMetaData() {
  return (
    <div className="VideoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src=""
            className="rounder-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>Channel Title</span>
            <span>{numeral(100000).format('0.a')} subscribers</span>
          </div>
        </div>
        <div>
          <button className="btn rounded-pill border-0 p-2 m-2">
            Join
          </button>
          <button className="btn rounded-pill border-0 p-2 m-2">
            Subscribe
          </button>
        </div>
        <div>
          <div>
            <button className="thumbs-btn rounded-pill border-0 p-2 m-2">
              <span>
            <MdThumbUp size={20}/> {numeral(100000).format('0.a')}
              </span>
                <div className="separator">|</div>

          <span>
            <MdThumbDown size={20}/>
          </span>
            </button>
          </div>
          </div>
      </div>
      <div className="videoMeta__description">
         <span>{numeral(100000).format('0.a')} views</span>
        <span>{moment('2024-11-23').fromNow()}</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit facilis provident, quas ipsum, perspiciatis asperiores ullam error, commodi iure at molestiae optio unde. Mollitia perspiciatis non atque ab enim?</p>
      </div>

    </div>
  )
}
