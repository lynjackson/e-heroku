import React from 'react';
import '../styles/main.css';
import '../styles/header.css';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import ethey from '../styles/images/ethey2.png'

export default class Header extends React.Component {
  render(){
    console.log(this.props);
      return(
        <div id='header' style={(window.pageYOffset === 0 && document.getElementById('above-fold'))?{backgroundColor:this.props.appState.header.backgroundColor, height: this.props.appState.header.headerHeight}:{backgroundColor:this.props.appState.header.backgroundColor, height:this.props.appState.header.headerHeight}}>
          <div id='header-items'>
            <a href='/' style={{display: 'flex', width: 'auto', height: 'auto',  position: 'relative'}}>
                <img src={ethey} id='e'  onClick={()=>{this.props.appState.defaultView()}} style={{filter:this.props.appState.header.headerInvert,}}/>
            </a>

            {this.props.children}

            <div id='menu-div' style={{filter:this.props.appState.header.headerInvert}} onClick={(event)=>{
              if (document.getElementById('header').style.height > '10em'){
                this.props.appState.menuHeader();
              } else{
                if(window.pageYOffset > window.innerHeight || document.getElementById('matters-view')){
                  this.props.appState.scrollHeader();
                }else if (document.getElementById('value-page')){
                  this.props.appState.valuesHeader();
                }else{
                this.props.appState.defaultHeader();
                event.stopPropagation();
              }
            }}}>
              <hr className='menu-line' />
              <hr className='menu-line' />
              <hr className='menu-line' />
            </div>

          </div>

          <div id='overlay-content' style={{display:this.props.appState.header.display, opacity:setTimeout(()=>{return this.props.appState.header.opacity}, 3000), zIndex:-10}}>
              <a href='/' className='over-lay-link' onClick={()=>{this.props.appState.front()}}>Home</a>
              <hr className='over-lay-line' />
              <a href='/digital-matters' className='over-lay-link'>About</a>
              <hr className='over-lay-line' />
              <a href='/values' className='over-lay-link' onClick={()=>{this.props.appState.values()}}>Values</a>


            </div>

        </div>

      )
    }

    // <div id='header' style={(window.pageYOffset === 0 && document.getElementById('above-fold'))?{backgroundColor:this.props.appState.header.backgroundColor, height: this.props.appState.header.headerHeight}:{backgroundColor:this.props.appState.header.backgroundColor, height:this.props.appState.header.headerHeight}}>

    // <a href='/' style={{display: 'flex', width: 'auto', height: 'auto', top: 6, position: 'relative'}}>
    //   <div id='e-div'>
    //     <img src='./src/styles/images/ethey.png' id='e' onClick={()=>{this.props.appState.defaultView()}} style={{filter:this.props.appState.header.headerInvert,}}/>
    //   </div>
    //   <img src='./src/styles/images/triangle.png' id='triangle' onClick={()=>{this.props.appState.defaultView()}} style={{filter:this.props.appState.header.headerInvert, width: '10%', left:-3}}/>
    // </Link>

    componentDidMount(){

      // document.getElementById('menu-icon-circle').addEventListener('click', (event)=>{this.props.appState.view.overlay === 'none' ? this.props.appState.overlay():this.props.appState.defaultView(); event.stopPropagation()})

      // window.addEventListener('scroll', (event)=>{
      //   (window.pageYOffset > window.innerHeight -100) ? this.props.appState.scrollHeader(): this.props.appState.defaultHeader();
      // })
// backgroundColor:(window.pageYOffset > window.innerHeight)?'white':'rgba(0,0,0,0)'

      // document.getElementById('e').addEventListener('click', (event)=>{this.props.appState.front(); event.stopPropagation()})
    }
}

// onClick={()=>{this.props.appState.view.overlay === 'none' ? this.props.appState.overlay():this.props.appState.front()}}

// <a href='#'><img src='./src/styles/images/ethey.png' id='e' style={{filter:this.props.appState.view.header}}/></a>






// <ion-icon name={this.props.appState.view.menu} id='menu-icon' onClick={(event)=>{
//   if (document.getElementById('header').style.height > '10em'){
//     this.props.appState.menuHeader();
//   } else{
//     if(window.pageYOffset > window.innerHeight || document.getElementById('matters-view')){
//       this.props.appState.scrollHeader();
//     }else if (document.getElementById('value-page')){
//       this.props.appState.valuesHeader();
//     }else{
//     this.props.appState.defaultHeader();
//     event.stopPropagation();
//   }
// }}}
// style={{filter:this.props.appState.header.headerInvert}}></ion-icon>
