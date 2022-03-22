import React from 'react';
import { Input, Button, Spacer } from '@geist-ui/core'

const GForm = () => {
    const {useState} =React;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
    };
    const lastNameHandler = (e) => {
        setLastName(e.target.value);
    };

    const handleSubmit = (e) => {
        alert(`${firstName} ${lastName}`);
        e.preventDefault();
    }

    return (
        <div>
            <Input
                placeholder="Your First Name"
                scale={4 / 3}
                width="60%"
                value={firstName}
                onChange={firstNameHandler} />
            <Spacer h={.5} />
            <Input
                placeholder="Your Last Name"
                scale={4 / 3}
                width="60%"
                value={lastName}
                onChange={lastNameHandler} />
            <Spacer h={.5} />
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    );    
    
    
}

export default GForm;