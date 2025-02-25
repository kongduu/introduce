import React from "react";
import MyIntro from "./components/MyIntro";
import MyMbti from "./components/MyMbti";
import MyName from "./components/MyName";
import LikeImg from "./components/LikeImg";
import "./App.css";

function App() {
  const myInfo = {
    name: "최지예",
    nickname: "돼졔",
    intro: "안녕하세요! 리액트 공부중인 학생입니다.",
    message: "실력있는 풀스택 개발자가 되고 싶어요!",
    mbti: "ISTP",
    description: "취미: 운동 및 게임🕹️",
    imgSrcs: [
      "https://cdn.animaltoc.com/news/photo/202410/1409_6515_3838.jpg",
      "https://image.dongascience.com/Photo/2023/02/d696b708b68e39b21f953622da81dfee.jpg",
    ],
    caption: "동물도 좋아합니다! 제가 키웠던 동물은 고양이와 고슴도치입니다.",
  };

  return (
    <div className="App">
      <h1>About Me</h1>
      <br />
      <div className="container">
        <MyName name={myInfo.name} nickname={myInfo.nickname} />
        <MyIntro intro={myInfo.intro} message={myInfo.message} />
        <MyMbti mbti={myInfo.mbti} description={myInfo.description} />
        <LikeImg imgSrcs={myInfo.imgSrcs} caption={myInfo.caption} />
      </div>
    </div>
  );
}

export default App;