import React from "react";
import moment from "moment";

import Hashtag from "./Hashtag.js";
import Modifier from "./Modifier.js";
import { scrollToTop } from "./FormPageOne.js";
import { convertTime } from "../../../utilities/functions";

const FormPageThree = ({
  setPage,
  values,
  hashtags,
  setHashtags,
  removeHashtag,
  modifiers,
  setModifiers,
  photo,
}) => {
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
        }}
      >
        {photo ? (
          <div style={{ display: "flex", width: "100%", minHeight: "200px" }}>
            <img
              style={{
                maxWidth: "50%",
                border: "8px solid #58D473",
                borderRadius: "25px",
                maxHeight: "300px",
              }}
              src={photo}
              alt="event"
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
                  fontSize: "1.8rem",
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
        ) : (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "spaceEvenly",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                marginLeft: "30px",
                textAlign: "left",
                width: "50%",
                height: "150px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
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
        )}

        <div
          style={{
            display: "flex",
            width: "100%",
            margin: "30px 0",
          }}
        >
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
              <p style={{ fontWeight: "500", fontSize: "1.6rem" }}>Hashtags</p>
              <div
                style={{ display: "flex", width: "100%", flexFlow: "row wrap" }}
              >
                {hashtags.map((hashtag) => {
                  return (
                    <Hashtag
                      key={hashtag.id}
                      hashtag={hashtag}
                      removeModifier={removeHashtag}
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
              <p style={{ fontWeight: "500", fontSize: "1.6rem" }}>
                Modifications
              </p>
              <div
                style={{ display: "flex", width: "100%", flexFlow: "row wrap" }}
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
            setPage(2);
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
