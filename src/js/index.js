import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import selections from './reducers/selections';
import App from './components/App';

let store = createStore(selections,
	window.devToolsExtension ? window.devToolsExtension() : undefined
);

// For testing, so that the app gets added to PhantomJS DOM
const entryId = 'app';
const appEntry = document.getElementById(entryId);

if (!appEntry) {
	const newDiv = document.createElement('div');
	newDiv.id = entryId;
	document.body.appendChild(newDiv);
}

if (typeof window !== 'undefined') {
	window.React = React;
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(entryId)
);
