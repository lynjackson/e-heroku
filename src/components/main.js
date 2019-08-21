import React from 'react';
import Header from '../components/header';
import '../styles/main.css';
// import '../styles/header_test.css';
// import '../styles/ourWork.css';
import '../styles/contact.css';
import '../styles/images/e2.png';
import PageTitle from '../flex_Components/page-title'
import ethe from '../styles/images/old_ethe.jpg';
import reach from '../styles/images/reach.jpeg';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";


export class AboveFold extends React.Component{

  render(){
    console.log(this.props);
  return(
    <div id='above-fold' onClick={()=>{this.props.props.overlay(); console.log(this.props)}} style={{display: this.props.appState.view.aboveFold}}>
      <h1 id='above-title'>Digital products & strategies that help you reach farther.</h1>
      <svg style={{width:'9%', alignSelf:'center', top:'22%', position:'relative'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>

    </div>
  )
}
componentDidMount(){
  // this.props.appState.defaultHeader();
  // document.getElementById('above-fold').addEventListener('wheel', ()=>{
  //   if (window.pageYOffset < 50){
  //     window.scrollTo({top: window.innerHeight, left:0, behavior: 'smooth'}); console.log('scroll')
  //   }})
  //
  //   document.getElementById('above-fold').addEventListener('keydown', (event)=>{
  //     if (window.pageYOffset < 50 && event.keyCode == '40'){
  //       window.scrollTo({top: window.innerHeight, left:0, behavior: 'smooth'}); console.log('scroll')
  //     }})

  window.addEventListener('scroll', (event)=>{
    (window.pageYOffset > 30) || document.getElementById('matters-view') ? this.props.appState.scrollHeader(): this.props.appState.defaultHeader();
  })
}
}

export class OurWork extends React.Component{
  render(){
  return(
    <div className='view' id='ourWork-view'>
        <div id='ourWork-content'>
          <WhatWeDo service={['Research & Product Strategy', 'Prototyping & Market Validation', 'Solutions Architecture']} title={'Digital Strategy'} description={'We develop custom digital strategies, conducting research and analytics into which platforms are important to business performance, and what improvements to current applications could enhance the customer experience further.'} icon={'./src/styles/icons/svg/023-research.svg'}/>
          <WhatWeDo service={['UX, UI, Art Direction', 'Mobile, Web, Emerging Tech', 'Backend & API Development']} title={`Design x Development`} description={"We design applications, social media experiences, and marketing campaigns, each aimed at making great user experience a part of your brand in the eyes of users, and extending your business's vision, culture and spirit."} icon={'./src/styles/icons/svg/027-social-media.svg'}/>
          <WhatWeDo service={['Service Design & Optimization', 'DevOps & Technical Infrastructure', 'Testing, Data Analytics, Optimization']} title={'Data Integration'} description={'We prioritize the collection of useful data in designing compelling customer experiences. Adding science to the art moves you from guesswork to inspired predictions, using metrics and analytics to inform decisions.'} icon={'./src/styles/icons/svg/001-statistics.svg'} noBorder={0}/>
        </div>
        <Link to='/digital_matters' onClick={()=>{this.props.appState.scrollHeader(); console.log(this.props)}}></Link>
    </div>
  )
}
//<p className='ourWork-statement'>We Consult & Create</p>
componentDidMount(){
  window.addEventListener('scroll', (event)=>{
    if(window.pageYOffset >= 367){
        return document.getElementById('ourWork-view').style.opacity=1}
    })
  }
}

const WhatWeDo = (props)=>{
  return(
    <div className='ourWork-div' id='ourWork-strategy-div' style={{border: props.noBorder}}>
      <div className='ourWork-title-div'><h1 className='ourWork-title'>{props.title}</h1></div>
      <div className='ourWork-description-div'><p className='ourWork-description-text'>{props.description}</p></div>
      <div id='ourWork-service-div'>
        <p className='ourWork-service-text'>{props.service[0]}</p>
        <p className='ourWork-service-text'>{props.service[1]}</p>
        <p className='ourWork-service-text'>{props.service[2]}</p>
      </div>
    </div>
  )
}

// export const Learn = ()=>{
//   return(
//     <div id='learn-div'>
//       <Link to='/digital_matters' onClick={()=>{this.props.appState.scrollHeader(); console.log(this.props)}}>
//         <h2 id='learn-text'>Learn why your digital footprint matters</h2><ion-icon id='learn-arrow' name="arrow-dropright"></ion-icon>
//       </Link>
//     </div>
//   )
// }

// export class DigitalMatters extends React.Component{
//   render(){
//     return(
//       <div className='view' id='matters-view' style={{opacity:1, transition:'opacity 1s'}}>
//         <PageTitle message={'Why Digital Matters'}/>
//         <Header />
//         <div id='matters-nav'><img src='src/styles/images/arrow.png' className='matters-nav-arrow' style={{transform:'rotate(-90deg)'}}/><p>Engage</p><hr className='matters-nav-line'/ ><p>Identity</p><hr className='matters-nav-line'/ ><p>Expectation</p><hr className='matters-nav-line'/ ><p>Info</p><img src='src/styles/images/arrow.png' className='matters-nav-arrow' style={{transform:'rotate(90deg)'}}/></div>
//         <div id='matters-content'>
//           <h1 id='matters-content-title'>Step Up Your Engagement</h1>
//           <p id='matters-content-text'>Digital strategies and technologies allow you to reach ALL of your potential customers, even those you didn't know about. In addition, they'll help you engage with current customers in innovative and exciting ways.</p>
//         </div>
//       </div>
//     )
//   }
//   componentDidMount(){
//     window.addEventListener('scroll', (event)=>{
//       if(window.pageYOffset >= 991){
//           return document.getElementById('matters-view').style.opacity=1}
//       }
//     )
//   }
// }


export class RecentProjects extends React.Component {
  render(){
    return(
      <div className='view' id='projects-view'>
        <div id='projects-div'>
          <img className='project-image' src='./src/styles/images/old_ethe.jpg'/>
          <img className='project-image' src='./src/styles/images/creator.jpg'/>
          <img className='project-image' src='./src/styles/images/bill.jpg'/>
        </div>
      </div>
    )
}

componentDidMount(){
  window.addEventListener('scroll', (event)=>{
    if(window.pageYOffset >= 991){
        return document.getElementById('projects-view').style.opacity=1}
    }
  )
}

}

export const ContactUs = ()=>{
  return(
    <div className='view' id='contact-view' style={{backgroundColor:'#333333'}}>
      <p className='contact-text' id='ready'>Ready to step your digital game up?</p>
      <p className='contact-text' id='hit'>Drop us a line</p>
      <a href="mailto:webmaster@example.com" id='contact-link'>hello@ethedigital.com</a>
    </div>
  )
}

// <img src='src/styles/images/arrow.png' id='submit-arrow' />



// <img src={props.icon} className='ourWork-icon'/>

export class MenuButton extends React.Component {
  render(){
    console.log(this.props);
      return(
      <div id='menu-icon-circle'>
        <ion-icon name={this.props.appState.view.menu} id='menu-icon'></ion-icon>
      </div>

      )
    }

    componentDidMount(){
      document.getElementById('menu-icon-circle').addEventListener('click', (event)=>{this.props.appState.view.overlay === 'none' ? this.props.appState.overlay():this.props.appState.front(); event.stopPropagation()})
      // document.getElementById('e').addEventListener('click', (event)=>{this.props.appState.front(); event.stopPropagation()})
    }
}

// <form id='contact-form'>
//   <input type='text' placeholder='Name' className='contact-input' />
//   <input type='email' placeholder='Email' className='contact-input' />
//   <input type='text' placeholder='Company (optional)' className='contact-input' />
//   <input type='tel' name='phone' placeholder='Phone (optional)' className='contact-input' />
//   <textarea type='text' placeholder='Message' className='contact-input' id='contact-message'></textarea>
//   <div id='submit-button-div'><button type='submit' value='submit' id='submit-button'>Submit</button> </div>
// </form>
