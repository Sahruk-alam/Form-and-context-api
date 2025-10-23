import React from 'react';

const FormButton = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div className='mt-5'>
            <form onSubmit={handleSubmit} >
                <input className='bg-white text-black p-2'
                name="name" type="text" placeholder='Your name ' />
                <br />
                <input name="email" type="text" placeholder='Email..' />
                 <br />
                <input className='bg-gray-700 p-2 mt-2' 
                type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormButton;