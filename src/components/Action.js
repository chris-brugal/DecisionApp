import React from 'react';

//Action will be a stateless function component. its faster, easier to write, and easier to test
const Action = (props) =>{
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions} className="big-button">
            What should I do?</button>
        </div>
    )
}
export default Action;