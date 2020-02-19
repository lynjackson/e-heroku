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

import data from '../../assets/images/dining.jpeg'
import '../../styles/about/about2.css';
import '../../styles/about/section2.css';
import {PageTitle} from '../../components/header';


export class Section2 extends React.Component {
  render(){
    return(
      <div id='section2_about' className='section_about' style={{opacity:0, transition:'opacity 1s'}}>
        <div id='cat-image-div_about' className='about-section-image-div'>
          <p className='section-title_about' id='section2-title_about'>In 2018, 89% of consumers quit a company after a <span style={{textDecoration:'underline'}}>single</span> poor customer experience.</p>
        </div>
        <div id='section2-text_about'>
          <div id='avon-quote-div_about'>
            <p id='avon-quote_about'>"A little slow, a little late, just once..."</p>
            <p id='avon-attribute_about'>- Avon</p>
          </div>
              <p className='paragraph-text_about' id='section2-p-text_about'>Customer loyalty is overrated. Though humans enjoy positive experience, they often remember a negative experience more acutely and will go to great lengths to avoid having it again. Today, it’s easier than ever for unsatisfied customers to check out and try your competitors. Improving the experience for your customers is no longer an option if you want to compete.</p>
        </div>
      </div>
      )
  }
  // componentDidMount(){
  //   window.addEventListener('scroll', ()=>{
  //     if (window.pageYOffset > document.getElementById('cat-image-div_about').offsetTop) {
  //       document.getElementById('section2_about').style.opacity = 0;
  //     }
  // })
  //
  // }
}
