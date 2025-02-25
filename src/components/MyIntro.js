import React from "react";

function MyIntro({ intro, message }) {
  return (
    <div>
      <h2>내 소개</h2>
      <p>{intro}</p>
      <p><strong>{message}</strong></p>
    </div>
  );
}

export default MyIntro;