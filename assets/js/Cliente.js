export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = () => nombre;
    this._impuesto = () => impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = () => nombre;
  }
  /* set impuesto(impuesto) {
    this._impuesto = () => impuesto;
  } */

  calcularImpuesto() {
      return (
       'El impuesto es :' + ((this._impuesto().montoBrutoAnual - this._impuesto().deducciones) * 21) / 100
      );
  }
}
