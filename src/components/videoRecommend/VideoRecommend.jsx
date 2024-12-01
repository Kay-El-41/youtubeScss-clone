import { Col, Row } from 'react-bootstrap'
import './_videoRecommend.scss'
import moment from 'moment'
import numeral from 'numeral'
export default function VideoRecommend() {
  const seconds=moment.duration('100000').asSeconds()
  //second *1000 to convert to millisecond
  //HH represent 24 hour format while hh represent 12 hour format
  const videoDuration = moment.utc(seconds * 1000).format('mm:ss')
  
  return (
    <Row className='video__recommend'>
      
      <Col xs={5} md={4} lg={5}
        className='video__left m-0' 
      >
        <img
        src='https://i.ytimg.com/vi/ytrtFsXRXGY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-wcaN5w1kfXw6vy2pVEAm2qLY2A'
          className='video__thumbnail'
        />
          <span className='video__duration'>{videoDuration}</span>
      </Col>
      <Col xs={7} md={8} lg={7}
      className='video__right'
      >
        <p className="video__title mb-1">
          video title
        </p>

        <div className="video__channel">
          <p>channel name</p>
        </div>
        <div className="video__details">
           <span>{numeral('8000').format('0.a')} views{' '}</span>{'  '} • 
            <span className='mx-1'>{moment('2024-11-29').fromNow()}</span>
        </div>

      </Col>
    </Row>
  )
}
