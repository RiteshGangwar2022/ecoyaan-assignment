import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/Home.css'
import { Link } from 'react-router-dom';
import Video from './Video';

const Home = () => {
  return (
    <>
     <div>
     <Carousel
        infiniteLoop
        autoPlay
        useKeyboardArrows
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        showIndicators={true}
        interval={100000}
        className= 'banner'
      >


       <div className=' w-[100%] h-[80%] flex flex-col crim justify-center bg-[url("https://ecoyaan.com/images/carousel-1.png")] bg-cover bg-center' >
         <div className='absolute top-[25%] left-[10%]'>
         <p className='font-bold tracking-wide font-sans text-wrap text-4xl my-3 '>Buy Less, Buy Better!</p>
          <p className='text-1xl ml-5 my-4'>Authentic source of truth for your sustainability needs.</p>
         <button className='bg-green-600 w-32 h-12 mr-60 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer'>About Us</button>
         </div>
        </div>
        <div className='absolute w-screen h-[70%] flex flex-col crim justify-center bg-[url("https://ecoyaan.com/images/carousel-2.png")] bg-cover bg-center' >
         <div className='absolute top-[25%] left-[14%]'>
         <p className='font-bold tracking-wide font-sans text-wrap text-4xl my-3 '>Follow us on Instagram</p>
          <p className='text-1xl mr-28 my-4'>For climate news, lifestyle tips, & updates.</p>
         <button className='bg-green-600 w-32 h-12 mr-64 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer'>Follow Us</button>
         </div>
        </div>

        <div className='absolute w-screen h-[70%] flex flex-col crim justify-center bg-[url("https://ecoyaan.com/images/carousel-3.png")] bg-cover bg-center' >
         <div className='absolute top-[25%] left-[14%]'>
         <p className='font-bold  font-sans text-wrap ml-20 -mr-12 text-4xl my-3 '>Are you a business that truly cares about </p>
         <p className='font-bold  font-sans text-wrap text-4xl mr-80 '>sustainability?</p>
          <p className='text-1xl mr-80 my-4'>We would love to work with you</p>
        <Link to={"/about"}><button className='bg-green-600 w-32 h-12 mr-80 text-white rounded-3xl text-lg font-medium hover:bg-green-700 cursor-pointer'>Get In Touch</button></Link>
         </div>
        </div>
        <div className=''>
          <img src="https://ecoyaan.com/images/carousel-3.png" alt="Item3" className='hidden'/>
        </div>

      </Carousel> 
     </div>

      <div className='h-[80vh] bg-gray-100 flex '>
     <div className='w-[70%] h-[70%] my-auto rounded-r-[100px] flex flex-col justify-center'> 
      <section className='w-[80%] mx-auto p-12 pr-28 break-all cards'>
      <p className='text-4xl font-sans font-semibold flex flex-wrap tracking-wide mb-6 '>Join our community in creating a more sustainable future for everyone</p>
     <p className='text-xl mb-4 flex-wrap '>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p>
     <p className='text-xl flex-wrap '>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
      </section>
     </div>

     <img src='https://ecoyaan.com/images/Impact.png' alt='image2' className=' joinImage h-[46vh] w-[40%] relative top-[18%]'/>     
      </div>
      
      
      <div className='h-[80vh] bg-gray-100 flex '>
      <Video/>
     <div className='w-[50%] h-[70%] my-auto flex flex-col justify-center'> 
      <section className='w-[90%] mx-auto p-10 pr-28 break-all cards'>
      <p className='text-4xl font-sans font-semibold flex flex-wrap tracking-wide mb-6 '>Carefully curated Eco-friendly products</p>
     <p className='text-xl mb-4 flex-wrap '>We believe that every purchase you make can have a positive impact on the planet and the future.</p>
     <p className='text-xl flex-wrap '>Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</p>
      </section>
     </div>   
      </div>

      <div className='h-[80vh] mb-10 bg-gray-100
       flex -my-14'>
     <div className='w-[60%] h-[70%] my-auto rounded-r-[100px] flex flex-col justify-center  '> 
      <section className='w-[90%] p-14 mx-auto pr-28 break-all cards'>
      <p className='text-4xl font-sans font-semibold tracking-wide mb-6 '>For businesses that care deeply about sustainability</p>
     <p className='text-xl mb-4 flex flex-wrap '>Do you run a business that is committed to sustainability in every aspect of your work?</p>
     <p className='text-xl mb-4 flex flex-wrap'>Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?</p>
     <p className='text-xl flex flex-wrap mb-5'>If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:</p>
     <button className='bg-green-600 w-32 h-12 text-white rounded-2xl text-lg font-medium hover:bg-green-700 cursor-pointer'>Contact us</button>
      </section>
     </div>

      <div className='w-[40%]'>
      <img src='https://ecoyaan.com/images/OurStory4.png' alt='image2' className=' mx-auto joinImage h-[46vh] w-[80%] relative top-[18%]'/>     
      </div>
      </div>
    </>
  )
}

export default Home;


 {/* <img src="https://ecoyaan.com/images/carousel-1.png" alt="Item1" className='crim' />   */}