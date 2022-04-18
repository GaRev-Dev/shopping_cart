import { Component } from "react";

const styles = {
    title: {
        marginBottom: '30px',
        color: '#C50000'
    }
}

const Title = () => {
    return (
        <h1 style={styles.title}>Products</h1>
    )
}

// class Title extends Component {
//     render() {
//         return (
//             <h1 style={styles.title}>Products</h1>
//         )
//     }
// }

export default Title