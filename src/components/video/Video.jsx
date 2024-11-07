import './_video.scss'

  // export default function Video({ video }) {
  //   if (!video) return null
    
  //    const {
  //     snippet: {
  //       title,
  //       channelTitle,
  //       thumbnails: { medium },
  //       publishedAt
  //     },
  //     statistics: { viewCount }
  //   } = video;

  //   return (
  //     <div className='video'>
  //       <div className="video_top">
//         <img src={medium.url} alt={title} />
//         <span>1:56:34</span>
//       </div>

//       <div className='video_info'>
        
//         <div className='video_creator_img'>
//         <img src="https://yt3.ggpht.com/pwpcvIuzEmV_HfFEvYm5Wub_tWpmMR6RotLiQ_4GOzn5KwZzypGnnhuwNUOwy4a1NWEiu0T7Yw=s68-c-k-c0x00ffffff-no-rj" alt="" />
//         </div>
        
//         <div>
//         <div className="video_title">
//         {title}
//       </div>
//       <div className="video_details">
//         <span>{viewCount} views </span> •
//         <span>{new Date(publishedAt).toDateString()}</span>
//       </div>
//       <div className="video_channel">
//         <span>{channelTitle}</span>
//           </div>
//         </div>
        
//       </div>

      
//     </div>
//   )
// }

export default function Video({ video }) {
  if (!video) return null;
  
  // Safely destructure with default values
  const {
    snippet: { 
      title = '',
      channelTitle = '',
      thumbnails: { medium = {} } = {},
      publishedAt = ''
    } = {},
    statistics: { viewCount = 0 } = {}
  } = video;

  console.log('Video data:', { title, channelTitle, medium, publishedAt, viewCount });

  return (
    <div className='video'>
      <div className="video_top">
        <img src={medium.url} alt={title} />
        <span>1:56:34</span>
      </div>

      <div className='video_info'>
        <div className='video_creator_img'>
          <img src="https://yt3.ggpht.com/pwpcvIuzEmV_HfFEvYm5Wub_tWpmMR6RotLiQ_4GOzn5KwZzypGnnhuwNUOwy4a1NWEiu0T7Yw=s68-c-k-c0x00ffffff-no-rj" alt="" />
        </div>
        
        <div>
          <div className="video_title">
            {title}
          </div>
          <div className="video_details">
            <span>{viewCount.toLocaleString()} views </span> • 
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="video_channel">
            <span>{channelTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
