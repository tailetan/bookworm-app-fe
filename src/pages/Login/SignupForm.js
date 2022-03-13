import { Button, ModalBody, ModalFooter, Alert } from 'reactstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function SignupForm() {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('http://localhost:8000/api/register', data)
      .then(() => {
        setError('Sign up successfully');
        setTimeout(() => {
          setError('');
          reset();
        }, 5000);
      })
      .catch(function (e) {
        if (e.response.data.message[0].email === 'The email has already been taken.') {
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
          <p className="mb-2">Email <span className='text-danger'>*</span></p>
          <input
            type="text"
            placeholder="Email"
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
          <p className="mb-2">First name <span className='text-danger'>*</span></p>
          <input
            type="text"
            placeholder="First name"
            className={`form-control ${errors.first_name && 'border-error'}`}
            {...register('first_name', { required: 'First name is required' })}
            onKeyUp={() => {
              trigger('first_name');
            }}
          />
          {errors.first_name && <small className="text-danger">{errors.first_name.message}</small>}
        </div>
        <div className="mb-3">
          <p className="mb-2">Last name <span className='text-danger'>*</span></p>
          <input
            type="text"
            placeholder="Last name"
            className={`form-control ${errors.last_name && 'border-error'}`}
            {...register('last_name', { required: 'Last name is required' })}
            onKeyUp={() => {
              trigger('last_name');
            }}
          />
          {errors.last_name && <small className="text-danger">{errors.last_name.message}</small>}
        </div>
        <div className="mb-3">
          <p className="mb-2">Password <span className='text-danger'>*</span></p>
          <input
            type="password"
            placeholder="Password (Must be 8 characters)"
            className={`form-control ${errors.password && 'border-error'}`}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
            onKeyUp={() => {
              trigger('password');
            }}
          />
          {errors.password && <small className="text-danger">{errors.password.message}</small>}
        </div>
        <strong>
          <em>
            <small className="text-danger">Note: * is required field</small>
          </em>
        </strong>
        {error != '' ? (
          <Alert color={error === 'Sign up successfully' ? 'success' : 'danger'} className="mt-3">
            {error}
          </Alert>
        ) : (
          ''
        )}
      </ModalBody>
      <ModalFooter>
        <hr className="separator" />
        <Button className="button background-dark-blue register-btn" type="submit">
          Sign up
        </Button>
      </ModalFooter>
    </form>
  );
}

export default SignupForm;
