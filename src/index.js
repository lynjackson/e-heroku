import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './pages/front-page'
import Values from './pages/values';
import {William} from './pages/william';
import DigitalMatters from './pages/digital-matters'
import './styles/project.css'
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
      <Route exact='true' path='/' component={FrontPage}/>
      <Route exact='true' path='/values' component={Values}/>
      <Route exact='true' path='/digital-matters' component={DigitalMatters}/>
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
//     <Route exact='true' path='/digital_matters' component={DigitalMatters}/>
//     <Route exact='true' path='/billy_boy' component={William}/>
//   </div>
// </BrowserRouter>
