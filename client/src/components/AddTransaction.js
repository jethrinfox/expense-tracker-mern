import React, { useContext, useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [startDate, setStartDate] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        const transaction = {
            text,
            amount: +amount,
            category,
            date: new Date(startDate)
        }
        setText('')
        setAmount('')
        addTransaction(transaction)
    }

    return (
        <Form className="addForm" onSubmit={handleSubmit}>
            <Form.Row>
                <Col >
                    <Form.Group controlId="expenseName">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="" value={text} onChange={(e) => setText(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group controlId="expenseAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" placeholder="" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </Form.Group>
                </Col>
            </Form.Row>

            <Form.Row>
                <Col >
                    <Form.Group controlId="expenseCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" defaultValue="0" custom onChange={(e) => setCategory(e.target.value)}>
                            <option value="0" disabled>Please Select</option>
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
