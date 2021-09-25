import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'

import './Category.css'

const Category = () => {
    const { expenseTransactions, incomeTransactions } = useContext(GlobalContext)
    const [ rentPercentOfIncome, setRentPercentOfIncome ] = useState(0)
    const [ needsPercentOfIncome, setNeedsPercentOfIncome ] = useState(0)
    const [ wantsPercentOfIncome, setWantsPercentOfIncome ] = useState(0)
    const [ savingsPercentOfIncome, setSavingsPercentOfIncome ] = useState(0)

    const incomeAmounts = incomeTransactions.map(incomeTransaction => incomeTransaction.incomeAmount)
    const totalIncome = incomeAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const rent = expenseTransactions.filter((expense) => expense.expenseCategory === "rent")
    const rentAmounts = rent.map(rent => rent.expenseAmount)
    const rentTotal = rentAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const rentPercent = (rentTotal / totalIncome) * 100
    
    const need = expenseTransactions.filter((expense) => expense.expenseCategory === "needs")
    const needAmounts = need.map(need => need.expenseAmount)
    const needTotal = needAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const needPercent = (needTotal / totalIncome) * 100

    const want = expenseTransactions.filter((expense) => expense.expenseCategory === "wants")
    const wantAmounts = want.map(want => want.expenseAmount)
    const wantTotal = wantAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const wantPercent = (wantTotal / totalIncome) * 100

    const saving = expenseTransactions.filter((expense) => expense.expenseCategory === "savings")
    const savingAmounts = saving.map(saving => saving.expenseAmount)
    const savingTotal = savingAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const savingPercent = (savingTotal / totalIncome) * 100


    useEffect(() => {
        setRentPercentOfIncome(rentPercent.toFixed(1));
        setNeedsPercentOfIncome(needPercent.toFixed(1));
        setWantsPercentOfIncome(wantPercent.toFixed(1));
        setSavingsPercentOfIncome(savingPercent.toFixed(1));
    }, [rentPercent, needPercent, wantPercent, savingPercent]);

    let rentStatus = 'green';
    if (rentPercentOfIncome > 30) {
        rentStatus = 'red'
    }

    let needsStatus = 'green'
    if (needsPercentOfIncome > 20) {
        needsStatus = 'red'
    }

    let wantsStatus = 'green'
    if (wantsPercentOfIncome > 30) {
        wantsStatus = 'red'
    }

    let savingsStatus = 'green'
    if (needsPercentOfIncome < 20) {
        savingsStatus = 'red'
    }
    

    return (
        <div className="category">
            Category
            <div className="category-content">
                <div className="category-item">
                    <p>Rent</p>
                    <p className={'percent ' +rentStatus}>{rentPercentOfIncome > 0 ? rentPercentOfIncome : 0}%</p>
                </div>
                <div className="category-item">
                    <p>Needs</p>
                    <p className={'percent ' +needsStatus}>{needsPercentOfIncome > 0 ? needsPercentOfIncome : 0}%</p>
                </div>
                <div className="category-item">
                    <p>Wants</p>
                    <p className={'percent ' +wantsStatus}>{wantsPercentOfIncome > 0 ? wantsPercentOfIncome : 0}%</p>
                </div>
                <div className="category-item">
                    <p>Savings</p>
                    <p className={'percent ' +savingsStatus}>{savingsPercentOfIncome > 0 ? savingsPercentOfIncome : 0}%</p>
                </div>
            </div>
        </div>
    )
}

export default Category
