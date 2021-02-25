import React from 'react';

import Hashtag from '../hashtag/Hashtag.js';
import Modifier from '../modifier/Modifier.js';
import AllergyWarning from '../advanced-options/allergy-warning/AllergyWarning.js';
import DietaryWarning from '../advanced-options/dietary-warning/DietaryWarning.js';

const DisplayEventModifiers = (props) => {
  return (
    <div className='modifierContainer'>
      {props.hashtags.length > 0 && (
        <div className='individualModifierContainer'>
          <h4 style={{ fontWeight: '500', fontSize: '2rem' }}>Hashtags</h4>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexFlow: 'row wrap',
            }}
          >
            {props.hashtags.map((hashtag) => {
              return (
                <Hashtag
                  key={hashtag.id}
                  hashtag={hashtag}
                  hashtags={props.hashtags}
                  setHashtags={props.setHashtags}
                />
              );
            })}
          </div>
        </div>
      )}

      {props.modifiers.length > 0 && (
        <div className='individualModifierContainer'>
          <h4 style={{ fontWeight: '500', fontSize: '2rem' }}>Modifications</h4>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexFlow: 'row wrap',
            }}
          >
            {props.modifiers.map((modifier) => {
              return (
                <Modifier
                  key={modifier.id}
                  modifier={modifier}
                  modifiers={props.modifiers}
                  setModifiers={props.setModifiers}
                />
              );
            })}
          </div>
        </div>
      )}

      {props.allergenList.length > 0 && (
        <div className='individualModifierContainer'>
          <h4 style={{ fontWeight: '500', fontSize: '2rem' }}>
            Allergy Warnings
          </h4>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexFlow: 'row wrap',
            }}
          >
            {props.allergenList.map((allergy) => {
              return (
                <AllergyWarning
                  key={allergy.id}
                  allergy={allergy}
                  allergenList={props.allergenList}
                  setAllergenList={props.setAllergenList}
                />
              );
            })}
          </div>
        </div>
      )}

      {props.dietWarnings.length > 0 && (
        <div className='individualModifierContainer'>
          <h4 style={{ fontWeight: '500', fontSize: '2rem' }}>
            Dietary Warnings
          </h4>
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexFlow: 'row wrap',
            }}
          >
            {props.dietWarnings.map((diet) => {
              return (
                <DietaryWarning
                  key={diet.id}
                  diet={diet}
                  dietWarnings={props.dietWarnings}
                  setDietWarnings={props.setDietWarnings}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayEventModifiers;
