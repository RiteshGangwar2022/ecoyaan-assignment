import React from "react";
import "../../styles/About.css";
import Team from "./Team";

const About = () => {
  return (
    <>
      <div className="bg-indigo-50 w-[100%] h-[70vh] flex px-32 py-36">
        <div className="w-[90%]">
          <section className="first w-[70%]">
            <p className="text-5xl font-sans font-semibold mb-6">
              About Ecoyaan
            </p>
            <p className="text-2xl pb-4 tracking-wide text-gray-800">
              At Ecoyaan, we are more than just a platform. Our goal is to build
              a community of eco-conscious people who share a common vision and
              passion for a more sustainable world.
            </p>
            <p className="text-2xl pb-4 tracking-wide text-gray-800">
              We recognize that sustainability is a journey (as the Sanskrit
              word “yaan” suggests). To keep you motivated on this journey, on
              our platform and our social media pages, you can find:
            </p>
            <ul className="text-xl text-gray-800 list-disc px-6">
              <li>
                Tips and tricks to adopt a more eco-friendly and low-waste
                lifestyle
              </li>
              <li>
                Videos, posts, and quizzes on climate change and sustainability
              </li>
              <li>
                Events and pledges that invite you to adopt a more sustainable
                lifestyle
              </li>
            </ul>
          </section>
        </div>
        <div className="w-[50%]  mt-10 h-50">
          <img src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png" />
        </div>
      </div>
     
      <div className="bg-yellow-50 mt-40 mb-20 w-90 mr-40 h-90 grid gap-24 grid-cols-4  px-32 py-16">
        <div className="p-10">
                <section className="values">
                <img className='w-30 block h-20' src="https://ecoyaan.com/images/Trust.png" />
                  <h1 className="text-2xl my-5">Trust</h1>
                  <p className="reveal p-2">We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
                </section>
        </div>
        <div className="p-10">
        <section className="values">
                <img className='w-30 block h-20' src="https://ecoyaan.com/images/Authenticity.png" />
                  <h1 className="text-2xl my-5">Authenticity</h1>
                  <p className="reveal">We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>
                </section>
        </div>
        <div className="p-10 bg-white-400">
                <section className="values">
                <img className='w-30 block h-20' src="https://ecoyaan.com/images/Impact.png" />
                  <h1 className="text-2xl my-5">Impact</h1>
                  <p className="reveal p-1">We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>
                </section>
        </div>
        <div className="p-10">
        <section className="values">
                <img className='w-30 block h-20' src="https://ecoyaan.com/images/FunAndEngaging.png" />
                  <h1 className="text-2xl my-5">Fun & Engaging</h1>
                  <p className="reveal">Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
                </section>
        </div>
      </div>
      <div>
      <p className="text-3xl text-center mt-14 mb-14 font-bold">Our Story</p>
    </div>
      <div  className="ml-60 grid grid-cols-2">
      <div>
      <section>
      <img style={{height:'350px'}} src="https://ecoyaan.com/images/about-us-founding-team-01.png" alt="Founder Image" />
      </section>
      </div>
      <img style={{height:'350px'}} src='https://ecoyaan.com/images/about-us-founding-team-02.png' alt="Founder Image" />
    </div>
    <div className="text-center items-center self-center m-auto p-10 w-[70%] text-wrap">
      <p >
      We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.
      </p>
      <br></br>
      <p>Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.</p>
      <br></br>

<p>We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.</p>
<br></br>

<p>As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.
</p>

      <button className="learn-more">Learn More</button>
    </div>
    <div>
      <p className="text-3xl text-center mt-14 mb-14 font-bold">Meet Our Team</p>
    </div>
      <Team/>
      {/* <hr className="bg-black border-gray-400"></hr> */}

    </>
  );
};

export default About;
