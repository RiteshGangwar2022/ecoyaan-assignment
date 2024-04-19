import React from 'react';
import '../../styles/Team.css'; 


function Team() {
  return (
    
    <div className="container text-center w-full grid grid-cols-3 gap-10">
      <div className="image-container ">
        <img src="https://ecoyaan.com/images/about-us-social-media-team-01.png" alt="Image 1" className="round-image" />
        <div className="info">
          <h5>SHRUTHI</h5>
          <h4>SOCIAL MEDIA</h4>
          <p>Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business</p>
        </div>
      </div>
      {/* Container 2 */}
      <div className="image-container">
        <img src="https://ecoyaan.com/images/about-us-social-media-team-02.png" alt="Image 2" className="round-image" />
        <div className="info">
          <h5>URMIL</h5>
          <h4>SOCIAL MEDIA</h4>
          <p>Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business</p>
        </div>
      </div>
      <div className="image-container">
        <img src="https://ecoyaan.com/images/about-us-product-team-01.png" alt="Image 2" className="round-image" />
        <div className="info">
          <h5>DIVYA</h5>
          <h4>UX DESIGN</h4>
          <p>Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance</p>
        </div>
      </div>
      
      <div className="image-container">
        <img src="https://ecoyaan.com/images/about-us-product-team-02.png" alt="Image 2" className="round-image" />
        <div className="info">
          <h5>PRASHANITH</h5>
          <h4>ENGINEERING</h4>
          <p>Prashanith is our front-end engineer, who brings the UX designs to life</p>
        </div>
      </div>

      <div className="image-container">
        <img src="https://ecoyaan.com/images/about-us-product-team-03.png" alt="Image 2" className="round-image" />
        <div className="info">
          <h5>SAI ABHILASH</h5>
          <h4>ENGINEERING</h4>
          <p>Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform</p>
        </div>
      </div>

      <div className="image-container">
        <img src="https://ecoyaan.com/images/favicon.png" alt="Image 2" className="round-image" />
        <div className="info">
          <h5>???</h5>
          <h4>TEAM ECOYAAN</h4>
          <p>This spot awaits you.
Check out our open positions</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
