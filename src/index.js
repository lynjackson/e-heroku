import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home'
// import Values from './pages/values';
import Values3 from './pages/values3';
import {William} from './pages/william';
import About from './pages/about'
import About1024 from './pages/about_1024'
import './styles/app.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {BrowserRouter, Route} from 'react-router-dom'
// import { values } from './actions';


// const what = import('./pages/values').then((values)=>{return values.default})



ReactDOM.render(
	<Provider store={createStore(reducers)}>
	  <BrowserRouter>
	    <div id='routes'>
	      <Route exact='true' path='/' component={Home}/>
	      <Route exact='true' path='/values' component={Values3}/>
	      <Route exact='true' path='/digital-matters' component={About1024} />
	      <Route exact='true' path='/billy_boy' component={William}/>
	    </div>
	  </BrowserRouter>
	</Provider>,
	document.getElementById('app')
)

// const Whatever =()=>{
//   return(
//     <div>text</div>
//   )
// }
//
// export default Whatever;

// <BrowserRouter>
//
//   <div id='routes'>
//     <Route exact='true' path='/' component={FrontPage}/>
//
//   </div>
// </BrowserRouter>


// <BrowserRouter>
//   <FrontPage />
//   <div id='routes'>
//     <Route exact='true' path='/' component={FrontPage}/>
//     <Route exact='true' path='/values' component={Values}/>
//     <Route exact='true' path='/digital_matters' component={About}/>
//     <Route exact='true' path='/billy_boy' component={William}/>
//   </div>
// </BrowserRouter>
