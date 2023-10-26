import { SelectedProduct } from "./SelectedProduct";

export const Book = () => {
    const form = document.querySelector('#form');
    const formContainer = document.querySelector('.form-container-inputs');

    const saveData = () => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const day = document.querySelector('#day').value;

        const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

        if (name && email && day && SelectedProduct && SelectedProduct.id) {
            const data = {
                name,
                email,
                day,
                producto:SelectedProduct,
            localStorage.setItem('userTurn', JSON.stringify(data));
        }
    }


    formContainer.innerHTML = `
    <div>
        <label for="name">Nombre:</label>
        <input id="name" placeholder="Ingresa tu nombre por favor" type"text">
    </div>
    <div>
        <label for="email">Email:</label>
        <input id="email" placeholder="Ingrese su email" type"email">
    </div>
    <div>
        <label for="day">Día de compra:</label>
        <input id="day" type="date">
    </div>
    <p id="selected-producto"></p>
    <button id="save-button">Reservar Producto</button>
    `;

    const saveButton = document.querySelector('#save-button');
    saveButton.addEventListener('click', saveData)

    form.appendChild(formContainer);

    return form;
}


}