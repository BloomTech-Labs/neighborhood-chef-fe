import React, { useState, useEffect } from 'react';

import strollerIcon from '@iconify/icons-vs/stroller';
import baselineOutdoorGrill from '@iconify/icons-ic/baseline-outdoor-grill';
import bottleWine from '@iconify/icons-mdi/bottle-wine';
import dogIcon from '@iconify/icons-whh/dog';
import icon18Plus from '@iconify/icons-uil/18-plus';
import foodApple from '@iconify/icons-mdi/food-apple';

import EventImageUpload from '../../../shared/event-image-upload/EventImageUpload';
import Modifier from './modifier/Modifier.jsx';
import AddHashtag from './add-hashtag/AddHashtag.jsx';
import { scrollToTop } from '../form-page-one/FormPageOne.jsx';
import AdvancedOptions from './advanced-options/AdvancedOptions.jsx';
import { showOptions } from '../../../../utilities/functions';
import Typography from '@material-ui/core/Typography';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { buttonStyles } from '../../CreateEvent.styles';
import { formPageTwoStyles } from './FormPageTwo.styles';

export const modifierData = [
  { id: 1, title: 'BBQ', icon: baselineOutdoorGrill, active: false },
  { id: 2, title: 'Kid-Friendly', icon: strollerIcon, active: false },
  { id: 3, title: 'Alcohol Accepted', icon: bottleWine, active: false },
  { id: 4, title: '18+ Event', icon: icon18Plus, active: false },
  { id: 5, title: 'Pet-Friendly', icon: dogIcon, active: false },
  { id: 6, title: 'Vegetarian', icon: foodApple, active: false },
];

const FormPageTwo = (props) => {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(
    showOptions(props.values.allergenWarnings, props.values.dietaryWarnings)
  );
  const btnStyles = buttonStyles();
  const styles = formPageTwoStyles();

  return (
    <>
      <div className={styles.container}>
        <EventImageUpload
          values={props.values}
          avatar={props.values.photo}
          setValues={props.setValues}
          title="Upload a main picture for your event page"
        />
        <AddHashtag values={props.values} setValues={props.setValues} />
        <div>
          <Typography className={styles.modifierLabel}>Pick modifiers for your event.</Typography>
          <div className={styles.modifierContainer}>
            {modifierData
              .map((modifier) => {
                if (props.values.modifiers.includes(modifier.title)) {
                  return { ...modifier, active: true };
                } else {
                  return modifier;
                }
              })
              .map((modifier) => {
                return (
                  <Modifier
                    key={modifier.id}
                    modifier={modifier}
                    values={props.values}
                    setValues={props.setValues}
                  />
                );
              })}
          </div>
        </div>
        <div className={styles.pointer} onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}>
          {showAdvancedOptions ? (
            <Typography className={styles.typography}>
              Click here to hide additional options <ArrowDropDownIcon />
            </Typography>
          ) : (
            <Typography className={styles.typography}>
              Click here to show additional options <ArrowRightIcon />
            </Typography>
          )}
        </div>
        {showAdvancedOptions && (
          <>
            <AdvancedOptions values={props.values} setValues={props.setValues} />
          </>
        )}
      </div>

      <div className={btnStyles.buttonContainer}>
        <button
          className={btnStyles.leftBtn}
          onClick={() => {
            props.setStepper(1);
            scrollToTop();
          }}
        >
          Previous
        </button>
        <button
          className={btnStyles.rightBtn}
          onClick={() => {
            props.setStepper(3);
            scrollToTop();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FormPageTwo;
