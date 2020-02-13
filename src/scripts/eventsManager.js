import objectManager from "./objectManager.js";
import domManager from "./domManager.js";
import apiManager from "./apiManager.js";

const eventsManager = {
  addLogButtonEventListener: () => {
    const logButton = document.getElementById("logButton");
    logButton.addEventListener("click", () => {
      const newObject = objectManager.createObjectFromForm();
      apiManager
        .postInterestData(newObject)
        .then(apiManager.getInterestsData)
        .then(arr => {
          domManager.makeMultipleCards(arr);
        });
      objectManager.clearFormField();
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
        console.log("edit");
      }
    });
  }
};

export default eventsManager;
