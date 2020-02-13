import objectManager from "./objectManager.js";
import domManager from "./domManager.js";

const eventsManager = {
    addLogButtonEventListener: () => {
      const logButton = document.getElementById('logButton');
      logButton.addEventListener('click', () => {
        const newObject =  objectManager.createObjectFromForm();
        domManager.makeOneCard(newObject);
      })
    }
}

export default eventsManager;