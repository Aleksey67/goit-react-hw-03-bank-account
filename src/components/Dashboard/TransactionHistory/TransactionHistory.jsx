import React from 'react';
import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

const Balance = ({ transactions }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(({ id, type, amount, date }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>${amount}</td>
          <td>{date}</td>
        </tr>
      ))}
      {!transactions.length && (
        <tr>
          <td colSpan="3">-</td>
        </tr>
      )}
    </tbody>
  </table>
);

Balance.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Balance;
