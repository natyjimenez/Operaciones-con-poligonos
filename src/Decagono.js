import Poligono from './Poligono'
const decagono = {
  area() {
    let lado = Poligono.valores()[1]
    let apotema = Poligono.valores()[3]
    return (lado * 10 * apotema) / 2
  },
  perimetro() {
    let lado = Poligono.valores()[1]
    return lado * 10
  }
}

export default decagono