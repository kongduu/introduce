import React from "react";

function LikeImg({ imgSrcs, caption }) {
  return (
    <div className="like-img-container">
      {imgSrcs.map((src, index) => (
        <img key={index} src={src} alt={`좋아하는 이미지 ${index + 1}`} className="like-img" />
      ))}
      <p>{caption}</p>
    </div>
  );
}

export default LikeImg;
