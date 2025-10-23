import React, { useRef } from 'react';

const Uncontrolled = () => {
    const emailRef=useRef()
    const passwordRef=useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
        const email= emailRef.current.value;

        const password= passwordRef.current.value;
        console.log(email,password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} name="email" placeholder='email..'/>
                <br />
                <input type="password" ref={passwordRef} name="password" placeholder='password..' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Uncontrolled;