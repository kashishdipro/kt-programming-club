import React from 'react';
import './QandA.css'

const QandA = () => {
    return (
        <div className='QandA'>
            <div className='QandA-container'>
                <div className='first'>
                    <h3>How does react work?</h3>
                    <h5>Ans: ReactJS is one of the most popular JavaScript
                         libraries(not a framework) for mobile and web application development.
                         Created by Facebook, React contains a collection of
                         reusable JavaScript code snippets used for user
                         interface (UI) building called components. One
                         of the biggest advantages of using React is that you
                         can infuse HTML code with JavaScript. JSX tags have
                         a name, children, and attributes. Numeric values and
                         expressions must be written inside curly brackets.
                         The quotation marks in JSX attributes represent
                         strings, similarly to JavaScript. In most cases,
                         React is written using JSX instead of standard
                         JavaScript to simplify components and keep code clean.
                         A React app usually has a single root DOM node.
                         Rendering an element into the DOM will change the
                         user interface of the page.</h5>
                </div>
                <div className='second'>
                    <h3>What is the difference between props and state?</h3>
                    <h5>Ans: Props: Props are known as properties it can
                         be used to pass data from one component to
                         another. Props cannot be modified, read-only,
                         and Immutable.
                         State: The state represents parts of an Application
                         that can change. Each component can have its State.
                         The state is Mutable and It is local to the
                         component only.</h5>
                </div>
                <div className='third'>
                    <h3>What are the purpose of using useEffect except fetching data?</h3>
                    <h5>Ans: Let's take a look at some use cases for this hook except fetching data:
                        1. Running on state change: validating input field,
                         2. Running on state change: live filtering,
                         3. Running on state change: trigger animation on new array value,
                         4. Running on props change: update paragraph list on fetched API data update,
                         5. Running on props change: updating fetched API data to get BTC updated price.</h5>
                </div>
            </div>
        </div>
    );
};

export default QandA;