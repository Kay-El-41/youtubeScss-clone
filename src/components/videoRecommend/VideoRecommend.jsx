import { Col, Row } from 'react-bootstrap'
import './_videoRecommend.scss'
import moment from 'moment'
import numeral from 'numeral'
import { useNavigate } from 'react-router-dom'
export default function VideoRecommend( relatedVideo ) {

  console.log("relatedVideo:", relatedVideo)
  const {
    relatedVideo: {
          id:videoId,
      snippet: {
      // channelId,
      channelTitle,
      // description,
      title,
      publishedAt,
      thumbnails
    },
      contentDetails: {
        duration
      },
      statistics: {
        viewCount
      }
    }
  }=relatedVideo

  const seconds = moment.duration(duration).asSeconds()
  //second *1000 to convert to millisecond
  //HH represent 24 hour format while hh represent 12 hour format
  const videoDuration = moment.utc(seconds * 1000).format('mm:ss')
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(`/watch/${videoId}`)
  }
  return (
    <Row className='video__recommend' onClick={handleClick}>
      
      <Col xs={5} md={4} lg={5}
        className='video__left m-0' 
      >
        <img
        src={thumbnails.default.url}
          className='video__thumbnail'
        />
          <span className='video__duration'>{videoDuration}</span>
      </Col>
      <Col xs={7} md={8} lg={7}
      className='video__right'
      >
        <p className="video__title mb-1">
        {title}
        </p>

        <div className="video__channel">
          <p>{channelTitle}</p>
        </div>

        <div className="video__details">
           <span>{numeral(viewCount).format('0.a')} views{' '}</span>{'  '} • 
            <span className='mx-1'>{moment(publishedAt).fromNow()}</span>
        </div>

      </Col>
    </Row>
  )
}
