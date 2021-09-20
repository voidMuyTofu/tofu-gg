import { useState } from 'react'

export const useInput = (initialValue : string) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e : any) => {
        setValue(e.target.value);
    }

    return{
        value,
        onChange: handleChange
    }
}