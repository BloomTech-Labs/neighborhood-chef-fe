import React from "react";
import { Icon } from "@iconify/react";
import uploadOutlined from "@iconify/icons-ant-design/upload-outlined";
import { buttonStyles } from "../../../styles";
import Typography from "@material-ui/core/Typography";

import { chooseDefaultPicture } from "../../../utilities/functions";

const EventImageUpload = ({ values, setPhoto, title }) => {
  // console.log(`EventImageUpload -> values`, values);
  const classes = buttonStyles();
  const imageSizeLimit = 1500000;

  let photo = values.photo !== "null" && values.photo !== undefined ?
    values.photo : chooseDefaultPicture(values.category_id);
  // console.log('Initial photo', photo);
  
  const handleChange = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size > imageSizeLimit) {
        alert("File size is too large");
      } else {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          photo = values.photo = reader.result;
          setPhoto(photo);
          // console.log('Photo changed!', photo);
        };
      }
    }
  };

  return (
    <div className="createImgDiv">
      <Typography
        style={{ marginTop: "10px", marginBottom: "25px", textAlign: "left" }}
      >
        {title}
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <div>
          <input
            type="file"
            name="file"
            id="eventImageUpload"
            multiple={false}
            onChange={handleChange}
            accept="image/jpeg, image/gif, image/png, image/jpg"
            style={{ display: "none" }}
          />
          <label
            htmlFor="eventImageUpload"
            className={`${classes.root} ${classes.notActive}`}
            style={{ border: "1px solid rgba(0,0,0,.5)" }}
          >
            Upload
            <Icon
              icon={uploadOutlined}
              style={{ fontSize: "2.5rem", marginLeft: "10px" }}
            />
          </label>
        </div>

        {(
          <img
            onClick={() => setPhoto(null)}
            src={photo}
            alt="Event Img Upload"
            style={{
              maxWidth: "40%",
              maxHeight: "120px",
              borderRadius: "10px",
              border: "2px solid rgba(0,0,0,.4)",
              cursor: "pointer",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EventImageUpload;
