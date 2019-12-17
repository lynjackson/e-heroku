import React from 'react';
import {HeaderMobile, HeaderDesktop} from '../components/header';
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import '../styles/people.css'

export class People extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div id='page_about' style={{height:'100vh'}}>
        {(window.innerWidth >= 1024) ? <HeaderDesktop appState={this.props}>
          <p style={{color:'white', fontFamily:'poppins', fontSize:'1.149em', fontWeight:100}}>+</p>
          <p style={{color:'white', fontFamily:'poppins', fontSize:'1.187em', fontWeight:100, }}>people</p>
        </HeaderDesktop> : <HeaderMobile appState={this.props}/>}

        <div  id='content_people'>
          <a href='/lyn' id='person1-icon_people'>
            <div id='person1-image_people'></div>
            <p id='name_people'>Lyn Jackson</p>
            <p id='role_people'>UI Developer</p>
          </a>
          <p id='page_people'>Page 1/1</p>
        </div>

      </div>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(People)
