import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom'

import './App.css'

import { firebase } from './firebase'

import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';


firebase.auth().onAuthStateChanged((user) => {
    const app = (
        <BrowserRouter>
            <App user={user} />
        </BrowserRouter>
    )

    ReactDOM.render(app, document.getElementById('root'));

})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA