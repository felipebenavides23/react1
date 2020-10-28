import React from 'react';

const holamundo = () =>  {

    const hello = 'hola MUNDO '
    const curso = ' curso de react '
    const istrue = false

    return(
        <div className='holamundo'>
            <h1>{hello}</h1>
            <h2>{curso}</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt=""/>

            { istrue ? <h4> esto es verdadero </h4> : <h4> soy falso</h4>}

            { istrue && <h4> soy verdadero</h4>}
        </div>
    )
}

export default holamundo;