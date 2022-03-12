import './login.css';
import React, { useState } from 'react';
import { Button, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Login() {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('http://localhost:8000/api/login', data)
      .then((response) => {
        setError('Login successfully');
        localStorage.setItem('access_token', response.data.access_token);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch(function (e) {
        if (e.response.data.message === 'User not exist!') {
          setError('Login unsuccessfully!');
          setTimeout(() => {
            setError('');
          }, 5000);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <div className="mb-3">
          <p className="mb-2">Email</p>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            className={`form-control ${errors.email && 'border-error'}`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email must be valid'
              }
            })}
            onKeyUp={() => {
              trigger('email');
            }}
          />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>
        <div className="mb-3">
          <p className="mb-2">Password</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className={`form-control ${errors.password && 'border-error'}`}
            {...register('password', {
              required: 'Password is required'
            })}
            onKeyUp={() => {
              trigger('password');
            }}
          />
          {errors.password && <small className="text-danger">{errors.password.message}</small>}
        </div>

        <div className="d-flex justify-content-end text-dark-blue">
          <span className="pointer">Forgot your password?</span>
        </div>

        {error != '' ? (
          <Alert color={error === 'Login successfully' ? 'success' : 'danger'} className="mt-3">
            {error}
          </Alert>
        ) : (
          ''
        )}
      </ModalBody>
      <ModalFooter>
        <Button className="button login-btn background-dark-blue" type="submit">
          Sign in{' '}
        </Button>
      </ModalFooter>
    </form>
  );
}
export default Login;
