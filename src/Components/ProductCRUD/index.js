import React, { useEffect, useState } from 'react';
// import productsData from '../../Constant/products.json';        // Data ch Constant kel nnnnnnnnnnnn
// import Constant from '../../Constant';
import { productsData } from '../../Constant';
// import Constant from '../../Constant/Product..json';
import { Snackbar, Alert } from '@mui/material';

const ProductCRUD = () => {
  const [products, setProducts] = useState([]);                                             // products: Products chi list store karnar.
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });                    // newProduct: New product chi details (name, price) store karnar.
  const [editingProduct, setEditingProduct] = useState(null);                               // editingProduct: Jo product edit hotoy, tyachya details store hotil. // सध्या edit होणारे product.
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });                   // snackbar: Success / error message display karaycha handler.  // React madhye, tumhala components dynamically handle karayche astat, mhanun Snackbar la state madhun manage kela jato.

  // Load products from JSON
  useEffect(() => {                                                             // Component render zhala ki, initial products load kartoy aapan. Products json madhun data get karto.
    setProducts(productsData);                                                  // Automatic Call: useEffect component render zhalyavar automatic run hota, jar tumhi dependency array khaali dila tar ekdaach.
  }, []);                                                                     // Manje empty array mhanjech, ha effect fakta first render (initial load) var execute hoel, mag punha nahi hoel. Example, page refresh hota ki products load hote.

  // Handle form input changes
  const handleInputChange = (event) => {                                        // handleInputChange: Form madhe je values user type karto, tyanchya states update karayche.   //  Jevha user form madhye kahi type karto, tyachya typing action la "event" mhantat. Ha event function madhe as a parameter pass hota, ani tyachya mule apan tya input field madhun user ne enter keleli mahiti (like textbox madhil text) gheu shakto.
    const { name, value } = event.target;                                       // Tumhi jithe const { name, value } = event.target lihilat, tithe apan object destructuring karat ahe. Mhanje apan event.target madhun directly name ani value properties extract karto.    // event.target.name: Form madhil input field cha name attribute gheto. Udaharan: Tumhi name="name" taklela attribute gheun to input field identify karto./    event.target.value: Input field madhe user je value type karto, ti gheto. Udaharan: Tumhi "Product X" type kelela asel tar te gheto.
    setNewProduct((prev) => ({ ...prev, [name]: value}));                      // ...prev: Yeh spread operator ahe, je tumcha purvicha object (prev mhanje newProduct state) cha sagla content gheun tyala copy karto.
  };              // name = "price" ➔ value = "150" ➔ ऑब्जेक्टमध्ये price: "150" असे होते.
                 //  name = "name" ➔ value = "Product A" ➔ ऑब्जेक्टमध्ये name: "Product A" असे होते.

  //जर event.target.name हे "price" असेल, तर [name] हा "price" होईल आणि त्याचे value event.target.value असेल.
  //म्हणजेच:
  //[name]: value => "price": 150
  //ह्या मुळे newProduct चे state { name: 'Product A', price: '150' } होईल.



  // Show Snackbar

  const showSnackbar = (message, severity = 'info') => {                // showSnackbar: Message display karaycha function ahe. // message parameter madhe je msg show krayche ahe te ahe ..//  // show snackbar la call add product fun madhun ani update/delete prodduct fun madhun hote..//
    setSnackbar({ open: true, message, severity });
  };

  // Handle Snackbar close
  const handleClose = () => {                                        // handleClose: Snackbar band karaycha handler.
    setSnackbar({ ...snackbar, open: false });  //  open ही key आहे आणि false हे value आहे.  // या specific object चे नाव नाही, कारण हे inline object expression आहे. तुम्ही याला setSnackbar function ला pass करत आहात:// Spread operator कॉपी करतो existing object मधील सर्व key-value pairs.
                                                    // Spread operator वापरताना, keys valid identifiers असल्यास quotes आवश्यक नाहीत.                                             
  };

  // Add new product
  const addProduct = () => {                                                    // Navin product add karayla ID generate karto (newId), ani existing products list madhe to new product add karto. //Form reset karto tyachya nantar, ani success message display karto.
    if (newProduct.name && newProduct.price) {
      const newId = products.length ? products[products.length - 1].id + 1 : 1;
      const newProd = { id: newId, ...newProduct };
      console.log("newProduct", newProd); // Log new product
      setProducts((prevProducts) => [...prevProducts, newProd]);
      setNewProduct({ name: '', price: '' }); // Reset form after adding
      showSnackbar('Product added successfully!', 'success');
    } else {
      showSnackbar('Please fill in all fields!', 'error');
    }
  };

  // Edit existing product
  const editProduct = (product) => {                    // Edit button click jhala ki, tya product chi details form madhe display hote.
    setEditingProduct(product);
    setNewProduct({ name: product.name, price: product.price });
  };

  // Update product
  const updateProduct = () => {                         // Update product chi logic aahe, jar editingProduct cha ID match jhala existing product madhe, tar tyala update karto ani navi details set karto.
    setProducts((prevProducts) =>         // ya madhe adhiche product ahet Product state madhun ithe ale te.. parameter through//
      prevProducts.map((prod) =>
        prod.id === editingProduct.id ? { ...prod, ...newProduct } : prod
      )
    );
    setEditingProduct(null);                // Reset after editing: Editing complete jhala ki setEditingProduct(null) kele jate, mhanje editing mode close jhala.
    setNewProduct({ name: '', price: '' });
    showSnackbar('Product updated successfully!', 'success');
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));                       // Product delete karnya sathi aapan filter method use karto. Jo product delete karaycha tyacha ID match jhala tar to list madhun remove hoto.
    showSnackbar('Record has been deleted!', 'error');
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', color: 'red' }}>Product CRUD Operations</h2>

      {/* Product Form */}
      <div className="mb-3" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '400px' }}>     {/* marginLeft:auto mins left side n automatic brobr size ghete and, marginRight:auto he right side ne automatic brobr size ghete. */}
        <input
          type="text"                   // type="text": He textbox "text" type sathi ahe. Yacha arth user ya madhye text type karu shakto. Aapan ithe product name enter karun ghenar ahe.
          name="name"                   // name sathi ahe ha textBox as mhnte to.,//name="name": Ha name attribute textbox la assign kelela ahe. Form submit kelyavar backend la samajel ki ha input field "name" hai, mhanjech ha textbox product name sathi ahe.
          placeholder="Enter Product Name"
          value={newProduct.name}           // newProduct chya state madhe janar ../ user j pn name takin te 
          onChange={handleInputChange}      // onChange={handleInputChange}: Ha ek event handler ahe. User textbox madhe kay type karto, tyaveli handleInputChange function call hoil. Yacha upyog state update karayla hotoy, mhanjech newProduct chi state tyachya adharane modify hote jaate.
          className="form-control mb-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Enter Product Price"
          value={newProduct.price}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        {editingProduct ? (                                                   // editingProduct madhe jr value takli user ne tr update product button disel.//
          <button className="btn btn-primary" onClick={updateProduct}>
            Update Product
          </button>
        ) : (
          <button className="btn btn-success" onClick={addProduct}>
            Add Product
          </button>
        )}
      </div>

      {/* Products Table */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => ( // Use item for product and index for position
            <tr key={item.id}> {/* Using item.id as key */}
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => editProduct(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Snackbar for feedback ithun snackbar disto */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductCRUD;



//******************************************************************************************************* */

// const [newProduct, setNewProduct] = useState({ name: '', price: '' });
// Ka ghetlay object madhe?
// Tumhala newProduct state madhe ekach state variable manage karaycha aahe jithe don fields — name and price — manage karta yetil. Object madhe tyanchya key-value pairs banvata, jithe tumhi ekach state (newProduct) la ghet multiple details maintain karu shakta:

// name: Product cha nav (name field store kartoy).
// price: Product chi keemat (price field store kartoy).
//******************************************************************************************** */

// const [editingProduct, setEditingProduct] = useState(null);
// null set karnyasache karan he aahe ki:
// Survatila tumhi kontha hi product edit karat nahi aahe.

// Summary: null he default value dileli aahe karan survatila konach product edit karnyasathi select kela nahi aahe. null la use kele jate UI ani logic madhe yacha fark kalnyasathi ki editing mode madhe product aahe ki nahi.

//**********************************************************************************************/

// const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
// open: false: Survatila Snackbar hide rahto, aani jar tumhi action getla tar te visible karnar.
// message: '': Te error ya success message store karnar.
// severity: 'info': Message konach type (success/error/info) hai te set karnar.

//*****************************************************************************************************/


// useEffect(() => {
//   setProducts(productsData);
// }, []);

// useEffect Hook ka use kelay?
// useEffect hook chi basic role asta ki tyat dilayle code component render zhalya var execute karne. Yaani jevha component first time render hoto, tevha aapan tyatla code execute karto.
// ****************************************************************************************************************************//

// const handleInputChange = (event) => {
//   const { name, value } = event.target;
//   setNewProduct((prev) => ({ ...prev, [name]: value }));
// };

// handleInputChange एक फंक्शन आहे जे form मध्ये user ने टाइप केलेल्या input च्या बदलांना हाताळतं.
// event हा parameter त्या input field चा संदर्भ आहे ज्यात user ने काही टाइप केले आहे. जेव्हा user काही टाइप करतो, तेव्हा हा फंक्शन चालतो. onchange event use keli mhanun

// const { name, value } = event.target; या ओळीत, event.target मधून name आणि value हे दोन गुण (properties) काढले जातात.
// name: input field चं नाव (उदाहरणार्थ, 'name' किंवा 'price').
// value: input field मधील user ने टाइप केलेला मूल्य.

// setNewProduct((prev) => ({ ...prev, [name]: value }));

// prev म्हणजे newProduct चा पूर्वीचा स्टेट.
// ज्या वेळी आपण state update करतो, तेव्हा आपल्याला पूर्वीच्या सर्व माहितीची (values) आवश्यकता असते, जेणेकरून आपला बदल त्यामध्ये समाविष्ट होईल.


// [name] मधील [] चा अर्थ एक "computed property" आहे, म्हणजेच आपण dynamic property access करीत आहात.

// कारण:
// JavaScript मध्ये, जर तुम्हाला object च्या property ला variable च्या माध्यमातून access करायचं असेल, तर तुम्हाला [] चा वापर करावा लागतो.
// म्हणजेच, name हा variable आहे, आणि त्यात value म्हणून name किंवा price यापैकी एक असेल.
// setNewProduct((prev) => ({ ...prev, [name]: value })); या ओळीत [name] वापरणे म्हणजे तुम्ही त्या variable च्या value नुसार newProduct च्या property ला update करत आहात.

// [name] चा वापर करून तुम्ही dynamic property access करू शकता, ज्यामुळे तुम्ही प्रत्येक input field च्या नावानुसार newProduct state update करू शकता. हे एक अत्यंत सोयीस्कर आणि लवचीक पद्धत आहे form inputs handle करण्यासाठी.

// Dot Notation: Fixed keys साठी.

//Bracket Notation: Dynamic आणि variable keys साठी.

//Dynamic Update: Square brackets {} dynamic key-update साठी वापरले जातात.

// let key = 'price';
// let value = '150';
// let newProduct = {};
// newProduct[key] = value;
// console.log(newProduct); // Output: { price: '150' }


// Inline Object Expression:
// { ...snackbar, open: false } हे एक temporary object आहे, ज्यात snackbar मधील सर्व key-value pairs आहेत आणि open: false आहे.
// याला specific नाव नाही, कारण हा एक तात्पुरता object आहे.

// Existing State जतन: Spread operator वापरल्याने snackbar चे बाकीचे properties (जसे की message, severity) तशाच राहतात.
// Specific Property Update: फक्त open property update केली जाते.