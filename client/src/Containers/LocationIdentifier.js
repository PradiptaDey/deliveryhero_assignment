import React, { useState } from "react";
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

export default function LocationIdentifier() {
  const [autocomplete, setAutoComplete] = useState(null);
  const [outlet, setOutlet] = useState('');
  const mapContainerStyle = {
    width: '800px',
    height: '400px'
  };

  const center = {
    lat: 38.685,
    lng: -115.234
  }

  function onLoad (autocomp) {
    console.log('autocomplete: ', autocomp)

    setAutoComplete(autocomp);
  }

  async function onPlaceChanged () {
    console.log(autocomplete);
    if (autocomplete !== null) {
      const response = await fetch('/api/location/identifyOutletLocation?'+ new URLSearchParams({
        'latitude': autocomplete.getPlace().geometry.location.lat(),
        'longitude': autocomplete.getPlace().geometry.location.lng()
      }));
      const data = await response.json();
      setOutlet(data);
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  return (
    <div>
      <LoadScript
          googleMapsApiKey='Provide Your Own Key'
          libraries={["places"]}
      >
        <GoogleMap
            id="searchbox-example"
            mapContainerStyle={mapContainerStyle}
            zoom={2.5}
            center={center}
          >
            <Autocomplete
              onLoad={onLoad}
              onPlaceChanged={onPlaceChanged}
            >
              <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-120px"
                }}
              />
            </Autocomplete>
        </GoogleMap>
      </LoadScript>
      <div>
        { outlet.length > 0 && <p><b>{outlet}</b></p> }
      </div>
    </div>
  );
}