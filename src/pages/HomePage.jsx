import { Col, Container, Row, Spinner } from 'react-bootstrap'
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import Video from '../components/video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../redux/videoSlice'
import {   useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'



export default function HomePage() {
  console.log('homepage run')
  const dispatch = useDispatch();
  const { videos,loading,activeCategory } = useSelector((state) => state.videos);
  

  useEffect(() => {
    dispatch(getPopularVideos());
    console.log('HomePage useEffect run')
  }, [dispatch]);

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