import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Login = () => {
    return (
        <Form>

            <h3>Log in</h3>

            <Form.Group className="form-group">
                <Form.Label>Email</Form.Label>
                <Form.Control autoFocus type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="form-group">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group className="form-group">
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Remember me"
                />
            </Form.Group>

            <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
            <p className="forgot-password text-right">
                Forgot <a href="#/">password?</a>
            </p>
        </Form>
    )
}

export default Login
