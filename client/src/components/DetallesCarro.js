import { Component } from "react";

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: ' 25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

const DetallesCarro = ({ carro, eliminarDelCarro }) => {
    // console.log(eliminarDelCarro)
    return (
        <div style={styles.detallesCarro}>
            <ul style={styles.ul}>
                {carro.map(e => e.cantidad > 0 ?
                    <li style={styles.producto} key={e.name}>
                        <img alt={e.name} src={e.img} width='50' height='32' />
                        {e.name} <span> {e.cantidad} </span>
                        <a onClick={() => eliminarDelCarro(e)}>-</a>
                    </li>
                    :null
                    )}
            </ul>
        </div>
    )
}


export default DetallesCarro