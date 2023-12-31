import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';
import './styles/todo-list.scss';
import './styles/filters.scss';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';

ReactDOM.render(
  <Router>
    <Routes>
      <Route>
        <Route index element={<App />} />
        <Route path=":filter" element={<App />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root'),
);
