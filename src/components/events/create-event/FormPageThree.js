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

const FormPageThree = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="formPageThreeContainer">
      <h3>
        Double check if your event details are correct. Once finished, click
        done.
      </h3>
      <div className="formPageThreeCardContainter">
        <div className="pageThreeCard">
          <img
            className="pageThreeImg"
            src={props.photo || chooseDefaultPicture(props.values.category_id)}
            alt="Event Page 3 Img"
          />

          <div className="pageThreeText">
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: "500",
                color: "#1A0F2C",
                margin: "0",
              }}
            >
              {props.values.title}
            </h3>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "1.6rem", color: "rgba(0, 0, 0, 0.5)" }}>
                {props.values.date &&
                  moment(props.values.date).format("MMM Do YYYY")}
                .&nbsp;
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  color: "#82DF96",
                  fontWeight: "500",
                }}
              >
                {convertTime(props.values.startTime)}&nbsp;
              </p>

              {props.values.endTime && (
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
                    {convertTime(props.values.endTime)}
                  </p>
                </>
              )}
            </div>
            <p style={{ fontSize: "1.6rem", color: "rgba(0, 0, 0, 0.5)" }}>
              {props.values.address}
            </p>
          </div>
        </div>

        <DisplayEventModifiers
          hashtags={props.hashtags}
          setHashtags={props.setHashtags}
          modifiers={props.modifiers}
          setModifiers={props.setModifiers}
          allergenList={props.allergenList}
          setAllergenList={props.setAllergenList}
          dietWarnings={props.dietWarnings}
          setDietWarnings={props.setDietWarnings}
          ingredientList={props.ingredientList}
          setIngredientList={props.setIngredientList}
          deletedIngredientsList={props.deletedIngredientsList}
          setDeletedIngredientsList={props.setDeletedIngredientsList}
        />
      </div>

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
    </div>
  );
};

export default FormPageThree;
