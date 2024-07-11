export default class Cl_Contador{
    constructor(){
        this.cantMujeres = 0;
        this.cantHombres = 0;  
        this.cantPersonas = 0;  

}
procesarPersona(per){
    if(per.sexo == "M"){
        this.cantHombres++;
    }
    else if (per.sexo == "F" ){
        this.cantMujeres++;
    }
    this.cantPersonas++;
}
ContadorMujeres(){
    return this.cantMujeres
}
ContadorHombres(){
    return this.cantHombres
}
ContadorPersonas(){
    return this.cantPersonas
}
}