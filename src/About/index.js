import React, { Component } from 'react'
import './style.css'

class AboutPage extends Component {
  render () {
    return (
      <div className='about-page' id='about-page'>
        <div className='about-page-container'>
          <div className='about-headshot-and-button'>
            <img
              src='https://i.imgur.com/BT0dsup.jpg'
              className='profile-pic'
              height='250px'
              alt=''
            />
            <a
              href='https://misha-holzman.github.io/MH-Resume/'
              target='_blank'
              className='resume-button-link'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </div>
          <div className='about-all-texts'>
            <h3 className='hello-text'>Hi! I'm Misha Holzman</h3>
            <p className='main-text'>
            I am a web and visual designer / front end developer skilled in cohesive modern design.
            I create unique and beautiful user-oriented responsive websites, giving individuals and companies 
            the platform to dynamically communicate their mission and product to their target audience. 
            My work drives business and exposure through innovative ideas, precise detail, spacial mastery, 
            business understanding, intuitive consistency and intelligent user-flow. 
            My goal is to create an elegant combination of form and function.
            </p>
            <p className='main-text'>
            I was born in raised in NYC surrounded by art and design.
            I have a formal education in business, grew up as the son of professional artists, 
            and went back to school to learn coding, all leading me to blend a business oriented mindset with 
            creative and technical ability in web/visual design and web development. 
            </p>
            <p className='main-text'>
            I am always happy to chat about possible opportunities! Shoot me an email and I will be in touch. <span role='img' aria-label='emoji'>🤙</span>
            </p>
          </div>
        </div>
        <a href='#my-work' id='link2'>
          <img
            src='https://i.imgur.com/T5f8v9i.png'
            height='50px'
            className='arrow'
            alt=''
          />
        </a>
      </div>
    )
  }
}

export default AboutPage
