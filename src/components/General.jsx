// General information, name email and phone number section
import CustomInput from "./CustomInput"
import { useState } from "react";

function General() {
    const [values, setValues] = useState({
        firstName: null,
        lastName: null,
        telephone: null,
        email: null
    });

    let inputs = [
        {
            id: crypto.randomUUID(),
            className: "firstName", 
            labelName: "First Name",
            type: "text",
            onChange: function (e) {
                setValues({...values, firstName: e.target.value});
            }
        },
        {
            id: crypto.randomUUID(),
            className: "lastName",
            labelName: "Last Name",
            type: "text",
            onChange: function (e) {
                setValues({...values, lastName: e.target.value});
            }
        },
        {
            id: crypto.randomUUID(),
            className: "telephone",
            labelName: "Phone Number",
            type: "tel",
            onChange: function (e) {
                setValues({...values, telephone: e.target.value});
            }
        },
        {
            id: crypto.randomUUID(),
            className: "email",
            labelName: "Email",
            type: "email",
            onChange: function (e) {
                setValues({...values, email: e.target.value});
            }
        }
    ];
    return (
        <section className="general-information">
            {inputs.map((input) => {
                return (
                    <CustomInput 
                        type={input.type}
                        className={input.className}
                        labelName={input.labelName}
                        value={input.value}
                        onChange={input.onChange}
                        id={input.id}
                    />
                );
            })}
        </section>
    )
}

export default General