/**
 *
 * GoogleLocationFetcher Module
 * @author Shashank Srivastava
 *
 */

import { Platform } from 'react-native';
import { CONFIG } from "./Utility/Config";

var googleAPIkey = '';

function initialise(key) {
  googleAPIkey = key
}

function getCurrentLocation() {
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
  const location = { currentLocation: {} }
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
        var locationName = this.getLocationName(position.coords.latitude,position.coords.longitude)
        currentLocation.address = locationName.address
        Object.assign(location.currentLocation, currentLocation)
      } else {
        console.warn("Failed to fetch location")
      }
    },
    (error) => {
      alert(error.message);
    },
    options
  );
  return location;
}

function getLocationCoordinates(address) {
  var coordinates={fetchedCoordinates:{}};
  const url = `${CONFIG.locationApiUrl.getGoogleCoordinates}address=${address}&key=${googleAPIkey}`
  fetch(url).then((res) => {
    if (res.status == 200) {
      res.json().then((resp) => {
        let fetchedCoordinates = {
          description: "Coordinates Fetched Successfully",
          geometry:resp.results[0].geometry.location
        };
        Object.assign(coordinates.fetchedCoordinates,fetchedCoordinates)
      })

    }
    else {
      console.warn("Error", res)
    }
  }, (error) => {
    console.warn("Error", error)
  })
  return coordinates;
}

function getLocationName(latitude,longitude) {
  var location={address:{}};
  const url = `${CONFIG.locationApiUrl.getGoogleAddress}latlng=${latitude},${longitude}&key=${googleAPIkey}`
  fetch(url).then((res) => {
    if (res.status == 200) {
      res.json().then((resp) => {
        console.log(resp)
        let fetchedLocationName = {
          description: "Location Name Fetched Successfully",
          address:resp.results[0].formatted_address
        };
        Object.assign(location.address,fetchedLocationName)
      })
    }
    else {
      console.warn("Error", res)
    }
  }, (error) => {
    console.warn("Error", error)
  })
  return location;
}


var GoogleLocationFetcher = {
  initialise: initialise,
  getCurrentLocation: getCurrentLocation,
  getLocationCoordinates: getLocationCoordinates,
  getLocationName:getLocationName
}


module.exports = {
  GoogleLocationFetcher
};
