const htmlFactoryManager = {
  makeCardHtml: obj => {
    console.log("change placeID to place.place");
    if (obj.review === "") {
      return `
      <div class="newCard" id="card-${obj.id}">
      <legend>Place of Interest</legend>
        <h2>Place: <span id="place-${obj.id}">${obj.placeId}</span></h2>
        <h3>Region or City: <span id="region-${obj.id}">${obj.location}</span></h3>
        <h3>Description</h3
        <ul>
            <li id="description-${obj.id}">${obj.locationDescription}</li>
        </ul>
        <h3>Price: <span id="price-${obj.id}">${obj.price}</span></h3>
        <p id="review-${obj.id}"></p>
        <div class="buttons">
        <button type="button" id="delete-${obj.id}">Delete</button>
        <button type="button" id="edit-${obj.id}">Edit</button>
        
        </div>

      </div>
      `;
    } else {
      return `
      <div class="newCard" id="card-${obj.id}">
      <legend>Located</legend>
        <h2>Place: <span id="place-${obj.id}">${obj.placeId}</span></h2>
        <h3>Region or City: <span id="region-${obj.id}">${obj.location}</span></h3>
        <h3>Description</h3
        <ul>
            <li id="description-${obj.id}">${obj.locationDescription}</li>
        </ul>
        <h3>Price: <span id="price-${obj.id}">${obj.price}</span></h3>
        <h3>Review</h3>
            <ul id="card-list">
            <li id="review-${obj.id}">${obj.review}</li>
            </ul>
        <div class="buttons">
        <button type="button" id="delete-${obj.id}">Delete</button>
        <button type="button" id="edit-${obj.id}">Edit</button>
        
        </div>

      </div>
      `;
    }
  }
};

export default htmlFactoryManager;


