import React from 'react';
import art from '../../assets/images/pt_background.jpeg'
import bill_back from '../../assets/images/bill-background.jpeg'
import studio from '../../assets/images/studio.png'
import bill_logo from '../../assets/images/bill-logo.png'
import '../../styles/home/projects.css'


export class Projects extends React.Component {


  render(){
    return(
      <React.Fragment style={{position:'relative', cursor:'pointer'}}>
        <div id='projects-div' style={{opacity: 0, cursor: 'pointer'}}>
          <div id='bill' className='project-container' style={{backgroundImage: `url(${bill_back})`}}>
            <img className='project-logo' id='bill-logo' src={bill_logo} style={{filter:'invert(1)'}}/>
            <p className='project-text' style={{color:'white', backgroundColor:'rgba(0,0,0,.27)'}}>A better way to dine out</p>
          </div>
          <a href='https://studio.ljoconnor5.now.sh' id='ptouch' className='project-container' style={{backgroundImage: `url(${art})`, cursor:'pointer', textDecoration:'none'}}>
            <img className='project-logo' id='pt-logo' src={studio}/>
            <p className='project-text' id='pt-text_projects' style={{backgroundColor:'rgba(255,255,255,.27)'}}>The community creative space</p>
          </a>
        </div>
      </React.Fragment>

    )
}
componentDidMount(){
  window.addEventListener('scroll', (event)=>{
    (window.pageYOffset > 396)?document.getElementById('projects-div').style.opacity =1:document.getElementById('projects-view').style.opacity =0
  })



  // console.log(document.getElementById('header').style)



}
}
