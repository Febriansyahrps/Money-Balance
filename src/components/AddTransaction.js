import React, {useContext, useState} from 'react'
import { GlobalContext } from './context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const TextChange = (e) => {
        setText(e.target.value)
    }
    const AmountChange = (e) => {
        setAmount(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() *1000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text"><b>Text</b></label>
                    <input type="text" value={text} onChange={TextChange} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"><b>Amount</b> <br />example (income = 1000, expense = -1000)</label>
                    <input type="number" value={amount} onChange={AmountChange} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>   
        </>
    )
}

export default  AddTransaction