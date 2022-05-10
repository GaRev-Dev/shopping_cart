import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#fff',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        width: '1200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const Layout = ({children}) => {
    return (
        <div style={styles.layout}>
            <div style={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Layout