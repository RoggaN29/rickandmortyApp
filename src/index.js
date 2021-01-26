import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './router/AppRouter';
import 'animate.css/animate.min.css';
import './styles/styles.scss'

ReactDOM.render(
    <AppRouter/>,
    document.getElementById('root')
);