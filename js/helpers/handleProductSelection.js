import { Productos } from "./data";

export const handleProductSelection = (mascota) => {
    const selectedProduct = mascota;

    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

    const selectedProductDisplay = document.querySelector('#selected-product');
    selectedProductDisplay.textContent= `Estas por comprar ${Productos.name}`
}