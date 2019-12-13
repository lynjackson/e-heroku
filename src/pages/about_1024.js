import React from 'react';
import {HeaderMobile, HeaderDesktop} from '../components/header';
// import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, engagementNav, identityNav, expectationNav, informationNav, scrollHeader, menuHeader } from '../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
import {Contact} from '../components/contact'
// import fisherman from '../styles/images/fisherman.png'
// import fisherman2 from '../styles/images/fisherman22.jpg'
import data from '../assets/images/data1.png'
import '../styles/about/about2.css';
import {PageTitle} from '../components/header';
import {Section1, Section1Mobile} from '../components/about/section1'
import {Section2} from '../components/about/section2'
import {Section3, Section3Mobile} from '../components/about/section3'
//imports function needed to access redux state object

class About1024 extends React.Component{
  constructor(props){
    super(props);
    this.state = { engagement: 1, identity: 0, expectation: 0, information: 0, }
  }

  render(){
    return(
      <div id='page_about' style={{opacity:1, transition:'opacity 3s'}}>
          {(window.innerWidth >= 1024) ? <HeaderDesktop appState={this.props}>
            <p style={{color:'white', fontFamily:'poppins', fontSize:'1.149em', fontWeight:100}}>+</p>
            <p style={{color:'white', fontFamily:'poppins', fontSize:'1.187em', fontWeight:100, }}>vision</p>
          </HeaderDesktop> : <HeaderMobile appState={this.props}/>}

          {(window.innerWidth < 1024) ? <Section1Mobile/> : <Section1/>}
          <Section2/>

          {(window.innerWidth < 1024) ? <Section3Mobile/> : <Section3/>}
          <Contact message={"Get in touch"}/>
      </div>
    )
  }

//This is the matters-nav
  // <div id='matters-nav-div'>
  //   <div id='matters-nav'>
  //     <p id='nav-engagement' style={{fontWeight:this.props.matterNav.engagementWeight, borderBottomColor: 'black', borderBottom: this.props.matterNav.engagementBorder, color: 'rgba(46, 0, 0, 1)'}}>Engage</p>
  //     <hr className='matters-nav-line'/ >
  //     <p id='nav-identity' style={{fontWeight:this.props.matterNav.identityWeight, borderBottomColor: 'black', borderBottom: this.props.matterNav.identityBorder, color:'rgba(46, 31, 0, 0.48)'}}>Identity</p>
  //     <hr className='matters-nav-line'/ >
  //     <p id='nav-expectation' style={{fontWeight:this.props.matterNav.expectationWeight, borderBottomColor: 'black', borderBottom: this.props.matterNav.expectationBorder, color:'rgba(7, 87, 3, 0.45)'}}>Expectation</p>
  //     <hr className='matters-nav-line'/ >
  //     <p id='nav-information' style={{fontWeight:this.props.matterNav.informationWeight, borderBottomColor: 'black', borderBottom: this.props.matterNav.informationBorder, color:'rgba(7, 87, 3, 0.45)'}}>Information</p>
  //   </div>
  // </div>
  componentDidMount(){




    if(window.innerWidth >= 300){
      window.addEventListener('scroll', (event)=>{
        (window.pageYOffset > document.getElementById('section2_about').offsetTop - 482) ? document.getElementById('section2_about').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
        (window.pageYOffset > 725) ? document.getElementById('section3_about').style.opacity=1: document.getElementById('jawny3').style.opacity=0;
        (window.pageYOffset < 189) ? document.getElementById('matters-identity-image-div').style.opacity=0: document.getElementById('matters-identity-image-div').style.opacity=1;
        (window.pageYOffset < 700) ? document.getElementById('expectation-quote-text').style.opacity=0: document.getElementById('expectation-quote-text').style.opacity=1;
      })
    }
    if(window.innerWidth >= 1024){
      window.addEventListener('scroll', (event)=>{
        (window.pageYOffset > 1) ? document.getElementById('section2_about').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
        (window.pageYOffset > document.getElementById('section2_about').offsetTop - 50) ? document.getElementById('section3_about').style.opacity=1: document.getElementById('section3_about').style.opacity=0;
        (window.pageYOffset < 189) ? document.getElementById('matters-identity-image-div').style.opacity=0: document.getElementById('matters-identity-image-div').style.opacity=1;
        (window.pageYOffset < 700) ? document.getElementById('expectation-quote-text').style.opacity=0: document.getElementById('expectation-quote-text').style.opacity=1;
      })
    }
    if(window.innerWidth >= 1366){
      window.addEventListener('scroll', (event)=>{
        (window.pageYOffset > 137) ? document.getElementById('section2_about').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
        (window.pageYOffset > 1103) ? document.getElementById('matters-content-information').style.opacity=1: document.getElementById('matters-content-information').style.opacity=0;
        (window.pageYOffset < 533) ? document.getElementById('jawny4').style.opacity=0: document.getElementById('matters-identity-image-div').style.opacity=1;
        (window.pageYOffset < 700) ? document.getElementById('expectation-quote-text').style.opacity=0: document.getElementById('expectation-quote-text').style.opacity=1;
      })
    }


      this.props.scrollHeader();
      this.props.defaultView();
      console.log('matters re-render')
      window.scrollTo(0, 0)


      // document.getElementById('nav-engagement').addEventListener('click', ()=>{window.scrollTo({top:document.getElementById('matters-content-engagement').offsetTop - 200, behavior: 'smooth'})})
      // document.getElementById('nav-identity').addEventListener('click', ()=>{window.scrollTo({top:document.getElementById('section2_about').offsetTop - 200, behavior: 'smooth'})})
      // document.getElementById('nav-expectation').addEventListener('click', ()=>{window.scrollTo({top:document.getElementById('matters-content-expectation').offsetTop - 200, behavior: 'smooth'})})
      // document.getElementById('nav-information').addEventListener('click', ()=>{window.scrollTo({top:document.getElementById('matters-content-information').offsetTop - 200, behavior: 'smooth'})})
  }
}

// <h1 id='why-digital-matters'>Why Digital Matters</h1>

// <img src='src/styles/images/arrow.png' className='matters-nav-arrow' style={{transform:'rotate(-90deg)'}}/>

function mapStateToProps(state){
  return{
    books: state.books,
    view: state.view,
    values: state.values,
    header: state.header,
    matterNav: state.matterNav
  }
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ selector: selectBook, overlay: overlay, valueNextPage: valueNextPage, valuePrevPage: valuePrevPage, defaultView: defaultView, defaultHeader: defaultHeader, invertHeader: invertHeader, engagementNav: engagementNav, identityNav: identityNav, expectationNav: expectationNav, informationNav:informationNav, scrollHeader:scrollHeader, menuHeader:menuHeader }, dispatch)
}

// window.addEventListener('scroll', (event)=>{
//   if(window.pageYOffset < 304){
//       this.props.engagementNav();
//     }
//   if(window.pageYOffset >= 304 && window.pageYOffset < 1051){
//       this.props.identityNav();
//       this.setState({identity:1})
//     }
//     if(window.pageYOffset >= 957 && window.pageYOffset < 1416){
//         this.props.expectationNav();
//         this.setState({expectation:1})
//       }
//       if(window.pageYOffset >= 1476 ){
//           this.props.informationNav();
//           this.setState({information:1})
//         }
//   })


export default connect(mapStateToProps, mapDispatchToProps)(About1024)
