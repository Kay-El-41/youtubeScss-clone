import { Col, Container, Row, Spinner } from 'react-bootstrap'
import CategoriesBar from '../components/categoriesBar/CategoriesBar'
import Video from '../components/video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../redux/videoSlice'
import { useEffect } from 'react'

// export default function HomePage() {
//   const dispatch = useDispatch();
//   const videos = useSelector((state) => state.videos.videos);
//   const error = useSelector((state) => state.videos.error);
//   const loading = useSelector((state) => state.videos.loading);
  
//    useEffect(() => {
//     console.log('Dispatching getPopularVideos');
//     dispatch(getPopularVideos())
//       .unwrap()
//       .then(data => console.log('Videos loaded:', data))
//       .catch(error => console.error('Error loading videos:', error));
//   }, [dispatch]);

//   console.log('Current state:', { videos, error, loading });

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!videos?.length) return <div>No videos found</div>;

//   return (
//     <Container>
//       <CategoriesBar />
//       <Row>
//         {
//           videos?.map((video,index) => (
//             <Col key={index} lg={3} md={4} xs={6}>
//             <Video video={video}/>
//             </Col>
//           ))
//         }
//       </Row>
//     </Container>
//   )
// }


export default function HomePage() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);
  const error = useSelector((state) => state.videos.error);
  const loading = useSelector((state) => state.videos.loading);
  
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  console.log('Videos state:', videos);

  if (loading) return <Spinner className="loading"></Spinner>
  if (error) return <div className="error">Error: {error}</div>;
  if (!videos?.length) return <div className="no-videos">No videos found</div>;

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video, index) => (
          <Col key={video.id || index} lg={3} md={4} xs={6}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}