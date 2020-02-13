import objectManager from "./objectManager.js";
import domManager from "./domManager.js";
import apiManager from "./apiManager.js";

const eventsManager = {
  addLogButtonEventListener: () => {
    const logButton = document.getElementById("logButton");
    logButton.addEventListener("click", () => {
      const select = document.getElementById('placeDropdown');
      if(select.value === 'pleaseSelect'|| select.value===""){
        alert('Please Select a Place')
      } else {
      
      const newObject = objectManager.createObjectFromForm();

      apiManager
        .postInterestData(newObject)
        .then(apiManager.getInterestsData)
        .then(arr => {
          const newArr = arr.reverse();
          domManager.makeMultipleCards(newArr);
        });
      objectManager.clearFormField();
    }});
  
  },
  loadAllCArds: () => {
    apiManager.getInterestsData().then(arr => {
      const newArr = arr.reverse();
      domManager.makeMultipleCards(newArr);
    });
  },

  addDeleteAndEditButtonEventListener: () => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.addEventListener("click", () => {
      if (event.target.id.split("-")[0] === "delete") {
        const userPrompt = prompt(
          "Are you sure you want to delete this card? (y/n)"
        );
        if (userPrompt === "y") {
          apiManager
            .deleteInterestCard(event.target.id.split("-")[1])
            .then(apiManager.getInterestsData)
            .then(arr => {
              const newArr = arr.reverse();
              domManager.makeMultipleCards(newArr);
            });
        } else {
          alert("Okay, it stays!");
        }
      } else if (event.target.id.split("-")[0] === "edit") {
        const id = event.target.id.split("-")[1];
        const place = document.getElementById(`place-${id}`);
        const region = document.getElementById(`region-${id}`);
        const description = document.getElementById(`description-${id}`);
        const price = document.getElementById(`price-${id}`);
        const review = document.getElementById(`review-${id}`);
        const cardObj = {
          id: id,
          placeId: Number(place.value),
          location: region.innerHTML,
          locationDescription: description.innerHTML,
          price: Number(price.value),
          review: review.innerHTML
        };
        // console.log(cardObj);
        domManager.changeCardToForm(id, cardObj);
      } else if (event.target.id.split("-")[0] === "submit") {
        const id = event.target.id.split("-")[1];
        const updatedObject = objectManager.createUpdatedObject(id);
        apiManager
          .updateSpecificCard(id, updatedObject)
          .then(apiManager.getInterestsData)
          .then(arr => {
            const newArr = arr.reverse();
            domManager.makeMultipleCards(newArr);
          });
      }
    });
  },

  priceRangeListener: () => {
    const pricerange = document.getElementById("priceRange");
    pricerange.addEventListener("mouseup", () => {
      domManager.dollarSignCreater(event.target.value);
    });
  }
};

export default eventsManager;
