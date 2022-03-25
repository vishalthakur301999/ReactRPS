export const requiredInput = (input: any) => {
    return input ? undefined : 'Input is required';
}

export const correctInput = (input: any) => {
    return input !== "vishal" ? 'Input is incorrect': undefined;
}

export const confirmPassVal = (input: any, allinput: {password: any}) => {
    return input === allinput.password ? undefined: "passwords do not match";
}