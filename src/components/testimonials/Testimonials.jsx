import React from "react";
import "./testimonials.css";
import AVTR1 from '../../assets/me.png';
import AVTR2 from '../../assets/codestudio.jfif';
import AVTR3 from '../../assets/gfg.jfif';
import AVTR4 from '../../assets/hacker.jfif';
import AVTR5 from '../../assets/interview.png';
import AVTR6 from '../../assets/leetcode.png';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data=[
 {
   avatar:AVTR1,
   name:<a href="#contact" onClick="Contact Me">Parmeshwar Gupta</a>,
   review: 'Hi, I am a student of Central University Of Haryana'
  +'and here I am persuing B. Tech in Computer Science & engineering'
  +'this is my final year of my  B. Tech after it I want to go for a job '
  +'in SDE or Machine Learning.'
  
 },
 {
  avatar:AVTR6,
  name:<a href="https://leetcode.com/parmeshwarmrj18/" onClick="Contact Me">Visit My Frofile</a>,
  review: 'Hi, I am a student of Central University Of Haryana'
  +'and here I am persuing B. Tech in Computer Science & engineering'
  +'this is my final year of my  B. Tech after it I want to go for a job '
  +'in SDE or Machine Learning.'
 },
{
  avatar:AVTR2,
  name:<a href="https://www.codingninjas.com/codestudio/profile/ec5a2eb7-ba04-45ce-a890-5dbf56f3207d" onClick="Contact Me">Visit My Profile</a>,
  review: 'Hi, I am a student of Central University Of Haryana'
  +'and here I am persuing B. Tech in Computer Science & engineering'
  +'this is my final year of my  B. Tech after it I want to go for a job '
  +'in SDE or Machine Learning.'
},
{
  avatar:AVTR3,
  name:<a href="https://auth.geeksforgeeks.org/user/parmeshwarmrj18/" onClick="Contact Me">Visit My Frofile</a>,
  review: 'Hi, I am a student of Central University Of Haryana'
  +'and here I am persuing B. Tech in Computer Science & engineering'
  +'this is my final year of my  B. Tech after it I want to go for a job '
  +'in SDE or Machine Learning.'
},
{
  avatar:AVTR4,
  name:<a href="https://www.hackerrank.com/parmeshwarmrj18" onClick="Contact Me">Visit My Frofile</a>,
  review: 'Hi, I am a student of Central University Of Haryana'
  +'and here I am persuing B. Tech in Computer Science & engineering'
  +'this is my final year of my  B. Tech after it I want to go for a job '
  +'in SDE or Machine Learning.'
},
 {
  avatar:AVTR5,
  name:<a href="https://www.interviewbit.com/profile/pdstqqfxd_" onClick="Contact Me">Visit My Frofile</a>,
  review: 'Hi, I am a student of Central University Of Haryana'
  +'and here I am persuing B. Tech in Computer Science & engineering'
  +'this is my final year of my  B. Tech after it I want to go for a job '
  +'in SDE or Machine Learning.'
 },
 
]


const testimonials = () => {
  return( <section id="testimonials">
    <h5>My Programming Progress</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonial_container"
    modules={[Pagination]}
    spaceBetween={40}
    slidesPreview={1}
    pagination={{clickable:true}}>    


      {
        data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
          </SwiperSlide>
          )
        })
      }
    </Swiper>

  </section>
  )
};

export default testimonials;
