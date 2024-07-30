import React,{useState} from "react";
import JobListing from "./JobListing";
import { Link } from 'react-router-dom';
import "../CSS/SkillHolder.css"
import Navbar from "./Navbar";
import Model from "./Model";
import EditProfileModel from "./EditProfileModel";

const SkillHolder = () =>{

    const [showPopup, setShowPopup] = useState(false);
    const [profileModel, setProfileModel] = useState(false)
    const [modalProps, setModalProps] = useState({});
    const [profile,setProfile] = useState({
        picture: 'https://via.placeholder.com/100',
        web:'https://via.placeholder.com/100',
        fullName: 'John Doe',
        mobile: '+1234567890',
        email: 'john.doe@example.com',
        skills: ['JavaScript', 'React', 'CSS']
    })

    const handleButton = (props) => {
        setModalProps(props);
        setShowPopup(true);
    };

    const closeModal = () => {
        setShowPopup(false);
    };

    const toggleEditProfileModal = () => {
        setProfileModel(!profileModel);
    };

    if(showPopup || profileModel) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div>
            <Navbar/>
            <div className="user-profile m-5">
                <i className="bi bi-pencil-square fs-4 text-dark float-end" onClick={toggleEditProfileModal}></i>
                <div className="profile-header">
                    <img src={profile.picture} alt={`${profile.fullName}'s profile`} className="profile-picture" />
                    <div className="profile-info">
                        <h2 className="profile-name">{profile.fullName}</h2>
                        <p><label className="fw-bold">Email:</label> {profile.email}</p>
                        <p><label className="fw-bold">Website:</label> {profile.web}</p>
                    </div>
                </div>
                <hr/>
                <div className="profile-skills-section">
                    <div className="skills-header">
                        <h3>Skills</h3>
                        <button className="float-end btn btn-primary" onClick={() => handleButton({
                            name: '',
                            files: [],
                            link: '',
                            flag:0,
                            button: 'Submit'
                        })}>+ Add Skill</button>
                    </div>
                    <div className="skills-content">
                    <div className="focus-skills">
                        <h4>Verified Skills</h4>
                        <div className="skills-grid">
                        {profile.skills.map((skill, index) => (
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
                        {profile.skills.map((skill, index) => (
                            <div className="skill-card" key={index}>
                                <i className="bi bi-pencil-square text-primary" onClick={() => handleButton({
                                    name: skill,
                                    files: [],
                                    link: '',
                                    flag:1,
                                    button: 'Update'
                                })}></i>
                                <p className="skill-name text-success fw-bold">{skill}</p>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
                <JobListing/>
                {showPopup && <Model {...modalProps} onClose={closeModal}/>}
                {profileModel && <EditProfileModel {...profile} onClose={toggleEditProfileModal}/>}
            </div>
        </div>
        
    )
}

export default SkillHolder