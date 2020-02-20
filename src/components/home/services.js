import React, {useState, useEffect, useCallback} from 'react';
import '../../styles/css/home.css';
import Bulb from '../../assets/icons/bulb.png';
import Cloud from '../../assets/icons/cloud.png';
import Data from '../../assets/icons/data.png';


export const Services2 = ()=>{
  const [servicesOpacity, setOpacity] = useState(0)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.pageYOffset > 5){
        setOpacity(1);
      }
      else{
        setOpacity(0);
      }
    })
  })

  return(
    <div id='services' style={{opacity: servicesOpacity}}>
      <Service img={Bulb} title={'Creating experiences from ideas.'} description={'We design apps, social media experiences, and marketing campaigns, each aimed at making great user experience a part of your brand in the eyes of users, and extending your business’s vision, culture and spirit.'}/>
      <Service img={Cloud} title={'Turning data into useful information.'} description={'We prioritize the collection of useful data in designing compelling customer experiences. Adding science to the art moves you from guesswork to inspired predictions, using metrics and analytics to inform decisions.'}/>
      <Service img={Data} title={'Developing custom digital strategies.'} description={'We develop custom digital strategies, analyzing each platform’s importance to business performance, and determining what improvements to current applications could enhance the experience further.'}/>
    </div>
  )
}

const Service = (props)=>{
  return(
    <div className='service'>
      <img src={props.img} style={{width:45}}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
  </div>
  )
  
}








export class Services extends React.Component{
  render(){
    return(
      <div className='view' id='services-view'>
          <div id='services-content'>
            <WhatWeDo idey='jawny1' service={['UX, UI, Art Direction', 'Mobile, Web, Emerging Tech', 'Backend & API Development']} title={`Creating`} description={"We design applications, social media experiences, and marketing campaigns aimed at making great user experience a part of your brand in the eyes of users, and extending your vision, culture and spirit."} icon={'./src/styles/icons/svg/027-social-media.svg'}/>
            <WhatWeDo idey='jawny2' service={['Design & Optimization', 'Technical Infrastructure', 'Testing, Data Analytics']} title={'Integrating'} description={'We prioritize the collection of useful data in designing compelling customer experiences. Adding science to the art moves you from guesswork to inspired predictions, using metrics and analytics to inform decisions.'} icon={'./src/styles/icons/svg/001-statistics.svg'} noBorder={0}/>
            <WhatWeDo idey='jawny3' service={['Research & Product Strategy', 'Prototyping & Validation', 'Solutions Architecture']} title={'Strategizing'} description={"We develop custom digital strategies, analyzing each platform’s importance to business performance, and determining what improvements to current applications could enhance the experience further."} icon={'./src/styles/icons/svg/023-research.svg'}/>
          </div>
          <a href='/digital_matters' onClick={()=>{this.props.appState.scrollHeader(); console.log(this.props)}}></a>
      </div>
    )
  }

}

export class WhatWeDo extends React.Component{
  render(){
    return(
      <div className='services-div' id={this.props.idey} style={{border: this.props.noBorder}}>
        <h1 className='services-title'>{this.props.title}</h1>
        <p className='services-description-text'>{this.props.description}</p>
        <div id='services-service-div'>
          <p className='services-service-text' >{this.props.service[0]}</p>
          <p className='services-service-text'>{this.props.service[1]}</p>
          <p className='services-service-text'>{this.props.service[2]}</p>
        </div>
      </div>
    )
  }
  componentDidMount(){

    if(window.innerWidth > 0){
      window.addEventListener('scroll', (event)=>{
        (window.pageYOffset > 0) ? document.getElementById('jawny1').style.opacity=1: document.getElementById('jawny1').style.opacity=0;
        (window.pageYOffset > 0) ? document.getElementById('jawny2').style.opacity=1: document.getElementById('jawny2').style.opacity=0;
        (window.pageYOffset > 0) ? document.getElementById('jawny3').style.opacity=1: document.getElementById('jawny3').style.opacity=0;
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
