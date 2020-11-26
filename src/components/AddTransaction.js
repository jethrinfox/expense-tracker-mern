import React, { useContext, useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const { transactions, addTransaction } = useContext(GlobalContext)

    const [expense, setExpense] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [startDate, setStartDate] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        const transaction = {
            id: transactions.length + 1,
            expense,
            amount: +amount,
            category,
            date: new Date(startDate)
        }
        setExpense('')
        setAmount('')
        addTransaction(transaction)
    }

    return (
        <Form className="addForm" onSubmit={handleSubmit}>
            <Form.Row>
                <Col >
                    <Form.Group controlId="expenseName">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Income or Expense" value={expense} onChange={(e) => setExpense(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group controlId="expenseAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" placeholder="Use - for expense" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </Form.Group>
                </Col>
            </Form.Row>

            <Form.Row>
                <Col >
                    <Form.Group controlId="expenseCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" custom onChange={(e) => setCategory(e.target.value)}>
                            <option selected disabled>Please Select</option>
                            <option>Groceries</option>
                            <option>Travel</option>
                            <option>Clothing</option>
                            <option>Rent</option>
                            <option>Pharmacy</option>
                            <option>Miscellaneous</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group>
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Button variant="primary" block size="lg" type="submit">
                Add
            </Button>
        </Form>
    )
}

export default AddTransaction
