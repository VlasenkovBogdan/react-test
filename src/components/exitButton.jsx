import React from 'react';

class ExitButton extends React.Component{
    constructor(props) {
        super(props);
        this.exitButton =this.exitButton.bind(this)

    }
    exitButton(){
        let isExit = window.confirm(`exit?`);
        if(isExit){
            localStorage.removeItem('log')
            localStorage.removeItem('pass')

        }
    }
    render(){
        return(
         <button onClick={this.exitButton}>Exit</button>   
        )
    }
    
}



export default ExitButton