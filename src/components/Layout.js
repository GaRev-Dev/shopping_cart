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

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout