import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

const Signup = () => {

    const { signUp } = useContext(GlobalContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const user = {
            ...data
        }
        signUp(user);
    }

    return (
        <div className="inner">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3>Register</h3>

                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control autoFocus name="username" required type="text" placeholder="Username" ref={register({ required: true })} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" required type="email" placeholder="Enter email" ref={register({ required: true })} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" required type="password" placeholder="Enter password" ref={register({ required: true })} />
                </Form.Group>

                <Button type="submit" block variant="dark" size="lg" >Register</Button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">log in?</Link>
                </p>
            </Form>
        </div>
    )
}

export default Signup
