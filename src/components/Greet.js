import React from 'react'

/*
function Greet(){
    return <div>Hello Prince</div>
}
*/

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h4>{props.children}</h4>
        </div>
    )
}

export default Greet;
