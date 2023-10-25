import React from "react";
import { createRoot } from "react-dom";

import App from './App';
import './index.css';
import 'react-tooltip/dist/react-tooltip.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />)