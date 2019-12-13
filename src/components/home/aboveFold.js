import React from 'react';
import arrow from '../../styles/images/arrow2.png'


class AboveFold extends React.Component{

  render(){
    console.log(this.props);
      return(
        <div id='above-fold' onClick={()=>{this.props.props.overlay(); console.log(this.props)}} style={{display: this.props.appState.view.aboveFold,}}>
          <p id='above-title' style={{transition: 'opacity 1s'}}>Digital products & strategies for modern companies.</p>
          <div id='arrow-div' onClick={()=>{window.scrollTo({top:document.getElementById('above-fold').offsetHeight -100, behavior: 'smooth'})}}><img src={arrow} id='down-arrow' style={{width:16, height:16, opacity:(window.pageYOffset === 0)? 1: 0, transition:'opacity .5s'}} /></div>
        </div>
      )
}
componentDidMount(){

  window.addEventListener('scroll', (event)=>{
    (window.pageYOffset > 30) || document.getElementById('matters-view') ? this.props.appState.scrollHeader() : this.props.appState.defaultHeader();
  })
  window.addEventListener('scroll', (event)=>{
    (window.pageYOffset > 0) ? document.getElementById('above-title').style.opacity = .2: document.getElementById('above-title').style.opacity = 1
  })
}
}

export default AboveFold;
