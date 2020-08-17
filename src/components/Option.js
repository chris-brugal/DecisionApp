import React from 'react';

const Option = (props)=>{
    return (
        <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
            <button className="small-button small-button--link"
                    onClick={
                        (e)=>{
                            props.handleDeleteOption(props.optionText)
                        }
                    }>Remove</button>
        </div>
    )
    //dont want to pass up the "e" so you do the arrow func
}
export default Option;