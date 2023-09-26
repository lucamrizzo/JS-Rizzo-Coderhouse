function login() {
    let Contraseña = prompt('Ingresar contraseña');
    if (Contraseña===''){
    do{
        alert('Debe ingresar una contraseña')
        Contraseña = prompt('Ingrese su nueva contraseña');
    }while (Contraseña==='')
}
    let intentos = 3;
    let ingresar = false;
    for (let i = intentos; i > 0; i--) {
        let Ncontraseña = prompt('Ingresá la contraseña, Tenés ' + i + ' intentos.');
        if (Ncontraseña === Contraseña) {
            alert('Bienvenido/a al e-shop');
            ingresar = true;
            break;
        } else {
            alert('Error, Te quedan ' + (i - 1) + ' intentos.');
        }
    }
    return ingresar;
}


if (login()){
    let opcion= prompt('elija su producto:\n1. Bochas \n2. Rastrillos \n3. Baldes');
    function compraProducto(opcion){
        let producto
        switch(opcion){
            case '1':
                producto='Bochas';
                break;
            case '2':
                producto='Rastrillos';
                break;
            case '3':
                producto='Baldes';
                break;
            default:
                if (opcion===""){
                    alert('No ingresaste ningun valor');
                }else{
                    alert('No ingresaste un producto');
                    };
                    do{
                        opcion=prompt('elija nuevamente el producto deseado:\n1. Bochas \n2. Ratrillos \n3. Baldes')
                        if (opcion==1){
                            producto='Bochas';
                            break;
                        }else if (opcion==2){
                            producto='Rastrillos';
                            break;
                        } else if (opcion==3){
                            producto='Baldes';
                            break;
                        } else{
                            alert('Opcion invalida')
                        }
                    } while(opcion==="" || opcion !==1 || opcion !== 3);
        }
        return Producto
    }
let Producto= compraProducto(opcion);
alert('el Producto seleccionado es: ' + juego)
} else{
    alert('ERROR, No pudiste iniciar sesion, preciona F5 para reiniciar')
}