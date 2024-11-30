import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import"./_watchPage.scss"
import VideoComments from "../../components/videoComments/VideoComments";
import VideoRecommend from "../../components/videoRecommend/VideoRecommend";


export default function WatchPage() {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchPage__player">
          <iframe
            src='https://www.youtube.com/embed/tgbNymZ7vqY'
            title="example"
            width={"100%"}
            height={"100%"}
          />
        </div>
        
        <VideoMetaData />
        <VideoComments/>
      </Col>
      <Col lg={4}>
        {
          [...Array(10)].map((_,index)=><VideoRecommend key={index}/>)
        }
      </Col>
    </Row>
  )
}
