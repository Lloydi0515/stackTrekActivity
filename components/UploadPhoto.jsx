import React, { useState } from "react";

const UploadPhoto = () => {
  const [image, setImage] = useState({});

  const fileOnChange = (e) => {
    setImage(e.target.files[0]);
    console.log(image);
  };

  const sendImage = async () => {
    try {
      let formData = new FormData();

      formData.append("my-image", image);

      const newImage = await fetch(`http://localhost:8000/upload`, {
        method: "POST",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        body: formData,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <input type="file" onChange={fileOnChange}></input>
      <button className="button-upload btn btn-primary" onClick={sendImage}>
        Upload
      </button>
    </div>
  );
};

export default UploadPhoto;
