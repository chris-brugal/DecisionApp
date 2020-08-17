import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(()=>{
            return{
                error: error
            }
        });

        if(!error){
            //wipes the textbox when submit
            e.target.elements.option.value = '';
        }
    };

    render(){
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option-input" type="text" name="option"></input>
                    <button className="small-button">Add Option</button>
                </form>
            </div>
        )
    };
}

//arrow functions dont have their own 'this', theyll use the this of the parent scope, which would be the class



// class OldSyntax {
//     constructor(){
//         this.name = 'mike';
//     }
// }

// class NewSyntax {
//     name = 'jen';
// }

