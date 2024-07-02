import React, { useState } from 'react';
import '../CSS/Expert.css';

const Expert = () => {

    const user = {
        picture: 'https://via.placeholder.com/100',
        web:'https://via.placeholder.com/100',
        fullName: 'John Doe',
        email: 'john.doe@example.com'
    };

    const [current,setCurrent] = useState('active')

    return (
        <div className="container mt-5">
            <div className="profile-header">
                <img src={user.picture} alt={`${user.fullName}'s profile`} className="profile-picture" />
                <div className="profile-info">
                <h2 className="profile-name">{user.fullName}</h2>
                <p>{user.location}</p>
                <p>{user.jobRole}</p>
                <p><label className="fw-bold">Email:</label> {user.email}</p>
                <p><label className="fw-bold">Website:</label> {user.web}</p>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card task text-center bg-light" onClick={()=>{setCurrent('Active')}}>
                        <div className="card-body">
                            <h5 className="card-title">Active Task</h5>
                            <p className="card-text display-4">18</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card task text-center bg-light" onClick={()=>{setCurrent('Pending')}}>
                        <div className="card-body">
                            <h5 className="card-title">Pending Task</h5>
                            <p className="card-text display-4">13</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card task text-center bg-light" onClick={()=>{setCurrent('Completed')}}>
                        <div className="card-body">
                            <h5 className="card-title">Completed</h5>
                            <p className="card-text display-4">5</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center bg-light">
                        <div className="card-body">
                            <h5 className="card-title">Productivity</h5>
                            <p className="card-text display-4">76%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    {current} Task
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Skill Holder Name</th>
                                <th scope="col">Id</th>
                                <th scope="col">Skill Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.fullName}</td>
                                <td>34</td>
                                <td>JavaScript</td>
                                <td>{current}</td>
                                {current !== "Completed" ? <td><button type="button" class="btn btn-primary">{current === "Active" ? "Take" : "Rate"}</button></td> :
                                <td><div className="progress"><div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div></td>}
                            </tr>
                            <tr>
                                <td>Slack Team UI Design</td>
                                <td>47</td>
                                <td>Blockchain fundamental</td>
                                <td>{current}</td>
                                {current !== "Completed" ? <td><button type="button" class="btn btn-primary">{current === "Active" ? "Take" : "Rate"}</button></td> :
                                <td><div className="progress"><div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div></td>}
                            </tr>
                            <tr>
                                <td>GitHub Satellite</td>
                                <td>120</td>
                                <td>web3.js</td>
                                <td>{current}</td>
                                {current !== "Completed" ? <td><button type="button" class="btn btn-primary">{current === "Active" ? "Take" : "Rate"}</button></td> :
                                <td><div className="progress"><div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div></td>}
                            </tr>
                            <tr>
                                <td>3D Character Modelling</td>
                                <td>89</td>
                                <td>Polkadot</td>
                                <td>{current}</td>
                                {current !== "Completed" ? <td><button type="button" class="btn btn-primary">{current === "Active" ? "Take" : "Rate"}</button></td> :
                                <td><div className="progress"><div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div></td>}
                            </tr>
                            <tr>
                                <td>Webapp Design System</td>
                                <td>108</td>
                                <td>HTML</td>
                                <td>{current}</td>
                                {current !== "Completed" ? <td><button type="button" class="btn btn-primary">{current === "Active" ? "Take" : "Rate"}</button></td> :
                                <td><div className="progress"><div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div></td>}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Expert;
