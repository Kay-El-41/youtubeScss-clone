import moment from "moment"
import"./_videoMetaData.scss"
import numeral from "numeral"
import {  MdShare, MdThumbDown, MdThumbUp } from "react-icons/md"
import ReactShowMoreText from "react-show-more-text"
export default function VideoMetaData() {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="left__side">
          <img 
            src="https://yt3.ggpht.com/wcNqcGMEl_6CiI3rTSoyYrazEj1LzbJkTTMlBjYU2-OGfeFR0YSS7QNy5rLAu_A1ysNMvRzbKA=s88-c-k-c0x00ffffff-no-rj"
            className="rounder-circle mr-3"
          />
          <div className="channel-details">
            <span className="channel-title">Channel Title</span>
            <span className="subscribe-data">{numeral(100000).format('0.a')} subscribers</span>
          </div>
        </div>
        
         <div className="right__side" >
          <div className="channel-group-btn">
          {/* <button>
            Join
          </button> */}
          <button className="btn-subscribe ">
            Subscribe
            </button>
            
          </div>
         
          <div className="video-related-btn">

            <button className="btn-thumbs" >
              <span className="mx-2">
            <MdThumbUp size={16}  /> {numeral(100000).format('0.a')}
              </span>
                <div className="separator">|</div>

          <span className="mx-2">
            <MdThumbDown size={16}/>
          </span>
            </button>

            <button>
              <span >
                <MdShare />Share
              </span>
            </button>

             {/* <button>
              <span >
                <MdDownload className="mr-3"/>Download
              </span>
            </button> */}

             <button>
              <span>  <i className="bi bi-three-dots"></i> </span>
              </button>
          </div>
          
          </div>
      </div>
      <div className="videoMetaData__description">
        <div className="watch-info">
        <span className="mr-10rem">{numeral(100000).format('0.a')} views</span>
        <span>{moment('2024-11-23').fromNow()}</span>
        </div>

        
        <ReactShowMoreText
          lines={2}
          more="...more"
          less="Show less"
          expanded={false}
          anchorClass="show-more-less-clickable"
          className="description-content"
          truncatedEndingComponent={""}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque beatae officia saepe. Ullam assumenda deleniti itaque ipsum, nobis, doloremque ea sequi non laborum expedita in unde, recusandae corrupti. Quaerat?  
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque beatae officia saepe. Ullam assumenda deleniti itaque ipsum, nobis, doloremque ea sequi non laborum expedita in unde, recusandae corrupti. Quaerat?  

        </ReactShowMoreText>
        </div>

    </div>
  )
}
