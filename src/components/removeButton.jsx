import React from 'react';

class RemoveButton extends React.Component{
constructor(props) {
            super(props);
            this.removeButton = this.removeButton.bind(this)
        }

    removeButton() {
        
        let isRemove = window.confirm(`Вы не сможете вернуть удаленные метки. Продолжить?`);
        if (isRemove) {
            this.props.remove()
        }
    }
    render(){
        return(
         <button onClick={this.removeButton} >Clear Map</button>   
        )
    }
    
}



export default RemoveButton