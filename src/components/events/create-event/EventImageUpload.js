import React from "react";

const EventImageUpload = ({ photo, setPhoto }) => {
  const handleChange = (e) => {
    if (e.target.files[0].size > 1500000) {
      alert("File size is too large");
      return;
    }

    const type = e.target.files[0].type;
    if (type === "image/png" || type === "image/jpeg" || type === "image/jpg") {
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
      <div className="imgUploadDiv">
        <input
          type="file"
          name="file"
          multiple={false}
          accept="image/*"
          onChange={handleChange}
          style={{ fontSize: "1.6rem" }}
        />
      </div>
    </div>
  );
};

export default EventImageUpload;
