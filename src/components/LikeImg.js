import React from "react";

function LikeImg({ imgSrcs, caption }) {
  return (
    <div>
      <h2>좋아하는 사진</h2>
      {imgSrcs && imgSrcs.map((src, index) => (
        <img key={index} src={src} alt={`좋아하는 이미지  ${index + 1}`} />
      ))}
      <p>{caption}</p>
    </div>
  );
}

export default LikeImg;