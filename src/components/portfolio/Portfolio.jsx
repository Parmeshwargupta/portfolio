import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/project1.jfif';
import IMG2 from '../../assets/project2.jpg';
import IMG3 from '../../assets/project3.jfif';
import IMG4 from '../../assets/project4.jfif';
import IMG5 from '../../assets/project5.jfif';
import IMG6 from '../../assets/project7.jfif';
import IMG7 from '../../assets/project8.jfif';
import IMG8 from '../../assets/project6.jfif';


const portfolio = () => {
  return(  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
      <artical className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG1} alt=""/>
        </div>
        <h3>This is the portfolio item title</h3>
        <div className="portfolio_item-cta">
        <a href="http://github.com" className='btn' target='_bank'>Github</a>
        <a href="https://parmeshwargupta.github.io/learners/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </artical>
        <artical className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG2} alt=""/>
        </div>
        <h3>This is the portfolio item title</h3>
        <div className="portfolio_item-cta">
        <a href="http://github.com" className='btn' target='_bank'>Github</a>
        <a href="https://parmeshwargupta.github.io/stopwatch/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </artical>
        <artical className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG3} alt=""/>
        </div>
        <h3>This is the portfolio item title</h3>
        <div className="portfolio_item-cta">
        <a href="http://github.com" className='btn' target='_bank'>Github</a>
        <a href="https://parmeshwargupta.github.io/Ecomerce-Web/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </artical>
        <artical className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG4} alt=""/>
        </div>
        <h3>This is the portfolio item title</h3>
        <div className="portfolio_item-cta">
        <a href="http://github.com" className='btn' target='_bank'>Github</a>
        <a href="https://parmeshwargupta.github.io/socials_apis/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </artical>
        <artical className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG5} alt=""/>
        </div>
        <h3>This is the portfolio item title</h3>
        <div className="portfolio_item-cta">
        <a href="http://github.com" className='btn' target='_bank'>Github</a>
        <a href="https://parmeshwargupta.github.io/Drawing_application/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </artical>
        <artical className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG6} alt=""/>
        </div>
        <h3>This is the portfolio item title</h3>
        <div className="portfolio_item-cta">
        <a href="http://github.com" className='btn' target='_bank'>Github</a>
        <a href="https://parmeshwargupta.github.io/company_web/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </artical>
        <artical className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG7} alt=""/>
        </div>
        <h3>This is the portfolio item title</h3>
        <div className="portfolio_item-cta">
        <a href="http://github.com" className='btn' target='_bank'>Github</a>
        <a href="https://parmeshwargupta.github.io/Car_sharing/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </artical>
        <artical className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={IMG8} alt=""/>
        </div>
        <h3>This is the portfolio item title</h3>
        <div className="portfolio_item-cta">
        <a href="http://github.com" className='btn' target='_bank'>Github</a>
        <a href="https://parmeshwargupta.github.io/Notes_application/#/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </artical>
       
        </div>
      
    </section>
  )
};

export default portfolio;
