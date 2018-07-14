# react-native-google-location-fetcher
Google Location Fetcher for iOS and Android React-Native apps

### Example

```jsx
import React from 'react';
import { View, Image } from 'react-native';
import {GoogleLocationFetcher} from 'react-native-google-location-fetcher'


export default class App extends Component {
  componentWillMount(){
    console.log(GoogleLocationFetcher.getCurrentLocation())
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


<!-- ### Installation

1. ```npm install react-native-google-places-autocomplete --save```
2. Get your [Google Places API keys](https://developers.google.com/places/) and enable "Google Places API Web Service" (NOT Android or iOS) in the console.
3. Enable "Google Maps Geocoding API" if you want to use GoogleReverseGeocoding for Current Location -->

