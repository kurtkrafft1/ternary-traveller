const htmlFactoryManager = {
  makeCardHtml: obj => {
    console.log("change placeID to place.place");
    if (obj.review === "") {
      return `
      <div class="newCard" id="card-${obj.id}">
        <h2>Place: ${obj.placeId}</h2>
        <h3>Region or City: ${obj.location}</h3>
        <h3>Description</h3
        <ul>
            <li id="card-list">${obj.locationDescription}</li>
        </ul>
        <h3>Price: ${obj.price}</h3>

      </div>
      `;
    } else {
      return `
        <div class="OldCard" id="card-${obj.id}">
          <h2>Place: ${obj.placeId}</h2>
          <h3>Region or City: ${obj.location}</h3>
          <h3>Description</h3
          <ul id="card-list">
              <li>${obj.locationDescription}</li>
          </ul>
          <h3>Price: ${obj.price}</h3>
            <h3>Review</h3>
            <ul id="card-list">
            <li>${obj.review}</li>
            </ul>
        </div>
        `;
    }
  }
};

export default htmlFactoryManager;
