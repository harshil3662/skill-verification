import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Signin.css"

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mt-5">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
    </div>
  );
};

export default SignIn;
