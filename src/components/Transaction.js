import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+'
    const {deleteTransaction} = useContext(GlobalContext)

    const DeleteAction = () => {
        deleteTransaction(transaction.id)
    }

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} 
            <span>
                {sign}${Math.abs(transaction.amount)}
            </span> 
            <button onClick={DeleteAction} className="delete-btn">x</button>
        </li>
    )
}

export default  Transaction