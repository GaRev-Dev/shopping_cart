import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {
  state = {
    productos: [
      { name: 'Keyboard', price: '$ 20', img: '/productos/teclado.png' },
      { name: 'Mouse', price: '$ 12', img: '/productos/mouse.png' },
      { name: 'Headset', price: '$ 20', img: '/productos/auriculares.png' }
    ],
    carro: [],
    esCarroVisible: false
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(e => e.name === producto.name)) {
      const newCarro = carro.map(e => e.name === producto.name
        ? ({
          ...e,
          cantidad: e.cantidad + 1
        })
        : e)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  eliminarDelCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(e => e.name === producto.name)) {
      const newCarro = carro.map(e => e.name === producto.name
        ? ({
          ...e,
          cantidad: e.cantidad - 1
        })
        : e)
      return this.setState({ carro: newCarro })
    }
  }

  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }


  render() {
    const {esCarroVisible} = this.state
    console.log(this.state.carro)
    return (
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro} eliminarDelCarro={this.eliminarDelCarro}/>
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
