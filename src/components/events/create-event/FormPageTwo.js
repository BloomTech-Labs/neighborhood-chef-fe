import React, { useState } from "react";

import strollerIcon from "@iconify/icons-vs/stroller";
import baselineOutdoorGrill from "@iconify/icons-ic/baseline-outdoor-grill";
import bottleWine from "@iconify/icons-mdi/bottle-wine";
import dogIcon from "@iconify/icons-whh/dog";
import icon18Plus from "@iconify/icons-uil/18-plus";
import foodApple from "@iconify/icons-mdi/food-apple";

import EventImageUpload from "./EventImageUpload.js";
import Modifier from "./Modifier.js";
import AddHashtag from "./AddHashtag.js";
import { scrollToTop } from "./FormPageOne.js";
import AdvancedOptions from "./advanced-options/AdvancedOptions.js";
import { useDispatch } from "react-redux";
import { setPage } from "../../../utilities/actions";
import { showOptions } from "../../../utilities/functions";
import Typography from "@material-ui/core/Typography";

export const modifierData = [
  { id: 1, title: "BBQ", icon: baselineOutdoorGrill, active: false },
  { id: 2, title: "Kid-Friendly", icon: strollerIcon, active: false },
  { id: 3, title: "Alcohol Accepted", icon: bottleWine, active: false },
  { id: 4, title: "18+ Event", icon: icon18Plus, active: false },
  { id: 5, title: "Pet-Friendly", icon: dogIcon, active: false },
  { id: 6, title: "Vegetarian", icon: foodApple, active: false },
];

const FormPageTwo = ({
  hashtags,
  setHashtags,
  removeHashtag,
  modifiers,
  setModifiers,
  photo,
  setPhoto,
  allergenList,
  setAllergenList,
  dietWarnings,
  setDietWarnings,
  ingredientList,
  setIngredientList,
}) => {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(
    showOptions(allergenList, dietWarnings)
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="createFormPage2Container">
        <EventImageUpload
          photo={photo}
          setPhoto={setPhoto}
          title="Upload a main picture for your event page"
        />
        <AddHashtag
          hashtags={hashtags}
          setHashtags={setHashtags}
          removeHashtag={removeHashtag}
        />
        <div>
          <Typography>Pick modifiers for your event.</Typography>
          <div style={{ display: "flex", width: "100%", flexFlow: "row wrap" }}>
            {modifierData.map((modifier) => {
              return (
                <Modifier
                  key={modifier.id}
                  modifier={modifier}
                  modifiers={modifiers}
                  setModifiers={setModifiers}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
        >
          <Typography style={{ marginTop: "15px" }}>
            Click here for more options
          </Typography>
        </div>
        {showAdvancedOptions && (
          <>
            <AdvancedOptions
              allergenList={allergenList}
              setAllergenList={setAllergenList}
              dietWarnings={dietWarnings}
              setDietWarnings={setDietWarnings}
              ingredientList={ingredientList}
              setIngredientList={setIngredientList}
            />
          </>
        )}
      </div>

      <div className="createFormButtonDiv">
        <button
          className="createRightBtn"
          onClick={() => {
            dispatch(setPage(1));
            scrollToTop();
          }}
        >
          Previous
        </button>
        <button
          className="createLeftBtn"
          onClick={() => {
            dispatch(setPage(3));
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
