import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Candidate.css"

function Candidate({candidate}){
    return (
        <tr>
            <td>{candidate.name}</td>
            <td>{candidate.email}</td>
            <td>{candidate.productivity}</td>
            <td><button className="btn btn-primary">Details</button></td>
            <td>
                <button className="btn btn-success me-1"><span class="material-symbols-outlined">thumb_up</span></button>
                <button className="btn btn-danger ms-1"><span class="material-symbols-outlined">thumb_down</span></button>
            </td>
        </tr>
    )
}

export default Candidate