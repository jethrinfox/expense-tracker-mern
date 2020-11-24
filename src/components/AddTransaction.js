import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const AddTransaction = () => {

    const [expense, setExpense] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Form className="mb-4 mt-4" onSubmit={handleSubmit}>
            <Form.Row>
                <Col sm md="4">
                    <Form.Group controlId="expenseName">
                        <Form.Label>Expense Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => setExpense(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col sm md="4">
                    <Form.Group controlId="expenseAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" onChange={(e) => setAmount(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col sm md="4">
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
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
            </Form.Row>
            <Button variant="primary" block size="lg" type="submit">
                Add
            </Button>
        </Form>
    )
}

export default AddTransaction
