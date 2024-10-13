// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import 'bootstrap/dist/css/bootstrap.min.css';                      // bootstrap..//






// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ProductMaster from './Container/Pages/ProductMaster';
// import './index.css'; // Add your global CSS or reset styles here

// ReactDOM.render(
//     <React.StrictMode>
//         <ProductMaster />
//     </React.StrictMode>,
//     document.getElementById('root')
// );



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'; // Include your global styles if necessary
// import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Include your global styles if necessary
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';          // jj add kel 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
