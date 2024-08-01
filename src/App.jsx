import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

import { getEmotionImage } from "./util/get-emotion-image";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// a태그 대신 Link 컴포넌트 사용하기
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  // 이미지 최적화 : 이미지를 많이 불러올 필요가 없을 때 사용하는 것이 바람직함
  // -> 메모리에 저장되어 용량&시간 이슈 해결
  // import를 통해 assets에서 이미지를 불러오면 데이터 URI로 포맷된다.(암호문 처럼)
  // 이미지와 같은 외부 데이터들을 문자열 형태로 브라우저의 메모리에 캐싱하기 위해 사용
  // public에서 url로 불러온다면 새로고침할 때마다 매번 불러옴

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
