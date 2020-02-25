import { createStore } from 'redux';
import rootReducer from './reducers';

export default createStore( rootReducer, {}, window.devToolsExtension ? window.devToolsExtension() : f => f );