
import { Platform } from 'react-native';

function getCurrentLocation(){
  let options = {
    enableHighAccuracy: false,
    timeout: 20000,
    maximumAge: 1000
  };

  if (Platform.OS === 'android') {
    options = {
      enableHighAccuracy: true,
      timeout: 20000
    }
  }
const  location = { currentLocation: {} }  
navigator.geolocation.getCurrentPosition(
    (position) => {
      if (position) {
        let currentLocation = {
          description: "Current Location Fetched Successfully",
          geometry: {
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }
        };
        Object.assign(location.currentLocation, currentLocation)
      } else {
        // this._requestNearby(position.coords.latitude, position.coords.longitude);
      }
    },
    (error) => {
      alert(error.message);
    },
    options
  );
  return location;
}

var GoogleLocationFetcher = {
  getCurrentLocation: getCurrentLocation
}


module.exports = {
  GoogleLocationFetcher
};
