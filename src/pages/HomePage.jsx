import { Col, Container, Row, Spinner } from 'react-bootstrap'
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import Video from '../components/video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../redux/videoSlice'
import {  useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
// import { AuthContext } from '../components/AuthProvider'
// import { useNavigate } from 'react-router-dom'


export default function HomePage() {
  const dispatch = useDispatch();
  const { videos,loading,activeCategory } = useSelector((state) => state.videos);
  
  // const currentUser = useContext(AuthContext)
 
  useEffect(() => {
    dispatch(getPopularVideos());
    console.log('useEffect run')
  }, []);

  // console.log('Videos state:', videos);

  if (loading) return <Spinner className="loading"></Spinner>
  if (!videos?.length) return <div className="no-videos">No videos found</div>;

  const fetchData = () => {
    if(activeCategory==='All'){
      dispatch(getPopularVideos())
    }else{
      dispatch(getVideosByCategory(activeCategory))
    }
  }
  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        Loader={
          <div className='spinner-border text-danger d-block mx-auto'></div>
        }
        >
         <Row>
        {!loading &&videos.map((video) => (
          <Col key={video.id } lg={3} md={4} xs={6}>
            <Video video={video}  />
          </Col>
        ))}
      </Row>
      </InfiniteScroll>
    </Container>
  );
}