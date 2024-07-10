import React from "react";

const App: React.FC = () => {
  // 스타일 객체를 변수로 분리하여 재사용 가능하게 정의
  const containerStyles: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const loginStyles: React.CSSProperties = {
    width: "30vw",
    height: "50vh",
    backgroundColor: "#333",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputStyles: React.CSSProperties = {
    width: "80%",
    height: "24px",
    backgroundColor: "#D9D9D9",
    margin: "10px 0",
    textAlign: "center",
  };

  const submitStyles: React.CSSProperties = {
    width: "80%",
    height: "24px",
    backgroundColor: "#9AFF92",
    margin: "10px 0",
    textAlign: "center",
    cursor: "pointer",
  };

  // 클릭 이벤트 핸들러를 함수로 따로 분리하여 관리
  const loginSubmit = () => {
    alert("Hello");
  };

  return (
    <div style={containerStyles}>
      <div id="login" style={loginStyles}>
        <div id="login-input" style={inputStyles}>
          Input
        </div>
        <div id="login-submit" style={submitStyles} onClick={loginSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default App;
