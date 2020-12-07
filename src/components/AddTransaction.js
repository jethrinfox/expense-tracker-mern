import React, { useContext } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const { addTransaction, user } = useContext(GlobalContext)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const transaction = {
            ...data,
            amount: +data.amount,
            user_id: user._id,
            date: new Date(data.date)
        }
        addTransaction(transaction);
    }


    return (
        <Form className="addForm" onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
                <Col >
                    <Form.Group controlId="expenseName">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="text" type="text" ref={register({ required: true })} />
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group controlId="expenseAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control name="amount" type="number" ref={register({ required: true })} />
                    </Form.Group>
                </Col>
            </Form.Row>

            <Form.Row>
                <Col >
                    <Form.Group controlId="expenseCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control name="category" as="select" defaultValue="0" custom ref={register({ required: true })} >
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
                        <Form.Control name="date" type="date" ref={register({ required: true })} />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Button variant="primary" block size="lg" type="submit">Add</Button>
        </Form>
    )
}

export default AddTransaction
