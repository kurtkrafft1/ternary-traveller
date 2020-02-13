const htmlFactoryManager = {
  makeCardHtml: (obj) => {

    const dollarSign = "$";
    const dollarsigns = dollarSign.repeat(obj.price);
    if (obj.review === "") {
      return `
      <div class="newCard" id="card-${obj.id}">
      <input value="${obj.placeId}"id="place-${obj.id}" type="hidden">
      <legend>Place of Interest</legend>
      <fieldset>
        <h2>Place: <span>${obj.place.name}</span></h2>
        <h3>Region or City: <span id="region-${obj.id}">${obj.location}</span></h3>
        <h3>Description</h3>
        <ul>
            <li id="description-${obj.id}">${obj.locationDescription}</li>
        </ul>
        <h3>Price: <span id="price-${obj.id}">${obj.price}</span>-- ${dollarsigns}</h3>
        <p id="review-${obj.id}"></p>
        <br>
        <br>
        <br>
        <br>
        <div class="buttons">
        <button type="button" id="delete-${obj.id}">Delete</button>
        <button type="button" id="edit-${obj.id}">Edit</button>
        </div>
        </fieldset>
        </div>

      `;
    } else {
      return `
      <div class="newCard" id="card-${obj.id}">
      <legend>Located</legend>
      <fieldset>
      <input value="${obj.placeId}"id="place-${obj.id}" type="hidden">
        <h2>Place: <span>${obj.place.name}</span></h2>
        <h3>Region or City: <span id="region-${obj.id}">${obj.location}</span></h3>
        <h3>Description</h3>
        <ul>
            <li id="description-${obj.id}">${obj.locationDescription}</li>
        </ul>
        <h3>Price: <span id="price-${obj.id}">${obj.price}</span>-- ${dollarsigns}</h3>
        <h3>Review</h3>
            <ul id="card-list">
            <li id="review-${obj.id}">${obj.review}</li>
            </ul>
        <div class="buttons">
        <button type="button" id="delete-${obj.id}">Delete</button>
        <button type="button" id="edit-${obj.id}">Edit</button>
        </div>
        </fieldset>
        </div>
      `;
    }
  }
};

export default htmlFactoryManager;


