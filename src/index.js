import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home'
// import Values from './pages/values';
import Values3 from './pages/values3';
import {Bill} from './pages/bill';
import {BillApp_Mobile, BillApp_Desktop} from './pages/bill_app';
import About from './pages/about'
import About1024 from './pages/about_1024'
import Lyn from './pages/lyn'
import People from './pages/people'
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
	      <Route exact='true' path='/bill_q' component={Bill}/>
				<Route exact='true' path='/bill_app' component={BillApp_Mobile}/>
				<Route exact='true' path='/lyn' component={Lyn}/>
				<Route exact='true' path='/people' component={People}/>
	    </div>
	  </BrowserRouter>
	</Provider>,
	document.getElementById('app')
)
