
import './../styles/App.css';
import General from "./General";
// will handle state change for all children, so General, Education, Practical
// App will be the combine 
// All fields should be editible and able to be clicked on to edit

function App() {
    const initialValues = [
        {
            general: {
                firstName: null,
                lastName: null,
                telephone: null,
                email: null
        }},
        {
            education: {
                schools: [],
                courses: [],
            }
        },
        {
            practical: {
                jobs: [],
            }
        }
    ];

    return (
        <>
            <header>
                <h1>CV Creator in React</h1>
                <br />
                <hr />
            </header>
            <main>
                <h1>Enter your information</h1>
                <section className="general-information" aria-labelledby="section1">
                    <h2 id="section1">General information</h2>
                    <div className="wrapper">
                    <General 
                        className="firstName"
                        labelName="First Name"
                        id={crypto.randomUUID()}
                        initialValues={initialValues.general}
                    />
                    <General 
                        className="lastName"
                        labelName="Last Name"
                        id={crypto.randomUUID()}
                        initialValues={initialValues.general}
                    />
                    <General 
                        className="telephone"
                        labelName="Phone Number"
                        type="tel"
                        id={crypto.randomUUID()}
                        initialValues={initialValues.general}
                    />
                    <General 
                        className="email"
                        labelName="Email Address"
                        type="email"
                        id={crypto.randomUUID()}
                        initialValues={initialValues.general}
                    />
                    </div>
                </section>
                <br />
                <hr />
                <section className='education-information' aria-labelledby="section2">
                    <h2 id="section2">Education information</h2>
                    
                </section>
            </main>
        </>
    );
}


export default App 