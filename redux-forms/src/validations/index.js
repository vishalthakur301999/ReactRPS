export const validate = (inputs) => {
    const errors={};
    if(!inputs.username){
        errors.username = "Enter your username"
    }else if(inputs.username !== 'vishal'){
        errors.username = "Username is incorrect"
    }else{
        errors.password = "Enter password"
    }
    return errors
}