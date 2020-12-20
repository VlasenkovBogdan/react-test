import React from 'react';

class InfoField extends React.Component{
constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this)
        }

    handleChange(e) {
        
        this.props.changedData(e)
    }
    render(){
        return(
         <div>
                        <div>
                        <div>Координата по оси х: </div>
                        <input type="text" className='xPos' id='xPos' onChange={this.handleChange} value= {this.props.xcor} />
                        </div>
                        <div>
                        <div>Координата по оси х: </div>
                        <input type="text" className='yPos' id='yPos' onChange={this.handleChange} value={this.props.ycor} />
                        </div>
                        <div>
                        <div>Название метки: </div>
                        <input type="text" className='posName' id='posName' onChange={this.handleChange} value={this.props.name} />
                        </div>
                        <div>
                        <div>Количество товара: </div>
                        <input type="text" className='amount' id='amount' onChange={this.handleChange} value={this.props.amount} />
                        </div>  
         </div> 
        )
    }
    
}



export default InfoField