import React from 'react';

function Form(){
    let firstname;
    let lastname;
    return (
        <form>
            <label>Enter your first name:</label>
            <input type="text" value={firstname}/><br/>
            <label>Enter your last name:</label>
            <input type="text" value={lastname}/><br/>
            <button>Submit</button>
        </form>
    )
}
export default Form;