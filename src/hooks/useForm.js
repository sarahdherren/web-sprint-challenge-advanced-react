import { useState } from 'react';

export const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);
    
    const userValues = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [values, userValues];
};