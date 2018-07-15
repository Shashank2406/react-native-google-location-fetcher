# react-native-google-location-fetcher
Google Location Fetcher for iOS and Android React-Native apps

## PLANNED FEATURES

- [x] Get Location Coordinates
- [x] Reverse Geocoding from Google API
- [x] Get Location Name from Google API
- [x] Get any Location Coordinates from Google API
- [ ] Ask permission for location on Android


### Installation

1. ```npm install react-native-google-location-fetcher --save```
2. Get your [Google Places API keys](https://developers.google.com/places/) and enable "Google Places API Web Service" (NOT Android or iOS) in the console.
3. Enable "Google Maps Geocoding API" if you want to use GoogleReverseGeocoding for Current Location


### Example

```jsx
import React from 'react';
import { View, Image } from 'react-native';
import {GoogleLocationFetcher} from 'react-native-google-location-fetcher'


export default class App extends Component {
  componentWillMount(){
    // To initialise the module
    GoogleLocationFetcher.initialise(YOUR_API_KEY)
    // To get current Location coordinates and name
    console.log(GoogleLocationFetcher.getCurrentLocation())
    // To get location name from coordinates
    console.log(GoogleLocationFetcher.getLocationName(LATITUDE,LONGITUDE))
    // TO get location coordinates 
    console.log(GoogleLocationFetcher.getLocationCoordinates(ANY_LOCATION_NAME))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}


```


