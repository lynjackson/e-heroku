import React from 'react';
import Header from '../components/header';
import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, engagementNav, identityNav, expectationNav, informationNav, scrollHeader, menuHeader } from '../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
import {ContactUs} from './main'
//imports function needed to access redux state object

class DigitalMatters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      engagement: 1,
      identity: 0,
      expectation: 0,
      information: 0,
    }
  }
  render(){
    return(
      <div id='matters-view' style={{opacity:1, transition:'opacity 3s'}}>
          <Header appState={this.props}></Header>


          <div id='matters-content-engagement' className='matters-content-container'>
          <div className='engagement-image-div matters-image-div'><img src='src/styles/images/fisherman.png' id='engagement-images'/></div>
            <div id='engagement-text-div' className='matters-text-div'>
              <h1 className='matters-content-title matters-content'  id='engagement-title'>We help companies find more customers & collaborators.</h1>
              
              <p className='matters-content-text matters-content' id='engagement-text'>Whatever product or service your business provides, there are virtually always more people that need it. Digital technologies give you unprecedented access to people, and unlimited opportunities to present yourself to potential customers. It'll also help you engage with current customers in new and innovative ways.</p>
            </div>
          </div>



          <div id='matters-content-identity' className='matters-content-container' style={{opacity:0, transition:'opacity 1s'}}>
            <div id='matters-identity-image-div' style={{width:'46%', opacity:0, transition:'opacity 1s'}}><img id='matters-identity-image' src='src/styles/images/engage.jpg' style={{maxWidth: '100%'}}/></div>
              <div className='matters-text-div  matters-identity-text-div'>
                <div id='identity-title-div'>
                  <h1 className='matters-content-title matters-content'  id='identity-title'>Every interaction is a chance to capitivate. To show you're better in ways that matter.</h1>
                </div>
                <div id='identity-paragraph-div'>
                <p className='matters-content-text matters-content'>Every digital interaction point for customers is a product, and like any product, should uphold the ideas the company seeks to embody and give the world.</p>
                  <p className='matters-content-text matters-content'>We value maximized user experience. Digitally engaged customers expect intuitive products and information, instantly and on whatever platform they're using. Creating a pleasurable experience is no longer optional if companies want to compete.</p>
                </div>
              </div>
          </div>

          <p className='matters-content-text matters-content' id='expectation-quote-text' style={{opacity:0, transition:'opacity 1s'}}>89% of consumers quit doing business with a company after a single poor customer experience in 2018.</p>
          <p id='expectation-quote-source'> - Some study, 2019.</p>



          <div id='matters-content-information' className='matters-content-container' style={{opacity:0, transition:'opacity 1s'}}>

              <div className='matters-text-div matters-information-text-div'>
                <h1 className='matters-content-title matters-content'  id='information-title'>Our strategists utilize your customers' data to identify & create true advantages.</h1>
                <div id='information-text-div'>
                  <p className='matters-content-text matters-content-information'>Data integration helps you make better decisions, increase the quality of the persoanlized experience and create true competitive advantage.</p>
                  <p className='matters-content-text matters-content-information'>By adding science to the art, companies move from guesswork to inspired predictions and continuous hypotheses testing.</p>
                </div>

                </div>
                <div className='identity-image-div matters-image-div'><img src='src/styles/images/data1.png' id='identity-image'/></div>
          </div>

        <ContactUs message={"We're ready when you are."}/>
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
    

    if(window.innerWidth >= 1024){
      window.addEventListener('scroll', (event)=>{
        (window.pageYOffset > 137) ? document.getElementById('matters-content-identity').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
        (window.pageYOffset > 725) ? document.getElementById('matters-content-information').style.opacity=1: document.getElementById('jawny3').style.opacity=0;
        (window.pageYOffset < 189) ? document.getElementById('matters-identity-image-div').style.opacity=0: document.getElementById('matters-identity-image-div').style.opacity=1;
        (window.pageYOffset < 700) ? document.getElementById('expectation-quote-text').style.opacity=0: document.getElementById('expectation-quote-text').style.opacity=1;
      })
    }
    if(window.innerWidth >= 1366){
      window.addEventListener('scroll', (event)=>{
        (window.pageYOffset > 137) ? document.getElementById('matters-content-identity').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
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
      // document.getElementById('nav-identity').addEventListener('click', ()=>{window.scrollTo({top:document.getElementById('matters-content-identity').offsetTop - 200, behavior: 'smooth'})})
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


export default connect(mapStateToProps, mapDispatchToProps)(DigitalMatters)
