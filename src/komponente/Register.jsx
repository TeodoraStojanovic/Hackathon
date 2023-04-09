import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


    const Register=(props)=>{
        let history = useNavigate();
        const [data, setData]=useState({
            first_name:"",
            last_name:"",
            addres:"",
            telephone:"",
            email:"",
            password:""
        })

        const handleChange=(e)=>{
            setData({ ...data, [e.target.name]: e.target.value}); 
        }

        const submitForm=(e)=>{
            e.preventDefault();
        const sendData= {
                first_name:data.first_name,
                last_name:data.last_name,
                addres:data.addres,
                telephone:data.telephone,
                email:data.email,
                password:data.password
            }

            axios.post('http://127.0.0.1:8000/api/register', sendData).then((result)=>{
                if(result.data.Status== 'Invalid'){
                    alert('Invalid User');
                }
                else {
                    history('/Login');
                }
            })
        }
        return(
        
            <div className="main-box">
                <form onSubmit={submitForm} className="forma">
                <div className="row">
                    <div className="register"><h1>Register</h1></div>
                </div>

                <div className="row">
                <div className="col-md-6">First Name</div>
                <div className="col-md-6">
                    <input type="text" name="first_name" className="form-control" 
                    onChange={handleChange} value={data.first_name}/>
                </div>
                </div>

                <div className="row">
                <div className="col-md-6">Last Name</div>
                <div className="col-md-6">
                    <input type="text" name="last_name" className="form-control"
                    onChange={handleChange} value={data.last_name} />
                </div>
                </div>
                
                <div className="row">
                <div className="col-md-6">Addres</div>
                <div className="col-md-6">
                    <input type="text" name="addres" className="form-control"
                    onChange={handleChange} value={data.addres} />
                </div>
                </div>

                <div className="row">
                <div className="col-md-6">Telephone</div>
                <div className="col-md-6">
                    <input type="text" name="telephone" className="form-control"
                    onChange={handleChange} value={data.telephone} />
                </div>
                
                </div>
                <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control"
                    onChange={handleChange} value={data.email}/>
                </div>
                </div>

                <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password" className="form-control"
                    onChange={handleChange} value={data.password}/>
                </div>
                </div>


                <div className="row">
                    <div className="col-md-12 text-center">
                    <input type="sumbit" name="sumbit" readOnly value="Register" className="btn-register" />
                    </div>
                </div>
                </form>
            </div>
            
        );
    }

    export default Register;