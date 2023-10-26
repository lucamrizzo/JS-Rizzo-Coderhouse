export const SelectedProduct = () => {

    const userData = JSON.parse(localStorage.getItem('userPurchase'));

    const form = document.querySelector('.form-container');
    form.remove();
    
    const div = document.createElement('div');
    div.setAttribute('class', 'purchase-container');

    div.innerHTML = `
    <div class="purchase-content">
        <div class="purchase-content-left">
            <h2>Reservo el producto</h2>
            <h3>A nombre de: ${userData.name}</h3>
            <p>Contacto: ${userData.email}</p>
            <p>Fecha: ${userData.day}</p>
        </div>
        <div class="purchase-content-rigth">
            <button class="delete-button">Eliminar Reserva</button>
        </div>
    </div>
    
    `;

    const deleteButton = div.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        localStorage.clear();
        window.location.reload();
    })

    return div;
}