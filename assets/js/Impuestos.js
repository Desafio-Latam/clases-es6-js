
export default class Impuestos {
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = () => montoBrutoAnual;
        this._deducciones = () => deducciones;
    }
    get montoBrutoAnual() {
        return this._montoBrutoAnual();
    }
    get deducciones() {
        return this._deducciones();
    } 

    set montoBrutoAnual(montoBrutoAnual){
        this._montoBrutoAnual = () => montoBrutoAnual;
    }

    set deducciones(deducciones) {
        this._deducciones = () => deducciones;
    }



    
}