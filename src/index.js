import React from 'react';
import ReactDOM from 'react-dom';
import {Home2} from './pages/home'
// import Values from './pages/values';
// import Values3 from './pages/values3';
import {Values} from './pages/values2';
import {Bill} from './pages/bill';
import {BillApp_Mobile, BillApp_Desktop} from './pages/bill_app';
// import About from './pages/about'
import Vision from './pages/vision'
import Lyn, {Lyn2} from './pages/lyn'
import People from './pages/people'
import './styles/css/app.css'
import './styles/css/pages.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {BrowserRouter, Route} from 'react-router-dom'
import{Header2} from './components/header.js'
// import { values } from './actions';


// const what = import('./pages/values').then((values)=>{return values.default})



ReactDOM.render(
	<Provider store={createStore(reducers)}>
	  <BrowserRouter>
	    <div id='routes'>
	      <Route path='/' component={Header2} />
			<Route exact='true' path='/' component={Home2}/>
			<Route exact='true' path='/values' component={Values}/>
			<Route exact='true' path='/vision' component={Vision} />
			<Route exact='true' path='/bill_q' component={Bill}/>
			<Route exact='true' path='/bill_app' component={BillApp_Mobile}/>
			<Route exact='true' path='/lyn' component={Lyn2}/>
			<Route exact='true' path='/people' component={People}/>
	    </div>
	  </BrowserRouter>
	</Provider>,
	document.getElementById('app')
)
