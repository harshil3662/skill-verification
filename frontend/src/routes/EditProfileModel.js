import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Model.css"

function EditProfileModel({fullName,email,web,mobile,onClose}){
    return (
        <div className="popup" onClick={onClose}>
            <div className="popup-contain rounded-3 p-3" onClick={(e)=>e.stopPropagation()}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            name="fullname"
                            value={fullName}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Mobile</label>
                        <input
                            type="text"
                            className="form-control"
                            id="mobile"
                            name="mobile"
                            value={mobile}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Website</label>
                        <input
                            type="text"
                            className="form-control"
                            id="website"
                            name="website"
                            value={web}
                        />
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary close me-2">Update</button>
                        <button type="submit" className="btn btn-light close" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfileModel