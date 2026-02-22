
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
            </header>
            <main>
                <General 
                />
            </main>
        </>
    );
}


export default App 