import React from 'react';
import Header from '../../components/header';
// import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, engagementNav, identityNav, expectationNav, informationNav, scrollHeader, menuHeader } from '../../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
import {Contact} from '../../components/contact'
import fisherman from '../../styles/images/fisherman.png'
import fisherman2 from '../../styles/images/fisherman2.jpg'
import data from '../../styles/images/data1.png'
import '../../styles/about2.css';
import {PageTitle} from '../../components/header';


export const Section1 = ()=>{
  return(
        <div id='section1_about' className='section_about'>
          <div id='section1_titleandtext'>
            <h1 id='about-section1-title'  className='section-title_about'>We see every interaction as a chance to captivate.</h1>
            <div id='section1-content_about'>
              <p className='paragraph-text_about first-paragraph_about' id='engagement-text'>Customers appreciate positive experiences, and providing them is no longer an option if you wish to stay relevant. Every interaction with a customer amounts to a feeling they’ll remember and associate with your company.<br/><br/> It’s our mission to maximize the experience our clients provide to their customers, particularly from a digital standpoint. Customers expect intuitive products with useful information and capability. We want to make sure that you’re meeting that demand with crafted digital products that... </p>
            </div>
          </div>
          <div className='about-section1-image-div about-section-image-div'>
            <div id='fisherman1_div'></div>
            <div id='fisherman2_div'></div>
          </div>
        </div>
    )
}


export const Section1Mobile = ()=>{
  return(
        <div id='section1_about' className='section_about'>
          <div id='section1_titleandtext'>
            <h1 id='about-section1-title'  className='section-title_about'>We see every interaction as a chance to captivate.</h1>
            <div id='fisherman1_div'></div>
            <div id='section1-content_about'>
              <p className='paragraph-text_about first-paragraph_about' id='engagement-text'>Customers appreciate positive experiences, and providing them is no longer an option if you wish to stay relevant. Every interaction with a customer amounts to a feeling they’ll remember and associate with your company.<br/><br/> It’s our mission to maximize the experience our clients provide to their customers, particularly from a digital standpoint. Customers expect intuitive products with useful information and capability. We want to make sure that you’re meeting that demand with crafted digital products that... </p>
            </div>
          </div>
          
        </div>
    )
}
