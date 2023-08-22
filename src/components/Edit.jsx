/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../store/reducers/UsersReducer';
import swal from 'sweetalert';

function Edit() {

    const users = useSelector(state => state.users);
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = users.find(user => user.id == id)
    const [name , setName] = useState(userData.name);
    const [email , setEmail] = useState(userData.email);
    const [formErrors , setFormErrors] = useState({});
    


    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate({name , email})

        if(Object.keys(validationErrors).length === 0){

            dispatch(editUser({id , name , email}))
            swal({
                title: "User Edited successfully",
                icon: "success",
                button: "Back to home"
            }).then(value => navigate("/") )

        }else {
            setFormErrors(validationErrors)
        }

    }


    const validate = (values) => {

        let errors = {}

        if(!values.name){
            errors = {...errors , name: "Username is required!"}
        }
        if(!values.email){
            errors = {...errors , email: "Email is required"}
        }

        return errors
    }
    
    return (
        <div>
            <h4 className='m-4'>Edit User</h4>
            <form className='m-4 border border-primary rounded p-4' onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-1 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className={`form-control ${formErrors.name && "is-invalid"}`} id="name" value={name  } onChange={(e) => setName(e.target.value)}/>
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
                        <input type="email" className={`form-control ${formErrors.email && "is-invalid"}`} id="email" value={email } onChange={(e) => setEmail(e.target.value)}/>
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

export default Edit
