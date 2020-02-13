const objectManager = {
  createObjectFromForm: () => {
    const place = document.getElementById("placeDropdown");
    const location = document.getElementById("location");
    const locationDescription = document.getElementById("locationDescription");
    const price = document.getElementById("priceRange");
    const review = document.getElementById("reviewSection");
    const newObj = {
      placeId: place.value,
      location: location.value,
      locationDescription: locationDescription.value,
      price: price.value,
      review: review.value
    };
    return newObj;
  },
  clearFormField: () => {
    const place = document.getElementById("placeDropdown");
    const location = document.getElementById("location");
    const locationDescription = document.getElementById("locationDescription");
    const price = document.getElementById("priceRange");
    const review = document.getElementById("reviewSection");
    place.value="";
    location.value="";
    locationDescription.value="";
    price.value="";
    review.value="";
  }
};
export default objectManager;
