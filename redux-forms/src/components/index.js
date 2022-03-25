import React, { Component } from 'react'
import {Field, reduxForm} from "redux-form";
import MyInput from './fields';
import { requiredInput, correctInput, confirmPassVal } from '../validations/fieldVal'

class LoginForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="username" component={MyInput} type="text" placeholder="Username" validate={[requiredInput, correctInput]} />
                <Field name="password" component={MyInput} type="password" placeholder="Password" validate={[requiredInput]} />
                <Field name="confirmPassword" component={MyInput} type="password" placeholder="Confirm Password" validate={[requiredInput, confirmPassVal]} />
                <button type="submit" >Submit button </button>
            </form>
        )
    }
}
// Field props -> name: acts as identifier , component -> it is a prop that refers to the html element of that field.
LoginForm = reduxForm({form: 'login'})(LoginForm); // this syntax you have to remember

export default LoginForm
