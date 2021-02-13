import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  const [num, setNum] = useState(0);
  const [flag, setFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFlag = () => {
    setFlag(!flag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {flag && <p>maiko!</p>}
    </>
  );
};

export default App;
