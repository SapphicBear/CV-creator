
import './../styles/App.css';
import General from "./General";
// will handle state change for all children, so General, Education, Practical
// App will be the combine 
// All fields should be editible and able to be clicked on to edit

function App() {

    return (
        <>
            <header>
                <h1>CV Creator in React</h1>
                <br />
                <hr />
            </header>
            <main>
                <h1>General Information</h1>
                <section className="general-information">
                    <General 
                        className="firstName"
                        labelName="First Name"
                        id={crypto.randomUUID()}
                    />
                    <General 
                        className="lastName"
                        labelName="Last Name"
                        id={crypto.randomUUID()}
                    />
                    <General 
                        className="telephone"
                        labelName="Phone Number"
                        type="tel"
                        id={crypto.randomUUID()}
                    />
                    <General 
                        className="email"
                        labelName="Email Address"
                        type="email"
                        id={crypto.randomUUID()}
                    />
                </section>
                <br />
                <hr />
                <section className='education-information'>
                    
                </section>
            </main>
        </>
    );
}


export default App 