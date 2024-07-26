// src/components/ContactHeader.js

import React from 'react'
import styles from './ContactHeader.module.css'

const ContactHeader = ({ phone1, phone2, email }) => {
  return (
    <div className={styles.header}>
      <div className={styles.rectangle}></div>
      <div className={styles.address}>
        <p>P.O BOX 206-20320</p>
        <br/>
        <p>Kinamba</p>
      </div>
      <div className={styles.motto}>
        <p>EDUCATION FOR TRANSFORMATION</p>
      </div>
      <div className={styles.phones}>
        <p>{phone1} || {phone2}</p>
      </div>
      <div className={styles.email}>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ContactHeader;
