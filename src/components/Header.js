

import React from 'react';
import '../styles/Header.css';

const styles = {
    headerStyle: {
      background: 'rgb(73, 122, 179)',
    },
    headingStyle: {
      fontSize: '100px',
    },
  };

function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>WorkDay</h1>
      </header>
    );
  }
  
  export default Header;
  