import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor: '#00CC00',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

const Carro = ({ carro, esCarroVisible, mostrarCarro, eliminarDelCarro }) => {
    const cantidad = carro.reduce((sum, e) => sum + e.cantidad, 0)
    return (
        <div>
            <span style={styles.bubble}>
                {cantidad > 0
                    ? <BubbleAlert value={cantidad} />
                    : null}
            </span>
            <button onClick={mostrarCarro} style={styles.carro}>
                Cart
            </button>
            {esCarroVisible ? <DetallesCarro carro={carro} eliminarDelCarro={eliminarDelCarro} /> : null}

        </div>
    )
}



export default Carro