import React, { useEffect } from 'react';
import { formPageOneStyles } from './../FormPageOne.styles';
import Geocoder from 'react-mapbox-gl-geocoder';
import SearchIcon from '@material-ui/icons/Search';
import { ErrorMessage } from '@hookform/error-message';

function MapboxGeocoder({ setValue, errors, clearErrors, getValues, register }) {
  const styles = formPageOneStyles();

  const onSelected = (viewport, item) => {
    setValue('address', item.place_name);
    setValue('latitude', item.center[1]);
    setValue('longitude', item.center[0]);
    clearErrors('address');
  };

  useEffect(() => {
    register('address', {
      required: {
        value: true,
        message: "'Address' is a required field",
      },
    });
  }, []);

  const handleChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  return (
    <>
      <div className="createFormInputDiv">
        <Geocoder
          name="address"
          onSelected={onSelected}
          hideOnSelect={true}
          onChange={handleChange}
          inputValue={getValues('address')}
          updateInputOnSelect={true}
          className={styles.geo}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          initialInputValue={getValues('address') ? getValues('address') : ''}
          inputComponent={(props) => <input {...props} placeholder="Address" />}
          queryParams={{
            country: 'us',
          }}
        />
        <SearchIcon color="disabled" className={styles.icon} />
      </div>
      <ErrorMessage
        name="address"
        errors={errors}
        render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
      />
    </>
  );
}

export default MapboxGeocoder;
