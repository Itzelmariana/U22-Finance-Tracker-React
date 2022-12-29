import React, { useState } from 'react';
import { useSignup } from '../hook/useSignup';
import styles from './SignUp.module.css';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, isPending, signup } = useSignup();
  function handleSubmit(e) {
    e.preventDefault();
    signup(email, password, name);
  }
  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>Name:</span>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      {!isPending && <button className='btn'>Signup</button>}
      {isPending && (
        <button className='btn' disabled>
          loading..
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
