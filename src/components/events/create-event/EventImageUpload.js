import React from 'react';

const EventImageUpload = ({ setPhoto }) => {
  const handleChange = (e) => {
    const type = e.target.files[0].type;
    if (type === 'image/png' || type === 'image/jpeg' || type === 'image/jpg') {
      setPhoto(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  return (
    <div className="createImgDiv">
      <h5
        style={{
          textAlign: 'left',
          fontSize: '1.8rem',
          marginLeft: '10px',
          fontWeight: 'normal',
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
          style={{ fontSize: '1.6rem' }}
        />
      </div>
    </div>
  );
};

export default EventImageUpload;
