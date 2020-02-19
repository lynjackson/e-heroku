import React from 'react';
import Header from '../components/header';
// import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, engagementNav, identityNav, expectationNav, informationNav, scrollHeader, menuHeader } from '../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
import {Contact} from '../components/contact'
// import fisherman from '../styles/images/fisherman.png'
// import fisherman2 from '../styles/images/fisherman22.jpg'
// import data from '../styles/images/dining.jpeg'
import '../styles/about/about2.css';
import {PageTitle} from '../components/header';
//imports function needed to access redux state object

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = { engagement: 1, identity: 0, expectation: 0, information: 0, }
  }

  render(){
    return(
      <div id='page_about' style={{opacity:1, transition:'opacity 3s'}}>

          <Header appState={this.props}><PageTitle title={'vision'}/></Header>

          <div id='section1_about' className='section_about'>
            <h1 id='about-section1-title'  className='section-title_about'>We see every interaction as a chance to captivate.</h1>
            <div className='about-section1-image-div about-section-image-div'>
              <img src={fisherman} id='fisherman'/>
            </div>

            <div id='section1-content_about'>
              <img id='fisherman2' src={fisherman2}/>
              <p className='paragraph-text_about first-paragraph_about' id='engagement-text'>Customers appreciate positive experiences, and providing them is no longer an option if you wish to stay relevant. Every interaction with a customer amounts to a feeling they’ll remember and associate with your company.<br/><br/> It’s our mission to maximize the experience our clients provide to their customers, particularly from a digital standpoint. Customers expect intuitive products with useful information and capability. We want to make sure that you’re meeting that demand with crafted digital products that... </p>
            </div>


          </div>








          <div id='section2_about' className='section_about' style={{opacity:0, transition:'opacity 1s'}}>

            <div id='cat-image-div_about' className='about-section-image-div'>
              <p className='section-title_about' id='section2-title_about'>In 2018, 89% of consumers quit a company after a single poor customer experience.</p>
            </div>

            <div id='section2-text_about'>
              <div id='avon-quote-div_about'>
                <p id='avon-quote_about'>"A little slow, a little late, just once..."</p>
                <p id='avon-attribute_about'>- Avon</p>
              </div>
                  <p className='paragraph-text_about'>Customer loyalty is overrated. Though humans enjoy positive experience, they often remember a negative experience more acutely and will go to great lengths to avoid having it again. Today, it’s easier than ever for unsatisfied customers to check out and try your competitors. Improving the experience for your customers is no longer an option if you want to compete.</p>
            </div>

          </div>





          <div id='section3_about' className='section_about' style={{marginBottom:0}}>
            <h1 id='about-section3-title'  className='section-title_about'>We utilize digital technology to create true advantages.</h1>
            <div className='about-section1-image-div about-section-image-div' id='section3-image-div_about'>
              <img src={data} id='about-images'/>
            </div>

            <div id='section3-content_about'>
              <img id='fisherman2' src={data}/>
              <p className='paragraph-text_about first-paragraph_about' id='engagement-text'>Whatever product or service your business provides, there are virtually always more people that need it. Digital technologies give you unprecedented access to people, and unlimited opportunities to present yourself to potential customers. It’ll also help you  engage with current customers in new and innovative ways.<br/><br/> By adding science to the art, data helps companies move from guesswork to inspired predictions and continuous hypotheses testing. Data integration helps you make better decisions, increase the quality of the personalized experience, and create true competitive advantage.</p>
            </div>
          </div>

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
        (window.pageYOffset > 137) ? document.getElementById('section2_about').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
        (window.pageYOffset > 725) ? document.getElementById('matters-content-information').style.opacity=1: document.getElementById('jawny3').style.opacity=0;
        (window.pageYOffset < 189) ? document.getElementById('matters-identity-image-div').style.opacity=0: document.getElementById('matters-identity-image-div').style.opacity=1;
        (window.pageYOffset < 700) ? document.getElementById('expectation-quote-text').style.opacity=0: document.getElementById('expectation-quote-text').style.opacity=1;
      })
    }
    if(window.innerWidth >= 1024){
      window.addEventListener('scroll', (event)=>{
        (window.pageYOffset > 1) ? document.getElementById('section2_about').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
        (window.pageYOffset > 725) ? document.getElementById('matters-content-information').style.opacity=1: document.getElementById('jawny3').style.opacity=0;
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


export default connect(mapStateToProps, mapDispatchToProps)(About)
