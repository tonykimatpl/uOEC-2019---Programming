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


var placeSearch, autocomplete;

  var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  function initAutocomplete() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'), {types: ['geocode']});

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete.setFields(['address_component']);

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
  }

  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
      }
    }
  }

  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle(
            {center: geolocation, radius: position.coords.accuracy});
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }