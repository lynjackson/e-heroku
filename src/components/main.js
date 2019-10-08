import React from 'react';
import Header from '../components/header';
import '../styles/main.css';
// import '../styles/header_test.css';
// import '../styles/ourWork.css';
import '../styles/contact.css';
import '../styles/images/e2.png';
import ethe from '../styles/images/old_ethe.jpg';
import reach from '../styles/images/reach.jpeg';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";

import phone from '../styles/images/phone.png'
import arrow from '../styles/images/arrow.png'


export class AboveFold extends React.Component{

  render(){
    console.log(this.props);
    return(
      <div id='above-fold' onClick={()=>{this.props.props.overlay(); console.log(this.props)}} style={{display: this.props.appState.view.aboveFold,}}>
        <h1 id='above-title' style={{transition: 'opacity 1s'}}><span style={{fontFamily: 'Lato-Light', fontWeight: 300}}>W</span>e make digital products & strategies for modern companies.</h1>
        <div style={{width:'100%', display:'flex', justifyContent:'center', position:'relative', top:'30%'}}><img src={arrow} id='down-arrow' style={{width:30, transform:'rotate(180deg)', opacity:(window.pageYOffset === 0)? 1: 0, transition:'opacity .5s'}} onClick={()=>{window.scrollTo({top:document.getElementById('above-fold').offsetHeight -100, behavior: 'smooth'})}}/></div>
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
    (window.pageYOffset > 30) || document.getElementById('matters-view') ? this.props.appState.scrollHeader() : this.props.appState.defaultHeader();
  })
  window.addEventListener('scroll', (event)=>{
    (window.pageYOffset > 0) ? document.getElementById('above-title').style.opacity = .2: document.getElementById('above-title').style.opacity = 1 
  })
}
}

export class OurWork extends React.Component{
  render(){
    return(
      <div className='view' id='ourWork-view'>
          <div id='ourWork-content'>
            <WhatWeDo idey='jawny1' service={['Research & Product Strategy', 'Prototyping & Market Validation', 'Solutions Architecture']} title={'Consulting'} description={"We develop custom digital strategies, conducting research and analysis into each platform's importance to business performance, and what improvements to current applications could enhance the customer experience further."} icon={'./src/styles/icons/svg/023-research.svg'}/>
            <WhatWeDo idey='jawny2' service={['UX, UI, Art Direction', 'Mobile, Web, Emerging Tech', 'Backend & API Development']} title={`Creating`} description={"We design applications, social media experiences, and marketing campaigns, each aimed at making great user experience a part of your brand in the eyes of users, and extending your business's vision, culture and spirit."} icon={'./src/styles/icons/svg/027-social-media.svg'}/>
            <WhatWeDo idey='jawny3' service={['Service Design & Optimization', 'DevOps & Technical Infrastructure', 'Testing, Data Analytics']} title={'Integrating'} description={'We prioritize the collection of useful data in designing compelling customer experiences. Adding science to the art moves you from guesswork to inspired predictions, using metrics and analytics to inform decisions.'} icon={'./src/styles/icons/svg/001-statistics.svg'} noBorder={0}/>
          </div>
          <Link to='/digital_matters' onClick={()=>{this.props.appState.scrollHeader(); console.log(this.props)}}></Link>
      </div>
    )
}

}

export class WhatWeDo extends React.Component{
  render(){
    return(
      <div className='ourWork-div' id={this.props.idey} style={{border: this.props.noBorder}}>
        <div className='ourWork-title-div'><h1 className='ourWork-title'>{this.props.title}</h1></div>
        <div className='ourWork-description-div'><p className='ourWork-description-text'>{this.props.description}</p></div>
        <div id='ourWork-service-div'>
          <p className='ourWork-service-text'>{this.props.service[0]}</p>
          <p className='ourWork-service-text'>{this.props.service[1]}</p>
          <p className='ourWork-service-text'>{this.props.service[2]}</p>
        </div>
      </div>
    )
  }

  componentDidMount(){

    if(window.innerWidth > 0){
      window.addEventListener('scroll', (event)=>{
        (window.pageYOffset > 0) ? document.getElementById('jawny1').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
        (window.pageYOffset > 355) ? document.getElementById('jawny2').style.opacity=1: document.getElementById('jawny2').style.opacity=0;
        (window.pageYOffset > 775) ? document.getElementById('jawny3').style.opacity=1: document.getElementById('jawny3').style.opacity=0;
      })
    }

    if(window.innerWidth >= 1024){

      window.addEventListener('scroll', (event)=>{
        (window.pageYOffset > 0) ? document.getElementById('jawny1').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
        (window.pageYOffset > 0) ? document.getElementById('jawny2').style.opacity=1: document.getElementById('jawny2').style.opacity=0;
        (window.pageYOffset > 0) ? document.getElementById('jawny3').style.opacity=1: document.getElementById('jawny3').style.opacity=0;
      })

    }


    if(window.innerWidth > 1366){

      window.addEventListener('scroll', (event)=>{
        if(window.pageYOffset > 0){
            return document.getElementById('jawny1').style.opacity=1
          }
          if(window.pageYOffset === 0){
              return document.getElementById('jawny1').style.opacity=0
            }
        })
        window.addEventListener('scroll', (event)=>{
          if(window.pageYOffset >= 500){
              return document.getElementById('jawny2').style.opacity=1
            }
          })
          window.addEventListener('scroll', (event)=>{
            if(window.pageYOffset >= 950){
                return document.getElementById('jawny3').style.opacity=1
              }
            })
    }


    }
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
          <div id='ptouch' className='project-container'>
            <p className='project-text'>Helping the community find its creative space.</p>
            <img className='project-logo' src='./src/styles/images/studio.png'/>
          </div>
          <div id='bill' className='project-container'>
            <p className='project-text' style={{color:'white'}}>A better way to dine out.</p>
            <img className='project-logo' src='./src/styles/images/bill-logo.png' style={{filter:'invert(1)'}}/>
            <img id='bill-phone' src='./src/styles/images/phone.png' style={{}}/>
          </div>
        </div>
      </div>
    )
}

componentDidMount(){
  window.addEventListener('scroll', (event)=>{
    (window.pageYOffset > 396)?document.getElementById('projects-view').style.opacity =1:document.getElementById('projects-view').style.opacity =0
  })

}
}

export const ContactUs = (props)=>{
  return(
    <div className='view' id='contact-view' style={{backgroundColor:'rgb(26,26,26)',}}>
    <div id='contact-content'>
        <p className='contact-text' id='ready'>{props.message}</p>
        <a href="mailto:webmaster@example.com" id='contact-link'>Email us</a>
        <div id='contact-options'>
          <a className='contact-option'>Privacy Policy</a>
          <a className='contact-option'>News</a>
          <a className='contact-option'>Events</a>
          <a className='contact-option'>Industries</a>
        </div>
      </div>
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
