// Information on education, school names, title of study...
import CustomInput from "./CustomInput";
import Button from "./Button";


export default function Education({ disabled, value, id, onChange }) {
    
    return (
            <CustomInput 
                    key={id}
                    id={id}
                    placeholder="Enter a school, time of attendance and degree (if applicable)"
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    />
        );
    
}