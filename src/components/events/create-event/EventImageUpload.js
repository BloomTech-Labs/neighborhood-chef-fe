import React from "react";
import { Icon } from "@iconify/react";
import uploadOutlined from "@iconify/icons-ant-design/upload-outlined";

const EventImageUpload = ({ photo, setPhoto }) => {
  const handleChange = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size > 1500000) {
        alert("File size is too large");
      }
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="createImgDiv">
      <h5
        style={{
          textAlign: "left",
          fontSize: "1.8rem",
          marginLeft: "10px",
          fontWeight: "normal",
        }}
      >
        Upload a main picture for your event page.
      </h5>
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
            className={`imgUploadDiv${photo ? " imgUploadDivActive" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            Upload{" "}
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
              border: "8px solid #82df96",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EventImageUpload;
