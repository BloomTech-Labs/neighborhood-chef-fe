import React from "react";

import Hashtag from "./Hashtag.js";
import Modifier from "./Modifier.js";
import AllergyWarning from "./advanced-options/AllergyWarning.js";
import DietaryWarning from "./advanced-options/DietaryWarning.js";
import Ingredient from "./advanced-options/Ingredient.js";

const DisplayEventModifiers = (props) => {
  return (
    <div className="modifierContainer">
      <div style={{ display: "flex", marginTop: "30px", width: "100%" }}>
        {props.hashtags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "45%",
              marginLeft: "3%",
            }}
          >
            <h4 style={{ fontWeight: "500", fontSize: "2rem" }}>Hashtags</h4>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexFlow: "row wrap",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "45%",
              marginLeft: "3%",
            }}
          >
            <h4 style={{ fontWeight: "500", fontSize: "2rem" }}>
              Modifications
            </h4>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexFlow: "row wrap",
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
      </div>

      <div style={{ display: "flex", marginTop: "30px", width: "100%" }}>
        {props.allergenList.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "45%",
              marginLeft: "3%",
            }}
          >
            <h4 style={{ fontWeight: "500", fontSize: "2rem" }}>Allergens</h4>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexFlow: "row wrap",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "45%",
              marginLeft: "3%",
            }}
          >
            <h4 style={{ fontWeight: "500", fontSize: "2rem" }}>
              Dietary Warnings
            </h4>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexFlow: "row wrap",
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

      {props.ingredientList.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "45%",
            marginTop: "30px",
            marginLeft: "3%",
          }}
        >
          <h4 style={{ fontWeight: "500", fontSize: "2rem" }}>
            Requested Ingredients
          </h4>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexFlow: "row wrap",
            }}
          >
            {props.ingredientList.map((item) => {
              return (
                <Ingredient
                  key={item.id}
                  item={item}
                  ingredientList={props.ingredientList}
                  setIngredientList={props.setIngredientList}
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
