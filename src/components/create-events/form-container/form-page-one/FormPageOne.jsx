import React from 'react';
import { useHistory } from 'react-router-dom';

import TitleInput from './title-input/title-input';
import DescriptionInput from './description-input/description-input';
import DateInput from './date-input/date-input';
import TimeInputs from './time-inputs/time-inputs';
import CatagoryInput from './category-input/catagory-input';
import MapboxGeocoder from './mapbox-geocoder/mapbox-geocoder';

import { formPageOneStyles } from './FormPageOne.styles';
import { buttonStyles } from '../../CreateEvent.styles';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const FormPageOne = ({
    register,
    control,
    setValue,
    setStepper,
    errors,
    getValues,
    setError,
    clearErrors,
}) => {
    const { push } = useHistory();
    const styles = formPageOneStyles();
    const btnStyles = buttonStyles();

    const validateAndTurnPage = () => {
        validateRequiredValues();
        if (!Object.keys(errors).length) {
            setStepper(2);
            scrollToTop();
        }
    };

    const validateRequiredValues = () => {
        const currentValues = getValues();

        const inputNames = [
            'title',
            'description',
            'date',
            'startTime',
            'address',
        ];

        inputNames.forEach((name) => {
            if (!currentValues[name]) {
                setError(name, {
                    type: 'manual',
                    message: `${name} is a required field`,
                });
            }
        });
    };

    return (
        <>
            <div className={styles.root}>
                <div className={styles.leftContainer}>
                    <TitleInput register={register} errors={errors} />
                    <MapboxGeocoder
                        setValue={setValue}
                        errors={errors}
                        clearErrors={clearErrors}
                    />
                    <DescriptionInput register={register} errors={errors} />
                </div>

                <div className={styles.rightContainer}>
                    <DateInput control={control} errors={errors} />
                    <TimeInputs control={control} errors={errors} />
                    <CatagoryInput register={register} />
                </div>
            </div>

            <div className={btnStyles.buttonContainer}>
                <button
                    className={btnStyles.leftBtn}
                    onClick={() => {
                        push('/dashboard');
                    }}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    disabled={Object.keys(errors).length}
                    className={btnStyles.rightBtn}
                    onClick={validateAndTurnPage}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default FormPageOne;
