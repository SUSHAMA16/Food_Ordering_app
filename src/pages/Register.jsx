//import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import React, { useState } from 'react'
import userService from '../service/user.service';



function RegisterForm() {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        address: "",
    });
    const [msg, setMsg] = useState("")

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value })
    }

    const RegisterUser = (e) => {
        e.preventDefault();
        console.log(user);
        userService.saveUser(user)
            .then((res) => {
                console.log("User Added Successfully");
                setMsg("Used Added Sucessfully");
                setUser({
                    userName: "",
                    email: "",
                    password: "",
                    address: "",
                })
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        
        <Helmet title="Register">
        <CommonSection title="Register" />
        <section>
         <Container> 
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='card'>
                            <div className='card-header fs-3 text-center'>
                                Register User
                            </div>
                            {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                            <div className='card-body'>
                                <form onSubmit={(e) => RegisterUser(e)}>
                                    <div className='mb-3'>
                                        <label>Enter UserName</label>
                                        <input type="text" name="userName" className='form-control' onChange={(e) => handleChange(e)}
                                            value={user.userName} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Enter Email</label>
                                        <input type="text" name="email" className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={user.email} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Enter password</label>
                                        <input type="text" name="password" className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={user.password} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Enter Address</label>
                                        <input type="text" name="address" className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={user.address} />
                                    </div>

                                    <div><button className="btn btn-primary col-md-12">Submit</button></div>
                                    
                                    <div><p className="for-login">
                                        <Link to="/Login">Login Here...</Link></p></div>
                                   
                                   
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
      </section>
    </Helmet>
        
    )
}

export default RegisterForm