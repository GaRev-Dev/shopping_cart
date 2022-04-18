import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#FF0000',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px'
    }
}

const BubbleAlert = ({ value }) => {
    const getNumber = (n) => {
        if (!n) return ''
        return n > 9 ? '9+' : n
    }
    return (
        <span style={styles.bubbleAlert}>
            {getNumber(value)}
        </span>
    )
}


export default BubbleAlert