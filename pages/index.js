import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from '../src/pages/front-page'
import Values from '../src/pages/values';
import {William} from '../src/pages/william';
import DigitalMatters from '../src/pages/digital-matters'
import '../src/styles/project.css'
import '../src/styles/matters.css'
import '../src/styles/values.css'
import '../src/styles/overlay.css'
import '../src/styles/header.css'
import '../src/styles/contact.css'
import '../src/styles/main.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import {BrowserRouter, Route} from 'react-router-dom'
// import { values } from './actions';


// const what = import('../src/pages/values').then((values)=>{return values.default})
// if (typeof window !== 'undefined') {
// 	ReactDOM.render(
// 		<Provider store={createStore(reducers)}>
// 		  <FrontPage/>
// 		</Provider>,
//
// 		document.getElementById('app')
// 	)
// }

const Whatever = (typeof window !== 'undefined') ? ()=>{ return( <Provider store={createStore(reducers)}> <FrontPage/> </Provider> ) } : ()=>{ return( <Provider store={createStore(reducers)}> <div>text</div> </Provider> ) }




// if (typeof window !== 'undefined') {
// 	const Whatever =()=>{
// 	  return(
// 					<Provider store={createStore(reducers)}>
// 					  <FrontPage/>
// 					</Provider>
// 	  )
// 	}
// } else{
// 	const Whatever = ()=>{
// 		return(
// 					<Provider store={createStore(reducers)}>
// 						<div>text</div>
// 					</Provider>
// 		)
// 	}
// }

export default Whatever;


// <BrowserRouter>
//   <div id='routes'>
//     <Route exact='true' path='/' component={FrontPage}/>
//     <Route exact='true' path='/values' component={Values}/>
//     <Route exact='true' path='/digital_matters' component={DigitalMatters}/>
//     <Route exact='true' path='/billy_boy' component={William}/>
//   </div>
// </BrowserRouter>

// if (typeof window !== 'undefined') {
//     ReactDOM.render(<MainWrapper />, document.getElementById("root"));
// }



// <BrowserRouter>
// 	<div id='routes'>
// 		<Route exact='true' path='/' component={FrontPage}/>
// 		<Route exact='true' path='/values' component={Values}/>
// 		<Route exact='true' path='/digital_matters' component={DigitalMatters}/>
// 		<Route exact='true' path='/billy_boy' component={William}/>
// 	</div>
// </BrowserRouter>
