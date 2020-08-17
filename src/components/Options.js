import React from 'react';
import Option from './Option'


const Options = (props)=>{
    return(
        <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button onClick={props.handleDeleteOptions} className="small-button small-button--link">Remove All</button>
        </div>
        {props.optionsArr.length === 0 && <p className="message">Please add an option to get started!</p>}
            {
                props.optionsArr.map((option, index)=>
                    <Option 
                    key={option} 
                    optionText={option}
                    count ={index + 1} 
                    handleDeleteOption = {props.handleDeleteOption}/>
                )
            }
        </div>
    )
}
export default Options;