import { Component } from "react";
import Button from './Button'

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    img: {
        width: '100%'
    }
}

const Producto = ({ producto, agregarAlCarro }) => {
    return (
        <div style={styles.producto}>
            <h3>{producto.name}</h3>
            <img style={styles.img} alt={producto.name} src={producto.img} />
            <p>{producto.price}</p>
            <Button onClick={() => agregarAlCarro(producto)}>
                Add to cart
            </Button>
        </div>
    )
}

export default Producto