import React from 'react';
import '../styles/values.css';
import '../styles/overlay.css';
import Header from '../components/header';
import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, invertHeader, menuHeader, defaultHeader, valuesHeader } from '../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
//imports function needed to access redux state object
import arrow from '../styles/images/arrow.png'

class Values extends React.Component{
  constructor(props){
    super(props);
    this.state={
      values:
        {
          title: this.props.values.title,
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          background: 'black',
          color:'white',
          invert: 1
        }
  }
  }

  render(){
    console.log(this.props)
    const valuesArray = this.state.values;
    const counter = this.state.counter;

    return(
      <div id='value-page' >
        <Header appState={this.props} invert={'1'}/>
        <Overlay display={this.props.overlay.display} appState={this.props}/>
        <div id='value-content' style={{backgroundColor:`hsla(${this.props.values.backgroundColorValue}, 50%, 7.5%, 1)`, color: this.props.values.textColor}}>
          <div className='value-value'>
            <h2 id='value-title'>{this.props.values.title}</h2>
            <p id='value-text' key={this.props.values.text}>{this.props.values.text}</p>
          </div>
          <div id='values-arrow-div'><p>{this.props.values.page+1} of 7</p><img src={arrow} style={{filter:'invert(1)', transform: 'rotate(180deg)', width: 30, left: 3, position: 'relative', top:72}}/></div>
        </div>
        <iframe scrolling='no' style={{width:375, position: 'relative', height: 670,}} src="https://appetize.io/embed/tq08t4qj50qjtmgg716hn6jut4?autoplay=false&amp;debug=true&amp;device=iphone8&amp;deviceColor=black&amp;embed=true&amp;orientation=portrait&amp;scale=100&amp;screenOnly=true&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fbillrestaurant-iosapp%2B!UuTA77p!%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe>
      </div>
    )
  }

  // <img src='src/styles/images/arrow.png' id='learn-arrow-back'/>
  // <img src='src/styles/images/arrow.png' id='learn-arrow-forward'/>

  componentDidMount(){

    const funky = ()=>{
      if(event.deltaY > 0 && this.props.values.page < 6){
        this.props.valueNextPage()

      }
      if(event.deltaY < 0 && this.props.values.page > 0){

        this.props.valuePrevPage()
      }
      // ((event.deltaY > 0 && this.props.values.page < 3)) ? this.props.valueNextPage() : this.props.valuePrevPage()
      document.getElementById('value-page').removeEventListener('wheel', funky)
      this.setState({})
      setTimeout(()=>{document.getElementById('value-page').addEventListener('wheel', funky)}, 500)

    }

    this.props.invertHeader();

    document.getElementById('value-page').addEventListener('wheel', funky)


    let xey = [];

    document.getElementById('value-page').addEventListener('touchmove', (e)=>{
      xey.push(e.touches[0].pageY);
      console.log(xey);
      e.preventDefault();
      document.getElementById('value-page').addEventListener('touchend', (e)=>{
        if (xey[xey.length - 1] < xey[0]){
          this.props.valueNextPage()
          this.setState({})
        }
        else if (xey[xey.length - 1] > xey[0]){
          this.props.valuePrevPage()
          this.setState({})
        }
        xey = [];
      });

    });



    const touchy = ()=>{

    }


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


export default connect(mapStateToProps, mapDispatchToProps)(Values)

// export default Values;
