import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import checkCorrectInput from '../../../utils/checkInput';
import calculateBalance from '../../../utils/calculateBalance';
import styles from './controls.module.css';

class Controls extends Component {
  state = {
    input: ''
  };

  onButtonClick(e) {
    const balance = calculateBalance(this.props.transactions);
    const input = parseInt(this.state.input) || 0;

    if (checkCorrectInput(input, e.target.name, balance)) {
      const transaction = {
        id: uuid(),
        type: e.target.name,
        amount: input,
        date: new Date().toLocaleString(),
      };
      this.props.addTransaction(transaction);
    }

    this.setState({ input: '' });
  }

  onInputChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <section className={styles.controls}>
        <form className="form" onSubmit={evt => evt.preventDefault()}>
          <input
            type="number"
            value={this.state.input}
            placeholder="Enter your amount"
            onChange={e => this.onInputChange(e)}
          />
          <button type="button" name="deposit" onClick={e => this.onButtonClick(e)}>
            Deposit
          </button>
          <button type="button" name="withdraw" onClick={e => this.onButtonClick(e)}>
            Withdraw
          </button>
        </form>
      </section>
    );
  }
}

Controls.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};

export default Controls;
