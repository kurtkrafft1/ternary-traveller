const formContainer = document.getElementById('form-container');
const mainDomEntries = {
    createMainForm: () => {
      const html = `
      <div class="form">
      <div class="q">
      <label for="placeDropdown">Where are you going:&nbsp;</label>
      <select id="placeDropdown" name="placeDropdown" required>
        <option value="pleaseSelect" selected="selected" disabled>--Please Select an option--</option>
        <option value="1">Italy</option>
        <option value="2">Switzerland</option>
        <option value="3">France</option>
      </select>
      </div>
      <div class="q">
      <label for="location">Any Particular region you're planning on travelling to:&nbsp; </label>
      <input type="text" name="location" id="location" placeholder="text goes here">
      </div>
      <div class="q">
      <label for="locationDescription">Location Description:&nbsp; </label>
      <textarea rows='2' cols="30" name="locationDescription" id="locationDescription" placeholder="entry goes here"></textarea>
      </div>
      <div class="q">
      <label for="cost">Price: &nbsp;</label>
      <input name = "cost" type="range" min="1" max="5" class="slider" id="priceRange">
     <div id="dollarSigns">$$$</div>
      </div>
      <input type="hidden" id="reviewSection" name="reviewSection">
      <div class="q">
      <button type="button" id="logButton">Log Post</button>
      </div>
      </div>
      `
      formContainer.innerHTML+= html;
    }, editCardFormHtml: (obj) => {

        if(obj.placeId === 1){
            return `
            <div class="edit-form">
            <div  class="e">
      <label for="placeDropdown">Where are you going:</label>
      <select id="placeDropdown-${obj.id}" name="placeDropdown">
        <option value="pleaseSelect"disabled>--Please Select an option--</option>
        <option value="1"  selected="selected" >Italy</option>
        <option value="2">Switzerland</option>
        <option value="3">France</option>
      </select>
      </div>
      <div class="e">
      <label for="location">Any Particular region you're planning on travelling to: </label>
      <input type="text" name="location" id="location-${obj.id}" value="${obj.location}">
      </div>
      <div class="e">
      <label for="locationDescription">Location Description: </label>
      <textarea rows='2' cols="10" name="locationDescription" id="locationDescription-${obj.id}">${obj.locationDescription}</textarea>
      </div>
      <div class="e">
      <label for="cost">Price: </label>
      <input name = "cost" type="range" min="1" max="5" value="${obj.price}" class="slider" id="priceRange-${obj.id}">
      </div>
      <div class="e">
      <label for="reviewSection">Review: </label>
      <textarea rows='2' cols="30" id="reviewSection-${obj.id}" name="reviewSection">${obj.review}</textarea>
      </div>

      <button type="button" id="submit-${obj.id}" class="submitBtn">Submit</button>
      </div>
            `
        } else if (obj.placeId ===2){
            return `
            <div class="edit-form">
            <div  class="e">
      <label for="placeDropdown">Where are you going:</label>
      <select id="placeDropdown-${obj.id}" name="placeDropdown">
        <option value="pleaseSelect"disabled>--Please Select an option--</option>
        <option value="1">Italy</option>
        <option value="2" selected="selected" >Switzerland</option>
        <option value="3">France</option>
      </select>
      </div>
      <div  class="e">
      <label for="location">Any Particular region you're planning on travelling to: </label>
      <input type="text" name="location" id="location-${obj.id}" value="${obj.location}">
      </div>
      <div  class="e">
      <label for="locationDescription">Location Description: </label>
      <textarea rows='2' cols="30" name="locationDescription" id="locationDescription-${obj.id}">${obj.locationDescription}</textarea>
      </div>
      <div  class="e">
      <label for="cost">Price: </label>
      <input name = "cost" type="range" min="1" max="5" value="${obj.price}" class="slider" id="priceRange-${obj.id}">
      </div>
      <div  class="e">
      <label for="reviewSection">Review: </label>
      <textarea rows='2' cols="30" id="reviewSection-${obj.id}" name="reviewSection">${obj.review}</textarea>
      </div>
      
      <button type="button" id="submit-${obj.id}" class="submitBtn">Submit</button>
     
      </div>
            `
        } else if(obj.placeId===3) {
            return `
            <div class="edit-form">
            <div  class="e">
            <label for="placeDropdown">Where are you going:</label>
            <select id="placeDropdown-${obj.id}" name="placeDropdown">
              <option value="pleaseSelect"disabled>--Please Select an option--</option>
              <option value="1">Italy</option>
              <option value="2">Switzerland</option>
              <option value="3" selected="selected" >France</option>
            </select>
            </div>
            <div  class="e">
            <label for="location">Any Particular region you're planning on travelling to: </label>
            <input type="text" name="location" id="location-${obj.id}" value="${obj.location}">
            </div>
            <div  class="e">
            <label for="locationDescription">Location Description: </label>
            <textarea rows='2' cols="30" name="locationDescription" id="locationDescription-${obj.id}">${obj.locationDescription}</textarea>
            </div>
            <div  class="e">
            <label for="cost">Price: </label>
            <input name = "cost" type="range" min="1" max="5" value="${obj.price}" class="slider" id="priceRange-${obj.id}">
            </div>
            <div  class="e">
            <label for="reviewSection">Review: </label>
            <textarea rows='2' cols="30" id="reviewSection-${obj.id}" name="reviewSection">${obj.review}</textarea>
            </div>
      
            <button type="button" id="submit-${obj.id}" class="submitBtn">Submit</button>

            </div>
            `
        }
    }
}

export default mainDomEntries;