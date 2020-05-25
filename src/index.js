import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from './store/configureStore'
import ReduxToastr from 'react-redux-toastr';

store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <PersistGate persistor={persistor} >
  <Provider store={store}>
    <ReduxToastr
      timeout={4000}
      newestOnTop={true}
      position="top-right"
      getState={(state) => state.toastr} // This is the default
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick />
    <Router>
      <App />
    </Router>,
  </Provider>,    
  </PersistGate>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
