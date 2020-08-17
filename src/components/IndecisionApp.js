import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        option: '',
        selectedOption: undefined
    };

    //are now class properties (with the arrow functions)
    handleDeleteOptions = () => {
         this.setState(() => ({options: [] }));
    }

    handleButtonClick = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    }


    handleDeleteOption = (optionToRemove) => {
        //double arrow function. filters through array and keeps all that arent the parameter
        this.setState((prevState) => ({
            options: prevState.options.filter((option)=>{
                    return !(optionToRemove === option);
                })
        }))
    }

    handlePick = () => {
        
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => {
            return{
                selectedOption: option
            }
        });
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat([option])
            }
        });
    }

    //lifetime cycles
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            //when refreshed, auto uses local storage
            if(options){
                this.setState(()=>({options}));
            }
        }catch(e){
            //do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log('comp will unmount');
    }

    render(){
        //by having the delete options function, it can be accessed by child class like action
        //since the child class cant modify the array any other way
        const title = 'Indecision';
        const subtitle = 'Put your life at the hands of a computer';

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">                
                    <Action hasOptions={this.state.options.length > 0} 
                    handlePick = {this.handlePick} />

                    <div className="widget">
                        <Options optionsArr={this.state.options} 
                        handleDeleteOptions = {this.handleDeleteOptions} 
                        handleDeleteOption = {this.handleDeleteOption}/>

                        <AddOption handleAddOption={this.handleAddOption}/>

                        <OptionModal selectedOption={this.state.selectedOption}
                        handleButtonClick = {this.handleButtonClick}/>
                    </div>
                </div>

            </div>
        )
    }
}