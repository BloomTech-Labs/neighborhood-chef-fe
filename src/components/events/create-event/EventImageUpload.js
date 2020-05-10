import React from 'react';

const EventImageUpload = ({ setPhoto }) => {
  const handleChange = (e) => {
    const type = e.target.files[0].type;
    if (type === 'image/png' || type === 'image/jpeg') {
      setPhoto(e.target.files[0]);
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
      <div className="imgUploadDiv" style={{}}>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          style={{ fontSize: '1.6rem' }}
        />
      </div>
    </div>
  );
};

export default EventImageUpload;
