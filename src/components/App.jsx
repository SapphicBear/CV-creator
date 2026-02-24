import { useState } from 'react';
import './../styles/App.css';
import General from "./General";
import Button from "./Button";
// will handle state change for all children, so General, Education, Practical
// App will be the combine 
// All fields should be editible and able to be clicked on to edit

function App() {
    const [asideActive, setAsideActive] = useState(true);
    function toggleAside() {
        setAsideActive(asideActive ? false : true)
    }
    const [genIsActive, setGenIsActive] = useState(true);
    const [generalValues, setGeneralValues] = useState({
        firstName: "",
        lastName: "",
        telephone: "",
        email: ""
    });
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
            </main>
            <aside className="input-area" style={!asideActive ? { maxHeight: "120px" } : { minHeight: "50vh"}} aria-labelledby='aside-header'>
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
                            disabled={genIsActive == true ? false : true}
                        />
                        <Button 
                            text="Save"
                            onClick={() => {
                                setGenIsActive(false)
                            }}
                        />
                        <Button 
                            text="Edit"
                            onClick={() => {
                                genIsActive ? null : setGenIsActive(true)
                            }}
                        />
                    </div>
                </section>
            </aside>
        </>
    );
}


export default App 