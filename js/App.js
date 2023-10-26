import { Book } from "./components/Book.js";
import { CardContainer } from "./components/cardContainer.js";
import { SelectedProduct } from "./components/SelectedProduct.js";
import { Productos } from "./helpers/data.js";

export const App = () => {
    let appRoot = document.querySelector('#root');
    // console.log(appRoot)
    const userData = JSON.parse(localStorage.getItem('userTurn'));

    if(userData){
        appRoot.append(userData ? SelectedProduct() : '')
    } else {
        appRoot.append(CardContainer({ product: Productos }));
        appRoot.append(Book({ product: Productos }))
    }

}