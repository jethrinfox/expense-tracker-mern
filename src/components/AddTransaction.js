import React from 'react'
import { Button, Form } from 'react-bootstrap'

const AddTransaction = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Expense Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
                <Form.Control as="select">
                    <option selected>Groceries</option>
                    <option>Travel</option>
                    <option>Clothing</option>
                    <option>Rent</option>
                    <option>Pharmacy</option>
                    <option>Miscellaneous</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    )
}

export default AddTransaction
