import React from 'react';
import Header from '../../components/header';
// import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, engagementNav, identityNav, expectationNav, informationNav, scrollHeader, menuHeader } from '../../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
import {Contact} from '../../components/contact'
import fisherman from '../../assets/images/fisherman.png'

import data from '../../assets/images/data1.png'
import '../../styles/about/about2.css';
import '../../styles/about/section3.css';
import {PageTitle} from '../../components/header';


export const Section3 = ()=>{
  return(
    <div id='section3_about' className='section_about' style={{opacity: 0, transition:'opacity 1s'}}>
      <h1 id='about-section3-title'  className='section-title_about'>We utilize digital technology to create true advantages.</h1>

      <div id='section3-content_about'>
        <div id='image-section3_about'></div>
        <p className='paragraph-text_about' id='section3-p-text'>Whatever product or service your business provides, there are virtually always more people that need it. Digital technologies give you unprecedented access to people, and unlimited opportunities to present yourself to potential customers. It’ll also help you  engage with current customers in new and innovative ways.<br/><br/> By adding science to the art, data helps companies move from guesswork to inspired predictions and continuous hypotheses testing. Data integration helps you make better decisions, increase the quality of the personalized experience, and create true competitive advantage.</p>
      </div>
    </div>
    )
}

export const Section3Mobile = ()=>{
  return(
    <div id='section3_about' className='section_about' style={{marginBottom:0, opacity: 0, transition:'opacity 1s'}}>
      <h1 id='about-section3-title'  className='section-title_about'>We utilize digital technology to create true advantages.</h1>
      <div className='about-section1-image-div about-section-image-div' id='section3-image-div_about'></div>

      <div id='section3-content_about'>

        <p className='paragraph-text_about' id='section3-p-text'>Whatever product or service your business provides, there are virtually always more people that need it. Digital technologies give you unprecedented access to people, and unlimited opportunities to present yourself to potential customers. It’ll also help you  engage with current customers in new and innovative ways.<br/><br/> By adding science to the art, data helps companies move from guesswork to inspired predictions and continuous hypotheses testing. Data integration helps you make better decisions, increase the quality of the personalized experience, and create true competitive advantage.</p>
      </div>
    </div>
    )
}
