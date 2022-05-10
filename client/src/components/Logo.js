import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
        color: 'white'
    }
}

const Logo = () => {
    return (
        <div style={styles.logo}>
            React Shopping Cart
        </div>
    )
}

export default Logo