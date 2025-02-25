import React from "react";

function MyMbti({ mbti, description }) {
  return (
    <div>
      <h2>내 MBTI</h2>
      <p>제 MBTI는 <strong>{mbti}</strong> 입니다.</p>
      <p>{description}</p>
    </div>
  );
}

export default MyMbti;