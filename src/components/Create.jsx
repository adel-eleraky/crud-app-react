/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/reducers/UsersReducer';
import {  useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Create() {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const [formErrors , setFormErrors] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors =  validate({name , email})

        if(Object.keys(validationErrors).length === 0){
            
            dispatch(addUser({id: users.length + 1 ,  name , email}))
            swal({
                title: "New User Add successfully",
                icon: "success",
                button: "Back to home"
            }).then(value => navigate("/") )
            
        }else {
            setFormErrors(validationErrors)
        }

    }

    
    const validate = (values) => {
        
        let errors = {};

        if(!values.name){
            errors = {...errors , name: "Username is required!"}
        }
        if(!values.email){
            errors = {...errors , email: "Email is required!"}
        }

        return errors
    }

    return (
        <div>
            <h4 className="m-4">Create New User</h4>
            <form className='m-4 border border-primary rounded p-4' onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-1 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className={`form-control ${formErrors.name && "is-invalid"}`} id="name" onChange={(e) => setName(e.target.value)}/>
                        {formErrors.name && 
                            <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                {formErrors.name}
                            </div>
                        }
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-1 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className={`form-control ${formErrors.email && "is-invalid"}`} id="email" onChange={(e) => setEmail(e.target.value)}/>
                        {formErrors.email && 
                            <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                {formErrors.email}
                            </div>
                        }
                    </div>
                </div>
                <button className='btn btn-primary my-4 px-4'>Save</button>
            </form>
        </div>
    )
}

export default Create
