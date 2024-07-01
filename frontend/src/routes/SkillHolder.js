import React from "react";
import { Link } from 'react-router-dom';

const SkillHolder = () =>{

    const user = {
        picture: 'https://via.placeholder.com/100',
        web:'https://via.placeholder.com/100',
        fullName: 'John Doe',
        mobile: '+1234567890',
        email: 'john.doe@example.com',
        skills: ['JavaScript', 'React', 'CSS']
    };

    return (
        <div className="user-profile m-5">
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
            <hr/>
            <div className="profile-skills-section">
                <div className="skills-header">
                <h3>Skills</h3>
                <button className="add-skill-button">+ Add Skill</button>
                </div>
                <div className="skills-content">
                <div className="focus-skills">
                    <h4>Verified Skills</h4>
                    <div className="skills-grid">
                    {user.skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <p className="skill-rating">Rating:</p>
                            <p className="skill-level">{index + 1}/10</p>
                            <p className="skill-name text-success fw-bold">{skill}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="additional-skills">
                    <h4>Unverified Skills</h4>
                    <div className="skills-grid">
                    {user.skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <p className="skill-rating">Rating: </p>
                            <p className="skill-level">0/10</p>
                            <p className="skill-name text-success fw-bold">{skill}</p>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SkillHolder