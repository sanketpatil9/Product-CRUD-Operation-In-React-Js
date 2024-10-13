
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss'; // Import the SCSS file

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3>Product Master</h3>
      <ul className={styles.menu}>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link> {/* Example additional item */}
        </li>
        <li>
          <Link to="/customers">Customers</Link> {/* Example additional item */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

