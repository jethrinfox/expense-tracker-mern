import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Login = () => {

    const { login } = useContext(GlobalContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const user = {
            ...data
        }
        login(user);
    }

    return (
        <div className="inner">
            <Form onSubmit={handleSubmit(onSubmit)}>

                <h3>Log in</h3>

                <Form.Group className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" required autoFocus type="email" placeholder="Enter your email" ref={register({ required: true })} />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" required type="password" placeholder="Enter your password" ref={register({ required: true })} />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Remember me"
                    />
                </Form.Group>

                <Button type="submit" block variant="dark" size="lg" >Sign in</Button>
                <p className="forgot-password text-right">
                    Need an <Link to="/signup">Account?</Link>
                </p>
            </Form>
        </div>
    )
}

export default Login
