import React, {useState} from "react";
import { Link } from 'react-router-dom';

function Signup(){
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        mobile: '',
        role: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
       
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="login-box">
                        <div className="illustration">
                            <img src="/user.png" alt="Illustration" />
                        </div>
                        <h2>Welcome to EthSkillVerify</h2>
                        <p>A platform to verify your slilset and work experience for easy job finding.</p>
                        <form>
                            <div className="form-group">
                                <input type="text" name="fullname" className="form-control" placeholder="Fullname" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="Email Address" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="mobile" className="form-control" placeholder="Mobile" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <select name="role" className="form-control" aria-label="Default select example">
                                    <option selected>Choose your role</option>
                                    <option value="skillHoldre">Skill Holder</option>
                                    <option value="expert">Expert</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="rpassword" className="form-control" placeholder="Retype Password" onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup