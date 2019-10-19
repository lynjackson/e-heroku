import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './components/front-page'
import Values from './components/values';
import {William} from './components/william';

import DigitalMatters from './components/digital-matters'
import './styles/project.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {BrowserRouter, Route} from 'react-router-dom'
// import { values } from './actions';


const what = import('./components/values').then((values)=>{return values.default})

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<BrowserRouter>
			<div id='routes'>
				<Route exact='true' path='/' component={FrontPage}/>
				<Route exact='true' path='/values' component={Values}/>
				<Route exact='true' path='/digital_matters' component={DigitalMatters}/>
				<Route exact='true' path='/billy_boy' component={William}/>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)
