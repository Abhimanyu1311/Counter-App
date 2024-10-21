import React, { useEffect, useState } from 'react'

const InputField =({type,placeholder,value,onChange,fieldName})=>{
    const [newValue,setNewValue]=useState(value)
    useEffect(()=>{
        setNewValue((+value))
    },[value])
    
    return(
        <label>
            {fieldName}
            <input className={"flex items-center p-2  w-300"} 
                type={type} placeholder={placeholder} value={newValue} onChange={onChange} min={0} />
            </label>
    )
}
export default InputField;