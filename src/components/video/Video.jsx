import moment from 'moment';
import './_video.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelIcon } from '../../redux/videoSlice';
import numeral from 'numeral';
import {  useNavigate } from 'react-router-dom';


export default function Video({ video }) {
  
  // Safely destructure with default values
  const {
    snippet: { 
      title = '',
      channelTitle = '',
      channelId,
      thumbnails: { medium = {} } = {},
      publishedAt = ''
    } = {},
    contentDetails,
    id:videoId,
    statistics: { viewCount = 0 } = {}
  } = video || {};
  console.log(video)
  const dispatch=useDispatch()
  const channelIcon=useSelector((state)=>state.videos.channelIcons[channelId])
  const seconds=moment.duration(contentDetails.duration).asSeconds()
  //second *1000 to convert to millisecond
  //HH represent 24 hour format while hh represent 12 hour format
  const videoDuration = moment.utc(seconds * 1000).format('mm:ss')
  const navigate=useNavigate()


  useEffect(() => {
    if(channelId){
      dispatch(getChannelIcon(channelId))
    }
  }, [channelId, dispatch,channelIcon])
  
  if(!video) return null;
  const handleVideoClick = () => {
    navigate(`/watch/${videoId}`)
  }
  

  return (
    <div className='video' onClick={handleVideoClick}>
      <div className="video_top">
        <img src={medium.url} alt={title} />
        <span>{videoDuration}</span>
      </div>

      <div className='video_info'>
        <div className='video_creator_img'>
          <img src={channelIcon} alt={channelTitle} />
        </div>
        
        <div>
          <div className="video_title">
            {title}
          </div>
          <div className="video_details">
            <span>{numeral(viewCount).format('0.a')} views{' '}</span>{' '} • 
            <span>{moment(publishedAt).fromNow()}</span>
          </div>
          <div className="video_channel">
            <span>{channelTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
