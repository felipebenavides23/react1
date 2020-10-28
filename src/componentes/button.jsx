import React from 'react';

class button extends React.Component{
        state={
            nombre : 'tienes que hacer click para aumentar',
            count : 0
         }    
         
         handleclick = () =>{
             this.setState({
                 count: this.state.count + 1
             })
         }
    render(){
        const {count} = this.state
        const {nombre} = this.state
        return(
            <div>
                <button onClick={this.handleclick}>{nombre}</button>
        <h1> muertes:{count}</h1>
            </div>
        )
    }

}


export default button;