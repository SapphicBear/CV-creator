// Information on education, school names, title of study...
import CustomInput from "./CustomInput";
// import { useState } from "react";

export default function Education({ className, labelName = "School name/Program name, etc", type, id }) {
    
    function handleChange() {
        
    }
    return (
        <>
            <CustomInput 
                id={id}
                className={className}
                labelName={labelName}
                type={type}
                onChange={() => {
                    handleChange();
                }}
            />
        </>
    );
}