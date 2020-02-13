import htmlFactoryManager from "./htmlFactories.js";
import mainDomEntries from "./mainDomEntries.js";
const cardContainer = document.getElementById('card-container')
const domManager = {
    
    makeOneCard: (entry) => {
      const html =  htmlFactoryManager.makeCardHtml(entry);
      cardContainer.innerHTML += html;

    },
    makeMultipleCards: (arr)=> {
        cardContainer.innerHTML=""
        arr.forEach(obj=> {
 
            const html =  htmlFactoryManager.makeCardHtml(obj);
            cardContainer.innerHTML+= html;
        })
    },
    changeCardToForm: (id, obj) => {
     const card = document.getElementById(`card-${id}`);
     const html = mainDomEntries.editCardFormHtml(obj);
     card.innerHTML = html;

    },
    dollarSignCreater:(value) => {
        const dollarSigns = document.getElementById('dollarSigns');
      if(value==="1"){
          dollarSigns.innerHTML = '$'
      } else if (value==="2"){
        dollarSigns.innerHTML = '$$'
      }else if (value==="3"){
        dollarSigns.innerHTML = '$$$'
      } else if (value==="4"){
        dollarSigns.innerHTML = '$$$$'
      }else if (value==="5"){
        dollarSigns.innerHTML = '$$$$$'
      }
    }
}
export default domManager;