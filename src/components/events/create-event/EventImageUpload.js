import React from "react";
import { Icon } from "@iconify/react";
import uploadOutlined from "@iconify/icons-ant-design/upload-outlined";
import { buttonStyles } from "../../../styles";
import Typography from "@material-ui/core/Typography";

const EventImageUpload = ({ photo, setPhoto, title }) => {
  const classes = buttonStyles();
  const imageSizeLimit = 1500000;

  const handleChange = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size > imageSizeLimit) {
        alert("File size is too large");
      } else {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPhoto(reader.result);
        };
      }
    }
  };

  return (
    <div className="createImgDiv">
      <Typography style={{ margin: "10px 0" }}>{title}</Typography>
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
            accept="image/jpeg,image/gif,image/png, image/jpg"
            style={{ display: "none" }}
          />
          <label
            htmlFor="eventImageUpload"
            className={`${classes.root} ${classes.active}`}
          >
            Upload
            <Icon
              icon={uploadOutlined}
              style={{ fontSize: "2.5rem", marginLeft: "10px", color: "white" }}
            />
          </label>
        </div>

        {photo && (
          <img
            onClick={() => setPhoto(null)}
            src={photo}
            alt="event"
            style={{
              maxWidth: "40%",
              maxHeight: "120px",
              borderRadius: "10px",
              border: "4px solid #82df96",
              cursor: "pointer",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EventImageUpload;
