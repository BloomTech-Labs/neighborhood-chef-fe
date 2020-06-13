import React from "react";
import moment from "moment";

import Hashtag from "./Hashtag.js";
import Modifier from "./Modifier.js";
import AllergyWarning from "./advanced-options/AllergyWarning.js";
import DietaryWarning from "./advanced-options/DietaryWarning.js";
import { scrollToTop } from "./FormPageOne.js";
import { useDispatch } from "react-redux";
import { setPage } from "../../../utilities/actions";
import {
  convertTime,
  chooseDefaultPicture,
} from "../../../utilities/functions";

const FormPageThree = ({
  values,
  hashtags,
  setHashtags,
  modifiers,
  setModifiers,
  photo,
  allergenList,
  setAllergenList,
  dietWarnings,
  setDietWarnings,
  ingredientList,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid #F3F3F3",
          boxShadow: "0px 4px 15px rgba(179, 179, 179, 0.1)",
          borderRadius: "25px",
          marginTop: "40px",
          padding: "30px",
        }}
      >
        <div style={{ display: "flex", width: "100%", minHeight: "200px" }}>
          <img
            style={{
              maxWidth: "50%",
              border: "8px solid #58D473",
              borderRadius: "25px",
              maxHeight: "300px",
            }}
            src={photo || chooseDefaultPicture(values.category_id)}
            alt="Event Page 3 Img"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              marginLeft: "30px",
              textAlign: "left",
              width: "50%",
            }}
          >
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: "500",
                color: "#1A0F2C",
              }}
            >
              {values.title}
            </h3>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "1.6rem", color: "rgba(0, 0, 0, 0.5)" }}>
                {values.date && moment(values.date).format("MMM Do YYYY")}
                .&nbsp;
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  color: "#82DF96",
                  fontWeight: "500",
                }}
              >
                {convertTime(values.startTime)}&nbsp;
              </p>

              {values.endTime && (
                <>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    to&nbsp;
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      color: "#ea6565",
                      fontWeight: "500",
                    }}
                  >
                    {convertTime(values.endTime)}
                  </p>
                </>
              )}
            </div>
            <p style={{ fontSize: "1.6rem", color: "rgba(0, 0, 0, 0.5)" }}>
              {values.address}
            </p>
          </div>
        </div>

        <div className="modifierContainer">
          <div style={{ display: "flex", marginTop: "30px", width: "100%" }}>
            {hashtags.length > 0 && (
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
                  Hashtags
                </h4>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexFlow: "row wrap",
                  }}
                >
                  {hashtags.map((hashtag) => {
                    return (
                      <Hashtag
                        key={hashtag.id}
                        hashtag={hashtag}
                        hashtags={hashtags}
                        setHashtags={setHashtags}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {modifiers.length > 0 && (
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
                  {modifiers.map((modifier) => {
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
            )}
          </div>

          <div style={{ display: "flex", marginTop: "30px", width: "100%" }}>
            {allergenList.length > 0 && (
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
                  Allergens
                </h4>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexFlow: "row wrap",
                  }}
                >
                  {allergenList.map((allergy) => {
                    return (
                      <AllergyWarning
                        key={allergy.id}
                        allergy={allergy}
                        allergenList={allergenList}
                        setAllergenList={setAllergenList}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {dietWarnings.length > 0 && (
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
                  {dietWarnings.map((diet) => {
                    return (
                      <DietaryWarning
                        key={diet.id}
                        diet={diet}
                        dietWarnings={dietWarnings}
                        setDietWarnings={setDietWarnings}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <h3
        style={{
          fontSize: "1.8rem",
          fontWeight: "500",
          color: "#1A0F2C",
          margin: "60px 0",
        }}
      >
        Double check if your event details are correct. Once finished, click
        done.
      </h3>

      <div className="createFormButtonDiv">
        <button
          className="createRightBtn"
          onClick={() => {
            dispatch(setPage(2));
            scrollToTop();
          }}
        >
          Previous
        </button>
        <button className="createLeftBtn" type="submit">
          Done
        </button>
      </div>
    </>
  );
};

export default FormPageThree;
