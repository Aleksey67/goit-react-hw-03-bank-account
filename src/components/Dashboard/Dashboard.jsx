import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

class Dashboard extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    const transactionsJson = localStorage.getItem('transactions');
    const transactions = JSON.parse(transactionsJson);

    if (transactionsJson) {
      this.setState({ transactions });
    }
  }

  componentDidUpdate() {
    const { transactions } = this.state;
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }

  addTransaction = transaction => {
    this.setState(prevState => ({
      transactions: [...prevState.transactions, transaction],
    }));
  };

  render() {
    const { transactions } = this.state;
    return (
      <div>
        <Controls transactions={transactions} addTransaction={this.addTransaction} />
        <Balance transactions={transactions} />
        <TransactionHistory transactions={transactions} />
        <ToastContainer />
      </div>
    );
  }
}
export default Dashboard;
