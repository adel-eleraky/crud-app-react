/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../store/reducers/UsersReducer';

function Home() {

    const users = useSelector(state => state.users)
    const dispatch = useDispatch();

    return (
        <>
            <div className="container">
                <Link to={'/create'} className="btn btn-success mt-3">Create New User</Link>
                <table className="table table-hover mt-3 p-3">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Operations</td>
                        </tr>
                    </thead>
                    <tbody>
                            {users.length === 0 ? <h4 className='my-4'>No users found. </h4> : users.map((user , index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/edit/${user.id}`} className="btn btn-primary mx-1">Edit</Link>
                                            <button onClick={() => dispatch(deleteUser({id: user.id}))} className="btn btn-danger mx-1">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home
