// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'; // Optional, for global styles

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root') 
// );
// ✅ After (React 18)
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot instead of ReactDOM.render
root.render(<App />);
