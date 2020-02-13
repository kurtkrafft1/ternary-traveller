import mainDomEntries from "./mainDomEntries.js";
import eventsManager from"./eventsManager.js";
console.log('hey')

mainDomEntries.createMainForm();
eventsManager.addLogButtonEventListener();
eventsManager.addDeleteAndEditButtonEventListener();