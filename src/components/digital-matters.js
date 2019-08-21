import React from 'react';
import PageTitle from '../flex_Components/page-title';
import Header from '../components/header';
import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, engagementNav, identityNav, expectationNav, informationNav, scrollHeader, menuHeader } from '../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
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
      <div className='view' id='matters-view' style={{opacity:1, transition:'opacity 3s'}}>
          <Header appState={this.props}></Header>
          <Overlay display={this.props.view.overlay} appState={this.props} />




          <div id='matters-content-engagement' className='matters-content-container'>
            <div id='engagement-text-div' className='matters-text-div'>
              <h1 className='matters-content-title matters-content'  id='engagement-title'>Find your customers, and help them find you.</h1>
              <hr id='engagement-line'/>
              <p className='matters-content-text matters-content'>Digital strategies and technologies increase the reach between you and your customers. Whatever your business does, there are virtually always more people that need it. Digital technologies give you unprecedented access to people, and unlimited opportunities to present yourself to potential customers.</p>
              <p className='matters-content-text matters-content' >Digital technology can also help you engage with current customers in new and innovative ways.</p>
            </div>
            <div className='engagement-image-div matters-image-div'><img src='src/styles/images/engage.jpg' className='engagement-images'/></div>
          </div>

          <div id='matters-content-identity' className='matters-content-container' style={{opacity:this.state.identity, transition:'opacity 1s'}}>
            <div className='matters-text-div  matters-identity-text-div'>
              <div id='identity-title-div'>
                <h1 className='matters-content-title matters-content'  id='identity-title'>Show Them Who You Are</h1>
              </div>
              <hr id='identity-line'/>
              <div id='identity-paragraph-div'>
                <p className='matters-content-text matters-content' >Every means that provides customers a chance to interact with or experience your business is a product, and a representation of your business. Like your other products, digital products should uphold the ideas your company seeks to embody, and communicate these ideas to the  world. They’re opportunities to give them your vision, and to show what makes you and your business unique, and better.</p>
              </div>
            </div>
            <div className='identity-image-div matters-image-div'><img src='src/styles/images/identity.jpg' id='identity-image'/></div>
          </div>

          <div id='matters-content-expectation' className='matters-content-container' style={{opacity:this.state.expectation, transition:'opacity 1s'}}>
            <div className='matters-text-div' id='expectation-text-div'>
              <h1 className='matters-content-title matters-content'  id='expectation-title'>Customers won't wait for you</h1>
              <hr id='expectation-line' />
              <div id='expectation-content-div'>
                <div id='expectation-paragraph-div'>
                <p className='matters-content-text matters-content' >Digital-savvy companies are already forcing an evolution in culture, and it’s raising the expectations of not only their customers, but yours too. As consumers become accustomed to new platforms and access points, failing to place yourself in the proper places to meet your customers puts you at a stiff disadvantage.</p>
                <p className='matters-content-text matters-content' >Digitally engaged customers expect timely, tailored products and information at the precise moment they’re looking, on whatever platform they’re using. Make it even easier for your current customers to find and interact with you. Giving them a better experience, focused on their wants and needs will pay dividends.</p>
              </div>
              <p className='matters-content-text matters-content' id='expectation-quote-text'>89% of consumers quit doing business with a company after a single poor customer experience in 2018.</p>
              </div>
            </div>
          </div>

          <div id='matters-content-information' className='matters-content-container' style={{opacity:this.state.information, transition:'opacity 1s'}}>
          <div className='matters-text-div matters-information-text-div'>
            <h1 className='matters-content-title matters-content'  id='information-title'>Knowledge is Power</h1>
            <p className='matters-content-text matters-content' >What could be more valuable to your business than information about the precise ways your customer interacts with your products and company?</p>
            <p className='matters-content-text matters-content' >Digital products give you access to precious data, substantially increasing your insight into the customer's experience.</p>

            </div>
            <div className='identity-image-div matters-image-div'><img src='src/styles/images/data.gif' id='identity-image'/></div>
          </div>


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
    window.addEventListener('scroll', (event)=>{
      if(window.pageYOffset < 304){
          this.props.engagementNav();
        }
      if(window.pageYOffset >= 304 && window.pageYOffset < 1051){
          this.props.identityNav();
          this.setState({identity:1})
        }
        if(window.pageYOffset >= 957 && window.pageYOffset < 1416){
            this.props.expectationNav();
            this.setState({expectation:1})
          }
          if(window.pageYOffset >= 1476 ){
              this.props.informationNav();
              this.setState({information:1})
            }
      })
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


export default connect(mapStateToProps, mapDispatchToProps)(DigitalMatters)
