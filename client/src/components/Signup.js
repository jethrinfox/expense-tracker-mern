import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Form>
            <h3>Register</h3>

            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Button type="submit" block variant="dark" size="lg" >Register</Button>
            <p className="forgot-password text-right">
                Already registered <Link to="/login">log in?</Link>
            </p>
        </Form>
    )
}

export default Signup
