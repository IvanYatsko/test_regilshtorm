import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './App.scss';
import { Router } from './routes/Routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default App;
