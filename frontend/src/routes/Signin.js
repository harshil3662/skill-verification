import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "../CSS/Signin.css"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/signup")
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
                                    onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name='psw'
                                    placeholder="Password" 
                                    onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login Now</button>
                        </form>
                        <p className="forgot-password text-right">
                            <a href="#">Forgot Password?</a>
                        </p>
                        <button type="button" className="btn btn-secondary btn-block" onClick={handleButtonClick}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
