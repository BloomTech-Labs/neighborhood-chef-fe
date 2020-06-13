import React from "react";
import moment from "moment";

import DisplayEventModifiers from "./DisplayEventModifiers.js";
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
  setIngredientList,
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

        <DisplayEventModifiers
          hashtags={hashtags}
          setHashtags={setHashtags}
          modifiers={modifiers}
          setModifiers={setModifiers}
          allergenList={allergenList}
          setAllergenList={setAllergenList}
          dietWarnings={dietWarnings}
          setDietWarnings={setDietWarnings}
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
        />
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
