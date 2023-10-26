import { handleProductSelection } from "../helpers/handleProductSelection.js";

export const Card = (props) => {

    let { name, material, id } = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');
    div.innerHTML =
        `
      <div class="card-body">
        <p><span>${material}</span> <span>${origin}</span></p>
        <h2> ${name}</h2>
        <a data-id=${id} class="card-link">Seleccionar Producto</a>
      </div>
    `;

    const selectedProductLink = div.querySelector('.card-link');
    selectedProductLink.addEventListener('click', () => handleProductSelection(props));

    return div;
}