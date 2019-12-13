import React from 'react';
import '../styles/values.css';
// import '../styles/overlay.css';
import {HeaderMobile, HeaderDesktop} from '../components/header';
// import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, invertHeader, menuHeader, defaultHeader, valuesHeader } from '../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
//imports function needed to access redux state object
import arrow from '../assets/images/arrow2.png'
import {PageTitle} from '../components/header';

class Values2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:['open', 'serve', 'evaluate', 'experience', 'renounce', 'enjoy', 'whatever'],
      text:[
        'Only by embracing the unknown and staying open are we free to find solutions we can’t initially imagine.',
        'We try to empathize with the experiences of others, and help out where we can.',
        'We regularly assess the productive value of things and adjust accordingly. We’re not that cool with convention.',
        'Experience is all we really have. We don’t take our’s or others’ lightly.',
        'We live for the process more than the result. And somehow, the result is usually better for it.',
        'We try to find joy in whatever we do.',
        'Whateverrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.'
      ],
      counter:0,
    }
  }

  render(){
    console.log(this.props)
    const valuesArray = this.state.values;
    const counter = this.state.counter;

    return(
      <div id='value-page' >
      {(window.innerWidth >= 1024) ? <HeaderDesktop appState={this.props}>
        <p style={{color:'white', fontFamily:'poppins', fontSize:'1.149em', fontWeight:100}}>+</p>
        <p style={{color:'white', fontFamily:'poppins', fontSize:'1.187em', fontWeight:100, }}>vision</p>
      </HeaderDesktop> : <HeaderMobile appState={this.props}/>}

        <div id='value-content'>

          <div id='value-value'>
            <p id='value-title' key={this.state.title[counter]}>{this.state.title[counter]}</p>
            <p id='value-text' key={this.state.text[counter]}>{this.state.text[counter]}</p>

            <div id='value-circles' style={{zIndex:30, display:'flex', justifyContent:'space-between', width:143, }}>
              <div onClick={()=>{this.setState({counter:0})}} id='circle0' style={{border:'1px solid white', width:8.14, height: 8.14, borderRadius:'50%', backgroundColor:(this.state.counter === 0) ? 'rgba(255,255,255,1)' :  'rgba(255,255,255,0)'}}></div>
              <div id='circle1' style={{border:'1px solid white', width:8.14, height: 8.14, borderRadius:'50%', backgroundColor:(this.state.counter === 1) ? 'rgba(255,255,255,1)' :  'rgba(255,255,255,0)'}}></div>
              <div onClick={()=>{this.setState({counter:2})}} style={{zIndex:30, border:'1px solid white', width:8.14, height: 8.14, borderRadius:'50%', backgroundColor:(this.state.counter === 2) ? 'rgba(255,255,255,1)' :  'rgba(255,255,255,0)'}}></div>
              <div id='circle3' style={{border:'1px solid white', width:8.14, height: 8.14, borderRadius:'50%', backgroundColor:(this.state.counter === 3) ? 'rgba(255,255,255,1)' :  'rgba(255,255,255,0)'}}></div>
              <div id='circle4' style={{border:'1px solid white', width:8.14, height: 8.14, borderRadius:'50%', backgroundColor:(this.state.counter === 4) ? 'rgba(255,255,255,1)' :  'rgba(255,255,255,0)'}}></div>
              <div id='circle5' style={{border:'1px solid white', width:8.14, height: 8.14, borderRadius:'50%', backgroundColor:(this.state.counter === 5) ? 'rgba(255,255,255,1)' :  'rgba(255,255,255,0)'}}></div>
              <div id='circle6' style={{border:'1px solid white', width:8.14, height: 8.14, borderRadius:'50%', backgroundColor:(this.state.counter === 6) ? 'rgba(255,255,255,1)' :  'rgba(255,255,255,0)'}}></div>
            </div>

            <img src={arrow} onClick={()=>{(this.state.counter < 6) ?  this.setState({counter: this.state.counter + 1}): null }} style={{filter:'invert(1)',  width: 16, left: 3, position: 'relative',}} />

          </div>
        </div>

      </div>
    )
  }

  // <img src='src/styles/images/arrow.png' id='learn-arrow-back'/>
  // <img src='src/styles/images/arrow.png' id='learn-arrow-forward'/>

// <iframe scrolling='no' style={{width:375, position: 'relative', height: 670,}} src="https://appetize.io/embed/tq08t4qj50qjtmgg716hn6jut4?autoplay=false&amp;debug=true&amp;device=iphone8&amp;deviceColor=black&amp;embed=true&amp;orientation=portrait&amp;scale=100&amp;screenOnly=true&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fbillrestaurant-iosapp%2B!UuTA77p!%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe>

  componentDidMount(){
    window.addEventListener('scroll',()=>{
      this.setState({counter: this.state.counter + 1})
    })

    window.addEventListener('keyup',(e)=>{
      if ((e.keyCode === 40|| e.keyCode ===39) && this.state.counter < 6){
        this.setState({counter: this.state.counter + 1})
      }
      else if ((e.keyCode === 37|| e.keyCode ===38) && this.state.counter > 0){
        this.setState({counter: this.state.counter - 1})
      }
    })

    // setTimeout(()=>{
    //   window.addEventListener('wheel', (e)=>{
    //     this.setState({counter: this.state.counter + 1})
    //     console.log(this.state.counter)
    //     })
    //     window.removeEventListener('wheel', ()=>{
    //       this.setState({counter: this.state.counter + 1})
    //     // console.log(e.deltaY)
    //
    //   })
    // }, 2000)



    this.props.invertHeader();

}
}

function mapStateToProps(state){
  return{
    books: state.books,
    view: state.view,
    values: state.values,
    header: state.header
  }
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ selector: selectBook, overlay: overlay, valueNextPage: valueNextPage, valuePrevPage: valuePrevPage, menuHeader:menuHeader, valuesHeader:valuesHeader, defaultHeader:defaultHeader, defaultView: defaultView, invertHeader:invertHeader}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Values2)

// export default Values;
