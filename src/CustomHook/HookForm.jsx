import React from 'react';
import useForm from './Custom';

const HookForm = () => {
    const [name, nameOnChange] = useForm("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit data" ,name)
    
    }
    console.log("rendering form");
    return (
        <div>
            <form onSubmit={handleSubmit}>
        <input value={name} type="email" required name="email" 
         placeholder='email' onChange={nameOnChange} />
         <br />
        <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;