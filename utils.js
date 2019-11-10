function distanceFactor(distance) {
    if(distance < 100) {
        return 0;
    } else if(distance > 100 && distance < 500) {
        return 1;
    } else if(distance > 500 && distance < 2000) {
        return 2;
    } else {
        return 3;
    }
}

function recyclableFactor(boolean) {
    if(boolean) {
        return 0;
    }
    return 1;
}

function transportationFactor(type) {
    if(type === "Boat") {
        return 0.8;
    } else if(type === "Ground") {
        return 2;
    } else if(type === "Air") {
        return 3;
    } else if (type === "Rail") {
        return 1;
    }
    return 0;
}

function shippingFactor(type) {
    if(type === "Prime 1-day") {
        return 1.95
    } else if(type === "Prime") {
        return 1.8
    } else if(type === "Priority") {
        return 1.5
    } else if(type === "Expedited") {
        return 1.25
    } else if(type === "FEDEX Next-Day") {
        return 2
    }
    return 0.75
}

function weightFactor(weight) {
    if(weight < 5) {
        return 0
    } else if(weight > 5 && weight < 10) {
        return 0.5
    } else if(weight >10 && weight < 20) {
        return 0.75
    }
    return 1
}

function totalFactor() {
    let total = 0;
    for(i === 0; i<arguments.length; i++) {
        total += arguments[i]
    }
    return total;
}


var placeSearch, autocomplete1, autocomplete2;

  var componentForm = {
    distance: "distance"
  };

function initMap() {} // now it IS a function and it is in global

  function initAutocompleteOrigin() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete1 = new google.maps.places.Autocomplete(
        document.getElementById('origin'), {types: ['geocode']});

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete1.setFields(['address_component']);

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
  }

function initAutocompleteDestination() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete2 = new google.maps.places.Autocomplete(
        document.getElementById('destination'), {types: ['geocode']});

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete2.setFields(['address_component']);

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete2.addListener('place_changed', fillInAddress);

}



async function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = await autocomplete1.getPlace();
    var place2 = await autocomplete2.getPlace();


    document.getElementById('distance').innerText = await place2.latLng

}

function setText() {

}

  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        let circle = new google.maps.Circle(
            {center: geolocation, radius: position.coords.accuracy});
          autocomplete.setBounds(circle.getBounds());
      });
    }
  }