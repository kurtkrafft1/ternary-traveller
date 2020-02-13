const formContainer = document.getElementById('form-container');
const mainDomEntries = {
    createMainForm: () => {
      const html = `
      <div class="form">
      <div>
      <label for="placeDropdown">Where are you going:</label>
      <select id="placeDropdown" name="placeDropdown">
        <option value="pleaseSelect" disabled>--Please Select an option--</option>
        <option value="1">Italy</option>
        <option value="2">Switzerland</option>
        <option value="3">France</option>
      </select>
      </div>
      <div>
      <label for="location">Any Particular region you're planning on travelling to: </label>
      <input type="text" name="location" id="location" placeholder="text goes here">
      </div>
      <div>
      <label for="locationDescription">Location Description: </label>
      <textarea rows='4' cols="10" name="locationDescription" id="locationDescription" placeholder="entry goes here"></textarea>
      </div>
      <div>
      <label for="cost">Price: </label>
      <input name = "cost" type="range" min="1" max="5" value="50" class="slider" id="priceRange">
      </div>
      <div>
      <label for="reviewSection">Review: </label>
      <textarea rows='4' cols="10" id="reviewSection" name="reviewSection" placeholder="Review goes here..."></textarea>
      </div>
      </div>
      `
      formContainer.innerHTML+= html;
    }
}

export default mainDomEntries;