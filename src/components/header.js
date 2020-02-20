import React, {useState, useEffect, useCallback} from 'react';
import '../styles/home/home.css';
import '../styles/css/header.css';
import '../styles/css/header2.css';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import ethey from '../assets/icons/header/logo.png';
import menuButton from '../assets/icons/header/menu.png'
import plus from '../assets/images/plus-sign.png';

export class HeaderMobile extends React.Component {

  render(){
    console.log(this.props);
      return(
        <div id='header' onresize={()=>{this.setState()}} style={(window.pageYOffset === 0 && document.getElementById('above-fold'))?{backgroundColor:this.props.appState.header.backgroundColor, height: this.props.appState.header.headerHeight}:{backgroundColor:this.props.appState.header.backgroundColor, height:this.props.appState.header.headerHeight}}>
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
              <img src={menuButton} id='menu-button_header' />
              {/* <hr className='menu-line' />
              <hr className='menu-line' />
              <hr className='menu-line' /> */}
            </div>

          </div>

          <div id='overlay-content' style={{display:this.props.appState.header.display, opacity:setTimeout(()=>{return this.props.appState.header.opacity}, 3000), zIndex:-10}}>
              <a href='/' className='over-lay-link' onClick={()=>{this.props.appState.front()}}>Home</a>
              <hr className='over-lay-line' />
              <a href='/digital-matters' className='over-lay-link'>Vision</a>
              <hr className='over-lay-line' />
              <a href='/values' className='over-lay-link' onClick={()=>{this.props.appState.values()}}>Values</a>
              <hr className='over-lay-line' />
              <a href='/people' className='over-lay-link'>People</a>


            </div>

        </div>

      )
    }
  }




export class HeaderDesktop extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // backgroundColor: 'rgba(26,26,26,1)',
      // textColor:'white',
      // invert: 'invert(1)'
    }
  }

  render(){
    console.log(this.props);
      return(
        <div id='header' style={{backgroundColor: this.state.backgroundColor}}>
          <div id='header-items'>
            <div id='logo-div_header'>
              <a id='ethe-home-link' href='/' style={{display: 'flex', width: 'auto', height: 'auto',  position: 'relative'}}>
                  <img src={ethey} id='e'  onClick={()=>{this.props.appState.defaultView()}} style={{filter:this.state.invert}}/>
              </a>
              {this.props.children}
            </div>

              <div id='header-links-div'>
                <a className='header-link' style={{color:this.state.textColor}} href='/digital-matters'><p>Vision</p></a>
                <a className='header-link' style={{color:this.state.textColor}} href='/values'><p>Values</p></a>
                <a className='header-link' style={{color:this.state.textColor}} href='/people'><p>People</p></a>
              </div>

          </div>
        </div>

      )
    }

    componentDidMount(){

      (document.getElementById('home') && window.pageYOffset === 0) ? this.setState({textColor:'black', invert:'invert(0)', backgroundColor:'rgba(26,26,26, 0)'}) : this.setState({textColor:'white', invert:'invert(1)', backgroundColor:'rgba(26,26,26,1)'});

      window.addEventListener('scroll', ()=>{
        (document.getElementById('home') && window.pageYOffset === 0) ? this.setState({textColor:'black', invert:'invert(0)', backgroundColor:'rgba(26,26,26, 0)'}) : this.setState({textColor:'white', invert:'invert(1)', backgroundColor:'rgba(26,26,26,1)'})
      })

      document.getElementsByTagName('body')[0].addEventListener('load', ()=>{
        (window.pageYOffset > 0 && document.getElementById('home')) ? this.setState({textColor:'black', invert:'invert(0)', backgroundColor:'rgba(26,26,26,0)'}) : this.setState({textColor:'white', invert:'invert(1)', backgroundColor:'rgba(26,26,26,1)'})
      })

      // document.getElementsByClassName('header-link').addEventListener('scroll', ()=>{
      //   (document.getElementById('home') && window.pageYOffset > 0) ? this.setState({textColor:'white', invert:'invert(0)'}) : this.setState({textColor:'black', invert:'invert(1)'})
      // })

      // document.getElementById('menu-icon-circle').addEventListener('click', (event)=>{this.props.appState.view.overlay === 'none' ? this.props.appState.overlay():this.props.appState.defaultView(); event.stopPropagation()})

      // window.addEventListener('scroll', (event)=>{
      //   (window.pageYOffset > window.innerHeight -100) ? this.props.appState.scrollHeader(): this.props.appState.defaultHeader();
      // })
// backgroundColor:(window.pageYOffset > window.innerHeight)?'white':'rgba(0,0,0,0)'

      // document.getElementById('e').addEventListener('click', (event)=>{this.props.appState.front(); event.stopPropagation()})
    }
}


export const PageTitle = (props)=>{
  return(
    <div id='div_PageTitle'>
      <p id='title_PageTitle'>{props.title}</p>
    </div>
  )
}







export const Header2 = ()=>{
  
  const [headerBackground, setBack] = useState((window.location.pathname === '/' && window.pageYOffset < 5) ? 'white' : 'black')
  const [logoInvert, setInvert] = useState('invert(0)')
  const [headerHeight, setHeight] = useState(75)
  // ^ Setting...

  useEffect(()=>{
    window.addEventListener('scroll', (e)=>{
      if (window.location.pathname==='/' && window.pageYOffset < 5){
        setBack('white')
        setInvert('invert(0)')
      }
      else{
        setBack('black')
        setInvert('invert(1)')
      }      
    })

    document.getElementById('header2').addEventListener('wheel', (e)=>{
      if(headerHeight === '100vh'){ e.preventDefault() }
    })
  })
  
  return (
    <div id='header2' style={{backgroundColor: headerBackground, height: headerHeight}}>
      
      <div id='header-items2'>
        <Link to='/'><img src={ethey} id='logo2' style={{filter: logoInvert}} /></Link>
        <img src={menuButton} id='menu2' onClick={()=>{
          if(headerHeight === '100vh'){
            setHeight(75)
         }
         else{
            setHeight('100vh')
         }
        }}/>
      </div>
      
      <div id='nav-options'>
        <Link to='/digital-matters' className='nav-option' onClick={()=>{setHeight(75); setBack('black')}}>Vision</Link>
        <Link to='/digital-matters' className='nav-option' onClick={()=>{setHeight(75); setBack('black')}}>Values</Link>
        <Link to='/digital-matters' className='nav-option' onClick={()=>{setHeight(75); setBack('black')}}>People</Link>
      </div>
    </div>
  )
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
