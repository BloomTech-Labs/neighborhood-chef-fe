import React, { useRef } from 'react';
import { formPageOneStyles } from './../FormPageOne.styles';
import Geocoder from 'react-mapbox-gl-geocoder';
import SearchIcon from '@material-ui/icons/Search';
import { ErrorMessage } from '@hookform/error-message';

function MapboxGeocoder({ errors, setValues, values, validate }) {
  const styles = formPageOneStyles();

  const onSelected = (viewport, item) => {
    setValues((values) => {
      return { ...values, address: item.place_name, latitude: item.center[1], longitude: item.center[0] };
    });
    validate('address');
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => {
      return { ...values, address: e.target.value };
    });
  };

  return (
    <>
      <div className="createFormInputDiv">
        <Geocoder
          name="address"
          onSelected={onSelected}
          hideOnSelect={true}
          onChange={handleChange}
          inputValue={values.address}
          updateInputOnSelect={true}
          className={styles.geo}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          initialInputValue={values.address ? values.address : ''}
          inputComponent={(props) => <input {...props} placeholder="Address" />}
          queryParams={{
            country: 'us',
          }}
        />
        <SearchIcon color="disabled" className={styles.icon} />
      </div>
      {errors.address && errors.address.length && (
        <ErrorMessage
          name="address"
          errors={errors}
          message={errors.address[0]}
          render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
        />
      )}
    </>
  );
}

export default MapboxGeocoder;
