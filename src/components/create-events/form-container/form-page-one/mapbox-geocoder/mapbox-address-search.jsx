import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { separateOperations } from 'graphql';

export default function MapboxAddressSearch({
  setData,
  handleBlur,
  open,
  setOpen,
  mostRecentlyChosenAddress,
}) {
  const [addresses, setAddresses] = useState([]);
  const [innerData, setInnerData] = useState([]);

  const handleChange = async (e) => {
    console.log(addresses);
    if (e && e.type === 'change') {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${
            e.target.value ? e.target.value.split(' ').join('%20') : 'random'
          }.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
        );

        setInnerData(
          response.data.features.map((feature) => {
            return {
              latitude: Number(feature.center[1].toFixed(6)),
              longitude: Number(feature.center[0].toFixed(6)),
              address: feature.place_name,
            };
          })
        );
        setAddresses(response.data.features.map((feature) => feature.place_name));
      } catch (err) {
        console.dir(err);
      }
    } else if (e && e.type === 'click') {
      setOpen(false);
    }
  };

  const handleClose = (e) => {
    e.persist();
    setData(innerData.filter((location) => location.address === e.target.textContent)[0]);
  };

  const handleClick = () => {
    console.log('here');
    setOpen(true);
  };

  return (
    <Autocomplete
      open={open}
      id="mapbox-geocoder"
      options={addresses}
      onInputChange={handleChange}
      onClose={handleClose}
      filterOptions={(options) => options}
      defaultValue={mostRecentlyChosenAddress}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            style={{ width: 300 }}
            type="text"
            {...params.inputProps}
            onClick={handleClick}
            onBlur={handleBlur}
            placeholder="Address"
          />
        </div>
      )}
    />
  );
}
