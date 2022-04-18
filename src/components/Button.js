import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#007C00',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

const Button = (props) => {
    return(
        <button style={styles.button} {...props}/>
    )
}


export default Button