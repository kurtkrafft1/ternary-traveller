import mainDomEntries from "./mainDomEntries.js";
import eventsManager from"./eventsManager.js";


mainDomEntries.createMainForm();
eventsManager.addLogButtonEventListener();
eventsManager.priceRangeListener();;
eventsManager.loadAllCArds();
eventsManager.addDeleteAndEditButtonEventListener();