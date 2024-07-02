import React from "react";
import { Link } from 'react-router-dom';
import Candidate from "./Candidate";
import "../CSS/Voting.css"

function Voting(){

    const candidates = [
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'}
    ];

    return (
        <div className="vendor-list">
            <button className="btn btn-dark float-end mt-4 mb-4 ms-1">Connect wallet</button>
            <button className="btn btn-primary float-end mt-4 mb-4 me-1">Add Proposal</button>
            <table>
                <thead>
                <tr>
                    <th>Expert Name</th>
                    <th>Email</th>
                    <th>Productivity</th>
                    <th>Reasons</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {candidates.map((candidate, index) => (
                    <Candidate key={index} candidate={candidate} />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Voting