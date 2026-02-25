import { useState } from 'react';
import General from "./General";
import Button from "./Button";
import Education from './Education';
// will handle state change for all children, so General, Education, Practical
// App will be the combine 
// All fields should be editible and able to be clicked on to edit

function App() {
    const [asideActive, setAsideActive] = useState(true);
    function toggleAside() {
        setAsideActive(asideActive ? false : true)
    }
    const [isActive, setIsActive] = useState(true);
    const [generalValues, setGeneralValues] = useState({
        firstName: "",
        lastName: "",
        telephone: "",
        email: ""
    });
    const [educationSlots, setEducationSlots] = useState([]);
    const [eduValue, setEduValue] = useState("");
    const [pracSlots, setPracSlots] = useState([]);
    const [pracValue, setPracValue] = useState("");
    let general = {
        handleChangeFirstName(e) {
        setGeneralValues({
            ...generalValues,
            firstName: e.target.value
        });
    },
    handleChangeLastName(e) {
        setGeneralValues({
            ...generalValues,
            lastName: e.target.value
        });
    },
    handleChangePhone(e) {
        setGeneralValues({
            ...generalValues,
            telephone: e.target.value
        });
    },
    handleChangeEmail(e) {
        setGeneralValues({
            ...generalValues,
            email: e.target.value
        });
    }}
    let generalArea = [
        {
            className: "firstName",
            labelName: "First Name",
            id: "general-firstName",
            value: generalValues.firstName,
            onChange: general.handleChangeFirstName
        },
        {
            className: "lastName",
            labelName: "Last Name",
            id: "general-lastName",
            value: generalValues.lastName,
            onChange: general.handleChangeLastName
        },
        {
            className: "telephone",
            labelName: "Phone Number",
            id: "general-phone",
            value: generalValues.telephone,
            onChange: general.handleChangePhone
        },
        {
            className: "email",
            labelName: "Email",
            id: "general-email",
            value: generalValues.email,
            onChange: general.handleChangeEmail
        },
    ];

    function eduHandleAdd() {
        const newList = educationSlots.concat({ value: eduValue, id: crypto.randomUUID() });
        setEducationSlots(newList);
        setEduValue("");
    }
    function eduHandleDelete() {
        const newList = educationSlots.slice(0, -1);
        setEducationSlots(newList);

    }
    function eduHandleChange(e) {
        setEduValue(e.target.value);
    }

    function pracHandleAdd() {
        const newList = pracSlots.concat({ value: pracValue, id: crypto.randomUUID() });
        setPracSlots(newList);
        setPracValue("");
    }
    function pracHandleDelete() {
        const newList = pracSlots.slice(0, -1);
        setPracSlots(newList);
    }
    function pracHandleChange(e) {
        setPracValue(e.target.value);
    }
    return (
        <>
            <header>
                <h1>CV Creator in React</h1>
                <br />
                <hr />
            </header>
            <main>
                <h1>Your CV</h1>
                <section aria-labelledby='render-area1'>
                    <h2 id="render-area1">Personal Information</h2>
                    <hr></hr>
                    <div className="render-general-information">
                        <p className="rendered name">Name: {generalValues.firstName + " " + generalValues.lastName}</p>
                        <p className="rendered phone">Phone: {generalValues.telephone}</p>
                        <p className="rendered email">Email: {generalValues.email}</p>
                    </div>
                </section>
                <br />
                <hr />
                <section aria-labelledby='render-area2'>
                    <h2 id="render-area2">Education</h2>
                    <ul>
                        {educationSlots.map((item) => {
                            return (
                                <li key={item.id}>{item.value}</li>
                            )
                        })}
                    </ul>
                </section>
                <br />
                <hr />
                <section aria-labelledby="render-area3">
                    <h2 id="render-area3">Practical Experience</h2>
                    <ul>
                        {pracSlots.map((item) => {
                            return (
                                <li key={item.id}>{item.value}</li>
                            )
                        })}
                    </ul>
                </section>
            </main>
            <aside className="input-area" style={!asideActive ? { maxHeight: "120px" } : { maxHeight: "fit-content"}} aria-labelledby='aside-header'>
                <div className="aside-wrapper">
                    <h1 id="aside-header">Enter your information</h1>
                    <Button 
                        text={asideActive ? "↓" : "↑"}
                        type="button"
                        onClick={toggleAside}
                    />
                </div>
                <section className="general-information" aria-labelledby="section1"
                style={asideActive ? { visibility: "visible"} : {visibility: "hidden"}}>
                    <h2 id="section1">General information</h2>
                    <div className="wrapper">
                        <General
                            generalArea={generalArea}
                            disabled={isActive == true ? false : true}
                        />
                    </div>
                </section>
                <section 
                    className="education-information" aria-labelledby="section2"
                    style={asideActive ? { visibility: "visible"} : {visibility: "hidden"}}
                >
                    <div className="wrapper">
                    <h2 id="section2">Education</h2>
                    <AddEduItem 
                        value={eduValue}
                        onChange={eduHandleChange}
                        onAdd={eduHandleAdd}
                        onDelete={eduHandleDelete}
                        disabled={isActive == true ? false : true}    
                    />
                    </div>
                </section>
                <section 
                    className="practical-information" aria-labelledby="section3"
                    style={asideActive ? { visibility: "visible"} : {visibility: "hidden"}}
                >
                    <div className="wrapper">
                    <h2 id="section3">Practical Experience</h2>
                    <AddEduItem 
                        value={pracValue}
                        onChange={pracHandleChange}
                        onAdd={pracHandleAdd}
                        onDelete={pracHandleDelete}
                        disabled={isActive == true ? false : true}   
                    />
                    </div>
                </section>
                <div className="button-area">
                    <Button 
                        text="Save"
                        onClick={() => {
                            setIsActive(false)
                        }}
                />
                    <Button 
                        text="Edit"
                        onClick={() => {
                            isActive ? null : setIsActive(true)
                        }}
                    />
                </div>
            </aside>
        </>
    );
}

function AddEduItem ({ value, onChange, onAdd, onDelete, disabled }) {
    return (
        <>
            <Education 
                 onChange={onChange}
                 value={value}
                 disabled={disabled}
             />
             <div className='button-wrapper'>
             <Button 
                 text="Add"
                 onClick={onAdd}
                 disabled={disabled}
             />
             <Button 
                 text="Remove"
                 onClick={onDelete}
                 disabled={disabled}
             />
             </div>
        </>
    )
}

export default App 