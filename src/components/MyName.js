import React from "react";

function MyName({ name, nickname }) {
  return (
    <div>
      <h2>이름</h2>
      <p>본명: {name}</p>
      <p>닉네임: {nickname}</p>
    </div>
  );
}

export default MyName;
