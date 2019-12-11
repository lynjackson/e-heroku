import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './pages/front-page'
import Values from './pages/values';
import {William} from './pages/william';
import DigitalMatters from './pages/digital-matters'
import './styles/app.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {BrowserRouter, Route} from 'react-router-dom'



ReactDOM.render(
	<Provider store={createStore(reducers)}>
	   <DigitalMatters/>
	</Provider>,
	document.getElementById('app')
)
