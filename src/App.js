import React from 'react'

import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import Transaction from './components/Transaction/Transaction'
import IncomeList from './components/Lists/IncomeList'
import ExpenseList from './components/Lists/ExpenseList'
import Category from './components/Category/Category'

import {GlobalContextProvider} from './context/GlobalState'

import './App.css'

const App = () => {
    return (
        <GlobalContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <Balance />
                    <Transaction />
                    <IncomeList />
                    <ExpenseList />
                    <Category />
                </div>
                <div className="attributes">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </GlobalContextProvider>
    );
};

export default App;
