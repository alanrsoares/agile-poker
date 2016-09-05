import { createStore, applyMiddleware, compose } from 'redux';
import sagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas/index';

const finalCreateStore = compose(
	applyMiddleware(sagaMiddleware(rootSaga))
)(createStore);

export default function configureStore(initialState) {
	return finalCreateStore(rootReducer, initialState);
}
