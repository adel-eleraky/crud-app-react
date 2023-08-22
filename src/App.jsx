/* eslint-disable no-unused-vars */

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Create from "./components/Create";
import Edit from "./components/Edit";


function App() {
    return (
        <>
            <Routes >
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/create" element={<Create />}/>
                    <Route path="/edit/:id" element={<Edit />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
