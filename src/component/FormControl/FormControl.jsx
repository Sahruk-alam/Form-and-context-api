import React, { useState } from 'react';

const FormControl = () => {

const [password, setPassword] = useState("")
const [error,setError]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit data")
        if(password.length < 6){
            setError("password should be 6 characters");
        }
        
        else {
            setError("");
        }
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        // if(password.length < 6){
        //     setError("password should be 6 characters");
        // }
        
        // else {
        //     setError("");
        // }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" required name="email"  placeholder='email' />
                <br />
                <input type="password" onChange={handlePasswordChange}
                 defaultValue={password} required placeholder='password' name="password" />
                <br />
                <input type="submit" value="Login" />
            </form>
            <p className='text-red-500'>
                {error}
            </p>
        </div>
    );
};

export default FormControl;