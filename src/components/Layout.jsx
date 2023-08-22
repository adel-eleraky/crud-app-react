/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <div className="container">
                <h2 className="py-2">CRUD App Using React - Redux/toolkit</h2>
                <Outlet />
            </div>
        </>
    )
}

export default Layout
