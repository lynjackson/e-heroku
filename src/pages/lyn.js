import React from 'react';
import {HeaderMobile, HeaderDesktop} from '../components/header';
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import '../styles/lyn/lyn.css'
import '../styles/pages.css'
import {ContactLink} from '../components/lyn/contact-link'
import {Profile_Mobile, Profile, Stack, Portfolio, Experience, Education, More} from '../components/lyn/lyn-components'
import {Stack_Mobile, Stack_Desktop} from '../components/lyn/stack'
import {Portfolio_Mobile, Portfolio_Desktop} from '../components/lyn/portfolio'
// import {Experience, Experience_Desktop} from '../components/lyn/experience'
// import {Education} from '../components/lyn/education';
// import {More} from '../components/lyn/more';


export const Lyn2 = ()=>{
  return(
    <div id='lyn-page'>
      <Profile />
      <Stack />
      <Portfolio />
      <Experience />
      <Education />
      <More />
    </div>
  )
}





class Lyn extends React.Component{
  constructor(){
    super();
    this.state={
      change: 0,
    }
  }
  render(){
    if(window.innerWidth < 1024){
      return (
        <div id='page_lyn'>
          {/* {(window.innerWidth >= 1024) ? <HeaderDesktop appState={this.props}>
            <p style={{color:'white', fontFamily:'poppins', fontSize:'1.149em', fontWeight:100}}>+</p>
            <p style={{color:'white', fontFamily:'poppins', fontSize:'1.187em', fontWeight:100, }}>vision</p>
          </HeaderDesktop> : <HeaderMobile appState={this.props}/>} */}
          {/* <Profile_Mobile /> */}
          <Profile />
          {/* <Stack_Mobile />
          <Portfolio_Mobile />
          <Experience />
          <Education />
          <More /> */}
        </div>
      )
    }
    else if(window.innerWidth >= 1024){
      return(
        <div id='page_lyn'>
          {(window.innerWidth >= 1024) ? <HeaderDesktop appState={this.props}>
            <p style={{color:'white', fontFamily:'poppins', fontSize:'1.149em', fontWeight:100}}>+</p>
            <p style={{color:'white', fontFamily:'poppins', fontSize:'1.187em', fontWeight:100, }}>people</p>
          </HeaderDesktop> : <HeaderMobile appState={this.props}/>}
          <div id='left-side_lyn'>
            <Profile_Mobile/>
            <Stack_Desktop/>
            <Education />
          </div>
          <div id='right-side_lyn'>
            <Portfolio_Desktop/>
            <Experience_Desktop />
            <More />
          </div>
        </div>
      )
    }

  }

  componentDidMount(){
    this.props.scrollHeader();
    window.addEventListener('resize', ()=>{
      this.setState({change:this.state.change + 1})
    })
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
	return bindActionCreators({ selector: selectBook, overlay: overlay, valueNextPage: valueNextPage, valuePrevPage: valuePrevPage, defaultView: defaultView, defaultHeader: defaultHeader, invertHeader: invertHeader, menuHeader: menuHeader, scrollHeader: scrollHeader,  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Lyn)
