// Information on education, school names, title of study...
import CustomInput from "./CustomInput";

export default function Education({ className, labelName, type, id }) {

    return (
        <>
            <CustomInput 
                id={id}
                className={className}
                labelName={labelName}
                type={type}
            />
        </>
    );
}