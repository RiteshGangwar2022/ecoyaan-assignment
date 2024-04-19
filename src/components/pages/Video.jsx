import React from 'react';

const Video = () => {
  return (
    <video  autoPlay loop className='ml-20 joinVideo h-[50vh] w-[40%] relative top-[18%] rounded-[50px] p-10'>
      <source src="ProductCuration.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
