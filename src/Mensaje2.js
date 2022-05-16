const Mensaje = (props) => {
    return <h1 style={{color: props.color}}>{props.message}</h1>;
};
const Mensaje2 = (props) => {
    // console.log(props)
    return <h2 style={{color:props.color}}>{props.message}</h2>
}

export {Mensaje2}
export {Mensaje}