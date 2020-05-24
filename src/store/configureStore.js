import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index'
 
const persistConfig = {
  key: 'cartReducer',
  storage: storage,
  whitelist: ['cartReducer']
}

const middlewares = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(), applyMiddleware(...middlewares))
const persistor = persistStore(store)

export {store, persistor}
