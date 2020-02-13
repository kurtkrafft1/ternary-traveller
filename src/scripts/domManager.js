import htmlFactoryManager from "./htmlFactories.js";
const cardContainer = document.getElementById('card-container')
const domManager = {
    makeOneCard: (entry) => {
      const html =  htmlFactoryManager.makeCardHtml(entry);
      cardContainer.innerHTML += html;

    }
}
export default domManager;