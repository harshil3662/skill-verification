import React,{useState} from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import "../CSS/Rate.css"

function RateModel(){

      const [events, setEvents] = useState(0);
      const [experience, setExperience] = useState(0);
      const [certi, setCerti] = useState(0);

    return (
        <div>
            <Navbar/>
            <div className="skill-rating-container">
                <div className="profile-header-rating">
                    <div className="profile-info-rating">
                    <h1>Marisa Jones</h1>
                    <p className="profile-status">Skill Name</p>
                    </div>
                </div>
                <div className="skills-table">
                    <form>
                        <table>
                        <thead>
                            <tr>
                                <th>Skill Rating Criteria</th>
                                <th>Expert Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fundamental</td>
                                <td>
                                    <input type="range" class="form-range" min="0" max="10" id="customRange2"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Technical</td>
                                <td>
                                    <input type="range" class="form-range" min="0" max="10" id="customRange2"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Practical</td>
                                <td>
                                    <input type="range" class="form-range" min="0" max="10" id="customRange2"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Projects</td>
                                <td>
                                    <input type="range" class="form-range" min="0" max="10" id="customRange2"/>
                                </td>
                            </tr>
                            <tr>
                                <td>External Event Participation</td>
                                <td>
                                    <div className="counter-container">
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            setEvents(events-1)}} className="counter-button">-</button>
                                        <span className="counter-display">{events} events participated</span>
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            setEvents(events+1)}} className="counter-button">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Experience</td>
                                <td>
                                    <div className="counter-container">
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            setExperience(experience-1)}} className="counter-button">-</button>
                                        <span className="counter-display">{experience} Years</span>
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            setExperience(experience+1)}} className="counter-button">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Certification</td>
                                <td>
                                    <div className="counter-container">
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            setCerti(certi-1)}} className="counter-button">-</button>
                                        <span className="counter-display">{certi} certifications</span>
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            setCerti(certi+1)}} className="counter-button">+</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                        <button type="button" className="btn btn-primary mt-4">Submit Rating</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default RateModel