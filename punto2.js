var coordenadas = new Array();

for( let filas=1; filas<=5; filas++){
    coordenadas[filas] = new Array();
    for( let columnas = 1; columnas <=5; columnas++){
        coordenadas[filas][columnas] = " " +filas + " " + columnas + " ";
    }
}

for (let coordenada in coordenadas){
    document.write(coordenadas[coordenada] + '<br/>');
}