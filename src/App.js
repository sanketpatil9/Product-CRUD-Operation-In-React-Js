// src/App.js
import React from 'react';
import Routers from './Container/Pages/Router';
// import TopBar from './Components/TopBar';
// import Sidebar from './Components/Sidebar';
// import ProductCRUD from './Components/ProductCRUD';

// ***********************************************************************************//

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TopBar from './Components/TopBar';
// import Sidebar from './Components/Sidebar';
// import ProductCRUD from './Components/ProductCRUD';
// import Customers from './Components/Customers';
// import Orders from './Components/Orders';

// const App = () => {
//   return (
//     <Router>
//       <div className="d-flex flex-column">
//         <TopBar />
//         <div className="d-flex">
//           <Sidebar />
//           <div className="container">
//             <Routes>
//               <Route path="/products" element={<ProductCRUD />} />
//               <Route path="/customers" element={<Customers />} />
//               <Route path="/orders" element={<Orders />} />



//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };
// export default App;



const App = () => {

  return (
    <div className="App">

      <div>
        {/* <TopBar/>
        <Sidebar/>
        <ProductCRUD/> */}
        <Routers />
      </div>


    </div>
  );
}

export default App;
