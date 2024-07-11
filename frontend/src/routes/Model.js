import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Model.css"

function Model({name,files,link,button,onClose}){
    return (
        <div className="popup" onClick={onClose}>
            <div className="popup-contain rounded-3 p-3" onClick={(e)=>e.stopPropagation()}>
                <div className="mb-4">
                    <button className="btn btn-danger close rounded-circle float-end fw-bold" onClick={onClose}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
                <h2>Add Your skill</h2>
                <form className="mt-3 p-2">
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Skill Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="skillname"
                            name="skillname"
                            value={name}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">External Link</label>
                        <input
                            type="text"
                            className="form-control"
                            id="link"
                            name="link"
                            value={link}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Attatch certificates or files</label>
                        <input className="form-control" type="file" id="formFile" name="file"/>
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary close me-2">{button}</button>
                        <button type="submit" className="btn btn-light close" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Model