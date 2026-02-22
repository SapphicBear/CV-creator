// General information, name email and phone number section
import CustomInput from "./CustomInput"
import { useState } from "react";

function General({ className, type, labelName, id }) {
    const [values, setValues] = useState({
        firstName: null,
        lastName: null,
        telephone: null,
        email: null
    });
    function handleChange(selectedValue, e) {;
        setValues({...values, selectedValue: e.target.value })
    }
    return (
        <>
            <CustomInput 
                type={type}
                id={id}
                className={className}
                labelName={labelName}
                value={values[{className}]}
                onChange={(e) => {
                    handleChange({className}, e)
                }}
            />
        
        </>
    );
}

export default General