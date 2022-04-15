import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {
  state = {
    productos: [
      { name: 'Teclado', price: 1500, img: '/productos/teclado.png' },
      { name: 'Raton', price: 2500, img: '/productos/mouse.png' },
      { name: 'Auriculares', price: 500, img: '/productos/auriculares.png' }
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

  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }


  render() {
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro}/>
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
