import React from 'react';
import { formPageOneStyles } from './../FormPageOne.styles';
import Geocoder from 'react-mapbox-gl-geocoder';
import SearchIcon from '@material-ui/icons/Search';
import { ErrorMessage } from '@hookform/error-message';

function MapboxGeocoder({ setValue, errors, clearErrors }) {
    const styles = formPageOneStyles();

    const onSelected = (viewport, item) => {
        setValue('address', item.place_name);
        setValue('latitude', item.center[1]);
        setValue('longitude', item.center[0]);
        clearErrors('address');
    };

    return (
        <>
            <div className="createFormInputDiv">
                <Geocoder
                    mapboxApiAccessToken={
                        process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
                    }
                    name="location"
                    onSelected={onSelected}
                    hideOnSelect={true}
                    queryParams={{
                        country: 'us',
                    }}
                    updateInputOnSelect={true}
                    inputComponent={(props) => (
                        <input {...props} placeholder="Address" />
                    )}
                    initialInputValue={
                        // values.address ? values.address : ''
                        ''
                    }
                    className={styles.geo}
                    onResult={(result) => {
                        console.log({ location: result });
                    }}
                />
                <SearchIcon color="disabled" className={styles.icon} />
            </div>
            <ErrorMessage
                name="address"
                errors={errors}
                render={({ message }) => (
                    <p style={{ color: 'crimson' }}>{message}</p>
                )}
            />
        </>
    );
}

export default MapboxGeocoder;
