import Cliente from './Cliente.js';
import Impuestos from './Impuestos.js';

const cliente1Impuesto = new Impuestos(100, 500);//creamos un objeto
console.log(cliente1Impuesto);

const cliente1 = new Cliente("jose", cliente1Impuesto);
console.log(cliente1.calcularImpuesto());