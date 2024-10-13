
// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // import TopBar from "../../../Components/TopBar";            // jj add kel
// // import Sidebar from "../../../Components/Sidebar";          // jj add kel
// // import ProductCRUD from "../../../Components/ProductCrud";  // jj add kel

// // import Products from "../../../Components/Products";        // jj add kel
// import Orders from "../../../Components/Orders";            // jj add kel
// import Customers from "../../../Components/Customers";
//  import ProductCRUD from "../../../Components/ProductCrud";

// const Routers = () => {
//     return <>
//         <Routes>

//             <Route path="/ProductCRUD" element={<ProductCRUD />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/customers" element={<Customers />} />
//             {/* <Route path="/" element={<Products />} /> */}

//         </Routes>
//     </>


// };

// export default Routers;



// ********************************************************************************************************//

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// import TopBar from './Components/TopBar';
import TopBar from "../../../Components/TopBar";
// import Sidebar from './Components/Sidebar';
import Sidebar from "../../../Components/Sidebar";
// import ProductCRUD from './Components/ProductCRUD';
import ProductCRUD from '../../../Components/ProductCRUD';
// import Customers from './Components/Customers';
import Customers from '../../../Components/Customers';
// import Orders from './Components/Orders';
import Orders from '../../../Components/Orders';

const Router = () => {
    return (
        // <Router>
        <div className="d-flex flex-column">
            <TopBar />
            <div className="d-flex">
                <Sidebar />
                <div className="container">
                    <Routes>
                        <Route path="/products" element={<ProductCRUD />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/orders" element={<Orders />} />
                    </Routes>
                </div>
            </div>
        </div>
        // </Router>
    );
};
export default Router;