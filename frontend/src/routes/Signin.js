import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "../CSS/Signin.css"
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signin/', JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response);
            navigate("/");
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="login-box">
                        <div className="illustration">
                            <img src="/arrow.png" alt="Illustration" />
                        </div>
                        <h2>Welcome Back to EthSkillVerify</h2>
                        <p>To connect with us please login with your personal information by email address and password.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name='email'
                                    placeholder="Email Address" 
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name='password'
                                    placeholder="Password" 
                                    onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login Now</button>
                        </form>
                        <p className="forgot-password text-right">
                            <a href="#">Forgot Password?</a>
                        </p>
                        <button type="button" className="btn btn-secondary btn-block" onClick={()=>navigate('/signup')}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
