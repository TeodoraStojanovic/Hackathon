import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


    const Login=(props)=>{
        let history = useNavigate();
        const [data, setData]=useState({
            email:"",
            password:""
        })

        const handleChange=(e)=>{
            setData({ ...data, [e.target.name]: e.target.value}); 
        }

        const submitForm=(e)=>{
            e.preventDefault();
        const sendData= {
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
        
            <div className="main-boxL">
                <form onSubmit={submitForm} className="forma">
                <div className="row">
                    <div className="login"><h1>Log in</h1></div>
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
                    <input type="sumbit" name="sumbit" readOnly value="Log in" className="btn-login" />
                    </div>
                </div>
                </form>
            </div>
            
        );
    }

    export default Login;